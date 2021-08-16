import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const NewAccount = (props) => {
   let history = useHistory ();
   console.log(props.match.params.id)
   const idUser = props.match.params.id;
   const data = {
      Libele: '',
      Amount: '',
      User: props.match.params.id
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
         url: '/account/', 
         data: entryData
      })
      .then(res => {
         console.log(res);
         history.push ('/show/'+props.match.params.id);
      })
      .catch(err => {
         console.log(err);
      })
   }
   const {Amount, Libele} = entryData;
   return(
      <div>
         <p style={pStyle}>Créer un nouveau compte</p>
         <br />
         <form className="form-inline" onSubmit={handleSubmit} style={formStyle}>
            <div className="form-group">
               <input type="text" className="form-control" value={Libele} id="Libele" onChange={handleChange} placeholder="Libelé du compte" style={inputStyle} />
            </div>
            <br />
            <br />
            <div className="form-group">
               <input type="text" className="form-control" value={Amount} id="Amount" onChange={handleChange} placeholder="Somme à verser sur le compte" style={inputStyle} />
            </div>
            <br />
            <br />
            <button type="submit" className="btn btn-default" style={buttonStyle}>Ajouter</button>
         </form>
      </div>
   )
}
const buttonStyle = {
   marginLeft: "0%"
}
const formStyle = {
   marginLeft: "2%"
}
const inputStyle = {
   width: "150%"
}
const pStyle = {
   margin: "2% 0% 0% 2%",
   fontSize: "35px"
}
export default NewAccount;
