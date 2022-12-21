import React, {useEffect, useState} from "react";
import { Select, MenuItem,  } from '@material-ui/core';
import axios from 'axios';
import "../Profile.css";
import Categories from "../Category/Categories";


    export const PostRecipe = () =>{ 
        const [recipe, setRecipe] = useState({
            name: "",
            time: "",
            image:"",
            description: "",
            category: "",
            
          });
      const {name, time, category, description} = recipe;   
      const recipeDataChange = (e) => {
        setRecipe({ ...recipe, [e.target.name]: e.target.value });
      };

      // const [ingredients, setIngredient] = useState([
      //   {
      //     name: "",
      //     qty: "",
      //     unit: "",
      //   }
      // ]);
      // const selectIngredient = (e) => {
      //    setIngredient({...ingredients, [e.target.name]: (e.target.value) })
      // }
      
      // const [category, setCategory] = useState('');
      // const selectcategory = (e) => {
      //   setCategory( e.target.value );
        
      // };

      //storing list of categories in an array
      // const [categories, setCategories] = useState([]);
      // useEffect(() => {
      //   const arr=[]
      //   axios.get("http://localhost:5000/category/getAllCategories").then(
      //     res => {
      //       res.data.forEach(element => {
      //          arr.push(element.name)
      //       });
      //       setCategories(arr);
      //     }
      //   )
      // })

      const handlePhoto = (e) =>{
        setRecipe({...recipe, image: e.target.files[0]});
        console.log(recipe.image);
      }

     

      const recipeSubmit = async(e) => {
        e.preventDefault();
       
        const {name, time, category,  description, image, } = recipe;

        const res = await fetch("http://localhost:5000/recipe/postrecipe", {
          method: "POST",
          body: JSON.stringify({
            name, time, category, description, image, 
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
    <div id="postrecipe" >   
    <div className='heading-postrecipe'>Add Recipe</div>
      
    <form method="POST" className="postrecipe-form">
  <label  htmlFor="image">Choose your image.</label> 
  <br></br>
    <input 
            type="file"
            accept=".png, .jpg, .jpeg"
            name="imagee"
            onChange={handlePhoto}
            />
      <ul>
      {/* <label className="labelinput" htmlFor="image">Add your image url</label> */}
        {/* <br></br>
            <input className="postrecipe-input"
           type="text"
           required
           placeholder="eg: https://static3.bigstockphoto.com/.jpg"
           name="image"
           value={image}
           onChange={recipeDataChange}
            /> */}
            <br></br>
            <label className="labelinput" htmlFor="name">Recipe Title</label>
            <br></br>
                      <input className="postrecipe-input"
                        type="text"
                        required
                        name="name"
                        value={name}
                        onChange={recipeDataChange}
                      /> <br></br>
           

            <label className="labelinput" htmlFor="category">Category</label>
            <br></br>
                      <input className="postrecipe-input"
                        type="text"
                        required
                        name="category"
                        value={category}
                        onChange={recipeDataChange}
                      /> <br></br>
            {/* <label className="labelinput" htmlFor="category">Category</label>
            <br></br>
            
            <Select variant="outlined" className="categoryinput"
              value={category} onChange={selectcategory}>
              <MenuItem value={1}>Desi</MenuItem>
              <MenuItem value={2}>Italian</MenuItem>
              <MenuItem value={3}>Chinese</MenuItem>
              <MenuItem value={4}>American</MenuItem>
              <MenuItem value={5}>Savoury</MenuItem>
            </Select>
             */}
            
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
            {/* <br></br>
            <label htmlFor="name">Ingredient Name</label>
            <label className="qty" htmlFor="qty">Quantity</label>
            <label className="size" htmlFor="unit">Unit</label>
            <br></br>
          
                <input className="postrecipe-ing"
                type="text"
                required
                name="name"
                value={ingredients.name}
                onChange={selectIngredient}
                /> 
                <input className="postrecipe-qty"
                type="text"
                required
                name="qty"
                value={ingredients.qty}
                onChange={selectIngredient}
                /> 
                <input className="postrecipe-size"
                type="text"
                required
                name="unit"
                value={ingredients.unit}
                onChange={selectIngredient}
                /> <br></br>
                
                <br></br>
 */}

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
            <button className="post-button" onClick={recipeSubmit}>POST</button>
            </form>
            </div>
            </> 
            )
    }

    export default PostRecipe