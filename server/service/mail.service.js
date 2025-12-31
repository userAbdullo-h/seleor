const nodemailer = require('nodemailer')
const bcrypt = require('bcrypt')
const otpModel = require('../models/otp.model')

class MailService {
	constructor() {
		this.transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			port: process.env.SMTP_PORT,
			secure: false,
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASS,
			},
		})
	}

	async sendOtpMail(email) {
		const otp = Math.floor(100000 + Math.random() * 900000)
		console.log(`OTP: ${otp}`)

		const hashedOtp = await bcrypt.hash(otp.toString(), 10)
		await otpModel.deleteMany({ email })
		await otpModel.create({
			email,
			otp: hashedOtp,
			expiresAt: Date.now() + 60 * 1000,
		})
		await this.transporter.sendMail({
			from: process.env.SMTP_USER,
			to: email,
			subject: `OTP for verification ${new Date().toLocaleDateString()}`,
			html: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <style>
                    body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f6f6f6; margin: 0; padding: 0; }
                    .container { width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; }
                    .content-block { background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); overflow: hidden; }
                    .header { background-color: #4A90E2; padding: 20px; text-align: center; color: #ffffff; }
                    .body { padding: 30px; text-align: center; color: #333333; }
                    .otp-code { display: inline-block; background-color: #f0f0f0; border: 2px dashed #4A90E2; color: #4A90E2; font-size: 32px; font-weight: bold; letter-spacing: 5px; padding: 15px 30px; margin: 20px 0; border-radius: 5px; }
                    .footer { text-align: center; font-size: 12px; color: #999999; margin-top: 20px; }
                    p { line-height: 1.6; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="content-block">
                        <div class="header">
                            <h2 style="margin:0;">E-commerce</h2>
                        </div>
                        <div class="body">
                            <h1 style="font-size: 24px; margin-bottom: 10px;">Tasdiqlash kodi</h1>
                            <p style="font-size: 16px;">Salom, <strong>${email}</strong></p>
                            <p>Tizimga kirish uchun quyidagi tasdiqlash kodidan foydalaning:</p>
                            
                            <div class="otp-code">${otp}</div>
                            
                            <p style="font-size: 14px; color: #777;">Ushbu kod <strong>1 daqiqa</strong> davomida amal qiladi.</p>
                            <p style="font-size: 14px; color: #777;">Agar bu so'rovni siz yubormagan bo'lsangiz, iltimos e'tibor bermang.</p>
                        </div>
                    </div>
                    <div class="footer">
                        <p>&copy; ${new Date().getFullYear()} E-commerce Platform. All rights reserved.</p>
                    </div>
                </div>
            </body>
            </html>
            `,
		})
	}
	async verifyOtp(email, otp) {
		const record = await otpModel.find({ email })
		if (!record) return { failure: 'Record was not found' }
		const lastRecord = record[record.length - 1]
		if (!lastRecord) return { failure: 'Record not found' }
		if (lastRecord.expiresAt < new Date()) return { failure: 'OTP expired' }
		const isValid = await bcrypt.compare(otp, lastRecord.otp)
		if (!isValid) return { failure: 'Invalid OTP' }

		await otpModel.deleteMany({ email })
		return { message: 'OTP verified' }
	}
}

module.exports = new MailService()
