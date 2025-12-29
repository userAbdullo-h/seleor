const { Schema, model } = require('mongoose')

const orderSchema = new Schema(
	{
		user: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
		product: { type: Schema.Types.ObjectId, required: true, ref: 'Product' },
		price: { type: Number, required: true },
		status: { type: String, default: 'Pending confirm' },
	},
	{ timestamps: true }
)

module.exports = model('Order', orderSchema)
