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

export type AlternativeTitle = {
  __typename?: 'AlternativeTitle';
  alternativeTitle?: Maybe<Scalars['String']>;
  alternativeTitleTypeId?: Maybe<Scalars['UUID']>;
};

export type Campus = {
  __typename?: 'Campus';
  code: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  institution?: Maybe<Institution>;
  institutionId: Scalars['String'];
  metadata?: Maybe<Metadata>;
  name: Scalars['String'];
};

export type Charge = {
  __typename?: 'Charge';
  accrualDate?: Maybe<Scalars['Date']>;
  chargeAmount?: Maybe<ChargeAmount>;
  description?: Maybe<Scalars['String']>;
  feeFineId?: Maybe<Scalars['UUID']>;
  item?: Maybe<RequestItem>;
  reason?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
};

export type ChargeAmount = {
  __typename?: 'ChargeAmount';
  amount: Scalars['Float'];
  isoCurrencyCode: Scalars['String'];
};

export type CheckIn = {
  __typename?: 'CheckIn';
  dateTime?: Maybe<Scalars['String']>;
  servicePointId?: Maybe<Scalars['UUID']>;
  staffMemberId?: Maybe<Scalars['UUID']>;
};

export type CirculationNote = {
  __typename?: 'CirculationNote';
  date?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  noteType?: Maybe<Scalars['String']>;
  source?: Maybe<Source>;
  staffOnly?: Maybe<Scalars['Boolean']>;
};

export type Classification = {
  __typename?: 'Classification';
  classificationNumber: Scalars['String'];
  classificationType?: Maybe<ClassificationType>;
  classificationTypeId: Scalars['UUID'];
};

export type ClassificationType = {
  __typename?: 'ClassificationType';
  id: Scalars['UUID'];
  metadata?: Maybe<Metadata>;
  name: Scalars['String'];
  source?: Maybe<Scalars['String']>;
};

export type Contributor = {
  __typename?: 'Contributor';
  authorityId?: Maybe<Scalars['UUID']>;
  contributorNameTypeId?: Maybe<Scalars['String']>;
  contributorTypeId: Scalars['UUID'];
  contributorTypeText?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  primary?: Maybe<Scalars['Boolean']>;
};

export type EffectiveCallNumberComponents = {
  __typename?: 'EffectiveCallNumberComponents';
  callNumber?: Maybe<Scalars['String']>;
  prefix?: Maybe<Scalars['String']>;
  suffix?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['UUID']>;
};

export type ElectronicAccess = {
  __typename?: 'ElectronicAccess';
  linkText?: Maybe<Scalars['String']>;
  materialsSpecification?: Maybe<Scalars['String']>;
  publicNote?: Maybe<Scalars['String']>;
  relationshipId?: Maybe<Scalars['UUID']>;
  uri: Scalars['String'];
};

export type Hold = {
  __typename?: 'Hold';
  canceledByUserId?: Maybe<Scalars['UUID']>;
  canceledDate?: Maybe<Scalars['String']>;
  cancellationAdditionalInformation?: Maybe<Scalars['String']>;
  cancellationReasonId?: Maybe<Scalars['UUID']>;
  expirationDate?: Maybe<Scalars['Date']>;
  item?: Maybe<RequestItem>;
  patronComments?: Maybe<Scalars['String']>;
  pickupLocation?: Maybe<ServicePoint>;
  pickupLocationId: Scalars['UUID'];
  queuePosition?: Maybe<Scalars['Int']>;
  requestDate: Scalars['Date'];
  status?: Maybe<Scalars['String']>;
};

export type HoldingsNote = {
  __typename?: 'HoldingsNote';
  holdingsNoteTypeId?: Maybe<Scalars['UUID']>;
  note?: Maybe<Scalars['String']>;
  staffOnly?: Maybe<Scalars['Boolean']>;
};

