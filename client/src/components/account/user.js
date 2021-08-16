import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const User = (props) => {
   console.log(props.match.params.id)
   const idUser = props.match.params.id;
   
   return(
      <div>
         <p style={pStyle}>Page utilisateur</p>
         <br />
         <button style={buttonStyle} type="button" className="btn btn-primary"><Link to={`/show/${idUser}`} style={showLinkStyle}>Voir mes comptes</Link></button>
         <button style={buttonStyle} type="button" className="btn btn-light"><Link to="/" style={backLinkStyle}>Retour</Link></button>
      </div>
   )
}
const pStyle = {
   margin: "2% 0% 0% 2%",
   fontSize: "35px"
}
const backLinkStyle = {
   textDecoration: "none"
}
const showLinkStyle = {
   textDecoration: "none",
   color: "white",
}
const buttonStyle = {
   margin: "2%" 
}

export default User;
