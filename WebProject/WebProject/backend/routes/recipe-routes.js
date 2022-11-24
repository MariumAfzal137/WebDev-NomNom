import { Router } from 'express';
const router= Router();
import multer from 'multer';
import { postrecipe, adminpostrecipe, allrecipes, getadminrecipes, approverecipe, 
    recipedetails, updaterecipe, deleterecipe } from '../controllers/recipe-controller.js';
import { verifyAccessToken, verifyAdminAccessToken} from '../middleware/check-auth.js';
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads');
      },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({storage: storage}).single('Image');

//User Routes
router.post('/postrecipe', upload,verifyAccessToken, postrecipe);
router.get('/allrecipes', allrecipes);
router.get('/:id',  recipedetails);
router.patch('/:id',verifyAccessToken, updaterecipe);
router.delete('/:id', verifyAccessToken,deleterecipe);

//Admin Routes
router.post('/admin/adminpostrecipe', upload,verifyAdminAccessToken, adminpostrecipe);
router.get('/admin/getadminrecipes',verifyAdminAccessToken, getadminrecipes);
router.patch('/approverecipe/:id',verifyAdminAccessToken, approverecipe);

export default router;
