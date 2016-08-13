const express = require('express');
const app = express();
const jwt = require('jwt');
const cors = require('cors');
const config = {
    port: 3001
};

app.use(cors);

/**
 * Authentication middleware provided by express-jwt.
 * This middleware will check incoming requests for a valid jwt
 * on any routes that is applied to
 */
const authCheck = jwt({
    secret: new Buffer('6T9HLksliEQbqxkTyVW7yL8y_mYphjiVAAYW4I1S7QZTcIvghw2n_LkgGLiq6Nn9', 'base64'),
    audience: 'oEuWHkyxNtQBforBrTfSNaOlqOvNfCtc'
});


var contacts = [
    {
        id: 1,
        name: 'Robert De Niro',
        email: 'robert@gmail.com',
        image: 'https://randomuser.me/api/?inc=picture'
    },
    {
        id: 2,
        name: 'Silvester Stallone',
        email: 's@gmail.com',
        image: 'https://randomuser.me/api/?inc=picture'
    },
    {
        id: 3,
        name: 'Arnold S',
        email: 'a@gmail.com',
        image: 'https://randomuser.me/api/?inc=picture'
    },
    {
        id: 4,
        name: 'Brad Pitt',
        email: 'b@gmail.com',
        image: 'https://randomuser.me/api/?inc=picture'
    }
];


/**
 * Routes
 */
app.get('/api/contacts', (req, res) => {
    const allContacts = contacts.map(contact => {
        return {id: contact.id, name: contact.name};
    });
    res.json(allContacts);
});


app.get('/api/contacts/:id', (req, res) => {
   res.json(contacts.filter(contact => contact.id === parseInt(req.params.id)));
});


app.listen(config.port);
console.log(`App listening on port ${config.port}`);
