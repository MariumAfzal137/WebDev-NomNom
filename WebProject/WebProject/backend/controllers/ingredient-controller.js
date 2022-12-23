import Ingredient from "../model/Ingredient";

//import {verifyAccessToken} from "../middleware/check-auth";


export const addIngredient = async (req, res, next) => {
  const  {name}  = req.body;
  console.warn(name)
  if (!name){
    return res.status(400).json({error: "No ingredient entered"})
  }
  let existingIngredient;
  try {
    existingIngredient = await Ingredient.findOne({ name });
  } catch (err) {
    return console.log(err);
  }
  if (existingIngredient) {
    return res
      .status(400)
      .json({ message: "Ingredient already exists" });
  }

  const ingredient = new Ingredient({
    name
  });
  try {
    ingredient.save();

  } catch (err) {
    return console.log(err);
  }
  return res.status(201).json({ message: "Ingredient added successfully"});
  };

  //read ingredients

  export const getAllIngredients = async (req, res, next) => {
    let ingredients;
    try {
      ingredients = await Ingredient.find();
    } catch (err) {
      console.log(err);
    }
    if (!ingredients) {
      return res.status(404).json({ message: "No ingredients found" });
    }
    return res.status(200).json({ ingredients });
  };
  //getIngredient Name

  export const getIngredientName = async (req, res, next) => {
    const id = req.params.id;
    try{
       const result = await Ingredient.findById({_id : id});
       
       res.send(result.name);
    }catch(error){
        console.log(error.message);
    }
  };

//delete ingredient

export const deleteIngredient = async (req, res, next) => {
  const id = req.params.id;
        try{
          const result=await Ingredient.findByIdAndDelete(id);
          await Ingredient.findOneAndDelete({ ingredient:id })
           res.send(result);
        }catch(error){
            res.send(error.message);
        }
};


export async function getIngredientById (req, res, next) {
  const id = req.params.id;
  try{
     const result = await Ingredient.findById({_id : id});
     
     res.send(result);
  }catch(error){
      console.log(error.message);
  }
};