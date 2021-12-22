import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch('https://xkcd.com/info.0.json');
    const latestxkcd = await response.json();
    const maxNum = latestxkcd?.num;
    const randomNum = Math.floor(Math.random() * maxNum + 1);

    const randomxkcdUrl =
      'https://xkcd.com' + (maxNum ? `/${randomNum}/` : '/') + 'info.0.json';
    const randomResponse = await fetch(randomxkcdUrl);
    const randomxkcd = await randomResponse.json();

    return res
      .status(200)
      .json({
        title: randomxkcd.safe_title,
        alt: randomxkcd.alt,
        img: randomxkcd.img,
        transcript: randomxkcd.transcript
      });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}
