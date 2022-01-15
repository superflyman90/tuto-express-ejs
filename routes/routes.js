import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('pages/index', {  test: "Welcome" })
})

export default router;