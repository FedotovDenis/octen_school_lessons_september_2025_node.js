import {IUser, IUserDTO} from "../interfaces/user.interface";
import {userRepository} from "../repositories/user.repository";

class UserService {
    public getAll(): Promise<IUser[]> {
        return userRepository.getAll()
    }

    public create(user: IUserDTO): Promise<IUser> {
        return userRepository.create(user)
    }

    public getById(userId: string): Promise<IUserDTO> {
        return userRepository.getById(userId)
    }
    public async update(userId: string, userData: IUserDTO): Promise<IUser> {
        const user = await userRepository.update(userId, userData);
        if (!user) {
            throw new Error("User not found");
        }
        return user;
    }
    public async delete(userId: string): Promise<IUser> {
        return userRepository.delete(userId);
    }
}

export const userService = new UserService();