const express = require("express");
const router = express.Router();
const { reloadWallet, chargeWallet, confirmChargeWallet, getWalletInfo } = require('../controllers/Wallet')

router.post('/recargar', reloadWallet)
router.post('/pagar', chargeWallet)
router.post('/confirmar', confirmChargeWallet)
router.post('/info', getWalletInfo)

module.exports = router;