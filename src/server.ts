import express from 'express';
import dotenv from 'dotenv';
import path from 'path';

import mainRoutes from './routes';

dotenv.config();
const port = process.env.PORT;

const server = express();

// Middleware para lidar com solicitações JSON
server.use(express.json());

// Middleware para lidar com dados de formulário
server.use(express.urlencoded({ extended: true }));

server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));

server.use(express.static(path.join(__dirname, '../public')));

server.use(mainRoutes);

// Rotas

server.get('/', (req, res) => {
  res.send('Pagina não encontrada');
})

server.listen(port, () => {
  console.log(`🔥 Server is running, http://localhost:${port}`)
})