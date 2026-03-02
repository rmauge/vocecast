
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>
/**
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model Template
 * 
 */
export type Template = $Result.DefaultSelection<Prisma.$TemplatePayload>
/**
 * Model VoiceClone
 * 
 */
export type VoiceClone = $Result.DefaultSelection<Prisma.$VoiceClonePayload>
/**
 * Model VoiceSample
 * 
 */
export type VoiceSample = $Result.DefaultSelection<Prisma.$VoiceSamplePayload>
/**
 * Model ScheduledReminder
 * 
 */
export type ScheduledReminder = $Result.DefaultSelection<Prisma.$ScheduledReminderPayload>
/**
 * Model TransactionOutbox
 * 
 */
export type TransactionOutbox = $Result.DefaultSelection<Prisma.$TransactionOutboxPayload>
/**
 * Model ProviderApiKey
 * 
 */
export type ProviderApiKey = $Result.DefaultSelection<Prisma.$ProviderApiKeyPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  POWER_USER: 'POWER_USER',
  USER: 'USER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const CloneProvider: {
  ELEVENLABS: 'ELEVENLABS'
};

export type CloneProvider = (typeof CloneProvider)[keyof typeof CloneProvider]


export const ReminderOffset: {
  DAY_BEFORE_MORNING: 'DAY_BEFORE_MORNING',
  DAY_BEFORE_AFTERNOON: 'DAY_BEFORE_AFTERNOON',
  DAY_BEFORE_EVENING: 'DAY_BEFORE_EVENING'
};

export type ReminderOffset = (typeof ReminderOffset)[keyof typeof ReminderOffset]


export const CallStatus: {
  NOT_STARTED: 'NOT_STARTED',
  STARTED: 'STARTED',
  COMPLETED: 'COMPLETED',
  BUSY: 'BUSY',
  NO_ANSWER: 'NO_ANSWER',
  CANCELLED: 'CANCELLED',
  FAILED: 'FAILED'
};

export type CallStatus = (typeof CallStatus)[keyof typeof CallStatus]


export const TransactionStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type CloneProvider = $Enums.CloneProvider

export const CloneProvider: typeof $Enums.CloneProvider

export type ReminderOffset = $Enums.ReminderOffset

export const ReminderOffset: typeof $Enums.ReminderOffset

export type CallStatus = $Enums.CallStatus

export const CallStatus: typeof $Enums.CallStatus

export type TransactionStatus = $Enums.TransactionStatus

