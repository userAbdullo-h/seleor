const userModel = require('../models/user.model')
const productModel = require('../models/product.model')

class AdminController {
	constructor() {
		this.userId = '6952b783e0543b994a4aadec'
		this.getProduct = this.getProduct.bind(this)
		this.createProduct = this.createProduct.bind(this)
		this.updateProduct = this.updateProduct.bind(this)
		this.deleteProduct = this.deleteProduct.bind(this)
	}
	// {GET} /admin/products
	async getProduct(req, res, next) {
		try {
			const userId = this.userId
			const user = await userModel.findById(userId)
			if (!user) return res.json({ failure: 'User not found' })
			if (user.role !== 'admin')
				return res.json({ failure: 'User is not admin' })
			const products = await productModel.find()
			if (!products)
				return res.json({ failure: 'Failed while getting products ' })
			return res.json({ success: 'Get product successfully', products })
		} catch (error) {
			next(error)
		}
	}
	// {POST} /admin/create-product
	async createProduct(req, res, next) {
		try {
			const data = req.body
			const userId = this.userId
			const user = await userModel.findById(userId)
			if (!user) return res.json({ failure: 'User not found' })
			if (user.role !== 'admin')
				return res.json({ failure: 'User is not admin' })
			const newProduct = await productModel.create(data)
			if (!newProduct)
				return res.json({ failure: 'Failed while creating product ' })
			return res.json({ success: 'Product created successfully' })
		} catch (error) {
			next(error)
		}
	}
	// {PUT} /admin/update-product/:id
	async updateProduct(req, res, next) {
		try {
			const data = req.body
			const { id } = req.params
			const userId = this.userId
			const user = await userModel.findById(userId)
			if (!user) return res.json({ failure: 'User not found' })
			if (user.role !== 'admin')
				return res.json({ failure: 'User is not admin' })
			const updateProduct = await productModel.findByIdAndUpdate(id, data)
			if (!updateProduct)
				return res.json({ failure: 'Failed while updating product ' })
			return res.json({ success: 'Product updated successfully' })
		} catch (error) {
			next(error)
		}
	}
	// {DELETE} /admin/delete-product/:id
	async deleteProduct(req, res, next) {
		try {
			const { id } = req.params
			const userId = this.userId
			const user = await userModel.findById(userId)
			if (!user) return res.json({ failure: 'User not found' })
			if (user.role !== 'admin')
				return res.json({ failure: 'User is not admin' })
			const deleteProduct = await productModel.findByIdAndDelete(id)
			if (!deleteProduct)
				return res.json({ failure: 'Failed while deleting product ' })
			return res.json({ success: 'Product deleted successfully' })
		} catch (error) {
			next(error)
		}
	}

	static async protectRoute(req, res, next) {}
}

module.exports = new AdminController()
