// db.js
let personas = [];

function getAll() {
  return personas;
}

function add(persona) {
  personas.push(persona);
}

function remove(nombre) {
  personas = personas.filter(p => p.nombre !== nombre);
}

function update(nombreOriginal, nuevosDatos) {
  const index = personas.findIndex(p => p.nombre === nombreOriginal);
  if (index !== -1) {
    personas[index] = { ...personas[index], ...nuevosDatos };
  }
}

module.exports = { getAll, add, remove, update };
