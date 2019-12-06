const express = require('express');
const app = express();

const port = 3000;

app.set('view engine', 'ejs');
app.set('view', 'views');

app.get('/', (request, response) => {
 response.sendFile('integration/index.html', {root: '.'});
});












app.listen(port, () => console.log(`Server listening on port ${port}`));