
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
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model ShoppingItem
 * 
 */
export type ShoppingItem = $Result.DefaultSelection<Prisma.$ShoppingItemPayload>
/**
 * Model LogisticsMethod
 * 
 */
export type LogisticsMethod = $Result.DefaultSelection<Prisma.$LogisticsMethodPayload>
/**
 * Model Coupon
 * 
 */
export type Coupon = $Result.DefaultSelection<Prisma.$CouponPayload>
/**
 * Model CartItem
 * 
 */
export type CartItem = $Result.DefaultSelection<Prisma.$CartItemPayload>
/**
 * Model Recipient
 * 
 */
export type Recipient = $Result.DefaultSelection<Prisma.$RecipientPayload>
/**
 * Model GoodsDelivery
 * 
 */
export type GoodsDelivery = $Result.DefaultSelection<Prisma.$GoodsDeliveryPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs>;

  /**
   * `prisma.shoppingItem`: Exposes CRUD operations for the **ShoppingItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShoppingItems
    * const shoppingItems = await prisma.shoppingItem.findMany()
    * ```
    */
  get shoppingItem(): Prisma.ShoppingItemDelegate<ExtArgs>;

  /**
   * `prisma.logisticsMethod`: Exposes CRUD operations for the **LogisticsMethod** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LogisticsMethods
    * const logisticsMethods = await prisma.logisticsMethod.findMany()
    * ```
    */
  get logisticsMethod(): Prisma.LogisticsMethodDelegate<ExtArgs>;

  /**
   * `prisma.coupon`: Exposes CRUD operations for the **Coupon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Coupons
    * const coupons = await prisma.coupon.findMany()
    * ```
    */
  get coupon(): Prisma.CouponDelegate<ExtArgs>;

  /**
   * `prisma.cartItem`: Exposes CRUD operations for the **CartItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CartItems
    * const cartItems = await prisma.cartItem.findMany()
    * ```
    */
  get cartItem(): Prisma.CartItemDelegate<ExtArgs>;

  /**
   * `prisma.recipient`: Exposes CRUD operations for the **Recipient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recipients
    * const recipients = await prisma.recipient.findMany()
    * ```
    */
  get recipient(): Prisma.RecipientDelegate<ExtArgs>;

  /**
   * `prisma.goodsDelivery`: Exposes CRUD operations for the **GoodsDelivery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GoodsDeliveries
    * const goodsDeliveries = await prisma.goodsDelivery.findMany()
    * ```
    */
  get goodsDelivery(): Prisma.GoodsDeliveryDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.10.2
   * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Account: 'Account',
    Session: 'Session',
    User: 'User',
    Address: 'Address',
    VerificationToken: 'VerificationToken',
    ShoppingItem: 'ShoppingItem',
    LogisticsMethod: 'LogisticsMethod',
    Coupon: 'Coupon',
    CartItem: 'CartItem',
    Recipient: 'Recipient',
    GoodsDelivery: 'GoodsDelivery'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'account' | 'session' | 'user' | 'address' | 'verificationToken' | 'shoppingItem' | 'logisticsMethod' | 'coupon' | 'cartItem' | 'recipient' | 'goodsDelivery'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>,
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>,
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>,
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>,
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      ShoppingItem: {
        payload: Prisma.$ShoppingItemPayload<ExtArgs>
        fields: Prisma.ShoppingItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShoppingItemFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShoppingItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShoppingItemFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShoppingItemPayload>
          }
          findFirst: {
            args: Prisma.ShoppingItemFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShoppingItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShoppingItemFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShoppingItemPayload>
          }
          findMany: {
            args: Prisma.ShoppingItemFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShoppingItemPayload>[]
          }
          create: {
            args: Prisma.ShoppingItemCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShoppingItemPayload>
          }
          createMany: {
            args: Prisma.ShoppingItemCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ShoppingItemDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShoppingItemPayload>
          }
          update: {
            args: Prisma.ShoppingItemUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShoppingItemPayload>
          }
          deleteMany: {
            args: Prisma.ShoppingItemDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ShoppingItemUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ShoppingItemUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShoppingItemPayload>
          }
          aggregate: {
            args: Prisma.ShoppingItemAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateShoppingItem>
          }
          groupBy: {
            args: Prisma.ShoppingItemGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ShoppingItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShoppingItemCountArgs<ExtArgs>,
            result: $Utils.Optional<ShoppingItemCountAggregateOutputType> | number
          }
        }
      }
      LogisticsMethod: {
        payload: Prisma.$LogisticsMethodPayload<ExtArgs>
        fields: Prisma.LogisticsMethodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogisticsMethodFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogisticsMethodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogisticsMethodFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogisticsMethodPayload>
          }
          findFirst: {
            args: Prisma.LogisticsMethodFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogisticsMethodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogisticsMethodFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogisticsMethodPayload>
          }
          findMany: {
            args: Prisma.LogisticsMethodFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogisticsMethodPayload>[]
          }
          create: {
            args: Prisma.LogisticsMethodCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogisticsMethodPayload>
          }
          createMany: {
            args: Prisma.LogisticsMethodCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LogisticsMethodDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogisticsMethodPayload>
          }
          update: {
            args: Prisma.LogisticsMethodUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogisticsMethodPayload>
          }
          deleteMany: {
            args: Prisma.LogisticsMethodDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LogisticsMethodUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LogisticsMethodUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogisticsMethodPayload>
          }
          aggregate: {
            args: Prisma.LogisticsMethodAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLogisticsMethod>
          }
          groupBy: {
            args: Prisma.LogisticsMethodGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LogisticsMethodGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogisticsMethodCountArgs<ExtArgs>,
            result: $Utils.Optional<LogisticsMethodCountAggregateOutputType> | number
          }
        }
      }
      Coupon: {
        payload: Prisma.$CouponPayload<ExtArgs>
        fields: Prisma.CouponFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CouponFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CouponPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CouponFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          findFirst: {
            args: Prisma.CouponFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CouponPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CouponFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          findMany: {
            args: Prisma.CouponFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>[]
          }
          create: {
            args: Prisma.CouponCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          createMany: {
            args: Prisma.CouponCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CouponDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          update: {
            args: Prisma.CouponUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          deleteMany: {
            args: Prisma.CouponDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CouponUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CouponUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          aggregate: {
            args: Prisma.CouponAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCoupon>
          }
          groupBy: {
            args: Prisma.CouponGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CouponGroupByOutputType>[]
          }
          count: {
            args: Prisma.CouponCountArgs<ExtArgs>,
            result: $Utils.Optional<CouponCountAggregateOutputType> | number
          }
        }
      }
      CartItem: {
        payload: Prisma.$CartItemPayload<ExtArgs>
        fields: Prisma.CartItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartItemFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartItemFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          findFirst: {
            args: Prisma.CartItemFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartItemFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          findMany: {
            args: Prisma.CartItemFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>[]
          }
          create: {
            args: Prisma.CartItemCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          createMany: {
            args: Prisma.CartItemCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CartItemDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          update: {
            args: Prisma.CartItemUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          deleteMany: {
            args: Prisma.CartItemDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CartItemUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CartItemUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          aggregate: {
            args: Prisma.CartItemAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCartItem>
          }
          groupBy: {
            args: Prisma.CartItemGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CartItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartItemCountArgs<ExtArgs>,
            result: $Utils.Optional<CartItemCountAggregateOutputType> | number
          }
        }
      }
      Recipient: {
        payload: Prisma.$RecipientPayload<ExtArgs>
        fields: Prisma.RecipientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecipientFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RecipientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecipientFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RecipientPayload>
          }
          findFirst: {
            args: Prisma.RecipientFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RecipientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecipientFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RecipientPayload>
          }
          findMany: {
            args: Prisma.RecipientFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RecipientPayload>[]
          }
          create: {
            args: Prisma.RecipientCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RecipientPayload>
          }
          createMany: {
            args: Prisma.RecipientCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RecipientDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RecipientPayload>
          }
          update: {
            args: Prisma.RecipientUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RecipientPayload>
          }
          deleteMany: {
            args: Prisma.RecipientDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RecipientUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RecipientUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RecipientPayload>
          }
          aggregate: {
            args: Prisma.RecipientAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRecipient>
          }
          groupBy: {
            args: Prisma.RecipientGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RecipientGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecipientCountArgs<ExtArgs>,
            result: $Utils.Optional<RecipientCountAggregateOutputType> | number
          }
        }
      }
      GoodsDelivery: {
        payload: Prisma.$GoodsDeliveryPayload<ExtArgs>
        fields: Prisma.GoodsDeliveryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GoodsDeliveryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoodsDeliveryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GoodsDeliveryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoodsDeliveryPayload>
          }
          findFirst: {
            args: Prisma.GoodsDeliveryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoodsDeliveryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GoodsDeliveryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoodsDeliveryPayload>
          }
          findMany: {
            args: Prisma.GoodsDeliveryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoodsDeliveryPayload>[]
          }
          create: {
            args: Prisma.GoodsDeliveryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoodsDeliveryPayload>
          }
          createMany: {
            args: Prisma.GoodsDeliveryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GoodsDeliveryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoodsDeliveryPayload>
          }
          update: {
            args: Prisma.GoodsDeliveryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoodsDeliveryPayload>
          }
          deleteMany: {
            args: Prisma.GoodsDeliveryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GoodsDeliveryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GoodsDeliveryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoodsDeliveryPayload>
          }
          aggregate: {
            args: Prisma.GoodsDeliveryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGoodsDelivery>
          }
          groupBy: {
            args: Prisma.GoodsDeliveryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GoodsDeliveryGroupByOutputType>[]
          }
          count: {
            args: Prisma.GoodsDeliveryCountArgs<ExtArgs>,
            result: $Utils.Optional<GoodsDeliveryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'update'
    | 'updateMany'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
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
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }



  /**
   * Count Type AddressCountOutputType
   */

  export type AddressCountOutputType = {
    Recipient: number
  }

  export type AddressCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Recipient?: boolean | AddressCountOutputTypeCountRecipientArgs
  }

  // Custom InputTypes

  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressCountOutputType
     */
    select?: AddressCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeCountRecipientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipientWhereInput
  }



  /**
   * Count Type ShoppingItemCountOutputType
   */

  export type ShoppingItemCountOutputType = {
    cartItem: number
  }

  export type ShoppingItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cartItem?: boolean | ShoppingItemCountOutputTypeCountCartItemArgs
  }

  // Custom InputTypes

  /**
   * ShoppingItemCountOutputType without action
   */
  export type ShoppingItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingItemCountOutputType
     */
    select?: ShoppingItemCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ShoppingItemCountOutputType without action
   */
  export type ShoppingItemCountOutputTypeCountCartItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
  }



  /**
   * Count Type LogisticsMethodCountOutputType
   */

  export type LogisticsMethodCountOutputType = {
    goodsDelivery: number
    recipient: number
  }

  export type LogisticsMethodCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    goodsDelivery?: boolean | LogisticsMethodCountOutputTypeCountGoodsDeliveryArgs
    recipient?: boolean | LogisticsMethodCountOutputTypeCountRecipientArgs
  }

  // Custom InputTypes

  /**
   * LogisticsMethodCountOutputType without action
   */
  export type LogisticsMethodCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsMethodCountOutputType
     */
    select?: LogisticsMethodCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * LogisticsMethodCountOutputType without action
   */
  export type LogisticsMethodCountOutputTypeCountGoodsDeliveryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoodsDeliveryWhereInput
  }


  /**
   * LogisticsMethodCountOutputType without action
   */
  export type LogisticsMethodCountOutputTypeCountRecipientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipientWhereInput
  }



  /**
   * Count Type CouponCountOutputType
   */

  export type CouponCountOutputType = {
    GoodsDelivery: number
  }

  export type CouponCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    GoodsDelivery?: boolean | CouponCountOutputTypeCountGoodsDeliveryArgs
  }

  // Custom InputTypes

  /**
   * CouponCountOutputType without action
   */
  export type CouponCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponCountOutputType
     */
    select?: CouponCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CouponCountOutputType without action
   */
  export type CouponCountOutputTypeCountGoodsDeliveryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoodsDeliveryWhereInput
  }



  /**
   * Count Type RecipientCountOutputType
   */

  export type RecipientCountOutputType = {
    favLogistics: number
    historyOrder: number
  }

  export type RecipientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favLogistics?: boolean | RecipientCountOutputTypeCountFavLogisticsArgs
    historyOrder?: boolean | RecipientCountOutputTypeCountHistoryOrderArgs
  }

  // Custom InputTypes

  /**
   * RecipientCountOutputType without action
   */
  export type RecipientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipientCountOutputType
     */
    select?: RecipientCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * RecipientCountOutputType without action
   */
  export type RecipientCountOutputTypeCountFavLogisticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogisticsMethodWhereInput
  }


  /**
   * RecipientCountOutputType without action
   */
  export type RecipientCountOutputTypeCountHistoryOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoodsDeliveryWhereInput
  }



  /**
   * Count Type GoodsDeliveryCountOutputType
   */

  export type GoodsDeliveryCountOutputType = {
    cartItem: number
  }

  export type GoodsDeliveryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cartItem?: boolean | GoodsDeliveryCountOutputTypeCountCartItemArgs
  }

  // Custom InputTypes

  /**
   * GoodsDeliveryCountOutputType without action
   */
  export type GoodsDeliveryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoodsDeliveryCountOutputType
     */
    select?: GoodsDeliveryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * GoodsDeliveryCountOutputType without action
   */
  export type GoodsDeliveryCountOutputTypeCountCartItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
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
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
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
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
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
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }


  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends AccountFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Account that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends AccountFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends AccountFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends AccountCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountCreateArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Accounts.
     *     @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     *     @example
     *     // Create many Accounts
     *     const account = await prisma.account.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AccountCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends AccountDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends AccountUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends AccountDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends AccountUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends AccountUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Account model
   */ 
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
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
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
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
    sessionToken: string
    userId: string
    expires: Date
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
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }


  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends SessionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Session that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends SessionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends SessionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends SessionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionCreateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Sessions.
     *     @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     *     @example
     *     // Create many Sessions
     *     const session = await prisma.session.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SessionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends SessionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends SessionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends SessionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends SessionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends SessionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Session model
   */ 
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
  }



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
    emailVerified: Date | null
    image: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
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
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
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
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findMany'> | Null>;

    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
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
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressMinAggregateOutputType = {
    id: string | null
    city: string | null
    district: string | null
    street: string | null
  }

  export type AddressMaxAggregateOutputType = {
    id: string | null
    city: string | null
    district: string | null
    street: string | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    city: number
    district: number
    street: number
    _all: number
  }


  export type AddressMinAggregateInputType = {
    id?: true
    city?: true
    district?: true
    street?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    city?: true
    district?: true
    street?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    city?: true
    district?: true
    street?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: string
    city: string
    district: string
    street: string
    _count: AddressCountAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    city?: boolean
    district?: boolean
    street?: boolean
    Recipient?: boolean | Address$RecipientArgs<ExtArgs>
    _count?: boolean | AddressCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectScalar = {
    id?: boolean
    city?: boolean
    district?: boolean
    street?: boolean
  }

  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Recipient?: boolean | Address$RecipientArgs<ExtArgs>
    _count?: boolean | AddressCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      Recipient: Prisma.$RecipientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      city: string
      district: string
      street: string
    }, ExtArgs["result"]["address"]>
    composites: {}
  }


  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AddressFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>
    ): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Address that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AddressFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>
    ): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AddressFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
    **/
    create<T extends AddressCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AddressCreateArgs<ExtArgs>>
    ): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Addresses.
     *     @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     *     @example
     *     // Create many Addresses
     *     const address = await prisma.address.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AddressCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
    **/
    delete<T extends AddressDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>
    ): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AddressUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>
    ): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AddressDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AddressUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
    **/
    upsert<T extends AddressUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>
    ): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
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
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Recipient<T extends Address$RecipientArgs<ExtArgs> = {}>(args?: Subset<T, Address$RecipientArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipientPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Address model
   */ 
  interface AddressFieldRefs {
    readonly id: FieldRef<"Address", 'String'>
    readonly city: FieldRef<"Address", 'String'>
    readonly district: FieldRef<"Address", 'String'>
    readonly street: FieldRef<"Address", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }


  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }


  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }


  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }


  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }


  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }


  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }


  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
  }


  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }


  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }


  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
  }


  /**
   * Address.Recipient
   */
  export type Address$RecipientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipient
     */
    select?: RecipientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipientInclude<ExtArgs> | null
    where?: RecipientWhereInput
    orderBy?: RecipientOrderByWithRelationInput | RecipientOrderByWithRelationInput[]
    cursor?: RecipientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipientScalarFieldEnum | RecipientScalarFieldEnum[]
  }


  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
  }



  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }


  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }


  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VerificationTokenFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one VerificationToken that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VerificationTokenFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
    **/
    findMany<T extends VerificationTokenFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
    **/
    create<T extends VerificationTokenCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many VerificationTokens.
     *     @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     *     @example
     *     // Create many VerificationTokens
     *     const verificationToken = await prisma.verificationToken.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VerificationTokenCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
    **/
    delete<T extends VerificationTokenDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VerificationTokenUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VerificationTokenDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VerificationTokenUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
    **/
    upsert<T extends VerificationTokenUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the VerificationToken model
   */ 
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }


  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }


  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }


  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }


  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
  }


  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }


  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
  }


  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
  }



  /**
   * Model ShoppingItem
   */

  export type AggregateShoppingItem = {
    _count: ShoppingItemCountAggregateOutputType | null
    _avg: ShoppingItemAvgAggregateOutputType | null
    _sum: ShoppingItemSumAggregateOutputType | null
    _min: ShoppingItemMinAggregateOutputType | null
    _max: ShoppingItemMaxAggregateOutputType | null
  }

  export type ShoppingItemAvgAggregateOutputType = {
    itemPrice: number | null
    itemSpecialPrice: number | null
    itemAvailableQuantity: number | null
  }

  export type ShoppingItemSumAggregateOutputType = {
    itemPrice: number | null
    itemSpecialPrice: number | null
    itemAvailableQuantity: number | null
  }

  export type ShoppingItemMinAggregateOutputType = {
    id: string | null
    itemName: string | null
    itemSubtitle: string | null
    itemDescription: string | null
    imageSrc: string | null
    imageAlt: string | null
    itemPrice: number | null
    itemSpecialPrice: number | null
    itemAvailableQuantity: number | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type ShoppingItemMaxAggregateOutputType = {
    id: string | null
    itemName: string | null
    itemSubtitle: string | null
    itemDescription: string | null
    imageSrc: string | null
    imageAlt: string | null
    itemPrice: number | null
    itemSpecialPrice: number | null
    itemAvailableQuantity: number | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type ShoppingItemCountAggregateOutputType = {
    id: number
    itemName: number
    itemSubtitle: number
    itemDescription: number
    imageSrc: number
    imageAlt: number
    itemPrice: number
    itemSpecialPrice: number
    itemAvailableQuantity: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type ShoppingItemAvgAggregateInputType = {
    itemPrice?: true
    itemSpecialPrice?: true
    itemAvailableQuantity?: true
  }

  export type ShoppingItemSumAggregateInputType = {
    itemPrice?: true
    itemSpecialPrice?: true
    itemAvailableQuantity?: true
  }

  export type ShoppingItemMinAggregateInputType = {
    id?: true
    itemName?: true
    itemSubtitle?: true
    itemDescription?: true
    imageSrc?: true
    imageAlt?: true
    itemPrice?: true
    itemSpecialPrice?: true
    itemAvailableQuantity?: true
    updatedAt?: true
    createdAt?: true
  }

  export type ShoppingItemMaxAggregateInputType = {
    id?: true
    itemName?: true
    itemSubtitle?: true
    itemDescription?: true
    imageSrc?: true
    imageAlt?: true
    itemPrice?: true
    itemSpecialPrice?: true
    itemAvailableQuantity?: true
    updatedAt?: true
    createdAt?: true
  }

  export type ShoppingItemCountAggregateInputType = {
    id?: true
    itemName?: true
    itemSubtitle?: true
    itemDescription?: true
    imageSrc?: true
    imageAlt?: true
    itemPrice?: true
    itemSpecialPrice?: true
    itemAvailableQuantity?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type ShoppingItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShoppingItem to aggregate.
     */
    where?: ShoppingItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingItems to fetch.
     */
    orderBy?: ShoppingItemOrderByWithRelationInput | ShoppingItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShoppingItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShoppingItems
    **/
    _count?: true | ShoppingItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShoppingItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShoppingItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShoppingItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShoppingItemMaxAggregateInputType
  }

  export type GetShoppingItemAggregateType<T extends ShoppingItemAggregateArgs> = {
        [P in keyof T & keyof AggregateShoppingItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShoppingItem[P]>
      : GetScalarType<T[P], AggregateShoppingItem[P]>
  }




  export type ShoppingItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShoppingItemWhereInput
    orderBy?: ShoppingItemOrderByWithAggregationInput | ShoppingItemOrderByWithAggregationInput[]
    by: ShoppingItemScalarFieldEnum[] | ShoppingItemScalarFieldEnum
    having?: ShoppingItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShoppingItemCountAggregateInputType | true
    _avg?: ShoppingItemAvgAggregateInputType
    _sum?: ShoppingItemSumAggregateInputType
    _min?: ShoppingItemMinAggregateInputType
    _max?: ShoppingItemMaxAggregateInputType
  }

  export type ShoppingItemGroupByOutputType = {
    id: string
    itemName: string
    itemSubtitle: string
    itemDescription: string
    imageSrc: string
    imageAlt: string
    itemPrice: number
    itemSpecialPrice: number | null
    itemAvailableQuantity: number
    updatedAt: Date
    createdAt: Date
    _count: ShoppingItemCountAggregateOutputType | null
    _avg: ShoppingItemAvgAggregateOutputType | null
    _sum: ShoppingItemSumAggregateOutputType | null
    _min: ShoppingItemMinAggregateOutputType | null
    _max: ShoppingItemMaxAggregateOutputType | null
  }

  type GetShoppingItemGroupByPayload<T extends ShoppingItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShoppingItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShoppingItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShoppingItemGroupByOutputType[P]>
            : GetScalarType<T[P], ShoppingItemGroupByOutputType[P]>
        }
      >
    >


  export type ShoppingItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemName?: boolean
    itemSubtitle?: boolean
    itemDescription?: boolean
    imageSrc?: boolean
    imageAlt?: boolean
    itemPrice?: boolean
    itemSpecialPrice?: boolean
    itemAvailableQuantity?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    cartItem?: boolean | ShoppingItem$cartItemArgs<ExtArgs>
    _count?: boolean | ShoppingItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shoppingItem"]>

  export type ShoppingItemSelectScalar = {
    id?: boolean
    itemName?: boolean
    itemSubtitle?: boolean
    itemDescription?: boolean
    imageSrc?: boolean
    imageAlt?: boolean
    itemPrice?: boolean
    itemSpecialPrice?: boolean
    itemAvailableQuantity?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }

  export type ShoppingItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cartItem?: boolean | ShoppingItem$cartItemArgs<ExtArgs>
    _count?: boolean | ShoppingItemCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ShoppingItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShoppingItem"
    objects: {
      cartItem: Prisma.$CartItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      itemName: string
      itemSubtitle: string
      itemDescription: string
      imageSrc: string
      imageAlt: string
      itemPrice: number
      itemSpecialPrice: number | null
      itemAvailableQuantity: number
      updatedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["shoppingItem"]>
    composites: {}
  }


  type ShoppingItemGetPayload<S extends boolean | null | undefined | ShoppingItemDefaultArgs> = $Result.GetResult<Prisma.$ShoppingItemPayload, S>

  type ShoppingItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ShoppingItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ShoppingItemCountAggregateInputType | true
    }

  export interface ShoppingItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShoppingItem'], meta: { name: 'ShoppingItem' } }
    /**
     * Find zero or one ShoppingItem that matches the filter.
     * @param {ShoppingItemFindUniqueArgs} args - Arguments to find a ShoppingItem
     * @example
     * // Get one ShoppingItem
     * const shoppingItem = await prisma.shoppingItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ShoppingItemFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ShoppingItemFindUniqueArgs<ExtArgs>>
    ): Prisma__ShoppingItemClient<$Result.GetResult<Prisma.$ShoppingItemPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ShoppingItem that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ShoppingItemFindUniqueOrThrowArgs} args - Arguments to find a ShoppingItem
     * @example
     * // Get one ShoppingItem
     * const shoppingItem = await prisma.shoppingItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ShoppingItemFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ShoppingItemFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ShoppingItemClient<$Result.GetResult<Prisma.$ShoppingItemPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ShoppingItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingItemFindFirstArgs} args - Arguments to find a ShoppingItem
     * @example
     * // Get one ShoppingItem
     * const shoppingItem = await prisma.shoppingItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ShoppingItemFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ShoppingItemFindFirstArgs<ExtArgs>>
    ): Prisma__ShoppingItemClient<$Result.GetResult<Prisma.$ShoppingItemPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ShoppingItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingItemFindFirstOrThrowArgs} args - Arguments to find a ShoppingItem
     * @example
     * // Get one ShoppingItem
     * const shoppingItem = await prisma.shoppingItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ShoppingItemFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ShoppingItemFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ShoppingItemClient<$Result.GetResult<Prisma.$ShoppingItemPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ShoppingItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingItemFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShoppingItems
     * const shoppingItems = await prisma.shoppingItem.findMany()
     * 
     * // Get first 10 ShoppingItems
     * const shoppingItems = await prisma.shoppingItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shoppingItemWithIdOnly = await prisma.shoppingItem.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ShoppingItemFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ShoppingItemFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingItemPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ShoppingItem.
     * @param {ShoppingItemCreateArgs} args - Arguments to create a ShoppingItem.
     * @example
     * // Create one ShoppingItem
     * const ShoppingItem = await prisma.shoppingItem.create({
     *   data: {
     *     // ... data to create a ShoppingItem
     *   }
     * })
     * 
    **/
    create<T extends ShoppingItemCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ShoppingItemCreateArgs<ExtArgs>>
    ): Prisma__ShoppingItemClient<$Result.GetResult<Prisma.$ShoppingItemPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ShoppingItems.
     *     @param {ShoppingItemCreateManyArgs} args - Arguments to create many ShoppingItems.
     *     @example
     *     // Create many ShoppingItems
     *     const shoppingItem = await prisma.shoppingItem.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ShoppingItemCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ShoppingItemCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ShoppingItem.
     * @param {ShoppingItemDeleteArgs} args - Arguments to delete one ShoppingItem.
     * @example
     * // Delete one ShoppingItem
     * const ShoppingItem = await prisma.shoppingItem.delete({
     *   where: {
     *     // ... filter to delete one ShoppingItem
     *   }
     * })
     * 
    **/
    delete<T extends ShoppingItemDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ShoppingItemDeleteArgs<ExtArgs>>
    ): Prisma__ShoppingItemClient<$Result.GetResult<Prisma.$ShoppingItemPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ShoppingItem.
     * @param {ShoppingItemUpdateArgs} args - Arguments to update one ShoppingItem.
     * @example
     * // Update one ShoppingItem
     * const shoppingItem = await prisma.shoppingItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ShoppingItemUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ShoppingItemUpdateArgs<ExtArgs>>
    ): Prisma__ShoppingItemClient<$Result.GetResult<Prisma.$ShoppingItemPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ShoppingItems.
     * @param {ShoppingItemDeleteManyArgs} args - Arguments to filter ShoppingItems to delete.
     * @example
     * // Delete a few ShoppingItems
     * const { count } = await prisma.shoppingItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ShoppingItemDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ShoppingItemDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShoppingItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShoppingItems
     * const shoppingItem = await prisma.shoppingItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ShoppingItemUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ShoppingItemUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ShoppingItem.
     * @param {ShoppingItemUpsertArgs} args - Arguments to update or create a ShoppingItem.
     * @example
     * // Update or create a ShoppingItem
     * const shoppingItem = await prisma.shoppingItem.upsert({
     *   create: {
     *     // ... data to create a ShoppingItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShoppingItem we want to update
     *   }
     * })
    **/
    upsert<T extends ShoppingItemUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ShoppingItemUpsertArgs<ExtArgs>>
    ): Prisma__ShoppingItemClient<$Result.GetResult<Prisma.$ShoppingItemPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ShoppingItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingItemCountArgs} args - Arguments to filter ShoppingItems to count.
     * @example
     * // Count the number of ShoppingItems
     * const count = await prisma.shoppingItem.count({
     *   where: {
     *     // ... the filter for the ShoppingItems we want to count
     *   }
     * })
    **/
    count<T extends ShoppingItemCountArgs>(
      args?: Subset<T, ShoppingItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShoppingItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShoppingItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShoppingItemAggregateArgs>(args: Subset<T, ShoppingItemAggregateArgs>): Prisma.PrismaPromise<GetShoppingItemAggregateType<T>>

    /**
     * Group by ShoppingItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingItemGroupByArgs} args - Group by arguments.
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
      T extends ShoppingItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShoppingItemGroupByArgs['orderBy'] }
        : { orderBy?: ShoppingItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShoppingItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShoppingItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShoppingItem model
   */
  readonly fields: ShoppingItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShoppingItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShoppingItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    cartItem<T extends ShoppingItem$cartItemArgs<ExtArgs> = {}>(args?: Subset<T, ShoppingItem$cartItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ShoppingItem model
   */ 
  interface ShoppingItemFieldRefs {
    readonly id: FieldRef<"ShoppingItem", 'String'>
    readonly itemName: FieldRef<"ShoppingItem", 'String'>
    readonly itemSubtitle: FieldRef<"ShoppingItem", 'String'>
    readonly itemDescription: FieldRef<"ShoppingItem", 'String'>
    readonly imageSrc: FieldRef<"ShoppingItem", 'String'>
    readonly imageAlt: FieldRef<"ShoppingItem", 'String'>
    readonly itemPrice: FieldRef<"ShoppingItem", 'Int'>
    readonly itemSpecialPrice: FieldRef<"ShoppingItem", 'Int'>
    readonly itemAvailableQuantity: FieldRef<"ShoppingItem", 'Int'>
    readonly updatedAt: FieldRef<"ShoppingItem", 'DateTime'>
    readonly createdAt: FieldRef<"ShoppingItem", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * ShoppingItem findUnique
   */
  export type ShoppingItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingItem
     */
    select?: ShoppingItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShoppingItemInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingItem to fetch.
     */
    where: ShoppingItemWhereUniqueInput
  }


  /**
   * ShoppingItem findUniqueOrThrow
   */
  export type ShoppingItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingItem
     */
    select?: ShoppingItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShoppingItemInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingItem to fetch.
     */
    where: ShoppingItemWhereUniqueInput
  }


  /**
   * ShoppingItem findFirst
   */
  export type ShoppingItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingItem
     */
    select?: ShoppingItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShoppingItemInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingItem to fetch.
     */
    where?: ShoppingItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingItems to fetch.
     */
    orderBy?: ShoppingItemOrderByWithRelationInput | ShoppingItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShoppingItems.
     */
    cursor?: ShoppingItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShoppingItems.
     */
    distinct?: ShoppingItemScalarFieldEnum | ShoppingItemScalarFieldEnum[]
  }


  /**
   * ShoppingItem findFirstOrThrow
   */
  export type ShoppingItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingItem
     */
    select?: ShoppingItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShoppingItemInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingItem to fetch.
     */
    where?: ShoppingItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingItems to fetch.
     */
    orderBy?: ShoppingItemOrderByWithRelationInput | ShoppingItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShoppingItems.
     */
    cursor?: ShoppingItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShoppingItems.
     */
    distinct?: ShoppingItemScalarFieldEnum | ShoppingItemScalarFieldEnum[]
  }


  /**
   * ShoppingItem findMany
   */
  export type ShoppingItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingItem
     */
    select?: ShoppingItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShoppingItemInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingItems to fetch.
     */
    where?: ShoppingItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingItems to fetch.
     */
    orderBy?: ShoppingItemOrderByWithRelationInput | ShoppingItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShoppingItems.
     */
    cursor?: ShoppingItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingItems.
     */
    skip?: number
    distinct?: ShoppingItemScalarFieldEnum | ShoppingItemScalarFieldEnum[]
  }


  /**
   * ShoppingItem create
   */
  export type ShoppingItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingItem
     */
    select?: ShoppingItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShoppingItemInclude<ExtArgs> | null
    /**
     * The data needed to create a ShoppingItem.
     */
    data: XOR<ShoppingItemCreateInput, ShoppingItemUncheckedCreateInput>
  }


  /**
   * ShoppingItem createMany
   */
  export type ShoppingItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShoppingItems.
     */
    data: ShoppingItemCreateManyInput | ShoppingItemCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ShoppingItem update
   */
  export type ShoppingItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingItem
     */
    select?: ShoppingItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShoppingItemInclude<ExtArgs> | null
    /**
     * The data needed to update a ShoppingItem.
     */
    data: XOR<ShoppingItemUpdateInput, ShoppingItemUncheckedUpdateInput>
    /**
     * Choose, which ShoppingItem to update.
     */
    where: ShoppingItemWhereUniqueInput
  }


  /**
   * ShoppingItem updateMany
   */
  export type ShoppingItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShoppingItems.
     */
    data: XOR<ShoppingItemUpdateManyMutationInput, ShoppingItemUncheckedUpdateManyInput>
    /**
     * Filter which ShoppingItems to update
     */
    where?: ShoppingItemWhereInput
  }


  /**
   * ShoppingItem upsert
   */
  export type ShoppingItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingItem
     */
    select?: ShoppingItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShoppingItemInclude<ExtArgs> | null
    /**
     * The filter to search for the ShoppingItem to update in case it exists.
     */
    where: ShoppingItemWhereUniqueInput
    /**
     * In case the ShoppingItem found by the `where` argument doesn't exist, create a new ShoppingItem with this data.
     */
    create: XOR<ShoppingItemCreateInput, ShoppingItemUncheckedCreateInput>
    /**
     * In case the ShoppingItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShoppingItemUpdateInput, ShoppingItemUncheckedUpdateInput>
  }


  /**
   * ShoppingItem delete
   */
  export type ShoppingItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingItem
     */
    select?: ShoppingItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShoppingItemInclude<ExtArgs> | null
    /**
     * Filter which ShoppingItem to delete.
     */
    where: ShoppingItemWhereUniqueInput
  }


  /**
   * ShoppingItem deleteMany
   */
  export type ShoppingItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShoppingItems to delete
     */
    where?: ShoppingItemWhereInput
  }


  /**
   * ShoppingItem.cartItem
   */
  export type ShoppingItem$cartItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartItemInclude<ExtArgs> | null
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    cursor?: CartItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }


  /**
   * ShoppingItem without action
   */
  export type ShoppingItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingItem
     */
    select?: ShoppingItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShoppingItemInclude<ExtArgs> | null
  }



  /**
   * Model LogisticsMethod
   */

  export type AggregateLogisticsMethod = {
    _count: LogisticsMethodCountAggregateOutputType | null
    _avg: LogisticsMethodAvgAggregateOutputType | null
    _sum: LogisticsMethodSumAggregateOutputType | null
    _min: LogisticsMethodMinAggregateOutputType | null
    _max: LogisticsMethodMaxAggregateOutputType | null
  }

  export type LogisticsMethodAvgAggregateOutputType = {
    freight: number | null
    payment: number | null
  }

  export type LogisticsMethodSumAggregateOutputType = {
    freight: number | null
    payment: number | null
  }

  export type LogisticsMethodMinAggregateOutputType = {
    id: string | null
    logisticsType: string | null
    logisticsMode: string | null
    logisticsName: string | null
    freight: number | null
    payment: number | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type LogisticsMethodMaxAggregateOutputType = {
    id: string | null
    logisticsType: string | null
    logisticsMode: string | null
    logisticsName: string | null
    freight: number | null
    payment: number | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type LogisticsMethodCountAggregateOutputType = {
    id: number
    logisticsType: number
    logisticsMode: number
    logisticsName: number
    freight: number
    payment: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type LogisticsMethodAvgAggregateInputType = {
    freight?: true
    payment?: true
  }

  export type LogisticsMethodSumAggregateInputType = {
    freight?: true
    payment?: true
  }

  export type LogisticsMethodMinAggregateInputType = {
    id?: true
    logisticsType?: true
    logisticsMode?: true
    logisticsName?: true
    freight?: true
    payment?: true
    updatedAt?: true
    createdAt?: true
  }

  export type LogisticsMethodMaxAggregateInputType = {
    id?: true
    logisticsType?: true
    logisticsMode?: true
    logisticsName?: true
    freight?: true
    payment?: true
    updatedAt?: true
    createdAt?: true
  }

  export type LogisticsMethodCountAggregateInputType = {
    id?: true
    logisticsType?: true
    logisticsMode?: true
    logisticsName?: true
    freight?: true
    payment?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type LogisticsMethodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogisticsMethod to aggregate.
     */
    where?: LogisticsMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogisticsMethods to fetch.
     */
    orderBy?: LogisticsMethodOrderByWithRelationInput | LogisticsMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogisticsMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogisticsMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogisticsMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LogisticsMethods
    **/
    _count?: true | LogisticsMethodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LogisticsMethodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LogisticsMethodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogisticsMethodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogisticsMethodMaxAggregateInputType
  }

  export type GetLogisticsMethodAggregateType<T extends LogisticsMethodAggregateArgs> = {
        [P in keyof T & keyof AggregateLogisticsMethod]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogisticsMethod[P]>
      : GetScalarType<T[P], AggregateLogisticsMethod[P]>
  }




  export type LogisticsMethodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogisticsMethodWhereInput
    orderBy?: LogisticsMethodOrderByWithAggregationInput | LogisticsMethodOrderByWithAggregationInput[]
    by: LogisticsMethodScalarFieldEnum[] | LogisticsMethodScalarFieldEnum
    having?: LogisticsMethodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogisticsMethodCountAggregateInputType | true
    _avg?: LogisticsMethodAvgAggregateInputType
    _sum?: LogisticsMethodSumAggregateInputType
    _min?: LogisticsMethodMinAggregateInputType
    _max?: LogisticsMethodMaxAggregateInputType
  }

  export type LogisticsMethodGroupByOutputType = {
    id: string
    logisticsType: string
    logisticsMode: string
    logisticsName: string
    freight: number
    payment: number
    updatedAt: Date
    createdAt: Date
    _count: LogisticsMethodCountAggregateOutputType | null
    _avg: LogisticsMethodAvgAggregateOutputType | null
    _sum: LogisticsMethodSumAggregateOutputType | null
    _min: LogisticsMethodMinAggregateOutputType | null
    _max: LogisticsMethodMaxAggregateOutputType | null
  }

  type GetLogisticsMethodGroupByPayload<T extends LogisticsMethodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogisticsMethodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogisticsMethodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogisticsMethodGroupByOutputType[P]>
            : GetScalarType<T[P], LogisticsMethodGroupByOutputType[P]>
        }
      >
    >


  export type LogisticsMethodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    logisticsType?: boolean
    logisticsMode?: boolean
    logisticsName?: boolean
    freight?: boolean
    payment?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    goodsDelivery?: boolean | LogisticsMethod$goodsDeliveryArgs<ExtArgs>
    recipient?: boolean | LogisticsMethod$recipientArgs<ExtArgs>
    _count?: boolean | LogisticsMethodCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logisticsMethod"]>

  export type LogisticsMethodSelectScalar = {
    id?: boolean
    logisticsType?: boolean
    logisticsMode?: boolean
    logisticsName?: boolean
    freight?: boolean
    payment?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }

  export type LogisticsMethodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    goodsDelivery?: boolean | LogisticsMethod$goodsDeliveryArgs<ExtArgs>
    recipient?: boolean | LogisticsMethod$recipientArgs<ExtArgs>
    _count?: boolean | LogisticsMethodCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $LogisticsMethodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LogisticsMethod"
    objects: {
      goodsDelivery: Prisma.$GoodsDeliveryPayload<ExtArgs>[]
      recipient: Prisma.$RecipientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      logisticsType: string
      logisticsMode: string
      logisticsName: string
      freight: number
      payment: number
      updatedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["logisticsMethod"]>
    composites: {}
  }


  type LogisticsMethodGetPayload<S extends boolean | null | undefined | LogisticsMethodDefaultArgs> = $Result.GetResult<Prisma.$LogisticsMethodPayload, S>

  type LogisticsMethodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LogisticsMethodFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LogisticsMethodCountAggregateInputType | true
    }

  export interface LogisticsMethodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LogisticsMethod'], meta: { name: 'LogisticsMethod' } }
    /**
     * Find zero or one LogisticsMethod that matches the filter.
     * @param {LogisticsMethodFindUniqueArgs} args - Arguments to find a LogisticsMethod
     * @example
     * // Get one LogisticsMethod
     * const logisticsMethod = await prisma.logisticsMethod.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LogisticsMethodFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LogisticsMethodFindUniqueArgs<ExtArgs>>
    ): Prisma__LogisticsMethodClient<$Result.GetResult<Prisma.$LogisticsMethodPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one LogisticsMethod that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LogisticsMethodFindUniqueOrThrowArgs} args - Arguments to find a LogisticsMethod
     * @example
     * // Get one LogisticsMethod
     * const logisticsMethod = await prisma.logisticsMethod.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LogisticsMethodFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LogisticsMethodFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LogisticsMethodClient<$Result.GetResult<Prisma.$LogisticsMethodPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first LogisticsMethod that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogisticsMethodFindFirstArgs} args - Arguments to find a LogisticsMethod
     * @example
     * // Get one LogisticsMethod
     * const logisticsMethod = await prisma.logisticsMethod.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LogisticsMethodFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LogisticsMethodFindFirstArgs<ExtArgs>>
    ): Prisma__LogisticsMethodClient<$Result.GetResult<Prisma.$LogisticsMethodPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first LogisticsMethod that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogisticsMethodFindFirstOrThrowArgs} args - Arguments to find a LogisticsMethod
     * @example
     * // Get one LogisticsMethod
     * const logisticsMethod = await prisma.logisticsMethod.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LogisticsMethodFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LogisticsMethodFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LogisticsMethodClient<$Result.GetResult<Prisma.$LogisticsMethodPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more LogisticsMethods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogisticsMethodFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LogisticsMethods
     * const logisticsMethods = await prisma.logisticsMethod.findMany()
     * 
     * // Get first 10 LogisticsMethods
     * const logisticsMethods = await prisma.logisticsMethod.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logisticsMethodWithIdOnly = await prisma.logisticsMethod.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LogisticsMethodFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LogisticsMethodFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogisticsMethodPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a LogisticsMethod.
     * @param {LogisticsMethodCreateArgs} args - Arguments to create a LogisticsMethod.
     * @example
     * // Create one LogisticsMethod
     * const LogisticsMethod = await prisma.logisticsMethod.create({
     *   data: {
     *     // ... data to create a LogisticsMethod
     *   }
     * })
     * 
    **/
    create<T extends LogisticsMethodCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LogisticsMethodCreateArgs<ExtArgs>>
    ): Prisma__LogisticsMethodClient<$Result.GetResult<Prisma.$LogisticsMethodPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many LogisticsMethods.
     *     @param {LogisticsMethodCreateManyArgs} args - Arguments to create many LogisticsMethods.
     *     @example
     *     // Create many LogisticsMethods
     *     const logisticsMethod = await prisma.logisticsMethod.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LogisticsMethodCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LogisticsMethodCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LogisticsMethod.
     * @param {LogisticsMethodDeleteArgs} args - Arguments to delete one LogisticsMethod.
     * @example
     * // Delete one LogisticsMethod
     * const LogisticsMethod = await prisma.logisticsMethod.delete({
     *   where: {
     *     // ... filter to delete one LogisticsMethod
     *   }
     * })
     * 
    **/
    delete<T extends LogisticsMethodDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LogisticsMethodDeleteArgs<ExtArgs>>
    ): Prisma__LogisticsMethodClient<$Result.GetResult<Prisma.$LogisticsMethodPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one LogisticsMethod.
     * @param {LogisticsMethodUpdateArgs} args - Arguments to update one LogisticsMethod.
     * @example
     * // Update one LogisticsMethod
     * const logisticsMethod = await prisma.logisticsMethod.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LogisticsMethodUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LogisticsMethodUpdateArgs<ExtArgs>>
    ): Prisma__LogisticsMethodClient<$Result.GetResult<Prisma.$LogisticsMethodPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more LogisticsMethods.
     * @param {LogisticsMethodDeleteManyArgs} args - Arguments to filter LogisticsMethods to delete.
     * @example
     * // Delete a few LogisticsMethods
     * const { count } = await prisma.logisticsMethod.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LogisticsMethodDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LogisticsMethodDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogisticsMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogisticsMethodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LogisticsMethods
     * const logisticsMethod = await prisma.logisticsMethod.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LogisticsMethodUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LogisticsMethodUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LogisticsMethod.
     * @param {LogisticsMethodUpsertArgs} args - Arguments to update or create a LogisticsMethod.
     * @example
     * // Update or create a LogisticsMethod
     * const logisticsMethod = await prisma.logisticsMethod.upsert({
     *   create: {
     *     // ... data to create a LogisticsMethod
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LogisticsMethod we want to update
     *   }
     * })
    **/
    upsert<T extends LogisticsMethodUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LogisticsMethodUpsertArgs<ExtArgs>>
    ): Prisma__LogisticsMethodClient<$Result.GetResult<Prisma.$LogisticsMethodPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of LogisticsMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogisticsMethodCountArgs} args - Arguments to filter LogisticsMethods to count.
     * @example
     * // Count the number of LogisticsMethods
     * const count = await prisma.logisticsMethod.count({
     *   where: {
     *     // ... the filter for the LogisticsMethods we want to count
     *   }
     * })
    **/
    count<T extends LogisticsMethodCountArgs>(
      args?: Subset<T, LogisticsMethodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogisticsMethodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LogisticsMethod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogisticsMethodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LogisticsMethodAggregateArgs>(args: Subset<T, LogisticsMethodAggregateArgs>): Prisma.PrismaPromise<GetLogisticsMethodAggregateType<T>>

    /**
     * Group by LogisticsMethod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogisticsMethodGroupByArgs} args - Group by arguments.
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
      T extends LogisticsMethodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogisticsMethodGroupByArgs['orderBy'] }
        : { orderBy?: LogisticsMethodGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LogisticsMethodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogisticsMethodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LogisticsMethod model
   */
  readonly fields: LogisticsMethodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LogisticsMethod.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogisticsMethodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    goodsDelivery<T extends LogisticsMethod$goodsDeliveryArgs<ExtArgs> = {}>(args?: Subset<T, LogisticsMethod$goodsDeliveryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoodsDeliveryPayload<ExtArgs>, T, 'findMany'> | Null>;

    recipient<T extends LogisticsMethod$recipientArgs<ExtArgs> = {}>(args?: Subset<T, LogisticsMethod$recipientArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipientPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the LogisticsMethod model
   */ 
  interface LogisticsMethodFieldRefs {
    readonly id: FieldRef<"LogisticsMethod", 'String'>
    readonly logisticsType: FieldRef<"LogisticsMethod", 'String'>
    readonly logisticsMode: FieldRef<"LogisticsMethod", 'String'>
    readonly logisticsName: FieldRef<"LogisticsMethod", 'String'>
    readonly freight: FieldRef<"LogisticsMethod", 'Int'>
    readonly payment: FieldRef<"LogisticsMethod", 'Int'>
    readonly updatedAt: FieldRef<"LogisticsMethod", 'DateTime'>
    readonly createdAt: FieldRef<"LogisticsMethod", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * LogisticsMethod findUnique
   */
  export type LogisticsMethodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsMethod
     */
    select?: LogisticsMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LogisticsMethodInclude<ExtArgs> | null
    /**
     * Filter, which LogisticsMethod to fetch.
     */
    where: LogisticsMethodWhereUniqueInput
  }


  /**
   * LogisticsMethod findUniqueOrThrow
   */
  export type LogisticsMethodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsMethod
     */
    select?: LogisticsMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LogisticsMethodInclude<ExtArgs> | null
    /**
     * Filter, which LogisticsMethod to fetch.
     */
    where: LogisticsMethodWhereUniqueInput
  }


  /**
   * LogisticsMethod findFirst
   */
  export type LogisticsMethodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsMethod
     */
    select?: LogisticsMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LogisticsMethodInclude<ExtArgs> | null
    /**
     * Filter, which LogisticsMethod to fetch.
     */
    where?: LogisticsMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogisticsMethods to fetch.
     */
    orderBy?: LogisticsMethodOrderByWithRelationInput | LogisticsMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogisticsMethods.
     */
    cursor?: LogisticsMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogisticsMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogisticsMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogisticsMethods.
     */
    distinct?: LogisticsMethodScalarFieldEnum | LogisticsMethodScalarFieldEnum[]
  }


  /**
   * LogisticsMethod findFirstOrThrow
   */
  export type LogisticsMethodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsMethod
     */
    select?: LogisticsMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LogisticsMethodInclude<ExtArgs> | null
    /**
     * Filter, which LogisticsMethod to fetch.
     */
    where?: LogisticsMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogisticsMethods to fetch.
     */
    orderBy?: LogisticsMethodOrderByWithRelationInput | LogisticsMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogisticsMethods.
     */
    cursor?: LogisticsMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogisticsMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogisticsMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogisticsMethods.
     */
    distinct?: LogisticsMethodScalarFieldEnum | LogisticsMethodScalarFieldEnum[]
  }


  /**
   * LogisticsMethod findMany
   */
  export type LogisticsMethodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsMethod
     */
    select?: LogisticsMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LogisticsMethodInclude<ExtArgs> | null
    /**
     * Filter, which LogisticsMethods to fetch.
     */
    where?: LogisticsMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogisticsMethods to fetch.
     */
    orderBy?: LogisticsMethodOrderByWithRelationInput | LogisticsMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LogisticsMethods.
     */
    cursor?: LogisticsMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogisticsMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogisticsMethods.
     */
    skip?: number
    distinct?: LogisticsMethodScalarFieldEnum | LogisticsMethodScalarFieldEnum[]
  }


  /**
   * LogisticsMethod create
   */
  export type LogisticsMethodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsMethod
     */
    select?: LogisticsMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LogisticsMethodInclude<ExtArgs> | null
    /**
     * The data needed to create a LogisticsMethod.
     */
    data: XOR<LogisticsMethodCreateInput, LogisticsMethodUncheckedCreateInput>
  }


  /**
   * LogisticsMethod createMany
   */
  export type LogisticsMethodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LogisticsMethods.
     */
    data: LogisticsMethodCreateManyInput | LogisticsMethodCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * LogisticsMethod update
   */
  export type LogisticsMethodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsMethod
     */
    select?: LogisticsMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LogisticsMethodInclude<ExtArgs> | null
    /**
     * The data needed to update a LogisticsMethod.
     */
    data: XOR<LogisticsMethodUpdateInput, LogisticsMethodUncheckedUpdateInput>
    /**
     * Choose, which LogisticsMethod to update.
     */
    where: LogisticsMethodWhereUniqueInput
  }


  /**
   * LogisticsMethod updateMany
   */
  export type LogisticsMethodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LogisticsMethods.
     */
    data: XOR<LogisticsMethodUpdateManyMutationInput, LogisticsMethodUncheckedUpdateManyInput>
    /**
     * Filter which LogisticsMethods to update
     */
    where?: LogisticsMethodWhereInput
  }


  /**
   * LogisticsMethod upsert
   */
  export type LogisticsMethodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsMethod
     */
    select?: LogisticsMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LogisticsMethodInclude<ExtArgs> | null
    /**
     * The filter to search for the LogisticsMethod to update in case it exists.
     */
    where: LogisticsMethodWhereUniqueInput
    /**
     * In case the LogisticsMethod found by the `where` argument doesn't exist, create a new LogisticsMethod with this data.
     */
    create: XOR<LogisticsMethodCreateInput, LogisticsMethodUncheckedCreateInput>
    /**
     * In case the LogisticsMethod was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogisticsMethodUpdateInput, LogisticsMethodUncheckedUpdateInput>
  }


  /**
   * LogisticsMethod delete
   */
  export type LogisticsMethodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsMethod
     */
    select?: LogisticsMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LogisticsMethodInclude<ExtArgs> | null
    /**
     * Filter which LogisticsMethod to delete.
     */
    where: LogisticsMethodWhereUniqueInput
  }


  /**
   * LogisticsMethod deleteMany
   */
  export type LogisticsMethodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogisticsMethods to delete
     */
    where?: LogisticsMethodWhereInput
  }


  /**
   * LogisticsMethod.goodsDelivery
   */
  export type LogisticsMethod$goodsDeliveryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoodsDelivery
     */
    select?: GoodsDeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GoodsDeliveryInclude<ExtArgs> | null
    where?: GoodsDeliveryWhereInput
    orderBy?: GoodsDeliveryOrderByWithRelationInput | GoodsDeliveryOrderByWithRelationInput[]
    cursor?: GoodsDeliveryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GoodsDeliveryScalarFieldEnum | GoodsDeliveryScalarFieldEnum[]
  }


  /**
   * LogisticsMethod.recipient
   */
  export type LogisticsMethod$recipientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipient
     */
    select?: RecipientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipientInclude<ExtArgs> | null
    where?: RecipientWhereInput
    orderBy?: RecipientOrderByWithRelationInput | RecipientOrderByWithRelationInput[]
    cursor?: RecipientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipientScalarFieldEnum | RecipientScalarFieldEnum[]
  }


  /**
   * LogisticsMethod without action
   */
  export type LogisticsMethodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsMethod
     */
    select?: LogisticsMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LogisticsMethodInclude<ExtArgs> | null
  }



  /**
   * Model Coupon
   */

  export type AggregateCoupon = {
    _count: CouponCountAggregateOutputType | null
    _avg: CouponAvgAggregateOutputType | null
    _sum: CouponSumAggregateOutputType | null
    _min: CouponMinAggregateOutputType | null
    _max: CouponMaxAggregateOutputType | null
  }

  export type CouponAvgAggregateOutputType = {
    threshold: number | null
  }

  export type CouponSumAggregateOutputType = {
    threshold: number | null
  }

  export type CouponMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    description: string | null
    threshold: number | null
    active: boolean | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type CouponMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    description: string | null
    threshold: number | null
    active: boolean | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type CouponCountAggregateOutputType = {
    id: number
    code: number
    name: number
    description: number
    threshold: number
    active: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type CouponAvgAggregateInputType = {
    threshold?: true
  }

  export type CouponSumAggregateInputType = {
    threshold?: true
  }

  export type CouponMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    description?: true
    threshold?: true
    active?: true
    updatedAt?: true
    createdAt?: true
  }

  export type CouponMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    description?: true
    threshold?: true
    active?: true
    updatedAt?: true
    createdAt?: true
  }

  export type CouponCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    description?: true
    threshold?: true
    active?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type CouponAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coupon to aggregate.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Coupons
    **/
    _count?: true | CouponCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CouponAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CouponSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CouponMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CouponMaxAggregateInputType
  }

  export type GetCouponAggregateType<T extends CouponAggregateArgs> = {
        [P in keyof T & keyof AggregateCoupon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoupon[P]>
      : GetScalarType<T[P], AggregateCoupon[P]>
  }




  export type CouponGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CouponWhereInput
    orderBy?: CouponOrderByWithAggregationInput | CouponOrderByWithAggregationInput[]
    by: CouponScalarFieldEnum[] | CouponScalarFieldEnum
    having?: CouponScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CouponCountAggregateInputType | true
    _avg?: CouponAvgAggregateInputType
    _sum?: CouponSumAggregateInputType
    _min?: CouponMinAggregateInputType
    _max?: CouponMaxAggregateInputType
  }

  export type CouponGroupByOutputType = {
    id: string
    code: string
    name: string
    description: string
    threshold: number
    active: boolean
    updatedAt: Date
    createdAt: Date
    _count: CouponCountAggregateOutputType | null
    _avg: CouponAvgAggregateOutputType | null
    _sum: CouponSumAggregateOutputType | null
    _min: CouponMinAggregateOutputType | null
    _max: CouponMaxAggregateOutputType | null
  }

  type GetCouponGroupByPayload<T extends CouponGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CouponGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CouponGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CouponGroupByOutputType[P]>
            : GetScalarType<T[P], CouponGroupByOutputType[P]>
        }
      >
    >


  export type CouponSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    threshold?: boolean
    active?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    GoodsDelivery?: boolean | Coupon$GoodsDeliveryArgs<ExtArgs>
    _count?: boolean | CouponCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coupon"]>

  export type CouponSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    threshold?: boolean
    active?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }

  export type CouponInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    GoodsDelivery?: boolean | Coupon$GoodsDeliveryArgs<ExtArgs>
    _count?: boolean | CouponCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CouponPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Coupon"
    objects: {
      GoodsDelivery: Prisma.$GoodsDeliveryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      description: string
      threshold: number
      active: boolean
      updatedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["coupon"]>
    composites: {}
  }


  type CouponGetPayload<S extends boolean | null | undefined | CouponDefaultArgs> = $Result.GetResult<Prisma.$CouponPayload, S>

  type CouponCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CouponFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CouponCountAggregateInputType | true
    }

  export interface CouponDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Coupon'], meta: { name: 'Coupon' } }
    /**
     * Find zero or one Coupon that matches the filter.
     * @param {CouponFindUniqueArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CouponFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CouponFindUniqueArgs<ExtArgs>>
    ): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Coupon that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CouponFindUniqueOrThrowArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CouponFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CouponFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Coupon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponFindFirstArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CouponFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CouponFindFirstArgs<ExtArgs>>
    ): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Coupon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponFindFirstOrThrowArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CouponFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CouponFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Coupons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Coupons
     * const coupons = await prisma.coupon.findMany()
     * 
     * // Get first 10 Coupons
     * const coupons = await prisma.coupon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const couponWithIdOnly = await prisma.coupon.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CouponFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CouponFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Coupon.
     * @param {CouponCreateArgs} args - Arguments to create a Coupon.
     * @example
     * // Create one Coupon
     * const Coupon = await prisma.coupon.create({
     *   data: {
     *     // ... data to create a Coupon
     *   }
     * })
     * 
    **/
    create<T extends CouponCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CouponCreateArgs<ExtArgs>>
    ): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Coupons.
     *     @param {CouponCreateManyArgs} args - Arguments to create many Coupons.
     *     @example
     *     // Create many Coupons
     *     const coupon = await prisma.coupon.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CouponCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CouponCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Coupon.
     * @param {CouponDeleteArgs} args - Arguments to delete one Coupon.
     * @example
     * // Delete one Coupon
     * const Coupon = await prisma.coupon.delete({
     *   where: {
     *     // ... filter to delete one Coupon
     *   }
     * })
     * 
    **/
    delete<T extends CouponDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CouponDeleteArgs<ExtArgs>>
    ): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Coupon.
     * @param {CouponUpdateArgs} args - Arguments to update one Coupon.
     * @example
     * // Update one Coupon
     * const coupon = await prisma.coupon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CouponUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CouponUpdateArgs<ExtArgs>>
    ): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Coupons.
     * @param {CouponDeleteManyArgs} args - Arguments to filter Coupons to delete.
     * @example
     * // Delete a few Coupons
     * const { count } = await prisma.coupon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CouponDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CouponDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Coupons
     * const coupon = await prisma.coupon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CouponUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CouponUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Coupon.
     * @param {CouponUpsertArgs} args - Arguments to update or create a Coupon.
     * @example
     * // Update or create a Coupon
     * const coupon = await prisma.coupon.upsert({
     *   create: {
     *     // ... data to create a Coupon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Coupon we want to update
     *   }
     * })
    **/
    upsert<T extends CouponUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CouponUpsertArgs<ExtArgs>>
    ): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponCountArgs} args - Arguments to filter Coupons to count.
     * @example
     * // Count the number of Coupons
     * const count = await prisma.coupon.count({
     *   where: {
     *     // ... the filter for the Coupons we want to count
     *   }
     * })
    **/
    count<T extends CouponCountArgs>(
      args?: Subset<T, CouponCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CouponCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Coupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CouponAggregateArgs>(args: Subset<T, CouponAggregateArgs>): Prisma.PrismaPromise<GetCouponAggregateType<T>>

    /**
     * Group by Coupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponGroupByArgs} args - Group by arguments.
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
      T extends CouponGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CouponGroupByArgs['orderBy'] }
        : { orderBy?: CouponGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CouponGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCouponGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Coupon model
   */
  readonly fields: CouponFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Coupon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CouponClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    GoodsDelivery<T extends Coupon$GoodsDeliveryArgs<ExtArgs> = {}>(args?: Subset<T, Coupon$GoodsDeliveryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoodsDeliveryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Coupon model
   */ 
  interface CouponFieldRefs {
    readonly id: FieldRef<"Coupon", 'String'>
    readonly code: FieldRef<"Coupon", 'String'>
    readonly name: FieldRef<"Coupon", 'String'>
    readonly description: FieldRef<"Coupon", 'String'>
    readonly threshold: FieldRef<"Coupon", 'Int'>
    readonly active: FieldRef<"Coupon", 'Boolean'>
    readonly updatedAt: FieldRef<"Coupon", 'DateTime'>
    readonly createdAt: FieldRef<"Coupon", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Coupon findUnique
   */
  export type CouponFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where: CouponWhereUniqueInput
  }


  /**
   * Coupon findUniqueOrThrow
   */
  export type CouponFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where: CouponWhereUniqueInput
  }


  /**
   * Coupon findFirst
   */
  export type CouponFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coupons.
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coupons.
     */
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }


  /**
   * Coupon findFirstOrThrow
   */
  export type CouponFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coupons.
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coupons.
     */
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }


  /**
   * Coupon findMany
   */
  export type CouponFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupons to fetch.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Coupons.
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }


  /**
   * Coupon create
   */
  export type CouponCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * The data needed to create a Coupon.
     */
    data: XOR<CouponCreateInput, CouponUncheckedCreateInput>
  }


  /**
   * Coupon createMany
   */
  export type CouponCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Coupons.
     */
    data: CouponCreateManyInput | CouponCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Coupon update
   */
  export type CouponUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * The data needed to update a Coupon.
     */
    data: XOR<CouponUpdateInput, CouponUncheckedUpdateInput>
    /**
     * Choose, which Coupon to update.
     */
    where: CouponWhereUniqueInput
  }


  /**
   * Coupon updateMany
   */
  export type CouponUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Coupons.
     */
    data: XOR<CouponUpdateManyMutationInput, CouponUncheckedUpdateManyInput>
    /**
     * Filter which Coupons to update
     */
    where?: CouponWhereInput
  }


  /**
   * Coupon upsert
   */
  export type CouponUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * The filter to search for the Coupon to update in case it exists.
     */
    where: CouponWhereUniqueInput
    /**
     * In case the Coupon found by the `where` argument doesn't exist, create a new Coupon with this data.
     */
    create: XOR<CouponCreateInput, CouponUncheckedCreateInput>
    /**
     * In case the Coupon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CouponUpdateInput, CouponUncheckedUpdateInput>
  }


  /**
   * Coupon delete
   */
  export type CouponDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter which Coupon to delete.
     */
    where: CouponWhereUniqueInput
  }


  /**
   * Coupon deleteMany
   */
  export type CouponDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coupons to delete
     */
    where?: CouponWhereInput
  }


  /**
   * Coupon.GoodsDelivery
   */
  export type Coupon$GoodsDeliveryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoodsDelivery
     */
    select?: GoodsDeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GoodsDeliveryInclude<ExtArgs> | null
    where?: GoodsDeliveryWhereInput
    orderBy?: GoodsDeliveryOrderByWithRelationInput | GoodsDeliveryOrderByWithRelationInput[]
    cursor?: GoodsDeliveryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GoodsDeliveryScalarFieldEnum | GoodsDeliveryScalarFieldEnum[]
  }


  /**
   * Coupon without action
   */
  export type CouponDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CouponInclude<ExtArgs> | null
  }



  /**
   * Model CartItem
   */

  export type AggregateCartItem = {
    _count: CartItemCountAggregateOutputType | null
    _avg: CartItemAvgAggregateOutputType | null
    _sum: CartItemSumAggregateOutputType | null
    _min: CartItemMinAggregateOutputType | null
    _max: CartItemMaxAggregateOutputType | null
  }

  export type CartItemAvgAggregateOutputType = {
    quantity: number | null
    subtotal: number | null
  }

  export type CartItemSumAggregateOutputType = {
    quantity: number | null
    subtotal: number | null
  }

  export type CartItemMinAggregateOutputType = {
    id: string | null
    shoppingItemId: string | null
    quantity: number | null
    subtotal: number | null
    updatedAt: Date | null
    createdAt: Date | null
    goodsDeliveryId: string | null
  }

  export type CartItemMaxAggregateOutputType = {
    id: string | null
    shoppingItemId: string | null
    quantity: number | null
    subtotal: number | null
    updatedAt: Date | null
    createdAt: Date | null
    goodsDeliveryId: string | null
  }

  export type CartItemCountAggregateOutputType = {
    id: number
    shoppingItemId: number
    quantity: number
    subtotal: number
    updatedAt: number
    createdAt: number
    goodsDeliveryId: number
    _all: number
  }


  export type CartItemAvgAggregateInputType = {
    quantity?: true
    subtotal?: true
  }

  export type CartItemSumAggregateInputType = {
    quantity?: true
    subtotal?: true
  }

  export type CartItemMinAggregateInputType = {
    id?: true
    shoppingItemId?: true
    quantity?: true
    subtotal?: true
    updatedAt?: true
    createdAt?: true
    goodsDeliveryId?: true
  }

  export type CartItemMaxAggregateInputType = {
    id?: true
    shoppingItemId?: true
    quantity?: true
    subtotal?: true
    updatedAt?: true
    createdAt?: true
    goodsDeliveryId?: true
  }

  export type CartItemCountAggregateInputType = {
    id?: true
    shoppingItemId?: true
    quantity?: true
    subtotal?: true
    updatedAt?: true
    createdAt?: true
    goodsDeliveryId?: true
    _all?: true
  }

  export type CartItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartItem to aggregate.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CartItems
    **/
    _count?: true | CartItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartItemMaxAggregateInputType
  }

  export type GetCartItemAggregateType<T extends CartItemAggregateArgs> = {
        [P in keyof T & keyof AggregateCartItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCartItem[P]>
      : GetScalarType<T[P], AggregateCartItem[P]>
  }




  export type CartItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithAggregationInput | CartItemOrderByWithAggregationInput[]
    by: CartItemScalarFieldEnum[] | CartItemScalarFieldEnum
    having?: CartItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartItemCountAggregateInputType | true
    _avg?: CartItemAvgAggregateInputType
    _sum?: CartItemSumAggregateInputType
    _min?: CartItemMinAggregateInputType
    _max?: CartItemMaxAggregateInputType
  }

  export type CartItemGroupByOutputType = {
    id: string
    shoppingItemId: string
    quantity: number
    subtotal: number
    updatedAt: Date
    createdAt: Date
    goodsDeliveryId: string | null
    _count: CartItemCountAggregateOutputType | null
    _avg: CartItemAvgAggregateOutputType | null
    _sum: CartItemSumAggregateOutputType | null
    _min: CartItemMinAggregateOutputType | null
    _max: CartItemMaxAggregateOutputType | null
  }

  type GetCartItemGroupByPayload<T extends CartItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartItemGroupByOutputType[P]>
            : GetScalarType<T[P], CartItemGroupByOutputType[P]>
        }
      >
    >


  export type CartItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shoppingItemId?: boolean
    quantity?: boolean
    subtotal?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    goodsDeliveryId?: boolean
    shoppingItem?: boolean | ShoppingItemDefaultArgs<ExtArgs>
    GoodsDelivery?: boolean | CartItem$GoodsDeliveryArgs<ExtArgs>
  }, ExtArgs["result"]["cartItem"]>

  export type CartItemSelectScalar = {
    id?: boolean
    shoppingItemId?: boolean
    quantity?: boolean
    subtotal?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    goodsDeliveryId?: boolean
  }

  export type CartItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shoppingItem?: boolean | ShoppingItemDefaultArgs<ExtArgs>
    GoodsDelivery?: boolean | CartItem$GoodsDeliveryArgs<ExtArgs>
  }


  export type $CartItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CartItem"
    objects: {
      shoppingItem: Prisma.$ShoppingItemPayload<ExtArgs>
      GoodsDelivery: Prisma.$GoodsDeliveryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shoppingItemId: string
      quantity: number
      subtotal: number
      updatedAt: Date
      createdAt: Date
      goodsDeliveryId: string | null
    }, ExtArgs["result"]["cartItem"]>
    composites: {}
  }


  type CartItemGetPayload<S extends boolean | null | undefined | CartItemDefaultArgs> = $Result.GetResult<Prisma.$CartItemPayload, S>

  type CartItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CartItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CartItemCountAggregateInputType | true
    }

  export interface CartItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CartItem'], meta: { name: 'CartItem' } }
    /**
     * Find zero or one CartItem that matches the filter.
     * @param {CartItemFindUniqueArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CartItemFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CartItemFindUniqueArgs<ExtArgs>>
    ): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CartItem that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CartItemFindUniqueOrThrowArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CartItemFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CartItemFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CartItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindFirstArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CartItemFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CartItemFindFirstArgs<ExtArgs>>
    ): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CartItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindFirstOrThrowArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CartItemFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CartItemFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CartItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CartItems
     * const cartItems = await prisma.cartItem.findMany()
     * 
     * // Get first 10 CartItems
     * const cartItems = await prisma.cartItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartItemWithIdOnly = await prisma.cartItem.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CartItemFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CartItemFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CartItem.
     * @param {CartItemCreateArgs} args - Arguments to create a CartItem.
     * @example
     * // Create one CartItem
     * const CartItem = await prisma.cartItem.create({
     *   data: {
     *     // ... data to create a CartItem
     *   }
     * })
     * 
    **/
    create<T extends CartItemCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CartItemCreateArgs<ExtArgs>>
    ): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CartItems.
     *     @param {CartItemCreateManyArgs} args - Arguments to create many CartItems.
     *     @example
     *     // Create many CartItems
     *     const cartItem = await prisma.cartItem.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CartItemCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CartItemCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CartItem.
     * @param {CartItemDeleteArgs} args - Arguments to delete one CartItem.
     * @example
     * // Delete one CartItem
     * const CartItem = await prisma.cartItem.delete({
     *   where: {
     *     // ... filter to delete one CartItem
     *   }
     * })
     * 
    **/
    delete<T extends CartItemDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CartItemDeleteArgs<ExtArgs>>
    ): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CartItem.
     * @param {CartItemUpdateArgs} args - Arguments to update one CartItem.
     * @example
     * // Update one CartItem
     * const cartItem = await prisma.cartItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CartItemUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CartItemUpdateArgs<ExtArgs>>
    ): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CartItems.
     * @param {CartItemDeleteManyArgs} args - Arguments to filter CartItems to delete.
     * @example
     * // Delete a few CartItems
     * const { count } = await prisma.cartItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CartItemDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CartItemDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CartItems
     * const cartItem = await prisma.cartItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CartItemUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CartItemUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CartItem.
     * @param {CartItemUpsertArgs} args - Arguments to update or create a CartItem.
     * @example
     * // Update or create a CartItem
     * const cartItem = await prisma.cartItem.upsert({
     *   create: {
     *     // ... data to create a CartItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CartItem we want to update
     *   }
     * })
    **/
    upsert<T extends CartItemUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CartItemUpsertArgs<ExtArgs>>
    ): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemCountArgs} args - Arguments to filter CartItems to count.
     * @example
     * // Count the number of CartItems
     * const count = await prisma.cartItem.count({
     *   where: {
     *     // ... the filter for the CartItems we want to count
     *   }
     * })
    **/
    count<T extends CartItemCountArgs>(
      args?: Subset<T, CartItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CartItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CartItemAggregateArgs>(args: Subset<T, CartItemAggregateArgs>): Prisma.PrismaPromise<GetCartItemAggregateType<T>>

    /**
     * Group by CartItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemGroupByArgs} args - Group by arguments.
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
      T extends CartItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartItemGroupByArgs['orderBy'] }
        : { orderBy?: CartItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CartItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CartItem model
   */
  readonly fields: CartItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CartItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    shoppingItem<T extends ShoppingItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShoppingItemDefaultArgs<ExtArgs>>): Prisma__ShoppingItemClient<$Result.GetResult<Prisma.$ShoppingItemPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    GoodsDelivery<T extends CartItem$GoodsDeliveryArgs<ExtArgs> = {}>(args?: Subset<T, CartItem$GoodsDeliveryArgs<ExtArgs>>): Prisma__GoodsDeliveryClient<$Result.GetResult<Prisma.$GoodsDeliveryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CartItem model
   */ 
  interface CartItemFieldRefs {
    readonly id: FieldRef<"CartItem", 'String'>
    readonly shoppingItemId: FieldRef<"CartItem", 'String'>
    readonly quantity: FieldRef<"CartItem", 'Int'>
    readonly subtotal: FieldRef<"CartItem", 'Int'>
    readonly updatedAt: FieldRef<"CartItem", 'DateTime'>
    readonly createdAt: FieldRef<"CartItem", 'DateTime'>
    readonly goodsDeliveryId: FieldRef<"CartItem", 'String'>
  }
    

  // Custom InputTypes

  /**
   * CartItem findUnique
   */
  export type CartItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where: CartItemWhereUniqueInput
  }


  /**
   * CartItem findUniqueOrThrow
   */
  export type CartItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where: CartItemWhereUniqueInput
  }


  /**
   * CartItem findFirst
   */
  export type CartItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }


  /**
   * CartItem findFirstOrThrow
   */
  export type CartItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }


  /**
   * CartItem findMany
   */
  export type CartItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItems to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }


  /**
   * CartItem create
   */
  export type CartItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The data needed to create a CartItem.
     */
    data: XOR<CartItemCreateInput, CartItemUncheckedCreateInput>
  }


  /**
   * CartItem createMany
   */
  export type CartItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CartItems.
     */
    data: CartItemCreateManyInput | CartItemCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * CartItem update
   */
  export type CartItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The data needed to update a CartItem.
     */
    data: XOR<CartItemUpdateInput, CartItemUncheckedUpdateInput>
    /**
     * Choose, which CartItem to update.
     */
    where: CartItemWhereUniqueInput
  }


  /**
   * CartItem updateMany
   */
  export type CartItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CartItems.
     */
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyInput>
    /**
     * Filter which CartItems to update
     */
    where?: CartItemWhereInput
  }


  /**
   * CartItem upsert
   */
  export type CartItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The filter to search for the CartItem to update in case it exists.
     */
    where: CartItemWhereUniqueInput
    /**
     * In case the CartItem found by the `where` argument doesn't exist, create a new CartItem with this data.
     */
    create: XOR<CartItemCreateInput, CartItemUncheckedCreateInput>
    /**
     * In case the CartItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartItemUpdateInput, CartItemUncheckedUpdateInput>
  }


  /**
   * CartItem delete
   */
  export type CartItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter which CartItem to delete.
     */
    where: CartItemWhereUniqueInput
  }


  /**
   * CartItem deleteMany
   */
  export type CartItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartItems to delete
     */
    where?: CartItemWhereInput
  }


  /**
   * CartItem.GoodsDelivery
   */
  export type CartItem$GoodsDeliveryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoodsDelivery
     */
    select?: GoodsDeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GoodsDeliveryInclude<ExtArgs> | null
    where?: GoodsDeliveryWhereInput
  }


  /**
   * CartItem without action
   */
  export type CartItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartItemInclude<ExtArgs> | null
  }



  /**
   * Model Recipient
   */

  export type AggregateRecipient = {
    _count: RecipientCountAggregateOutputType | null
    _min: RecipientMinAggregateOutputType | null
    _max: RecipientMaxAggregateOutputType | null
  }

  export type RecipientMinAggregateOutputType = {
    id: string | null
    name: string | null
    cellphone: string | null
    email: string | null
    gender: string | null
    timeToReceive: string | null
    note: string | null
    updatedAt: Date | null
    createdAt: Date | null
    addressId: string | null
  }

  export type RecipientMaxAggregateOutputType = {
    id: string | null
    name: string | null
    cellphone: string | null
    email: string | null
    gender: string | null
    timeToReceive: string | null
    note: string | null
    updatedAt: Date | null
    createdAt: Date | null
    addressId: string | null
  }

  export type RecipientCountAggregateOutputType = {
    id: number
    name: number
    cellphone: number
    email: number
    gender: number
    timeToReceive: number
    note: number
    updatedAt: number
    createdAt: number
    addressId: number
    _all: number
  }


  export type RecipientMinAggregateInputType = {
    id?: true
    name?: true
    cellphone?: true
    email?: true
    gender?: true
    timeToReceive?: true
    note?: true
    updatedAt?: true
    createdAt?: true
    addressId?: true
  }

  export type RecipientMaxAggregateInputType = {
    id?: true
    name?: true
    cellphone?: true
    email?: true
    gender?: true
    timeToReceive?: true
    note?: true
    updatedAt?: true
    createdAt?: true
    addressId?: true
  }

  export type RecipientCountAggregateInputType = {
    id?: true
    name?: true
    cellphone?: true
    email?: true
    gender?: true
    timeToReceive?: true
    note?: true
    updatedAt?: true
    createdAt?: true
    addressId?: true
    _all?: true
  }

  export type RecipientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipient to aggregate.
     */
    where?: RecipientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipients to fetch.
     */
    orderBy?: RecipientOrderByWithRelationInput | RecipientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecipientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recipients
    **/
    _count?: true | RecipientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipientMaxAggregateInputType
  }

  export type GetRecipientAggregateType<T extends RecipientAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipient[P]>
      : GetScalarType<T[P], AggregateRecipient[P]>
  }




  export type RecipientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipientWhereInput
    orderBy?: RecipientOrderByWithAggregationInput | RecipientOrderByWithAggregationInput[]
    by: RecipientScalarFieldEnum[] | RecipientScalarFieldEnum
    having?: RecipientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipientCountAggregateInputType | true
    _min?: RecipientMinAggregateInputType
    _max?: RecipientMaxAggregateInputType
  }

  export type RecipientGroupByOutputType = {
    id: string
    name: string
    cellphone: string
    email: string
    gender: string
    timeToReceive: string
    note: string | null
    updatedAt: Date
    createdAt: Date
    addressId: string
    _count: RecipientCountAggregateOutputType | null
    _min: RecipientMinAggregateOutputType | null
    _max: RecipientMaxAggregateOutputType | null
  }

  type GetRecipientGroupByPayload<T extends RecipientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipientGroupByOutputType[P]>
            : GetScalarType<T[P], RecipientGroupByOutputType[P]>
        }
      >
    >


  export type RecipientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cellphone?: boolean
    email?: boolean
    gender?: boolean
    timeToReceive?: boolean
    note?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    addressId?: boolean
    address?: boolean | AddressDefaultArgs<ExtArgs>
    favLogistics?: boolean | Recipient$favLogisticsArgs<ExtArgs>
    historyOrder?: boolean | Recipient$historyOrderArgs<ExtArgs>
    _count?: boolean | RecipientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipient"]>

  export type RecipientSelectScalar = {
    id?: boolean
    name?: boolean
    cellphone?: boolean
    email?: boolean
    gender?: boolean
    timeToReceive?: boolean
    note?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    addressId?: boolean
  }

  export type RecipientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | AddressDefaultArgs<ExtArgs>
    favLogistics?: boolean | Recipient$favLogisticsArgs<ExtArgs>
    historyOrder?: boolean | Recipient$historyOrderArgs<ExtArgs>
    _count?: boolean | RecipientCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $RecipientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recipient"
    objects: {
      address: Prisma.$AddressPayload<ExtArgs>
      favLogistics: Prisma.$LogisticsMethodPayload<ExtArgs>[]
      historyOrder: Prisma.$GoodsDeliveryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      cellphone: string
      email: string
      gender: string
      timeToReceive: string
      note: string | null
      updatedAt: Date
      createdAt: Date
      addressId: string
    }, ExtArgs["result"]["recipient"]>
    composites: {}
  }


  type RecipientGetPayload<S extends boolean | null | undefined | RecipientDefaultArgs> = $Result.GetResult<Prisma.$RecipientPayload, S>

  type RecipientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RecipientFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RecipientCountAggregateInputType | true
    }

  export interface RecipientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recipient'], meta: { name: 'Recipient' } }
    /**
     * Find zero or one Recipient that matches the filter.
     * @param {RecipientFindUniqueArgs} args - Arguments to find a Recipient
     * @example
     * // Get one Recipient
     * const recipient = await prisma.recipient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RecipientFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RecipientFindUniqueArgs<ExtArgs>>
    ): Prisma__RecipientClient<$Result.GetResult<Prisma.$RecipientPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Recipient that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RecipientFindUniqueOrThrowArgs} args - Arguments to find a Recipient
     * @example
     * // Get one Recipient
     * const recipient = await prisma.recipient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RecipientFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RecipientFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RecipientClient<$Result.GetResult<Prisma.$RecipientPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Recipient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipientFindFirstArgs} args - Arguments to find a Recipient
     * @example
     * // Get one Recipient
     * const recipient = await prisma.recipient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RecipientFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RecipientFindFirstArgs<ExtArgs>>
    ): Prisma__RecipientClient<$Result.GetResult<Prisma.$RecipientPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Recipient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipientFindFirstOrThrowArgs} args - Arguments to find a Recipient
     * @example
     * // Get one Recipient
     * const recipient = await prisma.recipient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RecipientFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RecipientFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RecipientClient<$Result.GetResult<Prisma.$RecipientPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Recipients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipientFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recipients
     * const recipients = await prisma.recipient.findMany()
     * 
     * // Get first 10 Recipients
     * const recipients = await prisma.recipient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipientWithIdOnly = await prisma.recipient.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RecipientFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RecipientFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipientPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Recipient.
     * @param {RecipientCreateArgs} args - Arguments to create a Recipient.
     * @example
     * // Create one Recipient
     * const Recipient = await prisma.recipient.create({
     *   data: {
     *     // ... data to create a Recipient
     *   }
     * })
     * 
    **/
    create<T extends RecipientCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RecipientCreateArgs<ExtArgs>>
    ): Prisma__RecipientClient<$Result.GetResult<Prisma.$RecipientPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Recipients.
     *     @param {RecipientCreateManyArgs} args - Arguments to create many Recipients.
     *     @example
     *     // Create many Recipients
     *     const recipient = await prisma.recipient.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RecipientCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RecipientCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Recipient.
     * @param {RecipientDeleteArgs} args - Arguments to delete one Recipient.
     * @example
     * // Delete one Recipient
     * const Recipient = await prisma.recipient.delete({
     *   where: {
     *     // ... filter to delete one Recipient
     *   }
     * })
     * 
    **/
    delete<T extends RecipientDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RecipientDeleteArgs<ExtArgs>>
    ): Prisma__RecipientClient<$Result.GetResult<Prisma.$RecipientPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Recipient.
     * @param {RecipientUpdateArgs} args - Arguments to update one Recipient.
     * @example
     * // Update one Recipient
     * const recipient = await prisma.recipient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RecipientUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RecipientUpdateArgs<ExtArgs>>
    ): Prisma__RecipientClient<$Result.GetResult<Prisma.$RecipientPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Recipients.
     * @param {RecipientDeleteManyArgs} args - Arguments to filter Recipients to delete.
     * @example
     * // Delete a few Recipients
     * const { count } = await prisma.recipient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RecipientDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RecipientDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recipients
     * const recipient = await prisma.recipient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RecipientUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RecipientUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Recipient.
     * @param {RecipientUpsertArgs} args - Arguments to update or create a Recipient.
     * @example
     * // Update or create a Recipient
     * const recipient = await prisma.recipient.upsert({
     *   create: {
     *     // ... data to create a Recipient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recipient we want to update
     *   }
     * })
    **/
    upsert<T extends RecipientUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RecipientUpsertArgs<ExtArgs>>
    ): Prisma__RecipientClient<$Result.GetResult<Prisma.$RecipientPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Recipients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipientCountArgs} args - Arguments to filter Recipients to count.
     * @example
     * // Count the number of Recipients
     * const count = await prisma.recipient.count({
     *   where: {
     *     // ... the filter for the Recipients we want to count
     *   }
     * })
    **/
    count<T extends RecipientCountArgs>(
      args?: Subset<T, RecipientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recipient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecipientAggregateArgs>(args: Subset<T, RecipientAggregateArgs>): Prisma.PrismaPromise<GetRecipientAggregateType<T>>

    /**
     * Group by Recipient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipientGroupByArgs} args - Group by arguments.
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
      T extends RecipientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipientGroupByArgs['orderBy'] }
        : { orderBy?: RecipientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecipientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recipient model
   */
  readonly fields: RecipientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recipient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecipientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    address<T extends AddressDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AddressDefaultArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    favLogistics<T extends Recipient$favLogisticsArgs<ExtArgs> = {}>(args?: Subset<T, Recipient$favLogisticsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogisticsMethodPayload<ExtArgs>, T, 'findMany'> | Null>;

    historyOrder<T extends Recipient$historyOrderArgs<ExtArgs> = {}>(args?: Subset<T, Recipient$historyOrderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoodsDeliveryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Recipient model
   */ 
  interface RecipientFieldRefs {
    readonly id: FieldRef<"Recipient", 'String'>
    readonly name: FieldRef<"Recipient", 'String'>
    readonly cellphone: FieldRef<"Recipient", 'String'>
    readonly email: FieldRef<"Recipient", 'String'>
    readonly gender: FieldRef<"Recipient", 'String'>
    readonly timeToReceive: FieldRef<"Recipient", 'String'>
    readonly note: FieldRef<"Recipient", 'String'>
    readonly updatedAt: FieldRef<"Recipient", 'DateTime'>
    readonly createdAt: FieldRef<"Recipient", 'DateTime'>
    readonly addressId: FieldRef<"Recipient", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Recipient findUnique
   */
  export type RecipientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipient
     */
    select?: RecipientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipientInclude<ExtArgs> | null
    /**
     * Filter, which Recipient to fetch.
     */
    where: RecipientWhereUniqueInput
  }


  /**
   * Recipient findUniqueOrThrow
   */
  export type RecipientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipient
     */
    select?: RecipientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipientInclude<ExtArgs> | null
    /**
     * Filter, which Recipient to fetch.
     */
    where: RecipientWhereUniqueInput
  }


  /**
   * Recipient findFirst
   */
  export type RecipientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipient
     */
    select?: RecipientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipientInclude<ExtArgs> | null
    /**
     * Filter, which Recipient to fetch.
     */
    where?: RecipientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipients to fetch.
     */
    orderBy?: RecipientOrderByWithRelationInput | RecipientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipients.
     */
    cursor?: RecipientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipients.
     */
    distinct?: RecipientScalarFieldEnum | RecipientScalarFieldEnum[]
  }


  /**
   * Recipient findFirstOrThrow
   */
  export type RecipientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipient
     */
    select?: RecipientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipientInclude<ExtArgs> | null
    /**
     * Filter, which Recipient to fetch.
     */
    where?: RecipientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipients to fetch.
     */
    orderBy?: RecipientOrderByWithRelationInput | RecipientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipients.
     */
    cursor?: RecipientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipients.
     */
    distinct?: RecipientScalarFieldEnum | RecipientScalarFieldEnum[]
  }


  /**
   * Recipient findMany
   */
  export type RecipientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipient
     */
    select?: RecipientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipientInclude<ExtArgs> | null
    /**
     * Filter, which Recipients to fetch.
     */
    where?: RecipientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipients to fetch.
     */
    orderBy?: RecipientOrderByWithRelationInput | RecipientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recipients.
     */
    cursor?: RecipientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipients.
     */
    skip?: number
    distinct?: RecipientScalarFieldEnum | RecipientScalarFieldEnum[]
  }


  /**
   * Recipient create
   */
  export type RecipientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipient
     */
    select?: RecipientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipientInclude<ExtArgs> | null
    /**
     * The data needed to create a Recipient.
     */
    data: XOR<RecipientCreateInput, RecipientUncheckedCreateInput>
  }


  /**
   * Recipient createMany
   */
  export type RecipientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recipients.
     */
    data: RecipientCreateManyInput | RecipientCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Recipient update
   */
  export type RecipientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipient
     */
    select?: RecipientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipientInclude<ExtArgs> | null
    /**
     * The data needed to update a Recipient.
     */
    data: XOR<RecipientUpdateInput, RecipientUncheckedUpdateInput>
    /**
     * Choose, which Recipient to update.
     */
    where: RecipientWhereUniqueInput
  }


  /**
   * Recipient updateMany
   */
  export type RecipientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recipients.
     */
    data: XOR<RecipientUpdateManyMutationInput, RecipientUncheckedUpdateManyInput>
    /**
     * Filter which Recipients to update
     */
    where?: RecipientWhereInput
  }


  /**
   * Recipient upsert
   */
  export type RecipientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipient
     */
    select?: RecipientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipientInclude<ExtArgs> | null
    /**
     * The filter to search for the Recipient to update in case it exists.
     */
    where: RecipientWhereUniqueInput
    /**
     * In case the Recipient found by the `where` argument doesn't exist, create a new Recipient with this data.
     */
    create: XOR<RecipientCreateInput, RecipientUncheckedCreateInput>
    /**
     * In case the Recipient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecipientUpdateInput, RecipientUncheckedUpdateInput>
  }


  /**
   * Recipient delete
   */
  export type RecipientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipient
     */
    select?: RecipientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipientInclude<ExtArgs> | null
    /**
     * Filter which Recipient to delete.
     */
    where: RecipientWhereUniqueInput
  }


  /**
   * Recipient deleteMany
   */
  export type RecipientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipients to delete
     */
    where?: RecipientWhereInput
  }


  /**
   * Recipient.favLogistics
   */
  export type Recipient$favLogisticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsMethod
     */
    select?: LogisticsMethodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LogisticsMethodInclude<ExtArgs> | null
    where?: LogisticsMethodWhereInput
    orderBy?: LogisticsMethodOrderByWithRelationInput | LogisticsMethodOrderByWithRelationInput[]
    cursor?: LogisticsMethodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogisticsMethodScalarFieldEnum | LogisticsMethodScalarFieldEnum[]
  }


  /**
   * Recipient.historyOrder
   */
  export type Recipient$historyOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoodsDelivery
     */
    select?: GoodsDeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GoodsDeliveryInclude<ExtArgs> | null
    where?: GoodsDeliveryWhereInput
    orderBy?: GoodsDeliveryOrderByWithRelationInput | GoodsDeliveryOrderByWithRelationInput[]
    cursor?: GoodsDeliveryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GoodsDeliveryScalarFieldEnum | GoodsDeliveryScalarFieldEnum[]
  }


  /**
   * Recipient without action
   */
  export type RecipientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipient
     */
    select?: RecipientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipientInclude<ExtArgs> | null
  }



  /**
   * Model GoodsDelivery
   */

  export type AggregateGoodsDelivery = {
    _count: GoodsDeliveryCountAggregateOutputType | null
    _avg: GoodsDeliveryAvgAggregateOutputType | null
    _sum: GoodsDeliverySumAggregateOutputType | null
    _min: GoodsDeliveryMinAggregateOutputType | null
    _max: GoodsDeliveryMaxAggregateOutputType | null
  }

  export type GoodsDeliveryAvgAggregateOutputType = {
    subtotal: number | null
  }

  export type GoodsDeliverySumAggregateOutputType = {
    subtotal: number | null
  }

  export type GoodsDeliveryMinAggregateOutputType = {
    id: string | null
    subtotal: number | null
    logisticsMethodId: string | null
    recipientId: string | null
    couponId: string | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type GoodsDeliveryMaxAggregateOutputType = {
    id: string | null
    subtotal: number | null
    logisticsMethodId: string | null
    recipientId: string | null
    couponId: string | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type GoodsDeliveryCountAggregateOutputType = {
    id: number
    subtotal: number
    logisticsMethodId: number
    recipientId: number
    couponId: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type GoodsDeliveryAvgAggregateInputType = {
    subtotal?: true
  }

  export type GoodsDeliverySumAggregateInputType = {
    subtotal?: true
  }

  export type GoodsDeliveryMinAggregateInputType = {
    id?: true
    subtotal?: true
    logisticsMethodId?: true
    recipientId?: true
    couponId?: true
    updatedAt?: true
    createdAt?: true
  }

  export type GoodsDeliveryMaxAggregateInputType = {
    id?: true
    subtotal?: true
    logisticsMethodId?: true
    recipientId?: true
    couponId?: true
    updatedAt?: true
    createdAt?: true
  }

  export type GoodsDeliveryCountAggregateInputType = {
    id?: true
    subtotal?: true
    logisticsMethodId?: true
    recipientId?: true
    couponId?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type GoodsDeliveryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GoodsDelivery to aggregate.
     */
    where?: GoodsDeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoodsDeliveries to fetch.
     */
    orderBy?: GoodsDeliveryOrderByWithRelationInput | GoodsDeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GoodsDeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoodsDeliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoodsDeliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GoodsDeliveries
    **/
    _count?: true | GoodsDeliveryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GoodsDeliveryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GoodsDeliverySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GoodsDeliveryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GoodsDeliveryMaxAggregateInputType
  }

  export type GetGoodsDeliveryAggregateType<T extends GoodsDeliveryAggregateArgs> = {
        [P in keyof T & keyof AggregateGoodsDelivery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoodsDelivery[P]>
      : GetScalarType<T[P], AggregateGoodsDelivery[P]>
  }




  export type GoodsDeliveryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoodsDeliveryWhereInput
    orderBy?: GoodsDeliveryOrderByWithAggregationInput | GoodsDeliveryOrderByWithAggregationInput[]
    by: GoodsDeliveryScalarFieldEnum[] | GoodsDeliveryScalarFieldEnum
    having?: GoodsDeliveryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GoodsDeliveryCountAggregateInputType | true
    _avg?: GoodsDeliveryAvgAggregateInputType
    _sum?: GoodsDeliverySumAggregateInputType
    _min?: GoodsDeliveryMinAggregateInputType
    _max?: GoodsDeliveryMaxAggregateInputType
  }

  export type GoodsDeliveryGroupByOutputType = {
    id: string
    subtotal: number
    logisticsMethodId: string
    recipientId: string
    couponId: string | null
    updatedAt: Date
    createdAt: Date
    _count: GoodsDeliveryCountAggregateOutputType | null
    _avg: GoodsDeliveryAvgAggregateOutputType | null
    _sum: GoodsDeliverySumAggregateOutputType | null
    _min: GoodsDeliveryMinAggregateOutputType | null
    _max: GoodsDeliveryMaxAggregateOutputType | null
  }

  type GetGoodsDeliveryGroupByPayload<T extends GoodsDeliveryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GoodsDeliveryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GoodsDeliveryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GoodsDeliveryGroupByOutputType[P]>
            : GetScalarType<T[P], GoodsDeliveryGroupByOutputType[P]>
        }
      >
    >


  export type GoodsDeliverySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subtotal?: boolean
    logisticsMethodId?: boolean
    recipientId?: boolean
    couponId?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    cartItem?: boolean | GoodsDelivery$cartItemArgs<ExtArgs>
    logistics?: boolean | LogisticsMethodDefaultArgs<ExtArgs>
    recipient?: boolean | RecipientDefaultArgs<ExtArgs>
    coupon?: boolean | GoodsDelivery$couponArgs<ExtArgs>
    _count?: boolean | GoodsDeliveryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goodsDelivery"]>

  export type GoodsDeliverySelectScalar = {
    id?: boolean
    subtotal?: boolean
    logisticsMethodId?: boolean
    recipientId?: boolean
    couponId?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }

  export type GoodsDeliveryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cartItem?: boolean | GoodsDelivery$cartItemArgs<ExtArgs>
    logistics?: boolean | LogisticsMethodDefaultArgs<ExtArgs>
    recipient?: boolean | RecipientDefaultArgs<ExtArgs>
    coupon?: boolean | GoodsDelivery$couponArgs<ExtArgs>
    _count?: boolean | GoodsDeliveryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $GoodsDeliveryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GoodsDelivery"
    objects: {
      cartItem: Prisma.$CartItemPayload<ExtArgs>[]
      logistics: Prisma.$LogisticsMethodPayload<ExtArgs>
      recipient: Prisma.$RecipientPayload<ExtArgs>
      coupon: Prisma.$CouponPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      subtotal: number
      logisticsMethodId: string
      recipientId: string
      couponId: string | null
      updatedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["goodsDelivery"]>
    composites: {}
  }


  type GoodsDeliveryGetPayload<S extends boolean | null | undefined | GoodsDeliveryDefaultArgs> = $Result.GetResult<Prisma.$GoodsDeliveryPayload, S>

  type GoodsDeliveryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GoodsDeliveryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GoodsDeliveryCountAggregateInputType | true
    }

  export interface GoodsDeliveryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GoodsDelivery'], meta: { name: 'GoodsDelivery' } }
    /**
     * Find zero or one GoodsDelivery that matches the filter.
     * @param {GoodsDeliveryFindUniqueArgs} args - Arguments to find a GoodsDelivery
     * @example
     * // Get one GoodsDelivery
     * const goodsDelivery = await prisma.goodsDelivery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GoodsDeliveryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GoodsDeliveryFindUniqueArgs<ExtArgs>>
    ): Prisma__GoodsDeliveryClient<$Result.GetResult<Prisma.$GoodsDeliveryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one GoodsDelivery that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GoodsDeliveryFindUniqueOrThrowArgs} args - Arguments to find a GoodsDelivery
     * @example
     * // Get one GoodsDelivery
     * const goodsDelivery = await prisma.goodsDelivery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GoodsDeliveryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GoodsDeliveryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GoodsDeliveryClient<$Result.GetResult<Prisma.$GoodsDeliveryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first GoodsDelivery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoodsDeliveryFindFirstArgs} args - Arguments to find a GoodsDelivery
     * @example
     * // Get one GoodsDelivery
     * const goodsDelivery = await prisma.goodsDelivery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GoodsDeliveryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GoodsDeliveryFindFirstArgs<ExtArgs>>
    ): Prisma__GoodsDeliveryClient<$Result.GetResult<Prisma.$GoodsDeliveryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first GoodsDelivery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoodsDeliveryFindFirstOrThrowArgs} args - Arguments to find a GoodsDelivery
     * @example
     * // Get one GoodsDelivery
     * const goodsDelivery = await prisma.goodsDelivery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GoodsDeliveryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GoodsDeliveryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GoodsDeliveryClient<$Result.GetResult<Prisma.$GoodsDeliveryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more GoodsDeliveries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoodsDeliveryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GoodsDeliveries
     * const goodsDeliveries = await prisma.goodsDelivery.findMany()
     * 
     * // Get first 10 GoodsDeliveries
     * const goodsDeliveries = await prisma.goodsDelivery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const goodsDeliveryWithIdOnly = await prisma.goodsDelivery.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GoodsDeliveryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GoodsDeliveryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoodsDeliveryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a GoodsDelivery.
     * @param {GoodsDeliveryCreateArgs} args - Arguments to create a GoodsDelivery.
     * @example
     * // Create one GoodsDelivery
     * const GoodsDelivery = await prisma.goodsDelivery.create({
     *   data: {
     *     // ... data to create a GoodsDelivery
     *   }
     * })
     * 
    **/
    create<T extends GoodsDeliveryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GoodsDeliveryCreateArgs<ExtArgs>>
    ): Prisma__GoodsDeliveryClient<$Result.GetResult<Prisma.$GoodsDeliveryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many GoodsDeliveries.
     *     @param {GoodsDeliveryCreateManyArgs} args - Arguments to create many GoodsDeliveries.
     *     @example
     *     // Create many GoodsDeliveries
     *     const goodsDelivery = await prisma.goodsDelivery.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GoodsDeliveryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GoodsDeliveryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GoodsDelivery.
     * @param {GoodsDeliveryDeleteArgs} args - Arguments to delete one GoodsDelivery.
     * @example
     * // Delete one GoodsDelivery
     * const GoodsDelivery = await prisma.goodsDelivery.delete({
     *   where: {
     *     // ... filter to delete one GoodsDelivery
     *   }
     * })
     * 
    **/
    delete<T extends GoodsDeliveryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GoodsDeliveryDeleteArgs<ExtArgs>>
    ): Prisma__GoodsDeliveryClient<$Result.GetResult<Prisma.$GoodsDeliveryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one GoodsDelivery.
     * @param {GoodsDeliveryUpdateArgs} args - Arguments to update one GoodsDelivery.
     * @example
     * // Update one GoodsDelivery
     * const goodsDelivery = await prisma.goodsDelivery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GoodsDeliveryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GoodsDeliveryUpdateArgs<ExtArgs>>
    ): Prisma__GoodsDeliveryClient<$Result.GetResult<Prisma.$GoodsDeliveryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more GoodsDeliveries.
     * @param {GoodsDeliveryDeleteManyArgs} args - Arguments to filter GoodsDeliveries to delete.
     * @example
     * // Delete a few GoodsDeliveries
     * const { count } = await prisma.goodsDelivery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GoodsDeliveryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GoodsDeliveryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GoodsDeliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoodsDeliveryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GoodsDeliveries
     * const goodsDelivery = await prisma.goodsDelivery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GoodsDeliveryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GoodsDeliveryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GoodsDelivery.
     * @param {GoodsDeliveryUpsertArgs} args - Arguments to update or create a GoodsDelivery.
     * @example
     * // Update or create a GoodsDelivery
     * const goodsDelivery = await prisma.goodsDelivery.upsert({
     *   create: {
     *     // ... data to create a GoodsDelivery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GoodsDelivery we want to update
     *   }
     * })
    **/
    upsert<T extends GoodsDeliveryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GoodsDeliveryUpsertArgs<ExtArgs>>
    ): Prisma__GoodsDeliveryClient<$Result.GetResult<Prisma.$GoodsDeliveryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of GoodsDeliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoodsDeliveryCountArgs} args - Arguments to filter GoodsDeliveries to count.
     * @example
     * // Count the number of GoodsDeliveries
     * const count = await prisma.goodsDelivery.count({
     *   where: {
     *     // ... the filter for the GoodsDeliveries we want to count
     *   }
     * })
    **/
    count<T extends GoodsDeliveryCountArgs>(
      args?: Subset<T, GoodsDeliveryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GoodsDeliveryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GoodsDelivery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoodsDeliveryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GoodsDeliveryAggregateArgs>(args: Subset<T, GoodsDeliveryAggregateArgs>): Prisma.PrismaPromise<GetGoodsDeliveryAggregateType<T>>

    /**
     * Group by GoodsDelivery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoodsDeliveryGroupByArgs} args - Group by arguments.
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
      T extends GoodsDeliveryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GoodsDeliveryGroupByArgs['orderBy'] }
        : { orderBy?: GoodsDeliveryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GoodsDeliveryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoodsDeliveryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GoodsDelivery model
   */
  readonly fields: GoodsDeliveryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GoodsDelivery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GoodsDeliveryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    cartItem<T extends GoodsDelivery$cartItemArgs<ExtArgs> = {}>(args?: Subset<T, GoodsDelivery$cartItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, 'findMany'> | Null>;

    logistics<T extends LogisticsMethodDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LogisticsMethodDefaultArgs<ExtArgs>>): Prisma__LogisticsMethodClient<$Result.GetResult<Prisma.$LogisticsMethodPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    recipient<T extends RecipientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecipientDefaultArgs<ExtArgs>>): Prisma__RecipientClient<$Result.GetResult<Prisma.$RecipientPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    coupon<T extends GoodsDelivery$couponArgs<ExtArgs> = {}>(args?: Subset<T, GoodsDelivery$couponArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the GoodsDelivery model
   */ 
  interface GoodsDeliveryFieldRefs {
    readonly id: FieldRef<"GoodsDelivery", 'String'>
    readonly subtotal: FieldRef<"GoodsDelivery", 'Int'>
    readonly logisticsMethodId: FieldRef<"GoodsDelivery", 'String'>
    readonly recipientId: FieldRef<"GoodsDelivery", 'String'>
    readonly couponId: FieldRef<"GoodsDelivery", 'String'>
    readonly updatedAt: FieldRef<"GoodsDelivery", 'DateTime'>
    readonly createdAt: FieldRef<"GoodsDelivery", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * GoodsDelivery findUnique
   */
  export type GoodsDeliveryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoodsDelivery
     */
    select?: GoodsDeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GoodsDeliveryInclude<ExtArgs> | null
    /**
     * Filter, which GoodsDelivery to fetch.
     */
    where: GoodsDeliveryWhereUniqueInput
  }


  /**
   * GoodsDelivery findUniqueOrThrow
   */
  export type GoodsDeliveryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoodsDelivery
     */
    select?: GoodsDeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GoodsDeliveryInclude<ExtArgs> | null
    /**
     * Filter, which GoodsDelivery to fetch.
     */
    where: GoodsDeliveryWhereUniqueInput
  }


  /**
   * GoodsDelivery findFirst
   */
  export type GoodsDeliveryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoodsDelivery
     */
    select?: GoodsDeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GoodsDeliveryInclude<ExtArgs> | null
    /**
     * Filter, which GoodsDelivery to fetch.
     */
    where?: GoodsDeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoodsDeliveries to fetch.
     */
    orderBy?: GoodsDeliveryOrderByWithRelationInput | GoodsDeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GoodsDeliveries.
     */
    cursor?: GoodsDeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoodsDeliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoodsDeliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GoodsDeliveries.
     */
    distinct?: GoodsDeliveryScalarFieldEnum | GoodsDeliveryScalarFieldEnum[]
  }


  /**
   * GoodsDelivery findFirstOrThrow
   */
  export type GoodsDeliveryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoodsDelivery
     */
    select?: GoodsDeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GoodsDeliveryInclude<ExtArgs> | null
    /**
     * Filter, which GoodsDelivery to fetch.
     */
    where?: GoodsDeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoodsDeliveries to fetch.
     */
    orderBy?: GoodsDeliveryOrderByWithRelationInput | GoodsDeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GoodsDeliveries.
     */
    cursor?: GoodsDeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoodsDeliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoodsDeliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GoodsDeliveries.
     */
    distinct?: GoodsDeliveryScalarFieldEnum | GoodsDeliveryScalarFieldEnum[]
  }


  /**
   * GoodsDelivery findMany
   */
  export type GoodsDeliveryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoodsDelivery
     */
    select?: GoodsDeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GoodsDeliveryInclude<ExtArgs> | null
    /**
     * Filter, which GoodsDeliveries to fetch.
     */
    where?: GoodsDeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoodsDeliveries to fetch.
     */
    orderBy?: GoodsDeliveryOrderByWithRelationInput | GoodsDeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GoodsDeliveries.
     */
    cursor?: GoodsDeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoodsDeliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoodsDeliveries.
     */
    skip?: number
    distinct?: GoodsDeliveryScalarFieldEnum | GoodsDeliveryScalarFieldEnum[]
  }


  /**
   * GoodsDelivery create
   */
  export type GoodsDeliveryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoodsDelivery
     */
    select?: GoodsDeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GoodsDeliveryInclude<ExtArgs> | null
    /**
     * The data needed to create a GoodsDelivery.
     */
    data: XOR<GoodsDeliveryCreateInput, GoodsDeliveryUncheckedCreateInput>
  }


  /**
   * GoodsDelivery createMany
   */
  export type GoodsDeliveryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GoodsDeliveries.
     */
    data: GoodsDeliveryCreateManyInput | GoodsDeliveryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * GoodsDelivery update
   */
  export type GoodsDeliveryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoodsDelivery
     */
    select?: GoodsDeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GoodsDeliveryInclude<ExtArgs> | null
    /**
     * The data needed to update a GoodsDelivery.
     */
    data: XOR<GoodsDeliveryUpdateInput, GoodsDeliveryUncheckedUpdateInput>
    /**
     * Choose, which GoodsDelivery to update.
     */
    where: GoodsDeliveryWhereUniqueInput
  }


  /**
   * GoodsDelivery updateMany
   */
  export type GoodsDeliveryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GoodsDeliveries.
     */
    data: XOR<GoodsDeliveryUpdateManyMutationInput, GoodsDeliveryUncheckedUpdateManyInput>
    /**
     * Filter which GoodsDeliveries to update
     */
    where?: GoodsDeliveryWhereInput
  }


  /**
   * GoodsDelivery upsert
   */
  export type GoodsDeliveryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoodsDelivery
     */
    select?: GoodsDeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GoodsDeliveryInclude<ExtArgs> | null
    /**
     * The filter to search for the GoodsDelivery to update in case it exists.
     */
    where: GoodsDeliveryWhereUniqueInput
    /**
     * In case the GoodsDelivery found by the `where` argument doesn't exist, create a new GoodsDelivery with this data.
     */
    create: XOR<GoodsDeliveryCreateInput, GoodsDeliveryUncheckedCreateInput>
    /**
     * In case the GoodsDelivery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GoodsDeliveryUpdateInput, GoodsDeliveryUncheckedUpdateInput>
  }


  /**
   * GoodsDelivery delete
   */
  export type GoodsDeliveryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoodsDelivery
     */
    select?: GoodsDeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GoodsDeliveryInclude<ExtArgs> | null
    /**
     * Filter which GoodsDelivery to delete.
     */
    where: GoodsDeliveryWhereUniqueInput
  }


  /**
   * GoodsDelivery deleteMany
   */
  export type GoodsDeliveryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GoodsDeliveries to delete
     */
    where?: GoodsDeliveryWhereInput
  }


  /**
   * GoodsDelivery.cartItem
   */
  export type GoodsDelivery$cartItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartItemInclude<ExtArgs> | null
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    cursor?: CartItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }


  /**
   * GoodsDelivery.coupon
   */
  export type GoodsDelivery$couponArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CouponInclude<ExtArgs> | null
    where?: CouponWhereInput
  }


  /**
   * GoodsDelivery without action
   */
  export type GoodsDeliveryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoodsDelivery
     */
    select?: GoodsDeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GoodsDeliveryInclude<ExtArgs> | null
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


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AddressScalarFieldEnum: {
    id: 'id',
    city: 'city',
    district: 'district',
    street: 'street'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const ShoppingItemScalarFieldEnum: {
    id: 'id',
    itemName: 'itemName',
    itemSubtitle: 'itemSubtitle',
    itemDescription: 'itemDescription',
    imageSrc: 'imageSrc',
    imageAlt: 'imageAlt',
    itemPrice: 'itemPrice',
    itemSpecialPrice: 'itemSpecialPrice',
    itemAvailableQuantity: 'itemAvailableQuantity',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type ShoppingItemScalarFieldEnum = (typeof ShoppingItemScalarFieldEnum)[keyof typeof ShoppingItemScalarFieldEnum]


  export const LogisticsMethodScalarFieldEnum: {
    id: 'id',
    logisticsType: 'logisticsType',
    logisticsMode: 'logisticsMode',
    logisticsName: 'logisticsName',
    freight: 'freight',
    payment: 'payment',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type LogisticsMethodScalarFieldEnum = (typeof LogisticsMethodScalarFieldEnum)[keyof typeof LogisticsMethodScalarFieldEnum]


  export const CouponScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    description: 'description',
    threshold: 'threshold',
    active: 'active',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type CouponScalarFieldEnum = (typeof CouponScalarFieldEnum)[keyof typeof CouponScalarFieldEnum]


  export const CartItemScalarFieldEnum: {
    id: 'id',
    shoppingItemId: 'shoppingItemId',
    quantity: 'quantity',
    subtotal: 'subtotal',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    goodsDeliveryId: 'goodsDeliveryId'
  };

  export type CartItemScalarFieldEnum = (typeof CartItemScalarFieldEnum)[keyof typeof CartItemScalarFieldEnum]


  export const RecipientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    cellphone: 'cellphone',
    email: 'email',
    gender: 'gender',
    timeToReceive: 'timeToReceive',
    note: 'note',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    addressId: 'addressId'
  };

  export type RecipientScalarFieldEnum = (typeof RecipientScalarFieldEnum)[keyof typeof RecipientScalarFieldEnum]


  export const GoodsDeliveryScalarFieldEnum: {
    id: 'id',
    subtotal: 'subtotal',
    logisticsMethodId: 'logisticsMethodId',
    recipientId: 'recipientId',
    couponId: 'couponId',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type GoodsDeliveryScalarFieldEnum = (typeof GoodsDeliveryScalarFieldEnum)[keyof typeof GoodsDeliveryScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    id?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    district?: StringFilter<"Address"> | string
    street?: StringFilter<"Address"> | string
    Recipient?: RecipientListRelationFilter
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    city?: SortOrder
    district?: SortOrder
    street?: SortOrder
    Recipient?: RecipientOrderByRelationAggregateInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    city?: StringFilter<"Address"> | string
    district?: StringFilter<"Address"> | string
    street?: StringFilter<"Address"> | string
    Recipient?: RecipientListRelationFilter
  }, "id">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    city?: SortOrder
    district?: SortOrder
    street?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Address"> | string
    city?: StringWithAggregatesFilter<"Address"> | string
    district?: StringWithAggregatesFilter<"Address"> | string
    street?: StringWithAggregatesFilter<"Address"> | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type ShoppingItemWhereInput = {
    AND?: ShoppingItemWhereInput | ShoppingItemWhereInput[]
    OR?: ShoppingItemWhereInput[]
    NOT?: ShoppingItemWhereInput | ShoppingItemWhereInput[]
    id?: StringFilter<"ShoppingItem"> | string
    itemName?: StringFilter<"ShoppingItem"> | string
    itemSubtitle?: StringFilter<"ShoppingItem"> | string
    itemDescription?: StringFilter<"ShoppingItem"> | string
    imageSrc?: StringFilter<"ShoppingItem"> | string
    imageAlt?: StringFilter<"ShoppingItem"> | string
    itemPrice?: IntFilter<"ShoppingItem"> | number
    itemSpecialPrice?: IntNullableFilter<"ShoppingItem"> | number | null
    itemAvailableQuantity?: IntFilter<"ShoppingItem"> | number
    updatedAt?: DateTimeFilter<"ShoppingItem"> | Date | string
    createdAt?: DateTimeFilter<"ShoppingItem"> | Date | string
    cartItem?: CartItemListRelationFilter
  }

  export type ShoppingItemOrderByWithRelationInput = {
    id?: SortOrder
    itemName?: SortOrder
    itemSubtitle?: SortOrder
    itemDescription?: SortOrder
    imageSrc?: SortOrder
    imageAlt?: SortOrder
    itemPrice?: SortOrder
    itemSpecialPrice?: SortOrderInput | SortOrder
    itemAvailableQuantity?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    cartItem?: CartItemOrderByRelationAggregateInput
  }

  export type ShoppingItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    itemName?: string
    AND?: ShoppingItemWhereInput | ShoppingItemWhereInput[]
    OR?: ShoppingItemWhereInput[]
    NOT?: ShoppingItemWhereInput | ShoppingItemWhereInput[]
    itemSubtitle?: StringFilter<"ShoppingItem"> | string
    itemDescription?: StringFilter<"ShoppingItem"> | string
    imageSrc?: StringFilter<"ShoppingItem"> | string
    imageAlt?: StringFilter<"ShoppingItem"> | string
    itemPrice?: IntFilter<"ShoppingItem"> | number
    itemSpecialPrice?: IntNullableFilter<"ShoppingItem"> | number | null
    itemAvailableQuantity?: IntFilter<"ShoppingItem"> | number
    updatedAt?: DateTimeFilter<"ShoppingItem"> | Date | string
    createdAt?: DateTimeFilter<"ShoppingItem"> | Date | string
    cartItem?: CartItemListRelationFilter
  }, "id" | "itemName">

  export type ShoppingItemOrderByWithAggregationInput = {
    id?: SortOrder
    itemName?: SortOrder
    itemSubtitle?: SortOrder
    itemDescription?: SortOrder
    imageSrc?: SortOrder
    imageAlt?: SortOrder
    itemPrice?: SortOrder
    itemSpecialPrice?: SortOrderInput | SortOrder
    itemAvailableQuantity?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: ShoppingItemCountOrderByAggregateInput
    _avg?: ShoppingItemAvgOrderByAggregateInput
    _max?: ShoppingItemMaxOrderByAggregateInput
    _min?: ShoppingItemMinOrderByAggregateInput
    _sum?: ShoppingItemSumOrderByAggregateInput
  }

  export type ShoppingItemScalarWhereWithAggregatesInput = {
    AND?: ShoppingItemScalarWhereWithAggregatesInput | ShoppingItemScalarWhereWithAggregatesInput[]
    OR?: ShoppingItemScalarWhereWithAggregatesInput[]
    NOT?: ShoppingItemScalarWhereWithAggregatesInput | ShoppingItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShoppingItem"> | string
    itemName?: StringWithAggregatesFilter<"ShoppingItem"> | string
    itemSubtitle?: StringWithAggregatesFilter<"ShoppingItem"> | string
    itemDescription?: StringWithAggregatesFilter<"ShoppingItem"> | string
    imageSrc?: StringWithAggregatesFilter<"ShoppingItem"> | string
    imageAlt?: StringWithAggregatesFilter<"ShoppingItem"> | string
    itemPrice?: IntWithAggregatesFilter<"ShoppingItem"> | number
    itemSpecialPrice?: IntNullableWithAggregatesFilter<"ShoppingItem"> | number | null
    itemAvailableQuantity?: IntWithAggregatesFilter<"ShoppingItem"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"ShoppingItem"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"ShoppingItem"> | Date | string
  }

  export type LogisticsMethodWhereInput = {
    AND?: LogisticsMethodWhereInput | LogisticsMethodWhereInput[]
    OR?: LogisticsMethodWhereInput[]
    NOT?: LogisticsMethodWhereInput | LogisticsMethodWhereInput[]
    id?: StringFilter<"LogisticsMethod"> | string
    logisticsType?: StringFilter<"LogisticsMethod"> | string
    logisticsMode?: StringFilter<"LogisticsMethod"> | string
    logisticsName?: StringFilter<"LogisticsMethod"> | string
    freight?: IntFilter<"LogisticsMethod"> | number
    payment?: IntFilter<"LogisticsMethod"> | number
    updatedAt?: DateTimeFilter<"LogisticsMethod"> | Date | string
    createdAt?: DateTimeFilter<"LogisticsMethod"> | Date | string
    goodsDelivery?: GoodsDeliveryListRelationFilter
    recipient?: RecipientListRelationFilter
  }

  export type LogisticsMethodOrderByWithRelationInput = {
    id?: SortOrder
    logisticsType?: SortOrder
    logisticsMode?: SortOrder
    logisticsName?: SortOrder
    freight?: SortOrder
    payment?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    goodsDelivery?: GoodsDeliveryOrderByRelationAggregateInput
    recipient?: RecipientOrderByRelationAggregateInput
  }

  export type LogisticsMethodWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    logisticsType_logisticsMode?: LogisticsMethodLogisticsTypeLogisticsModeCompoundUniqueInput
    AND?: LogisticsMethodWhereInput | LogisticsMethodWhereInput[]
    OR?: LogisticsMethodWhereInput[]
    NOT?: LogisticsMethodWhereInput | LogisticsMethodWhereInput[]
    logisticsType?: StringFilter<"LogisticsMethod"> | string
    logisticsMode?: StringFilter<"LogisticsMethod"> | string
    logisticsName?: StringFilter<"LogisticsMethod"> | string
    freight?: IntFilter<"LogisticsMethod"> | number
    payment?: IntFilter<"LogisticsMethod"> | number
    updatedAt?: DateTimeFilter<"LogisticsMethod"> | Date | string
    createdAt?: DateTimeFilter<"LogisticsMethod"> | Date | string
    goodsDelivery?: GoodsDeliveryListRelationFilter
    recipient?: RecipientListRelationFilter
  }, "id" | "logisticsType_logisticsMode">

  export type LogisticsMethodOrderByWithAggregationInput = {
    id?: SortOrder
    logisticsType?: SortOrder
    logisticsMode?: SortOrder
    logisticsName?: SortOrder
    freight?: SortOrder
    payment?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: LogisticsMethodCountOrderByAggregateInput
    _avg?: LogisticsMethodAvgOrderByAggregateInput
    _max?: LogisticsMethodMaxOrderByAggregateInput
    _min?: LogisticsMethodMinOrderByAggregateInput
    _sum?: LogisticsMethodSumOrderByAggregateInput
  }

  export type LogisticsMethodScalarWhereWithAggregatesInput = {
    AND?: LogisticsMethodScalarWhereWithAggregatesInput | LogisticsMethodScalarWhereWithAggregatesInput[]
    OR?: LogisticsMethodScalarWhereWithAggregatesInput[]
    NOT?: LogisticsMethodScalarWhereWithAggregatesInput | LogisticsMethodScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LogisticsMethod"> | string
    logisticsType?: StringWithAggregatesFilter<"LogisticsMethod"> | string
    logisticsMode?: StringWithAggregatesFilter<"LogisticsMethod"> | string
    logisticsName?: StringWithAggregatesFilter<"LogisticsMethod"> | string
    freight?: IntWithAggregatesFilter<"LogisticsMethod"> | number
    payment?: IntWithAggregatesFilter<"LogisticsMethod"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"LogisticsMethod"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"LogisticsMethod"> | Date | string
  }

  export type CouponWhereInput = {
    AND?: CouponWhereInput | CouponWhereInput[]
    OR?: CouponWhereInput[]
    NOT?: CouponWhereInput | CouponWhereInput[]
    id?: StringFilter<"Coupon"> | string
    code?: StringFilter<"Coupon"> | string
    name?: StringFilter<"Coupon"> | string
    description?: StringFilter<"Coupon"> | string
    threshold?: IntFilter<"Coupon"> | number
    active?: BoolFilter<"Coupon"> | boolean
    updatedAt?: DateTimeFilter<"Coupon"> | Date | string
    createdAt?: DateTimeFilter<"Coupon"> | Date | string
    GoodsDelivery?: GoodsDeliveryListRelationFilter
  }

  export type CouponOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    threshold?: SortOrder
    active?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    GoodsDelivery?: GoodsDeliveryOrderByRelationAggregateInput
  }

  export type CouponWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: CouponWhereInput | CouponWhereInput[]
    OR?: CouponWhereInput[]
    NOT?: CouponWhereInput | CouponWhereInput[]
    name?: StringFilter<"Coupon"> | string
    description?: StringFilter<"Coupon"> | string
    threshold?: IntFilter<"Coupon"> | number
    active?: BoolFilter<"Coupon"> | boolean
    updatedAt?: DateTimeFilter<"Coupon"> | Date | string
    createdAt?: DateTimeFilter<"Coupon"> | Date | string
    GoodsDelivery?: GoodsDeliveryListRelationFilter
  }, "id" | "code">

  export type CouponOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    threshold?: SortOrder
    active?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: CouponCountOrderByAggregateInput
    _avg?: CouponAvgOrderByAggregateInput
    _max?: CouponMaxOrderByAggregateInput
    _min?: CouponMinOrderByAggregateInput
    _sum?: CouponSumOrderByAggregateInput
  }

  export type CouponScalarWhereWithAggregatesInput = {
    AND?: CouponScalarWhereWithAggregatesInput | CouponScalarWhereWithAggregatesInput[]
    OR?: CouponScalarWhereWithAggregatesInput[]
    NOT?: CouponScalarWhereWithAggregatesInput | CouponScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Coupon"> | string
    code?: StringWithAggregatesFilter<"Coupon"> | string
    name?: StringWithAggregatesFilter<"Coupon"> | string
    description?: StringWithAggregatesFilter<"Coupon"> | string
    threshold?: IntWithAggregatesFilter<"Coupon"> | number
    active?: BoolWithAggregatesFilter<"Coupon"> | boolean
    updatedAt?: DateTimeWithAggregatesFilter<"Coupon"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Coupon"> | Date | string
  }

  export type CartItemWhereInput = {
    AND?: CartItemWhereInput | CartItemWhereInput[]
    OR?: CartItemWhereInput[]
    NOT?: CartItemWhereInput | CartItemWhereInput[]
    id?: StringFilter<"CartItem"> | string
    shoppingItemId?: StringFilter<"CartItem"> | string
    quantity?: IntFilter<"CartItem"> | number
    subtotal?: IntFilter<"CartItem"> | number
    updatedAt?: DateTimeFilter<"CartItem"> | Date | string
    createdAt?: DateTimeFilter<"CartItem"> | Date | string
    goodsDeliveryId?: StringNullableFilter<"CartItem"> | string | null
    shoppingItem?: XOR<ShoppingItemRelationFilter, ShoppingItemWhereInput>
    GoodsDelivery?: XOR<GoodsDeliveryNullableRelationFilter, GoodsDeliveryWhereInput> | null
  }

  export type CartItemOrderByWithRelationInput = {
    id?: SortOrder
    shoppingItemId?: SortOrder
    quantity?: SortOrder
    subtotal?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    goodsDeliveryId?: SortOrderInput | SortOrder
    shoppingItem?: ShoppingItemOrderByWithRelationInput
    GoodsDelivery?: GoodsDeliveryOrderByWithRelationInput
  }

  export type CartItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CartItemWhereInput | CartItemWhereInput[]
    OR?: CartItemWhereInput[]
    NOT?: CartItemWhereInput | CartItemWhereInput[]
    shoppingItemId?: StringFilter<"CartItem"> | string
    quantity?: IntFilter<"CartItem"> | number
    subtotal?: IntFilter<"CartItem"> | number
    updatedAt?: DateTimeFilter<"CartItem"> | Date | string
    createdAt?: DateTimeFilter<"CartItem"> | Date | string
    goodsDeliveryId?: StringNullableFilter<"CartItem"> | string | null
    shoppingItem?: XOR<ShoppingItemRelationFilter, ShoppingItemWhereInput>
    GoodsDelivery?: XOR<GoodsDeliveryNullableRelationFilter, GoodsDeliveryWhereInput> | null
  }, "id">

  export type CartItemOrderByWithAggregationInput = {
    id?: SortOrder
    shoppingItemId?: SortOrder
    quantity?: SortOrder
    subtotal?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    goodsDeliveryId?: SortOrderInput | SortOrder
    _count?: CartItemCountOrderByAggregateInput
    _avg?: CartItemAvgOrderByAggregateInput
    _max?: CartItemMaxOrderByAggregateInput
    _min?: CartItemMinOrderByAggregateInput
    _sum?: CartItemSumOrderByAggregateInput
  }

  export type CartItemScalarWhereWithAggregatesInput = {
    AND?: CartItemScalarWhereWithAggregatesInput | CartItemScalarWhereWithAggregatesInput[]
    OR?: CartItemScalarWhereWithAggregatesInput[]
    NOT?: CartItemScalarWhereWithAggregatesInput | CartItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CartItem"> | string
    shoppingItemId?: StringWithAggregatesFilter<"CartItem"> | string
    quantity?: IntWithAggregatesFilter<"CartItem"> | number
    subtotal?: IntWithAggregatesFilter<"CartItem"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"CartItem"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"CartItem"> | Date | string
    goodsDeliveryId?: StringNullableWithAggregatesFilter<"CartItem"> | string | null
  }

  export type RecipientWhereInput = {
    AND?: RecipientWhereInput | RecipientWhereInput[]
    OR?: RecipientWhereInput[]
    NOT?: RecipientWhereInput | RecipientWhereInput[]
    id?: StringFilter<"Recipient"> | string
    name?: StringFilter<"Recipient"> | string
    cellphone?: StringFilter<"Recipient"> | string
    email?: StringFilter<"Recipient"> | string
    gender?: StringFilter<"Recipient"> | string
    timeToReceive?: StringFilter<"Recipient"> | string
    note?: StringNullableFilter<"Recipient"> | string | null
    updatedAt?: DateTimeFilter<"Recipient"> | Date | string
    createdAt?: DateTimeFilter<"Recipient"> | Date | string
    addressId?: StringFilter<"Recipient"> | string
    address?: XOR<AddressRelationFilter, AddressWhereInput>
    favLogistics?: LogisticsMethodListRelationFilter
    historyOrder?: GoodsDeliveryListRelationFilter
  }

  export type RecipientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    cellphone?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    timeToReceive?: SortOrder
    note?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    addressId?: SortOrder
    address?: AddressOrderByWithRelationInput
    favLogistics?: LogisticsMethodOrderByRelationAggregateInput
    historyOrder?: GoodsDeliveryOrderByRelationAggregateInput
  }

  export type RecipientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecipientWhereInput | RecipientWhereInput[]
    OR?: RecipientWhereInput[]
    NOT?: RecipientWhereInput | RecipientWhereInput[]
    name?: StringFilter<"Recipient"> | string
    cellphone?: StringFilter<"Recipient"> | string
    email?: StringFilter<"Recipient"> | string
    gender?: StringFilter<"Recipient"> | string
    timeToReceive?: StringFilter<"Recipient"> | string
    note?: StringNullableFilter<"Recipient"> | string | null
    updatedAt?: DateTimeFilter<"Recipient"> | Date | string
    createdAt?: DateTimeFilter<"Recipient"> | Date | string
    addressId?: StringFilter<"Recipient"> | string
    address?: XOR<AddressRelationFilter, AddressWhereInput>
    favLogistics?: LogisticsMethodListRelationFilter
    historyOrder?: GoodsDeliveryListRelationFilter
  }, "id">

  export type RecipientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    cellphone?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    timeToReceive?: SortOrder
    note?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    addressId?: SortOrder
    _count?: RecipientCountOrderByAggregateInput
    _max?: RecipientMaxOrderByAggregateInput
    _min?: RecipientMinOrderByAggregateInput
  }

  export type RecipientScalarWhereWithAggregatesInput = {
    AND?: RecipientScalarWhereWithAggregatesInput | RecipientScalarWhereWithAggregatesInput[]
    OR?: RecipientScalarWhereWithAggregatesInput[]
    NOT?: RecipientScalarWhereWithAggregatesInput | RecipientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Recipient"> | string
    name?: StringWithAggregatesFilter<"Recipient"> | string
    cellphone?: StringWithAggregatesFilter<"Recipient"> | string
    email?: StringWithAggregatesFilter<"Recipient"> | string
    gender?: StringWithAggregatesFilter<"Recipient"> | string
    timeToReceive?: StringWithAggregatesFilter<"Recipient"> | string
    note?: StringNullableWithAggregatesFilter<"Recipient"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"Recipient"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Recipient"> | Date | string
    addressId?: StringWithAggregatesFilter<"Recipient"> | string
  }

  export type GoodsDeliveryWhereInput = {
    AND?: GoodsDeliveryWhereInput | GoodsDeliveryWhereInput[]
    OR?: GoodsDeliveryWhereInput[]
    NOT?: GoodsDeliveryWhereInput | GoodsDeliveryWhereInput[]
    id?: StringFilter<"GoodsDelivery"> | string
    subtotal?: IntFilter<"GoodsDelivery"> | number
    logisticsMethodId?: StringFilter<"GoodsDelivery"> | string
    recipientId?: StringFilter<"GoodsDelivery"> | string
    couponId?: StringNullableFilter<"GoodsDelivery"> | string | null
    updatedAt?: DateTimeFilter<"GoodsDelivery"> | Date | string
    createdAt?: DateTimeFilter<"GoodsDelivery"> | Date | string
    cartItem?: CartItemListRelationFilter
    logistics?: XOR<LogisticsMethodRelationFilter, LogisticsMethodWhereInput>
    recipient?: XOR<RecipientRelationFilter, RecipientWhereInput>
    coupon?: XOR<CouponNullableRelationFilter, CouponWhereInput> | null
  }

  export type GoodsDeliveryOrderByWithRelationInput = {
    id?: SortOrder
    subtotal?: SortOrder
    logisticsMethodId?: SortOrder
    recipientId?: SortOrder
    couponId?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    cartItem?: CartItemOrderByRelationAggregateInput
    logistics?: LogisticsMethodOrderByWithRelationInput
    recipient?: RecipientOrderByWithRelationInput
    coupon?: CouponOrderByWithRelationInput
  }

  export type GoodsDeliveryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GoodsDeliveryWhereInput | GoodsDeliveryWhereInput[]
    OR?: GoodsDeliveryWhereInput[]
    NOT?: GoodsDeliveryWhereInput | GoodsDeliveryWhereInput[]
    subtotal?: IntFilter<"GoodsDelivery"> | number
    logisticsMethodId?: StringFilter<"GoodsDelivery"> | string
    recipientId?: StringFilter<"GoodsDelivery"> | string
    couponId?: StringNullableFilter<"GoodsDelivery"> | string | null
    updatedAt?: DateTimeFilter<"GoodsDelivery"> | Date | string
    createdAt?: DateTimeFilter<"GoodsDelivery"> | Date | string
    cartItem?: CartItemListRelationFilter
    logistics?: XOR<LogisticsMethodRelationFilter, LogisticsMethodWhereInput>
    recipient?: XOR<RecipientRelationFilter, RecipientWhereInput>
    coupon?: XOR<CouponNullableRelationFilter, CouponWhereInput> | null
  }, "id">

  export type GoodsDeliveryOrderByWithAggregationInput = {
    id?: SortOrder
    subtotal?: SortOrder
    logisticsMethodId?: SortOrder
    recipientId?: SortOrder
    couponId?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: GoodsDeliveryCountOrderByAggregateInput
    _avg?: GoodsDeliveryAvgOrderByAggregateInput
    _max?: GoodsDeliveryMaxOrderByAggregateInput
    _min?: GoodsDeliveryMinOrderByAggregateInput
    _sum?: GoodsDeliverySumOrderByAggregateInput
  }

  export type GoodsDeliveryScalarWhereWithAggregatesInput = {
    AND?: GoodsDeliveryScalarWhereWithAggregatesInput | GoodsDeliveryScalarWhereWithAggregatesInput[]
    OR?: GoodsDeliveryScalarWhereWithAggregatesInput[]
    NOT?: GoodsDeliveryScalarWhereWithAggregatesInput | GoodsDeliveryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GoodsDelivery"> | string
    subtotal?: IntWithAggregatesFilter<"GoodsDelivery"> | number
    logisticsMethodId?: StringWithAggregatesFilter<"GoodsDelivery"> | string
    recipientId?: StringWithAggregatesFilter<"GoodsDelivery"> | string
    couponId?: StringNullableWithAggregatesFilter<"GoodsDelivery"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"GoodsDelivery"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"GoodsDelivery"> | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddressCreateInput = {
    id?: string
    city: string
    district: string
    street: string
    Recipient?: RecipientCreateNestedManyWithoutAddressInput
  }

  export type AddressUncheckedCreateInput = {
    id?: string
    city: string
    district: string
    street: string
    Recipient?: RecipientUncheckedCreateNestedManyWithoutAddressInput
  }

  export type AddressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    Recipient?: RecipientUpdateManyWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    Recipient?: RecipientUncheckedUpdateManyWithoutAddressNestedInput
  }

  export type AddressCreateManyInput = {
    id?: string
    city: string
    district: string
    street: string
  }

  export type AddressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShoppingItemCreateInput = {
    id?: string
    itemName: string
    itemSubtitle: string
    itemDescription: string
    imageSrc: string
    imageAlt: string
    itemPrice: number
    itemSpecialPrice?: number | null
    itemAvailableQuantity?: number
    updatedAt?: Date | string
    createdAt?: Date | string
    cartItem?: CartItemCreateNestedManyWithoutShoppingItemInput
  }

  export type ShoppingItemUncheckedCreateInput = {
    id?: string
    itemName: string
    itemSubtitle: string
    itemDescription: string
    imageSrc: string
    imageAlt: string
    itemPrice: number
    itemSpecialPrice?: number | null
    itemAvailableQuantity?: number
    updatedAt?: Date | string
    createdAt?: Date | string
    cartItem?: CartItemUncheckedCreateNestedManyWithoutShoppingItemInput
  }

  export type ShoppingItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    itemSubtitle?: StringFieldUpdateOperationsInput | string
    itemDescription?: StringFieldUpdateOperationsInput | string
    imageSrc?: StringFieldUpdateOperationsInput | string
    imageAlt?: StringFieldUpdateOperationsInput | string
    itemPrice?: IntFieldUpdateOperationsInput | number
    itemSpecialPrice?: NullableIntFieldUpdateOperationsInput | number | null
    itemAvailableQuantity?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cartItem?: CartItemUpdateManyWithoutShoppingItemNestedInput
  }

  export type ShoppingItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    itemSubtitle?: StringFieldUpdateOperationsInput | string
    itemDescription?: StringFieldUpdateOperationsInput | string
    imageSrc?: StringFieldUpdateOperationsInput | string
    imageAlt?: StringFieldUpdateOperationsInput | string
    itemPrice?: IntFieldUpdateOperationsInput | number
    itemSpecialPrice?: NullableIntFieldUpdateOperationsInput | number | null
    itemAvailableQuantity?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cartItem?: CartItemUncheckedUpdateManyWithoutShoppingItemNestedInput
  }

  export type ShoppingItemCreateManyInput = {
    id?: string
    itemName: string
    itemSubtitle: string
    itemDescription: string
    imageSrc: string
    imageAlt: string
    itemPrice: number
    itemSpecialPrice?: number | null
    itemAvailableQuantity?: number
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type ShoppingItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    itemSubtitle?: StringFieldUpdateOperationsInput | string
    itemDescription?: StringFieldUpdateOperationsInput | string
    imageSrc?: StringFieldUpdateOperationsInput | string
    imageAlt?: StringFieldUpdateOperationsInput | string
    itemPrice?: IntFieldUpdateOperationsInput | number
    itemSpecialPrice?: NullableIntFieldUpdateOperationsInput | number | null
    itemAvailableQuantity?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShoppingItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    itemSubtitle?: StringFieldUpdateOperationsInput | string
    itemDescription?: StringFieldUpdateOperationsInput | string
    imageSrc?: StringFieldUpdateOperationsInput | string
    imageAlt?: StringFieldUpdateOperationsInput | string
    itemPrice?: IntFieldUpdateOperationsInput | number
    itemSpecialPrice?: NullableIntFieldUpdateOperationsInput | number | null
    itemAvailableQuantity?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogisticsMethodCreateInput = {
    id?: string
    logisticsType: string
    logisticsMode: string
    logisticsName: string
    freight: number
    payment: number
    updatedAt?: Date | string
    createdAt?: Date | string
    goodsDelivery?: GoodsDeliveryCreateNestedManyWithoutLogisticsInput
    recipient?: RecipientCreateNestedManyWithoutFavLogisticsInput
  }

  export type LogisticsMethodUncheckedCreateInput = {
    id?: string
    logisticsType: string
    logisticsMode: string
    logisticsName: string
    freight: number
    payment: number
    updatedAt?: Date | string
    createdAt?: Date | string
    goodsDelivery?: GoodsDeliveryUncheckedCreateNestedManyWithoutLogisticsInput
    recipient?: RecipientUncheckedCreateNestedManyWithoutFavLogisticsInput
  }

  export type LogisticsMethodUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    logisticsType?: StringFieldUpdateOperationsInput | string
    logisticsMode?: StringFieldUpdateOperationsInput | string
    logisticsName?: StringFieldUpdateOperationsInput | string
    freight?: IntFieldUpdateOperationsInput | number
    payment?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goodsDelivery?: GoodsDeliveryUpdateManyWithoutLogisticsNestedInput
    recipient?: RecipientUpdateManyWithoutFavLogisticsNestedInput
  }

  export type LogisticsMethodUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    logisticsType?: StringFieldUpdateOperationsInput | string
    logisticsMode?: StringFieldUpdateOperationsInput | string
    logisticsName?: StringFieldUpdateOperationsInput | string
    freight?: IntFieldUpdateOperationsInput | number
    payment?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goodsDelivery?: GoodsDeliveryUncheckedUpdateManyWithoutLogisticsNestedInput
    recipient?: RecipientUncheckedUpdateManyWithoutFavLogisticsNestedInput
  }

  export type LogisticsMethodCreateManyInput = {
    id?: string
    logisticsType: string
    logisticsMode: string
    logisticsName: string
    freight: number
    payment: number
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type LogisticsMethodUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    logisticsType?: StringFieldUpdateOperationsInput | string
    logisticsMode?: StringFieldUpdateOperationsInput | string
    logisticsName?: StringFieldUpdateOperationsInput | string
    freight?: IntFieldUpdateOperationsInput | number
    payment?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogisticsMethodUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    logisticsType?: StringFieldUpdateOperationsInput | string
    logisticsMode?: StringFieldUpdateOperationsInput | string
    logisticsName?: StringFieldUpdateOperationsInput | string
    freight?: IntFieldUpdateOperationsInput | number
    payment?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponCreateInput = {
    id?: string
    code: string
    name: string
    description: string
    threshold: number
    active: boolean
    updatedAt?: Date | string
    createdAt?: Date | string
    GoodsDelivery?: GoodsDeliveryCreateNestedManyWithoutCouponInput
  }

  export type CouponUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    description: string
    threshold: number
    active: boolean
    updatedAt?: Date | string
    createdAt?: Date | string
    GoodsDelivery?: GoodsDeliveryUncheckedCreateNestedManyWithoutCouponInput
  }

  export type CouponUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    threshold?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    GoodsDelivery?: GoodsDeliveryUpdateManyWithoutCouponNestedInput
  }

  export type CouponUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    threshold?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    GoodsDelivery?: GoodsDeliveryUncheckedUpdateManyWithoutCouponNestedInput
  }

  export type CouponCreateManyInput = {
    id?: string
    code: string
    name: string
    description: string
    threshold: number
    active: boolean
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type CouponUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    threshold?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    threshold?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemCreateInput = {
    id?: string
    quantity: number
    subtotal: number
    updatedAt?: Date | string
    createdAt?: Date | string
    shoppingItem: ShoppingItemCreateNestedOneWithoutCartItemInput
    GoodsDelivery?: GoodsDeliveryCreateNestedOneWithoutCartItemInput
  }

  export type CartItemUncheckedCreateInput = {
    id?: string
    shoppingItemId: string
    quantity: number
    subtotal: number
    updatedAt?: Date | string
    createdAt?: Date | string
    goodsDeliveryId?: string | null
  }

  export type CartItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shoppingItem?: ShoppingItemUpdateOneRequiredWithoutCartItemNestedInput
    GoodsDelivery?: GoodsDeliveryUpdateOneWithoutCartItemNestedInput
  }

  export type CartItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shoppingItemId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goodsDeliveryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CartItemCreateManyInput = {
    id?: string
    shoppingItemId: string
    quantity: number
    subtotal: number
    updatedAt?: Date | string
    createdAt?: Date | string
    goodsDeliveryId?: string | null
  }

  export type CartItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shoppingItemId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goodsDeliveryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecipientCreateInput = {
    id?: string
    name: string
    cellphone: string
    email: string
    gender: string
    timeToReceive: string
    note?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
    address: AddressCreateNestedOneWithoutRecipientInput
    favLogistics?: LogisticsMethodCreateNestedManyWithoutRecipientInput
    historyOrder?: GoodsDeliveryCreateNestedManyWithoutRecipientInput
  }

  export type RecipientUncheckedCreateInput = {
    id?: string
    name: string
    cellphone: string
    email: string
    gender: string
    timeToReceive: string
    note?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
    addressId: string
    favLogistics?: LogisticsMethodUncheckedCreateNestedManyWithoutRecipientInput
    historyOrder?: GoodsDeliveryUncheckedCreateNestedManyWithoutRecipientInput
  }

  export type RecipientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cellphone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    timeToReceive?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateOneRequiredWithoutRecipientNestedInput
    favLogistics?: LogisticsMethodUpdateManyWithoutRecipientNestedInput
    historyOrder?: GoodsDeliveryUpdateManyWithoutRecipientNestedInput
  }

  export type RecipientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cellphone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    timeToReceive?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addressId?: StringFieldUpdateOperationsInput | string
    favLogistics?: LogisticsMethodUncheckedUpdateManyWithoutRecipientNestedInput
    historyOrder?: GoodsDeliveryUncheckedUpdateManyWithoutRecipientNestedInput
  }

  export type RecipientCreateManyInput = {
    id?: string
    name: string
    cellphone: string
    email: string
    gender: string
    timeToReceive: string
    note?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
    addressId: string
  }

  export type RecipientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cellphone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    timeToReceive?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cellphone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    timeToReceive?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addressId?: StringFieldUpdateOperationsInput | string
  }

  export type GoodsDeliveryCreateInput = {
    id?: string
    subtotal: number
    updatedAt?: Date | string
    createdAt?: Date | string
    cartItem?: CartItemCreateNestedManyWithoutGoodsDeliveryInput
    logistics: LogisticsMethodCreateNestedOneWithoutGoodsDeliveryInput
    recipient: RecipientCreateNestedOneWithoutHistoryOrderInput
    coupon?: CouponCreateNestedOneWithoutGoodsDeliveryInput
  }

  export type GoodsDeliveryUncheckedCreateInput = {
    id?: string
    subtotal: number
    logisticsMethodId: string
    recipientId: string
    couponId?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
    cartItem?: CartItemUncheckedCreateNestedManyWithoutGoodsDeliveryInput
  }

  export type GoodsDeliveryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subtotal?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cartItem?: CartItemUpdateManyWithoutGoodsDeliveryNestedInput
    logistics?: LogisticsMethodUpdateOneRequiredWithoutGoodsDeliveryNestedInput
    recipient?: RecipientUpdateOneRequiredWithoutHistoryOrderNestedInput
    coupon?: CouponUpdateOneWithoutGoodsDeliveryNestedInput
  }

  export type GoodsDeliveryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subtotal?: IntFieldUpdateOperationsInput | number
    logisticsMethodId?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    couponId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cartItem?: CartItemUncheckedUpdateManyWithoutGoodsDeliveryNestedInput
  }

  export type GoodsDeliveryCreateManyInput = {
    id?: string
    subtotal: number
    logisticsMethodId: string
    recipientId: string
    couponId?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type GoodsDeliveryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    subtotal?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoodsDeliveryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    subtotal?: IntFieldUpdateOperationsInput | number
    logisticsMethodId?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    couponId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
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

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
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

  export type RecipientListRelationFilter = {
    every?: RecipientWhereInput
    some?: RecipientWhereInput
    none?: RecipientWhereInput
  }

  export type RecipientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    city?: SortOrder
    district?: SortOrder
    street?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    city?: SortOrder
    district?: SortOrder
    street?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    city?: SortOrder
    district?: SortOrder
    street?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
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

  export type CartItemListRelationFilter = {
    every?: CartItemWhereInput
    some?: CartItemWhereInput
    none?: CartItemWhereInput
  }

  export type CartItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShoppingItemCountOrderByAggregateInput = {
    id?: SortOrder
    itemName?: SortOrder
    itemSubtitle?: SortOrder
    itemDescription?: SortOrder
    imageSrc?: SortOrder
    imageAlt?: SortOrder
    itemPrice?: SortOrder
    itemSpecialPrice?: SortOrder
    itemAvailableQuantity?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ShoppingItemAvgOrderByAggregateInput = {
    itemPrice?: SortOrder
    itemSpecialPrice?: SortOrder
    itemAvailableQuantity?: SortOrder
  }

  export type ShoppingItemMaxOrderByAggregateInput = {
    id?: SortOrder
    itemName?: SortOrder
    itemSubtitle?: SortOrder
    itemDescription?: SortOrder
    imageSrc?: SortOrder
    imageAlt?: SortOrder
    itemPrice?: SortOrder
    itemSpecialPrice?: SortOrder
    itemAvailableQuantity?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ShoppingItemMinOrderByAggregateInput = {
    id?: SortOrder
    itemName?: SortOrder
    itemSubtitle?: SortOrder
    itemDescription?: SortOrder
    imageSrc?: SortOrder
    imageAlt?: SortOrder
    itemPrice?: SortOrder
    itemSpecialPrice?: SortOrder
    itemAvailableQuantity?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ShoppingItemSumOrderByAggregateInput = {
    itemPrice?: SortOrder
    itemSpecialPrice?: SortOrder
    itemAvailableQuantity?: SortOrder
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

  export type GoodsDeliveryListRelationFilter = {
    every?: GoodsDeliveryWhereInput
    some?: GoodsDeliveryWhereInput
    none?: GoodsDeliveryWhereInput
  }

  export type GoodsDeliveryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LogisticsMethodLogisticsTypeLogisticsModeCompoundUniqueInput = {
    logisticsType: string
    logisticsMode: string
  }

  export type LogisticsMethodCountOrderByAggregateInput = {
    id?: SortOrder
    logisticsType?: SortOrder
    logisticsMode?: SortOrder
    logisticsName?: SortOrder
    freight?: SortOrder
    payment?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type LogisticsMethodAvgOrderByAggregateInput = {
    freight?: SortOrder
    payment?: SortOrder
  }

  export type LogisticsMethodMaxOrderByAggregateInput = {
    id?: SortOrder
    logisticsType?: SortOrder
    logisticsMode?: SortOrder
    logisticsName?: SortOrder
    freight?: SortOrder
    payment?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type LogisticsMethodMinOrderByAggregateInput = {
    id?: SortOrder
    logisticsType?: SortOrder
    logisticsMode?: SortOrder
    logisticsName?: SortOrder
    freight?: SortOrder
    payment?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type LogisticsMethodSumOrderByAggregateInput = {
    freight?: SortOrder
    payment?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CouponCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    threshold?: SortOrder
    active?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type CouponAvgOrderByAggregateInput = {
    threshold?: SortOrder
  }

  export type CouponMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    threshold?: SortOrder
    active?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type CouponMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    threshold?: SortOrder
    active?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type CouponSumOrderByAggregateInput = {
    threshold?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ShoppingItemRelationFilter = {
    is?: ShoppingItemWhereInput
    isNot?: ShoppingItemWhereInput
  }

  export type GoodsDeliveryNullableRelationFilter = {
    is?: GoodsDeliveryWhereInput | null
    isNot?: GoodsDeliveryWhereInput | null
  }

  export type CartItemCountOrderByAggregateInput = {
    id?: SortOrder
    shoppingItemId?: SortOrder
    quantity?: SortOrder
    subtotal?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    goodsDeliveryId?: SortOrder
  }

  export type CartItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    subtotal?: SortOrder
  }

  export type CartItemMaxOrderByAggregateInput = {
    id?: SortOrder
    shoppingItemId?: SortOrder
    quantity?: SortOrder
    subtotal?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    goodsDeliveryId?: SortOrder
  }

  export type CartItemMinOrderByAggregateInput = {
    id?: SortOrder
    shoppingItemId?: SortOrder
    quantity?: SortOrder
    subtotal?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    goodsDeliveryId?: SortOrder
  }

  export type CartItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    subtotal?: SortOrder
  }

  export type AddressRelationFilter = {
    is?: AddressWhereInput
    isNot?: AddressWhereInput
  }

  export type LogisticsMethodListRelationFilter = {
    every?: LogisticsMethodWhereInput
    some?: LogisticsMethodWhereInput
    none?: LogisticsMethodWhereInput
  }

  export type LogisticsMethodOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecipientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cellphone?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    timeToReceive?: SortOrder
    note?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    addressId?: SortOrder
  }

  export type RecipientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cellphone?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    timeToReceive?: SortOrder
    note?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    addressId?: SortOrder
  }

  export type RecipientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cellphone?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    timeToReceive?: SortOrder
    note?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    addressId?: SortOrder
  }

  export type LogisticsMethodRelationFilter = {
    is?: LogisticsMethodWhereInput
    isNot?: LogisticsMethodWhereInput
  }

  export type RecipientRelationFilter = {
    is?: RecipientWhereInput
    isNot?: RecipientWhereInput
  }

  export type CouponNullableRelationFilter = {
    is?: CouponWhereInput | null
    isNot?: CouponWhereInput | null
  }

  export type GoodsDeliveryCountOrderByAggregateInput = {
    id?: SortOrder
    subtotal?: SortOrder
    logisticsMethodId?: SortOrder
    recipientId?: SortOrder
    couponId?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type GoodsDeliveryAvgOrderByAggregateInput = {
    subtotal?: SortOrder
  }

  export type GoodsDeliveryMaxOrderByAggregateInput = {
    id?: SortOrder
    subtotal?: SortOrder
    logisticsMethodId?: SortOrder
    recipientId?: SortOrder
    couponId?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type GoodsDeliveryMinOrderByAggregateInput = {
    id?: SortOrder
    subtotal?: SortOrder
    logisticsMethodId?: SortOrder
    recipientId?: SortOrder
    couponId?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type GoodsDeliverySumOrderByAggregateInput = {
    subtotal?: SortOrder
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
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

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
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

  export type RecipientCreateNestedManyWithoutAddressInput = {
    create?: XOR<RecipientCreateWithoutAddressInput, RecipientUncheckedCreateWithoutAddressInput> | RecipientCreateWithoutAddressInput[] | RecipientUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: RecipientCreateOrConnectWithoutAddressInput | RecipientCreateOrConnectWithoutAddressInput[]
    createMany?: RecipientCreateManyAddressInputEnvelope
    connect?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
  }

  export type RecipientUncheckedCreateNestedManyWithoutAddressInput = {
    create?: XOR<RecipientCreateWithoutAddressInput, RecipientUncheckedCreateWithoutAddressInput> | RecipientCreateWithoutAddressInput[] | RecipientUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: RecipientCreateOrConnectWithoutAddressInput | RecipientCreateOrConnectWithoutAddressInput[]
    createMany?: RecipientCreateManyAddressInputEnvelope
    connect?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
  }

  export type RecipientUpdateManyWithoutAddressNestedInput = {
    create?: XOR<RecipientCreateWithoutAddressInput, RecipientUncheckedCreateWithoutAddressInput> | RecipientCreateWithoutAddressInput[] | RecipientUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: RecipientCreateOrConnectWithoutAddressInput | RecipientCreateOrConnectWithoutAddressInput[]
    upsert?: RecipientUpsertWithWhereUniqueWithoutAddressInput | RecipientUpsertWithWhereUniqueWithoutAddressInput[]
    createMany?: RecipientCreateManyAddressInputEnvelope
    set?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
    disconnect?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
    delete?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
    connect?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
    update?: RecipientUpdateWithWhereUniqueWithoutAddressInput | RecipientUpdateWithWhereUniqueWithoutAddressInput[]
    updateMany?: RecipientUpdateManyWithWhereWithoutAddressInput | RecipientUpdateManyWithWhereWithoutAddressInput[]
    deleteMany?: RecipientScalarWhereInput | RecipientScalarWhereInput[]
  }

  export type RecipientUncheckedUpdateManyWithoutAddressNestedInput = {
    create?: XOR<RecipientCreateWithoutAddressInput, RecipientUncheckedCreateWithoutAddressInput> | RecipientCreateWithoutAddressInput[] | RecipientUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: RecipientCreateOrConnectWithoutAddressInput | RecipientCreateOrConnectWithoutAddressInput[]
    upsert?: RecipientUpsertWithWhereUniqueWithoutAddressInput | RecipientUpsertWithWhereUniqueWithoutAddressInput[]
    createMany?: RecipientCreateManyAddressInputEnvelope
    set?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
    disconnect?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
    delete?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
    connect?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
    update?: RecipientUpdateWithWhereUniqueWithoutAddressInput | RecipientUpdateWithWhereUniqueWithoutAddressInput[]
    updateMany?: RecipientUpdateManyWithWhereWithoutAddressInput | RecipientUpdateManyWithWhereWithoutAddressInput[]
    deleteMany?: RecipientScalarWhereInput | RecipientScalarWhereInput[]
  }

  export type CartItemCreateNestedManyWithoutShoppingItemInput = {
    create?: XOR<CartItemCreateWithoutShoppingItemInput, CartItemUncheckedCreateWithoutShoppingItemInput> | CartItemCreateWithoutShoppingItemInput[] | CartItemUncheckedCreateWithoutShoppingItemInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutShoppingItemInput | CartItemCreateOrConnectWithoutShoppingItemInput[]
    createMany?: CartItemCreateManyShoppingItemInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type CartItemUncheckedCreateNestedManyWithoutShoppingItemInput = {
    create?: XOR<CartItemCreateWithoutShoppingItemInput, CartItemUncheckedCreateWithoutShoppingItemInput> | CartItemCreateWithoutShoppingItemInput[] | CartItemUncheckedCreateWithoutShoppingItemInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutShoppingItemInput | CartItemCreateOrConnectWithoutShoppingItemInput[]
    createMany?: CartItemCreateManyShoppingItemInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CartItemUpdateManyWithoutShoppingItemNestedInput = {
    create?: XOR<CartItemCreateWithoutShoppingItemInput, CartItemUncheckedCreateWithoutShoppingItemInput> | CartItemCreateWithoutShoppingItemInput[] | CartItemUncheckedCreateWithoutShoppingItemInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutShoppingItemInput | CartItemCreateOrConnectWithoutShoppingItemInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutShoppingItemInput | CartItemUpsertWithWhereUniqueWithoutShoppingItemInput[]
    createMany?: CartItemCreateManyShoppingItemInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutShoppingItemInput | CartItemUpdateWithWhereUniqueWithoutShoppingItemInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutShoppingItemInput | CartItemUpdateManyWithWhereWithoutShoppingItemInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type CartItemUncheckedUpdateManyWithoutShoppingItemNestedInput = {
    create?: XOR<CartItemCreateWithoutShoppingItemInput, CartItemUncheckedCreateWithoutShoppingItemInput> | CartItemCreateWithoutShoppingItemInput[] | CartItemUncheckedCreateWithoutShoppingItemInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutShoppingItemInput | CartItemCreateOrConnectWithoutShoppingItemInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutShoppingItemInput | CartItemUpsertWithWhereUniqueWithoutShoppingItemInput[]
    createMany?: CartItemCreateManyShoppingItemInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutShoppingItemInput | CartItemUpdateWithWhereUniqueWithoutShoppingItemInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutShoppingItemInput | CartItemUpdateManyWithWhereWithoutShoppingItemInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type GoodsDeliveryCreateNestedManyWithoutLogisticsInput = {
    create?: XOR<GoodsDeliveryCreateWithoutLogisticsInput, GoodsDeliveryUncheckedCreateWithoutLogisticsInput> | GoodsDeliveryCreateWithoutLogisticsInput[] | GoodsDeliveryUncheckedCreateWithoutLogisticsInput[]
    connectOrCreate?: GoodsDeliveryCreateOrConnectWithoutLogisticsInput | GoodsDeliveryCreateOrConnectWithoutLogisticsInput[]
    createMany?: GoodsDeliveryCreateManyLogisticsInputEnvelope
    connect?: GoodsDeliveryWhereUniqueInput | GoodsDeliveryWhereUniqueInput[]
  }

  export type RecipientCreateNestedManyWithoutFavLogisticsInput = {
    create?: XOR<RecipientCreateWithoutFavLogisticsInput, RecipientUncheckedCreateWithoutFavLogisticsInput> | RecipientCreateWithoutFavLogisticsInput[] | RecipientUncheckedCreateWithoutFavLogisticsInput[]
    connectOrCreate?: RecipientCreateOrConnectWithoutFavLogisticsInput | RecipientCreateOrConnectWithoutFavLogisticsInput[]
    connect?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
  }

  export type GoodsDeliveryUncheckedCreateNestedManyWithoutLogisticsInput = {
    create?: XOR<GoodsDeliveryCreateWithoutLogisticsInput, GoodsDeliveryUncheckedCreateWithoutLogisticsInput> | GoodsDeliveryCreateWithoutLogisticsInput[] | GoodsDeliveryUncheckedCreateWithoutLogisticsInput[]
    connectOrCreate?: GoodsDeliveryCreateOrConnectWithoutLogisticsInput | GoodsDeliveryCreateOrConnectWithoutLogisticsInput[]
    createMany?: GoodsDeliveryCreateManyLogisticsInputEnvelope
    connect?: GoodsDeliveryWhereUniqueInput | GoodsDeliveryWhereUniqueInput[]
  }

  export type RecipientUncheckedCreateNestedManyWithoutFavLogisticsInput = {
    create?: XOR<RecipientCreateWithoutFavLogisticsInput, RecipientUncheckedCreateWithoutFavLogisticsInput> | RecipientCreateWithoutFavLogisticsInput[] | RecipientUncheckedCreateWithoutFavLogisticsInput[]
    connectOrCreate?: RecipientCreateOrConnectWithoutFavLogisticsInput | RecipientCreateOrConnectWithoutFavLogisticsInput[]
    connect?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
  }

  export type GoodsDeliveryUpdateManyWithoutLogisticsNestedInput = {
    create?: XOR<GoodsDeliveryCreateWithoutLogisticsInput, GoodsDeliveryUncheckedCreateWithoutLogisticsInput> | GoodsDeliveryCreateWithoutLogisticsInput[] | GoodsDeliveryUncheckedCreateWithoutLogisticsInput[]
    connectOrCreate?: GoodsDeliveryCreateOrConnectWithoutLogisticsInput | GoodsDeliveryCreateOrConnectWithoutLogisticsInput[]
    upsert?: GoodsDeliveryUpsertWithWhereUniqueWithoutLogisticsInput | GoodsDeliveryUpsertWithWhereUniqueWithoutLogisticsInput[]
    createMany?: GoodsDeliveryCreateManyLogisticsInputEnvelope
    set?: GoodsDeliveryWhereUniqueInput | GoodsDeliveryWhereUniqueInput[]
    disconnect?: GoodsDeliveryWhereUniqueInput | GoodsDeliveryWhereUniqueInput[]
    delete?: GoodsDeliveryWhereUniqueInput | GoodsDeliveryWhereUniqueInput[]
    connect?: GoodsDeliveryWhereUniqueInput | GoodsDeliveryWhereUniqueInput[]
    update?: GoodsDeliveryUpdateWithWhereUniqueWithoutLogisticsInput | GoodsDeliveryUpdateWithWhereUniqueWithoutLogisticsInput[]
    updateMany?: GoodsDeliveryUpdateManyWithWhereWithoutLogisticsInput | GoodsDeliveryUpdateManyWithWhereWithoutLogisticsInput[]
    deleteMany?: GoodsDeliveryScalarWhereInput | GoodsDeliveryScalarWhereInput[]
  }

  export type RecipientUpdateManyWithoutFavLogisticsNestedInput = {
    create?: XOR<RecipientCreateWithoutFavLogisticsInput, RecipientUncheckedCreateWithoutFavLogisticsInput> | RecipientCreateWithoutFavLogisticsInput[] | RecipientUncheckedCreateWithoutFavLogisticsInput[]
    connectOrCreate?: RecipientCreateOrConnectWithoutFavLogisticsInput | RecipientCreateOrConnectWithoutFavLogisticsInput[]
    upsert?: RecipientUpsertWithWhereUniqueWithoutFavLogisticsInput | RecipientUpsertWithWhereUniqueWithoutFavLogisticsInput[]
    set?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
    disconnect?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
    delete?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
    connect?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
    update?: RecipientUpdateWithWhereUniqueWithoutFavLogisticsInput | RecipientUpdateWithWhereUniqueWithoutFavLogisticsInput[]
    updateMany?: RecipientUpdateManyWithWhereWithoutFavLogisticsInput | RecipientUpdateManyWithWhereWithoutFavLogisticsInput[]
    deleteMany?: RecipientScalarWhereInput | RecipientScalarWhereInput[]
  }

  export type GoodsDeliveryUncheckedUpdateManyWithoutLogisticsNestedInput = {
    create?: XOR<GoodsDeliveryCreateWithoutLogisticsInput, GoodsDeliveryUncheckedCreateWithoutLogisticsInput> | GoodsDeliveryCreateWithoutLogisticsInput[] | GoodsDeliveryUncheckedCreateWithoutLogisticsInput[]
    connectOrCreate?: GoodsDeliveryCreateOrConnectWithoutLogisticsInput | GoodsDeliveryCreateOrConnectWithoutLogisticsInput[]
    upsert?: GoodsDeliveryUpsertWithWhereUniqueWithoutLogisticsInput | GoodsDeliveryUpsertWithWhereUniqueWithoutLogisticsInput[]
    createMany?: GoodsDeliveryCreateManyLogisticsInputEnvelope
    set?: GoodsDeliveryWhereUniqueInput | GoodsDeliveryWhereUniqueInput[]
    disconnect?: GoodsDeliveryWhereUniqueInput | GoodsDeliveryWhereUniqueInput[]
    delete?: GoodsDeliveryWhereUniqueInput | GoodsDeliveryWhereUniqueInput[]
    connect?: GoodsDeliveryWhereUniqueInput | GoodsDeliveryWhereUniqueInput[]
    update?: GoodsDeliveryUpdateWithWhereUniqueWithoutLogisticsInput | GoodsDeliveryUpdateWithWhereUniqueWithoutLogisticsInput[]
    updateMany?: GoodsDeliveryUpdateManyWithWhereWithoutLogisticsInput | GoodsDeliveryUpdateManyWithWhereWithoutLogisticsInput[]
    deleteMany?: GoodsDeliveryScalarWhereInput | GoodsDeliveryScalarWhereInput[]
  }

  export type RecipientUncheckedUpdateManyWithoutFavLogisticsNestedInput = {
    create?: XOR<RecipientCreateWithoutFavLogisticsInput, RecipientUncheckedCreateWithoutFavLogisticsInput> | RecipientCreateWithoutFavLogisticsInput[] | RecipientUncheckedCreateWithoutFavLogisticsInput[]
    connectOrCreate?: RecipientCreateOrConnectWithoutFavLogisticsInput | RecipientCreateOrConnectWithoutFavLogisticsInput[]
    upsert?: RecipientUpsertWithWhereUniqueWithoutFavLogisticsInput | RecipientUpsertWithWhereUniqueWithoutFavLogisticsInput[]
    set?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
    disconnect?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
    delete?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
    connect?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
    update?: RecipientUpdateWithWhereUniqueWithoutFavLogisticsInput | RecipientUpdateWithWhereUniqueWithoutFavLogisticsInput[]
    updateMany?: RecipientUpdateManyWithWhereWithoutFavLogisticsInput | RecipientUpdateManyWithWhereWithoutFavLogisticsInput[]
    deleteMany?: RecipientScalarWhereInput | RecipientScalarWhereInput[]
  }

  export type GoodsDeliveryCreateNestedManyWithoutCouponInput = {
    create?: XOR<GoodsDeliveryCreateWithoutCouponInput, GoodsDeliveryUncheckedCreateWithoutCouponInput> | GoodsDeliveryCreateWithoutCouponInput[] | GoodsDeliveryUncheckedCreateWithoutCouponInput[]
    connectOrCreate?: GoodsDeliveryCreateOrConnectWithoutCouponInput | GoodsDeliveryCreateOrConnectWithoutCouponInput[]
    createMany?: GoodsDeliveryCreateManyCouponInputEnvelope
    connect?: GoodsDeliveryWhereUniqueInput | GoodsDeliveryWhereUniqueInput[]
  }

  export type GoodsDeliveryUncheckedCreateNestedManyWithoutCouponInput = {
    create?: XOR<GoodsDeliveryCreateWithoutCouponInput, GoodsDeliveryUncheckedCreateWithoutCouponInput> | GoodsDeliveryCreateWithoutCouponInput[] | GoodsDeliveryUncheckedCreateWithoutCouponInput[]
    connectOrCreate?: GoodsDeliveryCreateOrConnectWithoutCouponInput | GoodsDeliveryCreateOrConnectWithoutCouponInput[]
    createMany?: GoodsDeliveryCreateManyCouponInputEnvelope
    connect?: GoodsDeliveryWhereUniqueInput | GoodsDeliveryWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type GoodsDeliveryUpdateManyWithoutCouponNestedInput = {
    create?: XOR<GoodsDeliveryCreateWithoutCouponInput, GoodsDeliveryUncheckedCreateWithoutCouponInput> | GoodsDeliveryCreateWithoutCouponInput[] | GoodsDeliveryUncheckedCreateWithoutCouponInput[]
    connectOrCreate?: GoodsDeliveryCreateOrConnectWithoutCouponInput | GoodsDeliveryCreateOrConnectWithoutCouponInput[]
    upsert?: GoodsDeliveryUpsertWithWhereUniqueWithoutCouponInput | GoodsDeliveryUpsertWithWhereUniqueWithoutCouponInput[]
    createMany?: GoodsDeliveryCreateManyCouponInputEnvelope
    set?: GoodsDeliveryWhereUniqueInput | GoodsDeliveryWhereUniqueInput[]
    disconnect?: GoodsDeliveryWhereUniqueInput | GoodsDeliveryWhereUniqueInput[]
    delete?: GoodsDeliveryWhereUniqueInput | GoodsDeliveryWhereUniqueInput[]
    connect?: GoodsDeliveryWhereUniqueInput | GoodsDeliveryWhereUniqueInput[]
    update?: GoodsDeliveryUpdateWithWhereUniqueWithoutCouponInput | GoodsDeliveryUpdateWithWhereUniqueWithoutCouponInput[]
    updateMany?: GoodsDeliveryUpdateManyWithWhereWithoutCouponInput | GoodsDeliveryUpdateManyWithWhereWithoutCouponInput[]
    deleteMany?: GoodsDeliveryScalarWhereInput | GoodsDeliveryScalarWhereInput[]
  }

  export type GoodsDeliveryUncheckedUpdateManyWithoutCouponNestedInput = {
    create?: XOR<GoodsDeliveryCreateWithoutCouponInput, GoodsDeliveryUncheckedCreateWithoutCouponInput> | GoodsDeliveryCreateWithoutCouponInput[] | GoodsDeliveryUncheckedCreateWithoutCouponInput[]
    connectOrCreate?: GoodsDeliveryCreateOrConnectWithoutCouponInput | GoodsDeliveryCreateOrConnectWithoutCouponInput[]
    upsert?: GoodsDeliveryUpsertWithWhereUniqueWithoutCouponInput | GoodsDeliveryUpsertWithWhereUniqueWithoutCouponInput[]
    createMany?: GoodsDeliveryCreateManyCouponInputEnvelope
    set?: GoodsDeliveryWhereUniqueInput | GoodsDeliveryWhereUniqueInput[]
    disconnect?: GoodsDeliveryWhereUniqueInput | GoodsDeliveryWhereUniqueInput[]
    delete?: GoodsDeliveryWhereUniqueInput | GoodsDeliveryWhereUniqueInput[]
    connect?: GoodsDeliveryWhereUniqueInput | GoodsDeliveryWhereUniqueInput[]
    update?: GoodsDeliveryUpdateWithWhereUniqueWithoutCouponInput | GoodsDeliveryUpdateWithWhereUniqueWithoutCouponInput[]
    updateMany?: GoodsDeliveryUpdateManyWithWhereWithoutCouponInput | GoodsDeliveryUpdateManyWithWhereWithoutCouponInput[]
    deleteMany?: GoodsDeliveryScalarWhereInput | GoodsDeliveryScalarWhereInput[]
  }

  export type ShoppingItemCreateNestedOneWithoutCartItemInput = {
    create?: XOR<ShoppingItemCreateWithoutCartItemInput, ShoppingItemUncheckedCreateWithoutCartItemInput>
    connectOrCreate?: ShoppingItemCreateOrConnectWithoutCartItemInput
    connect?: ShoppingItemWhereUniqueInput
  }

  export type GoodsDeliveryCreateNestedOneWithoutCartItemInput = {
    create?: XOR<GoodsDeliveryCreateWithoutCartItemInput, GoodsDeliveryUncheckedCreateWithoutCartItemInput>
    connectOrCreate?: GoodsDeliveryCreateOrConnectWithoutCartItemInput
    connect?: GoodsDeliveryWhereUniqueInput
  }

  export type ShoppingItemUpdateOneRequiredWithoutCartItemNestedInput = {
    create?: XOR<ShoppingItemCreateWithoutCartItemInput, ShoppingItemUncheckedCreateWithoutCartItemInput>
    connectOrCreate?: ShoppingItemCreateOrConnectWithoutCartItemInput
    upsert?: ShoppingItemUpsertWithoutCartItemInput
    connect?: ShoppingItemWhereUniqueInput
    update?: XOR<XOR<ShoppingItemUpdateToOneWithWhereWithoutCartItemInput, ShoppingItemUpdateWithoutCartItemInput>, ShoppingItemUncheckedUpdateWithoutCartItemInput>
  }

  export type GoodsDeliveryUpdateOneWithoutCartItemNestedInput = {
    create?: XOR<GoodsDeliveryCreateWithoutCartItemInput, GoodsDeliveryUncheckedCreateWithoutCartItemInput>
    connectOrCreate?: GoodsDeliveryCreateOrConnectWithoutCartItemInput
    upsert?: GoodsDeliveryUpsertWithoutCartItemInput
    disconnect?: GoodsDeliveryWhereInput | boolean
    delete?: GoodsDeliveryWhereInput | boolean
    connect?: GoodsDeliveryWhereUniqueInput
    update?: XOR<XOR<GoodsDeliveryUpdateToOneWithWhereWithoutCartItemInput, GoodsDeliveryUpdateWithoutCartItemInput>, GoodsDeliveryUncheckedUpdateWithoutCartItemInput>
  }

  export type AddressCreateNestedOneWithoutRecipientInput = {
    create?: XOR<AddressCreateWithoutRecipientInput, AddressUncheckedCreateWithoutRecipientInput>
    connectOrCreate?: AddressCreateOrConnectWithoutRecipientInput
    connect?: AddressWhereUniqueInput
  }

  export type LogisticsMethodCreateNestedManyWithoutRecipientInput = {
    create?: XOR<LogisticsMethodCreateWithoutRecipientInput, LogisticsMethodUncheckedCreateWithoutRecipientInput> | LogisticsMethodCreateWithoutRecipientInput[] | LogisticsMethodUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: LogisticsMethodCreateOrConnectWithoutRecipientInput | LogisticsMethodCreateOrConnectWithoutRecipientInput[]
    connect?: LogisticsMethodWhereUniqueInput | LogisticsMethodWhereUniqueInput[]
  }

  export type GoodsDeliveryCreateNestedManyWithoutRecipientInput = {
    create?: XOR<GoodsDeliveryCreateWithoutRecipientInput, GoodsDeliveryUncheckedCreateWithoutRecipientInput> | GoodsDeliveryCreateWithoutRecipientInput[] | GoodsDeliveryUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: GoodsDeliveryCreateOrConnectWithoutRecipientInput | GoodsDeliveryCreateOrConnectWithoutRecipientInput[]
    createMany?: GoodsDeliveryCreateManyRecipientInputEnvelope
    connect?: GoodsDeliveryWhereUniqueInput | GoodsDeliveryWhereUniqueInput[]
  }

  export type LogisticsMethodUncheckedCreateNestedManyWithoutRecipientInput = {
    create?: XOR<LogisticsMethodCreateWithoutRecipientInput, LogisticsMethodUncheckedCreateWithoutRecipientInput> | LogisticsMethodCreateWithoutRecipientInput[] | LogisticsMethodUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: LogisticsMethodCreateOrConnectWithoutRecipientInput | LogisticsMethodCreateOrConnectWithoutRecipientInput[]
    connect?: LogisticsMethodWhereUniqueInput | LogisticsMethodWhereUniqueInput[]
  }

  export type GoodsDeliveryUncheckedCreateNestedManyWithoutRecipientInput = {
    create?: XOR<GoodsDeliveryCreateWithoutRecipientInput, GoodsDeliveryUncheckedCreateWithoutRecipientInput> | GoodsDeliveryCreateWithoutRecipientInput[] | GoodsDeliveryUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: GoodsDeliveryCreateOrConnectWithoutRecipientInput | GoodsDeliveryCreateOrConnectWithoutRecipientInput[]
    createMany?: GoodsDeliveryCreateManyRecipientInputEnvelope
    connect?: GoodsDeliveryWhereUniqueInput | GoodsDeliveryWhereUniqueInput[]
  }

  export type AddressUpdateOneRequiredWithoutRecipientNestedInput = {
    create?: XOR<AddressCreateWithoutRecipientInput, AddressUncheckedCreateWithoutRecipientInput>
    connectOrCreate?: AddressCreateOrConnectWithoutRecipientInput
    upsert?: AddressUpsertWithoutRecipientInput
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutRecipientInput, AddressUpdateWithoutRecipientInput>, AddressUncheckedUpdateWithoutRecipientInput>
  }

  export type LogisticsMethodUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<LogisticsMethodCreateWithoutRecipientInput, LogisticsMethodUncheckedCreateWithoutRecipientInput> | LogisticsMethodCreateWithoutRecipientInput[] | LogisticsMethodUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: LogisticsMethodCreateOrConnectWithoutRecipientInput | LogisticsMethodCreateOrConnectWithoutRecipientInput[]
    upsert?: LogisticsMethodUpsertWithWhereUniqueWithoutRecipientInput | LogisticsMethodUpsertWithWhereUniqueWithoutRecipientInput[]
    set?: LogisticsMethodWhereUniqueInput | LogisticsMethodWhereUniqueInput[]
    disconnect?: LogisticsMethodWhereUniqueInput | LogisticsMethodWhereUniqueInput[]
    delete?: LogisticsMethodWhereUniqueInput | LogisticsMethodWhereUniqueInput[]
    connect?: LogisticsMethodWhereUniqueInput | LogisticsMethodWhereUniqueInput[]
    update?: LogisticsMethodUpdateWithWhereUniqueWithoutRecipientInput | LogisticsMethodUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: LogisticsMethodUpdateManyWithWhereWithoutRecipientInput | LogisticsMethodUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: LogisticsMethodScalarWhereInput | LogisticsMethodScalarWhereInput[]
  }

  export type GoodsDeliveryUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<GoodsDeliveryCreateWithoutRecipientInput, GoodsDeliveryUncheckedCreateWithoutRecipientInput> | GoodsDeliveryCreateWithoutRecipientInput[] | GoodsDeliveryUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: GoodsDeliveryCreateOrConnectWithoutRecipientInput | GoodsDeliveryCreateOrConnectWithoutRecipientInput[]
    upsert?: GoodsDeliveryUpsertWithWhereUniqueWithoutRecipientInput | GoodsDeliveryUpsertWithWhereUniqueWithoutRecipientInput[]
    createMany?: GoodsDeliveryCreateManyRecipientInputEnvelope
    set?: GoodsDeliveryWhereUniqueInput | GoodsDeliveryWhereUniqueInput[]
    disconnect?: GoodsDeliveryWhereUniqueInput | GoodsDeliveryWhereUniqueInput[]
    delete?: GoodsDeliveryWhereUniqueInput | GoodsDeliveryWhereUniqueInput[]
    connect?: GoodsDeliveryWhereUniqueInput | GoodsDeliveryWhereUniqueInput[]
    update?: GoodsDeliveryUpdateWithWhereUniqueWithoutRecipientInput | GoodsDeliveryUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: GoodsDeliveryUpdateManyWithWhereWithoutRecipientInput | GoodsDeliveryUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: GoodsDeliveryScalarWhereInput | GoodsDeliveryScalarWhereInput[]
  }

  export type LogisticsMethodUncheckedUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<LogisticsMethodCreateWithoutRecipientInput, LogisticsMethodUncheckedCreateWithoutRecipientInput> | LogisticsMethodCreateWithoutRecipientInput[] | LogisticsMethodUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: LogisticsMethodCreateOrConnectWithoutRecipientInput | LogisticsMethodCreateOrConnectWithoutRecipientInput[]
    upsert?: LogisticsMethodUpsertWithWhereUniqueWithoutRecipientInput | LogisticsMethodUpsertWithWhereUniqueWithoutRecipientInput[]
    set?: LogisticsMethodWhereUniqueInput | LogisticsMethodWhereUniqueInput[]
    disconnect?: LogisticsMethodWhereUniqueInput | LogisticsMethodWhereUniqueInput[]
    delete?: LogisticsMethodWhereUniqueInput | LogisticsMethodWhereUniqueInput[]
    connect?: LogisticsMethodWhereUniqueInput | LogisticsMethodWhereUniqueInput[]
    update?: LogisticsMethodUpdateWithWhereUniqueWithoutRecipientInput | LogisticsMethodUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: LogisticsMethodUpdateManyWithWhereWithoutRecipientInput | LogisticsMethodUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: LogisticsMethodScalarWhereInput | LogisticsMethodScalarWhereInput[]
  }

  export type GoodsDeliveryUncheckedUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<GoodsDeliveryCreateWithoutRecipientInput, GoodsDeliveryUncheckedCreateWithoutRecipientInput> | GoodsDeliveryCreateWithoutRecipientInput[] | GoodsDeliveryUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: GoodsDeliveryCreateOrConnectWithoutRecipientInput | GoodsDeliveryCreateOrConnectWithoutRecipientInput[]
    upsert?: GoodsDeliveryUpsertWithWhereUniqueWithoutRecipientInput | GoodsDeliveryUpsertWithWhereUniqueWithoutRecipientInput[]
    createMany?: GoodsDeliveryCreateManyRecipientInputEnvelope
    set?: GoodsDeliveryWhereUniqueInput | GoodsDeliveryWhereUniqueInput[]
    disconnect?: GoodsDeliveryWhereUniqueInput | GoodsDeliveryWhereUniqueInput[]
    delete?: GoodsDeliveryWhereUniqueInput | GoodsDeliveryWhereUniqueInput[]
    connect?: GoodsDeliveryWhereUniqueInput | GoodsDeliveryWhereUniqueInput[]
    update?: GoodsDeliveryUpdateWithWhereUniqueWithoutRecipientInput | GoodsDeliveryUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: GoodsDeliveryUpdateManyWithWhereWithoutRecipientInput | GoodsDeliveryUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: GoodsDeliveryScalarWhereInput | GoodsDeliveryScalarWhereInput[]
  }

  export type CartItemCreateNestedManyWithoutGoodsDeliveryInput = {
    create?: XOR<CartItemCreateWithoutGoodsDeliveryInput, CartItemUncheckedCreateWithoutGoodsDeliveryInput> | CartItemCreateWithoutGoodsDeliveryInput[] | CartItemUncheckedCreateWithoutGoodsDeliveryInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutGoodsDeliveryInput | CartItemCreateOrConnectWithoutGoodsDeliveryInput[]
    createMany?: CartItemCreateManyGoodsDeliveryInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type LogisticsMethodCreateNestedOneWithoutGoodsDeliveryInput = {
    create?: XOR<LogisticsMethodCreateWithoutGoodsDeliveryInput, LogisticsMethodUncheckedCreateWithoutGoodsDeliveryInput>
    connectOrCreate?: LogisticsMethodCreateOrConnectWithoutGoodsDeliveryInput
    connect?: LogisticsMethodWhereUniqueInput
  }

  export type RecipientCreateNestedOneWithoutHistoryOrderInput = {
    create?: XOR<RecipientCreateWithoutHistoryOrderInput, RecipientUncheckedCreateWithoutHistoryOrderInput>
    connectOrCreate?: RecipientCreateOrConnectWithoutHistoryOrderInput
    connect?: RecipientWhereUniqueInput
  }

  export type CouponCreateNestedOneWithoutGoodsDeliveryInput = {
    create?: XOR<CouponCreateWithoutGoodsDeliveryInput, CouponUncheckedCreateWithoutGoodsDeliveryInput>
    connectOrCreate?: CouponCreateOrConnectWithoutGoodsDeliveryInput
    connect?: CouponWhereUniqueInput
  }

  export type CartItemUncheckedCreateNestedManyWithoutGoodsDeliveryInput = {
    create?: XOR<CartItemCreateWithoutGoodsDeliveryInput, CartItemUncheckedCreateWithoutGoodsDeliveryInput> | CartItemCreateWithoutGoodsDeliveryInput[] | CartItemUncheckedCreateWithoutGoodsDeliveryInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutGoodsDeliveryInput | CartItemCreateOrConnectWithoutGoodsDeliveryInput[]
    createMany?: CartItemCreateManyGoodsDeliveryInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type CartItemUpdateManyWithoutGoodsDeliveryNestedInput = {
    create?: XOR<CartItemCreateWithoutGoodsDeliveryInput, CartItemUncheckedCreateWithoutGoodsDeliveryInput> | CartItemCreateWithoutGoodsDeliveryInput[] | CartItemUncheckedCreateWithoutGoodsDeliveryInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutGoodsDeliveryInput | CartItemCreateOrConnectWithoutGoodsDeliveryInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutGoodsDeliveryInput | CartItemUpsertWithWhereUniqueWithoutGoodsDeliveryInput[]
    createMany?: CartItemCreateManyGoodsDeliveryInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutGoodsDeliveryInput | CartItemUpdateWithWhereUniqueWithoutGoodsDeliveryInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutGoodsDeliveryInput | CartItemUpdateManyWithWhereWithoutGoodsDeliveryInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type LogisticsMethodUpdateOneRequiredWithoutGoodsDeliveryNestedInput = {
    create?: XOR<LogisticsMethodCreateWithoutGoodsDeliveryInput, LogisticsMethodUncheckedCreateWithoutGoodsDeliveryInput>
    connectOrCreate?: LogisticsMethodCreateOrConnectWithoutGoodsDeliveryInput
    upsert?: LogisticsMethodUpsertWithoutGoodsDeliveryInput
    connect?: LogisticsMethodWhereUniqueInput
    update?: XOR<XOR<LogisticsMethodUpdateToOneWithWhereWithoutGoodsDeliveryInput, LogisticsMethodUpdateWithoutGoodsDeliveryInput>, LogisticsMethodUncheckedUpdateWithoutGoodsDeliveryInput>
  }

  export type RecipientUpdateOneRequiredWithoutHistoryOrderNestedInput = {
    create?: XOR<RecipientCreateWithoutHistoryOrderInput, RecipientUncheckedCreateWithoutHistoryOrderInput>
    connectOrCreate?: RecipientCreateOrConnectWithoutHistoryOrderInput
    upsert?: RecipientUpsertWithoutHistoryOrderInput
    connect?: RecipientWhereUniqueInput
    update?: XOR<XOR<RecipientUpdateToOneWithWhereWithoutHistoryOrderInput, RecipientUpdateWithoutHistoryOrderInput>, RecipientUncheckedUpdateWithoutHistoryOrderInput>
  }

  export type CouponUpdateOneWithoutGoodsDeliveryNestedInput = {
    create?: XOR<CouponCreateWithoutGoodsDeliveryInput, CouponUncheckedCreateWithoutGoodsDeliveryInput>
    connectOrCreate?: CouponCreateOrConnectWithoutGoodsDeliveryInput
    upsert?: CouponUpsertWithoutGoodsDeliveryInput
    disconnect?: CouponWhereInput | boolean
    delete?: CouponWhereInput | boolean
    connect?: CouponWhereUniqueInput
    update?: XOR<XOR<CouponUpdateToOneWithWhereWithoutGoodsDeliveryInput, CouponUpdateWithoutGoodsDeliveryInput>, CouponUncheckedUpdateWithoutGoodsDeliveryInput>
  }

  export type CartItemUncheckedUpdateManyWithoutGoodsDeliveryNestedInput = {
    create?: XOR<CartItemCreateWithoutGoodsDeliveryInput, CartItemUncheckedCreateWithoutGoodsDeliveryInput> | CartItemCreateWithoutGoodsDeliveryInput[] | CartItemUncheckedCreateWithoutGoodsDeliveryInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutGoodsDeliveryInput | CartItemCreateOrConnectWithoutGoodsDeliveryInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutGoodsDeliveryInput | CartItemUpsertWithWhereUniqueWithoutGoodsDeliveryInput[]
    createMany?: CartItemCreateManyGoodsDeliveryInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutGoodsDeliveryInput | CartItemUpdateWithWhereUniqueWithoutGoodsDeliveryInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutGoodsDeliveryInput | CartItemUpdateManyWithWhereWithoutGoodsDeliveryInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
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
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
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
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
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
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
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
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type RecipientCreateWithoutAddressInput = {
    id?: string
    name: string
    cellphone: string
    email: string
    gender: string
    timeToReceive: string
    note?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
    favLogistics?: LogisticsMethodCreateNestedManyWithoutRecipientInput
    historyOrder?: GoodsDeliveryCreateNestedManyWithoutRecipientInput
  }

  export type RecipientUncheckedCreateWithoutAddressInput = {
    id?: string
    name: string
    cellphone: string
    email: string
    gender: string
    timeToReceive: string
    note?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
    favLogistics?: LogisticsMethodUncheckedCreateNestedManyWithoutRecipientInput
    historyOrder?: GoodsDeliveryUncheckedCreateNestedManyWithoutRecipientInput
  }

  export type RecipientCreateOrConnectWithoutAddressInput = {
    where: RecipientWhereUniqueInput
    create: XOR<RecipientCreateWithoutAddressInput, RecipientUncheckedCreateWithoutAddressInput>
  }

  export type RecipientCreateManyAddressInputEnvelope = {
    data: RecipientCreateManyAddressInput | RecipientCreateManyAddressInput[]
    skipDuplicates?: boolean
  }

  export type RecipientUpsertWithWhereUniqueWithoutAddressInput = {
    where: RecipientWhereUniqueInput
    update: XOR<RecipientUpdateWithoutAddressInput, RecipientUncheckedUpdateWithoutAddressInput>
    create: XOR<RecipientCreateWithoutAddressInput, RecipientUncheckedCreateWithoutAddressInput>
  }

  export type RecipientUpdateWithWhereUniqueWithoutAddressInput = {
    where: RecipientWhereUniqueInput
    data: XOR<RecipientUpdateWithoutAddressInput, RecipientUncheckedUpdateWithoutAddressInput>
  }

  export type RecipientUpdateManyWithWhereWithoutAddressInput = {
    where: RecipientScalarWhereInput
    data: XOR<RecipientUpdateManyMutationInput, RecipientUncheckedUpdateManyWithoutAddressInput>
  }

  export type RecipientScalarWhereInput = {
    AND?: RecipientScalarWhereInput | RecipientScalarWhereInput[]
    OR?: RecipientScalarWhereInput[]
    NOT?: RecipientScalarWhereInput | RecipientScalarWhereInput[]
    id?: StringFilter<"Recipient"> | string
    name?: StringFilter<"Recipient"> | string
    cellphone?: StringFilter<"Recipient"> | string
    email?: StringFilter<"Recipient"> | string
    gender?: StringFilter<"Recipient"> | string
    timeToReceive?: StringFilter<"Recipient"> | string
    note?: StringNullableFilter<"Recipient"> | string | null
    updatedAt?: DateTimeFilter<"Recipient"> | Date | string
    createdAt?: DateTimeFilter<"Recipient"> | Date | string
    addressId?: StringFilter<"Recipient"> | string
  }

  export type CartItemCreateWithoutShoppingItemInput = {
    id?: string
    quantity: number
    subtotal: number
    updatedAt?: Date | string
    createdAt?: Date | string
    GoodsDelivery?: GoodsDeliveryCreateNestedOneWithoutCartItemInput
  }

  export type CartItemUncheckedCreateWithoutShoppingItemInput = {
    id?: string
    quantity: number
    subtotal: number
    updatedAt?: Date | string
    createdAt?: Date | string
    goodsDeliveryId?: string | null
  }

  export type CartItemCreateOrConnectWithoutShoppingItemInput = {
    where: CartItemWhereUniqueInput
    create: XOR<CartItemCreateWithoutShoppingItemInput, CartItemUncheckedCreateWithoutShoppingItemInput>
  }

  export type CartItemCreateManyShoppingItemInputEnvelope = {
    data: CartItemCreateManyShoppingItemInput | CartItemCreateManyShoppingItemInput[]
    skipDuplicates?: boolean
  }

  export type CartItemUpsertWithWhereUniqueWithoutShoppingItemInput = {
    where: CartItemWhereUniqueInput
    update: XOR<CartItemUpdateWithoutShoppingItemInput, CartItemUncheckedUpdateWithoutShoppingItemInput>
    create: XOR<CartItemCreateWithoutShoppingItemInput, CartItemUncheckedCreateWithoutShoppingItemInput>
  }

  export type CartItemUpdateWithWhereUniqueWithoutShoppingItemInput = {
    where: CartItemWhereUniqueInput
    data: XOR<CartItemUpdateWithoutShoppingItemInput, CartItemUncheckedUpdateWithoutShoppingItemInput>
  }

  export type CartItemUpdateManyWithWhereWithoutShoppingItemInput = {
    where: CartItemScalarWhereInput
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyWithoutShoppingItemInput>
  }

  export type CartItemScalarWhereInput = {
    AND?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
    OR?: CartItemScalarWhereInput[]
    NOT?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
    id?: StringFilter<"CartItem"> | string
    shoppingItemId?: StringFilter<"CartItem"> | string
    quantity?: IntFilter<"CartItem"> | number
    subtotal?: IntFilter<"CartItem"> | number
    updatedAt?: DateTimeFilter<"CartItem"> | Date | string
    createdAt?: DateTimeFilter<"CartItem"> | Date | string
    goodsDeliveryId?: StringNullableFilter<"CartItem"> | string | null
  }

  export type GoodsDeliveryCreateWithoutLogisticsInput = {
    id?: string
    subtotal: number
    updatedAt?: Date | string
    createdAt?: Date | string
    cartItem?: CartItemCreateNestedManyWithoutGoodsDeliveryInput
    recipient: RecipientCreateNestedOneWithoutHistoryOrderInput
    coupon?: CouponCreateNestedOneWithoutGoodsDeliveryInput
  }

  export type GoodsDeliveryUncheckedCreateWithoutLogisticsInput = {
    id?: string
    subtotal: number
    recipientId: string
    couponId?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
    cartItem?: CartItemUncheckedCreateNestedManyWithoutGoodsDeliveryInput
  }

  export type GoodsDeliveryCreateOrConnectWithoutLogisticsInput = {
    where: GoodsDeliveryWhereUniqueInput
    create: XOR<GoodsDeliveryCreateWithoutLogisticsInput, GoodsDeliveryUncheckedCreateWithoutLogisticsInput>
  }

  export type GoodsDeliveryCreateManyLogisticsInputEnvelope = {
    data: GoodsDeliveryCreateManyLogisticsInput | GoodsDeliveryCreateManyLogisticsInput[]
    skipDuplicates?: boolean
  }

  export type RecipientCreateWithoutFavLogisticsInput = {
    id?: string
    name: string
    cellphone: string
    email: string
    gender: string
    timeToReceive: string
    note?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
    address: AddressCreateNestedOneWithoutRecipientInput
    historyOrder?: GoodsDeliveryCreateNestedManyWithoutRecipientInput
  }

  export type RecipientUncheckedCreateWithoutFavLogisticsInput = {
    id?: string
    name: string
    cellphone: string
    email: string
    gender: string
    timeToReceive: string
    note?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
    addressId: string
    historyOrder?: GoodsDeliveryUncheckedCreateNestedManyWithoutRecipientInput
  }

  export type RecipientCreateOrConnectWithoutFavLogisticsInput = {
    where: RecipientWhereUniqueInput
    create: XOR<RecipientCreateWithoutFavLogisticsInput, RecipientUncheckedCreateWithoutFavLogisticsInput>
  }

  export type GoodsDeliveryUpsertWithWhereUniqueWithoutLogisticsInput = {
    where: GoodsDeliveryWhereUniqueInput
    update: XOR<GoodsDeliveryUpdateWithoutLogisticsInput, GoodsDeliveryUncheckedUpdateWithoutLogisticsInput>
    create: XOR<GoodsDeliveryCreateWithoutLogisticsInput, GoodsDeliveryUncheckedCreateWithoutLogisticsInput>
  }

  export type GoodsDeliveryUpdateWithWhereUniqueWithoutLogisticsInput = {
    where: GoodsDeliveryWhereUniqueInput
    data: XOR<GoodsDeliveryUpdateWithoutLogisticsInput, GoodsDeliveryUncheckedUpdateWithoutLogisticsInput>
  }

  export type GoodsDeliveryUpdateManyWithWhereWithoutLogisticsInput = {
    where: GoodsDeliveryScalarWhereInput
    data: XOR<GoodsDeliveryUpdateManyMutationInput, GoodsDeliveryUncheckedUpdateManyWithoutLogisticsInput>
  }

  export type GoodsDeliveryScalarWhereInput = {
    AND?: GoodsDeliveryScalarWhereInput | GoodsDeliveryScalarWhereInput[]
    OR?: GoodsDeliveryScalarWhereInput[]
    NOT?: GoodsDeliveryScalarWhereInput | GoodsDeliveryScalarWhereInput[]
    id?: StringFilter<"GoodsDelivery"> | string
    subtotal?: IntFilter<"GoodsDelivery"> | number
    logisticsMethodId?: StringFilter<"GoodsDelivery"> | string
    recipientId?: StringFilter<"GoodsDelivery"> | string
    couponId?: StringNullableFilter<"GoodsDelivery"> | string | null
    updatedAt?: DateTimeFilter<"GoodsDelivery"> | Date | string
    createdAt?: DateTimeFilter<"GoodsDelivery"> | Date | string
  }

  export type RecipientUpsertWithWhereUniqueWithoutFavLogisticsInput = {
    where: RecipientWhereUniqueInput
    update: XOR<RecipientUpdateWithoutFavLogisticsInput, RecipientUncheckedUpdateWithoutFavLogisticsInput>
    create: XOR<RecipientCreateWithoutFavLogisticsInput, RecipientUncheckedCreateWithoutFavLogisticsInput>
  }

  export type RecipientUpdateWithWhereUniqueWithoutFavLogisticsInput = {
    where: RecipientWhereUniqueInput
    data: XOR<RecipientUpdateWithoutFavLogisticsInput, RecipientUncheckedUpdateWithoutFavLogisticsInput>
  }

  export type RecipientUpdateManyWithWhereWithoutFavLogisticsInput = {
    where: RecipientScalarWhereInput
    data: XOR<RecipientUpdateManyMutationInput, RecipientUncheckedUpdateManyWithoutFavLogisticsInput>
  }

  export type GoodsDeliveryCreateWithoutCouponInput = {
    id?: string
    subtotal: number
    updatedAt?: Date | string
    createdAt?: Date | string
    cartItem?: CartItemCreateNestedManyWithoutGoodsDeliveryInput
    logistics: LogisticsMethodCreateNestedOneWithoutGoodsDeliveryInput
    recipient: RecipientCreateNestedOneWithoutHistoryOrderInput
  }

  export type GoodsDeliveryUncheckedCreateWithoutCouponInput = {
    id?: string
    subtotal: number
    logisticsMethodId: string
    recipientId: string
    updatedAt?: Date | string
    createdAt?: Date | string
    cartItem?: CartItemUncheckedCreateNestedManyWithoutGoodsDeliveryInput
  }

  export type GoodsDeliveryCreateOrConnectWithoutCouponInput = {
    where: GoodsDeliveryWhereUniqueInput
    create: XOR<GoodsDeliveryCreateWithoutCouponInput, GoodsDeliveryUncheckedCreateWithoutCouponInput>
  }

  export type GoodsDeliveryCreateManyCouponInputEnvelope = {
    data: GoodsDeliveryCreateManyCouponInput | GoodsDeliveryCreateManyCouponInput[]
    skipDuplicates?: boolean
  }

  export type GoodsDeliveryUpsertWithWhereUniqueWithoutCouponInput = {
    where: GoodsDeliveryWhereUniqueInput
    update: XOR<GoodsDeliveryUpdateWithoutCouponInput, GoodsDeliveryUncheckedUpdateWithoutCouponInput>
    create: XOR<GoodsDeliveryCreateWithoutCouponInput, GoodsDeliveryUncheckedCreateWithoutCouponInput>
  }

  export type GoodsDeliveryUpdateWithWhereUniqueWithoutCouponInput = {
    where: GoodsDeliveryWhereUniqueInput
    data: XOR<GoodsDeliveryUpdateWithoutCouponInput, GoodsDeliveryUncheckedUpdateWithoutCouponInput>
  }

  export type GoodsDeliveryUpdateManyWithWhereWithoutCouponInput = {
    where: GoodsDeliveryScalarWhereInput
    data: XOR<GoodsDeliveryUpdateManyMutationInput, GoodsDeliveryUncheckedUpdateManyWithoutCouponInput>
  }

  export type ShoppingItemCreateWithoutCartItemInput = {
    id?: string
    itemName: string
    itemSubtitle: string
    itemDescription: string
    imageSrc: string
    imageAlt: string
    itemPrice: number
    itemSpecialPrice?: number | null
    itemAvailableQuantity?: number
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type ShoppingItemUncheckedCreateWithoutCartItemInput = {
    id?: string
    itemName: string
    itemSubtitle: string
    itemDescription: string
    imageSrc: string
    imageAlt: string
    itemPrice: number
    itemSpecialPrice?: number | null
    itemAvailableQuantity?: number
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type ShoppingItemCreateOrConnectWithoutCartItemInput = {
    where: ShoppingItemWhereUniqueInput
    create: XOR<ShoppingItemCreateWithoutCartItemInput, ShoppingItemUncheckedCreateWithoutCartItemInput>
  }

  export type GoodsDeliveryCreateWithoutCartItemInput = {
    id?: string
    subtotal: number
    updatedAt?: Date | string
    createdAt?: Date | string
    logistics: LogisticsMethodCreateNestedOneWithoutGoodsDeliveryInput
    recipient: RecipientCreateNestedOneWithoutHistoryOrderInput
    coupon?: CouponCreateNestedOneWithoutGoodsDeliveryInput
  }

  export type GoodsDeliveryUncheckedCreateWithoutCartItemInput = {
    id?: string
    subtotal: number
    logisticsMethodId: string
    recipientId: string
    couponId?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type GoodsDeliveryCreateOrConnectWithoutCartItemInput = {
    where: GoodsDeliveryWhereUniqueInput
    create: XOR<GoodsDeliveryCreateWithoutCartItemInput, GoodsDeliveryUncheckedCreateWithoutCartItemInput>
  }

  export type ShoppingItemUpsertWithoutCartItemInput = {
    update: XOR<ShoppingItemUpdateWithoutCartItemInput, ShoppingItemUncheckedUpdateWithoutCartItemInput>
    create: XOR<ShoppingItemCreateWithoutCartItemInput, ShoppingItemUncheckedCreateWithoutCartItemInput>
    where?: ShoppingItemWhereInput
  }

  export type ShoppingItemUpdateToOneWithWhereWithoutCartItemInput = {
    where?: ShoppingItemWhereInput
    data: XOR<ShoppingItemUpdateWithoutCartItemInput, ShoppingItemUncheckedUpdateWithoutCartItemInput>
  }

  export type ShoppingItemUpdateWithoutCartItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    itemSubtitle?: StringFieldUpdateOperationsInput | string
    itemDescription?: StringFieldUpdateOperationsInput | string
    imageSrc?: StringFieldUpdateOperationsInput | string
    imageAlt?: StringFieldUpdateOperationsInput | string
    itemPrice?: IntFieldUpdateOperationsInput | number
    itemSpecialPrice?: NullableIntFieldUpdateOperationsInput | number | null
    itemAvailableQuantity?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShoppingItemUncheckedUpdateWithoutCartItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    itemSubtitle?: StringFieldUpdateOperationsInput | string
    itemDescription?: StringFieldUpdateOperationsInput | string
    imageSrc?: StringFieldUpdateOperationsInput | string
    imageAlt?: StringFieldUpdateOperationsInput | string
    itemPrice?: IntFieldUpdateOperationsInput | number
    itemSpecialPrice?: NullableIntFieldUpdateOperationsInput | number | null
    itemAvailableQuantity?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoodsDeliveryUpsertWithoutCartItemInput = {
    update: XOR<GoodsDeliveryUpdateWithoutCartItemInput, GoodsDeliveryUncheckedUpdateWithoutCartItemInput>
    create: XOR<GoodsDeliveryCreateWithoutCartItemInput, GoodsDeliveryUncheckedCreateWithoutCartItemInput>
    where?: GoodsDeliveryWhereInput
  }

  export type GoodsDeliveryUpdateToOneWithWhereWithoutCartItemInput = {
    where?: GoodsDeliveryWhereInput
    data: XOR<GoodsDeliveryUpdateWithoutCartItemInput, GoodsDeliveryUncheckedUpdateWithoutCartItemInput>
  }

  export type GoodsDeliveryUpdateWithoutCartItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    subtotal?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logistics?: LogisticsMethodUpdateOneRequiredWithoutGoodsDeliveryNestedInput
    recipient?: RecipientUpdateOneRequiredWithoutHistoryOrderNestedInput
    coupon?: CouponUpdateOneWithoutGoodsDeliveryNestedInput
  }

  export type GoodsDeliveryUncheckedUpdateWithoutCartItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    subtotal?: IntFieldUpdateOperationsInput | number
    logisticsMethodId?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    couponId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressCreateWithoutRecipientInput = {
    id?: string
    city: string
    district: string
    street: string
  }

  export type AddressUncheckedCreateWithoutRecipientInput = {
    id?: string
    city: string
    district: string
    street: string
  }

  export type AddressCreateOrConnectWithoutRecipientInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutRecipientInput, AddressUncheckedCreateWithoutRecipientInput>
  }

  export type LogisticsMethodCreateWithoutRecipientInput = {
    id?: string
    logisticsType: string
    logisticsMode: string
    logisticsName: string
    freight: number
    payment: number
    updatedAt?: Date | string
    createdAt?: Date | string
    goodsDelivery?: GoodsDeliveryCreateNestedManyWithoutLogisticsInput
  }

  export type LogisticsMethodUncheckedCreateWithoutRecipientInput = {
    id?: string
    logisticsType: string
    logisticsMode: string
    logisticsName: string
    freight: number
    payment: number
    updatedAt?: Date | string
    createdAt?: Date | string
    goodsDelivery?: GoodsDeliveryUncheckedCreateNestedManyWithoutLogisticsInput
  }

  export type LogisticsMethodCreateOrConnectWithoutRecipientInput = {
    where: LogisticsMethodWhereUniqueInput
    create: XOR<LogisticsMethodCreateWithoutRecipientInput, LogisticsMethodUncheckedCreateWithoutRecipientInput>
  }

  export type GoodsDeliveryCreateWithoutRecipientInput = {
    id?: string
    subtotal: number
    updatedAt?: Date | string
    createdAt?: Date | string
    cartItem?: CartItemCreateNestedManyWithoutGoodsDeliveryInput
    logistics: LogisticsMethodCreateNestedOneWithoutGoodsDeliveryInput
    coupon?: CouponCreateNestedOneWithoutGoodsDeliveryInput
  }

  export type GoodsDeliveryUncheckedCreateWithoutRecipientInput = {
    id?: string
    subtotal: number
    logisticsMethodId: string
    couponId?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
    cartItem?: CartItemUncheckedCreateNestedManyWithoutGoodsDeliveryInput
  }

  export type GoodsDeliveryCreateOrConnectWithoutRecipientInput = {
    where: GoodsDeliveryWhereUniqueInput
    create: XOR<GoodsDeliveryCreateWithoutRecipientInput, GoodsDeliveryUncheckedCreateWithoutRecipientInput>
  }

  export type GoodsDeliveryCreateManyRecipientInputEnvelope = {
    data: GoodsDeliveryCreateManyRecipientInput | GoodsDeliveryCreateManyRecipientInput[]
    skipDuplicates?: boolean
  }

  export type AddressUpsertWithoutRecipientInput = {
    update: XOR<AddressUpdateWithoutRecipientInput, AddressUncheckedUpdateWithoutRecipientInput>
    create: XOR<AddressCreateWithoutRecipientInput, AddressUncheckedCreateWithoutRecipientInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutRecipientInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutRecipientInput, AddressUncheckedUpdateWithoutRecipientInput>
  }

  export type AddressUpdateWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
  }

  export type AddressUncheckedUpdateWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
  }

  export type LogisticsMethodUpsertWithWhereUniqueWithoutRecipientInput = {
    where: LogisticsMethodWhereUniqueInput
    update: XOR<LogisticsMethodUpdateWithoutRecipientInput, LogisticsMethodUncheckedUpdateWithoutRecipientInput>
    create: XOR<LogisticsMethodCreateWithoutRecipientInput, LogisticsMethodUncheckedCreateWithoutRecipientInput>
  }

  export type LogisticsMethodUpdateWithWhereUniqueWithoutRecipientInput = {
    where: LogisticsMethodWhereUniqueInput
    data: XOR<LogisticsMethodUpdateWithoutRecipientInput, LogisticsMethodUncheckedUpdateWithoutRecipientInput>
  }

  export type LogisticsMethodUpdateManyWithWhereWithoutRecipientInput = {
    where: LogisticsMethodScalarWhereInput
    data: XOR<LogisticsMethodUpdateManyMutationInput, LogisticsMethodUncheckedUpdateManyWithoutRecipientInput>
  }

  export type LogisticsMethodScalarWhereInput = {
    AND?: LogisticsMethodScalarWhereInput | LogisticsMethodScalarWhereInput[]
    OR?: LogisticsMethodScalarWhereInput[]
    NOT?: LogisticsMethodScalarWhereInput | LogisticsMethodScalarWhereInput[]
    id?: StringFilter<"LogisticsMethod"> | string
    logisticsType?: StringFilter<"LogisticsMethod"> | string
    logisticsMode?: StringFilter<"LogisticsMethod"> | string
    logisticsName?: StringFilter<"LogisticsMethod"> | string
    freight?: IntFilter<"LogisticsMethod"> | number
    payment?: IntFilter<"LogisticsMethod"> | number
    updatedAt?: DateTimeFilter<"LogisticsMethod"> | Date | string
    createdAt?: DateTimeFilter<"LogisticsMethod"> | Date | string
  }

  export type GoodsDeliveryUpsertWithWhereUniqueWithoutRecipientInput = {
    where: GoodsDeliveryWhereUniqueInput
    update: XOR<GoodsDeliveryUpdateWithoutRecipientInput, GoodsDeliveryUncheckedUpdateWithoutRecipientInput>
    create: XOR<GoodsDeliveryCreateWithoutRecipientInput, GoodsDeliveryUncheckedCreateWithoutRecipientInput>
  }

  export type GoodsDeliveryUpdateWithWhereUniqueWithoutRecipientInput = {
    where: GoodsDeliveryWhereUniqueInput
    data: XOR<GoodsDeliveryUpdateWithoutRecipientInput, GoodsDeliveryUncheckedUpdateWithoutRecipientInput>
  }

  export type GoodsDeliveryUpdateManyWithWhereWithoutRecipientInput = {
    where: GoodsDeliveryScalarWhereInput
    data: XOR<GoodsDeliveryUpdateManyMutationInput, GoodsDeliveryUncheckedUpdateManyWithoutRecipientInput>
  }

  export type CartItemCreateWithoutGoodsDeliveryInput = {
    id?: string
    quantity: number
    subtotal: number
    updatedAt?: Date | string
    createdAt?: Date | string
    shoppingItem: ShoppingItemCreateNestedOneWithoutCartItemInput
  }

  export type CartItemUncheckedCreateWithoutGoodsDeliveryInput = {
    id?: string
    shoppingItemId: string
    quantity: number
    subtotal: number
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type CartItemCreateOrConnectWithoutGoodsDeliveryInput = {
    where: CartItemWhereUniqueInput
    create: XOR<CartItemCreateWithoutGoodsDeliveryInput, CartItemUncheckedCreateWithoutGoodsDeliveryInput>
  }

  export type CartItemCreateManyGoodsDeliveryInputEnvelope = {
    data: CartItemCreateManyGoodsDeliveryInput | CartItemCreateManyGoodsDeliveryInput[]
    skipDuplicates?: boolean
  }

  export type LogisticsMethodCreateWithoutGoodsDeliveryInput = {
    id?: string
    logisticsType: string
    logisticsMode: string
    logisticsName: string
    freight: number
    payment: number
    updatedAt?: Date | string
    createdAt?: Date | string
    recipient?: RecipientCreateNestedManyWithoutFavLogisticsInput
  }

  export type LogisticsMethodUncheckedCreateWithoutGoodsDeliveryInput = {
    id?: string
    logisticsType: string
    logisticsMode: string
    logisticsName: string
    freight: number
    payment: number
    updatedAt?: Date | string
    createdAt?: Date | string
    recipient?: RecipientUncheckedCreateNestedManyWithoutFavLogisticsInput
  }

  export type LogisticsMethodCreateOrConnectWithoutGoodsDeliveryInput = {
    where: LogisticsMethodWhereUniqueInput
    create: XOR<LogisticsMethodCreateWithoutGoodsDeliveryInput, LogisticsMethodUncheckedCreateWithoutGoodsDeliveryInput>
  }

  export type RecipientCreateWithoutHistoryOrderInput = {
    id?: string
    name: string
    cellphone: string
    email: string
    gender: string
    timeToReceive: string
    note?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
    address: AddressCreateNestedOneWithoutRecipientInput
    favLogistics?: LogisticsMethodCreateNestedManyWithoutRecipientInput
  }

  export type RecipientUncheckedCreateWithoutHistoryOrderInput = {
    id?: string
    name: string
    cellphone: string
    email: string
    gender: string
    timeToReceive: string
    note?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
    addressId: string
    favLogistics?: LogisticsMethodUncheckedCreateNestedManyWithoutRecipientInput
  }

  export type RecipientCreateOrConnectWithoutHistoryOrderInput = {
    where: RecipientWhereUniqueInput
    create: XOR<RecipientCreateWithoutHistoryOrderInput, RecipientUncheckedCreateWithoutHistoryOrderInput>
  }

  export type CouponCreateWithoutGoodsDeliveryInput = {
    id?: string
    code: string
    name: string
    description: string
    threshold: number
    active: boolean
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type CouponUncheckedCreateWithoutGoodsDeliveryInput = {
    id?: string
    code: string
    name: string
    description: string
    threshold: number
    active: boolean
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type CouponCreateOrConnectWithoutGoodsDeliveryInput = {
    where: CouponWhereUniqueInput
    create: XOR<CouponCreateWithoutGoodsDeliveryInput, CouponUncheckedCreateWithoutGoodsDeliveryInput>
  }

  export type CartItemUpsertWithWhereUniqueWithoutGoodsDeliveryInput = {
    where: CartItemWhereUniqueInput
    update: XOR<CartItemUpdateWithoutGoodsDeliveryInput, CartItemUncheckedUpdateWithoutGoodsDeliveryInput>
    create: XOR<CartItemCreateWithoutGoodsDeliveryInput, CartItemUncheckedCreateWithoutGoodsDeliveryInput>
  }

  export type CartItemUpdateWithWhereUniqueWithoutGoodsDeliveryInput = {
    where: CartItemWhereUniqueInput
    data: XOR<CartItemUpdateWithoutGoodsDeliveryInput, CartItemUncheckedUpdateWithoutGoodsDeliveryInput>
  }

  export type CartItemUpdateManyWithWhereWithoutGoodsDeliveryInput = {
    where: CartItemScalarWhereInput
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyWithoutGoodsDeliveryInput>
  }

  export type LogisticsMethodUpsertWithoutGoodsDeliveryInput = {
    update: XOR<LogisticsMethodUpdateWithoutGoodsDeliveryInput, LogisticsMethodUncheckedUpdateWithoutGoodsDeliveryInput>
    create: XOR<LogisticsMethodCreateWithoutGoodsDeliveryInput, LogisticsMethodUncheckedCreateWithoutGoodsDeliveryInput>
    where?: LogisticsMethodWhereInput
  }

  export type LogisticsMethodUpdateToOneWithWhereWithoutGoodsDeliveryInput = {
    where?: LogisticsMethodWhereInput
    data: XOR<LogisticsMethodUpdateWithoutGoodsDeliveryInput, LogisticsMethodUncheckedUpdateWithoutGoodsDeliveryInput>
  }

  export type LogisticsMethodUpdateWithoutGoodsDeliveryInput = {
    id?: StringFieldUpdateOperationsInput | string
    logisticsType?: StringFieldUpdateOperationsInput | string
    logisticsMode?: StringFieldUpdateOperationsInput | string
    logisticsName?: StringFieldUpdateOperationsInput | string
    freight?: IntFieldUpdateOperationsInput | number
    payment?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipient?: RecipientUpdateManyWithoutFavLogisticsNestedInput
  }

  export type LogisticsMethodUncheckedUpdateWithoutGoodsDeliveryInput = {
    id?: StringFieldUpdateOperationsInput | string
    logisticsType?: StringFieldUpdateOperationsInput | string
    logisticsMode?: StringFieldUpdateOperationsInput | string
    logisticsName?: StringFieldUpdateOperationsInput | string
    freight?: IntFieldUpdateOperationsInput | number
    payment?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipient?: RecipientUncheckedUpdateManyWithoutFavLogisticsNestedInput
  }

  export type RecipientUpsertWithoutHistoryOrderInput = {
    update: XOR<RecipientUpdateWithoutHistoryOrderInput, RecipientUncheckedUpdateWithoutHistoryOrderInput>
    create: XOR<RecipientCreateWithoutHistoryOrderInput, RecipientUncheckedCreateWithoutHistoryOrderInput>
    where?: RecipientWhereInput
  }

  export type RecipientUpdateToOneWithWhereWithoutHistoryOrderInput = {
    where?: RecipientWhereInput
    data: XOR<RecipientUpdateWithoutHistoryOrderInput, RecipientUncheckedUpdateWithoutHistoryOrderInput>
  }

  export type RecipientUpdateWithoutHistoryOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cellphone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    timeToReceive?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateOneRequiredWithoutRecipientNestedInput
    favLogistics?: LogisticsMethodUpdateManyWithoutRecipientNestedInput
  }

  export type RecipientUncheckedUpdateWithoutHistoryOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cellphone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    timeToReceive?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addressId?: StringFieldUpdateOperationsInput | string
    favLogistics?: LogisticsMethodUncheckedUpdateManyWithoutRecipientNestedInput
  }

  export type CouponUpsertWithoutGoodsDeliveryInput = {
    update: XOR<CouponUpdateWithoutGoodsDeliveryInput, CouponUncheckedUpdateWithoutGoodsDeliveryInput>
    create: XOR<CouponCreateWithoutGoodsDeliveryInput, CouponUncheckedCreateWithoutGoodsDeliveryInput>
    where?: CouponWhereInput
  }

  export type CouponUpdateToOneWithWhereWithoutGoodsDeliveryInput = {
    where?: CouponWhereInput
    data: XOR<CouponUpdateWithoutGoodsDeliveryInput, CouponUncheckedUpdateWithoutGoodsDeliveryInput>
  }

  export type CouponUpdateWithoutGoodsDeliveryInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    threshold?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponUncheckedUpdateWithoutGoodsDeliveryInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    threshold?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipientCreateManyAddressInput = {
    id?: string
    name: string
    cellphone: string
    email: string
    gender: string
    timeToReceive: string
    note?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type RecipientUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cellphone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    timeToReceive?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favLogistics?: LogisticsMethodUpdateManyWithoutRecipientNestedInput
    historyOrder?: GoodsDeliveryUpdateManyWithoutRecipientNestedInput
  }

  export type RecipientUncheckedUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cellphone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    timeToReceive?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favLogistics?: LogisticsMethodUncheckedUpdateManyWithoutRecipientNestedInput
    historyOrder?: GoodsDeliveryUncheckedUpdateManyWithoutRecipientNestedInput
  }

  export type RecipientUncheckedUpdateManyWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cellphone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    timeToReceive?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemCreateManyShoppingItemInput = {
    id?: string
    quantity: number
    subtotal: number
    updatedAt?: Date | string
    createdAt?: Date | string
    goodsDeliveryId?: string | null
  }

  export type CartItemUpdateWithoutShoppingItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    GoodsDelivery?: GoodsDeliveryUpdateOneWithoutCartItemNestedInput
  }

  export type CartItemUncheckedUpdateWithoutShoppingItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goodsDeliveryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CartItemUncheckedUpdateManyWithoutShoppingItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goodsDeliveryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GoodsDeliveryCreateManyLogisticsInput = {
    id?: string
    subtotal: number
    recipientId: string
    couponId?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type GoodsDeliveryUpdateWithoutLogisticsInput = {
    id?: StringFieldUpdateOperationsInput | string
    subtotal?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cartItem?: CartItemUpdateManyWithoutGoodsDeliveryNestedInput
    recipient?: RecipientUpdateOneRequiredWithoutHistoryOrderNestedInput
    coupon?: CouponUpdateOneWithoutGoodsDeliveryNestedInput
  }

  export type GoodsDeliveryUncheckedUpdateWithoutLogisticsInput = {
    id?: StringFieldUpdateOperationsInput | string
    subtotal?: IntFieldUpdateOperationsInput | number
    recipientId?: StringFieldUpdateOperationsInput | string
    couponId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cartItem?: CartItemUncheckedUpdateManyWithoutGoodsDeliveryNestedInput
  }

  export type GoodsDeliveryUncheckedUpdateManyWithoutLogisticsInput = {
    id?: StringFieldUpdateOperationsInput | string
    subtotal?: IntFieldUpdateOperationsInput | number
    recipientId?: StringFieldUpdateOperationsInput | string
    couponId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipientUpdateWithoutFavLogisticsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cellphone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    timeToReceive?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateOneRequiredWithoutRecipientNestedInput
    historyOrder?: GoodsDeliveryUpdateManyWithoutRecipientNestedInput
  }

  export type RecipientUncheckedUpdateWithoutFavLogisticsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cellphone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    timeToReceive?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addressId?: StringFieldUpdateOperationsInput | string
    historyOrder?: GoodsDeliveryUncheckedUpdateManyWithoutRecipientNestedInput
  }

  export type RecipientUncheckedUpdateManyWithoutFavLogisticsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cellphone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    timeToReceive?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addressId?: StringFieldUpdateOperationsInput | string
  }

  export type GoodsDeliveryCreateManyCouponInput = {
    id?: string
    subtotal: number
    logisticsMethodId: string
    recipientId: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type GoodsDeliveryUpdateWithoutCouponInput = {
    id?: StringFieldUpdateOperationsInput | string
    subtotal?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cartItem?: CartItemUpdateManyWithoutGoodsDeliveryNestedInput
    logistics?: LogisticsMethodUpdateOneRequiredWithoutGoodsDeliveryNestedInput
    recipient?: RecipientUpdateOneRequiredWithoutHistoryOrderNestedInput
  }

  export type GoodsDeliveryUncheckedUpdateWithoutCouponInput = {
    id?: StringFieldUpdateOperationsInput | string
    subtotal?: IntFieldUpdateOperationsInput | number
    logisticsMethodId?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cartItem?: CartItemUncheckedUpdateManyWithoutGoodsDeliveryNestedInput
  }

  export type GoodsDeliveryUncheckedUpdateManyWithoutCouponInput = {
    id?: StringFieldUpdateOperationsInput | string
    subtotal?: IntFieldUpdateOperationsInput | number
    logisticsMethodId?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoodsDeliveryCreateManyRecipientInput = {
    id?: string
    subtotal: number
    logisticsMethodId: string
    couponId?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type LogisticsMethodUpdateWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    logisticsType?: StringFieldUpdateOperationsInput | string
    logisticsMode?: StringFieldUpdateOperationsInput | string
    logisticsName?: StringFieldUpdateOperationsInput | string
    freight?: IntFieldUpdateOperationsInput | number
    payment?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goodsDelivery?: GoodsDeliveryUpdateManyWithoutLogisticsNestedInput
  }

  export type LogisticsMethodUncheckedUpdateWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    logisticsType?: StringFieldUpdateOperationsInput | string
    logisticsMode?: StringFieldUpdateOperationsInput | string
    logisticsName?: StringFieldUpdateOperationsInput | string
    freight?: IntFieldUpdateOperationsInput | number
    payment?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goodsDelivery?: GoodsDeliveryUncheckedUpdateManyWithoutLogisticsNestedInput
  }

  export type LogisticsMethodUncheckedUpdateManyWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    logisticsType?: StringFieldUpdateOperationsInput | string
    logisticsMode?: StringFieldUpdateOperationsInput | string
    logisticsName?: StringFieldUpdateOperationsInput | string
    freight?: IntFieldUpdateOperationsInput | number
    payment?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoodsDeliveryUpdateWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    subtotal?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cartItem?: CartItemUpdateManyWithoutGoodsDeliveryNestedInput
    logistics?: LogisticsMethodUpdateOneRequiredWithoutGoodsDeliveryNestedInput
    coupon?: CouponUpdateOneWithoutGoodsDeliveryNestedInput
  }

  export type GoodsDeliveryUncheckedUpdateWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    subtotal?: IntFieldUpdateOperationsInput | number
    logisticsMethodId?: StringFieldUpdateOperationsInput | string
    couponId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cartItem?: CartItemUncheckedUpdateManyWithoutGoodsDeliveryNestedInput
  }

  export type GoodsDeliveryUncheckedUpdateManyWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    subtotal?: IntFieldUpdateOperationsInput | number
    logisticsMethodId?: StringFieldUpdateOperationsInput | string
    couponId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemCreateManyGoodsDeliveryInput = {
    id?: string
    shoppingItemId: string
    quantity: number
    subtotal: number
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type CartItemUpdateWithoutGoodsDeliveryInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shoppingItem?: ShoppingItemUpdateOneRequiredWithoutCartItemNestedInput
  }

  export type CartItemUncheckedUpdateWithoutGoodsDeliveryInput = {
    id?: StringFieldUpdateOperationsInput | string
    shoppingItemId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemUncheckedUpdateManyWithoutGoodsDeliveryInput = {
    id?: StringFieldUpdateOperationsInput | string
    shoppingItemId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AddressCountOutputTypeDefaultArgs instead
     */
    export type AddressCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AddressCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ShoppingItemCountOutputTypeDefaultArgs instead
     */
    export type ShoppingItemCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ShoppingItemCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LogisticsMethodCountOutputTypeDefaultArgs instead
     */
    export type LogisticsMethodCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LogisticsMethodCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CouponCountOutputTypeDefaultArgs instead
     */
    export type CouponCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CouponCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RecipientCountOutputTypeDefaultArgs instead
     */
    export type RecipientCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RecipientCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GoodsDeliveryCountOutputTypeDefaultArgs instead
     */
    export type GoodsDeliveryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GoodsDeliveryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountDefaultArgs instead
     */
    export type AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SessionDefaultArgs instead
     */
    export type SessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AddressDefaultArgs instead
     */
    export type AddressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AddressDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VerificationTokenDefaultArgs instead
     */
    export type VerificationTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VerificationTokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ShoppingItemDefaultArgs instead
     */
    export type ShoppingItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ShoppingItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LogisticsMethodDefaultArgs instead
     */
    export type LogisticsMethodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LogisticsMethodDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CouponDefaultArgs instead
     */
    export type CouponArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CouponDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CartItemDefaultArgs instead
     */
    export type CartItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CartItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RecipientDefaultArgs instead
     */
    export type RecipientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RecipientDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GoodsDeliveryDefaultArgs instead
     */
    export type GoodsDeliveryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GoodsDeliveryDefaultArgs<ExtArgs>

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