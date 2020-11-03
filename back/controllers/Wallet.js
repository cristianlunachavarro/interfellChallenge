const { Wallet, User, Transaction } = require('../models/index');
const uuid = require('uuid');
const bcrypt = require('bcryptjs');
const { sendEmail, sendConfirmEmail} = require('../controllers/NodeMailer')

function randomDigits(min, max) {
	return (min + Math.floor((max - min) * Math.random())).toString();
}

const reloadWallet = (req, res) => {
	console.log('Req', req.body)
	User.findOne({
		username: req.body.username,
		document: req.body.document,
	})
		.then((user) => {
			if (!user) {
				res.sendStatus(400);
			}
			Wallet.findOne({
				user,
			})
				.populate('user')
				.then((wallet) => {
					const data = {
						amount: req.body.amount,
						type: 'deposito',
						status: 'done',
						wallet: wallet,
						eid: uuid.v4(),
					};
					Transaction.create(data).then((transaction) => {
						wallet.amount += transaction.amount;
						wallet.save();
						const info = {
							walletTotal: wallet.amount,
							amountLoaded: transaction.amount,
							accountNumber: wallet.number
						}
						res.json(info).status(202);
					});
				});
		})
		.catch((err) => {
			res.status(400);
			res.send({ message: err.message, code: 400 });
		});
};

const chargeWallet = (req, res) => {
	User.findOne({
		username: req.body.username,
		document: req.body.document,
	})
		.then((user) => {
			if(!user){
				res.sendStatus(400)
			}
			Wallet.findOne({
				user,
			})
				.populate('user')
				.then((wallet) => {
					if(wallet.amount < req.body.amount){
						res.status(400);
						res.send({code: 410})
						return;
					}
					bcrypt.genSalt(10).then((salt) => {
						const codigo = randomDigits(0, 999999);
						bcrypt.hash(codigo, salt).then((hash) => {
							const data = {
								amount: req.body.amount,
								type: 'retiro',
								status: 'pending',
								eid: uuid.v4(),
								wallet: wallet,
								codigo: hash,
							};
							Transaction.create(data).then((transaction) => {
								const response = {
									codigo: codigo,
									eid: transaction.eid,
								};
								sendEmail(user, response)
								res.json({ response }).status(202);
							});
						});
					});
				});
		})
		.catch((err) => {
			res.status(400);
			res.send({ message: err.message, code: 411 });
		});
};

const confirmChargeWallet = (req, res) => {
	User.findOne({
		username: req.body.username,
	})
		.then((user) => {
			if(!user){
				res.sendStatus(400)
			}
			Transaction.findOne({
				eid: req.body.eid,
				status: 'pending',
			})
				.populate('wallet')
				.then((transaction) => {
			               console.log('TRAXXX', transaction)
					bcrypt.compare(req.body.codigo, transaction.codigo)
					.then((result) => {
						if (result === true) {
							transaction.status = 'done';
							transaction.wallet.amount -= transaction.amount;
							transaction.wallet.save();
							transaction.save();
							const response = {
								mensaje: 'Se aprobó el pago realizado',
								saldo: transaction.wallet.amount,
							};
							sendConfirmEmail(user, response)
							res.json(response).status(202);
						}
					});
				});
		})
		.catch((err) => {
			res.status(400);
			res.send({ message: err.message, code: 400 });
		});
};

const getWalletInfo = (req, res, next) => {
	User.findOne({ 
		username: req.body.username
	})
	.then(user => {
		Wallet.findOne({user: user})
		.then(wallet => {
			Transaction.find({ 
				wallet: wallet, 
				status: { $ne: 'pending' } 
			})
			.limit(5)
			.sort({ dateTime: -1 })
			.then(transactions => {
				res.json({
					amount: wallet.amount,
					transactions
				})
			})
		})
	})
}

module.exports = { reloadWallet, chargeWallet, confirmChargeWallet, getWalletInfo };
