import { NextResponse } from 'next/server';
import { appendToSheet } from '@/lib/sheet';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, location, phone, experience, referral } = body;

    // Google Sheets'e kaydedilecek veri
    const data = [
      [new Date().toISOString(), name, email, location, phone, experience, referral || ''],
    ];

    await appendToSheet(data);

    return NextResponse.json({ message: 'Form verisi başarıyla kaydedildi' });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Form verisi kaydedilemedi' }, { status: 500 });
  }
}
