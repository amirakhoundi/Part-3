const express = require("express");
const app = express();
const morgan = require("morgan");
const {
  getAllPerson,
  getSinglePerson,
  deletePerson,
  createPerson,
} = require("./controllers/personController");
const info = require("./controllers/infoController");

// middlware
// app.use(morgan("tiny"));
app.use(
  morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, "content-length"),
      "-",
      tokens["response-time"](req, res),
      "ms",
      JSON.stringify(req.body),
    ].join(" ");
  })
);
app.use(express.json());

// route ---> http request
app.get("/api/person", getAllPerson);
app.post("/api/persons", createPerson);

app.get("/api/person/:id", getSinglePerson);
app.delete("/api/person/:id", deletePerson);

app.get("/info", info);

const port = 3001;
app.listen(port, () => {
  console.log("Server is running on " + port);
});
