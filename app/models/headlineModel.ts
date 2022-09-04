import mongoose, { Schema } from 'mongoose';

export interface IHeadline {
  headline: string;
  createdAt: Date;
  updatedAt: Date;
  taps: number;
}

const headlineSchema = new Schema<IHeadline>({
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

export default mongoose.model('Headline', headlineSchema);
