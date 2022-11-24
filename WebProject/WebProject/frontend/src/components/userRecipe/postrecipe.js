import React, {useState} from "react";
import Header from '../Header';
import "../Profile.css";

export const PostRecipe = () =>{

    const [recipe, setRecipe] = useState({
        title: "",
        time: "",
        category: "",
        ingredients: "",
        description: "",
      });

      const {title, time, category, ingredients, description} = recipe;

      const recipeDataChange = (e) => {
        setRecipe({ ...recipe, [e.target.name]: e.target.value });
      };

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

    return (
    <>
    <Header/>
    <div id="recipe" >   
    <div className='heading-postrecipe'>Add Recipe</div>   
    <form method="POST" className="postrecipe-form">
        <img id="postrecipe" src="recipe.jpeg" alt="Avatar"></img>
        <ul>
        <label htmlFor="title">Recipe Title</label>
        <br></br>
                  <input className="postrecipe-input"
                    type="text"
                    required
                    name="title"
                    value={title}
                    onChange={recipeDataChange}
                  /> <br></br>
         <label htmlFor="category">Category</label>
        <br></br>
        <input className="postrecipe-input"
            type="text"
            required
            name="category"
            value={category}
            onChange={recipeDataChange}
              /> <br></br>
        <label htmlFor="time">Time</label>
        <br></br>
        <input className="postrecipe-input"
            type="text"
            required
            name="time"
            value={time}
             onChange={recipeDataChange}
            /> <br></br>
        <br></br>
        <br></br>
        <br></br>
        <hr className="divider"></hr>
        <br></br>
        <label htmlFor="ingredients">Ingredients</label>
        <br></br>
        <input className="postrecipe-ing"
            type="text"
            required
            name="ingredients"
            value={ingredients}
             onChange={recipeDataChange}
            /> <br></br>
            <input className="postrecipe-ing"
            type="text"
            required
            name="ingredients"
            value={ingredients}
             onChange={recipeDataChange}
            /> <br></br>
            <input className="postrecipe-ing"
            type="text"
            required
            name="ingredients"
            value={ingredients}
             onChange={recipeDataChange}
            /> <br></br>
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