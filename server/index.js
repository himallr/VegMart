const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "vegmart_sigin",
});


// app.get('/val',(req,res)=>{
//     const query1 ="INSERT INTO signin (id,username,password,cnf_password) VALUES (2,'messi10','messi10','messi10')";
//     db.query(query1,(err,result)=>{
//         res.send(result);
//         console.log(result);
//     });
// });

app.post("/api/create", (req, res) => {

    const user = req.body.user;
    const email = req.body.email;
    const pass = req.body.password;
    const confirm_password = req.body.confirm_password;

    const query1 = "INSERT INTO signin (username,email,password,cnf_password) VALUES (?,?,?,?)";
    db.query(query1, [user, email, pass, confirm_password], (err, result) => {
        res.send(result);
    });

    console.log("hello");

});

app.post("/login", (req, res) => {
    const user = req.body.user;
    const pass = req.body.password;

    const query1 = "SELECT * FROM signin where username = ? AND password = ?";
    db.query(query1, [user, pass], (err, result) => {
        if (err) {
            res.send({ err: err });
        }
        if (result.length > 0) {
            res.send(result);
        }
        else {
            res.send({ message: "Wrong username/Password!" });
        }
    });
})

app.listen(3001, () => {
    console.log("Running on 3001");
});