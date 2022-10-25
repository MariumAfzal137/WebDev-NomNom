const express = require('express');
const router= express.Router();
const Controller = require('../controllers/recipe-controller')
import {verifyAccessToken} from "../middleware/check-auth";
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads');
      },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({storage: storage}).single('Image');

router.post('/postrecipe', upload, verifyAccessToken, Controller.postrecipe);
router.get('/allrecipes',  Controller.allrecipes);
router.get('/:id',  Controller.recipedetails);
router.patch('/:id', verifyAccessToken, Controller.updaterecipe);
router.delete('/:id', verifyAccessToken, Controller.deleterecipe);

module.exports = router;