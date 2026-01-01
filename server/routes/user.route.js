const userController = require('../controllers/user.controller')

const router = require('express').Router()

router.get('/products', userController.getProducts)
router.get('/product/:id', userController.getProduct)
router.get('/profile/:id', userController.getProfile)
router.get('/orders', userController.getOrders)
router.get('/transactions', userController.getTransactions)
router.get('/favourites', userController.getFavourites)
router.get('/statistics', userController.getStatistics)

router.post('/add-favourite', userController.addFavourite)

router.put('/update-profile', userController.updateProfile)
router.put('/update-password', userController.updatePassword)

router.delete('/delete-favourite/:id', userController.deleteFavourite)

module.exports = router
