import { Message } from 'ai';

export interface ChatSession {
  id: string;
  createdAt: Date;
  messages: Message[];
}

export interface DiagnosticData {
  vitalSign: string;
  stability: number;
  heartRate: number;
}
