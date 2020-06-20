const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const indexRoutes = require('./routes/index');
const authRoutes = require('./routes/auth');
const exphbs = require('express-handlebars');
const passport = require('passport')
const session = require('express-session');
const path = require('path');
const app = express();

//handlebars engine
app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }));
app.set('view engine', '.hbs');

const connectDB = require('./config/db');

//Load config here
dotenv.config({ path: './config/config.env' });
connectDB();

//passport config
require('./config/passport')(passport);

//logger
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(
  session({
    secret: 'piyush',
    resave: false,
    saveUninitialized: false,
  })
);

//password Middleware
app.use(passport.initialize());
app.use(passport.session());

//Static FOlder
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use('/', indexRoutes);
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 5000;

//listen
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
