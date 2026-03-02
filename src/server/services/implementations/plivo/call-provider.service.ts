import * as plivo from "plivo";
import type {
  ICallProviderService,
  CreateCallInput,
  CallResult,
  SendSmsInput,
  SmsResult,
} from "../../interfaces/call-provider.service";

export class PlivoCallProviderService implements ICallProviderService {
  private readonly client: plivo.Client;
  private readonly answerBaseUrl: string;

  constructor(authId: string, authToken: string, answerBaseUrl: string) {
    this.client = new plivo.Client(authId, authToken);
    this.answerBaseUrl = answerBaseUrl;
  }

  async createCall(input: CreateCallInput): Promise<CallResult> {
    const answerUrl = `${this.answerBaseUrl}/api/plivo/answer?audioUrl=${encodeURIComponent(input.audioUrl)}`;

    const response = await this.client.calls.create(
      input.from,
      `<${input.to}>`,
      answerUrl,
      { machineDetection: "true" },
    );

    return {
      callSid: response.requestUuid as string,
      status: response.message as string,
    };
  }

  async getCallStatus(callSid: string): Promise<string> {
    const call = await this.client.calls.get(callSid);
    return call.callState as string;
  }

  async sendSms(input: SendSmsInput): Promise<SmsResult> {
    const response = await this.client.messages.create(
      input.from,
      input.to,
      input.body,
    );

    return {
      messageSid: response.messageUuid?.[0] as string,
      status: response.message as string,
    };
  }
}
