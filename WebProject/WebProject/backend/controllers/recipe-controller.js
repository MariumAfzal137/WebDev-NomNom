//const createError = require('http-errors')
import Recipe from '../model/recipe.js'

//User Post
export async function postrecipe(req, res, next) {
    try {
        const result = new Recipe({
            name: req.body.name,
            cookingtime: req.body.cookingtime,
            ingredients: req.body.ingredients,
            description: req.body.description,
            category: req.body.category,
            image: req.file.path,
            approved: "false"
        })
        console.log(result)

        const recipe = new Recipe(result)
        const savedRecipe = await recipe.save()
        res.send(savedRecipe)
        //    res.send({accessToken, refreshToken})
<<<<<<< Updated upstream
        }
        catch(error){
            console.log(error.message);
        }
    },
=======
    }
    catch (error) {
        console.log(error.message)
    }
}

//Admin Post
export async function allrecipes(req, res, next) {
    try {
        const result = await Recipe.find({}, { __v: 0 })
        res.send(result)
    } catch (error) {
        console.log(error.message)
    }
}

export async function recipedetails(req, res, next) {
    const id = req.params.id
    try {
        const result = await Recipe.findById({ _id: id })
>>>>>>> Stashed changes

    allrecipes: async (req, res, next) => {
      try{
        const result = await Recipe.find({}, { __v:0 })
        res.send(result)
      }catch(error) {
        console.log(error.message);
      }
    },

    recipedetails: async (req, res, next) => {
        const id = req.params.id;
        try{
           const result = await Recipe.findById({_id : id});
           
           res.send(result);
        }catch(error){
            console.log(error.message);
        }
    },

    deleterecipe: async (req, res, next) => {
        const id = req.params.id;
        try{
           const result = await Recipe.findByIdAndDelete(id);
           console.log(result);
           res.send(result);
        }catch(error){
            console.log(error.message);
        }
    },
    
    updaterecipe: async(req, res,next) => {
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
<<<<<<< Updated upstream

    
=======
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
        const approved = req.body.approved
        const options = { new: true }

        const result = await Recipe.findByIdAndUpdate(id, approved, options)
        res.send(result)
    } catch (error) {
        console.log(error.message)
    }
>>>>>>> Stashed changes
}