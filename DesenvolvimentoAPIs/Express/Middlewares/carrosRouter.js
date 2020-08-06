import express from 'express';
let router = express.Router();

router.get('/', (req, res) => {
    res.send(req.method);
})

export default router;