export type HoldingsRecord = {
  __typename?: 'HoldingsRecord';
  _version?: Maybe<Scalars['Int']>;
  acquisitionFormat?: Maybe<Scalars['String']>;
  administrativeNotes?: Maybe<Array<Maybe<Scalars['String']>>>;
  callNumber?: Maybe<Scalars['String']>;
  callNumberPrefix?: Maybe<Scalars['String']>;
  callNumberSuffix?: Maybe<Scalars['String']>;
  callNumberTypeId?: Maybe<Scalars['UUID']>;
  copyNumber?: Maybe<Scalars['String']>;
  digitizationPolicy?: Maybe<Scalars['String']>;
  discoverySuppress?: Maybe<Scalars['Boolean']>;
  effectiveLocation?: Maybe<Location>;
  effectiveLocationId?: Maybe<Scalars['UUID']>;
  electronicAccess?: Maybe<Array<Maybe<ElectronicAccess>>>;
  formatIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  holdingsStatement?: Maybe<Array<Maybe<HoldingsStatement>>>;
  holdingsStatementsForIndexes?: Maybe<Array<Maybe<HoldingsStatement>>>;
  holdingsStatementsForSupplements?: Maybe<Array<Maybe<HoldingsStatement>>>;
  holdingsTypeId?: Maybe<Scalars['UUID']>;
  hrid?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['UUID']>;
  illPolicyId?: Maybe<Scalars['UUID']>;
  instance?: Maybe<Instance>;
  instanceId: Scalars['UUID'];
  items?: Maybe<Array<Maybe<Item>>>;
  metadata?: Maybe<Metadata>;
  notes?: Maybe<Array<Maybe<HoldingsNote>>>;
  numberOfItems?: Maybe<Scalars['String']>;
  permanentLocation?: Maybe<Location>;
  permanentLocationId: Scalars['UUID'];
  receiptStatus?: Maybe<Scalars['String']>;
  receivingHistory?: Maybe<ReceivingHistory>;
  retentionPolicy?: Maybe<Scalars['String']>;
  shelvingTitle?: Maybe<Scalars['String']>;
  sourceId?: Maybe<Scalars['UUID']>;
  statisticalCodeIds?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  temporaryLocation?: Maybe<Location>;
  temporaryLocationId?: Maybe<Scalars['UUID']>;
};

export type HoldingsStatement = {
  __typename?: 'HoldingsStatement';
  note?: Maybe<Scalars['String']>;
  staffNote?: Maybe<Scalars['String']>;
  statement?: Maybe<Scalars['String']>;
};

export type Identifier = {
  __typename?: 'Identifier';
  identifierTypeId: Scalars['UUID'];
  value: Scalars['String'];
};

