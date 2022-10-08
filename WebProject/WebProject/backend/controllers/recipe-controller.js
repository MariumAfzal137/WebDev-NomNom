const createError=require('http-errors')
const Recipe = require('../model/recipe')


module.exports = {
    postrecipe: async(req,res,next)=> {
        try{
            const result = new Recipe({
                name:req.body.name,
                cookingtime: req.body.cookingtime,
                description: req.body.description,
                category: req.body.category,
                image: req.file.path,
                approved: "false"
            })
            console.log(result)
            
            const recipe = new Recipe(result)
            const savedRecipe = await recipe.save()
            //const accessToken = await signAccessToken(savedUser.id)
           // const refreshToken = await signRefreshToken(savedUser.id)
            res.send(savedRecipe)
        //    res.send({accessToken, refreshToken})
        }
        catch(error){
            console.log(error.message);
        }
    },

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

    
}