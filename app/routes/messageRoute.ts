import express from 'express';
import { getMessage, updateMessage } from '../controllers/messageController';

const router = express.Router();

router.route('/').get(getMessage).put(updateMessage);

export default router;
