const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json()); //required for reading json


//temp
const database = {
  users: [
    {
      id: '123',
      name:'john',
      email: 'john@gmail.com',
      password: 'cookies',
      entries: 0
    },
    {
      id: '456',
      name:'kev',
      email: 'kev@gmail.com',
      password: 'notcookies',
      entries: 0
    }
  ]
}


app.get('/', (req, res)=> {
  res.send(database.users); //can only send one thing
})

//sign in
app.post('/signin', (req, res)=>{
  if (req.body.email === database.users[0].email && req.body.password === database.users[0].password){
    res.json('success');
  } else {
    res.status(400).json('error logging in');
  }
  res.json('signing')
})

app.post('/register', (req, res) => {
  const {email, name, password} = req.body;
  database.users.push({
    id: '789',
    name:'okk',
    email: 'kev@gmail.com',
    password: 'kevcookies',
  })
  res.json(database.user[database.users.length-1]);
})

app.get('/profile/:id', (req, res) => {
  const { id } = req.params;
  let found = false;
  database.users.forEach(users => {
    if (users.id === id) {
      found = true;
      return res.json(users);
    }
    })
    if (!found) {
      res.status(400).json('not found');
    }
})

app.post('/image', (req, res) => {
  const { id } = req.body;
  let found = false;
  database.users.forEach(users => {
    if (users.id === id) {
      found = true;
      users.entries++;
      return res.json(users.entries);
    }
  })
    if (!found) {
      res.status(400).json('not found');
    }
})

app.listen(3000, ()=> {
  console.log('app is running on port 3000')
})




/*
/signin --> POST success/fail
/register --> POST = user
*/
