import React from 'react';
import { Link } from 'react-router-dom'; 


const AdminOther = () => {

  return (
    <div style={{margin: 'auto', maxWidth: "80%", fontSize:"1.4rem", padding:"1rem"}} >
      Please contact your web developers. Due to initial scheduling limitations, being able to edit anything else will take time.
      If we had another week, maybe job postings and locations would be in the db and be more accessible to changes {':)'}
      <br/>
      <br/>
      Love you please hire us again kthxbye

      <h5><Link to={'/admin'}>Back to Admin Home</Link></h5>


    </div>
)
}



export default AdminOther;