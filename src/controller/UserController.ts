import User, {IUser} from "../model/User";
import { Request, Response } from "express";

class UserController{


  async create(request: Request, response: Response){
    const {username, email, password} = request.body;

    const user: IUser = {username, email, password};

    const usernameAlreadyExist = await User.findByUsername(username);
    if(usernameAlreadyExist.status){
      return response.send(usernameAlreadyExist.message);
    } 

    const emailAlreadyExist = await User.findByEmail(email);
    if(emailAlreadyExist.status){
      return response.send(emailAlreadyExist.message);
    } 

      await User.create(user);
      return response.redirect('/login');
  }

  async login(request: Request, response: Response){
    const { username, password } = request.body;

    if(!username || !password){
      return response.send('Preencha todos os campos')
    }

    const user = await User.findByUser(username, password);
    if(!user.status){
      return response.send(user.message);
    }

    if(user.status){
      return response.redirect('/painel')
    }
  }
}

export default new UserController();