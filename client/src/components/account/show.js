import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Show = (props) => {
   // console.log(props.match.params.id)
   const idUser = props.match.params.id;
   const [accounts, setAccounts] = useState([]);
   const [user, setUser] = useState([]);
   useEffect(() => {
      axios({
         method: 'GET',
         url: '/account/user/'+idUser
      })
      .then(res => {
         setAccounts(res.data[0][0]);
         setUser(res.data[0][1]);
      })
      .catch(err => {
         console.log(err);
      })
   }, []);
   const supprimerCompte = id => {
      console.log(id)
      axios({
         method: 'DELETE',
         url: '/account/'+id
      })
      .then(res => {
         console.log(res);
         window.location.reload();
      })
      .catch(err => {
         console.log(err);
      })
   }
   return(
      <div>
         <p style={pStyle}>Liste des comptes</p>
         <br />
         {accounts.map(account =>
            <div key={account._id}>
               <FontAwesomeIcon icon="angle-right" className="fa-2x" style={iconStyle} /><Link to={`/account/details/${account._id}`} style={accountLinkStyle}>{account.Libele}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{user.FirstName} {user.LastName}</Link><button style={delButtonStyle} onClick={ () => {supprimerCompte(account._id)} }><FontAwesomeIcon icon="times" className="fa-2x" style={iconStyle} /></button><br /><br />
            </div>
         )}
         <br />
         <button style={buttonStyle} type="button" className="btn btn-primary"><Link to={`/newaccount/${idUser}`} style={showLinkStyle}>Ajouter un compte</Link></button>
         <button style={buttonStyle} type="button" className="btn btn-light"><Link to="/" style={backLinkStyle}>Retour</Link></button>
      </div>
   )
}
const delButtonStyle = {
   backgroundColor: "inherit",
   border: "none",
   marginLeft: "3%"
}
const iconStyle = {
   marginLeft: "3%",
   fontSize: "20px"
}
const accountLinkStyle = {
   marginLeft: "12px",
   textDecoration: "none",
   color: "black",
   fontSize: "20px"
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

export default Show;
