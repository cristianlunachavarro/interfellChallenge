const express = require('express')
const router =  express.Router()
const usersRouter = require('./Users')
const walletRouter = require('./Wallet')
const transactionsRouter = require('./Transactions')

router.use('/users', usersRouter)
router.use('/wallet', walletRouter)
router.use('/transactions', transactionsRouter)

module.exports = router 