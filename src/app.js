const path = require('path')
const express = require('express');
const app = express();
const port = 3000;
const route = require('./routes/index')
const env = require('dotenv')
const envConfig = env.config()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const handlebars = require('express-handlebars')
const methodOverride = require('method-override')
//Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(methodOverride('_method'));
//set static
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser())
//set view engine
app.engine('hbs',handlebars.engine({
    extname:'.hbs'
}))
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/resources/views'));

//Run app
route(app)

app.listen(port,() =>  {
    console.log(`server listening on port ${port}`)})