const logger = require("../utils/logger");
require("dotenv").config();
const sgMail = require("@sendgrid/mail");

//Make account on sendgrid and create api key and add in env file and verify sender
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.contactUs = async (req, res, next) => {
  try{
  await sgMail.send({
    from: "ngo.donation.108@gmail.com",
    to: "tanya1998agarwal43@gmail.com",
    subject: "Query from Customer",
    text:
      "You have got a query from  "+req.body.name+"\n The query of user is  "+ req.body.query + 
      "\n Contact the user via email: "+req.body.email+" or via phone number: "+ req.body.phone_number+
      "\n\nThank You!\n",
  });

  logger.info("Contact email sent successfully");
  res.status(200).send(
    "Email sent Successfully"
  );

  } catch (err) {
    logger.error("Error in sending contact email", err);
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving entries.",
    });
  }
};
