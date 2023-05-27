import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { FolioContext } from './context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  EmailAddress: { input: any; output: any; }
  UUID: { input: any; output: any; }
};

export type Account = {
  __typename?: 'Account';
  amount: Scalars['Float']['output'];
  barcode?: Maybe<Scalars['String']['output']>;
  callNumber?: Maybe<Scalars['String']['output']>;
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  dueDate?: Maybe<Scalars['DateTime']['output']>;
  feeFine?: Maybe<FeeFine>;
  feeFineId: Scalars['UUID']['output'];
  feeFineOwner?: Maybe<Scalars['String']['output']>;
  feeFineType?: Maybe<Scalars['String']['output']>;
  holdingsRecordId?: Maybe<Scalars['UUID']['output']>;
  id?: Maybe<Scalars['UUID']['output']>;
  instanceId?: Maybe<Scalars['UUID']['output']>;
  item?: Maybe<Item>;
  itemId?: Maybe<Scalars['UUID']['output']>;
  itemStatus?: Maybe<Status>;
  loan?: Maybe<CirculationLoan>;
  loanId?: Maybe<Scalars['UUID']['output']>;
  loanPolicyId?: Maybe<Scalars['UUID']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  lostItemFeePolicyId?: Maybe<Scalars['UUID']['output']>;
  materialType?: Maybe<Scalars['String']['output']>;
  materialTypeId?: Maybe<Scalars['UUID']['output']>;
  overdueFinePolicyId?: Maybe<Scalars['UUID']['output']>;
  ownerId: Scalars['UUID']['output'];
  paymentStatus: Status;
  processId?: Maybe<Scalars['UUID']['output']>;
  remaining: Scalars['Float']['output'];
  returnedDate?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Status>;
  title?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
  userId: Scalars['UUID']['output'];
};

export type Address = {
  __typename?: 'Address';
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  addressTypeId: Scalars['UUID']['output'];
  city?: Maybe<Scalars['String']['output']>;
  countryId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  primaryAddress?: Maybe<Scalars['Boolean']['output']>;
  region?: Maybe<Scalars['String']['output']>;
};

export type AlternativeTitle = {
  __typename?: 'AlternativeTitle';
  alternativeTitle?: Maybe<Scalars['String']['output']>;
  alternativeTitleTypeId?: Maybe<Scalars['UUID']['output']>;
};

export type Block = {
  __typename?: 'Block';
  blockBorrowing?: Maybe<Scalars['Boolean']['output']>;
  blockRenewals?: Maybe<Scalars['Boolean']['output']>;
  blockRequests?: Maybe<Scalars['Boolean']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  patronBlockConditionId?: Maybe<Scalars['UUID']['output']>;
};

export type BlockCondition = {
  __typename?: 'BlockCondition';
  blockBorrowing?: Maybe<Scalars['Boolean']['output']>;
  blockRenewals?: Maybe<Scalars['Boolean']['output']>;
  blockRequests?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['UUID']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  valueType?: Maybe<Scalars['String']['output']>;
};

export type BlockLimit = {
  __typename?: 'BlockLimit';
  condition?: Maybe<BlockCondition>;
  conditionId?: Maybe<Scalars['UUID']['output']>;
  id?: Maybe<Scalars['UUID']['output']>;
  patronGroupId?: Maybe<Scalars['UUID']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type Campus = {
  __typename?: 'Campus';
  code: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  institution?: Maybe<Institution>;
  institutionId: Scalars['String']['output'];
  metadata?: Maybe<Metadata>;
  name: Scalars['String']['output'];
};

export type Charge = {
  __typename?: 'Charge';
  accrualDate?: Maybe<Scalars['DateTime']['output']>;
  chargeAmount?: Maybe<ChargeAmount>;
  description?: Maybe<Scalars['String']['output']>;
  feeFine?: Maybe<FeeFine>;
  feeFineId?: Maybe<Scalars['UUID']['output']>;
  item?: Maybe<RequestItem>;
  reason?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
};

export type ChargeAmount = {
  __typename?: 'ChargeAmount';
  amount: Scalars['Float']['output'];
  isoCurrencyCode: Scalars['String']['output'];
};

export type CheckIn = {
  __typename?: 'CheckIn';
  dateTime?: Maybe<Scalars['String']['output']>;
  servicePointId?: Maybe<Scalars['UUID']['output']>;
  staffMemberId?: Maybe<Scalars['UUID']['output']>;
};

export type CirculationLoan = {
  __typename?: 'CirculationLoan';
  action: Scalars['String']['output'];
  actionComment?: Maybe<Scalars['String']['output']>;
  declaredLostDate?: Maybe<Scalars['DateTime']['output']>;
  dueDate?: Maybe<Scalars['DateTime']['output']>;
  dueDateChangedByHold?: Maybe<Scalars['Boolean']['output']>;
  dueDateChangedByRecall?: Maybe<Scalars['Boolean']['output']>;
  feesAndFines?: Maybe<CirculationLoanFeesAndFines>;
  id: Scalars['UUID']['output'];
  item?: Maybe<Item>;
  itemEffectiveLocationAtCheckOut?: Maybe<Location>;
  itemEffectiveLocationIdAtCheckOut?: Maybe<Scalars['UUID']['output']>;
  itemId?: Maybe<Scalars['UUID']['output']>;
  loanDate: Scalars['DateTime']['output'];
  loanPolicy?: Maybe<LoanPolicy>;
  loanPolicyId?: Maybe<Scalars['UUID']['output']>;
  lostItemPolicyId?: Maybe<Scalars['UUID']['output']>;
  overdueFinePolicyId?: Maybe<Scalars['UUID']['output']>;
  proxyUserId?: Maybe<Scalars['UUID']['output']>;
  renewalCount?: Maybe<Scalars['Int']['output']>;
  returnDate?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  systemReturnDate?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['UUID']['output']>;
};

export type CirculationLoanFeesAndFines = {
  __typename?: 'CirculationLoanFeesAndFines';
  amountRemainingToPay?: Maybe<Scalars['Int']['output']>;
};

export type CirculationNote = {
  __typename?: 'CirculationNote';
  date?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  noteType?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Source>;
  staffOnly?: Maybe<Scalars['Boolean']['output']>;
};

export type Classification = {
  __typename?: 'Classification';
  classificationNumber: Scalars['String']['output'];
  classificationType?: Maybe<ClassificationType>;
  classificationTypeId: Scalars['UUID']['output'];
};

export type ClassificationType = {
  __typename?: 'ClassificationType';
  id: Scalars['UUID']['output'];
  metadata?: Maybe<Metadata>;
  name: Scalars['String']['output'];
  source?: Maybe<Scalars['String']['output']>;
};

export type Contributor = {
  __typename?: 'Contributor';
  authorityId?: Maybe<Scalars['UUID']['output']>;
  contributorNameTypeId?: Maybe<Scalars['String']['output']>;
  contributorTypeId: Scalars['UUID']['output'];
  contributorTypeText?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  primary?: Maybe<Scalars['Boolean']['output']>;
};

export type CqlParams = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  sortby?: InputMaybe<Scalars['String']['input']>;
};

export type EffectiveCallNumberComponents = {
  __typename?: 'EffectiveCallNumberComponents';
  callNumber?: Maybe<Scalars['String']['output']>;
  prefix?: Maybe<Scalars['String']['output']>;
  suffix?: Maybe<Scalars['String']['output']>;
  typeId?: Maybe<Scalars['UUID']['output']>;
};

