const mysql=require('mysql')

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "afriqueCalais",
  });

  db.connect(error =>{
      if(error) throw error;
      console.log("Connexion réussie")
  } )