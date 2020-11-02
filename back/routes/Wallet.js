const express = require("express");
const router = express.Router();
const { reloadWallet, chargeWallet, confirmChargeWallet } = require('../controllers/Wallet')

router.post('/recargar', reloadWallet)
router.post('/pagar', chargeWallet)
router.post('/confirmar', confirmChargeWallet)

module.exports = router;