export const TransactionStatus: typeof $Enums.TransactionStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.template`: Exposes CRUD operations for the **Template** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Templates
    * const templates = await prisma.template.findMany()
    * ```
    */
  get template(): Prisma.TemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.voiceClone`: Exposes CRUD operations for the **VoiceClone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VoiceClones
    * const voiceClones = await prisma.voiceClone.findMany()
    * ```
    */
  get voiceClone(): Prisma.VoiceCloneDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.voiceSample`: Exposes CRUD operations for the **VoiceSample** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VoiceSamples
    * const voiceSamples = await prisma.voiceSample.findMany()
    * ```
    */
  get voiceSample(): Prisma.VoiceSampleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scheduledReminder`: Exposes CRUD operations for the **ScheduledReminder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScheduledReminders
    * const scheduledReminders = await prisma.scheduledReminder.findMany()
    * ```
    */
  get scheduledReminder(): Prisma.ScheduledReminderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transactionOutbox`: Exposes CRUD operations for the **TransactionOutbox** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TransactionOutboxes
    * const transactionOutboxes = await prisma.transactionOutbox.findMany()
    * ```
    */
  get transactionOutbox(): Prisma.TransactionOutboxDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.providerApiKey`: Exposes CRUD operations for the **ProviderApiKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProviderApiKeys
    * const providerApiKeys = await prisma.providerApiKey.findMany()
    * ```
    */
  get providerApiKey(): Prisma.ProviderApiKeyDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Session: 'Session',
    Account: 'Account',
    Verification: 'Verification',
    Organization: 'Organization',
    Client: 'Client',
    Template: 'Template',
    VoiceClone: 'VoiceClone',
    VoiceSample: 'VoiceSample',
    ScheduledReminder: 'ScheduledReminder',
    TransactionOutbox: 'TransactionOutbox',
    ProviderApiKey: 'ProviderApiKey'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "session" | "account" | "verification" | "organization" | "client" | "template" | "voiceClone" | "voiceSample" | "scheduledReminder" | "transactionOutbox" | "providerApiKey"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
          }
        }
      }
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      Template: {
        payload: Prisma.$TemplatePayload<ExtArgs>
        fields: Prisma.TemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findFirst: {
            args: Prisma.TemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findMany: {
            args: Prisma.TemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          create: {
            args: Prisma.TemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          createMany: {
            args: Prisma.TemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          delete: {
            args: Prisma.TemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          update: {
            args: Prisma.TemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          deleteMany: {
            args: Prisma.TemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          upsert: {
            args: Prisma.TemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          aggregate: {
            args: Prisma.TemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemplate>
          }
          groupBy: {
            args: Prisma.TemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemplateCountArgs<ExtArgs>
            result: $Utils.Optional<TemplateCountAggregateOutputType> | number
          }
        }
      }
      VoiceClone: {
        payload: Prisma.$VoiceClonePayload<ExtArgs>
        fields: Prisma.VoiceCloneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VoiceCloneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceClonePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VoiceCloneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceClonePayload>
          }
          findFirst: {
            args: Prisma.VoiceCloneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceClonePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VoiceCloneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceClonePayload>
          }
          findMany: {
            args: Prisma.VoiceCloneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceClonePayload>[]
          }
          create: {
            args: Prisma.VoiceCloneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceClonePayload>
          }
          createMany: {
            args: Prisma.VoiceCloneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VoiceCloneCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceClonePayload>[]
          }
          delete: {
            args: Prisma.VoiceCloneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceClonePayload>
          }
          update: {
            args: Prisma.VoiceCloneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceClonePayload>
          }
          deleteMany: {
            args: Prisma.VoiceCloneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VoiceCloneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VoiceCloneUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceClonePayload>[]
          }
          upsert: {
            args: Prisma.VoiceCloneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceClonePayload>
          }
          aggregate: {
            args: Prisma.VoiceCloneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVoiceClone>
          }
          groupBy: {
            args: Prisma.VoiceCloneGroupByArgs<ExtArgs>
            result: $Utils.Optional<VoiceCloneGroupByOutputType>[]
          }
          count: {
            args: Prisma.VoiceCloneCountArgs<ExtArgs>
            result: $Utils.Optional<VoiceCloneCountAggregateOutputType> | number
          }
        }
      }
      VoiceSample: {
        payload: Prisma.$VoiceSamplePayload<ExtArgs>
        fields: Prisma.VoiceSampleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VoiceSampleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceSamplePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VoiceSampleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceSamplePayload>
          }
          findFirst: {
            args: Prisma.VoiceSampleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceSamplePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VoiceSampleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceSamplePayload>
          }
          findMany: {
            args: Prisma.VoiceSampleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceSamplePayload>[]
          }
          create: {
            args: Prisma.VoiceSampleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceSamplePayload>
          }
          createMany: {
            args: Prisma.VoiceSampleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VoiceSampleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceSamplePayload>[]
          }
          delete: {
            args: Prisma.VoiceSampleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceSamplePayload>
          }
          update: {
            args: Prisma.VoiceSampleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceSamplePayload>
          }
          deleteMany: {
            args: Prisma.VoiceSampleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VoiceSampleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VoiceSampleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceSamplePayload>[]
          }
          upsert: {
            args: Prisma.VoiceSampleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceSamplePayload>
          }
          aggregate: {
            args: Prisma.VoiceSampleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVoiceSample>
          }
          groupBy: {
            args: Prisma.VoiceSampleGroupByArgs<ExtArgs>
            result: $Utils.Optional<VoiceSampleGroupByOutputType>[]
          }
          count: {
            args: Prisma.VoiceSampleCountArgs<ExtArgs>
            result: $Utils.Optional<VoiceSampleCountAggregateOutputType> | number
          }
        }
      }
      ScheduledReminder: {
        payload: Prisma.$ScheduledReminderPayload<ExtArgs>
        fields: Prisma.ScheduledReminderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduledReminderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledReminderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduledReminderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledReminderPayload>
          }
          findFirst: {
            args: Prisma.ScheduledReminderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledReminderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduledReminderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledReminderPayload>
          }
          findMany: {
            args: Prisma.ScheduledReminderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledReminderPayload>[]
          }
          create: {
            args: Prisma.ScheduledReminderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledReminderPayload>
          }
          createMany: {
            args: Prisma.ScheduledReminderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScheduledReminderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledReminderPayload>[]
          }
          delete: {
            args: Prisma.ScheduledReminderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledReminderPayload>
          }
          update: {
            args: Prisma.ScheduledReminderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledReminderPayload>
          }
          deleteMany: {
            args: Prisma.ScheduledReminderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduledReminderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScheduledReminderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledReminderPayload>[]
          }
          upsert: {
            args: Prisma.ScheduledReminderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledReminderPayload>
          }
          aggregate: {
            args: Prisma.ScheduledReminderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScheduledReminder>
          }
          groupBy: {
            args: Prisma.ScheduledReminderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduledReminderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduledReminderCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduledReminderCountAggregateOutputType> | number
          }
        }
      }
      TransactionOutbox: {
        payload: Prisma.$TransactionOutboxPayload<ExtArgs>
        fields: Prisma.TransactionOutboxFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionOutboxFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionOutboxPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionOutboxFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionOutboxPayload>
          }
          findFirst: {
            args: Prisma.TransactionOutboxFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionOutboxPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionOutboxFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionOutboxPayload>
          }
          findMany: {
            args: Prisma.TransactionOutboxFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionOutboxPayload>[]
          }
          create: {
            args: Prisma.TransactionOutboxCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionOutboxPayload>
          }
          createMany: {
            args: Prisma.TransactionOutboxCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionOutboxCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionOutboxPayload>[]
          }
          delete: {
            args: Prisma.TransactionOutboxDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionOutboxPayload>
          }
          update: {
            args: Prisma.TransactionOutboxUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionOutboxPayload>
          }
          deleteMany: {
            args: Prisma.TransactionOutboxDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionOutboxUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionOutboxUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionOutboxPayload>[]
          }
          upsert: {
            args: Prisma.TransactionOutboxUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionOutboxPayload>
          }
          aggregate: {
            args: Prisma.TransactionOutboxAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactionOutbox>
          }
          groupBy: {
            args: Prisma.TransactionOutboxGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionOutboxGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionOutboxCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionOutboxCountAggregateOutputType> | number
          }
        }
      }
      ProviderApiKey: {
        payload: Prisma.$ProviderApiKeyPayload<ExtArgs>
        fields: Prisma.ProviderApiKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProviderApiKeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderApiKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProviderApiKeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderApiKeyPayload>
          }
          findFirst: {
            args: Prisma.ProviderApiKeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderApiKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProviderApiKeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderApiKeyPayload>
          }
          findMany: {
            args: Prisma.ProviderApiKeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderApiKeyPayload>[]
          }
          create: {
            args: Prisma.ProviderApiKeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderApiKeyPayload>
          }
          createMany: {
            args: Prisma.ProviderApiKeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProviderApiKeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderApiKeyPayload>[]
          }
          delete: {
            args: Prisma.ProviderApiKeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderApiKeyPayload>
          }
          update: {
            args: Prisma.ProviderApiKeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderApiKeyPayload>
          }
          deleteMany: {
            args: Prisma.ProviderApiKeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProviderApiKeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProviderApiKeyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderApiKeyPayload>[]
          }
          upsert: {
            args: Prisma.ProviderApiKeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderApiKeyPayload>
          }
          aggregate: {
            args: Prisma.ProviderApiKeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProviderApiKey>
          }
          groupBy: {
            args: Prisma.ProviderApiKeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProviderApiKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProviderApiKeyCountArgs<ExtArgs>
            result: $Utils.Optional<ProviderApiKeyCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    session?: SessionOmit
    account?: AccountOmit
    verification?: VerificationOmit
    organization?: OrganizationOmit
    client?: ClientOmit
    template?: TemplateOmit
    voiceClone?: VoiceCloneOmit
    voiceSample?: VoiceSampleOmit
    scheduledReminder?: ScheduledReminderOmit
    transactionOutbox?: TransactionOutboxOmit
    providerApiKey?: ProviderApiKeyOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    accounts: number
    templates: number
    voiceClones: number
    voiceSamples: number
    clients: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    templates?: boolean | UserCountOutputTypeCountTemplatesArgs
    voiceClones?: boolean | UserCountOutputTypeCountVoiceClonesArgs
    voiceSamples?: boolean | UserCountOutputTypeCountVoiceSamplesArgs
    clients?: boolean | UserCountOutputTypeCountClientsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVoiceClonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoiceCloneWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVoiceSamplesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoiceSampleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
  }


  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    users: number
    clients: number
    templates: number
    voiceClones: number
    voiceSamples: number
    apiKeys: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | OrganizationCountOutputTypeCountUsersArgs
    clients?: boolean | OrganizationCountOutputTypeCountClientsArgs
    templates?: boolean | OrganizationCountOutputTypeCountTemplatesArgs
    voiceClones?: boolean | OrganizationCountOutputTypeCountVoiceClonesArgs
    voiceSamples?: boolean | OrganizationCountOutputTypeCountVoiceSamplesArgs
    apiKeys?: boolean | OrganizationCountOutputTypeCountApiKeysArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountVoiceClonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoiceCloneWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountVoiceSamplesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoiceSampleWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountApiKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProviderApiKeyWhereInput
  }


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    scheduledReminders: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scheduledReminders?: boolean | ClientCountOutputTypeCountScheduledRemindersArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountScheduledRemindersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduledReminderWhereInput
  }


  /**
   * Count Type TemplateCountOutputType
   */

  export type TemplateCountOutputType = {
    scheduledReminders: number
  }

  export type TemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scheduledReminders?: boolean | TemplateCountOutputTypeCountScheduledRemindersArgs
  }

  // Custom InputTypes
  /**
   * TemplateCountOutputType without action
   */
  export type TemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateCountOutputType
     */
    select?: TemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TemplateCountOutputType without action
   */
  export type TemplateCountOutputTypeCountScheduledRemindersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduledReminderWhereInput
  }


  /**
   * Count Type VoiceCloneCountOutputType
   */

  export type VoiceCloneCountOutputType = {
    scheduledReminders: number
  }

  export type VoiceCloneCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scheduledReminders?: boolean | VoiceCloneCountOutputTypeCountScheduledRemindersArgs
  }

  // Custom InputTypes
  /**
   * VoiceCloneCountOutputType without action
   */
  export type VoiceCloneCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceCloneCountOutputType
     */
    select?: VoiceCloneCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VoiceCloneCountOutputType without action
   */
  export type VoiceCloneCountOutputTypeCountScheduledRemindersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduledReminderWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.UserRole | null
    orgId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.UserRole | null
    orgId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    createdAt: number
    updatedAt: number
    role: number
    orgId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    orgId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    orgId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    orgId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image: string | null
    createdAt: Date
    updatedAt: Date
    role: $Enums.UserRole
    orgId: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    orgId?: boolean
    org?: boolean | User$orgArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    templates?: boolean | User$templatesArgs<ExtArgs>
    voiceClones?: boolean | User$voiceClonesArgs<ExtArgs>
    voiceSamples?: boolean | User$voiceSamplesArgs<ExtArgs>
    clients?: boolean | User$clientsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    orgId?: boolean
    org?: boolean | User$orgArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    orgId?: boolean
    org?: boolean | User$orgArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    orgId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "createdAt" | "updatedAt" | "role" | "orgId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | User$orgArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    templates?: boolean | User$templatesArgs<ExtArgs>
    voiceClones?: boolean | User$voiceClonesArgs<ExtArgs>
    voiceSamples?: boolean | User$voiceSamplesArgs<ExtArgs>
    clients?: boolean | User$clientsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | User$orgArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | User$orgArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      org: Prisma.$OrganizationPayload<ExtArgs> | null
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      templates: Prisma.$TemplatePayload<ExtArgs>[]
      voiceClones: Prisma.$VoiceClonePayload<ExtArgs>[]
      voiceSamples: Prisma.$VoiceSamplePayload<ExtArgs>[]
      clients: Prisma.$ClientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      emailVerified: boolean
      image: string | null
      createdAt: Date
      updatedAt: Date
      role: $Enums.UserRole
      orgId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    org<T extends User$orgArgs<ExtArgs> = {}>(args?: Subset<T, User$orgArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    templates<T extends User$templatesArgs<ExtArgs> = {}>(args?: Subset<T, User$templatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    voiceClones<T extends User$voiceClonesArgs<ExtArgs> = {}>(args?: Subset<T, User$voiceClonesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoiceClonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    voiceSamples<T extends User$voiceSamplesArgs<ExtArgs> = {}>(args?: Subset<T, User$voiceSamplesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoiceSamplePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    clients<T extends User$clientsArgs<ExtArgs> = {}>(args?: Subset<T, User$clientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly orgId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.org
   */
  export type User$orgArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.templates
   */
  export type User$templatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    where?: TemplateWhereInput
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    cursor?: TemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * User.voiceClones
   */
  export type User$voiceClonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceClone
     */
    select?: VoiceCloneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceClone
     */
    omit?: VoiceCloneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceCloneInclude<ExtArgs> | null
    where?: VoiceCloneWhereInput
    orderBy?: VoiceCloneOrderByWithRelationInput | VoiceCloneOrderByWithRelationInput[]
    cursor?: VoiceCloneWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoiceCloneScalarFieldEnum | VoiceCloneScalarFieldEnum[]
  }

  /**
   * User.voiceSamples
   */
  export type User$voiceSamplesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceSample
     */
    select?: VoiceSampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceSample
     */
    omit?: VoiceSampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceSampleInclude<ExtArgs> | null
    where?: VoiceSampleWhereInput
    orderBy?: VoiceSampleOrderByWithRelationInput | VoiceSampleOrderByWithRelationInput[]
    cursor?: VoiceSampleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoiceSampleScalarFieldEnum | VoiceSampleScalarFieldEnum[]
  }

  /**
   * User.clients
   */
  export type User$clientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    cursor?: ClientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    expiresAt: number
    token: number
    createdAt: number
    updatedAt: number
    ipAddress: number
    userAgent: number
    userId: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    expiresAt: Date
    token: string
    createdAt: Date
    updatedAt: Date
    ipAddress: string | null
    userAgent: string | null
    userId: string
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expiresAt" | "token" | "createdAt" | "updatedAt" | "ipAddress" | "userAgent" | "userId", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expiresAt: Date
      token: string
      createdAt: Date
      updatedAt: Date
      ipAddress: string | null
      userAgent: string | null
      userId: string
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly token: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    accountId: number
    providerId: number
    userId: number
    accessToken: number
    refreshToken: number
    idToken: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    scope: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "providerId" | "userId" | "accessToken" | "refreshToken" | "idToken" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "scope" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      providerId: string
      userId: string
      accessToken: string | null
      refreshToken: string | null
      idToken: string | null
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      scope: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly accountId: FieldRef<"Account", 'String'>
    readonly providerId: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly idToken: FieldRef<"Account", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["verification"]>

  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verifications and returns the data saved in the database.
     * @param {VerificationCreateManyAndReturnArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications and returns the data updated in the database.
     * @param {VerificationUpdateManyAndReturnArgs} args - Arguments to update many Verifications.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Verification model
   */
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", 'String'>
    readonly identifier: FieldRef<"Verification", 'String'>
    readonly value: FieldRef<"Verification", 'String'>
    readonly expiresAt: FieldRef<"Verification", 'DateTime'>
    readonly createdAt: FieldRef<"Verification", 'DateTime'>
    readonly updatedAt: FieldRef<"Verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification createManyAndReturn
   */
  export type VerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification updateManyAndReturn
   */
  export type VerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
  }


  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    email: string | null
    phone: string | null
    outboundPhone: string | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    email: string | null
    phone: string | null
    outboundPhone: string | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    email: number
    phone: number
    outboundPhone: number
    _all: number
  }


  export type OrganizationMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    email?: true
    phone?: true
    outboundPhone?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    email?: true
    phone?: true
    outboundPhone?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    email?: true
    phone?: true
    outboundPhone?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    email: string | null
    phone: string | null
    outboundPhone: string | null
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    outboundPhone?: boolean
    users?: boolean | Organization$usersArgs<ExtArgs>
    clients?: boolean | Organization$clientsArgs<ExtArgs>
    templates?: boolean | Organization$templatesArgs<ExtArgs>
    voiceClones?: boolean | Organization$voiceClonesArgs<ExtArgs>
    voiceSamples?: boolean | Organization$voiceSamplesArgs<ExtArgs>
    apiKeys?: boolean | Organization$apiKeysArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    outboundPhone?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    outboundPhone?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    outboundPhone?: boolean
  }

  export type OrganizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "name" | "email" | "phone" | "outboundPhone", ExtArgs["result"]["organization"]>
  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Organization$usersArgs<ExtArgs>
    clients?: boolean | Organization$clientsArgs<ExtArgs>
    templates?: boolean | Organization$templatesArgs<ExtArgs>
    voiceClones?: boolean | Organization$voiceClonesArgs<ExtArgs>
    voiceSamples?: boolean | Organization$voiceSamplesArgs<ExtArgs>
    apiKeys?: boolean | Organization$apiKeysArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OrganizationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      clients: Prisma.$ClientPayload<ExtArgs>[]
      templates: Prisma.$TemplatePayload<ExtArgs>[]
      voiceClones: Prisma.$VoiceClonePayload<ExtArgs>[]
      voiceSamples: Prisma.$VoiceSamplePayload<ExtArgs>[]
      apiKeys: Prisma.$ProviderApiKeyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      name: string
      email: string | null
      phone: string | null
      outboundPhone: string | null
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {OrganizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations and returns the data updated in the database.
     * @param {OrganizationUpdateManyAndReturnArgs} args - Arguments to update many Organizations.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrganizationUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Organization$usersArgs<ExtArgs> = {}>(args?: Subset<T, Organization$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    clients<T extends Organization$clientsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$clientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    templates<T extends Organization$templatesArgs<ExtArgs> = {}>(args?: Subset<T, Organization$templatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    voiceClones<T extends Organization$voiceClonesArgs<ExtArgs> = {}>(args?: Subset<T, Organization$voiceClonesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoiceClonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    voiceSamples<T extends Organization$voiceSamplesArgs<ExtArgs> = {}>(args?: Subset<T, Organization$voiceSamplesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoiceSamplePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    apiKeys<T extends Organization$apiKeysArgs<ExtArgs> = {}>(args?: Subset<T, Organization$apiKeysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderApiKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Organization model
   */
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'String'>
    readonly createdAt: FieldRef<"Organization", 'DateTime'>
    readonly updatedAt: FieldRef<"Organization", 'DateTime'>
    readonly name: FieldRef<"Organization", 'String'>
    readonly email: FieldRef<"Organization", 'String'>
    readonly phone: FieldRef<"Organization", 'String'>
    readonly outboundPhone: FieldRef<"Organization", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization createManyAndReturn
   */
  export type OrganizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization updateManyAndReturn
   */
  export type OrganizationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to delete.
     */
    limit?: number
  }

  /**
   * Organization.users
   */
  export type Organization$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Organization.clients
   */
  export type Organization$clientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    cursor?: ClientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Organization.templates
   */
  export type Organization$templatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    where?: TemplateWhereInput
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    cursor?: TemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Organization.voiceClones
   */
  export type Organization$voiceClonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceClone
     */
    select?: VoiceCloneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceClone
     */
    omit?: VoiceCloneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceCloneInclude<ExtArgs> | null
    where?: VoiceCloneWhereInput
    orderBy?: VoiceCloneOrderByWithRelationInput | VoiceCloneOrderByWithRelationInput[]
    cursor?: VoiceCloneWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoiceCloneScalarFieldEnum | VoiceCloneScalarFieldEnum[]
  }

  /**
   * Organization.voiceSamples
   */
  export type Organization$voiceSamplesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceSample
     */
    select?: VoiceSampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceSample
     */
    omit?: VoiceSampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceSampleInclude<ExtArgs> | null
    where?: VoiceSampleWhereInput
    orderBy?: VoiceSampleOrderByWithRelationInput | VoiceSampleOrderByWithRelationInput[]
    cursor?: VoiceSampleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoiceSampleScalarFieldEnum | VoiceSampleScalarFieldEnum[]
  }

  /**
   * Organization.apiKeys
   */
  export type Organization$apiKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderApiKey
     */
    select?: ProviderApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderApiKey
     */
    omit?: ProviderApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderApiKeyInclude<ExtArgs> | null
    where?: ProviderApiKeyWhereInput
    orderBy?: ProviderApiKeyOrderByWithRelationInput | ProviderApiKeyOrderByWithRelationInput[]
    cursor?: ProviderApiKeyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProviderApiKeyScalarFieldEnum | ProviderApiKeyScalarFieldEnum[]
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    firstName: string | null
    lastName: string | null
    preferredName: string | null
    email: string | null
    phoneNumber: string | null
    orgId: string | null
    authorId: string | null
  }

  export type ClientMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    firstName: string | null
    lastName: string | null
    preferredName: string | null
    email: string | null
    phoneNumber: string | null
    orgId: string | null
    authorId: string | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    firstName: number
    lastName: number
    preferredName: number
    email: number
    phoneNumber: number
    orgId: number
    authorId: number
    _all: number
  }


  export type ClientMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    firstName?: true
    lastName?: true
    preferredName?: true
    email?: true
    phoneNumber?: true
    orgId?: true
    authorId?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    firstName?: true
    lastName?: true
    preferredName?: true
    email?: true
    phoneNumber?: true
    orgId?: true
    authorId?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    firstName?: true
    lastName?: true
    preferredName?: true
    email?: true
    phoneNumber?: true
    orgId?: true
    authorId?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    firstName: string
    lastName: string
    preferredName: string | null
    email: string
    phoneNumber: string
    orgId: string
    authorId: string
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    firstName?: boolean
    lastName?: boolean
    preferredName?: boolean
    email?: boolean
    phoneNumber?: boolean
    orgId?: boolean
    authorId?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    scheduledReminders?: boolean | Client$scheduledRemindersArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    firstName?: boolean
    lastName?: boolean
    preferredName?: boolean
    email?: boolean
    phoneNumber?: boolean
    orgId?: boolean
    authorId?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    firstName?: boolean
    lastName?: boolean
    preferredName?: boolean
    email?: boolean
    phoneNumber?: boolean
    orgId?: boolean
    authorId?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    firstName?: boolean
    lastName?: boolean
    preferredName?: boolean
    email?: boolean
    phoneNumber?: boolean
    orgId?: boolean
    authorId?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "firstName" | "lastName" | "preferredName" | "email" | "phoneNumber" | "orgId" | "authorId", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    scheduledReminders?: boolean | Client$scheduledRemindersArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      org: Prisma.$OrganizationPayload<ExtArgs>
      author: Prisma.$UserPayload<ExtArgs>
      scheduledReminders: Prisma.$ScheduledReminderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      firstName: string
      lastName: string
      preferredName: string | null
      email: string
      phoneNumber: string
      orgId: string
      authorId: string
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    org<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    scheduledReminders<T extends Client$scheduledRemindersArgs<ExtArgs> = {}>(args?: Subset<T, Client$scheduledRemindersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduledReminderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'String'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
    readonly updatedAt: FieldRef<"Client", 'DateTime'>
    readonly firstName: FieldRef<"Client", 'String'>
    readonly lastName: FieldRef<"Client", 'String'>
    readonly preferredName: FieldRef<"Client", 'String'>
    readonly email: FieldRef<"Client", 'String'>
    readonly phoneNumber: FieldRef<"Client", 'String'>
    readonly orgId: FieldRef<"Client", 'String'>
    readonly authorId: FieldRef<"Client", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.scheduledReminders
   */
  export type Client$scheduledRemindersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledReminder
     */
    select?: ScheduledReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledReminder
     */
    omit?: ScheduledReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledReminderInclude<ExtArgs> | null
    where?: ScheduledReminderWhereInput
    orderBy?: ScheduledReminderOrderByWithRelationInput | ScheduledReminderOrderByWithRelationInput[]
    cursor?: ScheduledReminderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduledReminderScalarFieldEnum | ScheduledReminderScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model Template
   */

  export type AggregateTemplate = {
    _count: TemplateCountAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  export type TemplateMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    content: string | null
    orgId: string | null
    authorId: string | null
  }

  export type TemplateMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    content: string | null
    orgId: string | null
    authorId: string | null
  }

  export type TemplateCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    content: number
    orgId: number
    authorId: number
    _all: number
  }


  export type TemplateMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    content?: true
    orgId?: true
    authorId?: true
  }

  export type TemplateMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    content?: true
    orgId?: true
    authorId?: true
  }

  export type TemplateCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    content?: true
    orgId?: true
    authorId?: true
    _all?: true
  }

  export type TemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Template to aggregate.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Templates
    **/
    _count?: true | TemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemplateMaxAggregateInputType
  }

  export type GetTemplateAggregateType<T extends TemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplate[P]>
      : GetScalarType<T[P], AggregateTemplate[P]>
  }




  export type TemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateWhereInput
    orderBy?: TemplateOrderByWithAggregationInput | TemplateOrderByWithAggregationInput[]
    by: TemplateScalarFieldEnum[] | TemplateScalarFieldEnum
    having?: TemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemplateCountAggregateInputType | true
    _min?: TemplateMinAggregateInputType
    _max?: TemplateMaxAggregateInputType
  }

  export type TemplateGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    content: string
    orgId: string
    authorId: string
    _count: TemplateCountAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  type GetTemplateGroupByPayload<T extends TemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemplateGroupByOutputType[P]>
            : GetScalarType<T[P], TemplateGroupByOutputType[P]>
        }
      >
    >


  export type TemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    content?: boolean
    orgId?: boolean
    authorId?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    scheduledReminders?: boolean | Template$scheduledRemindersArgs<ExtArgs>
    _count?: boolean | TemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    content?: boolean
    orgId?: boolean
    authorId?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    content?: boolean
    orgId?: boolean
    authorId?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    content?: boolean
    orgId?: boolean
    authorId?: boolean
  }

  export type TemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "name" | "content" | "orgId" | "authorId", ExtArgs["result"]["template"]>
  export type TemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    scheduledReminders?: boolean | Template$scheduledRemindersArgs<ExtArgs>
    _count?: boolean | TemplateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TemplateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Template"
    objects: {
      org: Prisma.$OrganizationPayload<ExtArgs>
      author: Prisma.$UserPayload<ExtArgs>
      scheduledReminders: Prisma.$ScheduledReminderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      name: string
      content: string
      orgId: string
      authorId: string
    }, ExtArgs["result"]["template"]>
    composites: {}
  }

  type TemplateGetPayload<S extends boolean | null | undefined | TemplateDefaultArgs> = $Result.GetResult<Prisma.$TemplatePayload, S>

  type TemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TemplateCountAggregateInputType | true
    }

  export interface TemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Template'], meta: { name: 'Template' } }
    /**
     * Find zero or one Template that matches the filter.
     * @param {TemplateFindUniqueArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TemplateFindUniqueArgs>(args: SelectSubset<T, TemplateFindUniqueArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Template that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TemplateFindUniqueOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, TemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TemplateFindFirstArgs>(args?: SelectSubset<T, TemplateFindFirstArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, TemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Templates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Templates
     * const templates = await prisma.template.findMany()
     * 
     * // Get first 10 Templates
     * const templates = await prisma.template.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const templateWithIdOnly = await prisma.template.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TemplateFindManyArgs>(args?: SelectSubset<T, TemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Template.
     * @param {TemplateCreateArgs} args - Arguments to create a Template.
     * @example
     * // Create one Template
     * const Template = await prisma.template.create({
     *   data: {
     *     // ... data to create a Template
     *   }
     * })
     * 
     */
    create<T extends TemplateCreateArgs>(args: SelectSubset<T, TemplateCreateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Templates.
     * @param {TemplateCreateManyArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const template = await prisma.template.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TemplateCreateManyArgs>(args?: SelectSubset<T, TemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Templates and returns the data saved in the database.
     * @param {TemplateCreateManyAndReturnArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const template = await prisma.template.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Templates and only return the `id`
     * const templateWithIdOnly = await prisma.template.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, TemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Template.
     * @param {TemplateDeleteArgs} args - Arguments to delete one Template.
     * @example
     * // Delete one Template
     * const Template = await prisma.template.delete({
     *   where: {
     *     // ... filter to delete one Template
     *   }
     * })
     * 
     */
    delete<T extends TemplateDeleteArgs>(args: SelectSubset<T, TemplateDeleteArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Template.
     * @param {TemplateUpdateArgs} args - Arguments to update one Template.
     * @example
     * // Update one Template
     * const template = await prisma.template.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TemplateUpdateArgs>(args: SelectSubset<T, TemplateUpdateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Templates.
     * @param {TemplateDeleteManyArgs} args - Arguments to filter Templates to delete.
     * @example
     * // Delete a few Templates
     * const { count } = await prisma.template.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TemplateDeleteManyArgs>(args?: SelectSubset<T, TemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Templates
     * const template = await prisma.template.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TemplateUpdateManyArgs>(args: SelectSubset<T, TemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates and returns the data updated in the database.
     * @param {TemplateUpdateManyAndReturnArgs} args - Arguments to update many Templates.
     * @example
     * // Update many Templates
     * const template = await prisma.template.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Templates and only return the `id`
     * const templateWithIdOnly = await prisma.template.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, TemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Template.
     * @param {TemplateUpsertArgs} args - Arguments to update or create a Template.
     * @example
     * // Update or create a Template
     * const template = await prisma.template.upsert({
     *   create: {
     *     // ... data to create a Template
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Template we want to update
     *   }
     * })
     */
    upsert<T extends TemplateUpsertArgs>(args: SelectSubset<T, TemplateUpsertArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateCountArgs} args - Arguments to filter Templates to count.
     * @example
     * // Count the number of Templates
     * const count = await prisma.template.count({
     *   where: {
     *     // ... the filter for the Templates we want to count
     *   }
     * })
    **/
    count<T extends TemplateCountArgs>(
      args?: Subset<T, TemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TemplateAggregateArgs>(args: Subset<T, TemplateAggregateArgs>): Prisma.PrismaPromise<GetTemplateAggregateType<T>>

    /**
     * Group by Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemplateGroupByArgs['orderBy'] }
        : { orderBy?: TemplateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Template model
   */
  readonly fields: TemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Template.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    org<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    scheduledReminders<T extends Template$scheduledRemindersArgs<ExtArgs> = {}>(args?: Subset<T, Template$scheduledRemindersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduledReminderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Template model
   */
  interface TemplateFieldRefs {
    readonly id: FieldRef<"Template", 'String'>
    readonly createdAt: FieldRef<"Template", 'DateTime'>
    readonly updatedAt: FieldRef<"Template", 'DateTime'>
    readonly name: FieldRef<"Template", 'String'>
    readonly content: FieldRef<"Template", 'String'>
    readonly orgId: FieldRef<"Template", 'String'>
    readonly authorId: FieldRef<"Template", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Template findUnique
   */
  export type TemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findUniqueOrThrow
   */
  export type TemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findFirst
   */
  export type TemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findFirstOrThrow
   */
  export type TemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findMany
   */
  export type TemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Templates to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template create
   */
  export type TemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a Template.
     */
    data: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
  }

  /**
   * Template createMany
   */
  export type TemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Templates.
     */
    data: TemplateCreateManyInput | TemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Template createManyAndReturn
   */
  export type TemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * The data used to create many Templates.
     */
    data: TemplateCreateManyInput | TemplateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Template update
   */
  export type TemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a Template.
     */
    data: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
    /**
     * Choose, which Template to update.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template updateMany
   */
  export type TemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Templates.
     */
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyInput>
    /**
     * Filter which Templates to update
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to update.
     */
    limit?: number
  }

  /**
   * Template updateManyAndReturn
   */
  export type TemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * The data used to update Templates.
     */
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyInput>
    /**
     * Filter which Templates to update
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Template upsert
   */
  export type TemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the Template to update in case it exists.
     */
    where: TemplateWhereUniqueInput
    /**
     * In case the Template found by the `where` argument doesn't exist, create a new Template with this data.
     */
    create: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
    /**
     * In case the Template was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
  }

  /**
   * Template delete
   */
  export type TemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter which Template to delete.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template deleteMany
   */
  export type TemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Templates to delete
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to delete.
     */
    limit?: number
  }

  /**
   * Template.scheduledReminders
   */
  export type Template$scheduledRemindersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledReminder
     */
    select?: ScheduledReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledReminder
     */
    omit?: ScheduledReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledReminderInclude<ExtArgs> | null
    where?: ScheduledReminderWhereInput
    orderBy?: ScheduledReminderOrderByWithRelationInput | ScheduledReminderOrderByWithRelationInput[]
    cursor?: ScheduledReminderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduledReminderScalarFieldEnum | ScheduledReminderScalarFieldEnum[]
  }

  /**
   * Template without action
   */
  export type TemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
  }


  /**
   * Model VoiceClone
   */

  export type AggregateVoiceClone = {
    _count: VoiceCloneCountAggregateOutputType | null
    _min: VoiceCloneMinAggregateOutputType | null
    _max: VoiceCloneMaxAggregateOutputType | null
  }

  export type VoiceCloneMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    description: string | null
    cloneProvider: $Enums.CloneProvider | null
    providerId: string | null
    orgId: string | null
    authorId: string | null
  }

  export type VoiceCloneMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    description: string | null
    cloneProvider: $Enums.CloneProvider | null
    providerId: string | null
    orgId: string | null
    authorId: string | null
  }

  export type VoiceCloneCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    description: number
    cloneProvider: number
    providerId: number
    orgId: number
    authorId: number
    _all: number
  }


  export type VoiceCloneMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    description?: true
    cloneProvider?: true
    providerId?: true
    orgId?: true
    authorId?: true
  }

  export type VoiceCloneMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    description?: true
    cloneProvider?: true
    providerId?: true
    orgId?: true
    authorId?: true
  }

  export type VoiceCloneCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    description?: true
    cloneProvider?: true
    providerId?: true
    orgId?: true
    authorId?: true
    _all?: true
  }

  export type VoiceCloneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VoiceClone to aggregate.
     */
    where?: VoiceCloneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VoiceClones to fetch.
     */
    orderBy?: VoiceCloneOrderByWithRelationInput | VoiceCloneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VoiceCloneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VoiceClones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VoiceClones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VoiceClones
    **/
    _count?: true | VoiceCloneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoiceCloneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoiceCloneMaxAggregateInputType
  }

  export type GetVoiceCloneAggregateType<T extends VoiceCloneAggregateArgs> = {
        [P in keyof T & keyof AggregateVoiceClone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVoiceClone[P]>
      : GetScalarType<T[P], AggregateVoiceClone[P]>
  }




  export type VoiceCloneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoiceCloneWhereInput
    orderBy?: VoiceCloneOrderByWithAggregationInput | VoiceCloneOrderByWithAggregationInput[]
    by: VoiceCloneScalarFieldEnum[] | VoiceCloneScalarFieldEnum
    having?: VoiceCloneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoiceCloneCountAggregateInputType | true
    _min?: VoiceCloneMinAggregateInputType
    _max?: VoiceCloneMaxAggregateInputType
  }

  export type VoiceCloneGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    description: string | null
    cloneProvider: $Enums.CloneProvider
    providerId: string
    orgId: string
    authorId: string
    _count: VoiceCloneCountAggregateOutputType | null
    _min: VoiceCloneMinAggregateOutputType | null
    _max: VoiceCloneMaxAggregateOutputType | null
  }

  type GetVoiceCloneGroupByPayload<T extends VoiceCloneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoiceCloneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoiceCloneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoiceCloneGroupByOutputType[P]>
            : GetScalarType<T[P], VoiceCloneGroupByOutputType[P]>
        }
      >
    >


  export type VoiceCloneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    description?: boolean
    cloneProvider?: boolean
    providerId?: boolean
    orgId?: boolean
    authorId?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    scheduledReminders?: boolean | VoiceClone$scheduledRemindersArgs<ExtArgs>
    _count?: boolean | VoiceCloneCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["voiceClone"]>

  export type VoiceCloneSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    description?: boolean
    cloneProvider?: boolean
    providerId?: boolean
    orgId?: boolean
    authorId?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["voiceClone"]>

  export type VoiceCloneSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    description?: boolean
    cloneProvider?: boolean
    providerId?: boolean
    orgId?: boolean
    authorId?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["voiceClone"]>

  export type VoiceCloneSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    description?: boolean
    cloneProvider?: boolean
    providerId?: boolean
    orgId?: boolean
    authorId?: boolean
  }

  export type VoiceCloneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "name" | "description" | "cloneProvider" | "providerId" | "orgId" | "authorId", ExtArgs["result"]["voiceClone"]>
  export type VoiceCloneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    scheduledReminders?: boolean | VoiceClone$scheduledRemindersArgs<ExtArgs>
    _count?: boolean | VoiceCloneCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VoiceCloneIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VoiceCloneIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VoiceClonePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VoiceClone"
    objects: {
      org: Prisma.$OrganizationPayload<ExtArgs>
      author: Prisma.$UserPayload<ExtArgs>
      scheduledReminders: Prisma.$ScheduledReminderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      name: string
      description: string | null
      cloneProvider: $Enums.CloneProvider
      providerId: string
      orgId: string
      authorId: string
    }, ExtArgs["result"]["voiceClone"]>
    composites: {}
  }

  type VoiceCloneGetPayload<S extends boolean | null | undefined | VoiceCloneDefaultArgs> = $Result.GetResult<Prisma.$VoiceClonePayload, S>

  type VoiceCloneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VoiceCloneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VoiceCloneCountAggregateInputType | true
    }

  export interface VoiceCloneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VoiceClone'], meta: { name: 'VoiceClone' } }
    /**
     * Find zero or one VoiceClone that matches the filter.
     * @param {VoiceCloneFindUniqueArgs} args - Arguments to find a VoiceClone
     * @example
     * // Get one VoiceClone
     * const voiceClone = await prisma.voiceClone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VoiceCloneFindUniqueArgs>(args: SelectSubset<T, VoiceCloneFindUniqueArgs<ExtArgs>>): Prisma__VoiceCloneClient<$Result.GetResult<Prisma.$VoiceClonePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VoiceClone that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VoiceCloneFindUniqueOrThrowArgs} args - Arguments to find a VoiceClone
     * @example
     * // Get one VoiceClone
     * const voiceClone = await prisma.voiceClone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VoiceCloneFindUniqueOrThrowArgs>(args: SelectSubset<T, VoiceCloneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VoiceCloneClient<$Result.GetResult<Prisma.$VoiceClonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VoiceClone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceCloneFindFirstArgs} args - Arguments to find a VoiceClone
     * @example
     * // Get one VoiceClone
     * const voiceClone = await prisma.voiceClone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VoiceCloneFindFirstArgs>(args?: SelectSubset<T, VoiceCloneFindFirstArgs<ExtArgs>>): Prisma__VoiceCloneClient<$Result.GetResult<Prisma.$VoiceClonePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VoiceClone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceCloneFindFirstOrThrowArgs} args - Arguments to find a VoiceClone
     * @example
     * // Get one VoiceClone
     * const voiceClone = await prisma.voiceClone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VoiceCloneFindFirstOrThrowArgs>(args?: SelectSubset<T, VoiceCloneFindFirstOrThrowArgs<ExtArgs>>): Prisma__VoiceCloneClient<$Result.GetResult<Prisma.$VoiceClonePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VoiceClones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceCloneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VoiceClones
     * const voiceClones = await prisma.voiceClone.findMany()
     * 
     * // Get first 10 VoiceClones
     * const voiceClones = await prisma.voiceClone.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const voiceCloneWithIdOnly = await prisma.voiceClone.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VoiceCloneFindManyArgs>(args?: SelectSubset<T, VoiceCloneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoiceClonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VoiceClone.
     * @param {VoiceCloneCreateArgs} args - Arguments to create a VoiceClone.
     * @example
     * // Create one VoiceClone
     * const VoiceClone = await prisma.voiceClone.create({
     *   data: {
     *     // ... data to create a VoiceClone
     *   }
     * })
     * 
     */
    create<T extends VoiceCloneCreateArgs>(args: SelectSubset<T, VoiceCloneCreateArgs<ExtArgs>>): Prisma__VoiceCloneClient<$Result.GetResult<Prisma.$VoiceClonePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VoiceClones.
     * @param {VoiceCloneCreateManyArgs} args - Arguments to create many VoiceClones.
     * @example
     * // Create many VoiceClones
     * const voiceClone = await prisma.voiceClone.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VoiceCloneCreateManyArgs>(args?: SelectSubset<T, VoiceCloneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VoiceClones and returns the data saved in the database.
     * @param {VoiceCloneCreateManyAndReturnArgs} args - Arguments to create many VoiceClones.
     * @example
     * // Create many VoiceClones
     * const voiceClone = await prisma.voiceClone.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VoiceClones and only return the `id`
     * const voiceCloneWithIdOnly = await prisma.voiceClone.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VoiceCloneCreateManyAndReturnArgs>(args?: SelectSubset<T, VoiceCloneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoiceClonePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VoiceClone.
     * @param {VoiceCloneDeleteArgs} args - Arguments to delete one VoiceClone.
     * @example
     * // Delete one VoiceClone
     * const VoiceClone = await prisma.voiceClone.delete({
     *   where: {
     *     // ... filter to delete one VoiceClone
     *   }
     * })
     * 
     */
    delete<T extends VoiceCloneDeleteArgs>(args: SelectSubset<T, VoiceCloneDeleteArgs<ExtArgs>>): Prisma__VoiceCloneClient<$Result.GetResult<Prisma.$VoiceClonePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VoiceClone.
     * @param {VoiceCloneUpdateArgs} args - Arguments to update one VoiceClone.
     * @example
     * // Update one VoiceClone
     * const voiceClone = await prisma.voiceClone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VoiceCloneUpdateArgs>(args: SelectSubset<T, VoiceCloneUpdateArgs<ExtArgs>>): Prisma__VoiceCloneClient<$Result.GetResult<Prisma.$VoiceClonePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VoiceClones.
     * @param {VoiceCloneDeleteManyArgs} args - Arguments to filter VoiceClones to delete.
     * @example
     * // Delete a few VoiceClones
     * const { count } = await prisma.voiceClone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VoiceCloneDeleteManyArgs>(args?: SelectSubset<T, VoiceCloneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VoiceClones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceCloneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VoiceClones
     * const voiceClone = await prisma.voiceClone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VoiceCloneUpdateManyArgs>(args: SelectSubset<T, VoiceCloneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VoiceClones and returns the data updated in the database.
     * @param {VoiceCloneUpdateManyAndReturnArgs} args - Arguments to update many VoiceClones.
     * @example
     * // Update many VoiceClones
     * const voiceClone = await prisma.voiceClone.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VoiceClones and only return the `id`
     * const voiceCloneWithIdOnly = await prisma.voiceClone.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VoiceCloneUpdateManyAndReturnArgs>(args: SelectSubset<T, VoiceCloneUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoiceClonePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VoiceClone.
     * @param {VoiceCloneUpsertArgs} args - Arguments to update or create a VoiceClone.
     * @example
     * // Update or create a VoiceClone
     * const voiceClone = await prisma.voiceClone.upsert({
     *   create: {
     *     // ... data to create a VoiceClone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VoiceClone we want to update
     *   }
     * })
     */
    upsert<T extends VoiceCloneUpsertArgs>(args: SelectSubset<T, VoiceCloneUpsertArgs<ExtArgs>>): Prisma__VoiceCloneClient<$Result.GetResult<Prisma.$VoiceClonePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VoiceClones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceCloneCountArgs} args - Arguments to filter VoiceClones to count.
     * @example
     * // Count the number of VoiceClones
     * const count = await prisma.voiceClone.count({
     *   where: {
     *     // ... the filter for the VoiceClones we want to count
     *   }
     * })
    **/
    count<T extends VoiceCloneCountArgs>(
      args?: Subset<T, VoiceCloneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoiceCloneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VoiceClone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceCloneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VoiceCloneAggregateArgs>(args: Subset<T, VoiceCloneAggregateArgs>): Prisma.PrismaPromise<GetVoiceCloneAggregateType<T>>

    /**
     * Group by VoiceClone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceCloneGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VoiceCloneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VoiceCloneGroupByArgs['orderBy'] }
        : { orderBy?: VoiceCloneGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VoiceCloneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoiceCloneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VoiceClone model
   */
  readonly fields: VoiceCloneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VoiceClone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VoiceCloneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    org<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    scheduledReminders<T extends VoiceClone$scheduledRemindersArgs<ExtArgs> = {}>(args?: Subset<T, VoiceClone$scheduledRemindersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduledReminderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VoiceClone model
   */
  interface VoiceCloneFieldRefs {
    readonly id: FieldRef<"VoiceClone", 'String'>
    readonly createdAt: FieldRef<"VoiceClone", 'DateTime'>
    readonly updatedAt: FieldRef<"VoiceClone", 'DateTime'>
    readonly name: FieldRef<"VoiceClone", 'String'>
    readonly description: FieldRef<"VoiceClone", 'String'>
    readonly cloneProvider: FieldRef<"VoiceClone", 'CloneProvider'>
    readonly providerId: FieldRef<"VoiceClone", 'String'>
    readonly orgId: FieldRef<"VoiceClone", 'String'>
    readonly authorId: FieldRef<"VoiceClone", 'String'>
  }
    

  // Custom InputTypes
  /**
   * VoiceClone findUnique
   */
  export type VoiceCloneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceClone
     */
    select?: VoiceCloneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceClone
     */
    omit?: VoiceCloneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceCloneInclude<ExtArgs> | null
    /**
     * Filter, which VoiceClone to fetch.
     */
    where: VoiceCloneWhereUniqueInput
  }

  /**
   * VoiceClone findUniqueOrThrow
   */
  export type VoiceCloneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceClone
     */
    select?: VoiceCloneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceClone
     */
    omit?: VoiceCloneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceCloneInclude<ExtArgs> | null
    /**
     * Filter, which VoiceClone to fetch.
     */
    where: VoiceCloneWhereUniqueInput
  }

  /**
   * VoiceClone findFirst
   */
  export type VoiceCloneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceClone
     */
    select?: VoiceCloneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceClone
     */
    omit?: VoiceCloneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceCloneInclude<ExtArgs> | null
    /**
     * Filter, which VoiceClone to fetch.
     */
    where?: VoiceCloneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VoiceClones to fetch.
     */
    orderBy?: VoiceCloneOrderByWithRelationInput | VoiceCloneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VoiceClones.
     */
    cursor?: VoiceCloneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VoiceClones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VoiceClones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VoiceClones.
     */
    distinct?: VoiceCloneScalarFieldEnum | VoiceCloneScalarFieldEnum[]
  }

  /**
   * VoiceClone findFirstOrThrow
   */
  export type VoiceCloneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceClone
     */
    select?: VoiceCloneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceClone
     */
    omit?: VoiceCloneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceCloneInclude<ExtArgs> | null
    /**
     * Filter, which VoiceClone to fetch.
     */
    where?: VoiceCloneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VoiceClones to fetch.
     */
    orderBy?: VoiceCloneOrderByWithRelationInput | VoiceCloneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VoiceClones.
     */
    cursor?: VoiceCloneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VoiceClones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VoiceClones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VoiceClones.
     */
    distinct?: VoiceCloneScalarFieldEnum | VoiceCloneScalarFieldEnum[]
  }

  /**
   * VoiceClone findMany
   */
  export type VoiceCloneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceClone
     */
    select?: VoiceCloneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceClone
     */
    omit?: VoiceCloneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceCloneInclude<ExtArgs> | null
    /**
     * Filter, which VoiceClones to fetch.
     */
    where?: VoiceCloneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VoiceClones to fetch.
     */
    orderBy?: VoiceCloneOrderByWithRelationInput | VoiceCloneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VoiceClones.
     */
    cursor?: VoiceCloneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VoiceClones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VoiceClones.
     */
    skip?: number
    distinct?: VoiceCloneScalarFieldEnum | VoiceCloneScalarFieldEnum[]
  }

  /**
   * VoiceClone create
   */
  export type VoiceCloneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceClone
     */
    select?: VoiceCloneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceClone
     */
    omit?: VoiceCloneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceCloneInclude<ExtArgs> | null
    /**
     * The data needed to create a VoiceClone.
     */
    data: XOR<VoiceCloneCreateInput, VoiceCloneUncheckedCreateInput>
  }

  /**
   * VoiceClone createMany
   */
  export type VoiceCloneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VoiceClones.
     */
    data: VoiceCloneCreateManyInput | VoiceCloneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VoiceClone createManyAndReturn
   */
  export type VoiceCloneCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceClone
     */
    select?: VoiceCloneSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceClone
     */
    omit?: VoiceCloneOmit<ExtArgs> | null
    /**
     * The data used to create many VoiceClones.
     */
    data: VoiceCloneCreateManyInput | VoiceCloneCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceCloneIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VoiceClone update
   */
  export type VoiceCloneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceClone
     */
    select?: VoiceCloneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceClone
     */
    omit?: VoiceCloneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceCloneInclude<ExtArgs> | null
    /**
     * The data needed to update a VoiceClone.
     */
    data: XOR<VoiceCloneUpdateInput, VoiceCloneUncheckedUpdateInput>
    /**
     * Choose, which VoiceClone to update.
     */
    where: VoiceCloneWhereUniqueInput
  }

  /**
   * VoiceClone updateMany
   */
  export type VoiceCloneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VoiceClones.
     */
    data: XOR<VoiceCloneUpdateManyMutationInput, VoiceCloneUncheckedUpdateManyInput>
    /**
     * Filter which VoiceClones to update
     */
    where?: VoiceCloneWhereInput
    /**
     * Limit how many VoiceClones to update.
     */
    limit?: number
  }

  /**
   * VoiceClone updateManyAndReturn
   */
  export type VoiceCloneUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceClone
     */
    select?: VoiceCloneSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceClone
     */
    omit?: VoiceCloneOmit<ExtArgs> | null
    /**
     * The data used to update VoiceClones.
     */
    data: XOR<VoiceCloneUpdateManyMutationInput, VoiceCloneUncheckedUpdateManyInput>
    /**
     * Filter which VoiceClones to update
     */
    where?: VoiceCloneWhereInput
    /**
     * Limit how many VoiceClones to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceCloneIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VoiceClone upsert
   */
  export type VoiceCloneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceClone
     */
    select?: VoiceCloneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceClone
     */
    omit?: VoiceCloneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceCloneInclude<ExtArgs> | null
    /**
     * The filter to search for the VoiceClone to update in case it exists.
     */
    where: VoiceCloneWhereUniqueInput
    /**
     * In case the VoiceClone found by the `where` argument doesn't exist, create a new VoiceClone with this data.
     */
    create: XOR<VoiceCloneCreateInput, VoiceCloneUncheckedCreateInput>
    /**
     * In case the VoiceClone was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VoiceCloneUpdateInput, VoiceCloneUncheckedUpdateInput>
  }

  /**
   * VoiceClone delete
   */
  export type VoiceCloneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceClone
     */
    select?: VoiceCloneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceClone
     */
    omit?: VoiceCloneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceCloneInclude<ExtArgs> | null
    /**
     * Filter which VoiceClone to delete.
     */
    where: VoiceCloneWhereUniqueInput
  }

  /**
   * VoiceClone deleteMany
   */
  export type VoiceCloneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VoiceClones to delete
     */
    where?: VoiceCloneWhereInput
    /**
     * Limit how many VoiceClones to delete.
     */
    limit?: number
  }

  /**
   * VoiceClone.scheduledReminders
   */
  export type VoiceClone$scheduledRemindersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledReminder
     */
    select?: ScheduledReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledReminder
     */
    omit?: ScheduledReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledReminderInclude<ExtArgs> | null
    where?: ScheduledReminderWhereInput
    orderBy?: ScheduledReminderOrderByWithRelationInput | ScheduledReminderOrderByWithRelationInput[]
    cursor?: ScheduledReminderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduledReminderScalarFieldEnum | ScheduledReminderScalarFieldEnum[]
  }

  /**
   * VoiceClone without action
   */
  export type VoiceCloneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceClone
     */
    select?: VoiceCloneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceClone
     */
    omit?: VoiceCloneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceCloneInclude<ExtArgs> | null
  }


  /**
   * Model VoiceSample
   */

  export type AggregateVoiceSample = {
    _count: VoiceSampleCountAggregateOutputType | null
    _min: VoiceSampleMinAggregateOutputType | null
    _max: VoiceSampleMaxAggregateOutputType | null
  }

  export type VoiceSampleMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    filename: string | null
    name: string | null
    description: string | null
    storageKey: string | null
    orgId: string | null
    authorId: string | null
  }

  export type VoiceSampleMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    filename: string | null
    name: string | null
    description: string | null
    storageKey: string | null
    orgId: string | null
    authorId: string | null
  }

  export type VoiceSampleCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    filename: number
    name: number
    description: number
    storageKey: number
    orgId: number
    authorId: number
    _all: number
  }


  export type VoiceSampleMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    filename?: true
    name?: true
    description?: true
    storageKey?: true
    orgId?: true
    authorId?: true
  }

  export type VoiceSampleMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    filename?: true
    name?: true
    description?: true
    storageKey?: true
    orgId?: true
    authorId?: true
  }

  export type VoiceSampleCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    filename?: true
    name?: true
    description?: true
    storageKey?: true
    orgId?: true
    authorId?: true
    _all?: true
  }

  export type VoiceSampleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VoiceSample to aggregate.
     */
    where?: VoiceSampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VoiceSamples to fetch.
     */
    orderBy?: VoiceSampleOrderByWithRelationInput | VoiceSampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VoiceSampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VoiceSamples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VoiceSamples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VoiceSamples
    **/
    _count?: true | VoiceSampleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoiceSampleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoiceSampleMaxAggregateInputType
  }

  export type GetVoiceSampleAggregateType<T extends VoiceSampleAggregateArgs> = {
        [P in keyof T & keyof AggregateVoiceSample]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVoiceSample[P]>
      : GetScalarType<T[P], AggregateVoiceSample[P]>
  }




  export type VoiceSampleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoiceSampleWhereInput
    orderBy?: VoiceSampleOrderByWithAggregationInput | VoiceSampleOrderByWithAggregationInput[]
    by: VoiceSampleScalarFieldEnum[] | VoiceSampleScalarFieldEnum
    having?: VoiceSampleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoiceSampleCountAggregateInputType | true
    _min?: VoiceSampleMinAggregateInputType
    _max?: VoiceSampleMaxAggregateInputType
  }

  export type VoiceSampleGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    filename: string
    name: string
    description: string | null
    storageKey: string | null
    orgId: string
    authorId: string
    _count: VoiceSampleCountAggregateOutputType | null
    _min: VoiceSampleMinAggregateOutputType | null
    _max: VoiceSampleMaxAggregateOutputType | null
  }

  type GetVoiceSampleGroupByPayload<T extends VoiceSampleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoiceSampleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoiceSampleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoiceSampleGroupByOutputType[P]>
            : GetScalarType<T[P], VoiceSampleGroupByOutputType[P]>
        }
      >
    >


  export type VoiceSampleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    filename?: boolean
    name?: boolean
    description?: boolean
    storageKey?: boolean
    orgId?: boolean
    authorId?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["voiceSample"]>

  export type VoiceSampleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    filename?: boolean
    name?: boolean
    description?: boolean
    storageKey?: boolean
    orgId?: boolean
    authorId?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["voiceSample"]>

  export type VoiceSampleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    filename?: boolean
    name?: boolean
    description?: boolean
    storageKey?: boolean
    orgId?: boolean
    authorId?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["voiceSample"]>

  export type VoiceSampleSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    filename?: boolean
    name?: boolean
    description?: boolean
    storageKey?: boolean
    orgId?: boolean
    authorId?: boolean
  }

  export type VoiceSampleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "filename" | "name" | "description" | "storageKey" | "orgId" | "authorId", ExtArgs["result"]["voiceSample"]>
  export type VoiceSampleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VoiceSampleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VoiceSampleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VoiceSamplePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VoiceSample"
    objects: {
      org: Prisma.$OrganizationPayload<ExtArgs>
      author: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      filename: string
      name: string
      description: string | null
      storageKey: string | null
      orgId: string
      authorId: string
    }, ExtArgs["result"]["voiceSample"]>
    composites: {}
  }

  type VoiceSampleGetPayload<S extends boolean | null | undefined | VoiceSampleDefaultArgs> = $Result.GetResult<Prisma.$VoiceSamplePayload, S>

  type VoiceSampleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VoiceSampleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VoiceSampleCountAggregateInputType | true
    }

  export interface VoiceSampleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VoiceSample'], meta: { name: 'VoiceSample' } }
    /**
     * Find zero or one VoiceSample that matches the filter.
     * @param {VoiceSampleFindUniqueArgs} args - Arguments to find a VoiceSample
     * @example
     * // Get one VoiceSample
     * const voiceSample = await prisma.voiceSample.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VoiceSampleFindUniqueArgs>(args: SelectSubset<T, VoiceSampleFindUniqueArgs<ExtArgs>>): Prisma__VoiceSampleClient<$Result.GetResult<Prisma.$VoiceSamplePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VoiceSample that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VoiceSampleFindUniqueOrThrowArgs} args - Arguments to find a VoiceSample
     * @example
     * // Get one VoiceSample
     * const voiceSample = await prisma.voiceSample.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VoiceSampleFindUniqueOrThrowArgs>(args: SelectSubset<T, VoiceSampleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VoiceSampleClient<$Result.GetResult<Prisma.$VoiceSamplePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VoiceSample that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceSampleFindFirstArgs} args - Arguments to find a VoiceSample
     * @example
     * // Get one VoiceSample
     * const voiceSample = await prisma.voiceSample.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VoiceSampleFindFirstArgs>(args?: SelectSubset<T, VoiceSampleFindFirstArgs<ExtArgs>>): Prisma__VoiceSampleClient<$Result.GetResult<Prisma.$VoiceSamplePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VoiceSample that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceSampleFindFirstOrThrowArgs} args - Arguments to find a VoiceSample
     * @example
     * // Get one VoiceSample
     * const voiceSample = await prisma.voiceSample.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VoiceSampleFindFirstOrThrowArgs>(args?: SelectSubset<T, VoiceSampleFindFirstOrThrowArgs<ExtArgs>>): Prisma__VoiceSampleClient<$Result.GetResult<Prisma.$VoiceSamplePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VoiceSamples that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceSampleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VoiceSamples
     * const voiceSamples = await prisma.voiceSample.findMany()
     * 
     * // Get first 10 VoiceSamples
     * const voiceSamples = await prisma.voiceSample.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const voiceSampleWithIdOnly = await prisma.voiceSample.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VoiceSampleFindManyArgs>(args?: SelectSubset<T, VoiceSampleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoiceSamplePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VoiceSample.
     * @param {VoiceSampleCreateArgs} args - Arguments to create a VoiceSample.
     * @example
     * // Create one VoiceSample
     * const VoiceSample = await prisma.voiceSample.create({
     *   data: {
     *     // ... data to create a VoiceSample
     *   }
     * })
     * 
     */
    create<T extends VoiceSampleCreateArgs>(args: SelectSubset<T, VoiceSampleCreateArgs<ExtArgs>>): Prisma__VoiceSampleClient<$Result.GetResult<Prisma.$VoiceSamplePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VoiceSamples.
     * @param {VoiceSampleCreateManyArgs} args - Arguments to create many VoiceSamples.
     * @example
     * // Create many VoiceSamples
     * const voiceSample = await prisma.voiceSample.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VoiceSampleCreateManyArgs>(args?: SelectSubset<T, VoiceSampleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VoiceSamples and returns the data saved in the database.
     * @param {VoiceSampleCreateManyAndReturnArgs} args - Arguments to create many VoiceSamples.
     * @example
     * // Create many VoiceSamples
     * const voiceSample = await prisma.voiceSample.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VoiceSamples and only return the `id`
     * const voiceSampleWithIdOnly = await prisma.voiceSample.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VoiceSampleCreateManyAndReturnArgs>(args?: SelectSubset<T, VoiceSampleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoiceSamplePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VoiceSample.
     * @param {VoiceSampleDeleteArgs} args - Arguments to delete one VoiceSample.
     * @example
     * // Delete one VoiceSample
     * const VoiceSample = await prisma.voiceSample.delete({
     *   where: {
     *     // ... filter to delete one VoiceSample
     *   }
     * })
     * 
     */
    delete<T extends VoiceSampleDeleteArgs>(args: SelectSubset<T, VoiceSampleDeleteArgs<ExtArgs>>): Prisma__VoiceSampleClient<$Result.GetResult<Prisma.$VoiceSamplePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VoiceSample.
     * @param {VoiceSampleUpdateArgs} args - Arguments to update one VoiceSample.
     * @example
     * // Update one VoiceSample
     * const voiceSample = await prisma.voiceSample.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VoiceSampleUpdateArgs>(args: SelectSubset<T, VoiceSampleUpdateArgs<ExtArgs>>): Prisma__VoiceSampleClient<$Result.GetResult<Prisma.$VoiceSamplePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VoiceSamples.
     * @param {VoiceSampleDeleteManyArgs} args - Arguments to filter VoiceSamples to delete.
     * @example
     * // Delete a few VoiceSamples
     * const { count } = await prisma.voiceSample.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VoiceSampleDeleteManyArgs>(args?: SelectSubset<T, VoiceSampleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VoiceSamples.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceSampleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VoiceSamples
     * const voiceSample = await prisma.voiceSample.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VoiceSampleUpdateManyArgs>(args: SelectSubset<T, VoiceSampleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VoiceSamples and returns the data updated in the database.
     * @param {VoiceSampleUpdateManyAndReturnArgs} args - Arguments to update many VoiceSamples.
     * @example
     * // Update many VoiceSamples
     * const voiceSample = await prisma.voiceSample.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VoiceSamples and only return the `id`
     * const voiceSampleWithIdOnly = await prisma.voiceSample.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VoiceSampleUpdateManyAndReturnArgs>(args: SelectSubset<T, VoiceSampleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoiceSamplePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VoiceSample.
     * @param {VoiceSampleUpsertArgs} args - Arguments to update or create a VoiceSample.
     * @example
     * // Update or create a VoiceSample
     * const voiceSample = await prisma.voiceSample.upsert({
     *   create: {
     *     // ... data to create a VoiceSample
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VoiceSample we want to update
     *   }
     * })
     */
    upsert<T extends VoiceSampleUpsertArgs>(args: SelectSubset<T, VoiceSampleUpsertArgs<ExtArgs>>): Prisma__VoiceSampleClient<$Result.GetResult<Prisma.$VoiceSamplePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VoiceSamples.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceSampleCountArgs} args - Arguments to filter VoiceSamples to count.
     * @example
     * // Count the number of VoiceSamples
     * const count = await prisma.voiceSample.count({
     *   where: {
     *     // ... the filter for the VoiceSamples we want to count
     *   }
     * })
    **/
    count<T extends VoiceSampleCountArgs>(
      args?: Subset<T, VoiceSampleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoiceSampleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VoiceSample.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceSampleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VoiceSampleAggregateArgs>(args: Subset<T, VoiceSampleAggregateArgs>): Prisma.PrismaPromise<GetVoiceSampleAggregateType<T>>

    /**
     * Group by VoiceSample.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceSampleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VoiceSampleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VoiceSampleGroupByArgs['orderBy'] }
        : { orderBy?: VoiceSampleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VoiceSampleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoiceSampleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VoiceSample model
   */
  readonly fields: VoiceSampleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VoiceSample.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VoiceSampleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    org<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VoiceSample model
   */
  interface VoiceSampleFieldRefs {
    readonly id: FieldRef<"VoiceSample", 'String'>
    readonly createdAt: FieldRef<"VoiceSample", 'DateTime'>
    readonly updatedAt: FieldRef<"VoiceSample", 'DateTime'>
    readonly filename: FieldRef<"VoiceSample", 'String'>
    readonly name: FieldRef<"VoiceSample", 'String'>
    readonly description: FieldRef<"VoiceSample", 'String'>
    readonly storageKey: FieldRef<"VoiceSample", 'String'>
    readonly orgId: FieldRef<"VoiceSample", 'String'>
    readonly authorId: FieldRef<"VoiceSample", 'String'>
  }
    

  // Custom InputTypes
  /**
   * VoiceSample findUnique
   */
  export type VoiceSampleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceSample
     */
    select?: VoiceSampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceSample
     */
    omit?: VoiceSampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceSampleInclude<ExtArgs> | null
    /**
     * Filter, which VoiceSample to fetch.
     */
    where: VoiceSampleWhereUniqueInput
  }

  /**
   * VoiceSample findUniqueOrThrow
   */
  export type VoiceSampleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceSample
     */
    select?: VoiceSampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceSample
     */
    omit?: VoiceSampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceSampleInclude<ExtArgs> | null
    /**
     * Filter, which VoiceSample to fetch.
     */
    where: VoiceSampleWhereUniqueInput
  }

  /**
   * VoiceSample findFirst
   */
  export type VoiceSampleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceSample
     */
    select?: VoiceSampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceSample
     */
    omit?: VoiceSampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceSampleInclude<ExtArgs> | null
    /**
     * Filter, which VoiceSample to fetch.
     */
    where?: VoiceSampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VoiceSamples to fetch.
     */
    orderBy?: VoiceSampleOrderByWithRelationInput | VoiceSampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VoiceSamples.
     */
    cursor?: VoiceSampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VoiceSamples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VoiceSamples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VoiceSamples.
     */
    distinct?: VoiceSampleScalarFieldEnum | VoiceSampleScalarFieldEnum[]
  }

  /**
   * VoiceSample findFirstOrThrow
   */
  export type VoiceSampleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceSample
     */
    select?: VoiceSampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceSample
     */
    omit?: VoiceSampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceSampleInclude<ExtArgs> | null
    /**
     * Filter, which VoiceSample to fetch.
     */
    where?: VoiceSampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VoiceSamples to fetch.
     */
    orderBy?: VoiceSampleOrderByWithRelationInput | VoiceSampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VoiceSamples.
     */
    cursor?: VoiceSampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VoiceSamples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VoiceSamples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VoiceSamples.
     */
    distinct?: VoiceSampleScalarFieldEnum | VoiceSampleScalarFieldEnum[]
  }

  /**
   * VoiceSample findMany
   */
  export type VoiceSampleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceSample
     */
    select?: VoiceSampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceSample
     */
    omit?: VoiceSampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceSampleInclude<ExtArgs> | null
    /**
     * Filter, which VoiceSamples to fetch.
     */
    where?: VoiceSampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VoiceSamples to fetch.
     */
    orderBy?: VoiceSampleOrderByWithRelationInput | VoiceSampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VoiceSamples.
     */
    cursor?: VoiceSampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VoiceSamples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VoiceSamples.
     */
    skip?: number
    distinct?: VoiceSampleScalarFieldEnum | VoiceSampleScalarFieldEnum[]
  }

  /**
   * VoiceSample create
   */
  export type VoiceSampleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceSample
     */
    select?: VoiceSampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceSample
     */
    omit?: VoiceSampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceSampleInclude<ExtArgs> | null
    /**
     * The data needed to create a VoiceSample.
     */
    data: XOR<VoiceSampleCreateInput, VoiceSampleUncheckedCreateInput>
  }

  /**
   * VoiceSample createMany
   */
  export type VoiceSampleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VoiceSamples.
     */
    data: VoiceSampleCreateManyInput | VoiceSampleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VoiceSample createManyAndReturn
   */
  export type VoiceSampleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceSample
     */
    select?: VoiceSampleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceSample
     */
    omit?: VoiceSampleOmit<ExtArgs> | null
    /**
     * The data used to create many VoiceSamples.
     */
    data: VoiceSampleCreateManyInput | VoiceSampleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceSampleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VoiceSample update
   */
  export type VoiceSampleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceSample
     */
    select?: VoiceSampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceSample
     */
    omit?: VoiceSampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceSampleInclude<ExtArgs> | null
    /**
     * The data needed to update a VoiceSample.
     */
    data: XOR<VoiceSampleUpdateInput, VoiceSampleUncheckedUpdateInput>
    /**
     * Choose, which VoiceSample to update.
     */
    where: VoiceSampleWhereUniqueInput
  }

  /**
   * VoiceSample updateMany
   */
  export type VoiceSampleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VoiceSamples.
     */
    data: XOR<VoiceSampleUpdateManyMutationInput, VoiceSampleUncheckedUpdateManyInput>
    /**
     * Filter which VoiceSamples to update
     */
    where?: VoiceSampleWhereInput
    /**
     * Limit how many VoiceSamples to update.
     */
    limit?: number
  }

  /**
   * VoiceSample updateManyAndReturn
   */
  export type VoiceSampleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceSample
     */
    select?: VoiceSampleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceSample
     */
    omit?: VoiceSampleOmit<ExtArgs> | null
    /**
     * The data used to update VoiceSamples.
     */
    data: XOR<VoiceSampleUpdateManyMutationInput, VoiceSampleUncheckedUpdateManyInput>
    /**
     * Filter which VoiceSamples to update
     */
    where?: VoiceSampleWhereInput
    /**
     * Limit how many VoiceSamples to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceSampleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VoiceSample upsert
   */
  export type VoiceSampleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceSample
     */
    select?: VoiceSampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceSample
     */
    omit?: VoiceSampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceSampleInclude<ExtArgs> | null
    /**
     * The filter to search for the VoiceSample to update in case it exists.
     */
    where: VoiceSampleWhereUniqueInput
    /**
     * In case the VoiceSample found by the `where` argument doesn't exist, create a new VoiceSample with this data.
     */
    create: XOR<VoiceSampleCreateInput, VoiceSampleUncheckedCreateInput>
    /**
     * In case the VoiceSample was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VoiceSampleUpdateInput, VoiceSampleUncheckedUpdateInput>
  }

  /**
   * VoiceSample delete
   */
  export type VoiceSampleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceSample
     */
    select?: VoiceSampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceSample
     */
    omit?: VoiceSampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceSampleInclude<ExtArgs> | null
    /**
     * Filter which VoiceSample to delete.
     */
    where: VoiceSampleWhereUniqueInput
  }

  /**
   * VoiceSample deleteMany
   */
  export type VoiceSampleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VoiceSamples to delete
     */
    where?: VoiceSampleWhereInput
    /**
     * Limit how many VoiceSamples to delete.
     */
    limit?: number
  }

  /**
   * VoiceSample without action
   */
  export type VoiceSampleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceSample
     */
    select?: VoiceSampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceSample
     */
    omit?: VoiceSampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoiceSampleInclude<ExtArgs> | null
  }


  /**
   * Model ScheduledReminder
   */

  export type AggregateScheduledReminder = {
    _count: ScheduledReminderCountAggregateOutputType | null
    _avg: ScheduledReminderAvgAggregateOutputType | null
    _sum: ScheduledReminderSumAggregateOutputType | null
    _min: ScheduledReminderMinAggregateOutputType | null
    _max: ScheduledReminderMaxAggregateOutputType | null
  }

  export type ScheduledReminderAvgAggregateOutputType = {
    attempts: number | null
  }

  export type ScheduledReminderSumAggregateOutputType = {
    attempts: number | null
  }

  export type ScheduledReminderMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    timeZone: string | null
    appointmentTime: Date | null
    reminderOffset: $Enums.ReminderOffset | null
    status: $Enums.CallStatus | null
    attempts: number | null
    lastAttempt: Date | null
    orgId: string | null
    userId: string | null
    clientId: string | null
    templateId: string | null
    voiceId: string | null
  }

  export type ScheduledReminderMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    timeZone: string | null
    appointmentTime: Date | null
    reminderOffset: $Enums.ReminderOffset | null
    status: $Enums.CallStatus | null
    attempts: number | null
    lastAttempt: Date | null
    orgId: string | null
    userId: string | null
    clientId: string | null
    templateId: string | null
    voiceId: string | null
  }

  export type ScheduledReminderCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    timeZone: number
    appointmentTime: number
    reminderOffset: number
    status: number
    attempts: number
    lastAttempt: number
    orgId: number
    userId: number
    clientId: number
    templateId: number
    voiceId: number
    _all: number
  }


  export type ScheduledReminderAvgAggregateInputType = {
    attempts?: true
  }

  export type ScheduledReminderSumAggregateInputType = {
    attempts?: true
  }

  export type ScheduledReminderMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    timeZone?: true
    appointmentTime?: true
    reminderOffset?: true
    status?: true
    attempts?: true
    lastAttempt?: true
    orgId?: true
    userId?: true
    clientId?: true
    templateId?: true
    voiceId?: true
  }

  export type ScheduledReminderMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    timeZone?: true
    appointmentTime?: true
    reminderOffset?: true
    status?: true
    attempts?: true
    lastAttempt?: true
    orgId?: true
    userId?: true
    clientId?: true
    templateId?: true
    voiceId?: true
  }

  export type ScheduledReminderCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    timeZone?: true
    appointmentTime?: true
    reminderOffset?: true
    status?: true
    attempts?: true
    lastAttempt?: true
    orgId?: true
    userId?: true
    clientId?: true
    templateId?: true
    voiceId?: true
    _all?: true
  }

  export type ScheduledReminderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScheduledReminder to aggregate.
     */
    where?: ScheduledReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduledReminders to fetch.
     */
    orderBy?: ScheduledReminderOrderByWithRelationInput | ScheduledReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduledReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduledReminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduledReminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScheduledReminders
    **/
    _count?: true | ScheduledReminderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScheduledReminderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScheduledReminderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduledReminderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduledReminderMaxAggregateInputType
  }

  export type GetScheduledReminderAggregateType<T extends ScheduledReminderAggregateArgs> = {
        [P in keyof T & keyof AggregateScheduledReminder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScheduledReminder[P]>
      : GetScalarType<T[P], AggregateScheduledReminder[P]>
  }




  export type ScheduledReminderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduledReminderWhereInput
    orderBy?: ScheduledReminderOrderByWithAggregationInput | ScheduledReminderOrderByWithAggregationInput[]
    by: ScheduledReminderScalarFieldEnum[] | ScheduledReminderScalarFieldEnum
    having?: ScheduledReminderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduledReminderCountAggregateInputType | true
    _avg?: ScheduledReminderAvgAggregateInputType
    _sum?: ScheduledReminderSumAggregateInputType
    _min?: ScheduledReminderMinAggregateInputType
    _max?: ScheduledReminderMaxAggregateInputType
  }

  export type ScheduledReminderGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    timeZone: string
    appointmentTime: Date
    reminderOffset: $Enums.ReminderOffset
    status: $Enums.CallStatus
    attempts: number
    lastAttempt: Date | null
    orgId: string
    userId: string
    clientId: string
    templateId: string
    voiceId: string
    _count: ScheduledReminderCountAggregateOutputType | null
    _avg: ScheduledReminderAvgAggregateOutputType | null
    _sum: ScheduledReminderSumAggregateOutputType | null
    _min: ScheduledReminderMinAggregateOutputType | null
    _max: ScheduledReminderMaxAggregateOutputType | null
  }

  type GetScheduledReminderGroupByPayload<T extends ScheduledReminderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduledReminderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduledReminderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduledReminderGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduledReminderGroupByOutputType[P]>
        }
      >
    >


  export type ScheduledReminderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    timeZone?: boolean
    appointmentTime?: boolean
    reminderOffset?: boolean
    status?: boolean
    attempts?: boolean
    lastAttempt?: boolean
    orgId?: boolean
    userId?: boolean
    clientId?: boolean
    templateId?: boolean
    voiceId?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    template?: boolean | TemplateDefaultArgs<ExtArgs>
    voice?: boolean | VoiceCloneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduledReminder"]>

  export type ScheduledReminderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    timeZone?: boolean
    appointmentTime?: boolean
    reminderOffset?: boolean
    status?: boolean
    attempts?: boolean
    lastAttempt?: boolean
    orgId?: boolean
    userId?: boolean
    clientId?: boolean
    templateId?: boolean
    voiceId?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    template?: boolean | TemplateDefaultArgs<ExtArgs>
    voice?: boolean | VoiceCloneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduledReminder"]>

  export type ScheduledReminderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    timeZone?: boolean
    appointmentTime?: boolean
    reminderOffset?: boolean
    status?: boolean
    attempts?: boolean
    lastAttempt?: boolean
    orgId?: boolean
    userId?: boolean
    clientId?: boolean
    templateId?: boolean
    voiceId?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    template?: boolean | TemplateDefaultArgs<ExtArgs>
    voice?: boolean | VoiceCloneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduledReminder"]>

  export type ScheduledReminderSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    timeZone?: boolean
    appointmentTime?: boolean
    reminderOffset?: boolean
    status?: boolean
    attempts?: boolean
    lastAttempt?: boolean
    orgId?: boolean
    userId?: boolean
    clientId?: boolean
    templateId?: boolean
    voiceId?: boolean
  }

  export type ScheduledReminderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "timeZone" | "appointmentTime" | "reminderOffset" | "status" | "attempts" | "lastAttempt" | "orgId" | "userId" | "clientId" | "templateId" | "voiceId", ExtArgs["result"]["scheduledReminder"]>
  export type ScheduledReminderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    template?: boolean | TemplateDefaultArgs<ExtArgs>
    voice?: boolean | VoiceCloneDefaultArgs<ExtArgs>
  }
  export type ScheduledReminderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    template?: boolean | TemplateDefaultArgs<ExtArgs>
    voice?: boolean | VoiceCloneDefaultArgs<ExtArgs>
  }
  export type ScheduledReminderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    template?: boolean | TemplateDefaultArgs<ExtArgs>
    voice?: boolean | VoiceCloneDefaultArgs<ExtArgs>
  }

  export type $ScheduledReminderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScheduledReminder"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      template: Prisma.$TemplatePayload<ExtArgs>
      voice: Prisma.$VoiceClonePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      timeZone: string
      appointmentTime: Date
      reminderOffset: $Enums.ReminderOffset
      status: $Enums.CallStatus
      attempts: number
      lastAttempt: Date | null
      orgId: string
      userId: string
      clientId: string
      templateId: string
      voiceId: string
    }, ExtArgs["result"]["scheduledReminder"]>
    composites: {}
  }

  type ScheduledReminderGetPayload<S extends boolean | null | undefined | ScheduledReminderDefaultArgs> = $Result.GetResult<Prisma.$ScheduledReminderPayload, S>

  type ScheduledReminderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScheduledReminderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScheduledReminderCountAggregateInputType | true
    }

  export interface ScheduledReminderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScheduledReminder'], meta: { name: 'ScheduledReminder' } }
    /**
     * Find zero or one ScheduledReminder that matches the filter.
     * @param {ScheduledReminderFindUniqueArgs} args - Arguments to find a ScheduledReminder
     * @example
     * // Get one ScheduledReminder
     * const scheduledReminder = await prisma.scheduledReminder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScheduledReminderFindUniqueArgs>(args: SelectSubset<T, ScheduledReminderFindUniqueArgs<ExtArgs>>): Prisma__ScheduledReminderClient<$Result.GetResult<Prisma.$ScheduledReminderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScheduledReminder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScheduledReminderFindUniqueOrThrowArgs} args - Arguments to find a ScheduledReminder
     * @example
     * // Get one ScheduledReminder
     * const scheduledReminder = await prisma.scheduledReminder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScheduledReminderFindUniqueOrThrowArgs>(args: SelectSubset<T, ScheduledReminderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScheduledReminderClient<$Result.GetResult<Prisma.$ScheduledReminderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScheduledReminder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledReminderFindFirstArgs} args - Arguments to find a ScheduledReminder
     * @example
     * // Get one ScheduledReminder
     * const scheduledReminder = await prisma.scheduledReminder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScheduledReminderFindFirstArgs>(args?: SelectSubset<T, ScheduledReminderFindFirstArgs<ExtArgs>>): Prisma__ScheduledReminderClient<$Result.GetResult<Prisma.$ScheduledReminderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScheduledReminder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledReminderFindFirstOrThrowArgs} args - Arguments to find a ScheduledReminder
     * @example
     * // Get one ScheduledReminder
     * const scheduledReminder = await prisma.scheduledReminder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScheduledReminderFindFirstOrThrowArgs>(args?: SelectSubset<T, ScheduledReminderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScheduledReminderClient<$Result.GetResult<Prisma.$ScheduledReminderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScheduledReminders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledReminderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScheduledReminders
     * const scheduledReminders = await prisma.scheduledReminder.findMany()
     * 
     * // Get first 10 ScheduledReminders
     * const scheduledReminders = await prisma.scheduledReminder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduledReminderWithIdOnly = await prisma.scheduledReminder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScheduledReminderFindManyArgs>(args?: SelectSubset<T, ScheduledReminderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduledReminderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScheduledReminder.
     * @param {ScheduledReminderCreateArgs} args - Arguments to create a ScheduledReminder.
     * @example
     * // Create one ScheduledReminder
     * const ScheduledReminder = await prisma.scheduledReminder.create({
     *   data: {
     *     // ... data to create a ScheduledReminder
     *   }
     * })
     * 
     */
    create<T extends ScheduledReminderCreateArgs>(args: SelectSubset<T, ScheduledReminderCreateArgs<ExtArgs>>): Prisma__ScheduledReminderClient<$Result.GetResult<Prisma.$ScheduledReminderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScheduledReminders.
     * @param {ScheduledReminderCreateManyArgs} args - Arguments to create many ScheduledReminders.
     * @example
     * // Create many ScheduledReminders
     * const scheduledReminder = await prisma.scheduledReminder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScheduledReminderCreateManyArgs>(args?: SelectSubset<T, ScheduledReminderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScheduledReminders and returns the data saved in the database.
     * @param {ScheduledReminderCreateManyAndReturnArgs} args - Arguments to create many ScheduledReminders.
     * @example
     * // Create many ScheduledReminders
     * const scheduledReminder = await prisma.scheduledReminder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScheduledReminders and only return the `id`
     * const scheduledReminderWithIdOnly = await prisma.scheduledReminder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScheduledReminderCreateManyAndReturnArgs>(args?: SelectSubset<T, ScheduledReminderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduledReminderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ScheduledReminder.
     * @param {ScheduledReminderDeleteArgs} args - Arguments to delete one ScheduledReminder.
     * @example
     * // Delete one ScheduledReminder
     * const ScheduledReminder = await prisma.scheduledReminder.delete({
     *   where: {
     *     // ... filter to delete one ScheduledReminder
     *   }
     * })
     * 
     */
    delete<T extends ScheduledReminderDeleteArgs>(args: SelectSubset<T, ScheduledReminderDeleteArgs<ExtArgs>>): Prisma__ScheduledReminderClient<$Result.GetResult<Prisma.$ScheduledReminderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScheduledReminder.
     * @param {ScheduledReminderUpdateArgs} args - Arguments to update one ScheduledReminder.
     * @example
     * // Update one ScheduledReminder
     * const scheduledReminder = await prisma.scheduledReminder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScheduledReminderUpdateArgs>(args: SelectSubset<T, ScheduledReminderUpdateArgs<ExtArgs>>): Prisma__ScheduledReminderClient<$Result.GetResult<Prisma.$ScheduledReminderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScheduledReminders.
     * @param {ScheduledReminderDeleteManyArgs} args - Arguments to filter ScheduledReminders to delete.
     * @example
     * // Delete a few ScheduledReminders
     * const { count } = await prisma.scheduledReminder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScheduledReminderDeleteManyArgs>(args?: SelectSubset<T, ScheduledReminderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScheduledReminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledReminderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScheduledReminders
     * const scheduledReminder = await prisma.scheduledReminder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScheduledReminderUpdateManyArgs>(args: SelectSubset<T, ScheduledReminderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScheduledReminders and returns the data updated in the database.
     * @param {ScheduledReminderUpdateManyAndReturnArgs} args - Arguments to update many ScheduledReminders.
     * @example
     * // Update many ScheduledReminders
     * const scheduledReminder = await prisma.scheduledReminder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ScheduledReminders and only return the `id`
     * const scheduledReminderWithIdOnly = await prisma.scheduledReminder.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScheduledReminderUpdateManyAndReturnArgs>(args: SelectSubset<T, ScheduledReminderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduledReminderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ScheduledReminder.
     * @param {ScheduledReminderUpsertArgs} args - Arguments to update or create a ScheduledReminder.
     * @example
     * // Update or create a ScheduledReminder
     * const scheduledReminder = await prisma.scheduledReminder.upsert({
     *   create: {
     *     // ... data to create a ScheduledReminder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScheduledReminder we want to update
     *   }
     * })
     */
    upsert<T extends ScheduledReminderUpsertArgs>(args: SelectSubset<T, ScheduledReminderUpsertArgs<ExtArgs>>): Prisma__ScheduledReminderClient<$Result.GetResult<Prisma.$ScheduledReminderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScheduledReminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledReminderCountArgs} args - Arguments to filter ScheduledReminders to count.
     * @example
     * // Count the number of ScheduledReminders
     * const count = await prisma.scheduledReminder.count({
     *   where: {
     *     // ... the filter for the ScheduledReminders we want to count
     *   }
     * })
    **/
    count<T extends ScheduledReminderCountArgs>(
      args?: Subset<T, ScheduledReminderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduledReminderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScheduledReminder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledReminderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScheduledReminderAggregateArgs>(args: Subset<T, ScheduledReminderAggregateArgs>): Prisma.PrismaPromise<GetScheduledReminderAggregateType<T>>

    /**
     * Group by ScheduledReminder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledReminderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScheduledReminderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduledReminderGroupByArgs['orderBy'] }
        : { orderBy?: ScheduledReminderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScheduledReminderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduledReminderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScheduledReminder model
   */
  readonly fields: ScheduledReminderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScheduledReminder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduledReminderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    template<T extends TemplateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TemplateDefaultArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    voice<T extends VoiceCloneDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VoiceCloneDefaultArgs<ExtArgs>>): Prisma__VoiceCloneClient<$Result.GetResult<Prisma.$VoiceClonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ScheduledReminder model
   */
  interface ScheduledReminderFieldRefs {
    readonly id: FieldRef<"ScheduledReminder", 'String'>
    readonly createdAt: FieldRef<"ScheduledReminder", 'DateTime'>
    readonly updatedAt: FieldRef<"ScheduledReminder", 'DateTime'>
    readonly timeZone: FieldRef<"ScheduledReminder", 'String'>
    readonly appointmentTime: FieldRef<"ScheduledReminder", 'DateTime'>
    readonly reminderOffset: FieldRef<"ScheduledReminder", 'ReminderOffset'>
    readonly status: FieldRef<"ScheduledReminder", 'CallStatus'>
    readonly attempts: FieldRef<"ScheduledReminder", 'Int'>
    readonly lastAttempt: FieldRef<"ScheduledReminder", 'DateTime'>
    readonly orgId: FieldRef<"ScheduledReminder", 'String'>
    readonly userId: FieldRef<"ScheduledReminder", 'String'>
    readonly clientId: FieldRef<"ScheduledReminder", 'String'>
    readonly templateId: FieldRef<"ScheduledReminder", 'String'>
    readonly voiceId: FieldRef<"ScheduledReminder", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ScheduledReminder findUnique
   */
  export type ScheduledReminderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledReminder
     */
    select?: ScheduledReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledReminder
     */
    omit?: ScheduledReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledReminderInclude<ExtArgs> | null
    /**
     * Filter, which ScheduledReminder to fetch.
     */
    where: ScheduledReminderWhereUniqueInput
  }

  /**
   * ScheduledReminder findUniqueOrThrow
   */
  export type ScheduledReminderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledReminder
     */
    select?: ScheduledReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledReminder
     */
    omit?: ScheduledReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledReminderInclude<ExtArgs> | null
    /**
     * Filter, which ScheduledReminder to fetch.
     */
    where: ScheduledReminderWhereUniqueInput
  }

  /**
   * ScheduledReminder findFirst
   */
  export type ScheduledReminderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledReminder
     */
    select?: ScheduledReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledReminder
     */
    omit?: ScheduledReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledReminderInclude<ExtArgs> | null
    /**
     * Filter, which ScheduledReminder to fetch.
     */
    where?: ScheduledReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduledReminders to fetch.
     */
    orderBy?: ScheduledReminderOrderByWithRelationInput | ScheduledReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScheduledReminders.
     */
    cursor?: ScheduledReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduledReminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduledReminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScheduledReminders.
     */
    distinct?: ScheduledReminderScalarFieldEnum | ScheduledReminderScalarFieldEnum[]
  }

  /**
   * ScheduledReminder findFirstOrThrow
   */
  export type ScheduledReminderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledReminder
     */
    select?: ScheduledReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledReminder
     */
    omit?: ScheduledReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledReminderInclude<ExtArgs> | null
    /**
     * Filter, which ScheduledReminder to fetch.
     */
    where?: ScheduledReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduledReminders to fetch.
     */
    orderBy?: ScheduledReminderOrderByWithRelationInput | ScheduledReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScheduledReminders.
     */
    cursor?: ScheduledReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduledReminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduledReminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScheduledReminders.
     */
    distinct?: ScheduledReminderScalarFieldEnum | ScheduledReminderScalarFieldEnum[]
  }

  /**
   * ScheduledReminder findMany
   */
  export type ScheduledReminderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledReminder
     */
    select?: ScheduledReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledReminder
     */
    omit?: ScheduledReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledReminderInclude<ExtArgs> | null
    /**
     * Filter, which ScheduledReminders to fetch.
     */
    where?: ScheduledReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduledReminders to fetch.
     */
    orderBy?: ScheduledReminderOrderByWithRelationInput | ScheduledReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScheduledReminders.
     */
    cursor?: ScheduledReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduledReminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduledReminders.
     */
    skip?: number
    distinct?: ScheduledReminderScalarFieldEnum | ScheduledReminderScalarFieldEnum[]
  }

  /**
   * ScheduledReminder create
   */
  export type ScheduledReminderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledReminder
     */
    select?: ScheduledReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledReminder
     */
    omit?: ScheduledReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledReminderInclude<ExtArgs> | null
    /**
     * The data needed to create a ScheduledReminder.
     */
    data: XOR<ScheduledReminderCreateInput, ScheduledReminderUncheckedCreateInput>
  }

  /**
   * ScheduledReminder createMany
   */
  export type ScheduledReminderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScheduledReminders.
     */
    data: ScheduledReminderCreateManyInput | ScheduledReminderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScheduledReminder createManyAndReturn
   */
  export type ScheduledReminderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledReminder
     */
    select?: ScheduledReminderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledReminder
     */
    omit?: ScheduledReminderOmit<ExtArgs> | null
    /**
     * The data used to create many ScheduledReminders.
     */
    data: ScheduledReminderCreateManyInput | ScheduledReminderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledReminderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScheduledReminder update
   */
  export type ScheduledReminderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledReminder
     */
    select?: ScheduledReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledReminder
     */
    omit?: ScheduledReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledReminderInclude<ExtArgs> | null
    /**
     * The data needed to update a ScheduledReminder.
     */
    data: XOR<ScheduledReminderUpdateInput, ScheduledReminderUncheckedUpdateInput>
    /**
     * Choose, which ScheduledReminder to update.
     */
    where: ScheduledReminderWhereUniqueInput
  }

  /**
   * ScheduledReminder updateMany
   */
  export type ScheduledReminderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScheduledReminders.
     */
    data: XOR<ScheduledReminderUpdateManyMutationInput, ScheduledReminderUncheckedUpdateManyInput>
    /**
     * Filter which ScheduledReminders to update
     */
    where?: ScheduledReminderWhereInput
    /**
     * Limit how many ScheduledReminders to update.
     */
    limit?: number
  }

  /**
   * ScheduledReminder updateManyAndReturn
   */
  export type ScheduledReminderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledReminder
     */
    select?: ScheduledReminderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledReminder
     */
    omit?: ScheduledReminderOmit<ExtArgs> | null
    /**
     * The data used to update ScheduledReminders.
     */
    data: XOR<ScheduledReminderUpdateManyMutationInput, ScheduledReminderUncheckedUpdateManyInput>
    /**
     * Filter which ScheduledReminders to update
     */
    where?: ScheduledReminderWhereInput
    /**
     * Limit how many ScheduledReminders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledReminderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScheduledReminder upsert
   */
  export type ScheduledReminderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledReminder
     */
    select?: ScheduledReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledReminder
     */
    omit?: ScheduledReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledReminderInclude<ExtArgs> | null
    /**
     * The filter to search for the ScheduledReminder to update in case it exists.
     */
    where: ScheduledReminderWhereUniqueInput
    /**
     * In case the ScheduledReminder found by the `where` argument doesn't exist, create a new ScheduledReminder with this data.
     */
    create: XOR<ScheduledReminderCreateInput, ScheduledReminderUncheckedCreateInput>
    /**
     * In case the ScheduledReminder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduledReminderUpdateInput, ScheduledReminderUncheckedUpdateInput>
  }

  /**
   * ScheduledReminder delete
   */
  export type ScheduledReminderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledReminder
     */
    select?: ScheduledReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledReminder
     */
    omit?: ScheduledReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledReminderInclude<ExtArgs> | null
    /**
     * Filter which ScheduledReminder to delete.
     */
    where: ScheduledReminderWhereUniqueInput
  }

  /**
   * ScheduledReminder deleteMany
   */
  export type ScheduledReminderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScheduledReminders to delete
     */
    where?: ScheduledReminderWhereInput
    /**
     * Limit how many ScheduledReminders to delete.
     */
    limit?: number
  }

  /**
   * ScheduledReminder without action
   */
  export type ScheduledReminderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledReminder
     */
    select?: ScheduledReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledReminder
     */
    omit?: ScheduledReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledReminderInclude<ExtArgs> | null
  }


  /**
   * Model TransactionOutbox
   */

  export type AggregateTransactionOutbox = {
    _count: TransactionOutboxCountAggregateOutputType | null
    _avg: TransactionOutboxAvgAggregateOutputType | null
    _sum: TransactionOutboxSumAggregateOutputType | null
    _min: TransactionOutboxMinAggregateOutputType | null
    _max: TransactionOutboxMaxAggregateOutputType | null
  }

  export type TransactionOutboxAvgAggregateOutputType = {
    retries: number | null
  }

  export type TransactionOutboxSumAggregateOutputType = {
    retries: number | null
  }

  export type TransactionOutboxMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    eventType: string | null
    status: $Enums.TransactionStatus | null
    error: string | null
    retries: number | null
  }

  export type TransactionOutboxMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    eventType: string | null
    status: $Enums.TransactionStatus | null
    error: string | null
    retries: number | null
  }

  export type TransactionOutboxCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    eventType: number
    payload: number
    status: number
    error: number
    retries: number
    _all: number
  }


  export type TransactionOutboxAvgAggregateInputType = {
    retries?: true
  }

  export type TransactionOutboxSumAggregateInputType = {
    retries?: true
  }

  export type TransactionOutboxMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    eventType?: true
    status?: true
    error?: true
    retries?: true
  }

  export type TransactionOutboxMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    eventType?: true
    status?: true
    error?: true
    retries?: true
  }

  export type TransactionOutboxCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    eventType?: true
    payload?: true
    status?: true
    error?: true
    retries?: true
    _all?: true
  }

  export type TransactionOutboxAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionOutbox to aggregate.
     */
    where?: TransactionOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionOutboxes to fetch.
     */
    orderBy?: TransactionOutboxOrderByWithRelationInput | TransactionOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TransactionOutboxes
    **/
    _count?: true | TransactionOutboxCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionOutboxAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionOutboxSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionOutboxMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionOutboxMaxAggregateInputType
  }

  export type GetTransactionOutboxAggregateType<T extends TransactionOutboxAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactionOutbox]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactionOutbox[P]>
      : GetScalarType<T[P], AggregateTransactionOutbox[P]>
  }




  export type TransactionOutboxGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionOutboxWhereInput
    orderBy?: TransactionOutboxOrderByWithAggregationInput | TransactionOutboxOrderByWithAggregationInput[]
    by: TransactionOutboxScalarFieldEnum[] | TransactionOutboxScalarFieldEnum
    having?: TransactionOutboxScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionOutboxCountAggregateInputType | true
    _avg?: TransactionOutboxAvgAggregateInputType
    _sum?: TransactionOutboxSumAggregateInputType
    _min?: TransactionOutboxMinAggregateInputType
    _max?: TransactionOutboxMaxAggregateInputType
  }

  export type TransactionOutboxGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    eventType: string
    payload: JsonValue
    status: $Enums.TransactionStatus
    error: string | null
    retries: number
    _count: TransactionOutboxCountAggregateOutputType | null
    _avg: TransactionOutboxAvgAggregateOutputType | null
    _sum: TransactionOutboxSumAggregateOutputType | null
    _min: TransactionOutboxMinAggregateOutputType | null
    _max: TransactionOutboxMaxAggregateOutputType | null
  }

  type GetTransactionOutboxGroupByPayload<T extends TransactionOutboxGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionOutboxGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionOutboxGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionOutboxGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionOutboxGroupByOutputType[P]>
        }
      >
    >


  export type TransactionOutboxSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    eventType?: boolean
    payload?: boolean
    status?: boolean
    error?: boolean
    retries?: boolean
  }, ExtArgs["result"]["transactionOutbox"]>

  export type TransactionOutboxSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    eventType?: boolean
    payload?: boolean
    status?: boolean
    error?: boolean
    retries?: boolean
  }, ExtArgs["result"]["transactionOutbox"]>

  export type TransactionOutboxSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    eventType?: boolean
    payload?: boolean
    status?: boolean
    error?: boolean
    retries?: boolean
  }, ExtArgs["result"]["transactionOutbox"]>

  export type TransactionOutboxSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    eventType?: boolean
    payload?: boolean
    status?: boolean
    error?: boolean
    retries?: boolean
  }

  export type TransactionOutboxOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "eventType" | "payload" | "status" | "error" | "retries", ExtArgs["result"]["transactionOutbox"]>

  export type $TransactionOutboxPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TransactionOutbox"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      eventType: string
      payload: Prisma.JsonValue
      status: $Enums.TransactionStatus
      error: string | null
      retries: number
    }, ExtArgs["result"]["transactionOutbox"]>
    composites: {}
  }

  type TransactionOutboxGetPayload<S extends boolean | null | undefined | TransactionOutboxDefaultArgs> = $Result.GetResult<Prisma.$TransactionOutboxPayload, S>

  type TransactionOutboxCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionOutboxFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionOutboxCountAggregateInputType | true
    }

  export interface TransactionOutboxDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TransactionOutbox'], meta: { name: 'TransactionOutbox' } }
    /**
     * Find zero or one TransactionOutbox that matches the filter.
     * @param {TransactionOutboxFindUniqueArgs} args - Arguments to find a TransactionOutbox
     * @example
     * // Get one TransactionOutbox
     * const transactionOutbox = await prisma.transactionOutbox.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionOutboxFindUniqueArgs>(args: SelectSubset<T, TransactionOutboxFindUniqueArgs<ExtArgs>>): Prisma__TransactionOutboxClient<$Result.GetResult<Prisma.$TransactionOutboxPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TransactionOutbox that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionOutboxFindUniqueOrThrowArgs} args - Arguments to find a TransactionOutbox
     * @example
     * // Get one TransactionOutbox
     * const transactionOutbox = await prisma.transactionOutbox.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionOutboxFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionOutboxFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionOutboxClient<$Result.GetResult<Prisma.$TransactionOutboxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransactionOutbox that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionOutboxFindFirstArgs} args - Arguments to find a TransactionOutbox
     * @example
     * // Get one TransactionOutbox
     * const transactionOutbox = await prisma.transactionOutbox.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionOutboxFindFirstArgs>(args?: SelectSubset<T, TransactionOutboxFindFirstArgs<ExtArgs>>): Prisma__TransactionOutboxClient<$Result.GetResult<Prisma.$TransactionOutboxPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransactionOutbox that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionOutboxFindFirstOrThrowArgs} args - Arguments to find a TransactionOutbox
     * @example
     * // Get one TransactionOutbox
     * const transactionOutbox = await prisma.transactionOutbox.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionOutboxFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionOutboxFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionOutboxClient<$Result.GetResult<Prisma.$TransactionOutboxPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TransactionOutboxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionOutboxFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransactionOutboxes
     * const transactionOutboxes = await prisma.transactionOutbox.findMany()
     * 
     * // Get first 10 TransactionOutboxes
     * const transactionOutboxes = await prisma.transactionOutbox.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionOutboxWithIdOnly = await prisma.transactionOutbox.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionOutboxFindManyArgs>(args?: SelectSubset<T, TransactionOutboxFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionOutboxPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TransactionOutbox.
     * @param {TransactionOutboxCreateArgs} args - Arguments to create a TransactionOutbox.
     * @example
     * // Create one TransactionOutbox
     * const TransactionOutbox = await prisma.transactionOutbox.create({
     *   data: {
     *     // ... data to create a TransactionOutbox
     *   }
     * })
     * 
     */
    create<T extends TransactionOutboxCreateArgs>(args: SelectSubset<T, TransactionOutboxCreateArgs<ExtArgs>>): Prisma__TransactionOutboxClient<$Result.GetResult<Prisma.$TransactionOutboxPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TransactionOutboxes.
     * @param {TransactionOutboxCreateManyArgs} args - Arguments to create many TransactionOutboxes.
     * @example
     * // Create many TransactionOutboxes
     * const transactionOutbox = await prisma.transactionOutbox.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionOutboxCreateManyArgs>(args?: SelectSubset<T, TransactionOutboxCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TransactionOutboxes and returns the data saved in the database.
     * @param {TransactionOutboxCreateManyAndReturnArgs} args - Arguments to create many TransactionOutboxes.
     * @example
     * // Create many TransactionOutboxes
     * const transactionOutbox = await prisma.transactionOutbox.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TransactionOutboxes and only return the `id`
     * const transactionOutboxWithIdOnly = await prisma.transactionOutbox.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionOutboxCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionOutboxCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionOutboxPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TransactionOutbox.
     * @param {TransactionOutboxDeleteArgs} args - Arguments to delete one TransactionOutbox.
     * @example
     * // Delete one TransactionOutbox
     * const TransactionOutbox = await prisma.transactionOutbox.delete({
     *   where: {
     *     // ... filter to delete one TransactionOutbox
     *   }
     * })
     * 
     */
    delete<T extends TransactionOutboxDeleteArgs>(args: SelectSubset<T, TransactionOutboxDeleteArgs<ExtArgs>>): Prisma__TransactionOutboxClient<$Result.GetResult<Prisma.$TransactionOutboxPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TransactionOutbox.
     * @param {TransactionOutboxUpdateArgs} args - Arguments to update one TransactionOutbox.
     * @example
     * // Update one TransactionOutbox
     * const transactionOutbox = await prisma.transactionOutbox.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionOutboxUpdateArgs>(args: SelectSubset<T, TransactionOutboxUpdateArgs<ExtArgs>>): Prisma__TransactionOutboxClient<$Result.GetResult<Prisma.$TransactionOutboxPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TransactionOutboxes.
     * @param {TransactionOutboxDeleteManyArgs} args - Arguments to filter TransactionOutboxes to delete.
     * @example
     * // Delete a few TransactionOutboxes
     * const { count } = await prisma.transactionOutbox.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionOutboxDeleteManyArgs>(args?: SelectSubset<T, TransactionOutboxDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransactionOutboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionOutboxUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransactionOutboxes
     * const transactionOutbox = await prisma.transactionOutbox.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionOutboxUpdateManyArgs>(args: SelectSubset<T, TransactionOutboxUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransactionOutboxes and returns the data updated in the database.
     * @param {TransactionOutboxUpdateManyAndReturnArgs} args - Arguments to update many TransactionOutboxes.
     * @example
     * // Update many TransactionOutboxes
     * const transactionOutbox = await prisma.transactionOutbox.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TransactionOutboxes and only return the `id`
     * const transactionOutboxWithIdOnly = await prisma.transactionOutbox.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransactionOutboxUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionOutboxUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionOutboxPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TransactionOutbox.
     * @param {TransactionOutboxUpsertArgs} args - Arguments to update or create a TransactionOutbox.
     * @example
     * // Update or create a TransactionOutbox
     * const transactionOutbox = await prisma.transactionOutbox.upsert({
     *   create: {
     *     // ... data to create a TransactionOutbox
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransactionOutbox we want to update
     *   }
     * })
     */
    upsert<T extends TransactionOutboxUpsertArgs>(args: SelectSubset<T, TransactionOutboxUpsertArgs<ExtArgs>>): Prisma__TransactionOutboxClient<$Result.GetResult<Prisma.$TransactionOutboxPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TransactionOutboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionOutboxCountArgs} args - Arguments to filter TransactionOutboxes to count.
     * @example
     * // Count the number of TransactionOutboxes
     * const count = await prisma.transactionOutbox.count({
     *   where: {
     *     // ... the filter for the TransactionOutboxes we want to count
     *   }
     * })
    **/
    count<T extends TransactionOutboxCountArgs>(
      args?: Subset<T, TransactionOutboxCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionOutboxCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TransactionOutbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionOutboxAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionOutboxAggregateArgs>(args: Subset<T, TransactionOutboxAggregateArgs>): Prisma.PrismaPromise<GetTransactionOutboxAggregateType<T>>

    /**
     * Group by TransactionOutbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionOutboxGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionOutboxGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionOutboxGroupByArgs['orderBy'] }
        : { orderBy?: TransactionOutboxGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionOutboxGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionOutboxGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TransactionOutbox model
   */
  readonly fields: TransactionOutboxFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TransactionOutbox.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionOutboxClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TransactionOutbox model
   */
  interface TransactionOutboxFieldRefs {
    readonly id: FieldRef<"TransactionOutbox", 'String'>
    readonly createdAt: FieldRef<"TransactionOutbox", 'DateTime'>
    readonly updatedAt: FieldRef<"TransactionOutbox", 'DateTime'>
    readonly eventType: FieldRef<"TransactionOutbox", 'String'>
    readonly payload: FieldRef<"TransactionOutbox", 'Json'>
    readonly status: FieldRef<"TransactionOutbox", 'TransactionStatus'>
    readonly error: FieldRef<"TransactionOutbox", 'String'>
    readonly retries: FieldRef<"TransactionOutbox", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TransactionOutbox findUnique
   */
  export type TransactionOutboxFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionOutbox
     */
    select?: TransactionOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionOutbox
     */
    omit?: TransactionOutboxOmit<ExtArgs> | null
    /**
     * Filter, which TransactionOutbox to fetch.
     */
    where: TransactionOutboxWhereUniqueInput
  }

  /**
   * TransactionOutbox findUniqueOrThrow
   */
  export type TransactionOutboxFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionOutbox
     */
    select?: TransactionOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionOutbox
     */
    omit?: TransactionOutboxOmit<ExtArgs> | null
    /**
     * Filter, which TransactionOutbox to fetch.
     */
    where: TransactionOutboxWhereUniqueInput
  }

  /**
   * TransactionOutbox findFirst
   */
  export type TransactionOutboxFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionOutbox
     */
    select?: TransactionOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionOutbox
     */
    omit?: TransactionOutboxOmit<ExtArgs> | null
    /**
     * Filter, which TransactionOutbox to fetch.
     */
    where?: TransactionOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionOutboxes to fetch.
     */
    orderBy?: TransactionOutboxOrderByWithRelationInput | TransactionOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionOutboxes.
     */
    cursor?: TransactionOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionOutboxes.
     */
    distinct?: TransactionOutboxScalarFieldEnum | TransactionOutboxScalarFieldEnum[]
  }

  /**
   * TransactionOutbox findFirstOrThrow
   */
  export type TransactionOutboxFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionOutbox
     */
    select?: TransactionOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionOutbox
     */
    omit?: TransactionOutboxOmit<ExtArgs> | null
    /**
     * Filter, which TransactionOutbox to fetch.
     */
    where?: TransactionOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionOutboxes to fetch.
     */
    orderBy?: TransactionOutboxOrderByWithRelationInput | TransactionOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionOutboxes.
     */
    cursor?: TransactionOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionOutboxes.
     */
    distinct?: TransactionOutboxScalarFieldEnum | TransactionOutboxScalarFieldEnum[]
  }

  /**
   * TransactionOutbox findMany
   */
  export type TransactionOutboxFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionOutbox
     */
    select?: TransactionOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionOutbox
     */
    omit?: TransactionOutboxOmit<ExtArgs> | null
    /**
     * Filter, which TransactionOutboxes to fetch.
     */
    where?: TransactionOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionOutboxes to fetch.
     */
    orderBy?: TransactionOutboxOrderByWithRelationInput | TransactionOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TransactionOutboxes.
     */
    cursor?: TransactionOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionOutboxes.
     */
    skip?: number
    distinct?: TransactionOutboxScalarFieldEnum | TransactionOutboxScalarFieldEnum[]
  }

  /**
   * TransactionOutbox create
   */
  export type TransactionOutboxCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionOutbox
     */
    select?: TransactionOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionOutbox
     */
    omit?: TransactionOutboxOmit<ExtArgs> | null
    /**
     * The data needed to create a TransactionOutbox.
     */
    data: XOR<TransactionOutboxCreateInput, TransactionOutboxUncheckedCreateInput>
  }

  /**
   * TransactionOutbox createMany
   */
  export type TransactionOutboxCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TransactionOutboxes.
     */
    data: TransactionOutboxCreateManyInput | TransactionOutboxCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TransactionOutbox createManyAndReturn
   */
  export type TransactionOutboxCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionOutbox
     */
    select?: TransactionOutboxSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionOutbox
     */
    omit?: TransactionOutboxOmit<ExtArgs> | null
    /**
     * The data used to create many TransactionOutboxes.
     */
    data: TransactionOutboxCreateManyInput | TransactionOutboxCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TransactionOutbox update
   */
  export type TransactionOutboxUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionOutbox
     */
    select?: TransactionOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionOutbox
     */
    omit?: TransactionOutboxOmit<ExtArgs> | null
    /**
     * The data needed to update a TransactionOutbox.
     */
    data: XOR<TransactionOutboxUpdateInput, TransactionOutboxUncheckedUpdateInput>
    /**
     * Choose, which TransactionOutbox to update.
     */
    where: TransactionOutboxWhereUniqueInput
  }

  /**
   * TransactionOutbox updateMany
   */
  export type TransactionOutboxUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TransactionOutboxes.
     */
    data: XOR<TransactionOutboxUpdateManyMutationInput, TransactionOutboxUncheckedUpdateManyInput>
    /**
     * Filter which TransactionOutboxes to update
     */
    where?: TransactionOutboxWhereInput
    /**
     * Limit how many TransactionOutboxes to update.
     */
    limit?: number
  }

  /**
   * TransactionOutbox updateManyAndReturn
   */
  export type TransactionOutboxUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionOutbox
     */
    select?: TransactionOutboxSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionOutbox
     */
    omit?: TransactionOutboxOmit<ExtArgs> | null
    /**
     * The data used to update TransactionOutboxes.
     */
    data: XOR<TransactionOutboxUpdateManyMutationInput, TransactionOutboxUncheckedUpdateManyInput>
    /**
     * Filter which TransactionOutboxes to update
     */
    where?: TransactionOutboxWhereInput
    /**
     * Limit how many TransactionOutboxes to update.
     */
    limit?: number
  }

  /**
   * TransactionOutbox upsert
   */
  export type TransactionOutboxUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionOutbox
     */
    select?: TransactionOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionOutbox
     */
    omit?: TransactionOutboxOmit<ExtArgs> | null
    /**
     * The filter to search for the TransactionOutbox to update in case it exists.
     */
    where: TransactionOutboxWhereUniqueInput
    /**
     * In case the TransactionOutbox found by the `where` argument doesn't exist, create a new TransactionOutbox with this data.
     */
    create: XOR<TransactionOutboxCreateInput, TransactionOutboxUncheckedCreateInput>
    /**
     * In case the TransactionOutbox was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionOutboxUpdateInput, TransactionOutboxUncheckedUpdateInput>
  }

  /**
   * TransactionOutbox delete
   */
  export type TransactionOutboxDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionOutbox
     */
    select?: TransactionOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionOutbox
     */
    omit?: TransactionOutboxOmit<ExtArgs> | null
    /**
     * Filter which TransactionOutbox to delete.
     */
    where: TransactionOutboxWhereUniqueInput
  }

  /**
   * TransactionOutbox deleteMany
   */
  export type TransactionOutboxDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionOutboxes to delete
     */
    where?: TransactionOutboxWhereInput
    /**
     * Limit how many TransactionOutboxes to delete.
     */
    limit?: number
  }

  /**
   * TransactionOutbox without action
   */
  export type TransactionOutboxDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionOutbox
     */
    select?: TransactionOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionOutbox
     */
    omit?: TransactionOutboxOmit<ExtArgs> | null
  }


  /**
   * Model ProviderApiKey
   */

  export type AggregateProviderApiKey = {
    _count: ProviderApiKeyCountAggregateOutputType | null
    _min: ProviderApiKeyMinAggregateOutputType | null
    _max: ProviderApiKeyMaxAggregateOutputType | null
  }

  export type ProviderApiKeyMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    provider: string | null
    apiKey: string | null
    orgId: string | null
  }

  export type ProviderApiKeyMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    provider: string | null
    apiKey: string | null
    orgId: string | null
  }

  export type ProviderApiKeyCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    provider: number
    apiKey: number
    orgId: number
    _all: number
  }


  export type ProviderApiKeyMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    provider?: true
    apiKey?: true
    orgId?: true
  }

  export type ProviderApiKeyMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    provider?: true
    apiKey?: true
    orgId?: true
  }

  export type ProviderApiKeyCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    provider?: true
    apiKey?: true
    orgId?: true
    _all?: true
  }

  export type ProviderApiKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProviderApiKey to aggregate.
     */
    where?: ProviderApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderApiKeys to fetch.
     */
    orderBy?: ProviderApiKeyOrderByWithRelationInput | ProviderApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProviderApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProviderApiKeys
    **/
    _count?: true | ProviderApiKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProviderApiKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProviderApiKeyMaxAggregateInputType
  }

  export type GetProviderApiKeyAggregateType<T extends ProviderApiKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateProviderApiKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProviderApiKey[P]>
      : GetScalarType<T[P], AggregateProviderApiKey[P]>
  }




  export type ProviderApiKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProviderApiKeyWhereInput
    orderBy?: ProviderApiKeyOrderByWithAggregationInput | ProviderApiKeyOrderByWithAggregationInput[]
    by: ProviderApiKeyScalarFieldEnum[] | ProviderApiKeyScalarFieldEnum
    having?: ProviderApiKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProviderApiKeyCountAggregateInputType | true
    _min?: ProviderApiKeyMinAggregateInputType
    _max?: ProviderApiKeyMaxAggregateInputType
  }

  export type ProviderApiKeyGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    provider: string
    apiKey: string
    orgId: string
    _count: ProviderApiKeyCountAggregateOutputType | null
    _min: ProviderApiKeyMinAggregateOutputType | null
    _max: ProviderApiKeyMaxAggregateOutputType | null
  }

  type GetProviderApiKeyGroupByPayload<T extends ProviderApiKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProviderApiKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProviderApiKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProviderApiKeyGroupByOutputType[P]>
            : GetScalarType<T[P], ProviderApiKeyGroupByOutputType[P]>
        }
      >
    >


  export type ProviderApiKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean
    apiKey?: boolean
    orgId?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["providerApiKey"]>

  export type ProviderApiKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean
    apiKey?: boolean
    orgId?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["providerApiKey"]>

  export type ProviderApiKeySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean
    apiKey?: boolean
    orgId?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["providerApiKey"]>

  export type ProviderApiKeySelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean
    apiKey?: boolean
    orgId?: boolean
  }

  export type ProviderApiKeyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "provider" | "apiKey" | "orgId", ExtArgs["result"]["providerApiKey"]>
  export type ProviderApiKeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type ProviderApiKeyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type ProviderApiKeyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $ProviderApiKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProviderApiKey"
    objects: {
      org: Prisma.$OrganizationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      provider: string
      apiKey: string
      orgId: string
    }, ExtArgs["result"]["providerApiKey"]>
    composites: {}
  }

  type ProviderApiKeyGetPayload<S extends boolean | null | undefined | ProviderApiKeyDefaultArgs> = $Result.GetResult<Prisma.$ProviderApiKeyPayload, S>

  type ProviderApiKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProviderApiKeyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProviderApiKeyCountAggregateInputType | true
    }

  export interface ProviderApiKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProviderApiKey'], meta: { name: 'ProviderApiKey' } }
    /**
     * Find zero or one ProviderApiKey that matches the filter.
     * @param {ProviderApiKeyFindUniqueArgs} args - Arguments to find a ProviderApiKey
     * @example
     * // Get one ProviderApiKey
     * const providerApiKey = await prisma.providerApiKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProviderApiKeyFindUniqueArgs>(args: SelectSubset<T, ProviderApiKeyFindUniqueArgs<ExtArgs>>): Prisma__ProviderApiKeyClient<$Result.GetResult<Prisma.$ProviderApiKeyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProviderApiKey that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProviderApiKeyFindUniqueOrThrowArgs} args - Arguments to find a ProviderApiKey
     * @example
     * // Get one ProviderApiKey
     * const providerApiKey = await prisma.providerApiKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProviderApiKeyFindUniqueOrThrowArgs>(args: SelectSubset<T, ProviderApiKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProviderApiKeyClient<$Result.GetResult<Prisma.$ProviderApiKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProviderApiKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderApiKeyFindFirstArgs} args - Arguments to find a ProviderApiKey
     * @example
     * // Get one ProviderApiKey
     * const providerApiKey = await prisma.providerApiKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProviderApiKeyFindFirstArgs>(args?: SelectSubset<T, ProviderApiKeyFindFirstArgs<ExtArgs>>): Prisma__ProviderApiKeyClient<$Result.GetResult<Prisma.$ProviderApiKeyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProviderApiKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderApiKeyFindFirstOrThrowArgs} args - Arguments to find a ProviderApiKey
     * @example
     * // Get one ProviderApiKey
     * const providerApiKey = await prisma.providerApiKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProviderApiKeyFindFirstOrThrowArgs>(args?: SelectSubset<T, ProviderApiKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProviderApiKeyClient<$Result.GetResult<Prisma.$ProviderApiKeyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProviderApiKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderApiKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProviderApiKeys
     * const providerApiKeys = await prisma.providerApiKey.findMany()
     * 
     * // Get first 10 ProviderApiKeys
     * const providerApiKeys = await prisma.providerApiKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const providerApiKeyWithIdOnly = await prisma.providerApiKey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProviderApiKeyFindManyArgs>(args?: SelectSubset<T, ProviderApiKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderApiKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProviderApiKey.
     * @param {ProviderApiKeyCreateArgs} args - Arguments to create a ProviderApiKey.
     * @example
     * // Create one ProviderApiKey
     * const ProviderApiKey = await prisma.providerApiKey.create({
     *   data: {
     *     // ... data to create a ProviderApiKey
     *   }
     * })
     * 
     */
    create<T extends ProviderApiKeyCreateArgs>(args: SelectSubset<T, ProviderApiKeyCreateArgs<ExtArgs>>): Prisma__ProviderApiKeyClient<$Result.GetResult<Prisma.$ProviderApiKeyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProviderApiKeys.
     * @param {ProviderApiKeyCreateManyArgs} args - Arguments to create many ProviderApiKeys.
     * @example
     * // Create many ProviderApiKeys
     * const providerApiKey = await prisma.providerApiKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProviderApiKeyCreateManyArgs>(args?: SelectSubset<T, ProviderApiKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProviderApiKeys and returns the data saved in the database.
     * @param {ProviderApiKeyCreateManyAndReturnArgs} args - Arguments to create many ProviderApiKeys.
     * @example
     * // Create many ProviderApiKeys
     * const providerApiKey = await prisma.providerApiKey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProviderApiKeys and only return the `id`
     * const providerApiKeyWithIdOnly = await prisma.providerApiKey.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProviderApiKeyCreateManyAndReturnArgs>(args?: SelectSubset<T, ProviderApiKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderApiKeyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProviderApiKey.
     * @param {ProviderApiKeyDeleteArgs} args - Arguments to delete one ProviderApiKey.
     * @example
     * // Delete one ProviderApiKey
     * const ProviderApiKey = await prisma.providerApiKey.delete({
     *   where: {
     *     // ... filter to delete one ProviderApiKey
     *   }
     * })
     * 
     */
    delete<T extends ProviderApiKeyDeleteArgs>(args: SelectSubset<T, ProviderApiKeyDeleteArgs<ExtArgs>>): Prisma__ProviderApiKeyClient<$Result.GetResult<Prisma.$ProviderApiKeyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProviderApiKey.
     * @param {ProviderApiKeyUpdateArgs} args - Arguments to update one ProviderApiKey.
     * @example
     * // Update one ProviderApiKey
     * const providerApiKey = await prisma.providerApiKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProviderApiKeyUpdateArgs>(args: SelectSubset<T, ProviderApiKeyUpdateArgs<ExtArgs>>): Prisma__ProviderApiKeyClient<$Result.GetResult<Prisma.$ProviderApiKeyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProviderApiKeys.
     * @param {ProviderApiKeyDeleteManyArgs} args - Arguments to filter ProviderApiKeys to delete.
     * @example
     * // Delete a few ProviderApiKeys
     * const { count } = await prisma.providerApiKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProviderApiKeyDeleteManyArgs>(args?: SelectSubset<T, ProviderApiKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProviderApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderApiKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProviderApiKeys
     * const providerApiKey = await prisma.providerApiKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProviderApiKeyUpdateManyArgs>(args: SelectSubset<T, ProviderApiKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProviderApiKeys and returns the data updated in the database.
     * @param {ProviderApiKeyUpdateManyAndReturnArgs} args - Arguments to update many ProviderApiKeys.
     * @example
     * // Update many ProviderApiKeys
     * const providerApiKey = await prisma.providerApiKey.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProviderApiKeys and only return the `id`
     * const providerApiKeyWithIdOnly = await prisma.providerApiKey.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProviderApiKeyUpdateManyAndReturnArgs>(args: SelectSubset<T, ProviderApiKeyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderApiKeyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProviderApiKey.
     * @param {ProviderApiKeyUpsertArgs} args - Arguments to update or create a ProviderApiKey.
     * @example
     * // Update or create a ProviderApiKey
     * const providerApiKey = await prisma.providerApiKey.upsert({
     *   create: {
     *     // ... data to create a ProviderApiKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProviderApiKey we want to update
     *   }
     * })
     */
    upsert<T extends ProviderApiKeyUpsertArgs>(args: SelectSubset<T, ProviderApiKeyUpsertArgs<ExtArgs>>): Prisma__ProviderApiKeyClient<$Result.GetResult<Prisma.$ProviderApiKeyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProviderApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderApiKeyCountArgs} args - Arguments to filter ProviderApiKeys to count.
     * @example
     * // Count the number of ProviderApiKeys
     * const count = await prisma.providerApiKey.count({
     *   where: {
     *     // ... the filter for the ProviderApiKeys we want to count
     *   }
     * })
    **/
    count<T extends ProviderApiKeyCountArgs>(
      args?: Subset<T, ProviderApiKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProviderApiKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProviderApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderApiKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProviderApiKeyAggregateArgs>(args: Subset<T, ProviderApiKeyAggregateArgs>): Prisma.PrismaPromise<GetProviderApiKeyAggregateType<T>>

    /**
     * Group by ProviderApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderApiKeyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProviderApiKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProviderApiKeyGroupByArgs['orderBy'] }
        : { orderBy?: ProviderApiKeyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProviderApiKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProviderApiKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProviderApiKey model
   */
  readonly fields: ProviderApiKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProviderApiKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProviderApiKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    org<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProviderApiKey model
   */
  interface ProviderApiKeyFieldRefs {
    readonly id: FieldRef<"ProviderApiKey", 'String'>
    readonly createdAt: FieldRef<"ProviderApiKey", 'DateTime'>
    readonly updatedAt: FieldRef<"ProviderApiKey", 'DateTime'>
    readonly provider: FieldRef<"ProviderApiKey", 'String'>
    readonly apiKey: FieldRef<"ProviderApiKey", 'String'>
    readonly orgId: FieldRef<"ProviderApiKey", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProviderApiKey findUnique
   */
  export type ProviderApiKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderApiKey
     */
    select?: ProviderApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderApiKey
     */
    omit?: ProviderApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ProviderApiKey to fetch.
     */
    where: ProviderApiKeyWhereUniqueInput
  }

  /**
   * ProviderApiKey findUniqueOrThrow
   */
  export type ProviderApiKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderApiKey
     */
    select?: ProviderApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderApiKey
     */
    omit?: ProviderApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ProviderApiKey to fetch.
     */
    where: ProviderApiKeyWhereUniqueInput
  }

  /**
   * ProviderApiKey findFirst
   */
  export type ProviderApiKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderApiKey
     */
    select?: ProviderApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderApiKey
     */
    omit?: ProviderApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ProviderApiKey to fetch.
     */
    where?: ProviderApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderApiKeys to fetch.
     */
    orderBy?: ProviderApiKeyOrderByWithRelationInput | ProviderApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderApiKeys.
     */
    cursor?: ProviderApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderApiKeys.
     */
    distinct?: ProviderApiKeyScalarFieldEnum | ProviderApiKeyScalarFieldEnum[]
  }

  /**
   * ProviderApiKey findFirstOrThrow
   */
  export type ProviderApiKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderApiKey
     */
    select?: ProviderApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderApiKey
     */
    omit?: ProviderApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ProviderApiKey to fetch.
     */
    where?: ProviderApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderApiKeys to fetch.
     */
    orderBy?: ProviderApiKeyOrderByWithRelationInput | ProviderApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderApiKeys.
     */
    cursor?: ProviderApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderApiKeys.
     */
    distinct?: ProviderApiKeyScalarFieldEnum | ProviderApiKeyScalarFieldEnum[]
  }

  /**
   * ProviderApiKey findMany
   */
  export type ProviderApiKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderApiKey
     */
    select?: ProviderApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderApiKey
     */
    omit?: ProviderApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ProviderApiKeys to fetch.
     */
    where?: ProviderApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderApiKeys to fetch.
     */
    orderBy?: ProviderApiKeyOrderByWithRelationInput | ProviderApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProviderApiKeys.
     */
    cursor?: ProviderApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderApiKeys.
     */
    skip?: number
    distinct?: ProviderApiKeyScalarFieldEnum | ProviderApiKeyScalarFieldEnum[]
  }

  /**
   * ProviderApiKey create
   */
  export type ProviderApiKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderApiKey
     */
    select?: ProviderApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderApiKey
     */
    omit?: ProviderApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderApiKeyInclude<ExtArgs> | null
    /**
     * The data needed to create a ProviderApiKey.
     */
    data: XOR<ProviderApiKeyCreateInput, ProviderApiKeyUncheckedCreateInput>
  }

  /**
   * ProviderApiKey createMany
   */
  export type ProviderApiKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProviderApiKeys.
     */
    data: ProviderApiKeyCreateManyInput | ProviderApiKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProviderApiKey createManyAndReturn
   */
  export type ProviderApiKeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderApiKey
     */
    select?: ProviderApiKeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderApiKey
     */
    omit?: ProviderApiKeyOmit<ExtArgs> | null
    /**
     * The data used to create many ProviderApiKeys.
     */
    data: ProviderApiKeyCreateManyInput | ProviderApiKeyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderApiKeyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProviderApiKey update
   */
  export type ProviderApiKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderApiKey
     */
    select?: ProviderApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderApiKey
     */
    omit?: ProviderApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderApiKeyInclude<ExtArgs> | null
    /**
     * The data needed to update a ProviderApiKey.
     */
    data: XOR<ProviderApiKeyUpdateInput, ProviderApiKeyUncheckedUpdateInput>
    /**
     * Choose, which ProviderApiKey to update.
     */
    where: ProviderApiKeyWhereUniqueInput
  }

  /**
   * ProviderApiKey updateMany
   */
  export type ProviderApiKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProviderApiKeys.
     */
    data: XOR<ProviderApiKeyUpdateManyMutationInput, ProviderApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which ProviderApiKeys to update
     */
    where?: ProviderApiKeyWhereInput
    /**
     * Limit how many ProviderApiKeys to update.
     */
    limit?: number
  }

  /**
   * ProviderApiKey updateManyAndReturn
   */
  export type ProviderApiKeyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderApiKey
     */
    select?: ProviderApiKeySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderApiKey
     */
    omit?: ProviderApiKeyOmit<ExtArgs> | null
    /**
     * The data used to update ProviderApiKeys.
     */
    data: XOR<ProviderApiKeyUpdateManyMutationInput, ProviderApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which ProviderApiKeys to update
     */
    where?: ProviderApiKeyWhereInput
    /**
     * Limit how many ProviderApiKeys to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderApiKeyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProviderApiKey upsert
   */
  export type ProviderApiKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderApiKey
     */
    select?: ProviderApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderApiKey
     */
    omit?: ProviderApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderApiKeyInclude<ExtArgs> | null
    /**
     * The filter to search for the ProviderApiKey to update in case it exists.
     */
    where: ProviderApiKeyWhereUniqueInput
    /**
     * In case the ProviderApiKey found by the `where` argument doesn't exist, create a new ProviderApiKey with this data.
     */
    create: XOR<ProviderApiKeyCreateInput, ProviderApiKeyUncheckedCreateInput>
    /**
     * In case the ProviderApiKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProviderApiKeyUpdateInput, ProviderApiKeyUncheckedUpdateInput>
  }

  /**
   * ProviderApiKey delete
   */
  export type ProviderApiKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderApiKey
     */
    select?: ProviderApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderApiKey
     */
    omit?: ProviderApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderApiKeyInclude<ExtArgs> | null
    /**
     * Filter which ProviderApiKey to delete.
     */
    where: ProviderApiKeyWhereUniqueInput
  }

  /**
   * ProviderApiKey deleteMany
   */
  export type ProviderApiKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProviderApiKeys to delete
     */
    where?: ProviderApiKeyWhereInput
    /**
     * Limit how many ProviderApiKeys to delete.
     */
    limit?: number
  }

  /**
   * ProviderApiKey without action
   */
  export type ProviderApiKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderApiKey
     */
    select?: ProviderApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderApiKey
     */
    omit?: ProviderApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderApiKeyInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    role: 'role',
    orgId: 'orgId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    expiresAt: 'expiresAt',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    providerId: 'providerId',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    idToken: 'idToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    email: 'email',
    phone: 'phone',
    outboundPhone: 'outboundPhone'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    firstName: 'firstName',
    lastName: 'lastName',
    preferredName: 'preferredName',
    email: 'email',
    phoneNumber: 'phoneNumber',
    orgId: 'orgId',
    authorId: 'authorId'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const TemplateScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    content: 'content',
    orgId: 'orgId',
    authorId: 'authorId'
  };

  export type TemplateScalarFieldEnum = (typeof TemplateScalarFieldEnum)[keyof typeof TemplateScalarFieldEnum]


  export const VoiceCloneScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    description: 'description',
    cloneProvider: 'cloneProvider',
    providerId: 'providerId',
    orgId: 'orgId',
    authorId: 'authorId'
  };

  export type VoiceCloneScalarFieldEnum = (typeof VoiceCloneScalarFieldEnum)[keyof typeof VoiceCloneScalarFieldEnum]


  export const VoiceSampleScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    filename: 'filename',
    name: 'name',
    description: 'description',
    storageKey: 'storageKey',
    orgId: 'orgId',
    authorId: 'authorId'
  };

  export type VoiceSampleScalarFieldEnum = (typeof VoiceSampleScalarFieldEnum)[keyof typeof VoiceSampleScalarFieldEnum]


  export const ScheduledReminderScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    timeZone: 'timeZone',
    appointmentTime: 'appointmentTime',
    reminderOffset: 'reminderOffset',
    status: 'status',
    attempts: 'attempts',
    lastAttempt: 'lastAttempt',
    orgId: 'orgId',
    userId: 'userId',
    clientId: 'clientId',
    templateId: 'templateId',
    voiceId: 'voiceId'
  };

  export type ScheduledReminderScalarFieldEnum = (typeof ScheduledReminderScalarFieldEnum)[keyof typeof ScheduledReminderScalarFieldEnum]


  export const TransactionOutboxScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    eventType: 'eventType',
    payload: 'payload',
    status: 'status',
    error: 'error',
    retries: 'retries'
  };

  export type TransactionOutboxScalarFieldEnum = (typeof TransactionOutboxScalarFieldEnum)[keyof typeof TransactionOutboxScalarFieldEnum]


  export const ProviderApiKeyScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    provider: 'provider',
    apiKey: 'apiKey',
    orgId: 'orgId'
  };

  export type ProviderApiKeyScalarFieldEnum = (typeof ProviderApiKeyScalarFieldEnum)[keyof typeof ProviderApiKeyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'CloneProvider'
   */
  export type EnumCloneProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CloneProvider'>
    


  /**
   * Reference to a field of type 'CloneProvider[]'
   */
  export type ListEnumCloneProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CloneProvider[]'>
    


  /**
   * Reference to a field of type 'ReminderOffset'
   */
  export type EnumReminderOffsetFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReminderOffset'>
    


  /**
   * Reference to a field of type 'ReminderOffset[]'
   */
  export type ListEnumReminderOffsetFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReminderOffset[]'>
    


  /**
   * Reference to a field of type 'CallStatus'
   */
  export type EnumCallStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CallStatus'>
    


  /**
   * Reference to a field of type 'CallStatus[]'
   */
  export type ListEnumCallStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CallStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'TransactionStatus'
   */
  export type EnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus'>
    


  /**
   * Reference to a field of type 'TransactionStatus[]'
   */
  export type ListEnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    orgId?: StringNullableFilter<"User"> | string | null
    org?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    templates?: TemplateListRelationFilter
    voiceClones?: VoiceCloneListRelationFilter
    voiceSamples?: VoiceSampleListRelationFilter
    clients?: ClientListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    orgId?: SortOrderInput | SortOrder
    org?: OrganizationOrderByWithRelationInput
    sessions?: SessionOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    templates?: TemplateOrderByRelationAggregateInput
    voiceClones?: VoiceCloneOrderByRelationAggregateInput
    voiceSamples?: VoiceSampleOrderByRelationAggregateInput
    clients?: ClientOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    orgId?: StringNullableFilter<"User"> | string | null
    org?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    templates?: TemplateListRelationFilter
    voiceClones?: VoiceCloneListRelationFilter
    voiceSamples?: VoiceSampleListRelationFilter
    clients?: ClientListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    orgId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    orgId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    token?: StringWithAggregatesFilter<"Session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userId?: StringWithAggregatesFilter<"Session"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    accountId?: StringWithAggregatesFilter<"Account"> | string
    providerId?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    id?: StringFilter<"Verification"> | string
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }, "id">

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification"> | string
    identifier?: StringWithAggregatesFilter<"Verification"> | string
    value?: StringWithAggregatesFilter<"Verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
  }

  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: StringFilter<"Organization"> | string
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    name?: StringFilter<"Organization"> | string
    email?: StringNullableFilter<"Organization"> | string | null
    phone?: StringNullableFilter<"Organization"> | string | null
    outboundPhone?: StringNullableFilter<"Organization"> | string | null
    users?: UserListRelationFilter
    clients?: ClientListRelationFilter
    templates?: TemplateListRelationFilter
    voiceClones?: VoiceCloneListRelationFilter
    voiceSamples?: VoiceSampleListRelationFilter
    apiKeys?: ProviderApiKeyListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    outboundPhone?: SortOrderInput | SortOrder
    users?: UserOrderByRelationAggregateInput
    clients?: ClientOrderByRelationAggregateInput
    templates?: TemplateOrderByRelationAggregateInput
    voiceClones?: VoiceCloneOrderByRelationAggregateInput
    voiceSamples?: VoiceSampleOrderByRelationAggregateInput
    apiKeys?: ProviderApiKeyOrderByRelationAggregateInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    name?: StringFilter<"Organization"> | string
    phone?: StringNullableFilter<"Organization"> | string | null
    outboundPhone?: StringNullableFilter<"Organization"> | string | null
    users?: UserListRelationFilter
    clients?: ClientListRelationFilter
    templates?: TemplateListRelationFilter
    voiceClones?: VoiceCloneListRelationFilter
    voiceSamples?: VoiceSampleListRelationFilter
    apiKeys?: ProviderApiKeyListRelationFilter
  }, "id" | "email">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    outboundPhone?: SortOrderInput | SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Organization"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
    name?: StringWithAggregatesFilter<"Organization"> | string
    email?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    outboundPhone?: StringNullableWithAggregatesFilter<"Organization"> | string | null
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: StringFilter<"Client"> | string
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    firstName?: StringFilter<"Client"> | string
    lastName?: StringFilter<"Client"> | string
    preferredName?: StringNullableFilter<"Client"> | string | null
    email?: StringFilter<"Client"> | string
    phoneNumber?: StringFilter<"Client"> | string
    orgId?: StringFilter<"Client"> | string
    authorId?: StringFilter<"Client"> | string
    org?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    scheduledReminders?: ScheduledReminderListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    preferredName?: SortOrderInput | SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    orgId?: SortOrder
    authorId?: SortOrder
    org?: OrganizationOrderByWithRelationInput
    author?: UserOrderByWithRelationInput
    scheduledReminders?: ScheduledReminderOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email_orgId?: ClientEmailOrgIdCompoundUniqueInput
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    firstName?: StringFilter<"Client"> | string
    lastName?: StringFilter<"Client"> | string
    preferredName?: StringNullableFilter<"Client"> | string | null
    email?: StringFilter<"Client"> | string
    phoneNumber?: StringFilter<"Client"> | string
    orgId?: StringFilter<"Client"> | string
    authorId?: StringFilter<"Client"> | string
    org?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    scheduledReminders?: ScheduledReminderListRelationFilter
  }, "id" | "email_orgId">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    preferredName?: SortOrderInput | SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    orgId?: SortOrder
    authorId?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Client"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    firstName?: StringWithAggregatesFilter<"Client"> | string
    lastName?: StringWithAggregatesFilter<"Client"> | string
    preferredName?: StringNullableWithAggregatesFilter<"Client"> | string | null
    email?: StringWithAggregatesFilter<"Client"> | string
    phoneNumber?: StringWithAggregatesFilter<"Client"> | string
    orgId?: StringWithAggregatesFilter<"Client"> | string
    authorId?: StringWithAggregatesFilter<"Client"> | string
  }

  export type TemplateWhereInput = {
    AND?: TemplateWhereInput | TemplateWhereInput[]
    OR?: TemplateWhereInput[]
    NOT?: TemplateWhereInput | TemplateWhereInput[]
    id?: StringFilter<"Template"> | string
    createdAt?: DateTimeFilter<"Template"> | Date | string
    updatedAt?: DateTimeFilter<"Template"> | Date | string
    name?: StringFilter<"Template"> | string
    content?: StringFilter<"Template"> | string
    orgId?: StringFilter<"Template"> | string
    authorId?: StringFilter<"Template"> | string
    org?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    scheduledReminders?: ScheduledReminderListRelationFilter
  }

  export type TemplateOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    content?: SortOrder
    orgId?: SortOrder
    authorId?: SortOrder
    org?: OrganizationOrderByWithRelationInput
    author?: UserOrderByWithRelationInput
    scheduledReminders?: ScheduledReminderOrderByRelationAggregateInput
  }

  export type TemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TemplateWhereInput | TemplateWhereInput[]
    OR?: TemplateWhereInput[]
    NOT?: TemplateWhereInput | TemplateWhereInput[]
    createdAt?: DateTimeFilter<"Template"> | Date | string
    updatedAt?: DateTimeFilter<"Template"> | Date | string
    name?: StringFilter<"Template"> | string
    content?: StringFilter<"Template"> | string
    orgId?: StringFilter<"Template"> | string
    authorId?: StringFilter<"Template"> | string
    org?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    scheduledReminders?: ScheduledReminderListRelationFilter
  }, "id">

  export type TemplateOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    content?: SortOrder
    orgId?: SortOrder
    authorId?: SortOrder
    _count?: TemplateCountOrderByAggregateInput
    _max?: TemplateMaxOrderByAggregateInput
    _min?: TemplateMinOrderByAggregateInput
  }

  export type TemplateScalarWhereWithAggregatesInput = {
    AND?: TemplateScalarWhereWithAggregatesInput | TemplateScalarWhereWithAggregatesInput[]
    OR?: TemplateScalarWhereWithAggregatesInput[]
    NOT?: TemplateScalarWhereWithAggregatesInput | TemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Template"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Template"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Template"> | Date | string
    name?: StringWithAggregatesFilter<"Template"> | string
    content?: StringWithAggregatesFilter<"Template"> | string
    orgId?: StringWithAggregatesFilter<"Template"> | string
    authorId?: StringWithAggregatesFilter<"Template"> | string
  }

  export type VoiceCloneWhereInput = {
    AND?: VoiceCloneWhereInput | VoiceCloneWhereInput[]
    OR?: VoiceCloneWhereInput[]
    NOT?: VoiceCloneWhereInput | VoiceCloneWhereInput[]
    id?: StringFilter<"VoiceClone"> | string
    createdAt?: DateTimeFilter<"VoiceClone"> | Date | string
    updatedAt?: DateTimeFilter<"VoiceClone"> | Date | string
    name?: StringFilter<"VoiceClone"> | string
    description?: StringNullableFilter<"VoiceClone"> | string | null
    cloneProvider?: EnumCloneProviderFilter<"VoiceClone"> | $Enums.CloneProvider
    providerId?: StringFilter<"VoiceClone"> | string
    orgId?: StringFilter<"VoiceClone"> | string
    authorId?: StringFilter<"VoiceClone"> | string
    org?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    scheduledReminders?: ScheduledReminderListRelationFilter
  }

  export type VoiceCloneOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    cloneProvider?: SortOrder
    providerId?: SortOrder
    orgId?: SortOrder
    authorId?: SortOrder
    org?: OrganizationOrderByWithRelationInput
    author?: UserOrderByWithRelationInput
    scheduledReminders?: ScheduledReminderOrderByRelationAggregateInput
  }

  export type VoiceCloneWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    providerId?: string
    AND?: VoiceCloneWhereInput | VoiceCloneWhereInput[]
    OR?: VoiceCloneWhereInput[]
    NOT?: VoiceCloneWhereInput | VoiceCloneWhereInput[]
    createdAt?: DateTimeFilter<"VoiceClone"> | Date | string
    updatedAt?: DateTimeFilter<"VoiceClone"> | Date | string
    name?: StringFilter<"VoiceClone"> | string
    description?: StringNullableFilter<"VoiceClone"> | string | null
    cloneProvider?: EnumCloneProviderFilter<"VoiceClone"> | $Enums.CloneProvider
    orgId?: StringFilter<"VoiceClone"> | string
    authorId?: StringFilter<"VoiceClone"> | string
    org?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    scheduledReminders?: ScheduledReminderListRelationFilter
  }, "id" | "providerId">

  export type VoiceCloneOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    cloneProvider?: SortOrder
    providerId?: SortOrder
    orgId?: SortOrder
    authorId?: SortOrder
    _count?: VoiceCloneCountOrderByAggregateInput
    _max?: VoiceCloneMaxOrderByAggregateInput
    _min?: VoiceCloneMinOrderByAggregateInput
  }

  export type VoiceCloneScalarWhereWithAggregatesInput = {
    AND?: VoiceCloneScalarWhereWithAggregatesInput | VoiceCloneScalarWhereWithAggregatesInput[]
    OR?: VoiceCloneScalarWhereWithAggregatesInput[]
    NOT?: VoiceCloneScalarWhereWithAggregatesInput | VoiceCloneScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VoiceClone"> | string
    createdAt?: DateTimeWithAggregatesFilter<"VoiceClone"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VoiceClone"> | Date | string
    name?: StringWithAggregatesFilter<"VoiceClone"> | string
    description?: StringNullableWithAggregatesFilter<"VoiceClone"> | string | null
    cloneProvider?: EnumCloneProviderWithAggregatesFilter<"VoiceClone"> | $Enums.CloneProvider
    providerId?: StringWithAggregatesFilter<"VoiceClone"> | string
    orgId?: StringWithAggregatesFilter<"VoiceClone"> | string
    authorId?: StringWithAggregatesFilter<"VoiceClone"> | string
  }

  export type VoiceSampleWhereInput = {
    AND?: VoiceSampleWhereInput | VoiceSampleWhereInput[]
    OR?: VoiceSampleWhereInput[]
    NOT?: VoiceSampleWhereInput | VoiceSampleWhereInput[]
    id?: StringFilter<"VoiceSample"> | string
    createdAt?: DateTimeFilter<"VoiceSample"> | Date | string
    updatedAt?: DateTimeFilter<"VoiceSample"> | Date | string
    filename?: StringFilter<"VoiceSample"> | string
    name?: StringFilter<"VoiceSample"> | string
    description?: StringNullableFilter<"VoiceSample"> | string | null
    storageKey?: StringNullableFilter<"VoiceSample"> | string | null
    orgId?: StringFilter<"VoiceSample"> | string
    authorId?: StringFilter<"VoiceSample"> | string
    org?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type VoiceSampleOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    filename?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    storageKey?: SortOrderInput | SortOrder
    orgId?: SortOrder
    authorId?: SortOrder
    org?: OrganizationOrderByWithRelationInput
    author?: UserOrderByWithRelationInput
  }

  export type VoiceSampleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VoiceSampleWhereInput | VoiceSampleWhereInput[]
    OR?: VoiceSampleWhereInput[]
    NOT?: VoiceSampleWhereInput | VoiceSampleWhereInput[]
    createdAt?: DateTimeFilter<"VoiceSample"> | Date | string
    updatedAt?: DateTimeFilter<"VoiceSample"> | Date | string
    filename?: StringFilter<"VoiceSample"> | string
    name?: StringFilter<"VoiceSample"> | string
    description?: StringNullableFilter<"VoiceSample"> | string | null
    storageKey?: StringNullableFilter<"VoiceSample"> | string | null
    orgId?: StringFilter<"VoiceSample"> | string
    authorId?: StringFilter<"VoiceSample"> | string
    org?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type VoiceSampleOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    filename?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    storageKey?: SortOrderInput | SortOrder
    orgId?: SortOrder
    authorId?: SortOrder
    _count?: VoiceSampleCountOrderByAggregateInput
    _max?: VoiceSampleMaxOrderByAggregateInput
    _min?: VoiceSampleMinOrderByAggregateInput
  }

  export type VoiceSampleScalarWhereWithAggregatesInput = {
    AND?: VoiceSampleScalarWhereWithAggregatesInput | VoiceSampleScalarWhereWithAggregatesInput[]
    OR?: VoiceSampleScalarWhereWithAggregatesInput[]
    NOT?: VoiceSampleScalarWhereWithAggregatesInput | VoiceSampleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VoiceSample"> | string
    createdAt?: DateTimeWithAggregatesFilter<"VoiceSample"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VoiceSample"> | Date | string
    filename?: StringWithAggregatesFilter<"VoiceSample"> | string
    name?: StringWithAggregatesFilter<"VoiceSample"> | string
    description?: StringNullableWithAggregatesFilter<"VoiceSample"> | string | null
    storageKey?: StringNullableWithAggregatesFilter<"VoiceSample"> | string | null
    orgId?: StringWithAggregatesFilter<"VoiceSample"> | string
    authorId?: StringWithAggregatesFilter<"VoiceSample"> | string
  }

  export type ScheduledReminderWhereInput = {
    AND?: ScheduledReminderWhereInput | ScheduledReminderWhereInput[]
    OR?: ScheduledReminderWhereInput[]
    NOT?: ScheduledReminderWhereInput | ScheduledReminderWhereInput[]
    id?: StringFilter<"ScheduledReminder"> | string
    createdAt?: DateTimeFilter<"ScheduledReminder"> | Date | string
    updatedAt?: DateTimeFilter<"ScheduledReminder"> | Date | string
    timeZone?: StringFilter<"ScheduledReminder"> | string
    appointmentTime?: DateTimeFilter<"ScheduledReminder"> | Date | string
    reminderOffset?: EnumReminderOffsetFilter<"ScheduledReminder"> | $Enums.ReminderOffset
    status?: EnumCallStatusFilter<"ScheduledReminder"> | $Enums.CallStatus
    attempts?: IntFilter<"ScheduledReminder"> | number
    lastAttempt?: DateTimeNullableFilter<"ScheduledReminder"> | Date | string | null
    orgId?: StringFilter<"ScheduledReminder"> | string
    userId?: StringFilter<"ScheduledReminder"> | string
    clientId?: StringFilter<"ScheduledReminder"> | string
    templateId?: StringFilter<"ScheduledReminder"> | string
    voiceId?: StringFilter<"ScheduledReminder"> | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    template?: XOR<TemplateScalarRelationFilter, TemplateWhereInput>
    voice?: XOR<VoiceCloneScalarRelationFilter, VoiceCloneWhereInput>
  }

  export type ScheduledReminderOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    timeZone?: SortOrder
    appointmentTime?: SortOrder
    reminderOffset?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    lastAttempt?: SortOrderInput | SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    clientId?: SortOrder
    templateId?: SortOrder
    voiceId?: SortOrder
    client?: ClientOrderByWithRelationInput
    template?: TemplateOrderByWithRelationInput
    voice?: VoiceCloneOrderByWithRelationInput
  }

  export type ScheduledReminderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScheduledReminderWhereInput | ScheduledReminderWhereInput[]
    OR?: ScheduledReminderWhereInput[]
    NOT?: ScheduledReminderWhereInput | ScheduledReminderWhereInput[]
    createdAt?: DateTimeFilter<"ScheduledReminder"> | Date | string
    updatedAt?: DateTimeFilter<"ScheduledReminder"> | Date | string
    timeZone?: StringFilter<"ScheduledReminder"> | string
    appointmentTime?: DateTimeFilter<"ScheduledReminder"> | Date | string
    reminderOffset?: EnumReminderOffsetFilter<"ScheduledReminder"> | $Enums.ReminderOffset
    status?: EnumCallStatusFilter<"ScheduledReminder"> | $Enums.CallStatus
    attempts?: IntFilter<"ScheduledReminder"> | number
    lastAttempt?: DateTimeNullableFilter<"ScheduledReminder"> | Date | string | null
    orgId?: StringFilter<"ScheduledReminder"> | string
    userId?: StringFilter<"ScheduledReminder"> | string
    clientId?: StringFilter<"ScheduledReminder"> | string
    templateId?: StringFilter<"ScheduledReminder"> | string
    voiceId?: StringFilter<"ScheduledReminder"> | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    template?: XOR<TemplateScalarRelationFilter, TemplateWhereInput>
    voice?: XOR<VoiceCloneScalarRelationFilter, VoiceCloneWhereInput>
  }, "id">

  export type ScheduledReminderOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    timeZone?: SortOrder
    appointmentTime?: SortOrder
    reminderOffset?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    lastAttempt?: SortOrderInput | SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    clientId?: SortOrder
    templateId?: SortOrder
    voiceId?: SortOrder
    _count?: ScheduledReminderCountOrderByAggregateInput
    _avg?: ScheduledReminderAvgOrderByAggregateInput
    _max?: ScheduledReminderMaxOrderByAggregateInput
    _min?: ScheduledReminderMinOrderByAggregateInput
    _sum?: ScheduledReminderSumOrderByAggregateInput
  }

  export type ScheduledReminderScalarWhereWithAggregatesInput = {
    AND?: ScheduledReminderScalarWhereWithAggregatesInput | ScheduledReminderScalarWhereWithAggregatesInput[]
    OR?: ScheduledReminderScalarWhereWithAggregatesInput[]
    NOT?: ScheduledReminderScalarWhereWithAggregatesInput | ScheduledReminderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ScheduledReminder"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ScheduledReminder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ScheduledReminder"> | Date | string
    timeZone?: StringWithAggregatesFilter<"ScheduledReminder"> | string
    appointmentTime?: DateTimeWithAggregatesFilter<"ScheduledReminder"> | Date | string
    reminderOffset?: EnumReminderOffsetWithAggregatesFilter<"ScheduledReminder"> | $Enums.ReminderOffset
    status?: EnumCallStatusWithAggregatesFilter<"ScheduledReminder"> | $Enums.CallStatus
    attempts?: IntWithAggregatesFilter<"ScheduledReminder"> | number
    lastAttempt?: DateTimeNullableWithAggregatesFilter<"ScheduledReminder"> | Date | string | null
    orgId?: StringWithAggregatesFilter<"ScheduledReminder"> | string
    userId?: StringWithAggregatesFilter<"ScheduledReminder"> | string
    clientId?: StringWithAggregatesFilter<"ScheduledReminder"> | string
    templateId?: StringWithAggregatesFilter<"ScheduledReminder"> | string
    voiceId?: StringWithAggregatesFilter<"ScheduledReminder"> | string
  }

  export type TransactionOutboxWhereInput = {
    AND?: TransactionOutboxWhereInput | TransactionOutboxWhereInput[]
    OR?: TransactionOutboxWhereInput[]
    NOT?: TransactionOutboxWhereInput | TransactionOutboxWhereInput[]
    id?: StringFilter<"TransactionOutbox"> | string
    createdAt?: DateTimeFilter<"TransactionOutbox"> | Date | string
    updatedAt?: DateTimeFilter<"TransactionOutbox"> | Date | string
    eventType?: StringFilter<"TransactionOutbox"> | string
    payload?: JsonFilter<"TransactionOutbox">
    status?: EnumTransactionStatusFilter<"TransactionOutbox"> | $Enums.TransactionStatus
    error?: StringNullableFilter<"TransactionOutbox"> | string | null
    retries?: IntFilter<"TransactionOutbox"> | number
  }

  export type TransactionOutboxOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    eventType?: SortOrder
    payload?: SortOrder
    status?: SortOrder
    error?: SortOrderInput | SortOrder
    retries?: SortOrder
  }

  export type TransactionOutboxWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransactionOutboxWhereInput | TransactionOutboxWhereInput[]
    OR?: TransactionOutboxWhereInput[]
    NOT?: TransactionOutboxWhereInput | TransactionOutboxWhereInput[]
    createdAt?: DateTimeFilter<"TransactionOutbox"> | Date | string
    updatedAt?: DateTimeFilter<"TransactionOutbox"> | Date | string
    eventType?: StringFilter<"TransactionOutbox"> | string
    payload?: JsonFilter<"TransactionOutbox">
    status?: EnumTransactionStatusFilter<"TransactionOutbox"> | $Enums.TransactionStatus
    error?: StringNullableFilter<"TransactionOutbox"> | string | null
    retries?: IntFilter<"TransactionOutbox"> | number
  }, "id">

  export type TransactionOutboxOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    eventType?: SortOrder
    payload?: SortOrder
    status?: SortOrder
    error?: SortOrderInput | SortOrder
    retries?: SortOrder
    _count?: TransactionOutboxCountOrderByAggregateInput
    _avg?: TransactionOutboxAvgOrderByAggregateInput
    _max?: TransactionOutboxMaxOrderByAggregateInput
    _min?: TransactionOutboxMinOrderByAggregateInput
    _sum?: TransactionOutboxSumOrderByAggregateInput
  }

  export type TransactionOutboxScalarWhereWithAggregatesInput = {
    AND?: TransactionOutboxScalarWhereWithAggregatesInput | TransactionOutboxScalarWhereWithAggregatesInput[]
    OR?: TransactionOutboxScalarWhereWithAggregatesInput[]
    NOT?: TransactionOutboxScalarWhereWithAggregatesInput | TransactionOutboxScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TransactionOutbox"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TransactionOutbox"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TransactionOutbox"> | Date | string
    eventType?: StringWithAggregatesFilter<"TransactionOutbox"> | string
    payload?: JsonWithAggregatesFilter<"TransactionOutbox">
    status?: EnumTransactionStatusWithAggregatesFilter<"TransactionOutbox"> | $Enums.TransactionStatus
    error?: StringNullableWithAggregatesFilter<"TransactionOutbox"> | string | null
    retries?: IntWithAggregatesFilter<"TransactionOutbox"> | number
  }

  export type ProviderApiKeyWhereInput = {
    AND?: ProviderApiKeyWhereInput | ProviderApiKeyWhereInput[]
    OR?: ProviderApiKeyWhereInput[]
    NOT?: ProviderApiKeyWhereInput | ProviderApiKeyWhereInput[]
    id?: StringFilter<"ProviderApiKey"> | string
    createdAt?: DateTimeFilter<"ProviderApiKey"> | Date | string
    updatedAt?: DateTimeFilter<"ProviderApiKey"> | Date | string
    provider?: StringFilter<"ProviderApiKey"> | string
    apiKey?: StringFilter<"ProviderApiKey"> | string
    orgId?: StringFilter<"ProviderApiKey"> | string
    org?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }

  export type ProviderApiKeyOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    provider?: SortOrder
    apiKey?: SortOrder
    orgId?: SortOrder
    org?: OrganizationOrderByWithRelationInput
  }

  export type ProviderApiKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orgId_provider?: ProviderApiKeyOrgIdProviderCompoundUniqueInput
    AND?: ProviderApiKeyWhereInput | ProviderApiKeyWhereInput[]
    OR?: ProviderApiKeyWhereInput[]
    NOT?: ProviderApiKeyWhereInput | ProviderApiKeyWhereInput[]
    createdAt?: DateTimeFilter<"ProviderApiKey"> | Date | string
    updatedAt?: DateTimeFilter<"ProviderApiKey"> | Date | string
    provider?: StringFilter<"ProviderApiKey"> | string
    apiKey?: StringFilter<"ProviderApiKey"> | string
    orgId?: StringFilter<"ProviderApiKey"> | string
    org?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }, "id" | "orgId_provider">

  export type ProviderApiKeyOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    provider?: SortOrder
    apiKey?: SortOrder
    orgId?: SortOrder
    _count?: ProviderApiKeyCountOrderByAggregateInput
    _max?: ProviderApiKeyMaxOrderByAggregateInput
    _min?: ProviderApiKeyMinOrderByAggregateInput
  }

  export type ProviderApiKeyScalarWhereWithAggregatesInput = {
    AND?: ProviderApiKeyScalarWhereWithAggregatesInput | ProviderApiKeyScalarWhereWithAggregatesInput[]
    OR?: ProviderApiKeyScalarWhereWithAggregatesInput[]
    NOT?: ProviderApiKeyScalarWhereWithAggregatesInput | ProviderApiKeyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProviderApiKey"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProviderApiKey"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProviderApiKey"> | Date | string
    provider?: StringWithAggregatesFilter<"ProviderApiKey"> | string
    apiKey?: StringWithAggregatesFilter<"ProviderApiKey"> | string
    orgId?: StringWithAggregatesFilter<"ProviderApiKey"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    org?: OrganizationCreateNestedOneWithoutUsersInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    templates?: TemplateCreateNestedManyWithoutAuthorInput
    voiceClones?: VoiceCloneCreateNestedManyWithoutAuthorInput
    voiceSamples?: VoiceSampleCreateNestedManyWithoutAuthorInput
    clients?: ClientCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    orgId?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    templates?: TemplateUncheckedCreateNestedManyWithoutAuthorInput
    voiceClones?: VoiceCloneUncheckedCreateNestedManyWithoutAuthorInput
    voiceSamples?: VoiceSampleUncheckedCreateNestedManyWithoutAuthorInput
    clients?: ClientUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    org?: OrganizationUpdateOneWithoutUsersNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    templates?: TemplateUpdateManyWithoutAuthorNestedInput
    voiceClones?: VoiceCloneUpdateManyWithoutAuthorNestedInput
    voiceSamples?: VoiceSampleUpdateManyWithoutAuthorNestedInput
    clients?: ClientUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutAuthorNestedInput
    voiceClones?: VoiceCloneUncheckedUpdateManyWithoutAuthorNestedInput
    voiceSamples?: VoiceSampleUncheckedUpdateManyWithoutAuthorNestedInput
    clients?: ClientUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    orgId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateManyInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUncheckedCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateManyInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    email?: string | null
    phone?: string | null
    outboundPhone?: string | null
    users?: UserCreateNestedManyWithoutOrgInput
    clients?: ClientCreateNestedManyWithoutOrgInput
    templates?: TemplateCreateNestedManyWithoutOrgInput
    voiceClones?: VoiceCloneCreateNestedManyWithoutOrgInput
    voiceSamples?: VoiceSampleCreateNestedManyWithoutOrgInput
    apiKeys?: ProviderApiKeyCreateNestedManyWithoutOrgInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    email?: string | null
    phone?: string | null
    outboundPhone?: string | null
    users?: UserUncheckedCreateNestedManyWithoutOrgInput
    clients?: ClientUncheckedCreateNestedManyWithoutOrgInput
    templates?: TemplateUncheckedCreateNestedManyWithoutOrgInput
    voiceClones?: VoiceCloneUncheckedCreateNestedManyWithoutOrgInput
    voiceSamples?: VoiceSampleUncheckedCreateNestedManyWithoutOrgInput
    apiKeys?: ProviderApiKeyUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrganizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    outboundPhone?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUpdateManyWithoutOrgNestedInput
    clients?: ClientUpdateManyWithoutOrgNestedInput
    templates?: TemplateUpdateManyWithoutOrgNestedInput
    voiceClones?: VoiceCloneUpdateManyWithoutOrgNestedInput
    voiceSamples?: VoiceSampleUpdateManyWithoutOrgNestedInput
    apiKeys?: ProviderApiKeyUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    outboundPhone?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutOrgNestedInput
    clients?: ClientUncheckedUpdateManyWithoutOrgNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutOrgNestedInput
    voiceClones?: VoiceCloneUncheckedUpdateManyWithoutOrgNestedInput
    voiceSamples?: VoiceSampleUncheckedUpdateManyWithoutOrgNestedInput
    apiKeys?: ProviderApiKeyUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    email?: string | null
    phone?: string | null
    outboundPhone?: string | null
  }

  export type OrganizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    outboundPhone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    outboundPhone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClientCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    preferredName?: string | null
    email: string
    phoneNumber: string
    org: OrganizationCreateNestedOneWithoutClientsInput
    author: UserCreateNestedOneWithoutClientsInput
    scheduledReminders?: ScheduledReminderCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    preferredName?: string | null
    email: string
    phoneNumber: string
    orgId: string
    authorId: string
    scheduledReminders?: ScheduledReminderUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    preferredName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    org?: OrganizationUpdateOneRequiredWithoutClientsNestedInput
    author?: UserUpdateOneRequiredWithoutClientsNestedInput
    scheduledReminders?: ScheduledReminderUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    preferredName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    scheduledReminders?: ScheduledReminderUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    preferredName?: string | null
    email: string
    phoneNumber: string
    orgId: string
    authorId: string
  }

  export type ClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    preferredName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    preferredName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type TemplateCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    content: string
    org: OrganizationCreateNestedOneWithoutTemplatesInput
    author: UserCreateNestedOneWithoutTemplatesInput
    scheduledReminders?: ScheduledReminderCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    content: string
    orgId: string
    authorId: string
    scheduledReminders?: ScheduledReminderUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    org?: OrganizationUpdateOneRequiredWithoutTemplatesNestedInput
    author?: UserUpdateOneRequiredWithoutTemplatesNestedInput
    scheduledReminders?: ScheduledReminderUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    scheduledReminders?: ScheduledReminderUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    content: string
    orgId: string
    authorId: string
  }

  export type TemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type TemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type VoiceCloneCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    cloneProvider: $Enums.CloneProvider
    providerId: string
    org: OrganizationCreateNestedOneWithoutVoiceClonesInput
    author: UserCreateNestedOneWithoutVoiceClonesInput
    scheduledReminders?: ScheduledReminderCreateNestedManyWithoutVoiceInput
  }

  export type VoiceCloneUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    cloneProvider: $Enums.CloneProvider
    providerId: string
    orgId: string
    authorId: string
    scheduledReminders?: ScheduledReminderUncheckedCreateNestedManyWithoutVoiceInput
  }

  export type VoiceCloneUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cloneProvider?: EnumCloneProviderFieldUpdateOperationsInput | $Enums.CloneProvider
    providerId?: StringFieldUpdateOperationsInput | string
    org?: OrganizationUpdateOneRequiredWithoutVoiceClonesNestedInput
    author?: UserUpdateOneRequiredWithoutVoiceClonesNestedInput
    scheduledReminders?: ScheduledReminderUpdateManyWithoutVoiceNestedInput
  }

  export type VoiceCloneUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cloneProvider?: EnumCloneProviderFieldUpdateOperationsInput | $Enums.CloneProvider
    providerId?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    scheduledReminders?: ScheduledReminderUncheckedUpdateManyWithoutVoiceNestedInput
  }

  export type VoiceCloneCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    cloneProvider: $Enums.CloneProvider
    providerId: string
    orgId: string
    authorId: string
  }

  export type VoiceCloneUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cloneProvider?: EnumCloneProviderFieldUpdateOperationsInput | $Enums.CloneProvider
    providerId?: StringFieldUpdateOperationsInput | string
  }

  export type VoiceCloneUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cloneProvider?: EnumCloneProviderFieldUpdateOperationsInput | $Enums.CloneProvider
    providerId?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type VoiceSampleCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    filename: string
    name: string
    description?: string | null
    storageKey?: string | null
    org: OrganizationCreateNestedOneWithoutVoiceSamplesInput
    author: UserCreateNestedOneWithoutVoiceSamplesInput
  }

  export type VoiceSampleUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    filename: string
    name: string
    description?: string | null
    storageKey?: string | null
    orgId: string
    authorId: string
  }

  export type VoiceSampleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    filename?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    org?: OrganizationUpdateOneRequiredWithoutVoiceSamplesNestedInput
    author?: UserUpdateOneRequiredWithoutVoiceSamplesNestedInput
  }

  export type VoiceSampleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    filename?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    orgId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type VoiceSampleCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    filename: string
    name: string
    description?: string | null
    storageKey?: string | null
    orgId: string
    authorId: string
  }

  export type VoiceSampleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    filename?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VoiceSampleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    filename?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    orgId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduledReminderCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    timeZone: string
    appointmentTime: Date | string
    reminderOffset: $Enums.ReminderOffset
    status?: $Enums.CallStatus
    attempts?: number
    lastAttempt?: Date | string | null
    orgId: string
    userId: string
    client: ClientCreateNestedOneWithoutScheduledRemindersInput
    template: TemplateCreateNestedOneWithoutScheduledRemindersInput
    voice: VoiceCloneCreateNestedOneWithoutScheduledRemindersInput
  }

  export type ScheduledReminderUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    timeZone: string
    appointmentTime: Date | string
    reminderOffset: $Enums.ReminderOffset
    status?: $Enums.CallStatus
    attempts?: number
    lastAttempt?: Date | string | null
    orgId: string
    userId: string
    clientId: string
    templateId: string
    voiceId: string
  }

  export type ScheduledReminderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeZone?: StringFieldUpdateOperationsInput | string
    appointmentTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reminderOffset?: EnumReminderOffsetFieldUpdateOperationsInput | $Enums.ReminderOffset
    status?: EnumCallStatusFieldUpdateOperationsInput | $Enums.CallStatus
    attempts?: IntFieldUpdateOperationsInput | number
    lastAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    client?: ClientUpdateOneRequiredWithoutScheduledRemindersNestedInput
    template?: TemplateUpdateOneRequiredWithoutScheduledRemindersNestedInput
    voice?: VoiceCloneUpdateOneRequiredWithoutScheduledRemindersNestedInput
  }

  export type ScheduledReminderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeZone?: StringFieldUpdateOperationsInput | string
    appointmentTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reminderOffset?: EnumReminderOffsetFieldUpdateOperationsInput | $Enums.ReminderOffset
    status?: EnumCallStatusFieldUpdateOperationsInput | $Enums.CallStatus
    attempts?: IntFieldUpdateOperationsInput | number
    lastAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    voiceId?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduledReminderCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    timeZone: string
    appointmentTime: Date | string
    reminderOffset: $Enums.ReminderOffset
    status?: $Enums.CallStatus
    attempts?: number
    lastAttempt?: Date | string | null
    orgId: string
    userId: string
    clientId: string
    templateId: string
    voiceId: string
  }

  export type ScheduledReminderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeZone?: StringFieldUpdateOperationsInput | string
    appointmentTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reminderOffset?: EnumReminderOffsetFieldUpdateOperationsInput | $Enums.ReminderOffset
    status?: EnumCallStatusFieldUpdateOperationsInput | $Enums.CallStatus
    attempts?: IntFieldUpdateOperationsInput | number
    lastAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduledReminderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeZone?: StringFieldUpdateOperationsInput | string
    appointmentTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reminderOffset?: EnumReminderOffsetFieldUpdateOperationsInput | $Enums.ReminderOffset
    status?: EnumCallStatusFieldUpdateOperationsInput | $Enums.CallStatus
    attempts?: IntFieldUpdateOperationsInput | number
    lastAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    voiceId?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionOutboxCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    eventType: string
    payload: JsonNullValueInput | InputJsonValue
    status?: $Enums.TransactionStatus
    error?: string | null
    retries?: number
  }

  export type TransactionOutboxUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    eventType: string
    payload: JsonNullValueInput | InputJsonValue
    status?: $Enums.TransactionStatus
    error?: string | null
    retries?: number
  }

  export type TransactionOutboxUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    error?: NullableStringFieldUpdateOperationsInput | string | null
    retries?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionOutboxUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    error?: NullableStringFieldUpdateOperationsInput | string | null
    retries?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionOutboxCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    eventType: string
    payload: JsonNullValueInput | InputJsonValue
    status?: $Enums.TransactionStatus
    error?: string | null
    retries?: number
  }

  export type TransactionOutboxUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    error?: NullableStringFieldUpdateOperationsInput | string | null
    retries?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionOutboxUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    error?: NullableStringFieldUpdateOperationsInput | string | null
    retries?: IntFieldUpdateOperationsInput | number
  }

  export type ProviderApiKeyCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: string
    apiKey: string
    org: OrganizationCreateNestedOneWithoutApiKeysInput
  }

  export type ProviderApiKeyUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: string
    apiKey: string
    orgId: string
  }

  export type ProviderApiKeyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    org?: OrganizationUpdateOneRequiredWithoutApiKeysNestedInput
  }

  export type ProviderApiKeyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
  }

  export type ProviderApiKeyCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: string
    apiKey: string
    orgId: string
  }

  export type ProviderApiKeyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
  }

  export type ProviderApiKeyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type OrganizationNullableScalarRelationFilter = {
    is?: OrganizationWhereInput | null
    isNot?: OrganizationWhereInput | null
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type TemplateListRelationFilter = {
    every?: TemplateWhereInput
    some?: TemplateWhereInput
    none?: TemplateWhereInput
  }

  export type VoiceCloneListRelationFilter = {
    every?: VoiceCloneWhereInput
    some?: VoiceCloneWhereInput
    none?: VoiceCloneWhereInput
  }

  export type VoiceSampleListRelationFilter = {
    every?: VoiceSampleWhereInput
    some?: VoiceSampleWhereInput
    none?: VoiceSampleWhereInput
  }

  export type ClientListRelationFilter = {
    every?: ClientWhereInput
    some?: ClientWhereInput
    none?: ClientWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TemplateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VoiceCloneOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VoiceSampleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    orgId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    orgId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    orgId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type ProviderApiKeyListRelationFilter = {
    every?: ProviderApiKeyWhereInput
    some?: ProviderApiKeyWhereInput
    none?: ProviderApiKeyWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProviderApiKeyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    outboundPhone?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    outboundPhone?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    outboundPhone?: SortOrder
  }

  export type OrganizationScalarRelationFilter = {
    is?: OrganizationWhereInput
    isNot?: OrganizationWhereInput
  }

  export type ScheduledReminderListRelationFilter = {
    every?: ScheduledReminderWhereInput
    some?: ScheduledReminderWhereInput
    none?: ScheduledReminderWhereInput
  }

  export type ScheduledReminderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientEmailOrgIdCompoundUniqueInput = {
    email: string
    orgId: string
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    preferredName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    orgId?: SortOrder
    authorId?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    preferredName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    orgId?: SortOrder
    authorId?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    preferredName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    orgId?: SortOrder
    authorId?: SortOrder
  }

  export type TemplateCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    content?: SortOrder
    orgId?: SortOrder
    authorId?: SortOrder
  }

  export type TemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    content?: SortOrder
    orgId?: SortOrder
    authorId?: SortOrder
  }

  export type TemplateMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    content?: SortOrder
    orgId?: SortOrder
    authorId?: SortOrder
  }

  export type EnumCloneProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.CloneProvider | EnumCloneProviderFieldRefInput<$PrismaModel>
    in?: $Enums.CloneProvider[] | ListEnumCloneProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.CloneProvider[] | ListEnumCloneProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumCloneProviderFilter<$PrismaModel> | $Enums.CloneProvider
  }

  export type VoiceCloneCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    cloneProvider?: SortOrder
    providerId?: SortOrder
    orgId?: SortOrder
    authorId?: SortOrder
  }

  export type VoiceCloneMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    cloneProvider?: SortOrder
    providerId?: SortOrder
    orgId?: SortOrder
    authorId?: SortOrder
  }

  export type VoiceCloneMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    cloneProvider?: SortOrder
    providerId?: SortOrder
    orgId?: SortOrder
    authorId?: SortOrder
  }

  export type EnumCloneProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CloneProvider | EnumCloneProviderFieldRefInput<$PrismaModel>
    in?: $Enums.CloneProvider[] | ListEnumCloneProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.CloneProvider[] | ListEnumCloneProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumCloneProviderWithAggregatesFilter<$PrismaModel> | $Enums.CloneProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCloneProviderFilter<$PrismaModel>
    _max?: NestedEnumCloneProviderFilter<$PrismaModel>
  }

  export type VoiceSampleCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    filename?: SortOrder
    name?: SortOrder
    description?: SortOrder
    storageKey?: SortOrder
    orgId?: SortOrder
    authorId?: SortOrder
  }

  export type VoiceSampleMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    filename?: SortOrder
    name?: SortOrder
    description?: SortOrder
    storageKey?: SortOrder
    orgId?: SortOrder
    authorId?: SortOrder
  }

  export type VoiceSampleMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    filename?: SortOrder
    name?: SortOrder
    description?: SortOrder
    storageKey?: SortOrder
    orgId?: SortOrder
    authorId?: SortOrder
  }

  export type EnumReminderOffsetFilter<$PrismaModel = never> = {
    equals?: $Enums.ReminderOffset | EnumReminderOffsetFieldRefInput<$PrismaModel>
    in?: $Enums.ReminderOffset[] | ListEnumReminderOffsetFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReminderOffset[] | ListEnumReminderOffsetFieldRefInput<$PrismaModel>
    not?: NestedEnumReminderOffsetFilter<$PrismaModel> | $Enums.ReminderOffset
  }

  export type EnumCallStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CallStatus | EnumCallStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CallStatus[] | ListEnumCallStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CallStatus[] | ListEnumCallStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCallStatusFilter<$PrismaModel> | $Enums.CallStatus
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type TemplateScalarRelationFilter = {
    is?: TemplateWhereInput
    isNot?: TemplateWhereInput
  }

  export type VoiceCloneScalarRelationFilter = {
    is?: VoiceCloneWhereInput
    isNot?: VoiceCloneWhereInput
  }

  export type ScheduledReminderCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    timeZone?: SortOrder
    appointmentTime?: SortOrder
    reminderOffset?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    lastAttempt?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    clientId?: SortOrder
    templateId?: SortOrder
    voiceId?: SortOrder
  }

  export type ScheduledReminderAvgOrderByAggregateInput = {
    attempts?: SortOrder
  }

  export type ScheduledReminderMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    timeZone?: SortOrder
    appointmentTime?: SortOrder
    reminderOffset?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    lastAttempt?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    clientId?: SortOrder
    templateId?: SortOrder
    voiceId?: SortOrder
  }

  export type ScheduledReminderMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    timeZone?: SortOrder
    appointmentTime?: SortOrder
    reminderOffset?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    lastAttempt?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    clientId?: SortOrder
    templateId?: SortOrder
    voiceId?: SortOrder
  }

  export type ScheduledReminderSumOrderByAggregateInput = {
    attempts?: SortOrder
  }

  export type EnumReminderOffsetWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReminderOffset | EnumReminderOffsetFieldRefInput<$PrismaModel>
    in?: $Enums.ReminderOffset[] | ListEnumReminderOffsetFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReminderOffset[] | ListEnumReminderOffsetFieldRefInput<$PrismaModel>
    not?: NestedEnumReminderOffsetWithAggregatesFilter<$PrismaModel> | $Enums.ReminderOffset
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReminderOffsetFilter<$PrismaModel>
    _max?: NestedEnumReminderOffsetFilter<$PrismaModel>
  }

  export type EnumCallStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CallStatus | EnumCallStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CallStatus[] | ListEnumCallStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CallStatus[] | ListEnumCallStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCallStatusWithAggregatesFilter<$PrismaModel> | $Enums.CallStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCallStatusFilter<$PrismaModel>
    _max?: NestedEnumCallStatusFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type TransactionOutboxCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    eventType?: SortOrder
    payload?: SortOrder
    status?: SortOrder
    error?: SortOrder
    retries?: SortOrder
  }

  export type TransactionOutboxAvgOrderByAggregateInput = {
    retries?: SortOrder
  }

  export type TransactionOutboxMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    eventType?: SortOrder
    status?: SortOrder
    error?: SortOrder
    retries?: SortOrder
  }

  export type TransactionOutboxMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    eventType?: SortOrder
    status?: SortOrder
    error?: SortOrder
    retries?: SortOrder
  }

  export type TransactionOutboxSumOrderByAggregateInput = {
    retries?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type ProviderApiKeyOrgIdProviderCompoundUniqueInput = {
    orgId: string
    provider: string
  }

  export type ProviderApiKeyCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    provider?: SortOrder
    apiKey?: SortOrder
    orgId?: SortOrder
  }

  export type ProviderApiKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    provider?: SortOrder
    apiKey?: SortOrder
    orgId?: SortOrder
  }

  export type ProviderApiKeyMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    provider?: SortOrder
    apiKey?: SortOrder
    orgId?: SortOrder
  }

  export type OrganizationCreateNestedOneWithoutUsersInput = {
    create?: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInput
    connect?: OrganizationWhereUniqueInput
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type TemplateCreateNestedManyWithoutAuthorInput = {
    create?: XOR<TemplateCreateWithoutAuthorInput, TemplateUncheckedCreateWithoutAuthorInput> | TemplateCreateWithoutAuthorInput[] | TemplateUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutAuthorInput | TemplateCreateOrConnectWithoutAuthorInput[]
    createMany?: TemplateCreateManyAuthorInputEnvelope
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
  }

  export type VoiceCloneCreateNestedManyWithoutAuthorInput = {
    create?: XOR<VoiceCloneCreateWithoutAuthorInput, VoiceCloneUncheckedCreateWithoutAuthorInput> | VoiceCloneCreateWithoutAuthorInput[] | VoiceCloneUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: VoiceCloneCreateOrConnectWithoutAuthorInput | VoiceCloneCreateOrConnectWithoutAuthorInput[]
    createMany?: VoiceCloneCreateManyAuthorInputEnvelope
    connect?: VoiceCloneWhereUniqueInput | VoiceCloneWhereUniqueInput[]
  }

  export type VoiceSampleCreateNestedManyWithoutAuthorInput = {
    create?: XOR<VoiceSampleCreateWithoutAuthorInput, VoiceSampleUncheckedCreateWithoutAuthorInput> | VoiceSampleCreateWithoutAuthorInput[] | VoiceSampleUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: VoiceSampleCreateOrConnectWithoutAuthorInput | VoiceSampleCreateOrConnectWithoutAuthorInput[]
    createMany?: VoiceSampleCreateManyAuthorInputEnvelope
    connect?: VoiceSampleWhereUniqueInput | VoiceSampleWhereUniqueInput[]
  }

  export type ClientCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ClientCreateWithoutAuthorInput, ClientUncheckedCreateWithoutAuthorInput> | ClientCreateWithoutAuthorInput[] | ClientUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutAuthorInput | ClientCreateOrConnectWithoutAuthorInput[]
    createMany?: ClientCreateManyAuthorInputEnvelope
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type TemplateUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<TemplateCreateWithoutAuthorInput, TemplateUncheckedCreateWithoutAuthorInput> | TemplateCreateWithoutAuthorInput[] | TemplateUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutAuthorInput | TemplateCreateOrConnectWithoutAuthorInput[]
    createMany?: TemplateCreateManyAuthorInputEnvelope
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
  }

  export type VoiceCloneUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<VoiceCloneCreateWithoutAuthorInput, VoiceCloneUncheckedCreateWithoutAuthorInput> | VoiceCloneCreateWithoutAuthorInput[] | VoiceCloneUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: VoiceCloneCreateOrConnectWithoutAuthorInput | VoiceCloneCreateOrConnectWithoutAuthorInput[]
    createMany?: VoiceCloneCreateManyAuthorInputEnvelope
    connect?: VoiceCloneWhereUniqueInput | VoiceCloneWhereUniqueInput[]
  }

  export type VoiceSampleUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<VoiceSampleCreateWithoutAuthorInput, VoiceSampleUncheckedCreateWithoutAuthorInput> | VoiceSampleCreateWithoutAuthorInput[] | VoiceSampleUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: VoiceSampleCreateOrConnectWithoutAuthorInput | VoiceSampleCreateOrConnectWithoutAuthorInput[]
    createMany?: VoiceSampleCreateManyAuthorInputEnvelope
    connect?: VoiceSampleWhereUniqueInput | VoiceSampleWhereUniqueInput[]
  }

  export type ClientUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ClientCreateWithoutAuthorInput, ClientUncheckedCreateWithoutAuthorInput> | ClientCreateWithoutAuthorInput[] | ClientUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutAuthorInput | ClientCreateOrConnectWithoutAuthorInput[]
    createMany?: ClientCreateManyAuthorInputEnvelope
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type OrganizationUpdateOneWithoutUsersNestedInput = {
    create?: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInput
    upsert?: OrganizationUpsertWithoutUsersInput
    disconnect?: OrganizationWhereInput | boolean
    delete?: OrganizationWhereInput | boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutUsersInput, OrganizationUpdateWithoutUsersInput>, OrganizationUncheckedUpdateWithoutUsersInput>
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type TemplateUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<TemplateCreateWithoutAuthorInput, TemplateUncheckedCreateWithoutAuthorInput> | TemplateCreateWithoutAuthorInput[] | TemplateUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutAuthorInput | TemplateCreateOrConnectWithoutAuthorInput[]
    upsert?: TemplateUpsertWithWhereUniqueWithoutAuthorInput | TemplateUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: TemplateCreateManyAuthorInputEnvelope
    set?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    disconnect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    delete?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    update?: TemplateUpdateWithWhereUniqueWithoutAuthorInput | TemplateUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: TemplateUpdateManyWithWhereWithoutAuthorInput | TemplateUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
  }

  export type VoiceCloneUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<VoiceCloneCreateWithoutAuthorInput, VoiceCloneUncheckedCreateWithoutAuthorInput> | VoiceCloneCreateWithoutAuthorInput[] | VoiceCloneUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: VoiceCloneCreateOrConnectWithoutAuthorInput | VoiceCloneCreateOrConnectWithoutAuthorInput[]
    upsert?: VoiceCloneUpsertWithWhereUniqueWithoutAuthorInput | VoiceCloneUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: VoiceCloneCreateManyAuthorInputEnvelope
    set?: VoiceCloneWhereUniqueInput | VoiceCloneWhereUniqueInput[]
    disconnect?: VoiceCloneWhereUniqueInput | VoiceCloneWhereUniqueInput[]
    delete?: VoiceCloneWhereUniqueInput | VoiceCloneWhereUniqueInput[]
    connect?: VoiceCloneWhereUniqueInput | VoiceCloneWhereUniqueInput[]
    update?: VoiceCloneUpdateWithWhereUniqueWithoutAuthorInput | VoiceCloneUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: VoiceCloneUpdateManyWithWhereWithoutAuthorInput | VoiceCloneUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: VoiceCloneScalarWhereInput | VoiceCloneScalarWhereInput[]
  }

  export type VoiceSampleUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<VoiceSampleCreateWithoutAuthorInput, VoiceSampleUncheckedCreateWithoutAuthorInput> | VoiceSampleCreateWithoutAuthorInput[] | VoiceSampleUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: VoiceSampleCreateOrConnectWithoutAuthorInput | VoiceSampleCreateOrConnectWithoutAuthorInput[]
    upsert?: VoiceSampleUpsertWithWhereUniqueWithoutAuthorInput | VoiceSampleUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: VoiceSampleCreateManyAuthorInputEnvelope
    set?: VoiceSampleWhereUniqueInput | VoiceSampleWhereUniqueInput[]
    disconnect?: VoiceSampleWhereUniqueInput | VoiceSampleWhereUniqueInput[]
    delete?: VoiceSampleWhereUniqueInput | VoiceSampleWhereUniqueInput[]
    connect?: VoiceSampleWhereUniqueInput | VoiceSampleWhereUniqueInput[]
    update?: VoiceSampleUpdateWithWhereUniqueWithoutAuthorInput | VoiceSampleUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: VoiceSampleUpdateManyWithWhereWithoutAuthorInput | VoiceSampleUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: VoiceSampleScalarWhereInput | VoiceSampleScalarWhereInput[]
  }

  export type ClientUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ClientCreateWithoutAuthorInput, ClientUncheckedCreateWithoutAuthorInput> | ClientCreateWithoutAuthorInput[] | ClientUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutAuthorInput | ClientCreateOrConnectWithoutAuthorInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutAuthorInput | ClientUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ClientCreateManyAuthorInputEnvelope
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutAuthorInput | ClientUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutAuthorInput | ClientUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type TemplateUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<TemplateCreateWithoutAuthorInput, TemplateUncheckedCreateWithoutAuthorInput> | TemplateCreateWithoutAuthorInput[] | TemplateUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutAuthorInput | TemplateCreateOrConnectWithoutAuthorInput[]
    upsert?: TemplateUpsertWithWhereUniqueWithoutAuthorInput | TemplateUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: TemplateCreateManyAuthorInputEnvelope
    set?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    disconnect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    delete?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    update?: TemplateUpdateWithWhereUniqueWithoutAuthorInput | TemplateUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: TemplateUpdateManyWithWhereWithoutAuthorInput | TemplateUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
  }

  export type VoiceCloneUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<VoiceCloneCreateWithoutAuthorInput, VoiceCloneUncheckedCreateWithoutAuthorInput> | VoiceCloneCreateWithoutAuthorInput[] | VoiceCloneUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: VoiceCloneCreateOrConnectWithoutAuthorInput | VoiceCloneCreateOrConnectWithoutAuthorInput[]
    upsert?: VoiceCloneUpsertWithWhereUniqueWithoutAuthorInput | VoiceCloneUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: VoiceCloneCreateManyAuthorInputEnvelope
    set?: VoiceCloneWhereUniqueInput | VoiceCloneWhereUniqueInput[]
    disconnect?: VoiceCloneWhereUniqueInput | VoiceCloneWhereUniqueInput[]
    delete?: VoiceCloneWhereUniqueInput | VoiceCloneWhereUniqueInput[]
    connect?: VoiceCloneWhereUniqueInput | VoiceCloneWhereUniqueInput[]
    update?: VoiceCloneUpdateWithWhereUniqueWithoutAuthorInput | VoiceCloneUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: VoiceCloneUpdateManyWithWhereWithoutAuthorInput | VoiceCloneUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: VoiceCloneScalarWhereInput | VoiceCloneScalarWhereInput[]
  }

  export type VoiceSampleUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<VoiceSampleCreateWithoutAuthorInput, VoiceSampleUncheckedCreateWithoutAuthorInput> | VoiceSampleCreateWithoutAuthorInput[] | VoiceSampleUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: VoiceSampleCreateOrConnectWithoutAuthorInput | VoiceSampleCreateOrConnectWithoutAuthorInput[]
    upsert?: VoiceSampleUpsertWithWhereUniqueWithoutAuthorInput | VoiceSampleUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: VoiceSampleCreateManyAuthorInputEnvelope
    set?: VoiceSampleWhereUniqueInput | VoiceSampleWhereUniqueInput[]
    disconnect?: VoiceSampleWhereUniqueInput | VoiceSampleWhereUniqueInput[]
    delete?: VoiceSampleWhereUniqueInput | VoiceSampleWhereUniqueInput[]
    connect?: VoiceSampleWhereUniqueInput | VoiceSampleWhereUniqueInput[]
    update?: VoiceSampleUpdateWithWhereUniqueWithoutAuthorInput | VoiceSampleUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: VoiceSampleUpdateManyWithWhereWithoutAuthorInput | VoiceSampleUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: VoiceSampleScalarWhereInput | VoiceSampleScalarWhereInput[]
  }

  export type ClientUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ClientCreateWithoutAuthorInput, ClientUncheckedCreateWithoutAuthorInput> | ClientCreateWithoutAuthorInput[] | ClientUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutAuthorInput | ClientCreateOrConnectWithoutAuthorInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutAuthorInput | ClientUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ClientCreateManyAuthorInputEnvelope
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutAuthorInput | ClientUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutAuthorInput | ClientUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedManyWithoutOrgInput = {
    create?: XOR<UserCreateWithoutOrgInput, UserUncheckedCreateWithoutOrgInput> | UserCreateWithoutOrgInput[] | UserUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrgInput | UserCreateOrConnectWithoutOrgInput[]
    createMany?: UserCreateManyOrgInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ClientCreateNestedManyWithoutOrgInput = {
    create?: XOR<ClientCreateWithoutOrgInput, ClientUncheckedCreateWithoutOrgInput> | ClientCreateWithoutOrgInput[] | ClientUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutOrgInput | ClientCreateOrConnectWithoutOrgInput[]
    createMany?: ClientCreateManyOrgInputEnvelope
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type TemplateCreateNestedManyWithoutOrgInput = {
    create?: XOR<TemplateCreateWithoutOrgInput, TemplateUncheckedCreateWithoutOrgInput> | TemplateCreateWithoutOrgInput[] | TemplateUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutOrgInput | TemplateCreateOrConnectWithoutOrgInput[]
    createMany?: TemplateCreateManyOrgInputEnvelope
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
  }

  export type VoiceCloneCreateNestedManyWithoutOrgInput = {
    create?: XOR<VoiceCloneCreateWithoutOrgInput, VoiceCloneUncheckedCreateWithoutOrgInput> | VoiceCloneCreateWithoutOrgInput[] | VoiceCloneUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: VoiceCloneCreateOrConnectWithoutOrgInput | VoiceCloneCreateOrConnectWithoutOrgInput[]
    createMany?: VoiceCloneCreateManyOrgInputEnvelope
    connect?: VoiceCloneWhereUniqueInput | VoiceCloneWhereUniqueInput[]
  }

  export type VoiceSampleCreateNestedManyWithoutOrgInput = {
    create?: XOR<VoiceSampleCreateWithoutOrgInput, VoiceSampleUncheckedCreateWithoutOrgInput> | VoiceSampleCreateWithoutOrgInput[] | VoiceSampleUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: VoiceSampleCreateOrConnectWithoutOrgInput | VoiceSampleCreateOrConnectWithoutOrgInput[]
    createMany?: VoiceSampleCreateManyOrgInputEnvelope
    connect?: VoiceSampleWhereUniqueInput | VoiceSampleWhereUniqueInput[]
  }

  export type ProviderApiKeyCreateNestedManyWithoutOrgInput = {
    create?: XOR<ProviderApiKeyCreateWithoutOrgInput, ProviderApiKeyUncheckedCreateWithoutOrgInput> | ProviderApiKeyCreateWithoutOrgInput[] | ProviderApiKeyUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: ProviderApiKeyCreateOrConnectWithoutOrgInput | ProviderApiKeyCreateOrConnectWithoutOrgInput[]
    createMany?: ProviderApiKeyCreateManyOrgInputEnvelope
    connect?: ProviderApiKeyWhereUniqueInput | ProviderApiKeyWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<UserCreateWithoutOrgInput, UserUncheckedCreateWithoutOrgInput> | UserCreateWithoutOrgInput[] | UserUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrgInput | UserCreateOrConnectWithoutOrgInput[]
    createMany?: UserCreateManyOrgInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ClientUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<ClientCreateWithoutOrgInput, ClientUncheckedCreateWithoutOrgInput> | ClientCreateWithoutOrgInput[] | ClientUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutOrgInput | ClientCreateOrConnectWithoutOrgInput[]
    createMany?: ClientCreateManyOrgInputEnvelope
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type TemplateUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<TemplateCreateWithoutOrgInput, TemplateUncheckedCreateWithoutOrgInput> | TemplateCreateWithoutOrgInput[] | TemplateUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutOrgInput | TemplateCreateOrConnectWithoutOrgInput[]
    createMany?: TemplateCreateManyOrgInputEnvelope
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
  }

  export type VoiceCloneUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<VoiceCloneCreateWithoutOrgInput, VoiceCloneUncheckedCreateWithoutOrgInput> | VoiceCloneCreateWithoutOrgInput[] | VoiceCloneUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: VoiceCloneCreateOrConnectWithoutOrgInput | VoiceCloneCreateOrConnectWithoutOrgInput[]
    createMany?: VoiceCloneCreateManyOrgInputEnvelope
    connect?: VoiceCloneWhereUniqueInput | VoiceCloneWhereUniqueInput[]
  }

  export type VoiceSampleUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<VoiceSampleCreateWithoutOrgInput, VoiceSampleUncheckedCreateWithoutOrgInput> | VoiceSampleCreateWithoutOrgInput[] | VoiceSampleUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: VoiceSampleCreateOrConnectWithoutOrgInput | VoiceSampleCreateOrConnectWithoutOrgInput[]
    createMany?: VoiceSampleCreateManyOrgInputEnvelope
    connect?: VoiceSampleWhereUniqueInput | VoiceSampleWhereUniqueInput[]
  }

  export type ProviderApiKeyUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<ProviderApiKeyCreateWithoutOrgInput, ProviderApiKeyUncheckedCreateWithoutOrgInput> | ProviderApiKeyCreateWithoutOrgInput[] | ProviderApiKeyUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: ProviderApiKeyCreateOrConnectWithoutOrgInput | ProviderApiKeyCreateOrConnectWithoutOrgInput[]
    createMany?: ProviderApiKeyCreateManyOrgInputEnvelope
    connect?: ProviderApiKeyWhereUniqueInput | ProviderApiKeyWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutOrgNestedInput = {
    create?: XOR<UserCreateWithoutOrgInput, UserUncheckedCreateWithoutOrgInput> | UserCreateWithoutOrgInput[] | UserUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrgInput | UserCreateOrConnectWithoutOrgInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOrgInput | UserUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: UserCreateManyOrgInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOrgInput | UserUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOrgInput | UserUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ClientUpdateManyWithoutOrgNestedInput = {
    create?: XOR<ClientCreateWithoutOrgInput, ClientUncheckedCreateWithoutOrgInput> | ClientCreateWithoutOrgInput[] | ClientUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutOrgInput | ClientCreateOrConnectWithoutOrgInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutOrgInput | ClientUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: ClientCreateManyOrgInputEnvelope
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutOrgInput | ClientUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutOrgInput | ClientUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type TemplateUpdateManyWithoutOrgNestedInput = {
    create?: XOR<TemplateCreateWithoutOrgInput, TemplateUncheckedCreateWithoutOrgInput> | TemplateCreateWithoutOrgInput[] | TemplateUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutOrgInput | TemplateCreateOrConnectWithoutOrgInput[]
    upsert?: TemplateUpsertWithWhereUniqueWithoutOrgInput | TemplateUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: TemplateCreateManyOrgInputEnvelope
    set?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    disconnect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    delete?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    update?: TemplateUpdateWithWhereUniqueWithoutOrgInput | TemplateUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: TemplateUpdateManyWithWhereWithoutOrgInput | TemplateUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
  }

  export type VoiceCloneUpdateManyWithoutOrgNestedInput = {
    create?: XOR<VoiceCloneCreateWithoutOrgInput, VoiceCloneUncheckedCreateWithoutOrgInput> | VoiceCloneCreateWithoutOrgInput[] | VoiceCloneUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: VoiceCloneCreateOrConnectWithoutOrgInput | VoiceCloneCreateOrConnectWithoutOrgInput[]
    upsert?: VoiceCloneUpsertWithWhereUniqueWithoutOrgInput | VoiceCloneUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: VoiceCloneCreateManyOrgInputEnvelope
    set?: VoiceCloneWhereUniqueInput | VoiceCloneWhereUniqueInput[]
    disconnect?: VoiceCloneWhereUniqueInput | VoiceCloneWhereUniqueInput[]
    delete?: VoiceCloneWhereUniqueInput | VoiceCloneWhereUniqueInput[]
    connect?: VoiceCloneWhereUniqueInput | VoiceCloneWhereUniqueInput[]
    update?: VoiceCloneUpdateWithWhereUniqueWithoutOrgInput | VoiceCloneUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: VoiceCloneUpdateManyWithWhereWithoutOrgInput | VoiceCloneUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: VoiceCloneScalarWhereInput | VoiceCloneScalarWhereInput[]
  }

  export type VoiceSampleUpdateManyWithoutOrgNestedInput = {
    create?: XOR<VoiceSampleCreateWithoutOrgInput, VoiceSampleUncheckedCreateWithoutOrgInput> | VoiceSampleCreateWithoutOrgInput[] | VoiceSampleUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: VoiceSampleCreateOrConnectWithoutOrgInput | VoiceSampleCreateOrConnectWithoutOrgInput[]
    upsert?: VoiceSampleUpsertWithWhereUniqueWithoutOrgInput | VoiceSampleUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: VoiceSampleCreateManyOrgInputEnvelope
    set?: VoiceSampleWhereUniqueInput | VoiceSampleWhereUniqueInput[]
    disconnect?: VoiceSampleWhereUniqueInput | VoiceSampleWhereUniqueInput[]
    delete?: VoiceSampleWhereUniqueInput | VoiceSampleWhereUniqueInput[]
    connect?: VoiceSampleWhereUniqueInput | VoiceSampleWhereUniqueInput[]
    update?: VoiceSampleUpdateWithWhereUniqueWithoutOrgInput | VoiceSampleUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: VoiceSampleUpdateManyWithWhereWithoutOrgInput | VoiceSampleUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: VoiceSampleScalarWhereInput | VoiceSampleScalarWhereInput[]
  }

  export type ProviderApiKeyUpdateManyWithoutOrgNestedInput = {
    create?: XOR<ProviderApiKeyCreateWithoutOrgInput, ProviderApiKeyUncheckedCreateWithoutOrgInput> | ProviderApiKeyCreateWithoutOrgInput[] | ProviderApiKeyUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: ProviderApiKeyCreateOrConnectWithoutOrgInput | ProviderApiKeyCreateOrConnectWithoutOrgInput[]
    upsert?: ProviderApiKeyUpsertWithWhereUniqueWithoutOrgInput | ProviderApiKeyUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: ProviderApiKeyCreateManyOrgInputEnvelope
    set?: ProviderApiKeyWhereUniqueInput | ProviderApiKeyWhereUniqueInput[]
    disconnect?: ProviderApiKeyWhereUniqueInput | ProviderApiKeyWhereUniqueInput[]
    delete?: ProviderApiKeyWhereUniqueInput | ProviderApiKeyWhereUniqueInput[]
    connect?: ProviderApiKeyWhereUniqueInput | ProviderApiKeyWhereUniqueInput[]
    update?: ProviderApiKeyUpdateWithWhereUniqueWithoutOrgInput | ProviderApiKeyUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: ProviderApiKeyUpdateManyWithWhereWithoutOrgInput | ProviderApiKeyUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: ProviderApiKeyScalarWhereInput | ProviderApiKeyScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<UserCreateWithoutOrgInput, UserUncheckedCreateWithoutOrgInput> | UserCreateWithoutOrgInput[] | UserUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrgInput | UserCreateOrConnectWithoutOrgInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOrgInput | UserUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: UserCreateManyOrgInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOrgInput | UserUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOrgInput | UserUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ClientUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<ClientCreateWithoutOrgInput, ClientUncheckedCreateWithoutOrgInput> | ClientCreateWithoutOrgInput[] | ClientUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutOrgInput | ClientCreateOrConnectWithoutOrgInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutOrgInput | ClientUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: ClientCreateManyOrgInputEnvelope
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutOrgInput | ClientUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutOrgInput | ClientUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type TemplateUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<TemplateCreateWithoutOrgInput, TemplateUncheckedCreateWithoutOrgInput> | TemplateCreateWithoutOrgInput[] | TemplateUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutOrgInput | TemplateCreateOrConnectWithoutOrgInput[]
    upsert?: TemplateUpsertWithWhereUniqueWithoutOrgInput | TemplateUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: TemplateCreateManyOrgInputEnvelope
    set?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    disconnect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    delete?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    update?: TemplateUpdateWithWhereUniqueWithoutOrgInput | TemplateUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: TemplateUpdateManyWithWhereWithoutOrgInput | TemplateUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
  }

  export type VoiceCloneUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<VoiceCloneCreateWithoutOrgInput, VoiceCloneUncheckedCreateWithoutOrgInput> | VoiceCloneCreateWithoutOrgInput[] | VoiceCloneUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: VoiceCloneCreateOrConnectWithoutOrgInput | VoiceCloneCreateOrConnectWithoutOrgInput[]
    upsert?: VoiceCloneUpsertWithWhereUniqueWithoutOrgInput | VoiceCloneUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: VoiceCloneCreateManyOrgInputEnvelope
    set?: VoiceCloneWhereUniqueInput | VoiceCloneWhereUniqueInput[]
    disconnect?: VoiceCloneWhereUniqueInput | VoiceCloneWhereUniqueInput[]
    delete?: VoiceCloneWhereUniqueInput | VoiceCloneWhereUniqueInput[]
    connect?: VoiceCloneWhereUniqueInput | VoiceCloneWhereUniqueInput[]
    update?: VoiceCloneUpdateWithWhereUniqueWithoutOrgInput | VoiceCloneUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: VoiceCloneUpdateManyWithWhereWithoutOrgInput | VoiceCloneUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: VoiceCloneScalarWhereInput | VoiceCloneScalarWhereInput[]
  }

  export type VoiceSampleUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<VoiceSampleCreateWithoutOrgInput, VoiceSampleUncheckedCreateWithoutOrgInput> | VoiceSampleCreateWithoutOrgInput[] | VoiceSampleUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: VoiceSampleCreateOrConnectWithoutOrgInput | VoiceSampleCreateOrConnectWithoutOrgInput[]
    upsert?: VoiceSampleUpsertWithWhereUniqueWithoutOrgInput | VoiceSampleUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: VoiceSampleCreateManyOrgInputEnvelope
    set?: VoiceSampleWhereUniqueInput | VoiceSampleWhereUniqueInput[]
    disconnect?: VoiceSampleWhereUniqueInput | VoiceSampleWhereUniqueInput[]
    delete?: VoiceSampleWhereUniqueInput | VoiceSampleWhereUniqueInput[]
    connect?: VoiceSampleWhereUniqueInput | VoiceSampleWhereUniqueInput[]
    update?: VoiceSampleUpdateWithWhereUniqueWithoutOrgInput | VoiceSampleUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: VoiceSampleUpdateManyWithWhereWithoutOrgInput | VoiceSampleUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: VoiceSampleScalarWhereInput | VoiceSampleScalarWhereInput[]
  }

  export type ProviderApiKeyUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<ProviderApiKeyCreateWithoutOrgInput, ProviderApiKeyUncheckedCreateWithoutOrgInput> | ProviderApiKeyCreateWithoutOrgInput[] | ProviderApiKeyUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: ProviderApiKeyCreateOrConnectWithoutOrgInput | ProviderApiKeyCreateOrConnectWithoutOrgInput[]
    upsert?: ProviderApiKeyUpsertWithWhereUniqueWithoutOrgInput | ProviderApiKeyUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: ProviderApiKeyCreateManyOrgInputEnvelope
    set?: ProviderApiKeyWhereUniqueInput | ProviderApiKeyWhereUniqueInput[]
    disconnect?: ProviderApiKeyWhereUniqueInput | ProviderApiKeyWhereUniqueInput[]
    delete?: ProviderApiKeyWhereUniqueInput | ProviderApiKeyWhereUniqueInput[]
    connect?: ProviderApiKeyWhereUniqueInput | ProviderApiKeyWhereUniqueInput[]
    update?: ProviderApiKeyUpdateWithWhereUniqueWithoutOrgInput | ProviderApiKeyUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: ProviderApiKeyUpdateManyWithWhereWithoutOrgInput | ProviderApiKeyUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: ProviderApiKeyScalarWhereInput | ProviderApiKeyScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutClientsInput = {
    create?: XOR<OrganizationCreateWithoutClientsInput, OrganizationUncheckedCreateWithoutClientsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutClientsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutClientsInput = {
    create?: XOR<UserCreateWithoutClientsInput, UserUncheckedCreateWithoutClientsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClientsInput
    connect?: UserWhereUniqueInput
  }

  export type ScheduledReminderCreateNestedManyWithoutClientInput = {
    create?: XOR<ScheduledReminderCreateWithoutClientInput, ScheduledReminderUncheckedCreateWithoutClientInput> | ScheduledReminderCreateWithoutClientInput[] | ScheduledReminderUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ScheduledReminderCreateOrConnectWithoutClientInput | ScheduledReminderCreateOrConnectWithoutClientInput[]
    createMany?: ScheduledReminderCreateManyClientInputEnvelope
    connect?: ScheduledReminderWhereUniqueInput | ScheduledReminderWhereUniqueInput[]
  }

  export type ScheduledReminderUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ScheduledReminderCreateWithoutClientInput, ScheduledReminderUncheckedCreateWithoutClientInput> | ScheduledReminderCreateWithoutClientInput[] | ScheduledReminderUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ScheduledReminderCreateOrConnectWithoutClientInput | ScheduledReminderCreateOrConnectWithoutClientInput[]
    createMany?: ScheduledReminderCreateManyClientInputEnvelope
    connect?: ScheduledReminderWhereUniqueInput | ScheduledReminderWhereUniqueInput[]
  }

  export type OrganizationUpdateOneRequiredWithoutClientsNestedInput = {
    create?: XOR<OrganizationCreateWithoutClientsInput, OrganizationUncheckedCreateWithoutClientsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutClientsInput
    upsert?: OrganizationUpsertWithoutClientsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutClientsInput, OrganizationUpdateWithoutClientsInput>, OrganizationUncheckedUpdateWithoutClientsInput>
  }

  export type UserUpdateOneRequiredWithoutClientsNestedInput = {
    create?: XOR<UserCreateWithoutClientsInput, UserUncheckedCreateWithoutClientsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClientsInput
    upsert?: UserUpsertWithoutClientsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutClientsInput, UserUpdateWithoutClientsInput>, UserUncheckedUpdateWithoutClientsInput>
  }

  export type ScheduledReminderUpdateManyWithoutClientNestedInput = {
    create?: XOR<ScheduledReminderCreateWithoutClientInput, ScheduledReminderUncheckedCreateWithoutClientInput> | ScheduledReminderCreateWithoutClientInput[] | ScheduledReminderUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ScheduledReminderCreateOrConnectWithoutClientInput | ScheduledReminderCreateOrConnectWithoutClientInput[]
    upsert?: ScheduledReminderUpsertWithWhereUniqueWithoutClientInput | ScheduledReminderUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ScheduledReminderCreateManyClientInputEnvelope
    set?: ScheduledReminderWhereUniqueInput | ScheduledReminderWhereUniqueInput[]
    disconnect?: ScheduledReminderWhereUniqueInput | ScheduledReminderWhereUniqueInput[]
    delete?: ScheduledReminderWhereUniqueInput | ScheduledReminderWhereUniqueInput[]
    connect?: ScheduledReminderWhereUniqueInput | ScheduledReminderWhereUniqueInput[]
    update?: ScheduledReminderUpdateWithWhereUniqueWithoutClientInput | ScheduledReminderUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ScheduledReminderUpdateManyWithWhereWithoutClientInput | ScheduledReminderUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ScheduledReminderScalarWhereInput | ScheduledReminderScalarWhereInput[]
  }

  export type ScheduledReminderUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ScheduledReminderCreateWithoutClientInput, ScheduledReminderUncheckedCreateWithoutClientInput> | ScheduledReminderCreateWithoutClientInput[] | ScheduledReminderUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ScheduledReminderCreateOrConnectWithoutClientInput | ScheduledReminderCreateOrConnectWithoutClientInput[]
    upsert?: ScheduledReminderUpsertWithWhereUniqueWithoutClientInput | ScheduledReminderUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ScheduledReminderCreateManyClientInputEnvelope
    set?: ScheduledReminderWhereUniqueInput | ScheduledReminderWhereUniqueInput[]
    disconnect?: ScheduledReminderWhereUniqueInput | ScheduledReminderWhereUniqueInput[]
    delete?: ScheduledReminderWhereUniqueInput | ScheduledReminderWhereUniqueInput[]
    connect?: ScheduledReminderWhereUniqueInput | ScheduledReminderWhereUniqueInput[]
    update?: ScheduledReminderUpdateWithWhereUniqueWithoutClientInput | ScheduledReminderUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ScheduledReminderUpdateManyWithWhereWithoutClientInput | ScheduledReminderUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ScheduledReminderScalarWhereInput | ScheduledReminderScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutTemplatesInput = {
    create?: XOR<OrganizationCreateWithoutTemplatesInput, OrganizationUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutTemplatesInput
    connect?: OrganizationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTemplatesInput = {
    create?: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTemplatesInput
    connect?: UserWhereUniqueInput
  }

  export type ScheduledReminderCreateNestedManyWithoutTemplateInput = {
    create?: XOR<ScheduledReminderCreateWithoutTemplateInput, ScheduledReminderUncheckedCreateWithoutTemplateInput> | ScheduledReminderCreateWithoutTemplateInput[] | ScheduledReminderUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: ScheduledReminderCreateOrConnectWithoutTemplateInput | ScheduledReminderCreateOrConnectWithoutTemplateInput[]
    createMany?: ScheduledReminderCreateManyTemplateInputEnvelope
    connect?: ScheduledReminderWhereUniqueInput | ScheduledReminderWhereUniqueInput[]
  }

  export type ScheduledReminderUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<ScheduledReminderCreateWithoutTemplateInput, ScheduledReminderUncheckedCreateWithoutTemplateInput> | ScheduledReminderCreateWithoutTemplateInput[] | ScheduledReminderUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: ScheduledReminderCreateOrConnectWithoutTemplateInput | ScheduledReminderCreateOrConnectWithoutTemplateInput[]
    createMany?: ScheduledReminderCreateManyTemplateInputEnvelope
    connect?: ScheduledReminderWhereUniqueInput | ScheduledReminderWhereUniqueInput[]
  }

  export type OrganizationUpdateOneRequiredWithoutTemplatesNestedInput = {
    create?: XOR<OrganizationCreateWithoutTemplatesInput, OrganizationUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutTemplatesInput
    upsert?: OrganizationUpsertWithoutTemplatesInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutTemplatesInput, OrganizationUpdateWithoutTemplatesInput>, OrganizationUncheckedUpdateWithoutTemplatesInput>
  }

  export type UserUpdateOneRequiredWithoutTemplatesNestedInput = {
    create?: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTemplatesInput
    upsert?: UserUpsertWithoutTemplatesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTemplatesInput, UserUpdateWithoutTemplatesInput>, UserUncheckedUpdateWithoutTemplatesInput>
  }

  export type ScheduledReminderUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<ScheduledReminderCreateWithoutTemplateInput, ScheduledReminderUncheckedCreateWithoutTemplateInput> | ScheduledReminderCreateWithoutTemplateInput[] | ScheduledReminderUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: ScheduledReminderCreateOrConnectWithoutTemplateInput | ScheduledReminderCreateOrConnectWithoutTemplateInput[]
    upsert?: ScheduledReminderUpsertWithWhereUniqueWithoutTemplateInput | ScheduledReminderUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: ScheduledReminderCreateManyTemplateInputEnvelope
    set?: ScheduledReminderWhereUniqueInput | ScheduledReminderWhereUniqueInput[]
    disconnect?: ScheduledReminderWhereUniqueInput | ScheduledReminderWhereUniqueInput[]
    delete?: ScheduledReminderWhereUniqueInput | ScheduledReminderWhereUniqueInput[]
    connect?: ScheduledReminderWhereUniqueInput | ScheduledReminderWhereUniqueInput[]
    update?: ScheduledReminderUpdateWithWhereUniqueWithoutTemplateInput | ScheduledReminderUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: ScheduledReminderUpdateManyWithWhereWithoutTemplateInput | ScheduledReminderUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: ScheduledReminderScalarWhereInput | ScheduledReminderScalarWhereInput[]
  }

  export type ScheduledReminderUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<ScheduledReminderCreateWithoutTemplateInput, ScheduledReminderUncheckedCreateWithoutTemplateInput> | ScheduledReminderCreateWithoutTemplateInput[] | ScheduledReminderUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: ScheduledReminderCreateOrConnectWithoutTemplateInput | ScheduledReminderCreateOrConnectWithoutTemplateInput[]
    upsert?: ScheduledReminderUpsertWithWhereUniqueWithoutTemplateInput | ScheduledReminderUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: ScheduledReminderCreateManyTemplateInputEnvelope
    set?: ScheduledReminderWhereUniqueInput | ScheduledReminderWhereUniqueInput[]
    disconnect?: ScheduledReminderWhereUniqueInput | ScheduledReminderWhereUniqueInput[]
    delete?: ScheduledReminderWhereUniqueInput | ScheduledReminderWhereUniqueInput[]
    connect?: ScheduledReminderWhereUniqueInput | ScheduledReminderWhereUniqueInput[]
    update?: ScheduledReminderUpdateWithWhereUniqueWithoutTemplateInput | ScheduledReminderUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: ScheduledReminderUpdateManyWithWhereWithoutTemplateInput | ScheduledReminderUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: ScheduledReminderScalarWhereInput | ScheduledReminderScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutVoiceClonesInput = {
    create?: XOR<OrganizationCreateWithoutVoiceClonesInput, OrganizationUncheckedCreateWithoutVoiceClonesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutVoiceClonesInput
    connect?: OrganizationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutVoiceClonesInput = {
    create?: XOR<UserCreateWithoutVoiceClonesInput, UserUncheckedCreateWithoutVoiceClonesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVoiceClonesInput
    connect?: UserWhereUniqueInput
  }

  export type ScheduledReminderCreateNestedManyWithoutVoiceInput = {
    create?: XOR<ScheduledReminderCreateWithoutVoiceInput, ScheduledReminderUncheckedCreateWithoutVoiceInput> | ScheduledReminderCreateWithoutVoiceInput[] | ScheduledReminderUncheckedCreateWithoutVoiceInput[]
    connectOrCreate?: ScheduledReminderCreateOrConnectWithoutVoiceInput | ScheduledReminderCreateOrConnectWithoutVoiceInput[]
    createMany?: ScheduledReminderCreateManyVoiceInputEnvelope
    connect?: ScheduledReminderWhereUniqueInput | ScheduledReminderWhereUniqueInput[]
  }

  export type ScheduledReminderUncheckedCreateNestedManyWithoutVoiceInput = {
    create?: XOR<ScheduledReminderCreateWithoutVoiceInput, ScheduledReminderUncheckedCreateWithoutVoiceInput> | ScheduledReminderCreateWithoutVoiceInput[] | ScheduledReminderUncheckedCreateWithoutVoiceInput[]
    connectOrCreate?: ScheduledReminderCreateOrConnectWithoutVoiceInput | ScheduledReminderCreateOrConnectWithoutVoiceInput[]
    createMany?: ScheduledReminderCreateManyVoiceInputEnvelope
    connect?: ScheduledReminderWhereUniqueInput | ScheduledReminderWhereUniqueInput[]
  }

  export type EnumCloneProviderFieldUpdateOperationsInput = {
    set?: $Enums.CloneProvider
  }

  export type OrganizationUpdateOneRequiredWithoutVoiceClonesNestedInput = {
    create?: XOR<OrganizationCreateWithoutVoiceClonesInput, OrganizationUncheckedCreateWithoutVoiceClonesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutVoiceClonesInput
    upsert?: OrganizationUpsertWithoutVoiceClonesInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutVoiceClonesInput, OrganizationUpdateWithoutVoiceClonesInput>, OrganizationUncheckedUpdateWithoutVoiceClonesInput>
  }

  export type UserUpdateOneRequiredWithoutVoiceClonesNestedInput = {
    create?: XOR<UserCreateWithoutVoiceClonesInput, UserUncheckedCreateWithoutVoiceClonesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVoiceClonesInput
    upsert?: UserUpsertWithoutVoiceClonesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVoiceClonesInput, UserUpdateWithoutVoiceClonesInput>, UserUncheckedUpdateWithoutVoiceClonesInput>
  }

  export type ScheduledReminderUpdateManyWithoutVoiceNestedInput = {
    create?: XOR<ScheduledReminderCreateWithoutVoiceInput, ScheduledReminderUncheckedCreateWithoutVoiceInput> | ScheduledReminderCreateWithoutVoiceInput[] | ScheduledReminderUncheckedCreateWithoutVoiceInput[]
    connectOrCreate?: ScheduledReminderCreateOrConnectWithoutVoiceInput | ScheduledReminderCreateOrConnectWithoutVoiceInput[]
    upsert?: ScheduledReminderUpsertWithWhereUniqueWithoutVoiceInput | ScheduledReminderUpsertWithWhereUniqueWithoutVoiceInput[]
    createMany?: ScheduledReminderCreateManyVoiceInputEnvelope
    set?: ScheduledReminderWhereUniqueInput | ScheduledReminderWhereUniqueInput[]
    disconnect?: ScheduledReminderWhereUniqueInput | ScheduledReminderWhereUniqueInput[]
    delete?: ScheduledReminderWhereUniqueInput | ScheduledReminderWhereUniqueInput[]
    connect?: ScheduledReminderWhereUniqueInput | ScheduledReminderWhereUniqueInput[]
    update?: ScheduledReminderUpdateWithWhereUniqueWithoutVoiceInput | ScheduledReminderUpdateWithWhereUniqueWithoutVoiceInput[]
    updateMany?: ScheduledReminderUpdateManyWithWhereWithoutVoiceInput | ScheduledReminderUpdateManyWithWhereWithoutVoiceInput[]
    deleteMany?: ScheduledReminderScalarWhereInput | ScheduledReminderScalarWhereInput[]
  }

  export type ScheduledReminderUncheckedUpdateManyWithoutVoiceNestedInput = {
    create?: XOR<ScheduledReminderCreateWithoutVoiceInput, ScheduledReminderUncheckedCreateWithoutVoiceInput> | ScheduledReminderCreateWithoutVoiceInput[] | ScheduledReminderUncheckedCreateWithoutVoiceInput[]
    connectOrCreate?: ScheduledReminderCreateOrConnectWithoutVoiceInput | ScheduledReminderCreateOrConnectWithoutVoiceInput[]
    upsert?: ScheduledReminderUpsertWithWhereUniqueWithoutVoiceInput | ScheduledReminderUpsertWithWhereUniqueWithoutVoiceInput[]
    createMany?: ScheduledReminderCreateManyVoiceInputEnvelope
    set?: ScheduledReminderWhereUniqueInput | ScheduledReminderWhereUniqueInput[]
    disconnect?: ScheduledReminderWhereUniqueInput | ScheduledReminderWhereUniqueInput[]
    delete?: ScheduledReminderWhereUniqueInput | ScheduledReminderWhereUniqueInput[]
    connect?: ScheduledReminderWhereUniqueInput | ScheduledReminderWhereUniqueInput[]
    update?: ScheduledReminderUpdateWithWhereUniqueWithoutVoiceInput | ScheduledReminderUpdateWithWhereUniqueWithoutVoiceInput[]
    updateMany?: ScheduledReminderUpdateManyWithWhereWithoutVoiceInput | ScheduledReminderUpdateManyWithWhereWithoutVoiceInput[]
    deleteMany?: ScheduledReminderScalarWhereInput | ScheduledReminderScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutVoiceSamplesInput = {
    create?: XOR<OrganizationCreateWithoutVoiceSamplesInput, OrganizationUncheckedCreateWithoutVoiceSamplesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutVoiceSamplesInput
    connect?: OrganizationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutVoiceSamplesInput = {
    create?: XOR<UserCreateWithoutVoiceSamplesInput, UserUncheckedCreateWithoutVoiceSamplesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVoiceSamplesInput
    connect?: UserWhereUniqueInput
  }

  export type OrganizationUpdateOneRequiredWithoutVoiceSamplesNestedInput = {
    create?: XOR<OrganizationCreateWithoutVoiceSamplesInput, OrganizationUncheckedCreateWithoutVoiceSamplesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutVoiceSamplesInput
    upsert?: OrganizationUpsertWithoutVoiceSamplesInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutVoiceSamplesInput, OrganizationUpdateWithoutVoiceSamplesInput>, OrganizationUncheckedUpdateWithoutVoiceSamplesInput>
  }

  export type UserUpdateOneRequiredWithoutVoiceSamplesNestedInput = {
    create?: XOR<UserCreateWithoutVoiceSamplesInput, UserUncheckedCreateWithoutVoiceSamplesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVoiceSamplesInput
    upsert?: UserUpsertWithoutVoiceSamplesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVoiceSamplesInput, UserUpdateWithoutVoiceSamplesInput>, UserUncheckedUpdateWithoutVoiceSamplesInput>
  }

  export type ClientCreateNestedOneWithoutScheduledRemindersInput = {
    create?: XOR<ClientCreateWithoutScheduledRemindersInput, ClientUncheckedCreateWithoutScheduledRemindersInput>
    connectOrCreate?: ClientCreateOrConnectWithoutScheduledRemindersInput
    connect?: ClientWhereUniqueInput
  }

  export type TemplateCreateNestedOneWithoutScheduledRemindersInput = {
    create?: XOR<TemplateCreateWithoutScheduledRemindersInput, TemplateUncheckedCreateWithoutScheduledRemindersInput>
    connectOrCreate?: TemplateCreateOrConnectWithoutScheduledRemindersInput
    connect?: TemplateWhereUniqueInput
  }

  export type VoiceCloneCreateNestedOneWithoutScheduledRemindersInput = {
    create?: XOR<VoiceCloneCreateWithoutScheduledRemindersInput, VoiceCloneUncheckedCreateWithoutScheduledRemindersInput>
    connectOrCreate?: VoiceCloneCreateOrConnectWithoutScheduledRemindersInput
    connect?: VoiceCloneWhereUniqueInput
  }

  export type EnumReminderOffsetFieldUpdateOperationsInput = {
    set?: $Enums.ReminderOffset
  }

  export type EnumCallStatusFieldUpdateOperationsInput = {
    set?: $Enums.CallStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClientUpdateOneRequiredWithoutScheduledRemindersNestedInput = {
    create?: XOR<ClientCreateWithoutScheduledRemindersInput, ClientUncheckedCreateWithoutScheduledRemindersInput>
    connectOrCreate?: ClientCreateOrConnectWithoutScheduledRemindersInput
    upsert?: ClientUpsertWithoutScheduledRemindersInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutScheduledRemindersInput, ClientUpdateWithoutScheduledRemindersInput>, ClientUncheckedUpdateWithoutScheduledRemindersInput>
  }

  export type TemplateUpdateOneRequiredWithoutScheduledRemindersNestedInput = {
    create?: XOR<TemplateCreateWithoutScheduledRemindersInput, TemplateUncheckedCreateWithoutScheduledRemindersInput>
    connectOrCreate?: TemplateCreateOrConnectWithoutScheduledRemindersInput
    upsert?: TemplateUpsertWithoutScheduledRemindersInput
    connect?: TemplateWhereUniqueInput
    update?: XOR<XOR<TemplateUpdateToOneWithWhereWithoutScheduledRemindersInput, TemplateUpdateWithoutScheduledRemindersInput>, TemplateUncheckedUpdateWithoutScheduledRemindersInput>
  }

  export type VoiceCloneUpdateOneRequiredWithoutScheduledRemindersNestedInput = {
    create?: XOR<VoiceCloneCreateWithoutScheduledRemindersInput, VoiceCloneUncheckedCreateWithoutScheduledRemindersInput>
    connectOrCreate?: VoiceCloneCreateOrConnectWithoutScheduledRemindersInput
    upsert?: VoiceCloneUpsertWithoutScheduledRemindersInput
    connect?: VoiceCloneWhereUniqueInput
    update?: XOR<XOR<VoiceCloneUpdateToOneWithWhereWithoutScheduledRemindersInput, VoiceCloneUpdateWithoutScheduledRemindersInput>, VoiceCloneUncheckedUpdateWithoutScheduledRemindersInput>
  }

  export type EnumTransactionStatusFieldUpdateOperationsInput = {
    set?: $Enums.TransactionStatus
  }

  export type OrganizationCreateNestedOneWithoutApiKeysInput = {
    create?: XOR<OrganizationCreateWithoutApiKeysInput, OrganizationUncheckedCreateWithoutApiKeysInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutApiKeysInput
    connect?: OrganizationWhereUniqueInput
  }

  export type OrganizationUpdateOneRequiredWithoutApiKeysNestedInput = {
    create?: XOR<OrganizationCreateWithoutApiKeysInput, OrganizationUncheckedCreateWithoutApiKeysInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutApiKeysInput
    upsert?: OrganizationUpsertWithoutApiKeysInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutApiKeysInput, OrganizationUpdateWithoutApiKeysInput>, OrganizationUncheckedUpdateWithoutApiKeysInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumCloneProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.CloneProvider | EnumCloneProviderFieldRefInput<$PrismaModel>
    in?: $Enums.CloneProvider[] | ListEnumCloneProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.CloneProvider[] | ListEnumCloneProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumCloneProviderFilter<$PrismaModel> | $Enums.CloneProvider
  }

  export type NestedEnumCloneProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CloneProvider | EnumCloneProviderFieldRefInput<$PrismaModel>
    in?: $Enums.CloneProvider[] | ListEnumCloneProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.CloneProvider[] | ListEnumCloneProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumCloneProviderWithAggregatesFilter<$PrismaModel> | $Enums.CloneProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCloneProviderFilter<$PrismaModel>
    _max?: NestedEnumCloneProviderFilter<$PrismaModel>
  }

  export type NestedEnumReminderOffsetFilter<$PrismaModel = never> = {
    equals?: $Enums.ReminderOffset | EnumReminderOffsetFieldRefInput<$PrismaModel>
    in?: $Enums.ReminderOffset[] | ListEnumReminderOffsetFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReminderOffset[] | ListEnumReminderOffsetFieldRefInput<$PrismaModel>
    not?: NestedEnumReminderOffsetFilter<$PrismaModel> | $Enums.ReminderOffset
  }

  export type NestedEnumCallStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CallStatus | EnumCallStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CallStatus[] | ListEnumCallStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CallStatus[] | ListEnumCallStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCallStatusFilter<$PrismaModel> | $Enums.CallStatus
  }

  export type NestedEnumReminderOffsetWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReminderOffset | EnumReminderOffsetFieldRefInput<$PrismaModel>
    in?: $Enums.ReminderOffset[] | ListEnumReminderOffsetFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReminderOffset[] | ListEnumReminderOffsetFieldRefInput<$PrismaModel>
    not?: NestedEnumReminderOffsetWithAggregatesFilter<$PrismaModel> | $Enums.ReminderOffset
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReminderOffsetFilter<$PrismaModel>
    _max?: NestedEnumReminderOffsetFilter<$PrismaModel>
  }

  export type NestedEnumCallStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CallStatus | EnumCallStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CallStatus[] | ListEnumCallStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CallStatus[] | ListEnumCallStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCallStatusWithAggregatesFilter<$PrismaModel> | $Enums.CallStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCallStatusFilter<$PrismaModel>
    _max?: NestedEnumCallStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type OrganizationCreateWithoutUsersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    email?: string | null
    phone?: string | null
    outboundPhone?: string | null
    clients?: ClientCreateNestedManyWithoutOrgInput
    templates?: TemplateCreateNestedManyWithoutOrgInput
    voiceClones?: VoiceCloneCreateNestedManyWithoutOrgInput
    voiceSamples?: VoiceSampleCreateNestedManyWithoutOrgInput
    apiKeys?: ProviderApiKeyCreateNestedManyWithoutOrgInput
  }

  export type OrganizationUncheckedCreateWithoutUsersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    email?: string | null
    phone?: string | null
    outboundPhone?: string | null
    clients?: ClientUncheckedCreateNestedManyWithoutOrgInput
    templates?: TemplateUncheckedCreateNestedManyWithoutOrgInput
    voiceClones?: VoiceCloneUncheckedCreateNestedManyWithoutOrgInput
    voiceSamples?: VoiceSampleUncheckedCreateNestedManyWithoutOrgInput
    apiKeys?: ProviderApiKeyUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrganizationCreateOrConnectWithoutUsersInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
  }

  export type SessionCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TemplateCreateWithoutAuthorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    content: string
    org: OrganizationCreateNestedOneWithoutTemplatesInput
    scheduledReminders?: ScheduledReminderCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUncheckedCreateWithoutAuthorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    content: string
    orgId: string
    scheduledReminders?: ScheduledReminderUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type TemplateCreateOrConnectWithoutAuthorInput = {
    where: TemplateWhereUniqueInput
    create: XOR<TemplateCreateWithoutAuthorInput, TemplateUncheckedCreateWithoutAuthorInput>
  }

  export type TemplateCreateManyAuthorInputEnvelope = {
    data: TemplateCreateManyAuthorInput | TemplateCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type VoiceCloneCreateWithoutAuthorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    cloneProvider: $Enums.CloneProvider
    providerId: string
    org: OrganizationCreateNestedOneWithoutVoiceClonesInput
    scheduledReminders?: ScheduledReminderCreateNestedManyWithoutVoiceInput
  }

  export type VoiceCloneUncheckedCreateWithoutAuthorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    cloneProvider: $Enums.CloneProvider
    providerId: string
    orgId: string
    scheduledReminders?: ScheduledReminderUncheckedCreateNestedManyWithoutVoiceInput
  }

  export type VoiceCloneCreateOrConnectWithoutAuthorInput = {
    where: VoiceCloneWhereUniqueInput
    create: XOR<VoiceCloneCreateWithoutAuthorInput, VoiceCloneUncheckedCreateWithoutAuthorInput>
  }

  export type VoiceCloneCreateManyAuthorInputEnvelope = {
    data: VoiceCloneCreateManyAuthorInput | VoiceCloneCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type VoiceSampleCreateWithoutAuthorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    filename: string
    name: string
    description?: string | null
    storageKey?: string | null
    org: OrganizationCreateNestedOneWithoutVoiceSamplesInput
  }

  export type VoiceSampleUncheckedCreateWithoutAuthorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    filename: string
    name: string
    description?: string | null
    storageKey?: string | null
    orgId: string
  }

  export type VoiceSampleCreateOrConnectWithoutAuthorInput = {
    where: VoiceSampleWhereUniqueInput
    create: XOR<VoiceSampleCreateWithoutAuthorInput, VoiceSampleUncheckedCreateWithoutAuthorInput>
  }

  export type VoiceSampleCreateManyAuthorInputEnvelope = {
    data: VoiceSampleCreateManyAuthorInput | VoiceSampleCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type ClientCreateWithoutAuthorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    preferredName?: string | null
    email: string
    phoneNumber: string
    org: OrganizationCreateNestedOneWithoutClientsInput
    scheduledReminders?: ScheduledReminderCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutAuthorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    preferredName?: string | null
    email: string
    phoneNumber: string
    orgId: string
    scheduledReminders?: ScheduledReminderUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutAuthorInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutAuthorInput, ClientUncheckedCreateWithoutAuthorInput>
  }

  export type ClientCreateManyAuthorInputEnvelope = {
    data: ClientCreateManyAuthorInput | ClientCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutUsersInput = {
    update: XOR<OrganizationUpdateWithoutUsersInput, OrganizationUncheckedUpdateWithoutUsersInput>
    create: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutUsersInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutUsersInput, OrganizationUncheckedUpdateWithoutUsersInput>
  }

  export type OrganizationUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    outboundPhone?: NullableStringFieldUpdateOperationsInput | string | null
    clients?: ClientUpdateManyWithoutOrgNestedInput
    templates?: TemplateUpdateManyWithoutOrgNestedInput
    voiceClones?: VoiceCloneUpdateManyWithoutOrgNestedInput
    voiceSamples?: VoiceSampleUpdateManyWithoutOrgNestedInput
    apiKeys?: ProviderApiKeyUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    outboundPhone?: NullableStringFieldUpdateOperationsInput | string | null
    clients?: ClientUncheckedUpdateManyWithoutOrgNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutOrgNestedInput
    voiceClones?: VoiceCloneUncheckedUpdateManyWithoutOrgNestedInput
    voiceSamples?: VoiceSampleUncheckedUpdateManyWithoutOrgNestedInput
    apiKeys?: ProviderApiKeyUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type TemplateUpsertWithWhereUniqueWithoutAuthorInput = {
    where: TemplateWhereUniqueInput
    update: XOR<TemplateUpdateWithoutAuthorInput, TemplateUncheckedUpdateWithoutAuthorInput>
    create: XOR<TemplateCreateWithoutAuthorInput, TemplateUncheckedCreateWithoutAuthorInput>
  }

  export type TemplateUpdateWithWhereUniqueWithoutAuthorInput = {
    where: TemplateWhereUniqueInput
    data: XOR<TemplateUpdateWithoutAuthorInput, TemplateUncheckedUpdateWithoutAuthorInput>
  }

  export type TemplateUpdateManyWithWhereWithoutAuthorInput = {
    where: TemplateScalarWhereInput
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyWithoutAuthorInput>
  }

  export type TemplateScalarWhereInput = {
    AND?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
    OR?: TemplateScalarWhereInput[]
    NOT?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
    id?: StringFilter<"Template"> | string
    createdAt?: DateTimeFilter<"Template"> | Date | string
    updatedAt?: DateTimeFilter<"Template"> | Date | string
    name?: StringFilter<"Template"> | string
    content?: StringFilter<"Template"> | string
    orgId?: StringFilter<"Template"> | string
    authorId?: StringFilter<"Template"> | string
  }

  export type VoiceCloneUpsertWithWhereUniqueWithoutAuthorInput = {
    where: VoiceCloneWhereUniqueInput
    update: XOR<VoiceCloneUpdateWithoutAuthorInput, VoiceCloneUncheckedUpdateWithoutAuthorInput>
    create: XOR<VoiceCloneCreateWithoutAuthorInput, VoiceCloneUncheckedCreateWithoutAuthorInput>
  }

  export type VoiceCloneUpdateWithWhereUniqueWithoutAuthorInput = {
    where: VoiceCloneWhereUniqueInput
    data: XOR<VoiceCloneUpdateWithoutAuthorInput, VoiceCloneUncheckedUpdateWithoutAuthorInput>
  }

  export type VoiceCloneUpdateManyWithWhereWithoutAuthorInput = {
    where: VoiceCloneScalarWhereInput
    data: XOR<VoiceCloneUpdateManyMutationInput, VoiceCloneUncheckedUpdateManyWithoutAuthorInput>
  }

  export type VoiceCloneScalarWhereInput = {
    AND?: VoiceCloneScalarWhereInput | VoiceCloneScalarWhereInput[]
    OR?: VoiceCloneScalarWhereInput[]
    NOT?: VoiceCloneScalarWhereInput | VoiceCloneScalarWhereInput[]
    id?: StringFilter<"VoiceClone"> | string
    createdAt?: DateTimeFilter<"VoiceClone"> | Date | string
    updatedAt?: DateTimeFilter<"VoiceClone"> | Date | string
    name?: StringFilter<"VoiceClone"> | string
    description?: StringNullableFilter<"VoiceClone"> | string | null
    cloneProvider?: EnumCloneProviderFilter<"VoiceClone"> | $Enums.CloneProvider
    providerId?: StringFilter<"VoiceClone"> | string
    orgId?: StringFilter<"VoiceClone"> | string
    authorId?: StringFilter<"VoiceClone"> | string
  }

  export type VoiceSampleUpsertWithWhereUniqueWithoutAuthorInput = {
    where: VoiceSampleWhereUniqueInput
    update: XOR<VoiceSampleUpdateWithoutAuthorInput, VoiceSampleUncheckedUpdateWithoutAuthorInput>
    create: XOR<VoiceSampleCreateWithoutAuthorInput, VoiceSampleUncheckedCreateWithoutAuthorInput>
  }

  export type VoiceSampleUpdateWithWhereUniqueWithoutAuthorInput = {
    where: VoiceSampleWhereUniqueInput
    data: XOR<VoiceSampleUpdateWithoutAuthorInput, VoiceSampleUncheckedUpdateWithoutAuthorInput>
  }

  export type VoiceSampleUpdateManyWithWhereWithoutAuthorInput = {
    where: VoiceSampleScalarWhereInput
    data: XOR<VoiceSampleUpdateManyMutationInput, VoiceSampleUncheckedUpdateManyWithoutAuthorInput>
  }

  export type VoiceSampleScalarWhereInput = {
    AND?: VoiceSampleScalarWhereInput | VoiceSampleScalarWhereInput[]
    OR?: VoiceSampleScalarWhereInput[]
    NOT?: VoiceSampleScalarWhereInput | VoiceSampleScalarWhereInput[]
    id?: StringFilter<"VoiceSample"> | string
    createdAt?: DateTimeFilter<"VoiceSample"> | Date | string
    updatedAt?: DateTimeFilter<"VoiceSample"> | Date | string
    filename?: StringFilter<"VoiceSample"> | string
    name?: StringFilter<"VoiceSample"> | string
    description?: StringNullableFilter<"VoiceSample"> | string | null
    storageKey?: StringNullableFilter<"VoiceSample"> | string | null
    orgId?: StringFilter<"VoiceSample"> | string
    authorId?: StringFilter<"VoiceSample"> | string
  }

  export type ClientUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ClientWhereUniqueInput
    update: XOR<ClientUpdateWithoutAuthorInput, ClientUncheckedUpdateWithoutAuthorInput>
    create: XOR<ClientCreateWithoutAuthorInput, ClientUncheckedCreateWithoutAuthorInput>
  }

  export type ClientUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ClientWhereUniqueInput
    data: XOR<ClientUpdateWithoutAuthorInput, ClientUncheckedUpdateWithoutAuthorInput>
  }

  export type ClientUpdateManyWithWhereWithoutAuthorInput = {
    where: ClientScalarWhereInput
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyWithoutAuthorInput>
  }

  export type ClientScalarWhereInput = {
    AND?: ClientScalarWhereInput | ClientScalarWhereInput[]
    OR?: ClientScalarWhereInput[]
    NOT?: ClientScalarWhereInput | ClientScalarWhereInput[]
    id?: StringFilter<"Client"> | string
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    firstName?: StringFilter<"Client"> | string
    lastName?: StringFilter<"Client"> | string
    preferredName?: StringNullableFilter<"Client"> | string | null
    email?: StringFilter<"Client"> | string
    phoneNumber?: StringFilter<"Client"> | string
    orgId?: StringFilter<"Client"> | string
    authorId?: StringFilter<"Client"> | string
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    org?: OrganizationCreateNestedOneWithoutUsersInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    templates?: TemplateCreateNestedManyWithoutAuthorInput
    voiceClones?: VoiceCloneCreateNestedManyWithoutAuthorInput
    voiceSamples?: VoiceSampleCreateNestedManyWithoutAuthorInput
    clients?: ClientCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    orgId?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    templates?: TemplateUncheckedCreateNestedManyWithoutAuthorInput
    voiceClones?: VoiceCloneUncheckedCreateNestedManyWithoutAuthorInput
    voiceSamples?: VoiceSampleUncheckedCreateNestedManyWithoutAuthorInput
    clients?: ClientUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    org?: OrganizationUpdateOneWithoutUsersNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    templates?: TemplateUpdateManyWithoutAuthorNestedInput
    voiceClones?: VoiceCloneUpdateManyWithoutAuthorNestedInput
    voiceSamples?: VoiceSampleUpdateManyWithoutAuthorNestedInput
    clients?: ClientUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutAuthorNestedInput
    voiceClones?: VoiceCloneUncheckedUpdateManyWithoutAuthorNestedInput
    voiceSamples?: VoiceSampleUncheckedUpdateManyWithoutAuthorNestedInput
    clients?: ClientUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    org?: OrganizationCreateNestedOneWithoutUsersInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    templates?: TemplateCreateNestedManyWithoutAuthorInput
    voiceClones?: VoiceCloneCreateNestedManyWithoutAuthorInput
    voiceSamples?: VoiceSampleCreateNestedManyWithoutAuthorInput
    clients?: ClientCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    orgId?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    templates?: TemplateUncheckedCreateNestedManyWithoutAuthorInput
    voiceClones?: VoiceCloneUncheckedCreateNestedManyWithoutAuthorInput
    voiceSamples?: VoiceSampleUncheckedCreateNestedManyWithoutAuthorInput
    clients?: ClientUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    org?: OrganizationUpdateOneWithoutUsersNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    templates?: TemplateUpdateManyWithoutAuthorNestedInput
    voiceClones?: VoiceCloneUpdateManyWithoutAuthorNestedInput
    voiceSamples?: VoiceSampleUpdateManyWithoutAuthorNestedInput
    clients?: ClientUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutAuthorNestedInput
    voiceClones?: VoiceCloneUncheckedUpdateManyWithoutAuthorNestedInput
    voiceSamples?: VoiceSampleUncheckedUpdateManyWithoutAuthorNestedInput
    clients?: ClientUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateWithoutOrgInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    templates?: TemplateCreateNestedManyWithoutAuthorInput
    voiceClones?: VoiceCloneCreateNestedManyWithoutAuthorInput
    voiceSamples?: VoiceSampleCreateNestedManyWithoutAuthorInput
    clients?: ClientCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutOrgInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    templates?: TemplateUncheckedCreateNestedManyWithoutAuthorInput
    voiceClones?: VoiceCloneUncheckedCreateNestedManyWithoutAuthorInput
    voiceSamples?: VoiceSampleUncheckedCreateNestedManyWithoutAuthorInput
    clients?: ClientUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutOrgInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrgInput, UserUncheckedCreateWithoutOrgInput>
  }

  export type UserCreateManyOrgInputEnvelope = {
    data: UserCreateManyOrgInput | UserCreateManyOrgInput[]
    skipDuplicates?: boolean
  }

  export type ClientCreateWithoutOrgInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    preferredName?: string | null
    email: string
    phoneNumber: string
    author: UserCreateNestedOneWithoutClientsInput
    scheduledReminders?: ScheduledReminderCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutOrgInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    preferredName?: string | null
    email: string
    phoneNumber: string
    authorId: string
    scheduledReminders?: ScheduledReminderUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutOrgInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutOrgInput, ClientUncheckedCreateWithoutOrgInput>
  }

  export type ClientCreateManyOrgInputEnvelope = {
    data: ClientCreateManyOrgInput | ClientCreateManyOrgInput[]
    skipDuplicates?: boolean
  }

  export type TemplateCreateWithoutOrgInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    content: string
    author: UserCreateNestedOneWithoutTemplatesInput
    scheduledReminders?: ScheduledReminderCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUncheckedCreateWithoutOrgInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    content: string
    authorId: string
    scheduledReminders?: ScheduledReminderUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type TemplateCreateOrConnectWithoutOrgInput = {
    where: TemplateWhereUniqueInput
    create: XOR<TemplateCreateWithoutOrgInput, TemplateUncheckedCreateWithoutOrgInput>
  }

  export type TemplateCreateManyOrgInputEnvelope = {
    data: TemplateCreateManyOrgInput | TemplateCreateManyOrgInput[]
    skipDuplicates?: boolean
  }

  export type VoiceCloneCreateWithoutOrgInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    cloneProvider: $Enums.CloneProvider
    providerId: string
    author: UserCreateNestedOneWithoutVoiceClonesInput
    scheduledReminders?: ScheduledReminderCreateNestedManyWithoutVoiceInput
  }

  export type VoiceCloneUncheckedCreateWithoutOrgInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    cloneProvider: $Enums.CloneProvider
    providerId: string
    authorId: string
    scheduledReminders?: ScheduledReminderUncheckedCreateNestedManyWithoutVoiceInput
  }

  export type VoiceCloneCreateOrConnectWithoutOrgInput = {
    where: VoiceCloneWhereUniqueInput
    create: XOR<VoiceCloneCreateWithoutOrgInput, VoiceCloneUncheckedCreateWithoutOrgInput>
  }

  export type VoiceCloneCreateManyOrgInputEnvelope = {
    data: VoiceCloneCreateManyOrgInput | VoiceCloneCreateManyOrgInput[]
    skipDuplicates?: boolean
  }

  export type VoiceSampleCreateWithoutOrgInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    filename: string
    name: string
    description?: string | null
    storageKey?: string | null
    author: UserCreateNestedOneWithoutVoiceSamplesInput
  }

  export type VoiceSampleUncheckedCreateWithoutOrgInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    filename: string
    name: string
    description?: string | null
    storageKey?: string | null
    authorId: string
  }

  export type VoiceSampleCreateOrConnectWithoutOrgInput = {
    where: VoiceSampleWhereUniqueInput
    create: XOR<VoiceSampleCreateWithoutOrgInput, VoiceSampleUncheckedCreateWithoutOrgInput>
  }

  export type VoiceSampleCreateManyOrgInputEnvelope = {
    data: VoiceSampleCreateManyOrgInput | VoiceSampleCreateManyOrgInput[]
    skipDuplicates?: boolean
  }

  export type ProviderApiKeyCreateWithoutOrgInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: string
    apiKey: string
  }

  export type ProviderApiKeyUncheckedCreateWithoutOrgInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: string
    apiKey: string
  }

  export type ProviderApiKeyCreateOrConnectWithoutOrgInput = {
    where: ProviderApiKeyWhereUniqueInput
    create: XOR<ProviderApiKeyCreateWithoutOrgInput, ProviderApiKeyUncheckedCreateWithoutOrgInput>
  }

  export type ProviderApiKeyCreateManyOrgInputEnvelope = {
    data: ProviderApiKeyCreateManyOrgInput | ProviderApiKeyCreateManyOrgInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutOrgInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutOrgInput, UserUncheckedUpdateWithoutOrgInput>
    create: XOR<UserCreateWithoutOrgInput, UserUncheckedCreateWithoutOrgInput>
  }

  export type UserUpdateWithWhereUniqueWithoutOrgInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutOrgInput, UserUncheckedUpdateWithoutOrgInput>
  }

  export type UserUpdateManyWithWhereWithoutOrgInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutOrgInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    orgId?: StringNullableFilter<"User"> | string | null
  }

  export type ClientUpsertWithWhereUniqueWithoutOrgInput = {
    where: ClientWhereUniqueInput
    update: XOR<ClientUpdateWithoutOrgInput, ClientUncheckedUpdateWithoutOrgInput>
    create: XOR<ClientCreateWithoutOrgInput, ClientUncheckedCreateWithoutOrgInput>
  }

  export type ClientUpdateWithWhereUniqueWithoutOrgInput = {
    where: ClientWhereUniqueInput
    data: XOR<ClientUpdateWithoutOrgInput, ClientUncheckedUpdateWithoutOrgInput>
  }

  export type ClientUpdateManyWithWhereWithoutOrgInput = {
    where: ClientScalarWhereInput
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyWithoutOrgInput>
  }

  export type TemplateUpsertWithWhereUniqueWithoutOrgInput = {
    where: TemplateWhereUniqueInput
    update: XOR<TemplateUpdateWithoutOrgInput, TemplateUncheckedUpdateWithoutOrgInput>
    create: XOR<TemplateCreateWithoutOrgInput, TemplateUncheckedCreateWithoutOrgInput>
  }

  export type TemplateUpdateWithWhereUniqueWithoutOrgInput = {
    where: TemplateWhereUniqueInput
    data: XOR<TemplateUpdateWithoutOrgInput, TemplateUncheckedUpdateWithoutOrgInput>
  }

  export type TemplateUpdateManyWithWhereWithoutOrgInput = {
    where: TemplateScalarWhereInput
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyWithoutOrgInput>
  }

  export type VoiceCloneUpsertWithWhereUniqueWithoutOrgInput = {
    where: VoiceCloneWhereUniqueInput
    update: XOR<VoiceCloneUpdateWithoutOrgInput, VoiceCloneUncheckedUpdateWithoutOrgInput>
    create: XOR<VoiceCloneCreateWithoutOrgInput, VoiceCloneUncheckedCreateWithoutOrgInput>
  }

  export type VoiceCloneUpdateWithWhereUniqueWithoutOrgInput = {
    where: VoiceCloneWhereUniqueInput
    data: XOR<VoiceCloneUpdateWithoutOrgInput, VoiceCloneUncheckedUpdateWithoutOrgInput>
  }

  export type VoiceCloneUpdateManyWithWhereWithoutOrgInput = {
    where: VoiceCloneScalarWhereInput
    data: XOR<VoiceCloneUpdateManyMutationInput, VoiceCloneUncheckedUpdateManyWithoutOrgInput>
  }

  export type VoiceSampleUpsertWithWhereUniqueWithoutOrgInput = {
    where: VoiceSampleWhereUniqueInput
    update: XOR<VoiceSampleUpdateWithoutOrgInput, VoiceSampleUncheckedUpdateWithoutOrgInput>
    create: XOR<VoiceSampleCreateWithoutOrgInput, VoiceSampleUncheckedCreateWithoutOrgInput>
  }

  export type VoiceSampleUpdateWithWhereUniqueWithoutOrgInput = {
    where: VoiceSampleWhereUniqueInput
    data: XOR<VoiceSampleUpdateWithoutOrgInput, VoiceSampleUncheckedUpdateWithoutOrgInput>
  }

  export type VoiceSampleUpdateManyWithWhereWithoutOrgInput = {
    where: VoiceSampleScalarWhereInput
    data: XOR<VoiceSampleUpdateManyMutationInput, VoiceSampleUncheckedUpdateManyWithoutOrgInput>
  }

  export type ProviderApiKeyUpsertWithWhereUniqueWithoutOrgInput = {
    where: ProviderApiKeyWhereUniqueInput
    update: XOR<ProviderApiKeyUpdateWithoutOrgInput, ProviderApiKeyUncheckedUpdateWithoutOrgInput>
    create: XOR<ProviderApiKeyCreateWithoutOrgInput, ProviderApiKeyUncheckedCreateWithoutOrgInput>
  }

  export type ProviderApiKeyUpdateWithWhereUniqueWithoutOrgInput = {
    where: ProviderApiKeyWhereUniqueInput
    data: XOR<ProviderApiKeyUpdateWithoutOrgInput, ProviderApiKeyUncheckedUpdateWithoutOrgInput>
  }

  export type ProviderApiKeyUpdateManyWithWhereWithoutOrgInput = {
    where: ProviderApiKeyScalarWhereInput
    data: XOR<ProviderApiKeyUpdateManyMutationInput, ProviderApiKeyUncheckedUpdateManyWithoutOrgInput>
  }

  export type ProviderApiKeyScalarWhereInput = {
    AND?: ProviderApiKeyScalarWhereInput | ProviderApiKeyScalarWhereInput[]
    OR?: ProviderApiKeyScalarWhereInput[]
    NOT?: ProviderApiKeyScalarWhereInput | ProviderApiKeyScalarWhereInput[]
    id?: StringFilter<"ProviderApiKey"> | string
    createdAt?: DateTimeFilter<"ProviderApiKey"> | Date | string
    updatedAt?: DateTimeFilter<"ProviderApiKey"> | Date | string
    provider?: StringFilter<"ProviderApiKey"> | string
    apiKey?: StringFilter<"ProviderApiKey"> | string
    orgId?: StringFilter<"ProviderApiKey"> | string
  }

  export type OrganizationCreateWithoutClientsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    email?: string | null
    phone?: string | null
    outboundPhone?: string | null
    users?: UserCreateNestedManyWithoutOrgInput
    templates?: TemplateCreateNestedManyWithoutOrgInput
    voiceClones?: VoiceCloneCreateNestedManyWithoutOrgInput
    voiceSamples?: VoiceSampleCreateNestedManyWithoutOrgInput
    apiKeys?: ProviderApiKeyCreateNestedManyWithoutOrgInput
  }

  export type OrganizationUncheckedCreateWithoutClientsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    email?: string | null
    phone?: string | null
    outboundPhone?: string | null
    users?: UserUncheckedCreateNestedManyWithoutOrgInput
    templates?: TemplateUncheckedCreateNestedManyWithoutOrgInput
    voiceClones?: VoiceCloneUncheckedCreateNestedManyWithoutOrgInput
    voiceSamples?: VoiceSampleUncheckedCreateNestedManyWithoutOrgInput
    apiKeys?: ProviderApiKeyUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrganizationCreateOrConnectWithoutClientsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutClientsInput, OrganizationUncheckedCreateWithoutClientsInput>
  }

  export type UserCreateWithoutClientsInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    org?: OrganizationCreateNestedOneWithoutUsersInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    templates?: TemplateCreateNestedManyWithoutAuthorInput
    voiceClones?: VoiceCloneCreateNestedManyWithoutAuthorInput
    voiceSamples?: VoiceSampleCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutClientsInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    orgId?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    templates?: TemplateUncheckedCreateNestedManyWithoutAuthorInput
    voiceClones?: VoiceCloneUncheckedCreateNestedManyWithoutAuthorInput
    voiceSamples?: VoiceSampleUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutClientsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClientsInput, UserUncheckedCreateWithoutClientsInput>
  }

  export type ScheduledReminderCreateWithoutClientInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    timeZone: string
    appointmentTime: Date | string
    reminderOffset: $Enums.ReminderOffset
    status?: $Enums.CallStatus
    attempts?: number
    lastAttempt?: Date | string | null
    orgId: string
    userId: string
    template: TemplateCreateNestedOneWithoutScheduledRemindersInput
    voice: VoiceCloneCreateNestedOneWithoutScheduledRemindersInput
  }

  export type ScheduledReminderUncheckedCreateWithoutClientInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    timeZone: string
    appointmentTime: Date | string
    reminderOffset: $Enums.ReminderOffset
    status?: $Enums.CallStatus
    attempts?: number
    lastAttempt?: Date | string | null
    orgId: string
    userId: string
    templateId: string
    voiceId: string
  }

  export type ScheduledReminderCreateOrConnectWithoutClientInput = {
    where: ScheduledReminderWhereUniqueInput
    create: XOR<ScheduledReminderCreateWithoutClientInput, ScheduledReminderUncheckedCreateWithoutClientInput>
  }

  export type ScheduledReminderCreateManyClientInputEnvelope = {
    data: ScheduledReminderCreateManyClientInput | ScheduledReminderCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutClientsInput = {
    update: XOR<OrganizationUpdateWithoutClientsInput, OrganizationUncheckedUpdateWithoutClientsInput>
    create: XOR<OrganizationCreateWithoutClientsInput, OrganizationUncheckedCreateWithoutClientsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutClientsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutClientsInput, OrganizationUncheckedUpdateWithoutClientsInput>
  }

  export type OrganizationUpdateWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    outboundPhone?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUpdateManyWithoutOrgNestedInput
    templates?: TemplateUpdateManyWithoutOrgNestedInput
    voiceClones?: VoiceCloneUpdateManyWithoutOrgNestedInput
    voiceSamples?: VoiceSampleUpdateManyWithoutOrgNestedInput
    apiKeys?: ProviderApiKeyUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    outboundPhone?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutOrgNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutOrgNestedInput
    voiceClones?: VoiceCloneUncheckedUpdateManyWithoutOrgNestedInput
    voiceSamples?: VoiceSampleUncheckedUpdateManyWithoutOrgNestedInput
    apiKeys?: ProviderApiKeyUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type UserUpsertWithoutClientsInput = {
    update: XOR<UserUpdateWithoutClientsInput, UserUncheckedUpdateWithoutClientsInput>
    create: XOR<UserCreateWithoutClientsInput, UserUncheckedCreateWithoutClientsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutClientsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutClientsInput, UserUncheckedUpdateWithoutClientsInput>
  }

  export type UserUpdateWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    org?: OrganizationUpdateOneWithoutUsersNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    templates?: TemplateUpdateManyWithoutAuthorNestedInput
    voiceClones?: VoiceCloneUpdateManyWithoutAuthorNestedInput
    voiceSamples?: VoiceSampleUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutAuthorNestedInput
    voiceClones?: VoiceCloneUncheckedUpdateManyWithoutAuthorNestedInput
    voiceSamples?: VoiceSampleUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type ScheduledReminderUpsertWithWhereUniqueWithoutClientInput = {
    where: ScheduledReminderWhereUniqueInput
    update: XOR<ScheduledReminderUpdateWithoutClientInput, ScheduledReminderUncheckedUpdateWithoutClientInput>
    create: XOR<ScheduledReminderCreateWithoutClientInput, ScheduledReminderUncheckedCreateWithoutClientInput>
  }

  export type ScheduledReminderUpdateWithWhereUniqueWithoutClientInput = {
    where: ScheduledReminderWhereUniqueInput
    data: XOR<ScheduledReminderUpdateWithoutClientInput, ScheduledReminderUncheckedUpdateWithoutClientInput>
  }

  export type ScheduledReminderUpdateManyWithWhereWithoutClientInput = {
    where: ScheduledReminderScalarWhereInput
    data: XOR<ScheduledReminderUpdateManyMutationInput, ScheduledReminderUncheckedUpdateManyWithoutClientInput>
  }

  export type ScheduledReminderScalarWhereInput = {
    AND?: ScheduledReminderScalarWhereInput | ScheduledReminderScalarWhereInput[]
    OR?: ScheduledReminderScalarWhereInput[]
    NOT?: ScheduledReminderScalarWhereInput | ScheduledReminderScalarWhereInput[]
    id?: StringFilter<"ScheduledReminder"> | string
    createdAt?: DateTimeFilter<"ScheduledReminder"> | Date | string
    updatedAt?: DateTimeFilter<"ScheduledReminder"> | Date | string
    timeZone?: StringFilter<"ScheduledReminder"> | string
    appointmentTime?: DateTimeFilter<"ScheduledReminder"> | Date | string
    reminderOffset?: EnumReminderOffsetFilter<"ScheduledReminder"> | $Enums.ReminderOffset
    status?: EnumCallStatusFilter<"ScheduledReminder"> | $Enums.CallStatus
    attempts?: IntFilter<"ScheduledReminder"> | number
    lastAttempt?: DateTimeNullableFilter<"ScheduledReminder"> | Date | string | null
    orgId?: StringFilter<"ScheduledReminder"> | string
    userId?: StringFilter<"ScheduledReminder"> | string
    clientId?: StringFilter<"ScheduledReminder"> | string
    templateId?: StringFilter<"ScheduledReminder"> | string
    voiceId?: StringFilter<"ScheduledReminder"> | string
  }

  export type OrganizationCreateWithoutTemplatesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    email?: string | null
    phone?: string | null
    outboundPhone?: string | null
    users?: UserCreateNestedManyWithoutOrgInput
    clients?: ClientCreateNestedManyWithoutOrgInput
    voiceClones?: VoiceCloneCreateNestedManyWithoutOrgInput
    voiceSamples?: VoiceSampleCreateNestedManyWithoutOrgInput
    apiKeys?: ProviderApiKeyCreateNestedManyWithoutOrgInput
  }

  export type OrganizationUncheckedCreateWithoutTemplatesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    email?: string | null
    phone?: string | null
    outboundPhone?: string | null
    users?: UserUncheckedCreateNestedManyWithoutOrgInput
    clients?: ClientUncheckedCreateNestedManyWithoutOrgInput
    voiceClones?: VoiceCloneUncheckedCreateNestedManyWithoutOrgInput
    voiceSamples?: VoiceSampleUncheckedCreateNestedManyWithoutOrgInput
    apiKeys?: ProviderApiKeyUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrganizationCreateOrConnectWithoutTemplatesInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutTemplatesInput, OrganizationUncheckedCreateWithoutTemplatesInput>
  }

  export type UserCreateWithoutTemplatesInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    org?: OrganizationCreateNestedOneWithoutUsersInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    voiceClones?: VoiceCloneCreateNestedManyWithoutAuthorInput
    voiceSamples?: VoiceSampleCreateNestedManyWithoutAuthorInput
    clients?: ClientCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutTemplatesInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    orgId?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    voiceClones?: VoiceCloneUncheckedCreateNestedManyWithoutAuthorInput
    voiceSamples?: VoiceSampleUncheckedCreateNestedManyWithoutAuthorInput
    clients?: ClientUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutTemplatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
  }

  export type ScheduledReminderCreateWithoutTemplateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    timeZone: string
    appointmentTime: Date | string
    reminderOffset: $Enums.ReminderOffset
    status?: $Enums.CallStatus
    attempts?: number
    lastAttempt?: Date | string | null
    orgId: string
    userId: string
    client: ClientCreateNestedOneWithoutScheduledRemindersInput
    voice: VoiceCloneCreateNestedOneWithoutScheduledRemindersInput
  }

  export type ScheduledReminderUncheckedCreateWithoutTemplateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    timeZone: string
    appointmentTime: Date | string
    reminderOffset: $Enums.ReminderOffset
    status?: $Enums.CallStatus
    attempts?: number
    lastAttempt?: Date | string | null
    orgId: string
    userId: string
    clientId: string
    voiceId: string
  }

  export type ScheduledReminderCreateOrConnectWithoutTemplateInput = {
    where: ScheduledReminderWhereUniqueInput
    create: XOR<ScheduledReminderCreateWithoutTemplateInput, ScheduledReminderUncheckedCreateWithoutTemplateInput>
  }

  export type ScheduledReminderCreateManyTemplateInputEnvelope = {
    data: ScheduledReminderCreateManyTemplateInput | ScheduledReminderCreateManyTemplateInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutTemplatesInput = {
    update: XOR<OrganizationUpdateWithoutTemplatesInput, OrganizationUncheckedUpdateWithoutTemplatesInput>
    create: XOR<OrganizationCreateWithoutTemplatesInput, OrganizationUncheckedCreateWithoutTemplatesInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutTemplatesInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutTemplatesInput, OrganizationUncheckedUpdateWithoutTemplatesInput>
  }

  export type OrganizationUpdateWithoutTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    outboundPhone?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUpdateManyWithoutOrgNestedInput
    clients?: ClientUpdateManyWithoutOrgNestedInput
    voiceClones?: VoiceCloneUpdateManyWithoutOrgNestedInput
    voiceSamples?: VoiceSampleUpdateManyWithoutOrgNestedInput
    apiKeys?: ProviderApiKeyUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    outboundPhone?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutOrgNestedInput
    clients?: ClientUncheckedUpdateManyWithoutOrgNestedInput
    voiceClones?: VoiceCloneUncheckedUpdateManyWithoutOrgNestedInput
    voiceSamples?: VoiceSampleUncheckedUpdateManyWithoutOrgNestedInput
    apiKeys?: ProviderApiKeyUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type UserUpsertWithoutTemplatesInput = {
    update: XOR<UserUpdateWithoutTemplatesInput, UserUncheckedUpdateWithoutTemplatesInput>
    create: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTemplatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTemplatesInput, UserUncheckedUpdateWithoutTemplatesInput>
  }

  export type UserUpdateWithoutTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    org?: OrganizationUpdateOneWithoutUsersNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    voiceClones?: VoiceCloneUpdateManyWithoutAuthorNestedInput
    voiceSamples?: VoiceSampleUpdateManyWithoutAuthorNestedInput
    clients?: ClientUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    voiceClones?: VoiceCloneUncheckedUpdateManyWithoutAuthorNestedInput
    voiceSamples?: VoiceSampleUncheckedUpdateManyWithoutAuthorNestedInput
    clients?: ClientUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type ScheduledReminderUpsertWithWhereUniqueWithoutTemplateInput = {
    where: ScheduledReminderWhereUniqueInput
    update: XOR<ScheduledReminderUpdateWithoutTemplateInput, ScheduledReminderUncheckedUpdateWithoutTemplateInput>
    create: XOR<ScheduledReminderCreateWithoutTemplateInput, ScheduledReminderUncheckedCreateWithoutTemplateInput>
  }

  export type ScheduledReminderUpdateWithWhereUniqueWithoutTemplateInput = {
    where: ScheduledReminderWhereUniqueInput
    data: XOR<ScheduledReminderUpdateWithoutTemplateInput, ScheduledReminderUncheckedUpdateWithoutTemplateInput>
  }

  export type ScheduledReminderUpdateManyWithWhereWithoutTemplateInput = {
    where: ScheduledReminderScalarWhereInput
    data: XOR<ScheduledReminderUpdateManyMutationInput, ScheduledReminderUncheckedUpdateManyWithoutTemplateInput>
  }

  export type OrganizationCreateWithoutVoiceClonesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    email?: string | null
    phone?: string | null
    outboundPhone?: string | null
    users?: UserCreateNestedManyWithoutOrgInput
    clients?: ClientCreateNestedManyWithoutOrgInput
    templates?: TemplateCreateNestedManyWithoutOrgInput
    voiceSamples?: VoiceSampleCreateNestedManyWithoutOrgInput
    apiKeys?: ProviderApiKeyCreateNestedManyWithoutOrgInput
  }

  export type OrganizationUncheckedCreateWithoutVoiceClonesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    email?: string | null
    phone?: string | null
    outboundPhone?: string | null
    users?: UserUncheckedCreateNestedManyWithoutOrgInput
    clients?: ClientUncheckedCreateNestedManyWithoutOrgInput
    templates?: TemplateUncheckedCreateNestedManyWithoutOrgInput
    voiceSamples?: VoiceSampleUncheckedCreateNestedManyWithoutOrgInput
    apiKeys?: ProviderApiKeyUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrganizationCreateOrConnectWithoutVoiceClonesInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutVoiceClonesInput, OrganizationUncheckedCreateWithoutVoiceClonesInput>
  }

  export type UserCreateWithoutVoiceClonesInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    org?: OrganizationCreateNestedOneWithoutUsersInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    templates?: TemplateCreateNestedManyWithoutAuthorInput
    voiceSamples?: VoiceSampleCreateNestedManyWithoutAuthorInput
    clients?: ClientCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutVoiceClonesInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    orgId?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    templates?: TemplateUncheckedCreateNestedManyWithoutAuthorInput
    voiceSamples?: VoiceSampleUncheckedCreateNestedManyWithoutAuthorInput
    clients?: ClientUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutVoiceClonesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVoiceClonesInput, UserUncheckedCreateWithoutVoiceClonesInput>
  }

  export type ScheduledReminderCreateWithoutVoiceInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    timeZone: string
    appointmentTime: Date | string
    reminderOffset: $Enums.ReminderOffset
    status?: $Enums.CallStatus
    attempts?: number
    lastAttempt?: Date | string | null
    orgId: string
    userId: string
    client: ClientCreateNestedOneWithoutScheduledRemindersInput
    template: TemplateCreateNestedOneWithoutScheduledRemindersInput
  }

  export type ScheduledReminderUncheckedCreateWithoutVoiceInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    timeZone: string
    appointmentTime: Date | string
    reminderOffset: $Enums.ReminderOffset
    status?: $Enums.CallStatus
    attempts?: number
    lastAttempt?: Date | string | null
    orgId: string
    userId: string
    clientId: string
    templateId: string
  }

  export type ScheduledReminderCreateOrConnectWithoutVoiceInput = {
    where: ScheduledReminderWhereUniqueInput
    create: XOR<ScheduledReminderCreateWithoutVoiceInput, ScheduledReminderUncheckedCreateWithoutVoiceInput>
  }

  export type ScheduledReminderCreateManyVoiceInputEnvelope = {
    data: ScheduledReminderCreateManyVoiceInput | ScheduledReminderCreateManyVoiceInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutVoiceClonesInput = {
    update: XOR<OrganizationUpdateWithoutVoiceClonesInput, OrganizationUncheckedUpdateWithoutVoiceClonesInput>
    create: XOR<OrganizationCreateWithoutVoiceClonesInput, OrganizationUncheckedCreateWithoutVoiceClonesInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutVoiceClonesInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutVoiceClonesInput, OrganizationUncheckedUpdateWithoutVoiceClonesInput>
  }

  export type OrganizationUpdateWithoutVoiceClonesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    outboundPhone?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUpdateManyWithoutOrgNestedInput
    clients?: ClientUpdateManyWithoutOrgNestedInput
    templates?: TemplateUpdateManyWithoutOrgNestedInput
    voiceSamples?: VoiceSampleUpdateManyWithoutOrgNestedInput
    apiKeys?: ProviderApiKeyUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutVoiceClonesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    outboundPhone?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutOrgNestedInput
    clients?: ClientUncheckedUpdateManyWithoutOrgNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutOrgNestedInput
    voiceSamples?: VoiceSampleUncheckedUpdateManyWithoutOrgNestedInput
    apiKeys?: ProviderApiKeyUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type UserUpsertWithoutVoiceClonesInput = {
    update: XOR<UserUpdateWithoutVoiceClonesInput, UserUncheckedUpdateWithoutVoiceClonesInput>
    create: XOR<UserCreateWithoutVoiceClonesInput, UserUncheckedCreateWithoutVoiceClonesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVoiceClonesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVoiceClonesInput, UserUncheckedUpdateWithoutVoiceClonesInput>
  }

  export type UserUpdateWithoutVoiceClonesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    org?: OrganizationUpdateOneWithoutUsersNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    templates?: TemplateUpdateManyWithoutAuthorNestedInput
    voiceSamples?: VoiceSampleUpdateManyWithoutAuthorNestedInput
    clients?: ClientUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutVoiceClonesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutAuthorNestedInput
    voiceSamples?: VoiceSampleUncheckedUpdateManyWithoutAuthorNestedInput
    clients?: ClientUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type ScheduledReminderUpsertWithWhereUniqueWithoutVoiceInput = {
    where: ScheduledReminderWhereUniqueInput
    update: XOR<ScheduledReminderUpdateWithoutVoiceInput, ScheduledReminderUncheckedUpdateWithoutVoiceInput>
    create: XOR<ScheduledReminderCreateWithoutVoiceInput, ScheduledReminderUncheckedCreateWithoutVoiceInput>
  }

  export type ScheduledReminderUpdateWithWhereUniqueWithoutVoiceInput = {
    where: ScheduledReminderWhereUniqueInput
    data: XOR<ScheduledReminderUpdateWithoutVoiceInput, ScheduledReminderUncheckedUpdateWithoutVoiceInput>
  }

  export type ScheduledReminderUpdateManyWithWhereWithoutVoiceInput = {
    where: ScheduledReminderScalarWhereInput
    data: XOR<ScheduledReminderUpdateManyMutationInput, ScheduledReminderUncheckedUpdateManyWithoutVoiceInput>
  }

  export type OrganizationCreateWithoutVoiceSamplesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    email?: string | null
    phone?: string | null
    outboundPhone?: string | null
    users?: UserCreateNestedManyWithoutOrgInput
    clients?: ClientCreateNestedManyWithoutOrgInput
    templates?: TemplateCreateNestedManyWithoutOrgInput
    voiceClones?: VoiceCloneCreateNestedManyWithoutOrgInput
    apiKeys?: ProviderApiKeyCreateNestedManyWithoutOrgInput
  }

  export type OrganizationUncheckedCreateWithoutVoiceSamplesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    email?: string | null
    phone?: string | null
    outboundPhone?: string | null
    users?: UserUncheckedCreateNestedManyWithoutOrgInput
    clients?: ClientUncheckedCreateNestedManyWithoutOrgInput
    templates?: TemplateUncheckedCreateNestedManyWithoutOrgInput
    voiceClones?: VoiceCloneUncheckedCreateNestedManyWithoutOrgInput
    apiKeys?: ProviderApiKeyUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrganizationCreateOrConnectWithoutVoiceSamplesInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutVoiceSamplesInput, OrganizationUncheckedCreateWithoutVoiceSamplesInput>
  }

  export type UserCreateWithoutVoiceSamplesInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    org?: OrganizationCreateNestedOneWithoutUsersInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    templates?: TemplateCreateNestedManyWithoutAuthorInput
    voiceClones?: VoiceCloneCreateNestedManyWithoutAuthorInput
    clients?: ClientCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutVoiceSamplesInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    orgId?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    templates?: TemplateUncheckedCreateNestedManyWithoutAuthorInput
    voiceClones?: VoiceCloneUncheckedCreateNestedManyWithoutAuthorInput
    clients?: ClientUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutVoiceSamplesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVoiceSamplesInput, UserUncheckedCreateWithoutVoiceSamplesInput>
  }

  export type OrganizationUpsertWithoutVoiceSamplesInput = {
    update: XOR<OrganizationUpdateWithoutVoiceSamplesInput, OrganizationUncheckedUpdateWithoutVoiceSamplesInput>
    create: XOR<OrganizationCreateWithoutVoiceSamplesInput, OrganizationUncheckedCreateWithoutVoiceSamplesInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutVoiceSamplesInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutVoiceSamplesInput, OrganizationUncheckedUpdateWithoutVoiceSamplesInput>
  }

  export type OrganizationUpdateWithoutVoiceSamplesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    outboundPhone?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUpdateManyWithoutOrgNestedInput
    clients?: ClientUpdateManyWithoutOrgNestedInput
    templates?: TemplateUpdateManyWithoutOrgNestedInput
    voiceClones?: VoiceCloneUpdateManyWithoutOrgNestedInput
    apiKeys?: ProviderApiKeyUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutVoiceSamplesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    outboundPhone?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutOrgNestedInput
    clients?: ClientUncheckedUpdateManyWithoutOrgNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutOrgNestedInput
    voiceClones?: VoiceCloneUncheckedUpdateManyWithoutOrgNestedInput
    apiKeys?: ProviderApiKeyUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type UserUpsertWithoutVoiceSamplesInput = {
    update: XOR<UserUpdateWithoutVoiceSamplesInput, UserUncheckedUpdateWithoutVoiceSamplesInput>
    create: XOR<UserCreateWithoutVoiceSamplesInput, UserUncheckedCreateWithoutVoiceSamplesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVoiceSamplesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVoiceSamplesInput, UserUncheckedUpdateWithoutVoiceSamplesInput>
  }

  export type UserUpdateWithoutVoiceSamplesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    org?: OrganizationUpdateOneWithoutUsersNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    templates?: TemplateUpdateManyWithoutAuthorNestedInput
    voiceClones?: VoiceCloneUpdateManyWithoutAuthorNestedInput
    clients?: ClientUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutVoiceSamplesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutAuthorNestedInput
    voiceClones?: VoiceCloneUncheckedUpdateManyWithoutAuthorNestedInput
    clients?: ClientUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type ClientCreateWithoutScheduledRemindersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    preferredName?: string | null
    email: string
    phoneNumber: string
    org: OrganizationCreateNestedOneWithoutClientsInput
    author: UserCreateNestedOneWithoutClientsInput
  }

  export type ClientUncheckedCreateWithoutScheduledRemindersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    preferredName?: string | null
    email: string
    phoneNumber: string
    orgId: string
    authorId: string
  }

  export type ClientCreateOrConnectWithoutScheduledRemindersInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutScheduledRemindersInput, ClientUncheckedCreateWithoutScheduledRemindersInput>
  }

  export type TemplateCreateWithoutScheduledRemindersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    content: string
    org: OrganizationCreateNestedOneWithoutTemplatesInput
    author: UserCreateNestedOneWithoutTemplatesInput
  }

  export type TemplateUncheckedCreateWithoutScheduledRemindersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    content: string
    orgId: string
    authorId: string
  }

  export type TemplateCreateOrConnectWithoutScheduledRemindersInput = {
    where: TemplateWhereUniqueInput
    create: XOR<TemplateCreateWithoutScheduledRemindersInput, TemplateUncheckedCreateWithoutScheduledRemindersInput>
  }

  export type VoiceCloneCreateWithoutScheduledRemindersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    cloneProvider: $Enums.CloneProvider
    providerId: string
    org: OrganizationCreateNestedOneWithoutVoiceClonesInput
    author: UserCreateNestedOneWithoutVoiceClonesInput
  }

  export type VoiceCloneUncheckedCreateWithoutScheduledRemindersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    cloneProvider: $Enums.CloneProvider
    providerId: string
    orgId: string
    authorId: string
  }

  export type VoiceCloneCreateOrConnectWithoutScheduledRemindersInput = {
    where: VoiceCloneWhereUniqueInput
    create: XOR<VoiceCloneCreateWithoutScheduledRemindersInput, VoiceCloneUncheckedCreateWithoutScheduledRemindersInput>
  }

  export type ClientUpsertWithoutScheduledRemindersInput = {
    update: XOR<ClientUpdateWithoutScheduledRemindersInput, ClientUncheckedUpdateWithoutScheduledRemindersInput>
    create: XOR<ClientCreateWithoutScheduledRemindersInput, ClientUncheckedCreateWithoutScheduledRemindersInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutScheduledRemindersInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutScheduledRemindersInput, ClientUncheckedUpdateWithoutScheduledRemindersInput>
  }

  export type ClientUpdateWithoutScheduledRemindersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    preferredName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    org?: OrganizationUpdateOneRequiredWithoutClientsNestedInput
    author?: UserUpdateOneRequiredWithoutClientsNestedInput
  }

  export type ClientUncheckedUpdateWithoutScheduledRemindersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    preferredName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type TemplateUpsertWithoutScheduledRemindersInput = {
    update: XOR<TemplateUpdateWithoutScheduledRemindersInput, TemplateUncheckedUpdateWithoutScheduledRemindersInput>
    create: XOR<TemplateCreateWithoutScheduledRemindersInput, TemplateUncheckedCreateWithoutScheduledRemindersInput>
    where?: TemplateWhereInput
  }

  export type TemplateUpdateToOneWithWhereWithoutScheduledRemindersInput = {
    where?: TemplateWhereInput
    data: XOR<TemplateUpdateWithoutScheduledRemindersInput, TemplateUncheckedUpdateWithoutScheduledRemindersInput>
  }

  export type TemplateUpdateWithoutScheduledRemindersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    org?: OrganizationUpdateOneRequiredWithoutTemplatesNestedInput
    author?: UserUpdateOneRequiredWithoutTemplatesNestedInput
  }

  export type TemplateUncheckedUpdateWithoutScheduledRemindersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type VoiceCloneUpsertWithoutScheduledRemindersInput = {
    update: XOR<VoiceCloneUpdateWithoutScheduledRemindersInput, VoiceCloneUncheckedUpdateWithoutScheduledRemindersInput>
    create: XOR<VoiceCloneCreateWithoutScheduledRemindersInput, VoiceCloneUncheckedCreateWithoutScheduledRemindersInput>
    where?: VoiceCloneWhereInput
  }

  export type VoiceCloneUpdateToOneWithWhereWithoutScheduledRemindersInput = {
    where?: VoiceCloneWhereInput
    data: XOR<VoiceCloneUpdateWithoutScheduledRemindersInput, VoiceCloneUncheckedUpdateWithoutScheduledRemindersInput>
  }

  export type VoiceCloneUpdateWithoutScheduledRemindersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cloneProvider?: EnumCloneProviderFieldUpdateOperationsInput | $Enums.CloneProvider
    providerId?: StringFieldUpdateOperationsInput | string
    org?: OrganizationUpdateOneRequiredWithoutVoiceClonesNestedInput
    author?: UserUpdateOneRequiredWithoutVoiceClonesNestedInput
  }

  export type VoiceCloneUncheckedUpdateWithoutScheduledRemindersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cloneProvider?: EnumCloneProviderFieldUpdateOperationsInput | $Enums.CloneProvider
    providerId?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type OrganizationCreateWithoutApiKeysInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    email?: string | null
    phone?: string | null
    outboundPhone?: string | null
    users?: UserCreateNestedManyWithoutOrgInput
    clients?: ClientCreateNestedManyWithoutOrgInput
    templates?: TemplateCreateNestedManyWithoutOrgInput
    voiceClones?: VoiceCloneCreateNestedManyWithoutOrgInput
    voiceSamples?: VoiceSampleCreateNestedManyWithoutOrgInput
  }

  export type OrganizationUncheckedCreateWithoutApiKeysInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    email?: string | null
    phone?: string | null
    outboundPhone?: string | null
    users?: UserUncheckedCreateNestedManyWithoutOrgInput
    clients?: ClientUncheckedCreateNestedManyWithoutOrgInput
    templates?: TemplateUncheckedCreateNestedManyWithoutOrgInput
    voiceClones?: VoiceCloneUncheckedCreateNestedManyWithoutOrgInput
    voiceSamples?: VoiceSampleUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrganizationCreateOrConnectWithoutApiKeysInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutApiKeysInput, OrganizationUncheckedCreateWithoutApiKeysInput>
  }

  export type OrganizationUpsertWithoutApiKeysInput = {
    update: XOR<OrganizationUpdateWithoutApiKeysInput, OrganizationUncheckedUpdateWithoutApiKeysInput>
    create: XOR<OrganizationCreateWithoutApiKeysInput, OrganizationUncheckedCreateWithoutApiKeysInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutApiKeysInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutApiKeysInput, OrganizationUncheckedUpdateWithoutApiKeysInput>
  }

  export type OrganizationUpdateWithoutApiKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    outboundPhone?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUpdateManyWithoutOrgNestedInput
    clients?: ClientUpdateManyWithoutOrgNestedInput
    templates?: TemplateUpdateManyWithoutOrgNestedInput
    voiceClones?: VoiceCloneUpdateManyWithoutOrgNestedInput
    voiceSamples?: VoiceSampleUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutApiKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    outboundPhone?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutOrgNestedInput
    clients?: ClientUncheckedUpdateManyWithoutOrgNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutOrgNestedInput
    voiceClones?: VoiceCloneUncheckedUpdateManyWithoutOrgNestedInput
    voiceSamples?: VoiceSampleUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type SessionCreateManyUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type AccountCreateManyUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateCreateManyAuthorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    content: string
    orgId: string
  }

  export type VoiceCloneCreateManyAuthorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    cloneProvider: $Enums.CloneProvider
    providerId: string
    orgId: string
  }

  export type VoiceSampleCreateManyAuthorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    filename: string
    name: string
    description?: string | null
    storageKey?: string | null
    orgId: string
  }

  export type ClientCreateManyAuthorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    preferredName?: string | null
    email: string
    phoneNumber: string
    orgId: string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    org?: OrganizationUpdateOneRequiredWithoutTemplatesNestedInput
    scheduledReminders?: ScheduledReminderUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    scheduledReminders?: ScheduledReminderUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
  }

  export type VoiceCloneUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cloneProvider?: EnumCloneProviderFieldUpdateOperationsInput | $Enums.CloneProvider
    providerId?: StringFieldUpdateOperationsInput | string
    org?: OrganizationUpdateOneRequiredWithoutVoiceClonesNestedInput
    scheduledReminders?: ScheduledReminderUpdateManyWithoutVoiceNestedInput
  }

  export type VoiceCloneUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cloneProvider?: EnumCloneProviderFieldUpdateOperationsInput | $Enums.CloneProvider
    providerId?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    scheduledReminders?: ScheduledReminderUncheckedUpdateManyWithoutVoiceNestedInput
  }

  export type VoiceCloneUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cloneProvider?: EnumCloneProviderFieldUpdateOperationsInput | $Enums.CloneProvider
    providerId?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
  }

  export type VoiceSampleUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    filename?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    org?: OrganizationUpdateOneRequiredWithoutVoiceSamplesNestedInput
  }

  export type VoiceSampleUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    filename?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    orgId?: StringFieldUpdateOperationsInput | string
  }

  export type VoiceSampleUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    filename?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    orgId?: StringFieldUpdateOperationsInput | string
  }

  export type ClientUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    preferredName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    org?: OrganizationUpdateOneRequiredWithoutClientsNestedInput
    scheduledReminders?: ScheduledReminderUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    preferredName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    scheduledReminders?: ScheduledReminderUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    preferredName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyOrgInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
  }

  export type ClientCreateManyOrgInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    preferredName?: string | null
    email: string
    phoneNumber: string
    authorId: string
  }

  export type TemplateCreateManyOrgInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    content: string
    authorId: string
  }

  export type VoiceCloneCreateManyOrgInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    cloneProvider: $Enums.CloneProvider
    providerId: string
    authorId: string
  }

  export type VoiceSampleCreateManyOrgInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    filename: string
    name: string
    description?: string | null
    storageKey?: string | null
    authorId: string
  }

  export type ProviderApiKeyCreateManyOrgInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: string
    apiKey: string
  }

  export type UserUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    templates?: TemplateUpdateManyWithoutAuthorNestedInput
    voiceClones?: VoiceCloneUpdateManyWithoutAuthorNestedInput
    voiceSamples?: VoiceSampleUpdateManyWithoutAuthorNestedInput
    clients?: ClientUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutAuthorNestedInput
    voiceClones?: VoiceCloneUncheckedUpdateManyWithoutAuthorNestedInput
    voiceSamples?: VoiceSampleUncheckedUpdateManyWithoutAuthorNestedInput
    clients?: ClientUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateManyWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type ClientUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    preferredName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutClientsNestedInput
    scheduledReminders?: ScheduledReminderUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    preferredName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    scheduledReminders?: ScheduledReminderUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateManyWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    preferredName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type TemplateUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutTemplatesNestedInput
    scheduledReminders?: ScheduledReminderUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateUncheckedUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    scheduledReminders?: ScheduledReminderUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateUncheckedUpdateManyWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type VoiceCloneUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cloneProvider?: EnumCloneProviderFieldUpdateOperationsInput | $Enums.CloneProvider
    providerId?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutVoiceClonesNestedInput
    scheduledReminders?: ScheduledReminderUpdateManyWithoutVoiceNestedInput
  }

  export type VoiceCloneUncheckedUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cloneProvider?: EnumCloneProviderFieldUpdateOperationsInput | $Enums.CloneProvider
    providerId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    scheduledReminders?: ScheduledReminderUncheckedUpdateManyWithoutVoiceNestedInput
  }

  export type VoiceCloneUncheckedUpdateManyWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cloneProvider?: EnumCloneProviderFieldUpdateOperationsInput | $Enums.CloneProvider
    providerId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type VoiceSampleUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    filename?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    author?: UserUpdateOneRequiredWithoutVoiceSamplesNestedInput
  }

  export type VoiceSampleUncheckedUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    filename?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type VoiceSampleUncheckedUpdateManyWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    filename?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type ProviderApiKeyUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
  }

  export type ProviderApiKeyUncheckedUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
  }

  export type ProviderApiKeyUncheckedUpdateManyWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduledReminderCreateManyClientInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    timeZone: string
    appointmentTime: Date | string
    reminderOffset: $Enums.ReminderOffset
    status?: $Enums.CallStatus
    attempts?: number
    lastAttempt?: Date | string | null
    orgId: string
    userId: string
    templateId: string
    voiceId: string
  }

  export type ScheduledReminderUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeZone?: StringFieldUpdateOperationsInput | string
    appointmentTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reminderOffset?: EnumReminderOffsetFieldUpdateOperationsInput | $Enums.ReminderOffset
    status?: EnumCallStatusFieldUpdateOperationsInput | $Enums.CallStatus
    attempts?: IntFieldUpdateOperationsInput | number
    lastAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    template?: TemplateUpdateOneRequiredWithoutScheduledRemindersNestedInput
    voice?: VoiceCloneUpdateOneRequiredWithoutScheduledRemindersNestedInput
  }

  export type ScheduledReminderUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeZone?: StringFieldUpdateOperationsInput | string
    appointmentTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reminderOffset?: EnumReminderOffsetFieldUpdateOperationsInput | $Enums.ReminderOffset
    status?: EnumCallStatusFieldUpdateOperationsInput | $Enums.CallStatus
    attempts?: IntFieldUpdateOperationsInput | number
    lastAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    voiceId?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduledReminderUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeZone?: StringFieldUpdateOperationsInput | string
    appointmentTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reminderOffset?: EnumReminderOffsetFieldUpdateOperationsInput | $Enums.ReminderOffset
    status?: EnumCallStatusFieldUpdateOperationsInput | $Enums.CallStatus
    attempts?: IntFieldUpdateOperationsInput | number
    lastAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    voiceId?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduledReminderCreateManyTemplateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    timeZone: string
    appointmentTime: Date | string
    reminderOffset: $Enums.ReminderOffset
    status?: $Enums.CallStatus
    attempts?: number
    lastAttempt?: Date | string | null
    orgId: string
    userId: string
    clientId: string
    voiceId: string
  }

  export type ScheduledReminderUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeZone?: StringFieldUpdateOperationsInput | string
    appointmentTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reminderOffset?: EnumReminderOffsetFieldUpdateOperationsInput | $Enums.ReminderOffset
    status?: EnumCallStatusFieldUpdateOperationsInput | $Enums.CallStatus
    attempts?: IntFieldUpdateOperationsInput | number
    lastAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    client?: ClientUpdateOneRequiredWithoutScheduledRemindersNestedInput
    voice?: VoiceCloneUpdateOneRequiredWithoutScheduledRemindersNestedInput
  }

  export type ScheduledReminderUncheckedUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeZone?: StringFieldUpdateOperationsInput | string
    appointmentTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reminderOffset?: EnumReminderOffsetFieldUpdateOperationsInput | $Enums.ReminderOffset
    status?: EnumCallStatusFieldUpdateOperationsInput | $Enums.CallStatus
    attempts?: IntFieldUpdateOperationsInput | number
    lastAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    voiceId?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduledReminderUncheckedUpdateManyWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeZone?: StringFieldUpdateOperationsInput | string
    appointmentTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reminderOffset?: EnumReminderOffsetFieldUpdateOperationsInput | $Enums.ReminderOffset
    status?: EnumCallStatusFieldUpdateOperationsInput | $Enums.CallStatus
    attempts?: IntFieldUpdateOperationsInput | number
    lastAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    voiceId?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduledReminderCreateManyVoiceInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    timeZone: string
    appointmentTime: Date | string
    reminderOffset: $Enums.ReminderOffset
    status?: $Enums.CallStatus
    attempts?: number
    lastAttempt?: Date | string | null
    orgId: string
    userId: string
    clientId: string
    templateId: string
  }

  export type ScheduledReminderUpdateWithoutVoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeZone?: StringFieldUpdateOperationsInput | string
    appointmentTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reminderOffset?: EnumReminderOffsetFieldUpdateOperationsInput | $Enums.ReminderOffset
    status?: EnumCallStatusFieldUpdateOperationsInput | $Enums.CallStatus
    attempts?: IntFieldUpdateOperationsInput | number
    lastAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    client?: ClientUpdateOneRequiredWithoutScheduledRemindersNestedInput
    template?: TemplateUpdateOneRequiredWithoutScheduledRemindersNestedInput
  }

  export type ScheduledReminderUncheckedUpdateWithoutVoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeZone?: StringFieldUpdateOperationsInput | string
    appointmentTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reminderOffset?: EnumReminderOffsetFieldUpdateOperationsInput | $Enums.ReminderOffset
    status?: EnumCallStatusFieldUpdateOperationsInput | $Enums.CallStatus
    attempts?: IntFieldUpdateOperationsInput | number
    lastAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduledReminderUncheckedUpdateManyWithoutVoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeZone?: StringFieldUpdateOperationsInput | string
    appointmentTime?: DateTimeFieldUpdateOperationsInput | Date | string
    reminderOffset?: EnumReminderOffsetFieldUpdateOperationsInput | $Enums.ReminderOffset
    status?: EnumCallStatusFieldUpdateOperationsInput | $Enums.CallStatus
    attempts?: IntFieldUpdateOperationsInput | number
    lastAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}