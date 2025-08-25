
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
 * Model ExampleUser
 * 
 */
export type ExampleUser = $Result.DefaultSelection<Prisma.$ExampleUserPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ExampleUsers
 * const exampleUsers = await prisma.exampleUser.findMany()
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
   * // Fetch zero or more ExampleUsers
   * const exampleUsers = await prisma.exampleUser.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.exampleUser`: Exposes CRUD operations for the **ExampleUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExampleUsers
    * const exampleUsers = await prisma.exampleUser.findMany()
    * ```
    */
  get exampleUser(): Prisma.ExampleUserDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    ExampleUser: 'ExampleUser'
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
      modelProps: "exampleUser"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ExampleUser: {
        payload: Prisma.$ExampleUserPayload<ExtArgs>
        fields: Prisma.ExampleUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExampleUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExampleUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExampleUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExampleUserPayload>
          }
          findFirst: {
            args: Prisma.ExampleUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExampleUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExampleUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExampleUserPayload>
          }
          findMany: {
            args: Prisma.ExampleUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExampleUserPayload>[]
          }
          create: {
            args: Prisma.ExampleUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExampleUserPayload>
          }
          createMany: {
            args: Prisma.ExampleUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExampleUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExampleUserPayload>[]
          }
          delete: {
            args: Prisma.ExampleUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExampleUserPayload>
          }
          update: {
            args: Prisma.ExampleUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExampleUserPayload>
          }
          deleteMany: {
            args: Prisma.ExampleUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExampleUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExampleUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExampleUserPayload>[]
          }
          upsert: {
            args: Prisma.ExampleUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExampleUserPayload>
          }
          aggregate: {
            args: Prisma.ExampleUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExampleUser>
          }
          groupBy: {
            args: Prisma.ExampleUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExampleUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExampleUserCountArgs<ExtArgs>
            result: $Utils.Optional<ExampleUserCountAggregateOutputType> | number
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
    exampleUser?: ExampleUserOmit
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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Models
   */

  /**
   * Model ExampleUser
   */

  export type AggregateExampleUser = {
    _count: ExampleUserCountAggregateOutputType | null
    _min: ExampleUserMinAggregateOutputType | null
    _max: ExampleUserMaxAggregateOutputType | null
  }

  export type ExampleUserMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type ExampleUserMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type ExampleUserCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ExampleUserMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ExampleUserMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ExampleUserCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ExampleUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExampleUser to aggregate.
     */
    where?: ExampleUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExampleUsers to fetch.
     */
    orderBy?: ExampleUserOrderByWithRelationInput | ExampleUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExampleUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExampleUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExampleUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExampleUsers
    **/
    _count?: true | ExampleUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExampleUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExampleUserMaxAggregateInputType
  }

  export type GetExampleUserAggregateType<T extends ExampleUserAggregateArgs> = {
        [P in keyof T & keyof AggregateExampleUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExampleUser[P]>
      : GetScalarType<T[P], AggregateExampleUser[P]>
  }




  export type ExampleUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExampleUserWhereInput
    orderBy?: ExampleUserOrderByWithAggregationInput | ExampleUserOrderByWithAggregationInput[]
    by: ExampleUserScalarFieldEnum[] | ExampleUserScalarFieldEnum
    having?: ExampleUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExampleUserCountAggregateInputType | true
    _min?: ExampleUserMinAggregateInputType
    _max?: ExampleUserMaxAggregateInputType
  }

  export type ExampleUserGroupByOutputType = {
    id: string
    name: string
    _count: ExampleUserCountAggregateOutputType | null
    _min: ExampleUserMinAggregateOutputType | null
    _max: ExampleUserMaxAggregateOutputType | null
  }

  type GetExampleUserGroupByPayload<T extends ExampleUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExampleUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExampleUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExampleUserGroupByOutputType[P]>
            : GetScalarType<T[P], ExampleUserGroupByOutputType[P]>
        }
      >
    >


  export type ExampleUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["exampleUser"]>

  export type ExampleUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["exampleUser"]>

  export type ExampleUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["exampleUser"]>

  export type ExampleUserSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type ExampleUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["exampleUser"]>

  export type $ExampleUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExampleUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["exampleUser"]>
    composites: {}
  }

  type ExampleUserGetPayload<S extends boolean | null | undefined | ExampleUserDefaultArgs> = $Result.GetResult<Prisma.$ExampleUserPayload, S>

  type ExampleUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExampleUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExampleUserCountAggregateInputType | true
    }

  export interface ExampleUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExampleUser'], meta: { name: 'ExampleUser' } }
    /**
     * Find zero or one ExampleUser that matches the filter.
     * @param {ExampleUserFindUniqueArgs} args - Arguments to find a ExampleUser
     * @example
     * // Get one ExampleUser
     * const exampleUser = await prisma.exampleUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExampleUserFindUniqueArgs>(args: SelectSubset<T, ExampleUserFindUniqueArgs<ExtArgs>>): Prisma__ExampleUserClient<$Result.GetResult<Prisma.$ExampleUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExampleUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExampleUserFindUniqueOrThrowArgs} args - Arguments to find a ExampleUser
     * @example
     * // Get one ExampleUser
     * const exampleUser = await prisma.exampleUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExampleUserFindUniqueOrThrowArgs>(args: SelectSubset<T, ExampleUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExampleUserClient<$Result.GetResult<Prisma.$ExampleUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExampleUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExampleUserFindFirstArgs} args - Arguments to find a ExampleUser
     * @example
     * // Get one ExampleUser
     * const exampleUser = await prisma.exampleUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExampleUserFindFirstArgs>(args?: SelectSubset<T, ExampleUserFindFirstArgs<ExtArgs>>): Prisma__ExampleUserClient<$Result.GetResult<Prisma.$ExampleUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExampleUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExampleUserFindFirstOrThrowArgs} args - Arguments to find a ExampleUser
     * @example
     * // Get one ExampleUser
     * const exampleUser = await prisma.exampleUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExampleUserFindFirstOrThrowArgs>(args?: SelectSubset<T, ExampleUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExampleUserClient<$Result.GetResult<Prisma.$ExampleUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExampleUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExampleUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExampleUsers
     * const exampleUsers = await prisma.exampleUser.findMany()
     * 
     * // Get first 10 ExampleUsers
     * const exampleUsers = await prisma.exampleUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exampleUserWithIdOnly = await prisma.exampleUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExampleUserFindManyArgs>(args?: SelectSubset<T, ExampleUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExampleUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExampleUser.
     * @param {ExampleUserCreateArgs} args - Arguments to create a ExampleUser.
     * @example
     * // Create one ExampleUser
     * const ExampleUser = await prisma.exampleUser.create({
     *   data: {
     *     // ... data to create a ExampleUser
     *   }
     * })
     * 
     */
    create<T extends ExampleUserCreateArgs>(args: SelectSubset<T, ExampleUserCreateArgs<ExtArgs>>): Prisma__ExampleUserClient<$Result.GetResult<Prisma.$ExampleUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExampleUsers.
     * @param {ExampleUserCreateManyArgs} args - Arguments to create many ExampleUsers.
     * @example
     * // Create many ExampleUsers
     * const exampleUser = await prisma.exampleUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExampleUserCreateManyArgs>(args?: SelectSubset<T, ExampleUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExampleUsers and returns the data saved in the database.
     * @param {ExampleUserCreateManyAndReturnArgs} args - Arguments to create many ExampleUsers.
     * @example
     * // Create many ExampleUsers
     * const exampleUser = await prisma.exampleUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExampleUsers and only return the `id`
     * const exampleUserWithIdOnly = await prisma.exampleUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExampleUserCreateManyAndReturnArgs>(args?: SelectSubset<T, ExampleUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExampleUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExampleUser.
     * @param {ExampleUserDeleteArgs} args - Arguments to delete one ExampleUser.
     * @example
     * // Delete one ExampleUser
     * const ExampleUser = await prisma.exampleUser.delete({
     *   where: {
     *     // ... filter to delete one ExampleUser
     *   }
     * })
     * 
     */
    delete<T extends ExampleUserDeleteArgs>(args: SelectSubset<T, ExampleUserDeleteArgs<ExtArgs>>): Prisma__ExampleUserClient<$Result.GetResult<Prisma.$ExampleUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExampleUser.
     * @param {ExampleUserUpdateArgs} args - Arguments to update one ExampleUser.
     * @example
     * // Update one ExampleUser
     * const exampleUser = await prisma.exampleUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExampleUserUpdateArgs>(args: SelectSubset<T, ExampleUserUpdateArgs<ExtArgs>>): Prisma__ExampleUserClient<$Result.GetResult<Prisma.$ExampleUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExampleUsers.
     * @param {ExampleUserDeleteManyArgs} args - Arguments to filter ExampleUsers to delete.
     * @example
     * // Delete a few ExampleUsers
     * const { count } = await prisma.exampleUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExampleUserDeleteManyArgs>(args?: SelectSubset<T, ExampleUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExampleUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExampleUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExampleUsers
     * const exampleUser = await prisma.exampleUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExampleUserUpdateManyArgs>(args: SelectSubset<T, ExampleUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExampleUsers and returns the data updated in the database.
     * @param {ExampleUserUpdateManyAndReturnArgs} args - Arguments to update many ExampleUsers.
     * @example
     * // Update many ExampleUsers
     * const exampleUser = await prisma.exampleUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExampleUsers and only return the `id`
     * const exampleUserWithIdOnly = await prisma.exampleUser.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExampleUserUpdateManyAndReturnArgs>(args: SelectSubset<T, ExampleUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExampleUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExampleUser.
     * @param {ExampleUserUpsertArgs} args - Arguments to update or create a ExampleUser.
     * @example
     * // Update or create a ExampleUser
     * const exampleUser = await prisma.exampleUser.upsert({
     *   create: {
     *     // ... data to create a ExampleUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExampleUser we want to update
     *   }
     * })
     */
    upsert<T extends ExampleUserUpsertArgs>(args: SelectSubset<T, ExampleUserUpsertArgs<ExtArgs>>): Prisma__ExampleUserClient<$Result.GetResult<Prisma.$ExampleUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExampleUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExampleUserCountArgs} args - Arguments to filter ExampleUsers to count.
     * @example
     * // Count the number of ExampleUsers
     * const count = await prisma.exampleUser.count({
     *   where: {
     *     // ... the filter for the ExampleUsers we want to count
     *   }
     * })
    **/
    count<T extends ExampleUserCountArgs>(
      args?: Subset<T, ExampleUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExampleUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExampleUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExampleUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExampleUserAggregateArgs>(args: Subset<T, ExampleUserAggregateArgs>): Prisma.PrismaPromise<GetExampleUserAggregateType<T>>

    /**
     * Group by ExampleUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExampleUserGroupByArgs} args - Group by arguments.
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
      T extends ExampleUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExampleUserGroupByArgs['orderBy'] }
        : { orderBy?: ExampleUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExampleUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExampleUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExampleUser model
   */
  readonly fields: ExampleUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExampleUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExampleUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ExampleUser model
   */
  interface ExampleUserFieldRefs {
    readonly id: FieldRef<"ExampleUser", 'String'>
    readonly name: FieldRef<"ExampleUser", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ExampleUser findUnique
   */
  export type ExampleUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExampleUser
     */
    select?: ExampleUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExampleUser
     */
    omit?: ExampleUserOmit<ExtArgs> | null
    /**
     * Filter, which ExampleUser to fetch.
     */
    where: ExampleUserWhereUniqueInput
  }

  /**
   * ExampleUser findUniqueOrThrow
   */
  export type ExampleUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExampleUser
     */
    select?: ExampleUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExampleUser
     */
    omit?: ExampleUserOmit<ExtArgs> | null
    /**
     * Filter, which ExampleUser to fetch.
     */
    where: ExampleUserWhereUniqueInput
  }

  /**
   * ExampleUser findFirst
   */
  export type ExampleUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExampleUser
     */
    select?: ExampleUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExampleUser
     */
    omit?: ExampleUserOmit<ExtArgs> | null
    /**
     * Filter, which ExampleUser to fetch.
     */
    where?: ExampleUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExampleUsers to fetch.
     */
    orderBy?: ExampleUserOrderByWithRelationInput | ExampleUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExampleUsers.
     */
    cursor?: ExampleUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExampleUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExampleUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExampleUsers.
     */
    distinct?: ExampleUserScalarFieldEnum | ExampleUserScalarFieldEnum[]
  }

  /**
   * ExampleUser findFirstOrThrow
   */
  export type ExampleUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExampleUser
     */
    select?: ExampleUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExampleUser
     */
    omit?: ExampleUserOmit<ExtArgs> | null
    /**
     * Filter, which ExampleUser to fetch.
     */
    where?: ExampleUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExampleUsers to fetch.
     */
    orderBy?: ExampleUserOrderByWithRelationInput | ExampleUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExampleUsers.
     */
    cursor?: ExampleUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExampleUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExampleUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExampleUsers.
     */
    distinct?: ExampleUserScalarFieldEnum | ExampleUserScalarFieldEnum[]
  }

  /**
   * ExampleUser findMany
   */
  export type ExampleUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExampleUser
     */
    select?: ExampleUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExampleUser
     */
    omit?: ExampleUserOmit<ExtArgs> | null
    /**
     * Filter, which ExampleUsers to fetch.
     */
    where?: ExampleUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExampleUsers to fetch.
     */
    orderBy?: ExampleUserOrderByWithRelationInput | ExampleUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExampleUsers.
     */
    cursor?: ExampleUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExampleUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExampleUsers.
     */
    skip?: number
    distinct?: ExampleUserScalarFieldEnum | ExampleUserScalarFieldEnum[]
  }

  /**
   * ExampleUser create
   */
  export type ExampleUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExampleUser
     */
    select?: ExampleUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExampleUser
     */
    omit?: ExampleUserOmit<ExtArgs> | null
    /**
     * The data needed to create a ExampleUser.
     */
    data: XOR<ExampleUserCreateInput, ExampleUserUncheckedCreateInput>
  }

  /**
   * ExampleUser createMany
   */
  export type ExampleUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExampleUsers.
     */
    data: ExampleUserCreateManyInput | ExampleUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExampleUser createManyAndReturn
   */
  export type ExampleUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExampleUser
     */
    select?: ExampleUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExampleUser
     */
    omit?: ExampleUserOmit<ExtArgs> | null
    /**
     * The data used to create many ExampleUsers.
     */
    data: ExampleUserCreateManyInput | ExampleUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExampleUser update
   */
  export type ExampleUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExampleUser
     */
    select?: ExampleUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExampleUser
     */
    omit?: ExampleUserOmit<ExtArgs> | null
    /**
     * The data needed to update a ExampleUser.
     */
    data: XOR<ExampleUserUpdateInput, ExampleUserUncheckedUpdateInput>
    /**
     * Choose, which ExampleUser to update.
     */
    where: ExampleUserWhereUniqueInput
  }

  /**
   * ExampleUser updateMany
   */
  export type ExampleUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExampleUsers.
     */
    data: XOR<ExampleUserUpdateManyMutationInput, ExampleUserUncheckedUpdateManyInput>
    /**
     * Filter which ExampleUsers to update
     */
    where?: ExampleUserWhereInput
    /**
     * Limit how many ExampleUsers to update.
     */
    limit?: number
  }

  /**
   * ExampleUser updateManyAndReturn
   */
  export type ExampleUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExampleUser
     */
    select?: ExampleUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExampleUser
     */
    omit?: ExampleUserOmit<ExtArgs> | null
    /**
     * The data used to update ExampleUsers.
     */
    data: XOR<ExampleUserUpdateManyMutationInput, ExampleUserUncheckedUpdateManyInput>
    /**
     * Filter which ExampleUsers to update
     */
    where?: ExampleUserWhereInput
    /**
     * Limit how many ExampleUsers to update.
     */
    limit?: number
  }

  /**
   * ExampleUser upsert
   */
  export type ExampleUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExampleUser
     */
    select?: ExampleUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExampleUser
     */
    omit?: ExampleUserOmit<ExtArgs> | null
    /**
     * The filter to search for the ExampleUser to update in case it exists.
     */
    where: ExampleUserWhereUniqueInput
    /**
     * In case the ExampleUser found by the `where` argument doesn't exist, create a new ExampleUser with this data.
     */
    create: XOR<ExampleUserCreateInput, ExampleUserUncheckedCreateInput>
    /**
     * In case the ExampleUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExampleUserUpdateInput, ExampleUserUncheckedUpdateInput>
  }

  /**
   * ExampleUser delete
   */
  export type ExampleUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExampleUser
     */
    select?: ExampleUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExampleUser
     */
    omit?: ExampleUserOmit<ExtArgs> | null
    /**
     * Filter which ExampleUser to delete.
     */
    where: ExampleUserWhereUniqueInput
  }

  /**
   * ExampleUser deleteMany
   */
  export type ExampleUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExampleUsers to delete
     */
    where?: ExampleUserWhereInput
    /**
     * Limit how many ExampleUsers to delete.
     */
    limit?: number
  }

  /**
   * ExampleUser without action
   */
  export type ExampleUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExampleUser
     */
    select?: ExampleUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExampleUser
     */
    omit?: ExampleUserOmit<ExtArgs> | null
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


  export const ExampleUserScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ExampleUserScalarFieldEnum = (typeof ExampleUserScalarFieldEnum)[keyof typeof ExampleUserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type ExampleUserWhereInput = {
    AND?: ExampleUserWhereInput | ExampleUserWhereInput[]
    OR?: ExampleUserWhereInput[]
    NOT?: ExampleUserWhereInput | ExampleUserWhereInput[]
    id?: StringFilter<"ExampleUser"> | string
    name?: StringFilter<"ExampleUser"> | string
  }

  export type ExampleUserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ExampleUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExampleUserWhereInput | ExampleUserWhereInput[]
    OR?: ExampleUserWhereInput[]
    NOT?: ExampleUserWhereInput | ExampleUserWhereInput[]
    name?: StringFilter<"ExampleUser"> | string
  }, "id">

  export type ExampleUserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: ExampleUserCountOrderByAggregateInput
    _max?: ExampleUserMaxOrderByAggregateInput
    _min?: ExampleUserMinOrderByAggregateInput
  }

  export type ExampleUserScalarWhereWithAggregatesInput = {
    AND?: ExampleUserScalarWhereWithAggregatesInput | ExampleUserScalarWhereWithAggregatesInput[]
    OR?: ExampleUserScalarWhereWithAggregatesInput[]
    NOT?: ExampleUserScalarWhereWithAggregatesInput | ExampleUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExampleUser"> | string
    name?: StringWithAggregatesFilter<"ExampleUser"> | string
  }

  export type ExampleUserCreateInput = {
    id?: string
    name: string
  }

  export type ExampleUserUncheckedCreateInput = {
    id?: string
    name: string
  }

  export type ExampleUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ExampleUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ExampleUserCreateManyInput = {
    id?: string
    name: string
  }

  export type ExampleUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ExampleUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
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

  export type ExampleUserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ExampleUserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ExampleUserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
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