import {IUser, IUserDTO} from "../interfaces/user.interface";
import {User} from "../models/user.model";

class UserRepository{
    public getAll():Promise<IUser[]>{
        return User.find()
    }
    public create(user:IUserDTO):Promise<IUser>{
        return User.create(user)
    }
    public getById(userId:string):Promise<IUser>{
        return User.findById(userId)
    }
    public async update(userId: string, userData: IUserDTO): Promise<IUser> {
        const user = await User.findByIdAndUpdate(userId, userData, { new: true });
        if (!user) {
            throw new Error("User not found");
        }
        return user;
    }
    public async delete(userId: string): Promise<IUser> {
        const user = await User.findByIdAndDelete(userId);
        if (!user) {
            throw new Error("User not found");
        }
        return user;
    }
}

export const userRepository = new UserRepository();