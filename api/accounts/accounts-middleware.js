const Accounts = require("../accounts/accounts-model")

exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  const { name, budget } = req.body;
  if (name && budget) {
    next();
  } else {
    res.status(400).json({ message: "Name and Budget required!" });
  }
}

exports.checkAccountNameUnique = async (req, res, next) => {
  // DO YOUR MAGIC
  const { name, id } = req.body;
  const nameIDExist = await Accounts.getById(name, id);
  if (nameIDExist){
    next();
  } else {
    res.status(400).json({ message: `Unique name does not exist!` });
  }
}

exports.checkAccountId = async (req, res, next) => {
  // DO YOUR MAGIC
  const { id } = req.params;
  const idExist = await Accounts.getById(id);
  if (idExist) {
    next();
  } else {
    res.status(400).json({ message: `ID ${id} does not exist!` });
  }
}
