const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

const routes = require('./routes');
const settings = require('./config/config');
const User = require('./models/user')

app.use(cors());
app.use(morgan('dev'));

const bodyParser=require('body-parser');
app.use(bodyParser.json());

const mongoose=require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(settings.db);

let db = mongoose.connection;
db.on('error', function(err){
  console.log(err)
});
db.once('open', function() {
  let user = new User({
    email: settings.superMan.email,
    password: settings.superMan.password,
    admin: settings.superMan.admin
  });
  user.save();
  console.log('success!')
  routes(app);
});

app.listen(settings.port, function(){
  console.log(`running on port ${settings.port}...`)
});
