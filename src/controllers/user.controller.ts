import {Request, Response} from "express";
import {userService} from "../services/user.service";
import {IUserDTO} from "../interfaces/user.interface";
import {StatusCodesEnum} from "../enums/status-codes.enum";

class UserController {
    public async getAll(req: Request, res: Response) {
        const data = await userService.getAll();
        res.status(StatusCodesEnum.OK).json(data)
    }

    public async create(req: Request, res: Response) {
        const user = req.body as IUserDTO;
        const data = await userService.create(user);
        res.status(StatusCodesEnum.CREATED).json(data)
    }

    public async getById(req: Request, res: Response) {
        const {id} = req.params;
        const data = await userService.getById(id);
        res.status(StatusCodesEnum.OK).json(data)
    }

    public async update(req: Request, res: Response): Promise<void> {
        const userId = req.params.id;
        const userData: IUserDTO = req.body;
        try {
            const user = await userService.update(userId, userData);
            res.status(200).json(user);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const userId = req.params.id;
        try {
            const user = await userService.delete(userId);
            res.status(StatusCodesEnum.OK).json(user);
        } catch (error) {
            res.status(StatusCodesEnum.NOT_FOUND).json({ message: error.message});
        }
    }
}

export const userController = new UserController();