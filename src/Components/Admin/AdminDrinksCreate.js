import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import { createDrink } from '../../store/drinks';

const sizes = ["Small", "Medium", "Large"]
const categories = ["coffee", "tea", "smoothie", "shirt", "mug", "hat"]

const CreateDrink = () => {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [hasImage, setHasImage] = useState(false) 
  const [size, setSize] = useState('') 
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (imageURL) {
      setHasImage(true)
    }
    if (!imageURL) {
      setHasImage(false)
    }
  }, [imageURL])



  const create = async(ev) => {
    ev.preventDefault()
    await dispatch(createDrink({name, category, imageURL, hasImage, size, description}))
    navigate('/admin/drinks')

  }


  return (
    <div>
      <h3> Create a new Drink </h3>
      <form onSubmit= { create } >
      <input placeholder='Drink Name' value= { name } onChange= { (ev) => {setName(ev.target.value)}} />
    
      <select value={ category } onChange= {(ev) => setCategory(ev.target.value)} >
        <option hidden> Please select a drink category </option>
        <option>coffee</option>
        <option>tea</option> 
        <option>smoothie</option>
      </select>
      
      <input placeholder='image url' value= { imageURL } onChange= { (ev) => {setImageURL(ev.target.value), useEffect()}} />
      
      <input placeholder='description' value= { description } onChange= { (ev) => {setDescription(ev.target.value)}} />

      <select value={ size } onChange= {(ev) => setSize(ev.target.value)} >
        <option hidden> Please select a size (Default: Medium) </option>
        <option>Small</option>
        <option>Medium</option>
        <option>Large</option>
      </select>
      
      
      <button> Create Drink </button>
      </form>
    </div>

  )

}



export default CreateDrink; 