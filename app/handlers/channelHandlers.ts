import Channel, { IChannel } from '../models/channelModel';
import { Error } from '../config/socketTypes';

export async function getChannel(channelCode: string): Promise<IChannel> {
  const channel = await Channel.findOne({ code: channelCode });
  if (!channel) {
    const newChannel = Channel.create({
      code: channelCode,
      headline: `Welcome to channel :${channelCode}!`,
    });
    return newChannel;
  }

  return channel;
}

export async function updateChannel(
  channelCode: string,
  newHeadline: string,
): Promise<IChannel | Error> {
  const channel = await Channel.findOneAndUpdate(
    { channelCode },
    {
      headline: newHeadline,
      $inc: { taps: 1 },
    },
    { new: true },
  );
  if (!channel) {
    return {
      type: 'code',
      message: 'Channel not found',
    };
  }

  return channel;
}
