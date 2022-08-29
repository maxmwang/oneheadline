import { Request, Response } from 'express';
import Message from '../models/messageModel';

// @desc Get message
// @route GET /api/message
// @sends {object} message
export async function getMessage(req: Request, res: Response): Promise<Response> {
  const message = await Message.findOne({});

  // for intiial creation of message
  // necessary for 'createdAt' to be set
  if (!message) {
    const initialMessage = Message.create({ message: 'Initial Message.' });

    return res.status(200).json(initialMessage);
  }

  return res.status(200).json(message);
}

type UpdateRequest = Request & {
  body: {
    message: string;
  }
};
// @desc Update message
// @route PUT /api/message
// @params {string} req.body.message - required
// @sends {object} new message
export async function updateMessage(req: UpdateRequest, res: Response): Promise<Response> {
  const { message } = req.body;
  const newMessage = await Message.findOneAndUpdate(
    {},
    {
      message,
      $inc: { changes: 1 },
    },
    { new: true },
  );

  return res.status(200).json(newMessage);
}
