import express  from "express";
import { GetAllUsers, Login, Signup }  from "../controllers/user_controller";


const router = express.Router();

router.get("/",GetAllUsers);
router.post("/signup",Signup)
router.post("/login",Login)

export default router;