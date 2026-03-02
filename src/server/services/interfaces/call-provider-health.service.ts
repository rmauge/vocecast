export type CallProviderName = "twilio" | "plivo";

export interface ICallProviderHealthService {
  isHealthy(provider: CallProviderName): Promise<boolean>;
}
