const express = require('express');
const router= express.Router();
const Controller = require('../controllers/recipe-controller')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads');
      },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({storage: storage}).single('Image');

router.post('/postrecipe', upload, Controller.postrecipe);
router.get('/allrecipes',  Controller.allrecipes);
router.get('/:id',  Controller.recipedetails);
router.patch('/:id',  Controller.updaterecipe);
router.delete('/:id', Controller.deleterecipe);

module.exports = router;