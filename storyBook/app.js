const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const app = express();
const exhbs = require('express-handlebars')

//handlebars engine
app.engine('.hbs',exphbs({defaultLayout:'main',extname:'hbs'}))
app.set('view engine','.hbs')

const connectDB = require('./config/db')

//Load config here
dotenv.config({ path: './config/config.env' });
connectDB()

//logger
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

const PORT = process.env.PORT || 5000;



//listen
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
