import type { TransactionOutbox, TransactionStatus } from "../../../../generated/prisma";

export interface CreateTransactionInput {
  eventType: string;
  payload: Record<string, unknown>;
}

export interface ITransactionOutboxService {
  create(data: CreateTransactionInput): Promise<TransactionOutbox>;
  getPending(limit?: number): Promise<TransactionOutbox[]>;
  updateStatus(
    id: string,
    status: TransactionStatus,
    error?: string,
  ): Promise<TransactionOutbox>;
}
