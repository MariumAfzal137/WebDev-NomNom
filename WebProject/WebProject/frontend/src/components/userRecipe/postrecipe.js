import React, {useEffect, useState} from "react";
import { Select, MenuItem, ListItemSecondaryAction,  } from '@material-ui/core';
import axios from 'axios';
import "../Profile.css";
// import { createReadStream } from "fs";
import Categories from "../Category/Categories";
import Header from '../Header';
export const PostRecipe = () =>{ 
     
  const [name, setname] = useState('');
  const [cookingtime, settime] = useState('');
  const [description, setdescription] = useState('');
  const [category, setcategory] = useState('');
  const [file, setfile] = useState();
  





const handlePhoto = (e) =>{
  setfile(e.target.files[0]);
}

const user =localStorage.getItem("user")
const myemail = user

const recipeSubmit =() =>  {
  var postFormData = new FormData();

//   postFormData.append("name", name)
//   postFormData.append("cookingtime", cookingtime)
//   postFormData.append("description", description)
//   postFormData.append("category", category)

//   postFormData.append("email", myemail)

// const config = {     
//     headers: { 'content-type': 'application/json' }
// }

// axios.post('http://localhost:5000/recipe/postrecipe', postFormData, config)
//     .then(response => {
//         console.log(response);
//     })
//     .catch(error => {
//         console.log(error);
//     });

  
  postFormData.append("photo", file)
  postFormData.append("upload_preset","ml_default")
  postFormData.append("cloud_name","dfmnc4vgf")
  fetch("https://api.cloudinary.com/v1_1/dfmnc4vgf/image/upload",{
    method:"post",
    body:postFormData
  }).then((res)=>res.json()).then((data)=>{
    console.log(data)
  })
 
 
  
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