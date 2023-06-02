const express = require('express')
const Category = require('../models/Category')
const router = express.Router({ mergeParams: true })

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
