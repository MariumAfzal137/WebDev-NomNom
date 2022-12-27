//const createError=require('http-errors')
import Recipe from '../model/recipe.js';
import User from '../model/User'
import ApiFeatures from '../utils/apifeatures.js'
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({ 
    cloud_name: 'dfmnc4vgf', 
    api_key: '793147823848954', 
    api_secret: 'qhD7CbNM1w8SqKqCoPLakh6A4AI',
  });

export async function postrecipe(req, res, next) {
    console.log(req.file)
        const file = req.files.photo;
        cloudinary.uploader.upload(file.tempFilePath, (err, result)=>{
            console.log(result);
            const result1 = new Recipe({
            name: req.body.name,
             cookingtime: req.body.cookingtime,
           // const ingredients = req.body.ingredients;
             description: req.body.description,
             category: req.body.category,
             email: req.body.email,
             approved: "false",
             photo: result.url,
            })
       
    try {
        
        console.log(result1)
        const user =  User.findOne({ email });;
        const savedRecipe = result.save()
        user.myrecipes = user.myrecipes.concat(savedRecipe)
        user.save()
        res.send(savedRecipe)
    }
    catch (error) {
        console.log(error.message)
    }
        });
           
}

export async function allrecipes(req, res, next) {
    try {
        const result = await Recipe.find({}, { __v: 0 })
        res.send(result)
    } catch (error) {
        console.log(error.message)
    }
}

export async function searchrecipes(req, res, next) {
    try {
        const resultperpage=6;
        const apiFeature=new ApiFeatures(Recipe.find(),req.query)
        .search()
        .filter()
        .pagination(resultperpage);
        const result = await apiFeature.query;
        res.send(result)
    } catch (error) {
        console.log(error.message)
    }
}


    export async function recipedetails (req, res, next) {
        const id = req.params.id;
        try{
           const result = await Recipe.findById({_id : id});
           
           res.send(result);
        }catch(error){
            console.log(error.message);
        }
    }

    export async function deleterecipe (req, res, next) {
        const id = req.params.id;
        try{
           const result = await Recipe.findByIdAndDelete(id);
           console.log(result);
           res.send(result);
        }catch(error){
            console.log(error.message);
        }
    }
    
    export async function updaterecipe(req, res,next) {
        try {
            const id = req.params.id;
            const updates = req.body;
            //const image = req.file
            const options = {new: true}

            const result = await Recipe.findByIdAndUpdate(id, updates, options);
            res.send (result);
        }catch (error){
            console.log(error.message);
        }
    }


//ADMIN APIS
export async function adminpostrecipe(req, res, next) {
    try {
        const result = new Recipe({
            name: req.body.name,
            cookingtime: req.body.cookingtime,
            ingredients: req.body.ingredients,
            description: req.body.description,
            category: req.body.category,
            image: req.file.path,
            approved: "true"
        })
        console.log(result)

        const recipe = new Recipe(result)
        const savedRecipe = await recipe.save()
        res.send(savedRecipe)
        //    res.send({accessToken, refreshToken})
    }
    catch (error) {
        console.log(error.message)
    }
}

export async function getadminrecipes(req, res, next) {
    try {
        const result = await Recipe.find({}, { __v: 0 })
        res.send(result)
    } catch (error) {
        console.log(error.message)
    }
}

export async function approverecipe(req, res, next) {
    try {
        const id = req.params.id
        const approved = req.body
        const options = { new: true }

        const result = await Recipe.findByIdAndUpdate(id, approved, options)
        res.send(result)
    } catch (error) {
        console.log(error.message)
    }
}
