const express = require('express');
const app = express();

const article = require('./data/article.json');
app.locals.article = article;


const port = 3000;


app.use(express.static("integration"));

app.set('view engine', 'ejs');
app.set('view', 'views');

app.get('/', (request, response) => {
 response.render('index.ejs');
});


// mise en place détail d'un article

app.get('/article/:id', (request, response) => {
  response.send(index.id(request.params.id));

})












app.listen(port, () => console.log(`Server listening on port ${port}`));