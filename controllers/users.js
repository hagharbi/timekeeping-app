const User = require("../models/user");

module.exports = {

    //************* UPDATE USER *************** */

    updateUser: function (req, res) {
        const updatedUser = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone,
            address: {
                street: req.body.street,
                city: req.body.city,
                state: req.body.state,
                zip: req.body.zip
            }
        };

        console.log(updatedUser)

        const query = {
            _id: req.body.id
        };

        console.log(query)

        User.findOneAndUpdate(query, {
                $set: updatedUser
            })
            .catch(err => res.status(422).json(err));
    }
}