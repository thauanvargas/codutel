const express = require("express");
const multer = require('multer');
const multerConfig = require('./config/upload');
const UserController = require("./controllers/UserController");
const SpotController = require("./controllers/SpotController");
const routes = express.Router();

const upload = multer(multerConfig);

routes.get("/", (req, res) => {
  return res.json({ message: `Olá ${req.query.name}` });
});



routes.post("/user/register", UserController.store);
routes.get("/show", UserController.show);
routes.get("/show/:id", UserController.show);
routes.delete("/delete/:id", UserController.remove);
routes.put("/update/:id", UserController.update);

routes.post("/spots/create", upload.single('thumbnail'), SpotController.store);
routes.get("/spots", SpotController.index);

// routes.get('/users', (req, res) => {});
// routes.post('/users', (req, res) => {});
// routes.get('/users/:id', (req, res) => {});
// routes.put('/users/:id', (req, res) => {});
// routes.delete('/users/:id', (req, res) => {});

module.exports = routes;
