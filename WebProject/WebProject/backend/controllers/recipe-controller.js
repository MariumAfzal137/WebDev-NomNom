//const createError=require('http-errors')
import Recipe from '../model/recipe.js';
import User from '../model/User'
import ApiFeatures from '../utils/apifeatures.js'

export async function postrecipe(req, res, next) {
    console.log(req.file)
            const name = req.body.name;
            const cookingtime = req.body.cookingtime;
           // const ingredients = req.body.ingredients;
            const description = req.body.description;
            const category = req.body.category;
            const email = req.body.email;
            
            const image = req.file.path;
            console.log(req.file.path)
            const approved = "false";
           
            const result = new Recipe({
              name, cookingtime,  description, category,
              image, approved,
            })
    try {
        
        console.log(result)
        const user = await User.findOne({ email });;
        const savedRecipe = await result.save()
        user.myrecipes = user.myrecipes.concat(savedRecipe)
        await user.save()
        res.send(savedRecipe)
    }
    catch (error) {
        console.log(error.message)
    }
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
