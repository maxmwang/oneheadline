import { Request, Response } from 'express';
import Message from '../models/messageModel';

// @desc Stream message
// @route GET /api/stream
// @sends {object} message on change
function streamMessage(req: Request, res: Response) {
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();
  // flush the headers to establish SSE with client

  const changeStream = Message.watch().on('change', (change) => {
    console.log(change);
    res.write(JSON.stringify(change));
  });

  res.on('close', () => {
    changeStream.close();
    res.end();
  });
}

export default streamMessage;
