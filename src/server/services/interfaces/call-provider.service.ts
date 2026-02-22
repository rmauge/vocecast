export interface CreateCallInput {
  from: string;
  to: string;
  audioUrl: string;
}

export interface CallResult {
  callSid: string;
  status: string;
}

export interface ICallProviderService {
  createCall(input: CreateCallInput): Promise<CallResult>;
  getCallStatus(callSid: string): Promise<string>;
}
