const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let transactionSchema = new Schema({
	amount: {
		type: Number,
		required: true,
	},
	type: {
		type: String,
		required: true,
	},
	status: {
		type: String,
		required: true,
	},
	eid:{
	 type: String,
	 required: true
	},
	codigo:{
		type: String
	},
	dateTime: {
		type: Date,
		default: Date.now()
	},
	wallet: {
		type: Schema.Types.ObjectId,
		ref: 'wallets',
	},
});

const Transaction = mongoose.model('transactions', transactionSchema);

module.exports = Transaction;
