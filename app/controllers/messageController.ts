import Message, { IMessage } from '../models/messageModel';

export async function getMessage(): Promise<IMessage> {
  const message = await Message.findOne({});

  // for intiial creation of message
  // necessary for 'createdAt' to be set
  if (!message) {
    const initialMessage = Message.create({ message: 'Initial Message.' });

    return initialMessage;
  }

  return message;
}

export async function updateMessage(newMessage: string): Promise<IMessage | null> {
  const message = await Message.findOneAndUpdate(
    {},
    {
      message: newMessage,
      $inc: { taps: 1 },
    },
    { new: true },
  );

  return message;
}
