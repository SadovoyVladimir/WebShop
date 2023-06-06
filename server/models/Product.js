const { Schema, model } = require('mongoose')

const schema = new Schema(
  {
    name: { type: String, required: true },
    description: String,
    price: Number,
    imagesInfo: [{ type: String }],
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User' }
  },
  {
    timestamps: true
  }
)

module.exports = model('Product', schema)
