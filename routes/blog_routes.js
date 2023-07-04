import express from 'express';
import { UpdateBlog, addBlogs, deleteBlog, getAllBlogs, getById,getBlogsByUser } from '../controllers/blog_controller';

const blogRouter = express.Router();

blogRouter.get("/",getAllBlogs);
blogRouter.post("/add",addBlogs);
blogRouter.post("/update/:id",UpdateBlog);
blogRouter.get("/:id",getById);

blogRouter.delete("/:id",deleteBlog)
blogRouter.get("/user/:id",getBlogsByUser)

export default blogRouter;