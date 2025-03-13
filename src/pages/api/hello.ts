// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { UserProps } from '@/interfaces/global';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse<UserProps>) {
  const raw = await fetch('https://reqres.in/api/users?per_page=5');
  const response = await raw.json();

  res.status(200).json(response.data);
}
