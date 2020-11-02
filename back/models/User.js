const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { isEmail } = require('validator');
const bcrypt = require('bcryptjs');

const SALT_WORK_FACTOR = 10;

let userSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true,
		index: true
	},
	document: {
		type: String,
		required: true,
		unique: true
	},
	phone: {
		type: String,
		required: true,
		unique: true
	},
	email: {
		type: String,
		required: true,
		validate: [isEmail, 'invalid email'],
		unique: true
	},
	password: {
		type: String,
		required: true,
	},
});

userSchema.pre('save', async function save(next) {
	if (!this.isModified('password')) return next();
	try {
		const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
		this.password = await bcrypt.hash(this.password, salt);
		return next();
	} catch (err) {
		return next(err);
	}
});

userSchema.methods.hashPasswordUser = async (password) => {
	const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
	return await bcrypt.hash(password, salt);
};

userSchema.methods.validatePassword = async function validatePassword(data) {
	const result = await bcrypt.compare(data, this.password);
	return result;
};

const User = mongoose.model('users', userSchema);

module.exports = User;