export type Instance = {
  __typename?: 'Instance';
  _version: Scalars['Int'];
  administrativeNotes?: Maybe<Array<Maybe<Scalars['String']>>>;
  alternativeTitles?: Maybe<Array<Maybe<AlternativeTitle>>>;
  catalogedDate?: Maybe<Scalars['String']>;
  classifications?: Maybe<Array<Maybe<Classification>>>;
  contributors?: Maybe<Array<Maybe<Contributor>>>;
  discoverySuppress?: Maybe<Scalars['Boolean']>;
  editions?: Maybe<Array<Maybe<Scalars['String']>>>;
  electronicAccess?: Maybe<Array<Maybe<ElectronicAccess>>>;
  holdingsRecords?: Maybe<Array<Maybe<HoldingsRecord>>>;
  hrid: Scalars['String'];
  id: Scalars['UUID'];
  identifiers?: Maybe<Array<Maybe<Identifier>>>;
  indexTitle?: Maybe<Scalars['String']>;
  instanceFormatIds?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  instanceTypeId?: Maybe<Scalars['UUID']>;
  items?: Maybe<Array<Maybe<Item>>>;
  languages?: Maybe<Array<Maybe<Scalars['String']>>>;
  matchKey?: Maybe<Scalars['String']>;
  metadata?: Maybe<Metadata>;
  modeOfIssuanceId?: Maybe<Scalars['UUID']>;
  natureOfContentTypeIds?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  notes?: Maybe<Array<Maybe<InstanceNote>>>;
  physicalDescriptions?: Maybe<Array<Maybe<Scalars['String']>>>;
  previouslyHeld?: Maybe<Scalars['Boolean']>;
  publication?: Maybe<Array<Maybe<Publication>>>;
  publicationFrequency?: Maybe<Array<Maybe<Scalars['String']>>>;
  publicationPeriod?: Maybe<Array<Maybe<PublicationPeriod>>>;
  publicationRange?: Maybe<Array<Maybe<Scalars['String']>>>;
  series?: Maybe<Array<Maybe<Scalars['String']>>>;
  source: Scalars['String'];
  sourceRecordFormat?: Maybe<Scalars['String']>;
  staffSuppress?: Maybe<Scalars['Boolean']>;
  statisticalCodeIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  statusId?: Maybe<Scalars['UUID']>;
  statusUpdatedDate?: Maybe<Scalars['String']>;
  subjects?: Maybe<Array<Maybe<Scalars['String']>>>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  title?: Maybe<Scalars['String']>;
};

export type InstanceNote = {
  __typename?: 'InstanceNote';
  instanceNoteTypeId?: Maybe<Scalars['UUID']>;
  note?: Maybe<Scalars['String']>;
  staffOnly?: Maybe<Scalars['Boolean']>;
};

export type Institution = {
  __typename?: 'Institution';
  code: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  metadata?: Maybe<Metadata>;
  name: Scalars['String'];
};

