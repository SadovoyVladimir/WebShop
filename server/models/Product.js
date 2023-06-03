const { Schema, model } = require('mongoose')

const schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    imagesInfo: [{ type: String, required: true }],
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }
  },
  {
    timestamps: true
  }
)

module.exports = model('Product', schema)
