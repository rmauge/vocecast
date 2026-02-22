import twilio from "twilio";
import VoiceResponse from "twilio/lib/twiml/VoiceResponse";
import type {
  ICallProviderService,
  CreateCallInput,
  CallResult,
} from "../../interfaces/call-provider.service";

export class TwilioCallProviderService implements ICallProviderService {
  private readonly client: twilio.Twilio;

  constructor(accountSid: string, authToken: string) {
    this.client = twilio(accountSid, authToken, {
      autoRetry: true,
      maxRetries: 3,
    });
  }

  async createCall(input: CreateCallInput): Promise<CallResult> {
    const twiml = new VoiceResponse();
    twiml.play(input.audioUrl);

    const call = await this.client.calls.create({
      from: input.from,
      to: input.to,
      twiml: twiml.toString(),
      machineDetection: "Enable",
    });

    return {
      callSid: call.sid,
      status: call.status,
    };
  }

  async getCallStatus(callSid: string): Promise<string> {
    const call = await this.client.calls(callSid).fetch();
    return call.status;
  }
}
