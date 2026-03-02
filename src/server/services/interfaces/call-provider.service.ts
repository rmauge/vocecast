export interface CreateCallInput {
  from: string;
  to: string;
  audioUrl: string;
}

export interface CallResult {
  callSid: string;
  status: string;
}

export interface SendSmsInput {
  from: string;
  to: string;
  body: string;
}

export interface SmsResult {
  messageSid: string;
  status: string;
}

export interface ICallProviderService {
  createCall(input: CreateCallInput): Promise<CallResult>;
  getCallStatus(callSid: string): Promise<string>;
  sendSms(input: SendSmsInput): Promise<SmsResult>;
}
