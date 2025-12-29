const router = require('express').Router()

router.post('/send-otp', (req, res) => {
	res.send('Login route')
})
router.post('/verify-otp', (req, res) => {
	res.send('Login route')
})
router.post('/resend-otp', (req, res) => {
	res.send('Login route')
})

module.exports = router
