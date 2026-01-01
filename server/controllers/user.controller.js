const orderModel = require('../models/order.model')
const productModel = require('../models/product.model')
const transactionModel = require('../models/transaction.model')
const userModel = require('../models/user.model')
const bcrypt = require('bcrypt')

class UserController {
	async getProducts(req, res, next) {
		try {
			const products = await productModel.find()
			return res.json(products)
		} catch (error) {
			next(error)
		}
	}

	async getProduct(req, res, next) {
		try {
			const product = await productModel.findById(req.params.id)
			return res.json(product)
		} catch (error) {
			next(error)
		}
	}

	async getProfile(req, res, next) {
		try {
			const profile = await userModel.findById(req.params.id)
			return res.json(profile)
		} catch (error) {
			next(error)
		}
	}

	async getOrders(req, res, next) {
		try {
			const userId = '69551c418bc897e65597a492'
			const orders = await orderModel.find({ user: userId })
			return res.json(orders)
		} catch (error) {
			next(error)
		}
	}

	async getTransactions(req, res, next) {
		try {
			const userId = '69551c418bc897e65597a492'
			const transactions = await transactionModel.find({ user: userId })
			return res.json(transactions)
		} catch (error) {
			next(error)
		}
	}

	async getFavourites(req, res, next) {
		try {
			const userId = '69551c418bc897e65597a492'
			const user = await userModel.findById(userId).populate('favourites')
			return res.json(user)
		} catch (error) {
			next(error)
		}
	}

	async getStatistics(req, res, next) {
		try {
			const userId = '69551c418bc897e65597a492'
			const user = await userModel.findById(userId)

			const totalOrders = await orderModel.countDocuments({ user: user._id })
			const totalTransactions = await transactionModel.countDocuments({ user: user._id })
			const totalFavourites = user.favorites.length

			return res.json({ totalOrders, totalTransactions, totalFavourites })
		} catch (error) {
			next(error)
		}
	}

	async addFavourite(req, res, next) {
		try {
			const { productId } = req.body
			const userId = '69551c418bc897e65597a492'
			const user = await userModel.findById(userId)
			user.favorites.push(productId)
			await user.save()
			return res.json(user)
		} catch (error) {
			next(error)
		}
	}

	async updateProfile(req, res, next) {
		try {
			const userId = '69551c418bc897e65597a492'
			const user = await userModel.findById(userId)
			user.set(req.body)
			await user.save()
			return res.json(user)
		} catch (error) {
			next(error)
		}
	}

	async updatePassword(req, res, next) {
		try {
			const { oldPassword, newPassword } = req.body
			const userId = '69551c418bc897e65597a492'
			const user = await userModel.findById(userId)
			const isPasswordMatch = await bcrypt.compare(oldPassword, user.password)
			if (!isPasswordMatch) return res.json({ failure: 'Old password is incorrect' })

			const hashedPassword = await bcrypt.hash(newPassword, 10)
			await userModel.findByIdAndUpdate(userId, { password: hashedPassword })
			res.json({ success: 'Password updated successfully' })
		} catch (error) {
			next(error)
		}
	}

	async deleteFavourite(req, res, next) {
		try {
			const { id } = req.body
			const userId = '69551c418bc897e65597a492'
			const user = await userModel.findById(userId)
			user.favorites.pull(id)
			await user.save()
			return res.json({ success: 'Product successfully removed from favourites' })
		} catch (error) {
			next(error)
		}
	}
}

module.exports = new UserController()