export type ElectronicAccess = {
  __typename?: 'ElectronicAccess';
  linkText?: Maybe<Scalars['String']['output']>;
  materialsSpecification?: Maybe<Scalars['String']['output']>;
  publicNote?: Maybe<Scalars['String']['output']>;
  relationshipId?: Maybe<Scalars['UUID']['output']>;
  uri: Scalars['String']['output'];
};

export type FeeFine = {
  __typename?: 'FeeFine';
  actionNoticeId?: Maybe<Scalars['UUID']['output']>;
  automatic: Scalars['Boolean']['output'];
  chargeNoticeId?: Maybe<Scalars['UUID']['output']>;
  defaultAmount?: Maybe<Scalars['Float']['output']>;
  feeFineType: Scalars['String']['output'];
  id?: Maybe<Scalars['UUID']['output']>;
  metadata?: Maybe<Metadata>;
  ownerId?: Maybe<Scalars['UUID']['output']>;
};

export type FixedDueDateSchedule = {
  __typename?: 'FixedDueDateSchedule';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  schedules?: Maybe<Array<Maybe<Schedule>>>;
};

export type Hold = {
  __typename?: 'Hold';
  canceledByUserId?: Maybe<Scalars['UUID']['output']>;
  canceledDate?: Maybe<Scalars['DateTime']['output']>;
  cancellationAdditionalInformation?: Maybe<Scalars['String']['output']>;
  cancellationReasonId?: Maybe<Scalars['UUID']['output']>;
  expirationDate?: Maybe<Scalars['DateTime']['output']>;
  item?: Maybe<RequestItem>;
  patronComments?: Maybe<Scalars['String']['output']>;
  pickupLocation?: Maybe<ServicePoint>;
  pickupLocationId: Scalars['UUID']['output'];
  queuePosition?: Maybe<Scalars['Int']['output']>;
  requestDate: Scalars['DateTime']['output'];
  requestId: Scalars['UUID']['output'];
  status?: Maybe<Scalars['String']['output']>;
};

export type HoldingsNote = {
  __typename?: 'HoldingsNote';
  holdingsNoteTypeId?: Maybe<Scalars['UUID']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  staffOnly?: Maybe<Scalars['Boolean']['output']>;
};

export type HoldingsRecord = {
  __typename?: 'HoldingsRecord';
  _version?: Maybe<Scalars['Int']['output']>;
  acquisitionFormat?: Maybe<Scalars['String']['output']>;
  administrativeNotes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  callNumber?: Maybe<Scalars['String']['output']>;
  callNumberPrefix?: Maybe<Scalars['String']['output']>;
  callNumberSuffix?: Maybe<Scalars['String']['output']>;
  callNumberTypeId?: Maybe<Scalars['UUID']['output']>;
  copyNumber?: Maybe<Scalars['String']['output']>;
  digitizationPolicy?: Maybe<Scalars['String']['output']>;
  discoverySuppress?: Maybe<Scalars['Boolean']['output']>;
  effectiveLocation?: Maybe<Location>;
  effectiveLocationId?: Maybe<Scalars['UUID']['output']>;
  electronicAccess?: Maybe<Array<Maybe<ElectronicAccess>>>;
  formatIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  holdingsStatement?: Maybe<Array<Maybe<HoldingsStatement>>>;
  holdingsStatementsForIndexes?: Maybe<Array<Maybe<HoldingsStatement>>>;
  holdingsStatementsForSupplements?: Maybe<Array<Maybe<HoldingsStatement>>>;
  holdingsTypeId?: Maybe<Scalars['UUID']['output']>;
  hrid?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['UUID']['output']>;
  illPolicyId?: Maybe<Scalars['UUID']['output']>;
  instance?: Maybe<Instance>;
  instanceId: Scalars['UUID']['output'];
  items?: Maybe<Array<Maybe<Item>>>;
  metadata?: Maybe<Metadata>;
  notes?: Maybe<Array<Maybe<HoldingsNote>>>;
  numberOfItems?: Maybe<Scalars['String']['output']>;
  permanentLocation?: Maybe<Location>;
  permanentLocationId: Scalars['UUID']['output'];
  receiptStatus?: Maybe<Scalars['String']['output']>;
  receivingHistory?: Maybe<ReceivingHistory>;
  retentionPolicy?: Maybe<Scalars['String']['output']>;
  shelvingTitle?: Maybe<Scalars['String']['output']>;
  sourceId?: Maybe<Scalars['UUID']['output']>;
  statisticalCodeIds?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  temporaryLocation?: Maybe<Location>;
  temporaryLocationId?: Maybe<Scalars['UUID']['output']>;
};


export type HoldingsRecordItemsArgs = {
  params?: InputMaybe<CqlParams>;
};

export type HoldingsStatement = {
  __typename?: 'HoldingsStatement';
  note?: Maybe<Scalars['String']['output']>;
  staffNote?: Maybe<Scalars['String']['output']>;
  statement?: Maybe<Scalars['String']['output']>;
};

export type Identifier = {
  __typename?: 'Identifier';
  identifierTypeId: Scalars['UUID']['output'];
  value: Scalars['String']['output'];
};

export type Instance = {
  __typename?: 'Instance';
  _version: Scalars['Int']['output'];
  administrativeNotes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  alternativeTitles?: Maybe<Array<Maybe<AlternativeTitle>>>;
  catalogedDate?: Maybe<Scalars['String']['output']>;
  classifications?: Maybe<Array<Maybe<Classification>>>;
  contributors?: Maybe<Array<Maybe<Contributor>>>;
  discoverySuppress?: Maybe<Scalars['Boolean']['output']>;
  editions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  electronicAccess?: Maybe<Array<Maybe<ElectronicAccess>>>;
  holdingsRecords?: Maybe<Array<Maybe<HoldingsRecord>>>;
  hrid: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  identifiers?: Maybe<Array<Maybe<Identifier>>>;
  indexTitle?: Maybe<Scalars['String']['output']>;
  instanceFormatIds?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  instanceTypeId?: Maybe<Scalars['UUID']['output']>;
  items?: Maybe<Array<Maybe<Item>>>;
  languages?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  matchKey?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Metadata>;
  modeOfIssuanceId?: Maybe<Scalars['UUID']['output']>;
  natureOfContentTypeIds?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  notes?: Maybe<Array<Maybe<InstanceNote>>>;
  physicalDescriptions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  previouslyHeld?: Maybe<Scalars['Boolean']['output']>;
  publication?: Maybe<Array<Maybe<Publication>>>;
  publicationFrequency?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  publicationPeriod?: Maybe<Array<Maybe<PublicationPeriod>>>;
  publicationRange?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  series?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  source: Scalars['String']['output'];
  sourceRecordFormat?: Maybe<Scalars['String']['output']>;
  staffSuppress?: Maybe<Scalars['Boolean']['output']>;
  statisticalCodeIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  statusId?: Maybe<Scalars['UUID']['output']>;
  statusUpdatedDate?: Maybe<Scalars['String']['output']>;
  subjects?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  title?: Maybe<Scalars['String']['output']>;
};


export type InstanceHoldingsRecordsArgs = {
  params?: InputMaybe<CqlParams>;
};


export type InstanceItemsArgs = {
  params?: InputMaybe<CqlParams>;
};

export type InstanceNote = {
  __typename?: 'InstanceNote';
  instanceNoteTypeId?: Maybe<Scalars['UUID']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  staffOnly?: Maybe<Scalars['Boolean']['output']>;
};

