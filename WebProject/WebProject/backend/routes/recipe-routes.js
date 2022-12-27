import { Router } from 'express';
const router= Router();
import multer from 'multer';

import { postrecipe, adminpostrecipe, allrecipes, getadminrecipes, approverecipe, 
    recipedetails, updaterecipe, deleterecipe, searchrecipes} from '../controllers/recipe-controller.js';
import { verifyAccessToken, verifyAdminAccessToken} from '../middleware/check-auth.js';
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/recipes');
      },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)){
        cb(null, true);
    }else {
        cb(null, false);
    }
}
const upload = multer({storage: storage, fileFilter}).single('Image');

// User Routes
router.post('/postrecipe',  postrecipe);
router.get('/allrecipes', allrecipes);
router.get('/searchrecipes', searchrecipes);
router.get('/recipedetails/:id',  recipedetails);

router.patch('/updaterecipe/:id',verifyAccessToken, updaterecipe);
router.delete('/delete/:id',deleterecipe);

//Admin Routes
router.post('/admin/adminpostrecipe',  adminpostrecipe);
router.get('/admin/getadminrecipes', getadminrecipes);
router.put('/approverecipe/:id', approverecipe);

export default router;
