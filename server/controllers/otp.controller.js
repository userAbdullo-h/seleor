const mailService = require('../service/mail.service')

class OtpController {
	async sendOtp(req, res, next) {
		try {
			const { email } = req.body
			await mailService.sendOtpMail(email)
			res.json({ message: 'OTP sent successfully' })
		} catch (error) {
			next(error)
		}
	}
	async verifyOtp(req, res, next) {
		try {
			const { email, otp } = req.body
			const result = await mailService.verifyOtp(email, otp)
			if (result.failure)
				return res.status(400).json({ failure: result.failure })
			res.json({ message: 'OTP verified successfully' })
		} catch (error) {
			next(error)
		}
	}
}

module.exports = new OtpController()
