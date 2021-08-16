import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {saveAs} from 'file-saver';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Deposit = (props) => {
   console.log(props.match.params.id)
   const [operations, setOperations] = useState([]);
   const [account, setAccount] = useState([]);
   const [user, setUser] = useState([]);
   useEffect(() => {
      axios({
         method: 'GET',
         url: '/operation/'+props.match.params.id
      })
      .then(res => {
         console.log(res);
         setAccount(res.data[1]);
         setUser(res.data[2]);
         setOperations(res.data[0]);
      })
      .catch(err => {
         console.log(err);
      })
   }, []);
   const CREATEPDF = '/pdf/create_pdf';
   const FETCHPDF = '/pdf/fetch_pdf';
   async function createFilePdf() {
      //console.log(formData)
      axios.post(`${CREATEPDF}`, {operations, account, user})
        .then(() => axios.get(`${FETCHPDF}`, { responseType: 'blob' }))
        .then((res) => {
         const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

         saveAs(pdfBlob, 'cv.pdf');
      })
   }

   return(
      <div>
         <p style={pStyle}>Relevé de compte</p>
         <br />
         {operations.map(operation => 
            <div key={operation._id}>
               <FontAwesomeIcon icon="hand-point-right" className="fa-2x" style={iconStyle} /><span style={infosCompteStyle}>Type d'opération: </span><span style={infoStyle}>{operation.Type}</span><br /><br />
               <FontAwesomeIcon icon="hand-point-right" className="fa-2x" style={iconStyle} /><span style={infosCompteStyle}>Montant: </span><span style={infoStyle}>{operation.Amount}€</span><br /><br />
               <FontAwesomeIcon icon="hand-point-right" className="fa-2x" style={iconStyle} /><span style={infosCompteStyle}>Balance: </span><span style={infoStyle}>{operation.Balance}</span><br /><br />
               <FontAwesomeIcon icon="hand-point-right" className="fa-2x" style={iconStyle} /><span style={infosCompteStyle}>Opération effectuée par: </span><span style={infoStyle}>{user.FirstName} {user.LastName}</span><br /><br />
               <FontAwesomeIcon icon="hand-point-right" className="fa-2x" style={iconStyle} /><span style={infosCompteStyle}>Compte: </span><span style={infoStyle}>{account.Libele}</span><br /><br />
               <span style={signInfoStyle}>Opération effectuée le : </span><span style={infoDateStyle}>{`${new Date(operation.created_date).getDate()}/${new Date(operation.created_date).getMonth() + 1}/${new Date(operation.created_date).getFullYear()} ${new Date(operation.created_date).getHours()}:${new Date(operation.created_date).getMinutes()}:${new Date(operation.created_date).getSeconds()}`}</span><br /><br /><br /><br />
            </div>   
         )}
         <p style={pPrintStyle}><span style={printTextStyle}>Imprimer votre historique</span>&nbsp;&nbsp;&nbsp;<a href="#" onClick={() => createFilePdf()}><FontAwesomeIcon icon="print" className="fa-2x" /></a></p>
      </div>
   )
}
const pPrintStyle = {
   marginLeft: "3%",
   marginTop: "-2%",
   paddingBottom: "5%"
}
const printTextStyle = {
   fontWeight: "700"
}
const infoDateStyle = {
   fontWeight: "700",
   color: "#1120e4"
}
const signInfoStyle = {
   fontWeight: "700",
   marginLeft: "73px"
}
const infoStyle = {
   fontSize: "15px",
   fontWeight: "600",
   color: "#0cd639"
}
const infosCompteStyle = {
   fontSize: "20px",
   marginLeft: "1%"
}
const iconStyle = {
   marginLeft: "3%",
   fontSize: "20px"
}
const pStyle = {
   margin: "2% 0% 0% 2%",
   fontSize: "35px"
}

export default Deposit;
