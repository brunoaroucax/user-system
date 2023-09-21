import { v4 as uuidV4 } from 'uuid';
import db from '../database/connection';

interface IUser{
  username: string;
  email: string;
  password: string;
  firstname?: string;
  lastname?: string;
  address?: string;
  phone?: string;
  rule: number;
}

class User{

  async create({username, email, password}: IUser){
    
  }


}

export default User;