
# Trabajo Práctico: Desarrollo Web de Tres Capas

## ✨ Descripción

Este repositorio contiene el desarrollo de dos aplicaciones web simples utilizando una arquitectura de **tres capas**:  
- **Capa de Presentación**: interfaz HTML + JS  
- **Capa de Lógica de Negocio**: backend con Node.js + Express  
- **Capa de Acceso a Datos**: simulada mediante un array en memoria  

El objetivo es que las capas sean **independientes, escalables y mantenibles**, permitiendo el intercambio de componentes entre aplicaciones.

---

## 📁 Estructura del Repositorio

```
tp-desarrollo-web/
├── app-personas/
│   ├── index.html      # Frontend de personas
│   ├── server.js       # Backend con Express
│   └── db.js           # Base de datos simulada (array)
├── app-productos/
│   ├── index.html      # Frontend de productos
│   ├── server.js       # Backend con Express
│   └── db.js           # Base de datos simulada (array)
└── README.md
```

---

## 🧪 Cómo ejecutar cada aplicación

### 🧍 App de Personas

1. Ir a la carpeta:

```bash
cd app-personas
```

2. Inicializar el proyecto y levantar el servidor:

```bash
npm init -y
npm install express
node server.js
```

3. Abrir el navegador en:  
👉 http://localhost:3000

---

### 📦 App de Productos

1. Ir a la carpeta:

```bash
cd app-productos
```

2. Inicializar el proyecto y levantar el servidor:

```bash
npm init -y
npm install express
node server.js
```

3. Abrir el navegador en:  
👉 http://localhost:3001

---

## 🔁 Intercambio de Capas

Se realizaron intercambios entre capas de ambas apps, tal como solicita la consigna. Esto se puede verificar en los mensajes de commit, por ejemplo:

"reutilizacion db personas para app producto"
"reutilizacion server personas para app productos"
"adaptacion de db para app de productos"
"adaptacion server para app de productos"

## ✅ Requisitos

- Tener instalado [Node.js](https://nodejs.org/)
- Editor de texto como VS Code
- Navegador web

---
