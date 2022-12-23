import React, { useEffect,useState } from "react"
import {Link, useNavigate} from 'react-router-dom';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
      <ArrowRightIcon style={{ fill: 'black' }}/>
              
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
      <ArrowLeftIcon style={{ fill: 'black' }}/>
      </button>
    </div>
  )
}
const CatCard = () => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  let[category,setCategory]=useState([])


  async function getAllCategory() {
    try {
      const response = await fetch('http://localhost:5000/category/getAllCategories');
  
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
  
      const result = await response.json();
      setCategory(result.categories)
    } catch (err) {
      console.log(err);
    }
  }

  console.log(category)
  useEffect(()=>{
    getAllCategory()
  },[])

  const navigate = useNavigate()
  const handleClick = (value) => () => {
    
    localStorage.setItem('URL',"http://localhost:5000/recipe/searchrecipes?category="+value.name); 
    console.log(value.name);
    <Link to ="/homesearch"></Link>
  };

  return (
    <>
      <Slider {...settings}>
        {category.map((value, index) => {
          return (
            <Link onClick={handleClick(value)}  >
            <>

            <div className='product' key={index}>
              
                <div className='d_flex'>{value.name}
                </div>
            </div>
            </>
            </Link>
          )
        })}
      </Slider>
    </>
  )
}

export default CatCard
