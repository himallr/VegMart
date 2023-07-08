const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const cookieParser = require('cookie-parser');
const stripe = require('stripe')("sk_test_51NPHokSD1SZTUDhP2AqINGUdakQpiHUnJVFqcpTrpJDlJCv54QmzykMpSEOnSTDFp8Tmd33t3nzJBOJ2pdd2Brad00zgMn35Uy");
const uuid = require('uuid').v4
const jwt = require('jsonwebtoken');

const app = express();
// app.use(cors());
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET"],
    credentials: true
}));
app.use(cookieParser());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "vegmart_sigin",
});

app.get('/groceries', (req, res) => {
    const query1 = "SELECT * FROM groceries";
    db.query(query1, (err, result) => {
        res.send(result);
    });
});

app.get('/smartphones', (req, res) => {
    const query1 = "SELECT * FROM smartphones";
    db.query(query1, (err, result) => {
        res.send(result);
    });
});

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

app.post("/shipping", (req, res) => {

    const user = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const address = req.body.address;

    const query1 = "INSERT INTO shipping (name,email,phone,address) VALUES (?,?,?,?)";
    db.query(query1, [user, email, phone, address], (err, result) => {
        res.send(result);
    });

    console.log("hello");

});

const verifyUser = (req, res, next) => {
    console.log(req.cookies.token);
    const token = req.cookies.token;
    console.log(token);
    if (!token) {
        return res.json({ Message: "Need token please provide" })
    }
    else {
        jwt.verify(token, "our-jsonwebtoken-secret-key", (err, decoded) => {
            if (err) {
                return res.json({ Message: "Authentication Error" })
            } else {
                req.name = decoded.name;
                next();
            }
        })
    }
}

app.get('/', verifyUser, (req, res) => {
    return res.json({ Status: "Success", name: req.name })
})

app.post("/login", (req, res) => {
    const user = req.body.user;
    const pass = req.body.password;

    const query1 = "SELECT * FROM signin where username = ? AND password = ?";
    db.query(query1, [user, pass], (err, result) => {
        if (err) {
            res.send({ err: err });
        }
        if (result.length > 0) {
            const name = result[0].name;
            const token = jwt.sign({ name }, "our-jsonwebtoken-secret-key", { expiresIn: '1h' });
            res.cookie('token', token);
            return res.json({ Status: "Success" });
        }
        else {
            return res.json({ message: "Wrong username/Password!" });
        }
    });
})

app.get('/get', (req, res) => {
    const query1 = "SELECT * FROM signin";
    db.query(query1, (err, result) => {
        res.send(result);
    });
});

app.post('/checkout', (req, res) => {
    console.log(req.body);
    let err, status
    try {
        const { product, token } = req.body

        const customer = stripe.customers.create({
            email: token.email,
            source: token.id,
        })

        const key = uuid()
    }
    catch (err) {
        console.log(err);
    }
    console.log(response.status)
})

app.get('/logout', (req, res) => {
    res.clearCookie('token');
    return res.send({ Status: "Success" })
})

app.listen(3001, () => {
    console.log("Running on 3001");
});