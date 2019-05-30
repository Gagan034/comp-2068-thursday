const router = require('express').Router();

// // Create our routes
// router.get('/', (req, res) => {
//     res.send(`Hey 'dere world!`);
// });

// router.get('/about', (req, res) => {
//     res.send(`I like long walks on the beach.`);
// });


//  Our Controllers
const PagesController = require('../controllers/pagesControllers');

// Create our routes
router.get(`/`, PagesController.show);
router.get(`/about`, PagesController.show);
router.get(`/contact`, PagesController.show);

module.exports = router;