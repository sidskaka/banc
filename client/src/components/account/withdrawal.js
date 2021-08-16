import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Withdrawal = (props) => {
   const data = {
      Amount: '',
      idAccount: props.match.params.id
   }
   const [entryData, setEntryData] = useState(data);
   const handleChange = e => {
      setEntryData({
         ...entryData,
         [e.target.id]: e.target.value
      })
   }
   const handleSubmit = e => {
      e.preventDefault();
      console.log(entryData);
      axios({
         method: 'POST',
         url: '/account/withdrawal/'+props.match.params.id, 
         data: entryData
      })
      .then(res => {
         console.log(res);
      })
      .catch(err => {
         console.log(err);
      })
   }
   const {Amount} = entryData;
   return(
      <div>
         <p style={pStyle}>Retrait d'argent</p>
         <br />
         <form className="form-inline" onSubmit={handleSubmit} style={formStyle}>
            <div className="form-group">
               <label className="">Montant</label>
               <select className="form-control" onChange={handleChange} id="Amount" value={Amount} style={selectStyle}>
                  <option>Choix...</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                  <option value="40">40</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                  <option value="200">200</option>
                  <option value="300">300</option>
                  <option value="400">400</option>
                  <option value="500">500</option>
               </select>
            </div>
            <br />
            <br />
            <button type="submit" className="btn btn-default" style={buttonStyle}>Valider le retrait</button>
         </form>
      </div>
   )
}
const formStyle = {
   marginLeft: "2%"
}
const buttonStyle = {
   marginLeft: "0%"
}
const selectStyle = {
   width: "150%"
}
const pStyle = {
   margin: "2% 0% 0% 2%",
   fontSize: "35px"
}

export default Withdrawal;
