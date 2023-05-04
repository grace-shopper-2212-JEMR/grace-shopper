import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom'; 
import { deleteMerch, editMerch } from '../../store/merches'
import { maxWidth } from '@mui/system';




const AdminMerchesMerch = () => {
const { merches } = useSelector(state => state)
const {id} = useParams()
const dispatch = useDispatch()
const navigate = useNavigate()
const [name, setName] = useState('')
const [category, setCategory] = useState('')
const [imageUrl, setImageUrl] = useState('')
const [description, setDescription] = useState('')
const [price, setPrice] = useState('')

if (!merches) {
  return null
}
const merch = merches.find(merch => merch.id === id)

const destroy = async() => {
  await dispatch(deleteMerch(merch))
  navigate('/admin/merches')
}


useEffect(()=>{
  const merch = merches.find(merch => {  
    return merch.id === id
  })
  setName( merch? merch.name : '')
  setCategory( merch? merch.category : '')
  setImageUrl( merch? merch.imageUrl : '')
  setDescription( merch? merch.description : '')
  setPrice(merch? merch.price : '')
}, [id, merches])

const save = async(ev) => {
  ev.preventDefault();
  try{
      await dispatch(editMerch({name, category, imageUrl, description, price, id})); 
      navigate('./admin/merches');
    }
  catch(err){
    setErrors(err);
    console.log(err)
  }
}

const categories = ["shirt", "mug", "hat"]



return (
  <div style={{margin: 'auto', maxWidth: "80%", fontSize:"1.4rem", padding:"1rem"}} >
    <h1> {merch.name} </h1>
    <ul>
      <li>Category: {merch.category} </li>
      <li>Image:</li>
      <img src={merch.imageUrl} style={{maxWidth:"300px"}} alt="merch image"/>
      <li>Description: {merch.description} </li>

    </ul>


    <b>edit merch?</b>
    <form onSubmit={save} style={{margin: 'auto', maxWidth: "80%", minWidth:"350px"}}>
      <label>Name:   
      <input value={name} onChange={ev=> setName(ev.target.value)} placeholder={'First Name'}></input>
      </label>

      <label>Category:    
      <select value={category } onChange={ev=> setCategory(ev.target.value)}>
      <option>Pick a Category</option>
        {categories.map( cat => {
          return(
            <option value={ cat } key={ cat.id }>{ cat }</option>
            )})}
      </select>
      </label>

      <label>Image URL:
      <input value={imageUrl} onChange={ev=> setImageUrl(ev.target.value)} placeholder={'Email Address'}></input>
      </label>
      <label>Description:
      <input value={description} onChange={ev=> setDescription(ev.target.value)} placeholder={'Email Address'}></input>
      </label>
      <label>Price:
      <input value={price} onChange={ev=> setPrice(ev.target.value)} placeholder={'Email Address'}></input>
      </label>
      <div style={{display: "flex", justifyContent:"space-around"}}>
      <button style={{width: "200px"}}>update</button>
      <button style={{width: "200px"}} onClick= {destroy}> delete merch?? </button>
      </div>
      </form>

      <h5><Link to={'/admin/merch'}>Back to Merch List</Link></h5>
      <h5><Link to={'/admin'}>Back to Admin Home</Link></h5>
    

  </div>
)
}

export default AdminMerchesMerch;