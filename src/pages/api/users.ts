import { DefaultResponseType, UserProps } from '@/interfaces/global';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse<UserProps | DefaultResponseType>) {
  try {
    switch (req.method) {
      case 'GET':
        const raw = await fetch(`https://reqres.in/api/users?per_page=3&page=${req.query.page}`);
        const response = await raw.json();

        res.status(200).json(response.data);
        break;

      case 'POST':
        console.log('DO SOMETHING');
        res.status(201).send({ success: true });
        break;

      default:
        throw new Error('METHOD NOT FOUND');
    }
  } catch (error) {
    res.status(400).json({ error: true, message: String(error) });
  }
}
