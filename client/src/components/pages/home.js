import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Home = () => {
   const [users, setUsers] = useState([]);
   useEffect(() => {
      axios({
         method: 'GET',
         url: '/user'
      })
      .then(res => {
         setUsers(res.data);
      })
      .catch(err => {
         console.log(err);
      })
   },[])
   return(
      <div>
         <p style={pStyle}>Liste des utilisateurs</p>
         <br />
         <ul lassName="ds-btn">
            {users.map(user => 
               <li key={user._id} style={liStyle}>
                  <div className="btn btn-lg btn-primary">
                     <FontAwesomeIcon icon="user" /><span style={spanStyle}><Link style={linkStyle} to={`/user/${user._id}`}>{user.FirstName} {user.LastName}</Link></span>
                  </div> 
               </li>
            )}
         </ul>
         
         <br /><br />
      </div>
   )
}
const pStyle = {
   margin: "2% 0% 0% 2%",
   fontSize: "35px"
}
const liStyle = {
   listStyle: "none", 
   float: "left", 
   padding: "10px" 
}
const spanStyle = {
   paddingLeft: "15px",
   paddingRight: "5px",
   textAlign: "left",
   
}
const linkStyle = {
   color: "#FFF",
   textDecoration: "none"
}

export default Home;
