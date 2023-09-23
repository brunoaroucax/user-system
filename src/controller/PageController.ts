import { Request, Response } from "express";

class PageController{

  myProfile( request: Request, response: Response){
    return response.render('pages/meu-perfil');
  }

  usuarios( request: Request, response: Response){
    return response.render('pages/usuarios');
  }
}


export default new PageController();