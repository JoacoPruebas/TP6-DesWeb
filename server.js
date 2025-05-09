// server.js
const express = require('express');
const app = express();
const port = 3000;
const db = require('./db');

app.use(express.json());
app.use(express.static(__dirname));

app.get('/personas', (req, res) => {
  res.json(db.getAll());
});

app.post('/personas', (req, res) => {
  db.add(req.body);
  res.status(201).json({ mensaje: 'Persona agregada' });
});

app.delete('/personas/:nombre', (req, res) => {
  db.remove(req.params.nombre);
  res.json({ mensaje: 'Persona eliminada' });
});

app.put('/personas/:nombreOriginal', (req, res) => {
  db.update(req.params.nombreOriginal, req.body);
  res.json({ mensaje: 'Persona actualizada' });
});

app.listen(port, () => {
  console.log(`Servidor de personas corriendo en http://localhost:${port}`);
});
