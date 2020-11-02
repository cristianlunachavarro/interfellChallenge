const express = require("express");
const passport = require("passport");
const router = express.Router();
const { userRegister, userLogin, userLogout, userValidation } = require('../controllers/Users')


router.post('/register', userRegister)
router.post("/login", passport.authenticate('local'), userLogin);
router.post('/logout', userLogout)
router.post('/validate', userValidation)

module.exports = router;
