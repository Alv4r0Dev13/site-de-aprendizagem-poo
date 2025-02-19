import { Buffer } from 'buffer';

export function objectToBase64(value: any) {
  return Buffer.from(JSON.stringify(value)).toString('base64');
}

export function base64ToObject(value: string | null) {
  if (value) return JSON.parse(Buffer.from(value, 'base64').toString('utf-8'));
  return null
}
