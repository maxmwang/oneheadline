import Headline, { IHeadline } from '../models/headlineModel';

export async function getHeadline(): Promise<IHeadline> {
  const headline = await Headline.findOne({});

  // for intiial creation of headline
  // necessary for 'createdAt' to be set
  if (!headline) {
    const initialHeadline = Headline.create({ headline: 'Initial Headline.' });

    return initialHeadline;
  }

  return headline;
}

export async function updateHeadline(newHeadline: string): Promise<IHeadline | null> {
  const headline = await Headline.findOneAndUpdate(
    {},
    {
      headline: newHeadline,
      $inc: { taps: 1 },
    },
    { new: true },
  );

  return headline;
}
