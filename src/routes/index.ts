import { Router } from "express";

const router = Router();

router.get('/', (request, response) => {
  return response.render('index')
})




export default router;