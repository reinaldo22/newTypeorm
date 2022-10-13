import { Request, Response } from 'express';
import { User } from 'src/models/User';

class AuthController {

    public async createController(req: Request, res: Response) {
        const { name, email, password } = req.body;
        const user = await User.findOne({
            where: {
                email: email
            }
        });
        if (user) {
            return res.status(404).json({ message: "Usuario ja existe" })
        }

        const usercreate = User.create({
            name,
            email,
            password,
        })
        console.log(">>>>>>>>>>>>>", usercreate)
        await User.save(usercreate);
        return res.status(200).json(user)
    }

}

export default new AuthController();