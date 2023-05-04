import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAuth } from '../store';
import { useNavigate, Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Account = ()=> {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=> {
    if(auth.id){
      setFirstName(auth.firstName ? auth.firstName : '')
      setLastName(auth.lastName ? auth.lastName : '')
      setAddress(auth.address ? auth.address : '')
      setEmail(auth.email ? auth.email : '')
      setPhone(auth.phone ? auth.phone : '')
    }
  }, [auth]);

  const _update = async(ev)=> {
    ev.preventDefault();
    dispatch(updateAuth({ firstName, lastName, address, email, phone }));
    navigate('/menu')
  };
  return (
    <div style={{ margin: 'auto', maxWidth: '80%' }} >
      {
        auth.id ? (
            <div>
                <h1>Enter Account Info Here</h1>
                <form onSubmit={ _update }>
                  <div style={{ marginBottom: 8 }}/>
                  <TextField label="First Name" variant="outlined" value={ firstName } onChange={ev => setFirstName(ev.target.value)}/>
                  <div style={{ marginBottom: 8 }}/>
                  <TextField label="Last Name" variant="outlined" value={ lastName } onChange={ev => setLastName(ev.target.value)}/>
                  <div style={{ marginBottom: 8 }}/>
                  <TextField label="Address" variant="outlined" value={ address } onChange={ev => setAddress(ev.target.value)}/>
                  <div style={{ marginBottom: 8 }}/>
                  <TextField label="E-mail" variant="outlined"  value={ email } onChange={ev => setEmail(ev.target.value)}/>
                  <div style={{ marginBottom: 8 }}/>
                  <TextField label="Phone" variant="outlined" value={ phone } onChange={ev => setPhone(ev.target.value)}/>
      
                  <Button style={{ fontSize: 18 }}onClick={ _update } disabled={ firstName === auth.firstName && lastName === auth.lastName && address === auth.address && email === auth.email && phone === auth.phone}>Update Profile</Button>
                </form>
            </div>
        
        )  : (
            <div>
                <h1>Can't Update If You're Not Logged In!</h1>
                <div>
                    <Link to={`/register`}>Register Here</Link> or <Link to='/login'> Login </Link>
                </div>
            </div>
          )
        } 
     
    </div>
  );
};

export default Account;
