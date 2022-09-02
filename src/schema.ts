export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  UUID: any;
};

export type Charge = {
  __typename?: 'Charge';
  accrualDate?: Maybe<Scalars['Date']>;
  chargeAmount?: Maybe<ChargeAmount>;
  description?: Maybe<Scalars['String']>;
  feeFineId?: Maybe<Scalars['UUID']>;
  item?: Maybe<Item>;
  reason?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
};

export type ChargeAmount = {
  __typename?: 'ChargeAmount';
  amount: Scalars['Float'];
  isoCurrencyCode: Scalars['String'];
};

export type Hold = {
  __typename?: 'Hold';
  canceledByUserId?: Maybe<Scalars['UUID']>;
  canceledDate?: Maybe<Scalars['String']>;
  cancellationAdditionalInformation?: Maybe<Scalars['String']>;
  cancellationReasonId?: Maybe<Scalars['UUID']>;
  expirationDate?: Maybe<Scalars['Date']>;
  item?: Maybe<Item>;
  patronComments?: Maybe<Scalars['String']>;
  pickupLocationId: Scalars['UUID'];
  queuePosition?: Maybe<Scalars['Int']>;
  requestDate: Scalars['Date'];
  status?: Maybe<Scalars['String']>;
};

export type Item = {
  __typename?: 'Item';
  author?: Maybe<Scalars['String']>;
  instanceId: Scalars['UUID'];
  isbn?: Maybe<Scalars['String']>;
  itemId?: Maybe<Scalars['UUID']>;
  title?: Maybe<Scalars['String']>;
};

export type Loan = {
  __typename?: 'Loan';
  dueDate: Scalars['Date'];
  item: Item;
  loanDate: Scalars['Date'];
  overdue: Scalars['Boolean'];
};

export type Patron = {
  __typename?: 'Patron';
  charges: Array<Maybe<Charge>>;
  holds: Array<Maybe<Hold>>;
  id?: Maybe<Scalars['UUID']>;
  loans: Array<Maybe<Loan>>;
  totalCharges: ChargeAmount;
  totalChargesCount: Scalars['Int'];
  totalHolds: Scalars['Int'];
  totalLoans: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  patron?: Maybe<Patron>;
};


export type QueryPatronArgs = {
  id: Scalars['UUID'];
};
