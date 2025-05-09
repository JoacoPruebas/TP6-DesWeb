// db.js
let productos = [];

function getAll() {
  return productos;
}

function add(producto) {
  productos.push(producto);
}

function remove(nombre) {
  productos = productos.filter(p => p.nombre !== nombre);
}

function update(nombreOriginal, nuevosDatos) {
  const index = productos.findIndex(p => p.nombre === nombreOriginal);
  if (index !== -1) {
    productos[index] = { ...productos[index], ...nuevosDatos };
  }
}

module.exports = { getAll, add, remove, update };
