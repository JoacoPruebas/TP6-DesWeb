// server.js
const express = require('express');
const app = express();
const port = 3001;
const db = require('./db');

app.use(express.json());
app.use(express.static(__dirname));

app.get('/productos', (req, res) => {
  res.json(db.getAll());
});

app.post('/productos', (req, res) => {
  db.add(req.body);
  res.status(201).json({ mensaje: 'Producto agregado' });
});

app.delete('/productos/:nombre', (req, res) => {
  db.remove(req.params.nombre);
  res.json({ mensaje: 'Producto eliminado' });
});

app.put('/productos/:nombreOriginal', (req, res) => {
  db.update(req.params.nombreOriginal, req.body);
  res.json({ mensaje: 'Producto actualizado' });
});

app.listen(port, () => {
  console.log(`Servidor de productos corriendo en http://localhost:${port}`);
});
