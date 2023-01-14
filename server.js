// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const path = require('path');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });



// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: process.env.Secrets,
    cookie: {
        maxAge: 3000000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};



app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Listening at http://localhost:${PORT} `)
    });
});