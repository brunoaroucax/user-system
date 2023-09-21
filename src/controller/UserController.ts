import User from "../model/User";
import { Request, Response } from "express";

class UserController{


  async create(request: Request, response: Response){
    const {username, email, password, confirmPassword} = request.body;



    return response.redirect('/login');
  }
}

export default new UserController();