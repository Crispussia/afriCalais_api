const express = require("express");//c'est un framework qui fait la liaison entre le javascript et la base de données
const app = express();//on crée une variable qui stock express
const mysql = require("mysql");
const cors = require("cors");//il permet de tourner sur deux port
require("dotenv").config();//
const port= process.env.PORT || 5001;
app.use(express.json());//il utilise le fichier sous format json

app.use(cors());

const db = mysql.createConnection({//Création de la connexion à la bdd
  user: "247449",
  host: "mysql-crispussia.alwaysdata.net",
  password: "Cdegbelo@2000",
  database: "crispussia_afriquecalais",
});

//*--------- Les categories----------*/

app.get("/getCategory", (req, res) => {//la route pour recupérer la donnée
  db.query("SELECT * FROM category;",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
app.post("/newUser", (req, res) => {//la route pour recupérer la donnée

  const newUser={
    name:req.body.name,
    firstName:req.body.firstName,
    email:req.body.email,
    password:req.body.password
  }

  db.query("INSERT INTO users (name,first_name,email,password) VALUES (?, ?,?,?);",
  [newUser.name,newUser.firstName,newUser.email,newUser.password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );

});

app.post("/connexionUser", (req, res) => {

  const connexionUser={
    email:req.body.email,
    password:req.body.password
  }

  db.query("SELECT email,password FROM users WHERE email=? and password=? ;",
  [connexionUser.email,connexionUser.password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});



app.listen(port, () => {
  console.log("oui on est dans le back",port);
});