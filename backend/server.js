const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');
const knex = require('knex')


const db = knex({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'heavyduty'
    }
});

db.select('*').from('users').then(data => {
    console.log(data)
} );



const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors())

//data base
const database = {
    users: [
        {
            id: '123',
            name: 'dave',
            password: "willyou",
            email: 'dave@gmail.com',
            entries: 0,
            joined: new Date()
        },
        {
            id: '124',
            name: 'abush',
            email: 'abush@gmail.com',
            password: "you",
            entries: 0,
            joined: new Date()
        },
        {
            id: '125',
            name: 'askal',
            email: 'askal@gmail.com',
            password: "will",
            entries: 0,
            joined: new Date()
        }

    ]
}

// app.get('/api/data', (req, res) => {
   
//     res.json({ message: 'Hello from the back end, you made it!!!!!!!' });
// })


app.get('/', (req, res) => {
    res.send(database.users)
})

// app.get('/back', (req, res) => {
//     res.json({ message: 'Hello from the back end, you made it!!'})
// })
//signin using your email & password

app.post('/signin', (req, res) => {
    if (req.body.email === database.users[0].email &&
        req.body.password == database.users[0].password) {
        res.json('successfuly signd in');
    }
    else {
        res.status(400).json('error log in');
    }
    
});

// registration form start here

app.post('./register', (req, res) => {
    const { email, name, password } = req.body;
    bcrypt.hash(password, NULL, NULL, function (err, hash) {
        console.log(hash);
    })
    database.users.push({
        id: '126',
        name: name,
        email: email,
        password: password,
        entries: 0,
        joined: new Date()
    })
    res.json(database.users[database.users.length - 1]);
})


// profile start here
app.get('/profile/:id', (req, res) => {
    let found = false;     //it is by default false and we use let cause we will reassign it 
    const { id } = req.params;
    database.users.forEach(user => {
        if (user.id === id) {
            found = true;
            return res.json(user)
        } 
    });
    if (!found) {
        res.status(404).json('there is no such user')
    }
})
//profile end here

app.post('./image', (req, res) => {
    const { id } = req.body;
    let found = false;
    database.users.forEach(user => {
        if (user.id === id) {
            found = true;
            user.entries++
            return res.json(user.entries);
        } 
    })
    if (!found) {
        res.status(404).json('not found')
    }
})
 
//bcrypt on how to store a password in to hash so as it will be sequre

// bcrypt.genSalt(saltRounds, function(err, salt) {
//     bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
//         // Store hash in your password DB.
//     });
// });

 app.listen(3001, () => {
        console.log('the server is running at port 3001')
    })