import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const AccountDetails = (props) => {
   console.log(props.match.params.id);
   const [account, setAccount] = useState([]);
   const [user, setUser] = useState([]);
   useEffect(() => {
      axios({
         method: 'GET',
         url: '/account/'+props.match.params.id
      })
      .then(res => {
         console.log(res)
         setAccount(res.data[0]);
         setUser(res.data[1]);
      })
      .catch(err => {
         console.log(err);
      })
   }, []);
   console.log(account.Amount)
   console.log(user)
   return(
      <div>
         <p style={pStyle}>Détails compte</p>
         <br />
         <FontAwesomeIcon icon="hand-point-right" className="fa-2x" style={iconStyle} /><span style={infosCompteStyle}>Libele: </span><span style={infoStyle}>{account.Libele}</span><br /><br />
         <FontAwesomeIcon icon="hand-point-right" className="fa-2x" style={iconStyle} /><span style={infosCompteStyle}>Montant sur le compte: </span><span style={infoStyle}>{account.Amount}€</span><br /><br />
         <FontAwesomeIcon icon="hand-point-right" className="fa-2x" style={iconStyle} /><span style={infosCompteStyle}>Propriétaire: </span><span style={infoStyle}>{user.FirstName} {user.LastName}</span><br /><br />
         <button style={buttonStyle} type="button" className="btn btn-primary"><Link to={`/account/deposit/${account._id}`} style={showLinkStyle}>Dépot</Link></button>
         &nbsp;&nbsp;&nbsp;
         <button style={buttonStyle} type="button" className="btn btn-primary"><Link to={`/account/withdrawal/${account._id}`} style={showLinkStyle}>Retrait</Link></button>
         &nbsp;&nbsp;&nbsp;
         <button style={buttonStyle} type="button" className="btn btn-primary"><Link to={`/account/history/${account._id}`} style={showLinkStyle}>Relevé de compte</Link></button>
         <button style={buttonStyle} type="button" className="btn btn-light"><Link to="/" style={backLinkStyle}>Retour</Link></button>
      </div>
   )
}
const showLinkStyle = {
   textDecoration: "none",
   color: "white",
}
const infoStyle = {
   fontSize: "15px",
   fontWeight: "600",
   color: "#0cd639"
}
const iconStyle = {
   marginLeft: "3%",
   fontSize: "20px"
}
const infosCompteStyle = {
   fontSize: "20px",
   marginLeft: "1%"
}
const pStyle = {
   margin: "2% 0% 0% 2%",
   fontSize: "35px"
}
const backLinkStyle = {
   textDecoration: "none"
}
const buttonStyle = {
   margin: "2%" 
}

export default AccountDetails;
