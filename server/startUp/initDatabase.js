const Category = require('../models/Category')
const User = require('../models/User')
const categoryMock = require('../mock/categories.json')

module.exports =  async () => {
	const categories = await Category.find()
	const users = await User.find()
	if (categories.length === 0) {
		await createInitialEntity(Category, categoryMock)
	}
}

async function createInitialEntity(Model, data) {
	await Model.collection.drop()
	return Promise.all(
		data.map(async item => {
			try {
				delete item.id
				const newItem = new Model(item)
				await newItem.save()
				return newItem
			} catch (e) {
				return e
			}
		})
	)
}
