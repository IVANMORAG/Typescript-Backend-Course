import { UserModel } from "../models/User";
import { UserInterface } from "../interfaces/UserInterface";

export class UserRepository{
    async create(user:UserInterface){
        return await new UserModel(user).save()
    }

    async findByEmail(email:String){
        return await UserModel.findOne({email})
    }

    async findAllEmails() {
        return await UserModel.find({}, { email: 1, _id: 0 }); // Solo devuelve emails, sin _id
    }

    
} 