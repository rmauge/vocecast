import type {
  PrismaClient,
  TransactionOutbox,
  TransactionStatus,
} from "../../../../../generated/prisma";
import type { Prisma } from "../../../../../generated/prisma";
import type {
  ITransactionOutboxService,
  CreateTransactionInput,
} from "../../interfaces/transaction-outbox.service";

export class PrismaTransactionOutboxService
  implements ITransactionOutboxService
{
  constructor(private readonly db: PrismaClient) {}

  async create(data: CreateTransactionInput): Promise<TransactionOutbox> {
    return this.db.transactionOutbox.create({
      data: {
        eventType: data.eventType,
        payload: data.payload as Prisma.InputJsonValue,
      },
    });
  }

  async getPending(limit = 10): Promise<TransactionOutbox[]> {
    return this.db.transactionOutbox.findMany({
      where: { status: "PENDING" },
      orderBy: { createdAt: "asc" },
      take: limit,
    });
  }

  async updateStatus(
    id: string,
    status: TransactionStatus,
    error?: string,
  ): Promise<TransactionOutbox> {
    return this.db.transactionOutbox.update({
      where: { id },
      data: {
        status,
        error,
        retries: status === "FAILED" ? { increment: 1 } : undefined,
      },
    });
  }
}
