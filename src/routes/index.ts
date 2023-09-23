import { Router } from 'express';
import UserController from '../controller/UserController';
import PageController from '../controller/PageController';

const router = Router();

router.get('/', (request, response) => {
  return response.render('index');
});
router.get('/login', (request, response) => {
  return response.render('pages/login');
});
router.get('/criar-usuario', (request, response) => {
  return response.render('pages/criar-usuario')
});
router.get('/painel', (request, response) => {
  return response.render('pages/painel')
})

router.post('/criar-usuario', UserController.create);
router.post('/fazer-login', UserController.login);




export default router;