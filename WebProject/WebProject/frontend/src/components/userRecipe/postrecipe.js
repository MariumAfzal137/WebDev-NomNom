import React, {useEffect, useState} from "react";
import { Select, MenuItem, ListItemSecondaryAction,  } from '@material-ui/core';
import axios from 'axios';
import "../Profile.css";
import Categories from "../Category/Categories";
import Header from '../Header';

    export const PostRecipe = () =>{ 
        const [recipe, setRecipe] = useState({
            name: "",
            cookingtime: "",
            description: "",
            image: "",
            category: "",
          });
      const {name, time, image, cookingtime, description, category} = recipe;   
      const recipeDataChange = (e) => {
        setRecipe({ ...recipe, [e.target.name]: e.target.value });
      };

      const [ingredient, setIngredient] = useState([]);
      const [item, setitem] = useState('');
      const [qty, setqty] = useState('');
      const [unit, setunit] = useState('');

      const addIngredients =() =>{
        setIngredient([
          ...ingredient, {
            id: ingredient.length,
          item: item,
          qty: qty,
          unit: unit,
        }
        ])
        setitem('')
        setqty('')
        setunit('')
      }
      //console.log(typeof ingredient)
      // const selectIngredient = (e) => {
      //    setIngredient( JSON.parse(e.target.value) )
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
        setRecipe({...recipe, image: e.target.file});
        console.log(recipe.image);
      }

      const user =localStorage.getItem("user")
      const myemail = user.email
      
      const recipeSubmit = async(e) => {
        e.preventDefault();
       
        const {name, cookingtime, category,  description, image, ingredient} = recipe;
         
        const postFormData = new FormData();
        postFormData.append("name", name)
        postFormData.append("cookingtime", cookingtime)
        postFormData.append("description", description)
        postFormData.append("category", category)
        postFormData.append("image", image)
        postFormData.append("email", myemail)

        
          // const res = await axios({
          //   method: "post",
          //   url: `http://localhost:5000/recipe/postrecipe`,
          //   data: postFormData,
          //   headers: { "Content-Type": "application/json" },
          // });
       
        const res = await fetch("http://localhost:5000/recipe/postrecipe", {
          method: "POST",
          postFormData,
          // headers: {
          //   "content-Type" : "application/json"
          // },
          
        });
        const recipedata = await res.json();

        if(res.status=== 400 ||!recipedata ){
          window.alert("Failed to post recipe.");
          console.log("Failed to post recipe");
        }else{
          window.alert("Recipe posted successfully");
          //console.log("Recipe posted successfully");
        }
      }


    return (
    <>
     <Header/>
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
            
            <label className="labelinput" htmlFor="cookingtime">Cooking Time</label>
            <br></br>
            <input className="postrecipe-input"
                type="text"
                required
                name="cookingtime"
                value={cookingtime}
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
             <div className="addingredients">
                <input className="postrecipe-ing"
                type="text"
                value={item}
                onChange={e => setitem(e.target.value)}
                /> 
                <input className="postrecipe-qty"
                type="text"
                value={qty}
                onChange={e => setqty(e.target.value)}
                /> 
                <input className="postrecipe-size"
                type="text"
                required
                value={unit}
                onChange={e => setunit(e.target.value)}
                /> 
                <button onClick={addIngredients}>ADD</button>
                <ul>
                  {ingredient.map(ingredient =>(
                    <li key={ingredient.id}>{ingredient.item},{ingredient.qty},{ingredient.unit}</li>
                  ))}
                </ul>
                </div>
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