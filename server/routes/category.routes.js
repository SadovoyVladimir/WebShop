const express = require('express')
const auth = require('../middleware/auth.middleware')
const Category = require('../models/Category')
const router = express.Router({ mergeParams: true })

router.post('/', auth, async (req, res) => {
  try {
    const newCategory = await Category.create({
      ...req.body
    })
    res.status(201).send(newCategory)
  } catch (e) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Попробуйте позже.'
    })
  }
})

router.get('/', async (req, res) => {
  try {
    const categories = await Category.find()
    res.status(200).send(categories)
  } catch (e) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Попробуйте позже.'
    })
  }
})

module.exports = router
