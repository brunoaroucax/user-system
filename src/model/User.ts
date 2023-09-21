import { v4 as uuidV4 } from 'uuid';
import db from '../database/connection';

export interface IUser{
  username: string;
  email: string;
  password: string;
  firstname?: string;
  lastname?: string;
  address?: string;
  phone?: string;
  rule?: number;
  created_at?: Date;
  updated_at?: Date;
}

class User{

  async create({username, email, password}: IUser){

    try {
      const user = {
        id: uuidV4(),
        username,
        email,
        password,
        created_at: new Date(),
        rule: 1
      }

      await db.insert(user).table('users');

    } catch (error) {
      console.log(error);
    }
  }

  async findByEmail(email: string){
    try {
      
      const result = await db.select('email').table('users').where({email: email});

      if(result.length > 0){
        return {status: true, message: 'O email ja existe!'};
      }
      return {status: false};

    } catch (error) {
      console.log(error);
      return {status: true, message: error};
    }
  }

  async findByUsername(username: string){
    try {
      
      const result = await db.select('username').table('users').where({username: username});

      if(result.length > 0){
        return {status: true, message: 'O username ja existe!'};
      }
      return {status: false};

    } catch (error) {
      console.log(error);
      return {status: true, message: error};
    }
  }

  async findByUser(username: string, password: string){
    try {
      const result = await db.select(['username','email','rule'])
        .where({username: username, password: password })
        .table('users');

      if(result.length > 0){
        return {status: true, user: result}
      } else{
        return {status: false, message: 'Username ou senha inválidos'}
      }


    } catch (error) {
      return {status: false, message: error}
    }
  }

}

export default new User();