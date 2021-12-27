const router = require('express').Router();

router.get('/', (req, res) => {
	res.json({
		message: 'you are at /branch -👋🌎🌍🌏',
	});
});

module.exports = router;