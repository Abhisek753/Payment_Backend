const { userModel } = require("../Models/userModel");

const userController = async (req, res) => {
try {
    const user = new userModel(req.body);
    console.log(user)
    await user.save();
    res.send({ msg: "user has been resister" });
  } catch (err) {
    console.log(err.message);

    res.send({ msg: "cannot register ", eror: err.message });
  }
};
module.exports = {
  userController,
};
