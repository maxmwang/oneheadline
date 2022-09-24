import mongoose, { Document, Schema } from 'mongoose';

export interface IChannel extends Document {
  code: string;
  password: string;
  headline: string;
  createdAt: Date;
  updatedAt: Date;
  taps: number;
}

const channelSchema = new Schema<IChannel>({
  code: {
    type: String,
    trim: true,
    maxLength: 16,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    default: '',
    trim: true,
  },
  headline: {
    type: String,
    trim: true,
    maxLength: 64,
    required: true,
  },
  taps: {
    type: Number,
    default: 0,
    required: true,
  },
}, { timestamps: true });

export default mongoose.model('Channel', channelSchema);
