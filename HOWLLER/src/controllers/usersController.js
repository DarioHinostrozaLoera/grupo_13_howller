const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');
const listaUsers = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const usersController={
    store: (req, res) => {
        let newUser = {
            id: listaUsers[listaUsers.length - 1].id + 1,
            ...req.body,
        }
        if (req.file) {
            newUser.img = '/img/users/' + req.file.filename;
        } else {
            newUser.img = '/img/users/default-image.jpg';
        }

        listaUsers.push(newUser);
        fs.writeFileSync(usersFilePath, JSON.stringify(listaUsers, null, ' '));
        res.redirect('/');


    }
}

module.exports = usersController;