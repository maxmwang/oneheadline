import mongoose, { Schema } from 'mongoose';

export interface IMessage {
  message: string;
  createdAt: Date;
  updatedAt: Date;
  taps: number;
}

const messageSchema = new Schema<IMessage>({
  message: {
    type: String,
    trim: true,
    limit: 256,
    required: true,
  },
  taps: {
    type: Number,
    default: 0,
    required: true,
  },
}, { timestamps: true });

export default mongoose.model('Message', messageSchema);
