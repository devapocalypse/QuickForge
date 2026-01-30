import express from 'express';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('public'));

app.get("/", (req, res) => {
  res.render("login-home");
});

app.listen(port, () => {
  console.log(`QuickForge listening at http://localhost:${port}`);
});