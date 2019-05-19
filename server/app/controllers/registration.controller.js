const registration  = require('../models/user.model.js');
const bcrypt =  require('bcrypt')


// Create a user table 
exports.create = (req, res) => {

/* Find by email   */
// registration.find({ $or :[{'email': req.body.email},{'username':req.body.username}] }, function (err, data) {
    registration.find({'email': req.body.email},  (err, data) =>{
        if (err) res.send('0')
        else if(data.length>0){ /* Check if user exist */
         res.send('0');
         return;  
        }

/* Bcrypt has password */


        const password =bcrypt.hashSync(req.body.password, 10);
   
        // Create a user 
        const user = new registration({
            username: req.body.username, 
            email: req.body.email,
            company: req.body.company,
            password:password,
            access:req.body.access
        });
    
        // Save user in the database
        user.save()
        .then(data => {
            res.send('1');
        }).catch(err => {
            res.status(500).send('0');
        });
         
         
      })
 
  
};

 