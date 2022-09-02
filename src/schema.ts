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
  EmailAddress: any;
  UUID: any;
};

export type Address = {
  __typename?: 'Address';
  addressLine1?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  addressTypeId: Scalars['UUID'];
  city?: Maybe<Scalars['String']>;
  countryId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  primaryAddress?: Maybe<Scalars['Boolean']>;
  region?: Maybe<Scalars['String']>;
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
  pickupLocation?: Maybe<Location>;
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

export type Location = {
  __typename?: 'Location';
  code: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  discoveryDisplayName: Scalars['String'];
  id?: Maybe<Scalars['UUID']>;
  name: Scalars['String'];
  pickupLocation?: Maybe<Scalars['Boolean']>;
  shelvingLagTime?: Maybe<Scalars['Int']>;
};

export type Metadata = {
  __typename?: 'Metadata';
  createdByUserId?: Maybe<Scalars['UUID']>;
  createdByUsername?: Maybe<Scalars['String']>;
  createdDate: Scalars['Date'];
  updatedByUserId?: Maybe<Scalars['UUID']>;
  updatedByUsername?: Maybe<Scalars['String']>;
  updatedDate?: Maybe<Scalars['Date']>;
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
  user?: Maybe<User>;
};

export enum PatronStanding {
  Barred = 'BARRED',
  Blocked = 'BLOCKED',
  Collection = 'COLLECTION',
  Delinquent = 'DELINQUENT',
  Ok = 'OK'
}

export enum PatronStatus {
  Blocked = 'BLOCKED',
  Ok = 'OK'
}

export type Personal = {
  __typename?: 'Personal';
  dateOfBirth?: Maybe<Scalars['Date']>;
  email?: Maybe<Scalars['EmailAddress']>;
  firstName?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  middleName?: Maybe<Scalars['String']>;
  mobilePhone?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  preferredContactTypeId?: Maybe<Scalars['String']>;
  preferredFirstName?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  patron?: Maybe<Patron>;
};


export type QueryPatronArgs = {
  id: Scalars['UUID'];
};

export type Tags = {
  __typename?: 'Tags';
  tagList?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type User = {
  __typename?: 'User';
  active?: Maybe<Scalars['Boolean']>;
  barcode?: Maybe<Scalars['String']>;
  department?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  enrollmentDate?: Maybe<Scalars['Date']>;
  expirationDate?: Maybe<Scalars['Date']>;
  externalSystemId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['UUID']>;
  metadata?: Maybe<Metadata>;
  patronGroup?: Maybe<Scalars['UUID']>;
  personal?: Maybe<Personal>;
  tags?: Maybe<Tags>;
  type?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};
