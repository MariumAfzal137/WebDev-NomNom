import { Card, stepConnectorClasses } from "@mui/material";
import React, {useState, useEffect} from "react";
import Header from '../Header';
import "../Profile.css";

export const PostRecipe = () =>{

  useEffect(() => {

  },[])



    const [recipe, setRecipe] = useState({
        title: "",
        time: "",
        category: "",
        ingredients: "",
        description: "",
        image: "",
      });

      const {name, time, ingredients, description} = recipe;
      const [category, setCategory] = useState('');
      const [data, setData] = useState([
        {
          type: "",
          qty: "",
          size: "",
        }
      ]);

      const IngredientArray = (index) =>(e) =>{
        const newArray = data.map((item, i) => {
          if (index === i) {
            setData( { ...item, [e.target.name]: e.target.value });
          } else {
            return item;
          }
        });
        setData(newArray);
      };
      
      const selectcategory = (event) => {
        setCategory(event.target.value);
      };
    
      const recipeDataChange = (e) => {
        setRecipe({ ...recipe, [e.target.name]: e.target.value });
      };

      const handlePhoto = (e) =>{
        setRecipe({...recipe, image: e.target.files[0]});
        console.log(recipe.image);
      }

      const recipeSubmit = async(e) => {
        e.preventDefault();
       
        const {title, time, category, ingredients, description} = recipe;

        const res = await fetch("http://localhost:5000/recipe/postrecipe", {
          method: "POST",
          body: JSON.stringify({
            title, time, category, ingredients, description
          }),
          headers: {
            "content-Type" : "application/json"
          },
          
        })
        const data = await res.json();

        if(res.status=== 400 ||!data ){
          window.alert("Failed to post recipe.");
          console.log("Failed to post recipe");
        }else{
          window.alert("Recipe posted successfully");
          console.log("Recipe posted successfully");
        }
      }


      const options = [
        {value: "Pan Asian", label:"Pan Asian"},
        {value: "Italian", label:"Italian"},
 
      ]

      

    return (
    <>
    <div id="recipe" >   
    <div className='heading-postrecipe'>Add Recipe</div>   
    <form method="POST" className="postrecipe-form">
        
            <input 
            type="file"
            accept=".png, .jpg, .jpeg"
            name="imagee"
            onChange={handlePhoto}
            />
        
        <ul>
        <label className="labelinput" htmlFor="title">Recipe Title</label>
        <br></br>
                  <input className="postrecipe-input"
                    type="text"
                    required
                    name="title"
                    value={title}
                    onChange={recipeDataChange}
                  /> <br></br>
         <label className="labelinput" htmlFor="category">Category</label>
        <br></br>
       
        <Select className="categoryinput"
        value={category} onChange={selectcategory}>
        <MenuItem value={1}>Desi</MenuItem>
        <MenuItem value={2}>Italian</MenuItem>
        <MenuItem value={3}>Chinese</MenuItem>
        <MenuItem value={4}>American</MenuItem>
        <MenuItem value={5}>Savoury</MenuItem>
      </Select>
        
        
        <label className="labelinput" htmlFor="time">Time</label>
        <br></br>
        <input className="postrecipe-input"
            type="text"
            required
            name="time"
            value={time}
             onChange={recipeDataChange}
            /> 
        
        <br></br>
        <br></br>
        <hr className="divider"></hr>
        <br></br>
        <label htmlFor="ingredients">Ingredients</label>
        <label className="qty" htmlFor="ingredients">Quantity</label>
        <label className="size" htmlFor="ingredients">Size</label>
        <br></br>
        <input className="postrecipe-ing"
            type="text"
            required
            name="ingredients"
            value={ingredients}
             onChange={recipeDataChange}
            /> 
            <input className="postrecipe-qty"
            type="text"
            required
            name="ingredients"
            value={ingredients}
             onChange={recipeDataChange}
            /> 
            <input className="postrecipe-size"
            type="text"
            required
            name="ingredients"
            value={ingredients}
             onChange={recipeDataChange}/>
             <br></br>


        <br></br>
        <br></br>
        <hr className="divider"></hr>
        <br></br>
        <label htmlFor="description">Instructions</label>
        <br></br>
        <input className="instruction-input"
            type="text"
            required
            name="description"
            value={description}
             onChange={recipeDataChange}
            /> <br></br>
        </ul>
        </form>
        </div>
        </> 
        )
}

export default PostRecipe