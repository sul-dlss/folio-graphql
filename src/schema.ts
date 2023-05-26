export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
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