export type Institution = {
  __typename?: 'Institution';
  code: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Metadata>;
  name: Scalars['String']['output'];
};

export type Item = {
  __typename?: 'Item';
  _version: Scalars['Int']['output'];
  accessionNumber?: Maybe<Scalars['String']['output']>;
  administrativeNotes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  barcode?: Maybe<Scalars['String']['output']>;
  chronology?: Maybe<Scalars['String']['output']>;
  circulationNotes?: Maybe<Array<Maybe<CirculationNote>>>;
  copyNumber?: Maybe<Scalars['String']['output']>;
  descriptionOfPieces?: Maybe<Scalars['String']['output']>;
  discoverySuppress?: Maybe<Scalars['Boolean']['output']>;
  effectiveCallNumberComponents?: Maybe<EffectiveCallNumberComponents>;
  effectiveLocation?: Maybe<Location>;
  effectiveLocationId?: Maybe<Scalars['String']['output']>;
  effectiveShelvingOrder?: Maybe<Scalars['String']['output']>;
  electronicAccess?: Maybe<Array<Maybe<ElectronicAccess>>>;
  enumeration?: Maybe<Scalars['String']['output']>;
  formerIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  holdingsRecord?: Maybe<HoldingsRecord>;
  holdingsRecordId: Scalars['String']['output'];
  hrid?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  inTransitDestinationServicePointId?: Maybe<Scalars['UUID']['output']>;
  instance?: Maybe<Instance>;
  itemDamagedStatusDate?: Maybe<Scalars['String']['output']>;
  itemDamagedStatusId?: Maybe<Scalars['String']['output']>;
  itemIdentifier?: Maybe<Scalars['String']['output']>;
  itemLevelCallNumber?: Maybe<Scalars['String']['output']>;
  itemLevelCallNumberPrefix?: Maybe<Scalars['String']['output']>;
  itemLevelCallNumberSuffix?: Maybe<Scalars['String']['output']>;
  itemLevelCallNumberTypeId?: Maybe<Scalars['String']['output']>;
  lastCheckIn?: Maybe<CheckIn>;
  materialTypeId: Scalars['String']['output'];
  metadata?: Maybe<Metadata>;
  missingPieces?: Maybe<Scalars['String']['output']>;
  missingPiecesDate?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Array<Maybe<ItemNote>>>;
  numberOfMissingPieces?: Maybe<Scalars['String']['output']>;
  numberOfPieces?: Maybe<Scalars['String']['output']>;
  permanentLoanTypeId: Scalars['String']['output'];
  permanentLocation?: Maybe<Location>;
  permanentLocationId?: Maybe<Scalars['String']['output']>;
  purchaseOrderLineIdentifier?: Maybe<Scalars['String']['output']>;
  statisticalCodes?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  status: Status;
  tags?: Maybe<Array<Maybe<Tag>>>;
  temporaryLoanTypeId?: Maybe<Scalars['String']['output']>;
  temporaryLocation?: Maybe<Location>;
  temporaryLocationId?: Maybe<Scalars['String']['output']>;
  volume?: Maybe<Scalars['String']['output']>;
  yearCaption?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type ItemNote = {
  __typename?: 'ItemNote';
  itemNoteTypeId?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  staffOnly?: Maybe<Scalars['Boolean']['output']>;
};

export type Library = {
  __typename?: 'Library';
  campus?: Maybe<Campus>;
  campusId: Scalars['String']['output'];
  code: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  locations?: Maybe<Array<Maybe<Location>>>;
  metadata?: Maybe<Metadata>;
  name: Scalars['String']['output'];
};

export type Loan = {
  __typename?: 'Loan';
  details: CirculationLoan;
  dueDate: Scalars['DateTime']['output'];
  id?: Maybe<Scalars['UUID']['output']>;
  item: RequestItem;
  loanDate: Scalars['DateTime']['output'];
  overdue: Scalars['Boolean']['output'];
};

export type LoanPolicy = {
  __typename?: 'LoanPolicy';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  loansPolicy?: Maybe<LoansPolicy>;
  name?: Maybe<Scalars['String']['output']>;
  renewalsPolicy?: Maybe<RenewalsPolicy>;
};

export type LoansPolicy = {
  __typename?: 'LoansPolicy';
  fixedDueDateSchedule?: Maybe<FixedDueDateSchedule>;
  fixedDueDateScheduleId?: Maybe<Scalars['UUID']['output']>;
  period?: Maybe<Period>;
  profileId?: Maybe<Scalars['String']['output']>;
};

export type Location = {
  __typename?: 'Location';
  campus?: Maybe<Campus>;
  campusId: Scalars['String']['output'];
  code: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  discoveryDisplayName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  institution?: Maybe<Institution>;
  institutionId: Scalars['String']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  library?: Maybe<Library>;
  libraryId: Scalars['String']['output'];
  metadata?: Maybe<Metadata>;
  name: Scalars['String']['output'];
  primaryServicePoint: Scalars['UUID']['output'];
  primaryServicePointObject?: Maybe<ServicePoint>;
  servicePointIds?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  servicePoints?: Maybe<Array<Maybe<ServicePoint>>>;
};

export type ManualBlock = {
  __typename?: 'ManualBlock';
  borrowing?: Maybe<Scalars['Boolean']['output']>;
  desc: Scalars['String']['output'];
  expirationDate?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['UUID']['output']>;
  patronMessage?: Maybe<Scalars['String']['output']>;
  renewals?: Maybe<Scalars['Boolean']['output']>;
  requests?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Metadata = {
  __typename?: 'Metadata';
  createdByUserId?: Maybe<Scalars['UUID']['output']>;
  createdByUsername?: Maybe<Scalars['String']['output']>;
  createdDate: Scalars['DateTime']['output'];
  updatedByUserId?: Maybe<Scalars['UUID']['output']>;
  updatedByUsername?: Maybe<Scalars['String']['output']>;
  updatedDate?: Maybe<Scalars['DateTime']['output']>;
};

export type Patron = {
  __typename?: 'Patron';
  accounts?: Maybe<Array<Maybe<Account>>>;
  blocks?: Maybe<Array<Maybe<Block>>>;
  charges: Array<Maybe<Charge>>;
  holds: Array<Maybe<Hold>>;
  id?: Maybe<Scalars['UUID']['output']>;
  loans: Array<Maybe<Loan>>;
  manualBlocks?: Maybe<Array<Maybe<ManualBlock>>>;
  totalCharges: ChargeAmount;
  totalChargesCount: Scalars['Int']['output'];
  totalHolds: Scalars['Int']['output'];
  totalLoans: Scalars['Int']['output'];
  user?: Maybe<User>;
};

export type PatronGroup = {
  __typename?: 'PatronGroup';
  desc?: Maybe<Scalars['String']['output']>;
  expirationOffsetInDays?: Maybe<Scalars['Int']['output']>;
  group: Scalars['String']['output'];
  id?: Maybe<Scalars['UUID']['output']>;
  limits?: Maybe<Array<Maybe<BlockLimit>>>;
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

export type Period = {
  __typename?: 'Period';
  duration: Scalars['Int']['output'];
  intervalId: Scalars['String']['output'];
};

export type Personal = {
  __typename?: 'Personal';
  dateOfBirth?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['EmailAddress']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName: Scalars['String']['output'];
  middleName?: Maybe<Scalars['String']['output']>;
  mobilePhone?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  preferredContactTypeId?: Maybe<Scalars['String']['output']>;
  preferredFirstName?: Maybe<Scalars['String']['output']>;
};

export type ProxyFor = {
  __typename?: 'ProxyFor';
  accrueTo?: Maybe<Scalars['String']['output']>;
  expirationDate?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  notificationsTo?: Maybe<Scalars['String']['output']>;
  proxyUser?: Maybe<User>;
  proxyUserId?: Maybe<Scalars['String']['output']>;
  requestforSponsor?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type Publication = {
  __typename?: 'Publication';
  dateOfPublication?: Maybe<Scalars['String']['output']>;
  place?: Maybe<Scalars['String']['output']>;
  publisher?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
};

export type PublicationPeriod = {
  __typename?: 'PublicationPeriod';
  end?: Maybe<Scalars['Int']['output']>;
  start?: Maybe<Scalars['Int']['output']>;
};

export type Query = {
  __typename?: 'Query';
  holdingsRecord?: Maybe<HoldingsRecord>;
  holdingsRecords?: Maybe<Array<Maybe<HoldingsRecord>>>;
  instance?: Maybe<Instance>;
  instances?: Maybe<Array<Maybe<Instance>>>;
  item?: Maybe<Item>;
  items?: Maybe<Array<Maybe<Item>>>;
  libraries?: Maybe<Array<Maybe<Library>>>;
  loanPolicies?: Maybe<Array<Maybe<LoanPolicy>>>;
  patron?: Maybe<Patron>;
  patronGroups?: Maybe<Array<Maybe<PatronGroup>>>;
  requestPolicies?: Maybe<Array<Maybe<RequestPolicy>>>;
};


export type QueryHoldingsRecordArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryHoldingsRecordsArgs = {
  hrid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  params?: InputMaybe<CqlParams>;
};


export type QueryInstanceArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryInstancesArgs = {
  hrid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  params?: InputMaybe<CqlParams>;
};


export type QueryItemArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryItemsArgs = {
  hrid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  params?: InputMaybe<CqlParams>;
};


export type QueryLibrariesArgs = {
  params?: InputMaybe<CqlParams>;
};


export type QueryLoanPoliciesArgs = {
  params?: InputMaybe<CqlParams>;
};


export type QueryPatronArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryRequestPoliciesArgs = {
  params?: InputMaybe<CqlParams>;
};

export type ReceivingHistory = {
  __typename?: 'ReceivingHistory';
  displayType?: Maybe<Scalars['String']['output']>;
  entries?: Maybe<Array<Maybe<ReceivingHistoryEntry>>>;
};

export type ReceivingHistoryEntry = {
  __typename?: 'ReceivingHistoryEntry';
  chronology?: Maybe<Scalars['String']['output']>;
  enumeration?: Maybe<Scalars['String']['output']>;
  publicDisplay?: Maybe<Scalars['Boolean']['output']>;
};

export type RenewalsPolicy = {
  __typename?: 'RenewalsPolicy';
  numberAllowed?: Maybe<Scalars['Int']['output']>;
  period?: Maybe<Period>;
  renewFromId?: Maybe<Scalars['String']['output']>;
  renewable?: Maybe<Scalars['Boolean']['output']>;
  unlimited?: Maybe<Scalars['Boolean']['output']>;
};

export type RequestItem = {
  __typename?: 'RequestItem';
  author?: Maybe<Scalars['String']['output']>;
  instance?: Maybe<Instance>;
  instanceId: Scalars['UUID']['output'];
  isbn?: Maybe<Scalars['String']['output']>;
  item?: Maybe<Item>;
  itemId?: Maybe<Scalars['UUID']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type RequestPolicy = {
  __typename?: 'RequestPolicy';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  requestTypes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Schedule = {
  __typename?: 'Schedule';
  due: Scalars['DateTime']['output'];
  from: Scalars['DateTime']['output'];
  to: Scalars['DateTime']['output'];
};

export type ServicePoint = {
  __typename?: 'ServicePoint';
  code: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  discoveryDisplayName: Scalars['String']['output'];
  id?: Maybe<Scalars['UUID']['output']>;
  name: Scalars['String']['output'];
  pickupLocation?: Maybe<Scalars['Boolean']['output']>;
  shelvingLagTime?: Maybe<Scalars['Int']['output']>;
};

export type Source = {
  __typename?: 'Source';
  id?: Maybe<Scalars['String']['output']>;
  personal?: Maybe<Personal>;
};

export type Status = {
  __typename?: 'Status';
  date?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type Tag = {
  __typename?: 'Tag';
  tagList?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Tags = {
  __typename?: 'Tags';
  tagList?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type User = {
  __typename?: 'User';
  accounts?: Maybe<Array<Maybe<Account>>>;
  active?: Maybe<Scalars['Boolean']['output']>;
  barcode?: Maybe<Scalars['String']['output']>;
  blocks?: Maybe<Array<Maybe<Block>>>;
  department?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  enrollmentDate?: Maybe<Scalars['DateTime']['output']>;
  expirationDate?: Maybe<Scalars['DateTime']['output']>;
  externalSystemId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['UUID']['output']>;
  manualBlocks?: Maybe<Array<Maybe<ManualBlock>>>;
  metadata?: Maybe<Metadata>;
  patronGroup?: Maybe<PatronGroup>;
  patronGroupId?: Maybe<Scalars['UUID']['output']>;
  personal?: Maybe<Personal>;
  proxies?: Maybe<Array<Maybe<ProxyFor>>>;
  proxyFor?: Maybe<Array<Maybe<ProxyFor>>>;
  tags?: Maybe<Tags>;
  type?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Account: ResolverTypeWrapper<Account>;
  Address: ResolverTypeWrapper<Address>;
  AlternativeTitle: ResolverTypeWrapper<AlternativeTitle>;
  Block: ResolverTypeWrapper<Block>;
  BlockCondition: ResolverTypeWrapper<BlockCondition>;
  BlockLimit: ResolverTypeWrapper<BlockLimit>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Campus: ResolverTypeWrapper<Campus>;
  Charge: ResolverTypeWrapper<Charge>;
  ChargeAmount: ResolverTypeWrapper<ChargeAmount>;
  CheckIn: ResolverTypeWrapper<CheckIn>;
  CirculationLoan: ResolverTypeWrapper<CirculationLoan>;
  CirculationLoanFeesAndFines: ResolverTypeWrapper<CirculationLoanFeesAndFines>;
  CirculationNote: ResolverTypeWrapper<CirculationNote>;
  Classification: ResolverTypeWrapper<Classification>;
  ClassificationType: ResolverTypeWrapper<ClassificationType>;
  Contributor: ResolverTypeWrapper<Contributor>;
  CqlParams: CqlParams;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  EffectiveCallNumberComponents: ResolverTypeWrapper<EffectiveCallNumberComponents>;
  ElectronicAccess: ResolverTypeWrapper<ElectronicAccess>;
  EmailAddress: ResolverTypeWrapper<Scalars['EmailAddress']['output']>;
  FeeFine: ResolverTypeWrapper<FeeFine>;
  FixedDueDateSchedule: ResolverTypeWrapper<FixedDueDateSchedule>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Hold: ResolverTypeWrapper<Hold>;
  HoldingsNote: ResolverTypeWrapper<HoldingsNote>;
  HoldingsRecord: ResolverTypeWrapper<HoldingsRecord>;
  HoldingsStatement: ResolverTypeWrapper<HoldingsStatement>;
  Identifier: ResolverTypeWrapper<Identifier>;
  Instance: ResolverTypeWrapper<Instance>;
  InstanceNote: ResolverTypeWrapper<InstanceNote>;
  Institution: ResolverTypeWrapper<Institution>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Item: ResolverTypeWrapper<Item>;
  ItemNote: ResolverTypeWrapper<ItemNote>;
  Library: ResolverTypeWrapper<Library>;
  Loan: ResolverTypeWrapper<Loan>;
  LoanPolicy: ResolverTypeWrapper<LoanPolicy>;
  LoansPolicy: ResolverTypeWrapper<LoansPolicy>;
  Location: ResolverTypeWrapper<Location>;
  ManualBlock: ResolverTypeWrapper<ManualBlock>;
  Metadata: ResolverTypeWrapper<Metadata>;
  Patron: ResolverTypeWrapper<Patron>;
  PatronGroup: ResolverTypeWrapper<PatronGroup>;
  PatronStanding: PatronStanding;
  PatronStatus: PatronStatus;
  Period: ResolverTypeWrapper<Period>;
  Personal: ResolverTypeWrapper<Personal>;
  ProxyFor: ResolverTypeWrapper<ProxyFor>;
  Publication: ResolverTypeWrapper<Publication>;
  PublicationPeriod: ResolverTypeWrapper<PublicationPeriod>;
  Query: ResolverTypeWrapper<{}>;
  ReceivingHistory: ResolverTypeWrapper<ReceivingHistory>;
  ReceivingHistoryEntry: ResolverTypeWrapper<ReceivingHistoryEntry>;
  RenewalsPolicy: ResolverTypeWrapper<RenewalsPolicy>;
  RequestItem: ResolverTypeWrapper<RequestItem>;
  RequestPolicy: ResolverTypeWrapper<RequestPolicy>;
  Schedule: ResolverTypeWrapper<Schedule>;
  ServicePoint: ResolverTypeWrapper<ServicePoint>;
  Source: ResolverTypeWrapper<Source>;
  Status: ResolverTypeWrapper<Status>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Tag: ResolverTypeWrapper<Tag>;
  Tags: ResolverTypeWrapper<Tags>;
  UUID: ResolverTypeWrapper<Scalars['UUID']['output']>;
  User: ResolverTypeWrapper<User>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Account: Account;
  Address: Address;
  AlternativeTitle: AlternativeTitle;
  Block: Block;
  BlockCondition: BlockCondition;
  BlockLimit: BlockLimit;
  Boolean: Scalars['Boolean']['output'];
  Campus: Campus;
  Charge: Charge;
  ChargeAmount: ChargeAmount;
  CheckIn: CheckIn;
  CirculationLoan: CirculationLoan;
  CirculationLoanFeesAndFines: CirculationLoanFeesAndFines;
  CirculationNote: CirculationNote;
  Classification: Classification;
  ClassificationType: ClassificationType;
  Contributor: Contributor;
  CqlParams: CqlParams;
  DateTime: Scalars['DateTime']['output'];
  EffectiveCallNumberComponents: EffectiveCallNumberComponents;
  ElectronicAccess: ElectronicAccess;
  EmailAddress: Scalars['EmailAddress']['output'];
  FeeFine: FeeFine;
  FixedDueDateSchedule: FixedDueDateSchedule;
  Float: Scalars['Float']['output'];
  Hold: Hold;
  HoldingsNote: HoldingsNote;
  HoldingsRecord: HoldingsRecord;
  HoldingsStatement: HoldingsStatement;
  Identifier: Identifier;
  Instance: Instance;
  InstanceNote: InstanceNote;
  Institution: Institution;
  Int: Scalars['Int']['output'];
  Item: Item;
  ItemNote: ItemNote;
  Library: Library;
  Loan: Loan;
  LoanPolicy: LoanPolicy;
  LoansPolicy: LoansPolicy;
  Location: Location;
  ManualBlock: ManualBlock;
  Metadata: Metadata;
  Patron: Patron;
  PatronGroup: PatronGroup;
  Period: Period;
  Personal: Personal;
  ProxyFor: ProxyFor;
  Publication: Publication;
  PublicationPeriod: PublicationPeriod;
  Query: {};
  ReceivingHistory: ReceivingHistory;
  ReceivingHistoryEntry: ReceivingHistoryEntry;
  RenewalsPolicy: RenewalsPolicy;
  RequestItem: RequestItem;
  RequestPolicy: RequestPolicy;
  Schedule: Schedule;
  ServicePoint: ServicePoint;
  Source: Source;
  Status: Status;
  String: Scalars['String']['output'];
  Tag: Tag;
  Tags: Tags;
  UUID: Scalars['UUID']['output'];
  User: User;
}>;

export type AccountResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = ResolversObject<{
  amount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  barcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  callNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dateCreated?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  dateUpdated?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  dueDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  feeFine?: Resolver<Maybe<ResolversTypes['FeeFine']>, ParentType, ContextType>;
  feeFineId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  feeFineOwner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  feeFineType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  holdingsRecordId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  instanceId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  item?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType>;
  itemId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  itemStatus?: Resolver<Maybe<ResolversTypes['Status']>, ParentType, ContextType>;
  loan?: Resolver<Maybe<ResolversTypes['CirculationLoan']>, ParentType, ContextType>;
  loanId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  loanPolicyId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lostItemFeePolicyId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  materialType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  materialTypeId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  overdueFinePolicyId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  ownerId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  paymentStatus?: Resolver<ResolversTypes['Status'], ParentType, ContextType>;
  processId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  remaining?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  returnedDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Status']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AddressResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']> = ResolversObject<{
  addressLine1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  addressLine2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  addressTypeId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postalCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  primaryAddress?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AlternativeTitleResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['AlternativeTitle'] = ResolversParentTypes['AlternativeTitle']> = ResolversObject<{
  alternativeTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  alternativeTitleTypeId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlockResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Block'] = ResolversParentTypes['Block']> = ResolversObject<{
  blockBorrowing?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  blockRenewals?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  blockRequests?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  patronBlockConditionId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlockConditionResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['BlockCondition'] = ResolversParentTypes['BlockCondition']> = ResolversObject<{
  blockBorrowing?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  blockRenewals?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  blockRequests?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  valueType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlockLimitResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['BlockLimit'] = ResolversParentTypes['BlockLimit']> = ResolversObject<{
  condition?: Resolver<Maybe<ResolversTypes['BlockCondition']>, ParentType, ContextType>;
  conditionId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  patronGroupId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CampusResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Campus'] = ResolversParentTypes['Campus']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  institution?: Resolver<Maybe<ResolversTypes['Institution']>, ParentType, ContextType>;
  institutionId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ChargeResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Charge'] = ResolversParentTypes['Charge']> = ResolversObject<{
  accrualDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  chargeAmount?: Resolver<Maybe<ResolversTypes['ChargeAmount']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  feeFine?: Resolver<Maybe<ResolversTypes['FeeFine']>, ParentType, ContextType>;
  feeFineId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  item?: Resolver<Maybe<ResolversTypes['RequestItem']>, ParentType, ContextType>;
  reason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ChargeAmountResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['ChargeAmount'] = ResolversParentTypes['ChargeAmount']> = ResolversObject<{
  amount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  isoCurrencyCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CheckInResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['CheckIn'] = ResolversParentTypes['CheckIn']> = ResolversObject<{
  dateTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  servicePointId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  staffMemberId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CirculationLoanResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['CirculationLoan'] = ResolversParentTypes['CirculationLoan']> = ResolversObject<{
  action?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  actionComment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  declaredLostDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  dueDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  dueDateChangedByHold?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  dueDateChangedByRecall?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  feesAndFines?: Resolver<Maybe<ResolversTypes['CirculationLoanFeesAndFines']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  item?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType>;
  itemEffectiveLocationAtCheckOut?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>;
  itemEffectiveLocationIdAtCheckOut?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  itemId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  loanDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  loanPolicy?: Resolver<Maybe<ResolversTypes['LoanPolicy']>, ParentType, ContextType>;
  loanPolicyId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  lostItemPolicyId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  overdueFinePolicyId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  proxyUserId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  renewalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  returnDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  systemReturnDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CirculationLoanFeesAndFinesResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['CirculationLoanFeesAndFines'] = ResolversParentTypes['CirculationLoanFeesAndFines']> = ResolversObject<{
  amountRemainingToPay?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CirculationNoteResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['CirculationNote'] = ResolversParentTypes['CirculationNote']> = ResolversObject<{
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  noteType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['Source']>, ParentType, ContextType>;
  staffOnly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ClassificationResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Classification'] = ResolversParentTypes['Classification']> = ResolversObject<{
  classificationNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  classificationType?: Resolver<Maybe<ResolversTypes['ClassificationType']>, ParentType, ContextType>;
  classificationTypeId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ClassificationTypeResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['ClassificationType'] = ResolversParentTypes['ClassificationType']> = ResolversObject<{
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContributorResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Contributor'] = ResolversParentTypes['Contributor']> = ResolversObject<{
  authorityId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  contributorNameTypeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contributorTypeId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  contributorTypeText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  primary?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type EffectiveCallNumberComponentsResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['EffectiveCallNumberComponents'] = ResolversParentTypes['EffectiveCallNumberComponents']> = ResolversObject<{
  callNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  prefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  typeId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ElectronicAccessResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['ElectronicAccess'] = ResolversParentTypes['ElectronicAccess']> = ResolversObject<{
  linkText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  materialsSpecification?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publicNote?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  relationshipId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface EmailAddressScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['EmailAddress'], any> {
  name: 'EmailAddress';
}

export type FeeFineResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['FeeFine'] = ResolversParentTypes['FeeFine']> = ResolversObject<{
  actionNoticeId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  automatic?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  chargeNoticeId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  defaultAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  feeFineType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  ownerId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FixedDueDateScheduleResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['FixedDueDateSchedule'] = ResolversParentTypes['FixedDueDateSchedule']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  schedules?: Resolver<Maybe<Array<Maybe<ResolversTypes['Schedule']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HoldResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Hold'] = ResolversParentTypes['Hold']> = ResolversObject<{
  canceledByUserId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  canceledDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  cancellationAdditionalInformation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cancellationReasonId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  expirationDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  item?: Resolver<Maybe<ResolversTypes['RequestItem']>, ParentType, ContextType>;
  patronComments?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pickupLocation?: Resolver<Maybe<ResolversTypes['ServicePoint']>, ParentType, ContextType>;
  pickupLocationId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  queuePosition?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  requestDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  requestId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HoldingsNoteResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['HoldingsNote'] = ResolversParentTypes['HoldingsNote']> = ResolversObject<{
  holdingsNoteTypeId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  staffOnly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HoldingsRecordResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['HoldingsRecord'] = ResolversParentTypes['HoldingsRecord']> = ResolversObject<{
  _version?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  acquisitionFormat?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  administrativeNotes?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  callNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  callNumberPrefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  callNumberSuffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  callNumberTypeId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  copyNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  digitizationPolicy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  discoverySuppress?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  effectiveLocation?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>;
  effectiveLocationId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  electronicAccess?: Resolver<Maybe<Array<Maybe<ResolversTypes['ElectronicAccess']>>>, ParentType, ContextType>;
  formatIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  holdingsStatement?: Resolver<Maybe<Array<Maybe<ResolversTypes['HoldingsStatement']>>>, ParentType, ContextType>;
  holdingsStatementsForIndexes?: Resolver<Maybe<Array<Maybe<ResolversTypes['HoldingsStatement']>>>, ParentType, ContextType>;
  holdingsStatementsForSupplements?: Resolver<Maybe<Array<Maybe<ResolversTypes['HoldingsStatement']>>>, ParentType, ContextType>;
  holdingsTypeId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  hrid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  illPolicyId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  instance?: Resolver<Maybe<ResolversTypes['Instance']>, ParentType, ContextType>;
  instanceId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['Item']>>>, ParentType, ContextType, Partial<HoldingsRecordItemsArgs>>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<Array<Maybe<ResolversTypes['HoldingsNote']>>>, ParentType, ContextType>;
  numberOfItems?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  permanentLocation?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>;
  permanentLocationId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  receiptStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  receivingHistory?: Resolver<Maybe<ResolversTypes['ReceivingHistory']>, ParentType, ContextType>;
  retentionPolicy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shelvingTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sourceId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  statisticalCodeIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['UUID']>>>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tag']>>>, ParentType, ContextType>;
  temporaryLocation?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>;
  temporaryLocationId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HoldingsStatementResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['HoldingsStatement'] = ResolversParentTypes['HoldingsStatement']> = ResolversObject<{
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  staffNote?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  statement?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IdentifierResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Identifier'] = ResolversParentTypes['Identifier']> = ResolversObject<{
  identifierTypeId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InstanceResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Instance'] = ResolversParentTypes['Instance']> = ResolversObject<{
  _version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  administrativeNotes?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  alternativeTitles?: Resolver<Maybe<Array<Maybe<ResolversTypes['AlternativeTitle']>>>, ParentType, ContextType>;
  catalogedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  classifications?: Resolver<Maybe<Array<Maybe<ResolversTypes['Classification']>>>, ParentType, ContextType>;
  contributors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Contributor']>>>, ParentType, ContextType>;
  discoverySuppress?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  editions?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  electronicAccess?: Resolver<Maybe<Array<Maybe<ResolversTypes['ElectronicAccess']>>>, ParentType, ContextType>;
  holdingsRecords?: Resolver<Maybe<Array<Maybe<ResolversTypes['HoldingsRecord']>>>, ParentType, ContextType, Partial<InstanceHoldingsRecordsArgs>>;
  hrid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  identifiers?: Resolver<Maybe<Array<Maybe<ResolversTypes['Identifier']>>>, ParentType, ContextType>;
  indexTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  instanceFormatIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['UUID']>>>, ParentType, ContextType>;
  instanceTypeId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['Item']>>>, ParentType, ContextType, Partial<InstanceItemsArgs>>;
  languages?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  matchKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  modeOfIssuanceId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  natureOfContentTypeIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['UUID']>>>, ParentType, ContextType>;
  notes?: Resolver<Maybe<Array<Maybe<ResolversTypes['InstanceNote']>>>, ParentType, ContextType>;
  physicalDescriptions?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  previouslyHeld?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  publication?: Resolver<Maybe<Array<Maybe<ResolversTypes['Publication']>>>, ParentType, ContextType>;
  publicationFrequency?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  publicationPeriod?: Resolver<Maybe<Array<Maybe<ResolversTypes['PublicationPeriod']>>>, ParentType, ContextType>;
  publicationRange?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  series?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  source?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sourceRecordFormat?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  staffSuppress?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  statisticalCodeIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  statusId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  statusUpdatedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subjects?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tag']>>>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InstanceNoteResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['InstanceNote'] = ResolversParentTypes['InstanceNote']> = ResolversObject<{
  instanceNoteTypeId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  staffOnly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InstitutionResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Institution'] = ResolversParentTypes['Institution']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ItemResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Item'] = ResolversParentTypes['Item']> = ResolversObject<{
  _version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  accessionNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  administrativeNotes?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  barcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  chronology?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  circulationNotes?: Resolver<Maybe<Array<Maybe<ResolversTypes['CirculationNote']>>>, ParentType, ContextType>;
  copyNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  descriptionOfPieces?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  discoverySuppress?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  effectiveCallNumberComponents?: Resolver<Maybe<ResolversTypes['EffectiveCallNumberComponents']>, ParentType, ContextType>;
  effectiveLocation?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>;
  effectiveLocationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  effectiveShelvingOrder?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  electronicAccess?: Resolver<Maybe<Array<Maybe<ResolversTypes['ElectronicAccess']>>>, ParentType, ContextType>;
  enumeration?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  formerIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  holdingsRecord?: Resolver<Maybe<ResolversTypes['HoldingsRecord']>, ParentType, ContextType>;
  holdingsRecordId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hrid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  inTransitDestinationServicePointId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  instance?: Resolver<Maybe<ResolversTypes['Instance']>, ParentType, ContextType>;
  itemDamagedStatusDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  itemDamagedStatusId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  itemIdentifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  itemLevelCallNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  itemLevelCallNumberPrefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  itemLevelCallNumberSuffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  itemLevelCallNumberTypeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastCheckIn?: Resolver<Maybe<ResolversTypes['CheckIn']>, ParentType, ContextType>;
  materialTypeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  missingPieces?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  missingPiecesDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemNote']>>>, ParentType, ContextType>;
  numberOfMissingPieces?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  numberOfPieces?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  permanentLoanTypeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  permanentLocation?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>;
  permanentLocationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  purchaseOrderLineIdentifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  statisticalCodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['UUID']>>>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Status'], ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tag']>>>, ParentType, ContextType>;
  temporaryLoanTypeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  temporaryLocation?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>;
  temporaryLocationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  volume?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  yearCaption?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ItemNoteResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['ItemNote'] = ResolversParentTypes['ItemNote']> = ResolversObject<{
  itemNoteTypeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  staffOnly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LibraryResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Library'] = ResolversParentTypes['Library']> = ResolversObject<{
  campus?: Resolver<Maybe<ResolversTypes['Campus']>, ParentType, ContextType>;
  campusId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  locations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Location']>>>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoanResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Loan'] = ResolversParentTypes['Loan']> = ResolversObject<{
  details?: Resolver<ResolversTypes['CirculationLoan'], ParentType, ContextType>;
  dueDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  item?: Resolver<ResolversTypes['RequestItem'], ParentType, ContextType>;
  loanDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  overdue?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoanPolicyResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['LoanPolicy'] = ResolversParentTypes['LoanPolicy']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  loansPolicy?: Resolver<Maybe<ResolversTypes['LoansPolicy']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  renewalsPolicy?: Resolver<Maybe<ResolversTypes['RenewalsPolicy']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoansPolicyResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['LoansPolicy'] = ResolversParentTypes['LoansPolicy']> = ResolversObject<{
  fixedDueDateSchedule?: Resolver<Maybe<ResolversTypes['FixedDueDateSchedule']>, ParentType, ContextType>;
  fixedDueDateScheduleId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  period?: Resolver<Maybe<ResolversTypes['Period']>, ParentType, ContextType>;
  profileId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LocationResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location']> = ResolversObject<{
  campus?: Resolver<Maybe<ResolversTypes['Campus']>, ParentType, ContextType>;
  campusId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  discoveryDisplayName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  institution?: Resolver<Maybe<ResolversTypes['Institution']>, ParentType, ContextType>;
  institutionId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isActive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  library?: Resolver<Maybe<ResolversTypes['Library']>, ParentType, ContextType>;
  libraryId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  primaryServicePoint?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  primaryServicePointObject?: Resolver<Maybe<ResolversTypes['ServicePoint']>, ParentType, ContextType>;
  servicePointIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['UUID']>>>, ParentType, ContextType>;
  servicePoints?: Resolver<Maybe<Array<Maybe<ResolversTypes['ServicePoint']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ManualBlockResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['ManualBlock'] = ResolversParentTypes['ManualBlock']> = ResolversObject<{
  borrowing?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  desc?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  expirationDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  patronMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  renewals?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  requests?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MetadataResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Metadata'] = ResolversParentTypes['Metadata']> = ResolversObject<{
  createdByUserId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  createdByUsername?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedByUserId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  updatedByUsername?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PatronResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Patron'] = ResolversParentTypes['Patron']> = ResolversObject<{
  accounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Account']>>>, ParentType, ContextType>;
  blocks?: Resolver<Maybe<Array<Maybe<ResolversTypes['Block']>>>, ParentType, ContextType>;
  charges?: Resolver<Array<Maybe<ResolversTypes['Charge']>>, ParentType, ContextType>;
  holds?: Resolver<Array<Maybe<ResolversTypes['Hold']>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  loans?: Resolver<Array<Maybe<ResolversTypes['Loan']>>, ParentType, ContextType>;
  manualBlocks?: Resolver<Maybe<Array<Maybe<ResolversTypes['ManualBlock']>>>, ParentType, ContextType>;
  totalCharges?: Resolver<ResolversTypes['ChargeAmount'], ParentType, ContextType>;
  totalChargesCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalHolds?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalLoans?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PatronGroupResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['PatronGroup'] = ResolversParentTypes['PatronGroup']> = ResolversObject<{
  desc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expirationOffsetInDays?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  group?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  limits?: Resolver<Maybe<Array<Maybe<ResolversTypes['BlockLimit']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PeriodResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Period'] = ResolversParentTypes['Period']> = ResolversObject<{
  duration?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  intervalId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PersonalResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Personal'] = ResolversParentTypes['Personal']> = ResolversObject<{
  dateOfBirth?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['EmailAddress']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  middleName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mobilePhone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  preferredContactTypeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  preferredFirstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProxyForResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['ProxyFor'] = ResolversParentTypes['ProxyFor']> = ResolversObject<{
  accrueTo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expirationDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  notificationsTo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  proxyUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  proxyUserId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  requestforSponsor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PublicationResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Publication'] = ResolversParentTypes['Publication']> = ResolversObject<{
  dateOfPublication?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  place?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publisher?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PublicationPeriodResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['PublicationPeriod'] = ResolversParentTypes['PublicationPeriod']> = ResolversObject<{
  end?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  start?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  holdingsRecord?: Resolver<Maybe<ResolversTypes['HoldingsRecord']>, ParentType, ContextType, RequireFields<QueryHoldingsRecordArgs, 'id'>>;
  holdingsRecords?: Resolver<Maybe<Array<Maybe<ResolversTypes['HoldingsRecord']>>>, ParentType, ContextType, Partial<QueryHoldingsRecordsArgs>>;
  instance?: Resolver<Maybe<ResolversTypes['Instance']>, ParentType, ContextType, RequireFields<QueryInstanceArgs, 'id'>>;
  instances?: Resolver<Maybe<Array<Maybe<ResolversTypes['Instance']>>>, ParentType, ContextType, Partial<QueryInstancesArgs>>;
  item?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType, RequireFields<QueryItemArgs, 'id'>>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['Item']>>>, ParentType, ContextType, Partial<QueryItemsArgs>>;
  libraries?: Resolver<Maybe<Array<Maybe<ResolversTypes['Library']>>>, ParentType, ContextType, Partial<QueryLibrariesArgs>>;
  loanPolicies?: Resolver<Maybe<Array<Maybe<ResolversTypes['LoanPolicy']>>>, ParentType, ContextType, Partial<QueryLoanPoliciesArgs>>;
  patron?: Resolver<Maybe<ResolversTypes['Patron']>, ParentType, ContextType, RequireFields<QueryPatronArgs, 'id'>>;
  patronGroups?: Resolver<Maybe<Array<Maybe<ResolversTypes['PatronGroup']>>>, ParentType, ContextType>;
  requestPolicies?: Resolver<Maybe<Array<Maybe<ResolversTypes['RequestPolicy']>>>, ParentType, ContextType, Partial<QueryRequestPoliciesArgs>>;
}>;

export type ReceivingHistoryResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['ReceivingHistory'] = ResolversParentTypes['ReceivingHistory']> = ResolversObject<{
  displayType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entries?: Resolver<Maybe<Array<Maybe<ResolversTypes['ReceivingHistoryEntry']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReceivingHistoryEntryResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['ReceivingHistoryEntry'] = ResolversParentTypes['ReceivingHistoryEntry']> = ResolversObject<{
  chronology?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  enumeration?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publicDisplay?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RenewalsPolicyResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['RenewalsPolicy'] = ResolversParentTypes['RenewalsPolicy']> = ResolversObject<{
  numberAllowed?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  period?: Resolver<Maybe<ResolversTypes['Period']>, ParentType, ContextType>;
  renewFromId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  renewable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  unlimited?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RequestItemResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['RequestItem'] = ResolversParentTypes['RequestItem']> = ResolversObject<{
  author?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  instance?: Resolver<Maybe<ResolversTypes['Instance']>, ParentType, ContextType>;
  instanceId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  isbn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  item?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType>;
  itemId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RequestPolicyResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['RequestPolicy'] = ResolversParentTypes['RequestPolicy']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  requestTypes?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ScheduleResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Schedule'] = ResolversParentTypes['Schedule']> = ResolversObject<{
  due?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ServicePointResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['ServicePoint'] = ResolversParentTypes['ServicePoint']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  discoveryDisplayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pickupLocation?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  shelvingLagTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SourceResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Source'] = ResolversParentTypes['Source']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  personal?: Resolver<Maybe<ResolversTypes['Personal']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StatusResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Status'] = ResolversParentTypes['Status']> = ResolversObject<{
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TagResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag']> = ResolversObject<{
  tagList?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TagsResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Tags'] = ResolversParentTypes['Tags']> = ResolversObject<{
  tagList?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UUID'], any> {
  name: 'UUID';
}

export type UserResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  accounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Account']>>>, ParentType, ContextType>;
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  barcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  blocks?: Resolver<Maybe<Array<Maybe<ResolversTypes['Block']>>>, ParentType, ContextType>;
  department?: Resolver<Maybe<Array<Maybe<ResolversTypes['UUID']>>>, ParentType, ContextType>;
  enrollmentDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  expirationDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  externalSystemId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  manualBlocks?: Resolver<Maybe<Array<Maybe<ResolversTypes['ManualBlock']>>>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  patronGroup?: Resolver<Maybe<ResolversTypes['PatronGroup']>, ParentType, ContextType>;
  patronGroupId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  personal?: Resolver<Maybe<ResolversTypes['Personal']>, ParentType, ContextType>;
  proxies?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProxyFor']>>>, ParentType, ContextType>;
  proxyFor?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProxyFor']>>>, ParentType, ContextType>;
  tags?: Resolver<Maybe<ResolversTypes['Tags']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = FolioContext> = ResolversObject<{
  Account?: AccountResolvers<ContextType>;
  Address?: AddressResolvers<ContextType>;
  AlternativeTitle?: AlternativeTitleResolvers<ContextType>;
  Block?: BlockResolvers<ContextType>;
  BlockCondition?: BlockConditionResolvers<ContextType>;
  BlockLimit?: BlockLimitResolvers<ContextType>;
  Campus?: CampusResolvers<ContextType>;
  Charge?: ChargeResolvers<ContextType>;
  ChargeAmount?: ChargeAmountResolvers<ContextType>;
  CheckIn?: CheckInResolvers<ContextType>;
  CirculationLoan?: CirculationLoanResolvers<ContextType>;
  CirculationLoanFeesAndFines?: CirculationLoanFeesAndFinesResolvers<ContextType>;
  CirculationNote?: CirculationNoteResolvers<ContextType>;
  Classification?: ClassificationResolvers<ContextType>;
  ClassificationType?: ClassificationTypeResolvers<ContextType>;
  Contributor?: ContributorResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  EffectiveCallNumberComponents?: EffectiveCallNumberComponentsResolvers<ContextType>;
  ElectronicAccess?: ElectronicAccessResolvers<ContextType>;
  EmailAddress?: GraphQLScalarType;
  FeeFine?: FeeFineResolvers<ContextType>;
  FixedDueDateSchedule?: FixedDueDateScheduleResolvers<ContextType>;
  Hold?: HoldResolvers<ContextType>;
  HoldingsNote?: HoldingsNoteResolvers<ContextType>;
  HoldingsRecord?: HoldingsRecordResolvers<ContextType>;
  HoldingsStatement?: HoldingsStatementResolvers<ContextType>;
  Identifier?: IdentifierResolvers<ContextType>;
  Instance?: InstanceResolvers<ContextType>;
  InstanceNote?: InstanceNoteResolvers<ContextType>;
  Institution?: InstitutionResolvers<ContextType>;
  Item?: ItemResolvers<ContextType>;
  ItemNote?: ItemNoteResolvers<ContextType>;
  Library?: LibraryResolvers<ContextType>;
  Loan?: LoanResolvers<ContextType>;
  LoanPolicy?: LoanPolicyResolvers<ContextType>;
  LoansPolicy?: LoansPolicyResolvers<ContextType>;
  Location?: LocationResolvers<ContextType>;
  ManualBlock?: ManualBlockResolvers<ContextType>;
  Metadata?: MetadataResolvers<ContextType>;
  Patron?: PatronResolvers<ContextType>;
  PatronGroup?: PatronGroupResolvers<ContextType>;
  Period?: PeriodResolvers<ContextType>;
  Personal?: PersonalResolvers<ContextType>;
  ProxyFor?: ProxyForResolvers<ContextType>;
  Publication?: PublicationResolvers<ContextType>;
  PublicationPeriod?: PublicationPeriodResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  ReceivingHistory?: ReceivingHistoryResolvers<ContextType>;
  ReceivingHistoryEntry?: ReceivingHistoryEntryResolvers<ContextType>;
  RenewalsPolicy?: RenewalsPolicyResolvers<ContextType>;
  RequestItem?: RequestItemResolvers<ContextType>;
  RequestPolicy?: RequestPolicyResolvers<ContextType>;
  Schedule?: ScheduleResolvers<ContextType>;
  ServicePoint?: ServicePointResolvers<ContextType>;
  Source?: SourceResolvers<ContextType>;
  Status?: StatusResolvers<ContextType>;
  Tag?: TagResolvers<ContextType>;
  Tags?: TagsResolvers<ContextType>;
  UUID?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
}>;

