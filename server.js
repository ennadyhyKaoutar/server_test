const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Endpoint pour recevoir les données
app.post('/data', (req, res) => {
  const receivedData = req.body;
  console.log('Données reçues :', receivedData);
  // Traitez les données ici (par exemple, enregistrez-les dans une variable)
  // Pour cet exemple, nous les stockons simplement dans une variable
  let responseData = {
    message: 'Données reçues avec succès',
    data: receivedData
  };
  res.json(responseData); // Répondre avec les données reçues en tant que JSON
});

// Utilisation du port fixe 4000
const port = 4000;
app.listen(port, () => {
  console.log(`Serveur à l'écoute sur le port ${port}`);
});
