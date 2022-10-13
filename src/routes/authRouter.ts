import { Router } from 'express';
import AuthController from '../controller/autcontroller/authcontroller';
const router = Router();

router.post('/register', AuthController.createController);


export default router;