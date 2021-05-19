const Users = require("../models/user.model");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require("nodemailer");
const bodyParser = require('body-parser');
// @desc    Get all users
// @route   GET /api/v1/users/all
exports.getAllUsers = async (req, res, next) => {
  var users = null;
  try {
    users = await Users.find({});
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving entries.",
    });
  }
};

// @desc    Get User by query params
// @route   GET /api/v1/users/get?field=value&....
exports.getUsersByQuery = async (req, res, next) => {
  var users = null;
  try {
    users = await Users.findOne(req.query);
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving entries.",
    });
  }
};

// @desc    Edit user by id
// @route   PUT /api/v1/users/:id
exports.editUser = async (req, res, next) => {
  var users = null;
  const filter = { _id: req.params.id };
  const changes = req.body;
  try {
    users = await Users.updateOne(filter, changes);
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving entries.",
    });
  }
};

// @desc    Delete user by id
// @route   DELETE /api/v1/users/:id
exports.deleteUser = async (req, res, next) => {
  try {
    const response = await Users.deleteOne({ _id: req.params.id });
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving entries.",
    });
  }
};
exports.register = async (req, res) => {
  try {
      const personal_info = req.body;
      if (!personal_info || !personal_info.name || !personal_info.username || !personal_info.password || !personal_info.city || !personal_info.phone_number || !personal_info.aadhar_number ) {
        return res.status(404).json({
          success: false,
          msg: "Please enter all fields",
        });
      }

      //Email should be unique
      const user = await Users.findOne({ email : personal_info.email });
      if (user) return res.status(401).json({message: 'The email address you have entered is already associated with another account.'});

      personal_info.password = bcrypt.hashSync(personal_info.password, 10);
      
      // create and save user
      var newUser = new Users({
        name: personal_info.name,
        username: personal_info.username,
        password: personal_info.password,
        city: personal_info.city,
        email: personal_info.email,
        phone_number: personal_info.phone_number,
        donated_items: personal_info.donated_items,
        aadhar_number: personal_info.aadhar_number,
      });

      const user_ = newUser.save();
      res.status(200).json({
        success: true,
        msg: "Successful created new user.",
      });

  } catch (error) {
      console.log(error.message);
      res.status(500).json({success: false, message: error.message})
  }
};


exports.login = async (req, res) => {
	const { username, password } = req.body
	const user = await User.findOne({ username }).lean()

	if (!user) {
		return res.json({ status: 'error', error: 'Invalid username/password' })
	}

	if (await bcrypt.compare(password, user.password)) {
		// the username, password combination is successful
    if (!user.isVerified){
       return res.status(401).json({ type: 'not-verified', message: 'Your account has not been verified.' });
    }
		const token = jwt.sign(
			{
				id: user._id,
				username: user.username
			},
			config.secret,{ expiresIn: '1d' }
		)

		return res.json({ status: 'ok', data: token })
	}

	res.json({ status: 'error', error: 'Invalid username/password' })
}
