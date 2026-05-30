const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/basic-elements", (req, res) => {
    res.render("basic_elements");
});


app.get("/basic-table", (req, res) => {
    res.render("basic-table");
});

app.get("/buttons", (req, res) => {
    res.render("buttons");
    
});


app.get("/mdi", (req, res) => {
    res.render("mdi");
});


app.get("/charts", (req, res) => {
    res.render("chartjs");
});

app.get("/typography", (req, res) => {
    res.render("typography");
});
app.get("/dropdowns", (req, res) => {
    res.render("dropdowns");
});

app.get("/login", (req, res) => {
    res.render("samples/login");
});

app.get("/register", (req, res) => {
    res.render("samples/register");
});
app.get("/documentation", (req, res) => {
    res.render("documentation");
});

app.get("/error-404", (req, res) => {
    res.render("samples/error-404");
});
app.get("/error-500", (req, res) => {
    res.render("samples/error-500");
});

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});