export type Item = {
  __typename?: 'Item';
  _version: Scalars['Int'];
  accessionNumber?: Maybe<Scalars['String']>;
  administrativeNotes?: Maybe<Array<Maybe<Scalars['String']>>>;
  barcode?: Maybe<Scalars['String']>;
  chronology?: Maybe<Scalars['String']>;
  circulationNotes?: Maybe<Array<Maybe<CirculationNote>>>;
  copyNumber?: Maybe<Scalars['String']>;
  descriptionOfPieces?: Maybe<Scalars['String']>;
  discoverySuppress?: Maybe<Scalars['Boolean']>;
  effectiveCallNumberComponents?: Maybe<EffectiveCallNumberComponents>;
  effectiveLocation?: Maybe<Location>;
  effectiveLocationId?: Maybe<Scalars['String']>;
  effectiveShelvingOrder?: Maybe<Scalars['String']>;
  electronicAccess?: Maybe<Array<Maybe<ElectronicAccess>>>;
  enumeration?: Maybe<Scalars['String']>;
  formerIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  holdingsRecord?: Maybe<HoldingsRecord>;
  holdingsRecordId: Scalars['String'];
  hrid?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  inTransitDestinationServicePointId?: Maybe<Scalars['UUID']>;
  instance?: Maybe<Instance>;
  itemDamagedStatusDate?: Maybe<Scalars['String']>;
  itemDamagedStatusId?: Maybe<Scalars['String']>;
  itemIdentifier?: Maybe<Scalars['String']>;
  itemLevelCallNumber?: Maybe<Scalars['String']>;
  itemLevelCallNumberPrefix?: Maybe<Scalars['String']>;
  itemLevelCallNumberSuffix?: Maybe<Scalars['String']>;
  itemLevelCallNumberTypeId?: Maybe<Scalars['String']>;
  lastCheckIn?: Maybe<CheckIn>;
  materialTypeId: Scalars['String'];
  metadata?: Maybe<Metadata>;
  missingPieces?: Maybe<Scalars['String']>;
  missingPiecesDate?: Maybe<Scalars['String']>;
  notes?: Maybe<Array<Maybe<ItemNote>>>;
  numberOfMissingPieces?: Maybe<Scalars['String']>;
  numberOfPieces?: Maybe<Scalars['String']>;
  permanentLoanTypeId: Scalars['String'];
  permanentLocation?: Maybe<Location>;
  permanentLocationId?: Maybe<Scalars['String']>;
  purchaseOrderLineIdentifier?: Maybe<Scalars['String']>;
  statisticalCodes?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  status: Status;
  tags?: Maybe<Array<Maybe<Tag>>>;
  temporaryLoanTypeId?: Maybe<Scalars['String']>;
  temporaryLocation?: Maybe<Location>;
  temporaryLocationId?: Maybe<Scalars['String']>;
  volume?: Maybe<Scalars['String']>;
  yearCaption?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ItemNote = {
  __typename?: 'ItemNote';
  itemNoteTypeId?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  staffOnly?: Maybe<Scalars['Boolean']>;
};

export type Library = {
  __typename?: 'Library';
  campus?: Maybe<Campus>;
  campusId: Scalars['String'];
  code: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  metadata?: Maybe<Metadata>;
  name: Scalars['String'];
};

export type Loan = {
  __typename?: 'Loan';
  dueDate: Scalars['Date'];
  item: RequestItem;
  loanDate: Scalars['Date'];
  overdue: Scalars['Boolean'];
};

export type Location = {
  __typename?: 'Location';
  campus?: Maybe<Campus>;
  campusId: Scalars['String'];
  code: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  discoveryDisplayName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  institution?: Maybe<Institution>;
  institutionId: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
  library?: Maybe<Library>;
  libraryId: Scalars['String'];
  metadata?: Maybe<Metadata>;
  name: Scalars['String'];
  primaryServicePoint: Scalars['UUID'];
  primaryServicePointObject?: Maybe<ServicePoint>;
  servicePointIds?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  servicePoints?: Maybe<Array<Maybe<ServicePoint>>>;
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

export type Publication = {
  __typename?: 'Publication';
  dateOfPublication?: Maybe<Scalars['String']>;
  place?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

export type PublicationPeriod = {
  __typename?: 'PublicationPeriod';
  end?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  instance?: Maybe<Instance>;
  patron?: Maybe<Patron>;
};


export type QueryInstanceArgs = {
  id: Scalars['UUID'];
};


export type QueryPatronArgs = {
  id: Scalars['UUID'];
};

export type ReceivingHistory = {
  __typename?: 'ReceivingHistory';
  displayType?: Maybe<Scalars['String']>;
  entries?: Maybe<Array<Maybe<ReceivingHistoryEntry>>>;
};

export type ReceivingHistoryEntry = {
  __typename?: 'ReceivingHistoryEntry';
  chronology?: Maybe<Scalars['String']>;
  enumeration?: Maybe<Scalars['String']>;
  publicDisplay?: Maybe<Scalars['Boolean']>;
};

export type RequestItem = {
  __typename?: 'RequestItem';
  author?: Maybe<Scalars['String']>;
  instance?: Maybe<Instance>;
  instanceId: Scalars['UUID'];
  isbn?: Maybe<Scalars['String']>;
  item?: Maybe<Item>;
  itemId?: Maybe<Scalars['UUID']>;
  title?: Maybe<Scalars['String']>;
};

export type ServicePoint = {
  __typename?: 'ServicePoint';
  code: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  discoveryDisplayName: Scalars['String'];
  id?: Maybe<Scalars['UUID']>;
  name: Scalars['String'];
  pickupLocation?: Maybe<Scalars['Boolean']>;
  shelvingLagTime?: Maybe<Scalars['Int']>;
};

export type Source = {
  __typename?: 'Source';
  id?: Maybe<Scalars['String']>;
  personal?: Maybe<Personal>;
};

export type Status = {
  __typename?: 'Status';
  date?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type Tag = {
  __typename?: 'Tag';
  tagList?: Maybe<Array<Maybe<Scalars['String']>>>;
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
