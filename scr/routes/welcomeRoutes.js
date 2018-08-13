import express from 'express';
const router = express.Router();
import {welcome} from '../controllers/welcome';

router.get('/', (req, res) => {
    const response = welcome(req);
    if (response.status) {
      return res.status(500).send(response);
    }
    return res.send(response);
});

export default router;
