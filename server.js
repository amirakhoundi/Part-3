const express = require("express");
const app = express();
const {
  getAllPerson,
  getSinglePerson,
  deletePerson,
  createPerson,
} = require("./controllers/personController");
const info = require("./controllers/infoController");

// middlware
app.use(express.json())

// route ---> http request
app.get("/api/person", getAllPerson);
app.post("/api/persons",createPerson);

app.get("/api/person/:id", getSinglePerson);
app.delete("/api/person/:id", deletePerson);

app.get("/info", info);




const port = 3001;
app.listen(port, () => {
  console.log("Server is running on " + port);
});
