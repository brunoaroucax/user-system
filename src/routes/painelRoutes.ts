import { Router } from 'express';
import UserController from '../controller/UserController';
import PageController from '../controller/PageController';

const routerPainel = Router();

routerPainel.get('/meu-perfil', PageController.myProfile);
routerPainel.get('/usuarios', UserController.getusers);

export default routerPainel;