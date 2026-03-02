import type {
  ICallProviderHealthService,
  CallProviderName,
} from "../interfaces/call-provider-health.service";

/**
 * Stub implementation — always reports providers as healthy.
 * Replace with real health checks (status page polling, ping, etc.) when ready.
 */
export class CallProviderHealthService implements ICallProviderHealthService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async isHealthy(_provider: CallProviderName): Promise<boolean> {
    return true;
  }
}
