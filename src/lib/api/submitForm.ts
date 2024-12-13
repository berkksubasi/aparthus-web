import { NextApiRequest, NextApiResponse } from 'next';
import { appendToSheet } from '../sheet';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, location, phone, experience, referral } = req.body;

    const data = [
      [new Date().toISOString(), name, email, location, phone, experience, referral || ''],
    ];

    try {
      await appendToSheet(data);
      res.status(200).json({ message: 'Form data successfully saved' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to save data' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
