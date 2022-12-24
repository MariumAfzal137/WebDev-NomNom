import React, {useEffect, useState} from "react";
import { Select, MenuItem, ListItemSecondaryAction,  } from '@material-ui/core';
import axios from 'axios';
import "../Profile.css";
import Categories from "../Category/Categories";
import Header from '../Header';
import { application } from "express";
import { json } from "react-router-dom";


    export const PostRecipe = () =>{ 
     
        const [name, setname] = useState('');
        const [cookingtime, settime] = useState('');
        const [description, setdescription] = useState('');
        const [category, setcategory] = useState('');
        const [file, setfile] = useState();
        
    
      
      

 
      const handlePhoto = (e) =>{
        // const image =e.target.files[0];
        setfile({ [e.target.value]: e.target.files[0]});
        
        console.log(e.target.files);
      }

      const user =localStorage.getItem("user")
      const myemail = user
      
      const recipeSubmit = async(e) => {
        e.preventDefault();
       
        console.log(name);
         
        var postFormData = new FormData();
        
        postFormData.append("name", name)
        postFormData.append("cookingtime", cookingtime)
        postFormData.append("description", description)
        postFormData.append("category", category)
        postFormData.append("image", file)
        postFormData.append("email", myemail)
        for (var pair of postFormData.entries())
{
 console.log(pair[0]+ ', '+ pair[1]); 
}
       
        const config = {     
          headers: { 'content-type': 'application/json' }
      }
      
      axios.post(`http://localhost:5000/recipe/postrecipe`, postFormData, config)
          .then(response => {
              console.log(response);
          })
          .catch(error => {
              console.log(error);
          });
        // console.log(postFormData.FormData);
          // const res = await axios({
          //   method: "post",
          //   url: `http://localhost:5000/recipe/postrecipe`,
          //   data: postFormData,
          //   headers: { "Content-Type": "application/json" },
          // });
       
        // const res = await fetch("http://localhost:5000/recipe/postrecipe", {
         
        //   method: "POST",
        //   body: postFormData,
        //   headers: {
        //     'Content-Type': 'multipart/form-data; ',
        //   },
          
        // });
        
        // const recipedata = await res.json();

        // if(res.status=== 400 ||!recipedata ){
        //   window.alert("Failed to post recipe.");
        //   console.log("Failed to post recipe");
        // }else{
        //   window.alert("Recipe posted successfully");
        //   //console.log("Recipe posted successfully");
        // }
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
            name="file"
            onChange={handlePhoto}
       onClick={(event)=> { 
              event.target.value = null
         }}
            />
      <ul>
      
            <br></br>
            <label className="labelinput" htmlFor="name">Recipe Title</label>
            <br></br>
                      <input className="postrecipe-input"
                        type="text"
                        required
                        name="name"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                      /> <br></br>
           

            <label className="labelinput" htmlFor="category">Category</label>
            <br></br>
            <input className="postrecipe-input"
                        type="text"
                        required
                        name="category"
                        value={category}
                        onChange={(e) => setcategory(e.target.value)}
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
                onChange={(e) => settime(e.target.value)}
                /> 
            
            <br></br>
            <br></br>
            <hr className="divider"></hr>
          

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
                onChange={(e) => setdescription(e.target.value)}
                /> <br></br>
            </ul>
            <button className="post-button" onClick={recipeSubmit}>POST</button>
            </form>
            </div>
            </> 
            )
    }

    export default PostRecipe