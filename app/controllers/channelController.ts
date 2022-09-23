import { Server, Socket } from 'socket.io';

import { getChannel, updateChannel } from '../handlers/channelHandlers';

export default function channelController(io: Server, socket: Socket) {
  socket.on('channel/get', async (channelCode: string) => {
    const channel = await getChannel(channelCode);
    socket.emit('channel', channel);
  });

  socket.on('headline/update', async (channelCode: string, newHeadline: string) => {
    const updatedChannel = await updateChannel(channelCode, newHeadline);
    io.to(channelCode).emit('channel', updatedChannel);
  });
}
