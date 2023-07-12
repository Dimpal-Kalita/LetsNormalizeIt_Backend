import express  from "express";
import { GetAllUsers, Login, Signup,UpdatePassword }  from "../controllers/user_controller";


const router = express.Router();

router.get("/",GetAllUsers);
router.post("/signup",Signup)
router.post("/login",Login)
router.post("/UpdatePassword",UpdatePassword)
export default router;