const { User, Wallet } = require('../models/index');
const uuid = require('uuid');
const Transaction = require('../models/Transactions');

const userRegister = (req, res, next) => {
	User.create(req.body)
		.then((user) => {
			const data = {
				number: uuid.v4(),
				amount: 0,
				user,
			};
			Wallet.create(data).then((wallet) => {
				res.json({ user, wallet }).status(201);
			});
		})
		.catch((err) => {
			res.status(400);
			res.send({ message: err.message, code: 400 });
		});
};

const userLogin = (req, res, next) => {
	console.log('Usuario logueado');
	// Retrieve Wallet
	Wallet.findOne({user: req.user}).then(wallet => {
		Transaction.find({ wallet: wallet }).then(transactions => {
			res.json({
				user: user,
				saldo: wallet.amount,
				last_transactions: transactions
			})
		})
	})
	//res.json(req.user);
};

const userLogout = (req, res, next) => {
	if (req.isAuthenticated()) {
		console.log('Usuario deslogueado');
		req.logout();
	}
	res.sendStatus(200);
};

const userValidation = (req, res, next) => {
	let query;
	const reqbody = req.body;
	if (Object.keys(reqbody).includes('username')) {
		query = { username: req.body.username };
	} else if (Object.keys(reqbody).includes('email')) {
		query = { email: req.body.email };
	} else if (Object.keys(reqbody).includes('document')) {
		query = { document: req.body.document };
	}
	User.findOne(query)
		.then((user) => {
			if (user) {
				res.sendStatus(400);
			} else {
				res.sendStatus(200);
			}
		})
		.catch((err) => {
			res.json(err);
		});
};

module.exports = { userRegister, userLogin, userLogout, userValidation };
