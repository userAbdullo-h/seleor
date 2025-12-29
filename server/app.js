require('dotenv').config()

const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const errorMiddleware = require('./middlewares/error.middleware')

const app = express()

// Middlewares
app.use(express.json())
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }))
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/api', require('./routes/index'))

// Error Handling
app.use(errorMiddleware)
const bootstrap = async => {
	try {
		const PORT = process.env.PORT | 5000
		mongoose
			.connect(process.env.MONGO_URI)
			.then(() => console.log('Connected to Db successfully'))
		app.listen(PORT, () =>
			console.log(`Server is running on http://localhost:${PORT}`)
		)
	} catch (error) {
		console.log(`Error connecting to mongoDb: ${error}`)
	}
}
bootstrap()
