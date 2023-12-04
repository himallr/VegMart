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
    origin: ["https://veg-mart-frontend.vercel.app/"],
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

app.get('/snacks', (req, res) => {
    const query1 = "SELECT * FROM snacks";
    db.query(query1, (err, result) => {
        res.send(result);
    });
});

app.get('/card1', (req, res) => {
    const query1 = "SELECT * FROM card1";
    db.query(query1, (err, result) => {
        res.send(result);
    });
});

app.get('/card2', (req, res) => {
    const query1 = "SELECT * FROM card2";
    db.query(query1, (err, result) => {
        res.send(result);
    });
});

app.get('/card3', (req, res) => {
    const query1 = "SELECT * FROM card3";
    db.query(query1, (err, result) => {
        res.send(result);
    });
});


app.get('/grains', (req, res) => {
    const query1 = "SELECT * FROM grains";
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
    //console.log(req.cookies.token);
    const token = req.cookies.token;
    //console.log(token);
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
            const token = jwt.sign({ name }, "our-jsonwebtoken-secret-key", { expiresIn: '1d' });
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

app.post('/checkout', async (req, res) => {
    console.log(req.body);
    let err, status
    try {
        const { product, token } = req.body

        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id,
        })

        const key = uuid()

        const charge = await stripe.charges.create(
            {
                amount : product.price * 100,
                currency: "usd",
                customer: customer.id,
                reciept_email: token.email,
                description : `Purchased the ${product.name}`,
                shipping: {
                    name: token.card.name,
                    address: {
                        line1: token.card.address_line1,
                        line2: token.card.address_line2,
                        city: token.card.address_city,
                        country: token.card.address_country,
                        postal_code: token.card.address_zip,
                    },
                },
            },
            {
                key,
            }
        );
        console.log("charge" , {charge});
        status="success";
    }
    catch (err) {
        //console.log(err);
        status="Failure"
    }
    res.json({err,status});
    console.log(res.status)
})

app.get('/logout', (req, res) => {
    res.clearCookie('token');
    return res.send({ Status: "Success" })
})

app.listen(3001, () => {
    console.log("Running on 3001");
});
