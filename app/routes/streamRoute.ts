import express from 'express';

import streamMessage from '../controllers/streamController';

const router = express.Router();

router.route('/').get(streamMessage);

export default router;
