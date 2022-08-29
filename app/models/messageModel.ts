import mongoose, { Schema } from 'mongoose';

interface Message {
  message: string;
  createdAt: Date;
  updatedAt: Date;
  changes: number;
}

const messageSchema = new Schema<Message>({
  message: {
    type: String,
    trim: true,
    limit: 256,
    required: true,
  },
  changes: {
    type: Number,
    default: 0,
    required: true,
  },
}, { timestamps: true });

export default mongoose.model('Message', messageSchema);
