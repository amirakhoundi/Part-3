const data = require("../data.js");

const getAllPerson = (req, res) => {
  return res.status(200).send(data);
};

const getSinglePerson = (req, res) => {
  const id = req.params.id;

  const person = data.find((item) => item.id == id);

  if (person) {
    return res.status(200).send(person);
  }
  return res.status(404).send({ messeage: "Not Found!" });
};

const deletePerson = (req, res) => {
  const id = req.params.id;

  const p = data.find((item) => item.id == id);
  if (!p) {
    return res.status(404).send({ messeage: "id " + id + " Not Found!" });
  }

  const newPersonList = data.filter((item) => item.id != id);
  return res
    .status(200)
    .send({ message: "id " + id + " Deleted successfuly.", newPersonList });
};


const createPerson = (req, res) => {
  const id = Math.floor(Math.random() * 1000) + 1;

  const { name, number } = req.body;

  if (!name) {
    return res.status(400).send({ error: "The name is required" });
  }
  if (!number) {
    return res.status(400).send({ error: "The number is required" });
  }

  const x = data.find((item) => item.name == name);

  if (x) {
    return res.status(400).send({ error: "name must be unique" });
  }

  const newItem = {
    id,
    name,
    number,
  };

  data.push(newItem);
  return res
    .status(201)
    .send({ message: "id " + id + " created successfuly.", data });
};

module.exports = { getAllPerson, getSinglePerson, deletePerson, createPerson };
