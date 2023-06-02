const jwt = require('jsonwebtoken')
const config = require('config')
const Token = require('../models/Token')

class TokenService {
	generate(payload) {
		const accessToken = jwt.sign(payload, config.get('accessSecret'), {
			expiresIn: '1h'
		})
		const refreshToken = jwt.sign(payload, config.get('refreshSecret'), {
			expiresIn: '1h'
		})
	}
}

module.exports = new TokenService()
