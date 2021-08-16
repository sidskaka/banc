module.exports = (operations, user, account) => {
   const today = new Date();

   var operationView = operations.map((i) => {
      return `
         <tr>
            <td style="font-size:80%;">${i.Type}</td>
            <td style="font-size:80%;">${i.Amount}</td>
            <td style="font-size:80%;">${i.Balance}</td>
            <td style="font-size:80%;">${new Date(i.created_date).getDate()}-${new Date(i.created_date).getMonth() + 1}-${new Date(i.created_date).getFullYear()}</td>
         </tr>
      `
   })

   return `
   <!doctype html>
   <html>
      <head>
         <meta charset="utf-8">
         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
         <title>PDF Result Template</title>
         <style>
            .baniere {
               width: 100%;
               height: 100px;
               background-color: #1165ed;
               margin-top: 190px;
            }
            .baniere_sections {
               width: 100%;
               height: 40px;
               background-color: #0eb4c9;
            }
            .sections_cv {
               font-size: 28px;
               color: #fff;
               text-align: justify;
               padding-top: 5px;
               margin-left: 20px;
            }
            .date_cv {
               font-size: 80%;
               float: right;
               margin-right: 10%;
               margin-top: 10%;
            }
            
         </style>
         <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>
      </head>
      <body>
         <div style="margin-top: 5%;" class="baniere_sections"><h3 class="sections_cv">Votre relevé de compte</h3></div>
         <div class="row">
            <div style="margin-left:10%;margin-top:5%;">
               <span style="font-size:80%;">Nom: </span><span style="font-size:70%;">${user.LastName}</span><br />
               <span style="font-size:80%;">Prénom: </span><span style="font-size:70%;">${user.FirstName}</span><br /><br />
            </div>

            <div style="margin-left:60%;margin-top:-8%;">
               <span style="font-size:80%;">Libelé: </span><span style="font-size:70%;">${account.Libele}</span><br />
               <span style="font-size:80%;">Solde du compte: </span><span style="font-size:70%;">${account.Amount}€</span>
            </div>
         </div>
         <table class="table table-striped" style="width: 80%;margin-left: 10%;margin-top: 5%;">
         <thead>
         <tr>
            <th style="font-size:90%;" scope="col">Nature</th>
            <th style="font-size:90%;" scope="col">Montant</th>
            <th style="font-size:90%;" scope="col">Balance</th>
            <th style="font-size:90%;" scope="col">Date</th>
         </tr>
       </thead>
       <tbody>
           ${operationView}
       </tbody>
         </table>


         <span class="date_cv">Imprimé le: ${`${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`}</span>

      </body>
   </html>
   `
}
