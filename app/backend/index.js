import express from 'express';

const app = express();
const port = 3001;

const products = [
  { id: 1, name: 'Camiseta Básica', price: 39.9 },
  { id: 2, name: 'Calça Jeans', price: 99.9 },
  { id: 3, name: 'Tênis Esportivo', price: 199.9 },
  { id: 4, name: 'Jaqueta Corta Vento', price: 149.9 },
  { id: 5, name: 'Relógio Digital', price: 89.9 },
  { id: 6, name: 'Boné Estiloso', price: 29.9 },
  { id: 7, name: 'Mochila Escolar', price: 79.9 },
  { id: 8, name: 'Óculos de Sol', price: 59.9 },
  { id: 9, name: 'Fone de Ouvido', price: 49.9 },
  { id: 10, name: 'Carteira de Couro', price: 54.9 }
];

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`API de produtos rodando em http://localhost:${port}`);
});
