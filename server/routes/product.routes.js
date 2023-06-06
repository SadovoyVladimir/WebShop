const express = require('express')
const auth = require('../middleware/auth.middleware')
const Product = require('../models/Product')
const router = express.Router({ mergeParams: true })

router.patch('/:productId', auth, async (req, res) => {
  try {
    const { productId } = req.params

    const findProduct = await Product.findById(productId)

    if (!findProduct) {
      return res.status(401).json({ message: 'Нет товара с таким id' })
    }

    if (findProduct.userId.toString() === req.user._id) {
      const updatedProduct = await Product.findByIdAndUpdate(
        productId,
        req.body,
        { new: true }
      )
      res.send(updatedProduct)
    } else {
      res.status(401).json({ message: 'Нет доступа' })
    }
  } catch (e) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Попробуйте позже.'
    })
  }
})

router.post('/', auth, async (req, res) => {
  try {
    const newProduct = await Product.create({
      ...req.body
    })
    res.status(201).send(newProduct)
  } catch (e) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Попробуйте позже.'
    })
  }
})

router.get('/', async (req, res) => {
  try {
    const products = await Product.find()
    res.send(products)
  } catch (e) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Попробуйте позже.'
    })
  }
})

router.delete('/:productId', auth, async (req, res) => {
  try {
    const { productId } = req.params
    const removedProduct = await Product.findById(productId)

    if (removedProduct.userId.toString() === req.user._id) {
      await Product.findOneAndDelete({ _id: productId })
      return res.send(null)
    } else {
      res.status(401).json({ message: 'Unauthorized' })
    }
  } catch (e) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Попробуйте позже.'
    })
  }
})

module.exports = router
