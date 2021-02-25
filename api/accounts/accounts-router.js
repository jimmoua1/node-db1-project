const express = require("express");
const Account = require("./accounts-model");
const router = express.Router();

router.get('/', async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const grab = await Account.get();
    res.status(200).json(grab);
  } catch (e) {
    next(e);
  }
})

router.get('/:id', (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const grabID = Account.getById(req.params.id);
    res.status(200).json(grabID);
  } catch (e) {
    next(e);
  }
})

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const postAccount = Account.post(req.body);
    res.status(201).json(postAccount);
  } catch (e) {
    next(e);
  }
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const { id } = req.params;
    const edit = Account.put(id, req.body);
    res.status(200).json(edit);
  } catch (e) {
    next(e);
  }
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const del = Account.remove(req.params.id);
    res.status(200).json(del);
  } catch (e) {
    next(e);
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  // CALL next(err) IF THE PROMISE REJECTS INSIDE YOUR ENDPOINTS
  res.status(500).json({
    message: 'something went wrong inside the accounts router',
    errMessage: err.message,
  })
})

module.exports = router;
