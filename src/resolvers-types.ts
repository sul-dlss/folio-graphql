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
  /** A date and time */
  DateTime: { input: any; output: any; }
  /** A UUID */
  UUID: { input: any; output: any; }
};

/** User fines/fees account */
export type Account = {
  __typename?: 'Account';
  /** Amount of the fine/fee */
  amount: Scalars['Float']['output'];
  /** Text, with input likely validated by the barcode scanner */
  barcode?: Maybe<Scalars['String']['output']>;
  /** Identifier (Call number) assigned to an item */
  callNumber?: Maybe<Scalars['String']['output']>;
  /** Date and time the account of the fine/fee was created */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** Date and time the account of the fine/fee was updated */
  dateUpdated?: Maybe<Scalars['DateTime']['output']>;
  /** Date time when the item is due to be returned */
  dueDate?: Maybe<Scalars['DateTime']['output']>;
  feeFine?: Maybe<FeeFine>;
  /** ID of the feefines */
  feeFineId: Scalars['String']['output'];
  /** Owner of the fee/fine defined by the library and is associated with specific fees/fines */
  feeFineOwner?: Maybe<Scalars['String']['output']>;
  /** Fee/fine that is up to the desecration of the user */
  feeFineType?: Maybe<Scalars['String']['output']>;
  /** Item field: item.holdingsRecordId */
  holdingsRecordId?: Maybe<Scalars['String']['output']>;
  /** User fine/fee account id, UUID */
  id: Scalars['String']['output'];
  /** Holdings record field: holdingsRecord.instanceId */
  instanceId?: Maybe<Scalars['String']['output']>;
  item?: Maybe<Item>;
  /** ID of the item */
  itemId: Scalars['String']['output'];
  /** The status of the item */
  itemStatus?: Maybe<AccountdataItemStatus>;
  loan?: Maybe<Loan>;
  /** ID of the loan */
  loanId?: Maybe<Scalars['String']['output']>;
  loanPolicyId?: Maybe<Scalars['UUID']['output']>;
  /** Effective location is used to know the current home location for the item */
  location?: Maybe<Scalars['String']['output']>;
  lostItemFeePolicyId?: Maybe<Scalars['UUID']['output']>;
  /** Material type what define what type of thing the item is */
  materialType?: Maybe<Scalars['String']['output']>;
  /** ID of the materialType */
  materialTypeId: Scalars['String']['output'];
  /** Metadata about creation to user fine/fee account, provided by the server */
  metadata?: Maybe<Metadata>;
  overdueFinePolicyId?: Maybe<Scalars['UUID']['output']>;
  /** ID of the owner */
  ownerId: Scalars['String']['output'];
  /** Overall status of the payment/waive/transfer/refund/cancel */
  paymentStatus?: Maybe<AccountdataPaymentStatus>;
  processId?: Maybe<Scalars['UUID']['output']>;
  /** Remaining of the fine/fee */
  remaining: Scalars['Float']['output'];
  /** Date time when the item is returned and the loan ends, if the user does not have a loan associated, hyphen (-) is added as default */
  returnedDate?: Maybe<Scalars['DateTime']['output']>;
  /** Overall status of the fee/fine */
  status?: Maybe<AccountdataStatus>;
  /** The title associated with the item */
  title?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
  /** ID of the user */
  userId: Scalars['String']['output'];
};

/** The status of the item */
export type AccountdataItemStatus = {
  __typename?: 'AccountdataItemStatus';
  /** Name of the item state */
  name: Scalars['String']['output'];
};

/** Overall status of the payment/waive/transfer/refund/cancel */
export type AccountdataPaymentStatus = {
  __typename?: 'AccountdataPaymentStatus';
  /** Name of the status (values used are Outstanding, Paid partially, Paid fully, Waived partially, Waived fully, Transferred partially, Transferred fully, Refunded partially, Refunded fully, Cancelled as error) */
  name: Scalars['String']['output'];
};

/** Overall status of the fee/fine */
export type AccountdataStatus = {
  __typename?: 'AccountdataStatus';
  /** Name of the status (values used are Open and Closed) */
  name: Scalars['String']['output'];
};

/** Single automated patron block */
export type Block = {
  __typename?: 'Block';
  /** Indicates that borrowing is not allowed for patron */
  blockBorrowing: Scalars['Boolean']['output'];
  blockCondition?: Maybe<PatronBlockCondition>;
  /** Indicates that renewals are not allowed for patron */
  blockRenewals: Scalars['Boolean']['output'];
  /** Indicates that requests are not allowed for patron */
  blockRequests: Scalars['Boolean']['output'];
  /** Message to be displayed if the patron should be blocked */
  message: Scalars['String']['output'];
  /** Unique ID of patron block condition */
  patronBlockConditionId?: Maybe<Scalars['UUID']['output']>;
};

/** second-level location unit */
export type Campus = {
  __typename?: 'Campus';
  /** distinct code for the location */
  code: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  institution?: Maybe<Institution>;
  /** ID of the first-level location unit that the second-level unit belongs to */
  institutionId: Scalars['String']['output'];
  metadata?: Maybe<Metadata>;
  /** name of the location */
  name: Scalars['String']['output'];
};

/** A classification type */
export type ClassificationType = {
  __typename?: 'ClassificationType';
  id?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Metadata>;
  /** label for the classification type */
  name: Scalars['String']['output'];
  /** label indicating where the classification type entry originates from, i.e. 'folio' or 'local' */
  source?: Maybe<Scalars['String']['output']>;
};

/** A contributor name type */
export type ContributorNameType = {
  __typename?: 'ContributorNameType';
  id?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Metadata>;
  /** label for the type of contributor name */
  name: Scalars['String']['output'];
  /** used for ordering of contributor name types in displays, i.e. in select lists */
  ordering?: Maybe<Scalars['String']['output']>;
};

export type CqlParams = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  sortby?: InputMaybe<Scalars['String']['input']>;
};

/** Fees/fines that are used by the entire library system. They can be a set of fees / fines shared throughout the library or fees / fines that are unique to a specific customer service */
export type FeeFine = {
  __typename?: 'FeeFine';
  /** ID of the action notice template */
  actionNoticeId?: Maybe<Scalars['UUID']['output']>;
  /** A flag to indicate that fee/fine was created automatically. */
  automatic: Scalars['Boolean']['output'];
  /** ID of the charge notice template */
  chargeNoticeId?: Maybe<Scalars['UUID']['output']>;
  /** Amount of fee or fine, which may be overridden.  */
  defaultAmount?: Maybe<Scalars['Float']['output']>;
  /** Description of fee/fine that is up to the discretion of the user */
  feeFineType: Scalars['String']['output'];
  /** Fee/fine id, UUID */
  id?: Maybe<Scalars['UUID']['output']>;
  /** Metadata about creation to fee/fine, provided by the server */
  metadata?: Maybe<Metadata>;
  /** ID of the owner */
  ownerId?: Maybe<Scalars['UUID']['output']>;
};

/** A set of date ranges for materials checkout and their associated due dates. */
export type FixedDueDateSchedule = {
  __typename?: 'FixedDueDateSchedule';
  description?: Maybe<Scalars['String']['output']>;
  /** Unique ID (generated UUID) */
  id?: Maybe<Scalars['UUID']['output']>;
  metadata?: Maybe<Metadata>;
  name: Scalars['String']['output'];
  schedules?: Maybe<Array<Schedule>>;
};

/** Hold schema for patron portal integration */
export type Hold = {
  __typename?: 'Hold';
  /** The id of the user that cancelled the request */
  canceledByUserId?: Maybe<Scalars['UUID']['output']>;
  /** Date the request was cancelled */
  canceledDate?: Maybe<Scalars['DateTime']['output']>;
  /** Additional information about a cancellation */
  cancellationAdditionalInformation?: Maybe<Scalars['String']['output']>;
  /** The id of the request reason */
  cancellationReasonId?: Maybe<Scalars['UUID']['output']>;
  /** The date when the request expires */
  expirationDate?: Maybe<Scalars['DateTime']['output']>;
  /** The item that is checked out */
  item?: Maybe<PatronItem>;
  /** Comments made by the patron */
  patronComments?: Maybe<Scalars['String']['output']>;
  pickupLocation?: Maybe<ServicePoint>;
  /** The UUID of the pick up location */
  pickupLocationId: Scalars['UUID']['output'];
  /** The position in the queue for this patron */
  queuePosition?: Maybe<Scalars['Int']['output']>;
  /** The date when the request was made */
  requestDate: Scalars['DateTime']['output'];
  /** The UUID of the request */
  requestId?: Maybe<Scalars['String']['output']>;
  /** The status of the hold request */
  status?: Maybe<HoldStatus>;
};

export enum HoldStatus {
  ClosedCancelled = 'Closed___Cancelled',
  ClosedFilled = 'Closed___Filled',
  ClosedPickupExpired = 'Closed___Pickup_expired',
  ClosedUnfilled = 'Closed___Unfilled',
  OpenAwaitingDelivery = 'Open___Awaiting_delivery',
  OpenAwaitingPickup = 'Open___Awaiting_pickup',
  OpenInTransit = 'Open___In_transit',
  OpenNotYetFilled = 'Open___Not_yet_filled'
}

/** A holdings note type */
export type HoldingsNoteType = {
  __typename?: 'HoldingsNoteType';
  /** unique ID of the holdings note type; a UUID */
  id?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Metadata>;
  /** name of the holdings note type */
  name: Scalars['String']['output'];
  /** label indicating where the holdings note type entry originates from, i.e. 'folio' or 'local' */
  source: Scalars['String']['output'];
};

/** A holdings record */
export type HoldingsRecord = {
  __typename?: 'HoldingsRecord';
  /** Record version for optimistic locking */
  _version?: Maybe<Scalars['Int']['output']>;
  /** Format of holdings record acquisition */
  acquisitionFormat?: Maybe<Scalars['String']['output']>;
  /** Method of holdings record acquisition */
  acquisitionMethod?: Maybe<Scalars['String']['output']>;
  /** Administrative notes */
  administrativeNotes?: Maybe<Array<Scalars['String']['output']>>;
  /** Items of bareHoldings. This is a virtual field, accessible only when using mod-graphql. */
  bareHoldingsItems?: Maybe<Array<Item>>;
  /** Call Number is an identifier assigned to an item, usually printed on a label attached to the item. */
  callNumber?: Maybe<Scalars['String']['output']>;
  /** Prefix of the call number on the holding level. */
  callNumberPrefix?: Maybe<Scalars['String']['output']>;
  /** Suffix of the call number on the holding level. */
  callNumberSuffix?: Maybe<Scalars['String']['output']>;
  /** unique ID for the type of call number on a holdings record, a UUID */
  callNumberTypeId?: Maybe<Scalars['UUID']['output']>;
  /** Item/Piece ID (usually barcode) for systems that do not use item records. Ability to designate the copy number if institution chooses to use copy numbers. */
  copyNumber?: Maybe<Scalars['String']['output']>;
  /** Records information regarding digitization aspects. */
  digitizationPolicy?: Maybe<Scalars['String']['output']>;
  /** records the fact that the record should not be displayed in a discovery system */
  discoverySuppress?: Maybe<Scalars['Boolean']['output']>;
  effectiveLocation?: Maybe<Location>;
  /** Effective location is calculated by the system based on the values in the permanent and temporary locationId fields. */
  effectiveLocationId?: Maybe<Scalars['UUID']['output']>;
  /** List of electronic access items */
  electronicAccess?: Maybe<Array<HoldingsrecordElectronicAccessItem>>;
  /** Previous ID(s) assigned to the holdings record */
  formerIds?: Maybe<Array<Scalars['String']['output']>>;
  /** Instance of holding record. This is a virtual field, accessible only when using mod-graphql. */
  holdingsInstance?: Maybe<Instance>;
  /** Items related to holdings record. This is a virtual field, accessible only when using mod-graphql. */
  holdingsItems?: Maybe<Array<Item>>;
  /** Notes about action, copy, binding etc. */
  holdingsStatements?: Maybe<Array<HoldingsrecordHoldingsStatementsItem>>;
  /** Holdings record indexes statements */
  holdingsStatementsForIndexes?: Maybe<Array<HoldingsrecordHoldingsStatementsForIndexesItem>>;
  /** Holdings record supplements statements */
  holdingsStatementsForSupplements?: Maybe<Array<HoldingsrecordHoldingsStatementsForSupplementsItem>>;
  /** unique ID for the type of this holdings record, a UUID */
  holdingsTypeId?: Maybe<Scalars['UUID']['output']>;
  /** the human readable ID, also called eye readable ID. A system-assigned sequential ID which maps to the Instance ID */
  hrid?: Maybe<Scalars['String']['output']>;
  /** the unique ID of the holdings record; UUID */
  id?: Maybe<Scalars['UUID']['output']>;
  /** expanded ILL Policy object corresponding to illPolicyId */
  illPolicy?: Maybe<IlLpolicy>;
  /** unique ID for an ILL policy, a UUID */
  illPolicyId?: Maybe<Scalars['UUID']['output']>;
  instance?: Maybe<Instance>;
  /** Inventory instances identifier */
  instanceId: Scalars['UUID']['output'];
  items?: Maybe<Array<Maybe<Item>>>;
  metadata?: Maybe<Metadata>;
  /** Notes about action, copy, binding etc. */
  notes?: Maybe<Array<HoldingsrecordNotesItem>>;
  /** Text (Number) */
  numberOfItems?: Maybe<Scalars['String']['output']>;
  /** The permanent shelving location in which an item resides */
  permanentLocation?: Maybe<Location>;
  /** The permanent shelving location in which an item resides. */
  permanentLocationId: Scalars['UUID']['output'];
  /** Receipt status (e.g. pending, awaiting receipt, partially received, fully received, receipt not required, and cancelled) */
  receiptStatus?: Maybe<Scalars['String']['output']>;
  /** Receiving history of holdings record */
  receivingHistory?: Maybe<HoldingsrecordReceivingHistory>;
  /** Records information regarding how long we have agreed to keep something. */
  retentionPolicy?: Maybe<Scalars['String']['output']>;
  /** Indicates the shelving form of title. */
  shelvingTitle?: Maybe<Scalars['String']['output']>;
  /** (A reference to) the source of a holdings record */
  sourceId?: Maybe<Scalars['UUID']['output']>;
  /** List of statistical code IDs */
  statisticalCodeIds?: Maybe<Array<Scalars['UUID']['output']>>;
  /** arbitrary tags associated with this holding */
  tags?: Maybe<Tags>;
  temporaryLocation?: Maybe<Location>;
  /** Temporary location is the temporary location, shelving location, or holding which is a physical place where items are stored, or an Online location. */
  temporaryLocationId?: Maybe<Scalars['UUID']['output']>;
};


/** A holdings record */
export type HoldingsRecordItemsArgs = {
  params?: InputMaybe<CqlParams>;
};

export type HoldingsrecordElectronicAccessItem = {
  __typename?: 'HoldingsrecordElectronicAccessItem';
  /** the value of the MARC tag field 856 2nd indicator, where the values are: no information provided, resource, version of resource, related resource, no display constant generated */
  linkText?: Maybe<Scalars['String']['output']>;
  /** materials specified is used to specify to what portion or aspect of the resource the electronic location and access information applies (e.g. a portion or subset of the item is electronic, or a related electronic resource is being linked to the record) */
  materialsSpecification?: Maybe<Scalars['String']['output']>;
  /** URL public note to be displayed in the discovery */
  publicNote?: Maybe<Scalars['String']['output']>;
  /** relationship between the electronic resource at the location identified and the item described in the record as a whole */
  relationshipId?: Maybe<Scalars['String']['output']>;
  /** uniform resource identifier (URI) is a string of characters designed for unambiguous identification of resources */
  uri: Scalars['String']['output'];
};

export type HoldingsrecordHoldingsStatementsForIndexesItem = {
  __typename?: 'HoldingsrecordHoldingsStatementsForIndexesItem';
  /** Note attached to a holdings statement */
  note?: Maybe<Scalars['String']['output']>;
  /** Private note attached to a holdings statment */
  staffNote?: Maybe<Scalars['String']['output']>;
  /** Textual description of the holdings of indexes */
  statement?: Maybe<Scalars['String']['output']>;
};

export type HoldingsrecordHoldingsStatementsForSupplementsItem = {
  __typename?: 'HoldingsrecordHoldingsStatementsForSupplementsItem';
  /** note attached to a holdings statement */
  note?: Maybe<Scalars['String']['output']>;
  /** Private note attached to a holdings statment */
  staffNote?: Maybe<Scalars['String']['output']>;
  /** textual description of the holdings of supplementary material */
  statement?: Maybe<Scalars['String']['output']>;
};

export type HoldingsrecordHoldingsStatementsItem = {
  __typename?: 'HoldingsrecordHoldingsStatementsItem';
  /** Note attached to a holdings statement */
  note?: Maybe<Scalars['String']['output']>;
  /** Private note attached to a holdings statment */
  staffNote?: Maybe<Scalars['String']['output']>;
  /** Specifices the exact content to which the library has access, typically for continuing publications. */
  statement?: Maybe<Scalars['String']['output']>;
};

export type HoldingsrecordNotesItem = {
  __typename?: 'HoldingsrecordNotesItem';
  /** expanded note-type object corresponding to holdingsNoteTypeId */
  holdingsNoteType?: Maybe<HoldingsNoteType>;
  /** ID of the type of note */
  holdingsNoteTypeId?: Maybe<Scalars['UUID']['output']>;
  /** Text content of the note */
  note?: Maybe<Scalars['String']['output']>;
  /** If true, determines that the note should not be visible for others than staff */
  staffOnly?: Maybe<Scalars['Boolean']['output']>;
};

/** Receiving history of holdings record */
export type HoldingsrecordReceivingHistory = {
  __typename?: 'HoldingsrecordReceivingHistory';
  /** Display hint. 1: Display fields separately. 2: Display fields concatenated */
  displayType?: Maybe<Scalars['String']['output']>;
  /** Entries of receiving history */
  entries?: Maybe<Array<HoldingsrecordReceivingHistoryEntriesItem>>;
};

export type HoldingsrecordReceivingHistoryEntriesItem = {
  __typename?: 'HoldingsrecordReceivingHistoryEntriesItem';
  /** Repeated element from Receiving history - Enumeration AND Receiving history - Chronology */
  chronology?: Maybe<Scalars['String']['output']>;
  /** This is the volume/issue number (e.g. v.71:no.6-2) */
  enumeration?: Maybe<Scalars['String']['output']>;
  /** Defines if the receivingHistory should be visible to the public. */
  publicDisplay?: Maybe<Scalars['Boolean']['output']>;
};

/** An ILL policy */
export type IlLpolicy = {
  __typename?: 'ILLpolicy';
  /** unique ID of the ILL policy; UUID */
  id?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Metadata>;
  /** name of the policy */
  name: Scalars['String']['output'];
  /** label indicating where the ILL policy entry originates from, i.e. 'folio' or 'local' */
  source: Scalars['String']['output'];
};

/** An identifier type */
export type IdentifierType = {
  __typename?: 'IdentifierType';
  id?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Metadata>;
  /** label for the identifier type */
  name: Scalars['String']['output'];
  /** label indicating where the identifier type entry originates from, i.e. 'folio' or 'local' */
  source?: Maybe<Scalars['String']['output']>;
};

/** An instance record */
export type Instance = {
  __typename?: 'Instance';
  /** Record version for optimistic locking */
  _version?: Maybe<Scalars['Int']['output']>;
  /** Administrative notes */
  administrativeNotes?: Maybe<Array<Scalars['String']['output']>>;
  /** List of alternative titles for the resource (e.g. original language version title of a movie) */
  alternativeTitles?: Maybe<Array<InstanceAlternativeTitlesItem>>;
  /** Date or timestamp on an instance for when is was considered cataloged */
  catalogedDate?: Maybe<Scalars['String']['output']>;
  /** List of classifications */
  classifications?: Maybe<Array<InstanceClassificationsItem>>;
  /** List of contributors */
  contributors?: Maybe<Array<InstanceContributorsItem>>;
  /** Records the fact that the record should not be displayed in a discovery system */
  discoverySuppress?: Maybe<Scalars['Boolean']['output']>;
  /** The edition statement, imprint and other publication source information */
  editions?: Maybe<Array<Scalars['String']['output']>>;
  /** List of electronic access items */
  electronicAccess?: Maybe<Array<InstanceElectronicAccessItem>>;
  holdingsRecords?: Maybe<Array<Maybe<HoldingsRecord>>>;
  /** List of holdings records */
  holdingsRecords2?: Maybe<Array<HoldingsRecord>>;
  /** The human readable ID, also called eye readable ID. A system-assigned sequential ID which maps to the Instance ID */
  hrid?: Maybe<Scalars['String']['output']>;
  /** The unique ID of the instance record; a UUID */
  id?: Maybe<Scalars['UUID']['output']>;
  /** An extensible set of name-value pairs of identifiers associated with the resource */
  identifiers?: Maybe<Array<InstanceIdentifiersItem>>;
  /** Title normalized for browsing and searching; based on the title with articles removed */
  indexTitle?: Maybe<Scalars['String']['output']>;
  /** UUIDs for the unique terms for the format whether it's from the RDA carrier term list of locally defined */
  instanceFormatIds?: Maybe<Array<Scalars['UUID']['output']>>;
  /** List of dereferenced instance formats */
  instanceFormats?: Maybe<Array<InstanceFormat>>;
  /** UUID of the unique term for the resource type whether it's from the RDA content term list of locally defined */
  instanceTypeId: Scalars['UUID']['output'];
  items?: Maybe<Array<Maybe<Item>>>;
  /** The set of languages used by the resource */
  languages?: Maybe<Array<Scalars['String']['output']>>;
  /** A unique instance identifier matching a client-side bibliographic record identification scheme, in particular for a scenario where multiple separate catalogs with no shared record identifiers contribute to the same Instance in Inventory. A match key is typically generated from select, normalized pieces of metadata in bibliographic records */
  matchKey?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Metadata>;
  /** UUID of the RDA mode of issuance, a categorization reflecting whether a resource is issued in one or more parts, the way it is updated, and whether its termination is predetermined or not (e.g. monograph,  sequential monograph, serial; integrating Resource, other) */
  modeOfIssuanceId?: Maybe<Scalars['UUID']['output']>;
  /** Array of UUID for the Instance nature of content (e.g. bibliography, biography, exhibition catalogue, festschrift, newspaper, proceedings, research report, thesis or website) */
  natureOfContentTermIds?: Maybe<Array<Scalars['UUID']['output']>>;
  /** Bibliographic notes (e.g. general notes, specialized notes) */
  notes?: Maybe<Array<InstanceNotesItem>>;
  /** Physical description of the described resource, including its extent, dimensions, and such other physical details as a description of any accompanying materials and unit type and size */
  physicalDescriptions?: Maybe<Array<Scalars['String']['output']>>;
  /** Records the fact that the resource was previously held by the library for things like Hathi access, etc. */
  previouslyHeld?: Maybe<Scalars['Boolean']['output']>;
  /** List of publication items */
  publication?: Maybe<Array<InstancePublicationItem>>;
  /** List of intervals at which a serial appears (e.g. daily, weekly, monthly, quarterly, etc.) */
  publicationFrequency?: Maybe<Array<Scalars['String']['output']>>;
  /** Publication period */
  publicationPeriod?: Maybe<InstancePublicationPeriod>;
  /** The range of sequential designation/chronology of publication, or date range */
  publicationRange?: Maybe<Array<Scalars['String']['output']>>;
  /** List of series titles associated with the resource (e.g. Harry Potter) */
  series?: Maybe<Array<InstanceSeriesItem>>;
  /** The metadata source and its format of the underlying record to the instance record. (e.g. FOLIO if it's a record created in Inventory;  MARC if it's a MARC record created in MARCcat or EPKB if it's a record coming from eHoldings) */
  source: Scalars['String']['output'];
  /** Format of the instance source record, if a source record exists (e.g. FOLIO if it's a record created in Inventory,  MARC if it's a MARC record created in MARCcat or EPKB if it's a record coming from eHoldings) */
  sourceRecordFormat?: Maybe<InstanceSourceRecordFormat>;
  /** Records the fact that the record should not be displayed for others than catalogers */
  staffSuppress?: Maybe<Scalars['Boolean']['output']>;
  /** List of statistical code IDs */
  statisticalCodeIds?: Maybe<Array<Scalars['String']['output']>>;
  /** UUID for the Instance status term (e.g. cataloged, uncatalogued, batch loaded, temporary, other, not yet assigned) */
  statusId?: Maybe<Scalars['UUID']['output']>;
  /** Date [or timestamp] for when the instance status was updated */
  statusUpdatedDate?: Maybe<Scalars['String']['output']>;
  /** List of subject headings */
  subjects?: Maybe<Array<InstanceSubjectsItem>>;
  /** arbitrary tags associated with this instance */
  tags?: Maybe<Tags>;
  /** The primary title (or label) associated with the resource */
  title: Scalars['String']['output'];
};


/** An instance record */
export type InstanceHoldingsRecordsArgs = {
  params?: InputMaybe<CqlParams>;
};


/** An instance record */
export type InstanceItemsArgs = {
  params?: InputMaybe<CqlParams>;
};

export type InstanceAlternativeTitlesItem = {
  __typename?: 'InstanceAlternativeTitlesItem';
  /** An alternative title for the resource */
  alternativeTitle?: Maybe<Scalars['String']['output']>;
  /** UUID for an alternative title qualifier */
  alternativeTitleTypeId?: Maybe<Scalars['UUID']['output']>;
  /** UUID of authority record that controls an alternative title */
  authorityId?: Maybe<Scalars['UUID']['output']>;
};

export type InstanceClassificationsItem = {
  __typename?: 'InstanceClassificationsItem';
  /** Classification (e.g. classification scheme, classification schedule) */
  classificationNumber: Scalars['String']['output'];
  /** Dereferenced classification schema */
  classificationType?: Maybe<ClassificationType>;
  /** UUID of classification schema (e.g. LC, Canadian Classification, NLM, National Agricultural Library, UDC, and Dewey) */
  classificationTypeId: Scalars['UUID']['output'];
};

export type InstanceContributorsItem = {
  __typename?: 'InstanceContributorsItem';
  /** UUID of authority record that controls the contributor */
  authorityId?: Maybe<Scalars['UUID']['output']>;
  /** Dereferenced contributor-name type */
  contributorNameType?: Maybe<ContributorNameType>;
  /** UUID of contributor name type term defined by the MARC code list for relators */
  contributorNameTypeId: Scalars['UUID']['output'];
  /** UUID for the contributor type term defined in controlled vocabulary */
  contributorTypeId?: Maybe<Scalars['UUID']['output']>;
  /** Free text element for adding contributor type terms other that defined by the MARC code list for relators */
  contributorTypeText?: Maybe<Scalars['String']['output']>;
  /** Personal name, corporate name, meeting name */
  name: Scalars['String']['output'];
  /** Whether this is the primary contributor */
  primary?: Maybe<Scalars['Boolean']['output']>;
};

export type InstanceElectronicAccessItem = {
  __typename?: 'InstanceElectronicAccessItem';
  /** The value of the MARC tag field 856 2nd indicator, where the values are: no information provided, resource, version of resource, related resource, no display constant generated */
  linkText?: Maybe<Scalars['String']['output']>;
  /** Materials specified is used to specify to what portion or aspect of the resource the electronic location and access information applies (e.g. a portion or subset of the item is electronic, or a related electronic resource is being linked to the record) */
  materialsSpecification?: Maybe<Scalars['String']['output']>;
  /** URL public note to be displayed in the discovery */
  publicNote?: Maybe<Scalars['String']['output']>;
  /** UUID for the type of relationship between the electronic resource at the location identified and the item described in the record as a whole */
  relationshipId?: Maybe<Scalars['UUID']['output']>;
  /** uniform resource identifier (URI) is a string of characters designed for unambiguous identification of resources */
  uri: Scalars['String']['output'];
};

/** The format of an Instance */
export type InstanceFormat = {
  __typename?: 'InstanceFormat';
  /** distinct code for the Instance format */
  code: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Metadata>;
  /** label for the Instance format */
  name: Scalars['String']['output'];
  /** origin of the Instance format record */
  source: Scalars['String']['output'];
};

export type InstanceIdentifiersItem = {
  __typename?: 'InstanceIdentifiersItem';
  /** UUID of resource identifier type (e.g. ISBN, ISSN, LCCN, CODEN, Locally defined identifiers) */
  identifierTypeId: Scalars['UUID']['output'];
  identifierTypeObject?: Maybe<IdentifierType>;
  /** Resource identifier value */
  value: Scalars['String']['output'];
};

export type InstanceNotesItem = {
  __typename?: 'InstanceNotesItem';
  /** ID of the type of note */
  instanceNoteTypeId?: Maybe<Scalars['UUID']['output']>;
  /** Text content of the note */
  note?: Maybe<Scalars['String']['output']>;
  /** If true, determines that the note should not be visible for others than staff */
  staffOnly?: Maybe<Scalars['Boolean']['output']>;
};

export type InstancePublicationItem = {
  __typename?: 'InstancePublicationItem';
  /** Date (year YYYY) of publication, distribution, etc. */
  dateOfPublication?: Maybe<Scalars['String']['output']>;
  /** Place of publication, distribution, etc. */
  place?: Maybe<Scalars['String']['output']>;
  /** Name of publisher, distributor, etc. */
  publisher?: Maybe<Scalars['String']['output']>;
  /** The role of the publisher, distributor, etc. */
  role?: Maybe<Scalars['String']['output']>;
};

/** Publication period */
export type InstancePublicationPeriod = {
  __typename?: 'InstancePublicationPeriod';
  /** Publication end year */
  end?: Maybe<Scalars['Int']['output']>;
  /** Publication start year */
  start?: Maybe<Scalars['Int']['output']>;
};

export type InstanceSeriesItem = {
  __typename?: 'InstanceSeriesItem';
  /** UUID of authority record that controls an series title */
  authorityId?: Maybe<Scalars['UUID']['output']>;
  /** Series title value */
  value: Scalars['String']['output'];
};

export enum InstanceSourceRecordFormat {
  MarcJson = 'MARC_JSON'
}

export type InstanceSubjectsItem = {
  __typename?: 'InstanceSubjectsItem';
  /** UUID of authority record that controls a subject heading */
  authorityId?: Maybe<Scalars['UUID']['output']>;
  /** Subject heading value */
  value: Scalars['String']['output'];
};

/** highest-level location unit */
export type Institution = {
  __typename?: 'Institution';
  /** distinct code for location */
  code: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Metadata>;
  /** name of location */
  name: Scalars['String']['output'];
};

/** An item record */
export type Item = {
  __typename?: 'Item';
  /** Record version for optimistic locking */
  _version?: Maybe<Scalars['Int']['output']>;
  /** Also called inventar number */
  accessionNumber?: Maybe<Scalars['String']['output']>;
  /** Administrative notes */
  administrativeNotes?: Maybe<Array<Scalars['String']['output']>>;
  /** Unique inventory control number for physical resources, used largely for circulation purposes */
  barcode?: Maybe<Scalars['String']['output']>;
  /** Chronology is the descriptive information for the dating scheme of a serial. */
  chronology?: Maybe<Scalars['String']['output']>;
  /** Notes to be displayed in circulation processes */
  circulationNotes?: Maybe<Array<ItemCirculationNotesItem>>;
  /** Copy number is the piece identifier. The copy number reflects if the library has a copy of a single-volume monograph; one copy of a multi-volume, (e.g. Copy 1, or C.7.) */
  copyNumber?: Maybe<Scalars['String']['output']>;
  /** Description of item pieces. */
  descriptionOfPieces?: Maybe<Scalars['String']['output']>;
  /** Records the fact that the record should not be displayed in a discovery system */
  discoverySuppress?: Maybe<Scalars['Boolean']['output']>;
  /** Elements of a full call number generated from the item or holding */
  effectiveCallNumberComponents?: Maybe<ItemEffectiveCallNumberComponents>;
  effectiveLocation?: Maybe<Location>;
  /** Read only current home location for the item. */
  effectiveLocationId?: Maybe<Scalars['UUID']['output']>;
  /** A system generated normalization of the call number that allows for call number sorting in reports and search results */
  effectiveShelvingOrder?: Maybe<Scalars['String']['output']>;
  /** References for accessing the item by URL. */
  electronicAccess?: Maybe<Array<ItemElectronicAccessItem>>;
  /** Enumeration is the descriptive information for the numbering scheme of a serial. */
  enumeration?: Maybe<Scalars['String']['output']>;
  /** Previous identifiers assigned to the item */
  formerIds?: Maybe<Array<Scalars['String']['output']>>;
  holdingsRecord?: Maybe<HoldingsRecord>;
  /** Item associated holdings record object. */
  holdingsRecord2?: Maybe<HoldingsRecord>;
  /** ID of the holdings record the item is a member of. */
  holdingsRecordId: Scalars['String']['output'];
  /** The human readable ID, also called eye readable ID. A system-assigned sequential alternate ID */
  hrid?: Maybe<Scalars['String']['output']>;
  /** Unique ID of the item record */
  id?: Maybe<Scalars['String']['output']>;
  /** Service point an item is intended to be transited to (should only be present when in transit) */
  inTransitDestinationServicePointId?: Maybe<Scalars['UUID']['output']>;
  instance?: Maybe<Instance>;
  /** Date and time when the item was damaged. */
  itemDamagedStatusDate?: Maybe<Scalars['String']['output']>;
  /** Item dame status id identifier. */
  itemDamagedStatusId?: Maybe<Scalars['String']['output']>;
  /** Item identifier number, e.g. imported from the union catalogue (read only). */
  itemIdentifier?: Maybe<Scalars['String']['output']>;
  /** Call Number is an identifier assigned to an item, usually printed on a label attached to the item. The call number is used to determine the items physical position in a shelving sequence, e.g. K1 .M44. The Item level call number, is the call number on item level. */
  itemLevelCallNumber?: Maybe<Scalars['String']['output']>;
  /** Prefix of the call number on the item level. */
  itemLevelCallNumberPrefix?: Maybe<Scalars['String']['output']>;
  /** Suffix of the call number on the item level. */
  itemLevelCallNumberSuffix?: Maybe<Scalars['String']['output']>;
  /** Identifies the source of the call number, e.g., LCC, Dewey, NLM, etc. */
  itemLevelCallNumberTypeId?: Maybe<Scalars['String']['output']>;
  /** Information about when an item was last scanned in the Inventory app. */
  lastCheckIn?: Maybe<ItemLastCheckIn>;
  /** Item's material type */
  materialType?: Maybe<MaterialType>;
  /** Material type, term. Define what type of thing the item is. */
  materialTypeId: Scalars['String']['output'];
  metadata?: Maybe<Metadata>;
  /** Description of the missing pieces.  */
  missingPieces?: Maybe<Scalars['String']['output']>;
  /** Date when the piece(s) went missing. */
  missingPiecesDate?: Maybe<Scalars['String']['output']>;
  /** Notes about action, copy, binding etc. */
  notes?: Maybe<Array<ItemNotesItem>>;
  /** Number of missing pieces. */
  numberOfMissingPieces?: Maybe<Scalars['String']['output']>;
  /** Number of pieces. Used when an item is checked out or returned to verify that all parts are present (e.g. 7 CDs in a set). */
  numberOfPieces?: Maybe<Scalars['String']['output']>;
  /** The permanent loan type, is the default loan type for a given item. Loan types are tenant-defined. */
  permanentLoanTypeId: Scalars['String']['output'];
  permanentLocation?: Maybe<Location>;
  /** Permanent item location is the default location, shelving location, or holding which is a physical place where items are stored, or an Online location. */
  permanentLocationId?: Maybe<Scalars['String']['output']>;
  /** ID referencing a remote purchase order object related to this item */
  purchaseOrderLineIdentifier?: Maybe<Scalars['String']['output']>;
  /** List of statistical code IDs */
  statisticalCodeIds?: Maybe<Array<Scalars['String']['output']>>;
  /** The status of the item */
  status: ItemStatus;
  /** arbitrary tags associated with this item */
  tags?: Maybe<Tags>;
  /** Temporary loan type, is the temporary loan type for a given item. */
  temporaryLoanTypeId?: Maybe<Scalars['String']['output']>;
  /** Temporary location, shelving location, or holding which is a physical place where items are stored, or an Online location */
  temporaryLocation?: Maybe<Location>;
  /** Temporary item location is the temporarily location, shelving location, or holding which is a physical place where items are stored, or an Online location. */
  temporaryLocationId?: Maybe<Scalars['String']['output']>;
  /** Volume is intended for monographs when a multipart monograph (e.g. a biography of George Bernard Shaw in three volumes). */
  volume?: Maybe<Scalars['String']['output']>;
  /** In multipart monographs, a caption is a character(s) used to label a level of chronology, e.g., year 1985. */
  yearCaption?: Maybe<Array<Scalars['String']['output']>>;
};

export type ItemCirculationNotesItem = {
  __typename?: 'ItemCirculationNotesItem';
  /** Date and time the record is added/updated. The property is generated by the server and needed to support sorting. */
  date?: Maybe<Scalars['String']['output']>;
  /** The id of the circulation note */
  id?: Maybe<Scalars['String']['output']>;
  /** Text to display */
  note?: Maybe<Scalars['String']['output']>;
  /** Type of circulation process that the note applies to */
  noteType?: Maybe<ItemCirculationNotesItemNoteType>;
  /** The user who added/updated the note. The property is generated by the server and needed to support sorting. Points to /users/{id} resource. */
  source?: Maybe<ItemCirculationNotesItemSource>;
  /** Flag to restrict display of this note */
  staffOnly?: Maybe<Scalars['Boolean']['output']>;
};

export enum ItemCirculationNotesItemNoteType {
  CheckIn = 'Check_in',
  CheckOut = 'Check_out'
}

/** The user who added/updated the note. The property is generated by the server and needed to support sorting. Points to /users/{id} resource. */
export type ItemCirculationNotesItemSource = {
  __typename?: 'ItemCirculationNotesItemSource';
  /** The id of the user who added/updated the note. The user information is generated by the server and needed to support sorting. Points to /users/{id} resource. */
  id?: Maybe<Scalars['String']['output']>;
  /** Personal information about the user */
  personal?: Maybe<ItemCirculationNotesItemSourcePersonal>;
};

/** Personal information about the user */
export type ItemCirculationNotesItemSourcePersonal = {
  __typename?: 'ItemCirculationNotesItemSourcePersonal';
  /** The user's first name */
  firstName?: Maybe<Scalars['String']['output']>;
  /** The user's last name */
  lastName?: Maybe<Scalars['String']['output']>;
};

/** Elements of a full call number generated from the item or holding */
export type ItemEffectiveCallNumberComponents = {
  __typename?: 'ItemEffectiveCallNumberComponents';
  /** Effective Call Number is an identifier assigned to an item or its holding and associated with the item. */
  callNumber?: Maybe<Scalars['String']['output']>;
  /** Effective Call Number Prefix is the prefix of the identifier assigned to an item or its holding and associated with the item. */
  prefix?: Maybe<Scalars['String']['output']>;
  /** Effective Call Number Suffix is the suffix of the identifier assigned to an item or its holding and associated with the item. */
  suffix?: Maybe<Scalars['String']['output']>;
  /** Effective Call Number Type Id is the call number type id of the item, if available, otherwise that of the holding. */
  typeId?: Maybe<Scalars['UUID']['output']>;
};

export type ItemElectronicAccessItem = {
  __typename?: 'ItemElectronicAccessItem';
  /** the value of the MARC tag field 856 2nd indicator, where the values are: no information provided, resource, version of resource, related resource, no display constant generated */
  linkText?: Maybe<Scalars['String']['output']>;
  /** materials specified is used to specify to what portion or aspect of the resource the electronic location and access information applies (e.g. a portion or subset of the item is electronic, or a related electronic resource is being linked to the record) */
  materialsSpecification?: Maybe<Scalars['String']['output']>;
  /** URL public note to be displayed in the discovery */
  publicNote?: Maybe<Scalars['String']['output']>;
  /** relationship between the electronic resource at the location identified and the item described in the record as a whole */
  relationshipId?: Maybe<Scalars['String']['output']>;
  /** uniform resource identifier (URI) is a string of characters designed for unambiguous identification of resources */
  uri: Scalars['String']['output'];
};

/** Information about when an item was last scanned in the Inventory app. */
export type ItemLastCheckIn = {
  __typename?: 'ItemLastCheckIn';
  /** Date and time of the last check in of the item. */
  dateTime?: Maybe<Scalars['DateTime']['output']>;
  /** Service point ID being used by a staff member when item was scanned in Check in app. */
  servicePointId?: Maybe<Scalars['UUID']['output']>;
  /** ID a staff member who scanned the item */
  staffMemberId?: Maybe<Scalars['UUID']['output']>;
};

/** An item note type */
export type ItemNoteType = {
  __typename?: 'ItemNoteType';
  /** unique ID of the item note type; a UUID */
  id?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Metadata>;
  /** name of the item note type */
  name: Scalars['String']['output'];
  /** label indicating where the item note type entry originates from, i.e. 'folio' or 'local' */
  source: Scalars['String']['output'];
};

export type ItemNotesItem = {
  __typename?: 'ItemNotesItem';
  /** Type of item's note */
  itemNoteType?: Maybe<ItemNoteType>;
  /** ID of the type of note */
  itemNoteTypeId?: Maybe<Scalars['String']['output']>;
  /** Text content of the note */
  note?: Maybe<Scalars['String']['output']>;
  /** If true, determines that the note should not be visible for others than staff */
  staffOnly?: Maybe<Scalars['Boolean']['output']>;
};

/** The status of the item */
export type ItemStatus = {
  __typename?: 'ItemStatus';
  /** Date and time when the status was last changed */
  date?: Maybe<Scalars['DateTime']['output']>;
  name: Scalars['String']['output'];
};

/** third-level location unit */
export type Library = {
  __typename?: 'Library';
  campus?: Maybe<Campus>;
  /** ID of the second-level location unit that the third-level unit belongs to */
  campusId: Scalars['String']['output'];
  /** distinct code for the location */
  code: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  locations?: Maybe<Array<Maybe<Location>>>;
  metadata?: Maybe<Metadata>;
  /** name of the location */
  name: Scalars['String']['output'];
};

/** Links the item with the patron and applies certain conditions based on policies */
export type Loan = {
  __typename?: 'Loan';
  /** Last action performed on a loan (currently can be any value, values commonly used are checkedout and checkedin) */
  action: Scalars['String']['output'];
  /** Last action performed on a loan comments */
  actionComment?: Maybe<Scalars['String']['output']>;
  /** Additional information about the borrower of the item, taken from the user referred to by the userId */
  borrower?: Maybe<LoanBorrower>;
  /** Service Point where the last checkin occurred */
  checkinServicePoint?: Maybe<ServicePoint>;
  /** ID of the Service Point where the last checkin occured */
  checkinServicePointId?: Maybe<Scalars['UUID']['output']>;
  /** Service Point where the last checkout occurred */
  checkoutServicePoint?: Maybe<ServicePoint>;
  /** ID of the Service Point where the last checkout occured */
  checkoutServicePointId?: Maybe<Scalars['UUID']['output']>;
  /** Date and time the item was declared lost during this loan */
  declaredLostDate?: Maybe<Scalars['DateTime']['output']>;
  /** Date and time when the item is due to be returned */
  dueDate?: Maybe<Scalars['DateTime']['output']>;
  /** Is due date changed by hold request */
  dueDateChangedByHold?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether or not this loan had its due date modified by a expired user */
  dueDateChangedByNearExpireUser?: Maybe<Scalars['Boolean']['output']>;
  /** Is due date changed by recall request */
  dueDateChangedByRecall?: Maybe<Scalars['Boolean']['output']>;
  /** Fees and fines associated with loans */
  feesAndFines?: Maybe<LoanFeesAndFines>;
  /** Unique ID (generated UUID) of the loan */
  id?: Maybe<Scalars['UUID']['output']>;
  item?: Maybe<Item>;
  itemEffectiveLocationAtCheckOut?: Maybe<Location>;
  /** The effective location, at the time of checkout, of the item loaned to the patron. */
  itemEffectiveLocationIdAtCheckOut?: Maybe<Scalars['UUID']['output']>;
  /** ID of the item lent to the patron */
  itemId: Scalars['UUID']['output'];
  /** Date and time when the loan began */
  loanDate: Scalars['DateTime']['output'];
  loanPolicy?: Maybe<LoanPolicy>;
  /** ID of last policy used in relation to this loan */
  loanPolicyId?: Maybe<Scalars['UUID']['output']>;
  /** Additional information about the lost item policy of the item, taken from the loan lostItemPolicyId */
  lostItemPolicy?: Maybe<LoanLostItemPolicy>;
  /** ID of last lost item policy used in relation to this loan */
  lostItemPolicyId?: Maybe<Scalars['UUID']['output']>;
  /** Metadata about creation and changes to loan, provided by the server (client should not provide) */
  metadata?: Maybe<Metadata>;
  /** Additional information about the overdue fine policy of the item, taken from the loan overdueFinePolicyId */
  overdueFinePolicy?: Maybe<LoanOverdueFinePolicy>;
  /** ID of last overdue fine policy used in relation to this loan */
  overdueFinePolicyId?: Maybe<Scalars['UUID']['output']>;
  /** Patron Group at checkout */
  patronGroupAtCheckout?: Maybe<LoanPatronGroupAtCheckout>;
  /** ID of the user representing a proxy for the patron */
  proxyUserId?: Maybe<Scalars['UUID']['output']>;
  /** Count of how many times a loan has been renewed (incremented by the client) */
  renewalCount?: Maybe<Scalars['Int']['output']>;
  /** Date and time when the item was returned */
  returnDate?: Maybe<Scalars['DateTime']['output']>;
  /** Overall status of the loan */
  status?: Maybe<LoanStatus>;
  /** Date and time when return was processed */
  systemReturnDate?: Maybe<Scalars['DateTime']['output']>;
  /** ID of the patron the item was lent to. Required for open loans, not required for closed loans (for anonymization). */
  userId?: Maybe<Scalars['UUID']['output']>;
};

/** Additional information about the borrower of the item, taken from the user referred to by the userId */
export type LoanBorrower = {
  __typename?: 'LoanBorrower';
  /** barcode used to identify the borrower (read only, defined by the server) */
  barcode?: Maybe<Scalars['String']['output']>;
  /** first name of the borrower (read only, defined by the server) */
  firstName?: Maybe<Scalars['String']['output']>;
  /** last name of the borrower (read only, defined by the server) */
  lastName?: Maybe<Scalars['String']['output']>;
  /** middle name of the borrower (read only, defined by the server) */
  middleName?: Maybe<Scalars['String']['output']>;
};

/** Fees and fines associated with loans */
export type LoanFeesAndFines = {
  __typename?: 'LoanFeesAndFines';
  /** Total remaining amount due on fees and fines for the loan (read only, defined by the server) */
  amountRemainingToPay?: Maybe<Scalars['Float']['output']>;
};

/** Additional information about the lost item policy of the item, taken from the loan lostItemPolicyId */
export type LoanLostItemPolicy = {
  __typename?: 'LoanLostItemPolicy';
  /** Name of last lost item policy used in relation to this loan (read only, defined by the server) */
  name?: Maybe<Scalars['String']['output']>;
};

/** Additional information about the overdue fine policy of the item, taken from the loan overdueFinePolicyId */
export type LoanOverdueFinePolicy = {
  __typename?: 'LoanOverdueFinePolicy';
  /** Name of last overdue fine policy used in relation to this loan (read only, defined by the server) */
  name?: Maybe<Scalars['String']['output']>;
};

/** Patron Group at checkout */
export type LoanPatronGroupAtCheckout = {
  __typename?: 'LoanPatronGroupAtCheckout';
  /** Unique ID (generated UUID) of the patron group */
  id?: Maybe<Scalars['UUID']['output']>;
  /** Patron group name */
  name?: Maybe<Scalars['String']['output']>;
};

export type LoanPolicy = {
  __typename?: 'LoanPolicy';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  loanable: Scalars['Boolean']['output'];
  loansPolicy?: Maybe<LoanPolicyLoansPolicy>;
  metadata?: Maybe<Metadata>;
  name: Scalars['String']['output'];
  /** Is item renewable */
  renewable: Scalars['Boolean']['output'];
  renewalsPolicy?: Maybe<LoanPolicyRenewalsPolicy>;
  requestManagement?: Maybe<LoanPolicyRequestManagement>;
};

export type LoanPolicyLoansPolicy = {
  __typename?: 'LoanPolicyLoansPolicy';
  /** Closed library due date management */
  closedLibraryDueDateManagementId?: Maybe<Scalars['String']['output']>;
  fixedDueDateSchedule?: Maybe<FixedDueDateSchedule>;
  /** Fixed due date schedule (due date limit) */
  fixedDueDateScheduleId?: Maybe<Scalars['String']['output']>;
  /** Grace period */
  gracePeriod?: Maybe<Period>;
  /** Number of items allowed */
  itemLimit?: Maybe<Scalars['Int']['output']>;
  /** Opening offset time period */
  openingTimeOffset?: Maybe<Period>;
  /** Loan period */
  period?: Maybe<Period>;
  /** Loan profile */
  profileId?: Maybe<Scalars['String']['output']>;
};

export type LoanPolicyRenewalsPolicy = {
  __typename?: 'LoanPolicyRenewalsPolicy';
  /** Alternate fixed due date schedule (due date limit) for renewals */
  alternateFixedDueDateScheduleId?: Maybe<Scalars['String']['output']>;
  /** Renewal period different from original loan */
  differentPeriod?: Maybe<Scalars['Boolean']['output']>;
  /** Number of renewals allowed */
  numberAllowed?: Maybe<Scalars['Float']['output']>;
  /** Alternate loan period for renewals */
  period?: Maybe<Period>;
  /** Renew from date */
  renewFromId?: Maybe<Scalars['String']['output']>;
  /** Unlimited renewals */
  unlimited?: Maybe<Scalars['Boolean']['output']>;
};

export type LoanPolicyRequestManagement = {
  __typename?: 'LoanPolicyRequestManagement';
  holds?: Maybe<LoanPolicyRequestManagementHolds>;
  pages?: Maybe<LoanPolicyRequestManagementPages>;
  recalls?: Maybe<LoanPolicyRequestManagementRecalls>;
};

export type LoanPolicyRequestManagementHolds = {
  __typename?: 'LoanPolicyRequestManagementHolds';
  /** Alternate loan period at checkout for items with active, pending hold request */
  alternateCheckoutLoanPeriod?: Maybe<Period>;
  /** Alternate loan period at renewal for items with active, pending hold request */
  alternateRenewalLoanPeriod?: Maybe<Period>;
  /** Allow renewal of items with active, pending hold request */
  renewItemsWithRequest?: Maybe<Scalars['Boolean']['output']>;
};

export type LoanPolicyRequestManagementPages = {
  __typename?: 'LoanPolicyRequestManagementPages';
  /** Alternate loan period at checkout for items with active, pending page request */
  alternateCheckoutLoanPeriod?: Maybe<Period>;
  /** Alternate loan period at renewal for items with active, pending page request */
  alternateRenewalLoanPeriod?: Maybe<Period>;
  /** Allow renewal of items with active, pending page request */
  renewItemsWithRequest?: Maybe<Scalars['Boolean']['output']>;
};

export type LoanPolicyRequestManagementRecalls = {
  __typename?: 'LoanPolicyRequestManagementRecalls';
  /** Whether recalls are allowed to extend overdue loans */
  allowRecallsToExtendOverdueLoans?: Maybe<Scalars['Boolean']['output']>;
  /** Alternate grace period for recalled items */
  alternateGracePeriod?: Maybe<Period>;
  /** Alternate recall return interval for overdue loans */
  alternateRecallReturnInterval?: Maybe<Period>;
  /** Minimum guaranteed loan period */
  minimumGuaranteedLoanPeriod?: Maybe<Period>;
  /** Recall return interval */
  recallReturnInterval?: Maybe<Period>;
};

/** Overall status of the loan */
export type LoanStatus = {
  __typename?: 'LoanStatus';
  /** Name of the status (currently can be any value, values commonly used are Open and Closed) */
  name?: Maybe<Scalars['String']['output']>;
};

/** A (shelf) location, the forth-level location unit below institution, campus, and library. */
export type Location = {
  __typename?: 'Location';
  /** The campus, the second-level location unit, this (shelf) location belongs to */
  campus?: Maybe<Campus>;
  /** The UUID of the campus, the second-level location unit, this (shelf) location belongs to. */
  campusId: Scalars['String']['output'];
  /** Code of the (shelf) location, usually an abbreviation of the name. */
  code: Scalars['String']['output'];
  /** Description of the (shelf) location. */
  description?: Maybe<Scalars['String']['output']>;
  /** Details about this (shelf) location. */
  details?: Maybe<LocationDetails>;
  /** Name of the (shelf) location to be shown in the discovery. */
  discoveryDisplayName?: Maybe<Scalars['String']['output']>;
  /** id of this (shelf) location record as UUID. */
  id?: Maybe<Scalars['String']['output']>;
  /** The institution, the first-level location unit, this (shelf) location belongs to. */
  institution?: Maybe<Institution>;
  /** The UUID of the institution, the first-level location unit, this (shelf) location belongs to. */
  institutionId: Scalars['String']['output'];
  /** Whether this (shelf) location is active. Inactive (shelf) locations can no longer been used. */
  isActive?: Maybe<Scalars['Boolean']['output']>;
  library?: Maybe<Library>;
  /** The UUID of the library, the third-level location unit, this (shelf) location belongs to. */
  libraryId: Scalars['String']['output'];
  metadata?: Maybe<Metadata>;
  /** Name of the (shelf) location */
  name: Scalars['String']['output'];
  /** The UUID of the primary service point of this (shelf) location. */
  primaryServicePoint: Scalars['UUID']['output'];
  /** Dereferenced object for primary service point. This should really just be called 'primaryServicePoint', but the field containing the ID of this object has that name -- it should really be called 'primaryServicePointId' -- so we need something different for this one. */
  primaryServicePointObject?: Maybe<ServicePoint>;
  /** All service points that this (shelf) location has. */
  servicePointIds?: Maybe<Array<Scalars['String']['output']>>;
  /** List of dereferenced service points */
  servicePoints?: Maybe<Array<ServicePoint>>;
};

/** Details about this (shelf) location. */
export type LocationDetails = {
  __typename?: 'LocationDetails';
  _typesWithoutFieldsAreNotAllowed_?: Maybe<Scalars['String']['output']>;
};

/** Allows institution to manually block a patron from borrowing, renewing, and/or requesting until specified issue is resolved */
export type ManualBlock = {
  __typename?: 'ManualBlock';
  /** A flag to determine borrowing block action */
  borrowing?: Maybe<Scalars['Boolean']['output']>;
  /** Code of the template if block is defined based on a template (optional) */
  code?: Maybe<Scalars['String']['output']>;
  /** Patron block description */
  desc: Scalars['String']['output'];
  /** Date and time the patron block expiration if is provided the patron block should be automatically removed on that date */
  expirationDate?: Maybe<Scalars['DateTime']['output']>;
  /** Patron block id, UUID */
  id?: Maybe<Scalars['UUID']['output']>;
  /** Metadata about creation to patron block, provided by the server */
  metadata?: Maybe<Metadata>;
  /** Message to patron (optional) */
  patronMessage?: Maybe<Scalars['String']['output']>;
  /** A flag to determine renewal block action */
  renewals?: Maybe<Scalars['Boolean']['output']>;
  /** A flag to determine request block action */
  requests?: Maybe<Scalars['Boolean']['output']>;
  /** Additional information to staff (optional) */
  staffInformation?: Maybe<Scalars['String']['output']>;
  /** Type of patron block */
  type?: Maybe<Scalars['String']['output']>;
  /** ID of the user */
  userId: Scalars['UUID']['output'];
};

/** A material type */
export type MaterialType = {
  __typename?: 'MaterialType';
  id?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Metadata>;
  /** label for the material type */
  name: Scalars['String']['output'];
  /** origin of the material type record */
  source?: Maybe<Scalars['String']['output']>;
};

/** Metadata about creation and changes to records, provided by the server (client should not provide) */
export type Metadata = {
  __typename?: 'Metadata';
  /** ID of the user who created the record (when available) */
  createdByUserId?: Maybe<Scalars['UUID']['output']>;
  /** Username of the user who created the record (when available) */
  createdByUsername?: Maybe<Scalars['String']['output']>;
  /** Date and time when the record was created */
  createdDate: Scalars['DateTime']['output'];
  /** ID of the user who last updated the record (when available) */
  updatedByUserId?: Maybe<Scalars['UUID']['output']>;
  /** Username of the user who last updated the record (when available) */
  updatedByUsername?: Maybe<Scalars['String']['output']>;
  /** Date and time when the record was last updated */
  updatedDate?: Maybe<Scalars['DateTime']['output']>;
};

/** Money schema for patron portal integration */
export type Money = {
  __typename?: 'Money';
  /** The amount of the fine or charge */
  amount: Scalars['Float']['output'];
  /** An ISO 4217 standard currency code */
  isoCurrencyCode: Scalars['String']['output'];
};

/** Account schema for patron portal integration */
export type Patron = {
  __typename?: 'Patron';
  accounts: Array<Account>;
  blocks: Array<Block>;
  /** A list of the patron's charges and fines */
  charges: Array<PatronCharge>;
  /** A list of the patron's item holds */
  holds: Array<Hold>;
  /** The FOLIO id of the patron */
  id?: Maybe<Scalars['UUID']['output']>;
  /** A list of the patron's item checked out items */
  loans: Array<PatronLoan>;
  manualBlocks: Array<ManualBlock>;
  /** A patron's total outstanding fines and charges */
  totalCharges: Money;
  /** The total number of fines and charges for the patron */
  totalChargesCount: Scalars['Int']['output'];
  /** The total number of requested items for the patron */
  totalHolds: Scalars['Int']['output'];
  /** The total number of items loaned to the patron */
  totalLoans: Scalars['Int']['output'];
  user?: Maybe<User>;
};

/** Patron block conditions schema */
export type PatronBlockCondition = {
  __typename?: 'PatronBlockCondition';
  /** This flag indicates the block for borrowings */
  blockBorrowing: Scalars['Boolean']['output'];
  /** This flag indicates the block for renewals */
  blockRenewals: Scalars['Boolean']['output'];
  /** This flag indicates the block for requests */
  blockRequests: Scalars['Boolean']['output'];
  /** A UUID identifying the condition */
  id: Scalars['UUID']['output'];
  /** A message to be displayed */
  message?: Maybe<Scalars['String']['output']>;
  /** Metadata about creation and changes to patron block conditions, provided by the server (client should not provide) */
  metadata?: Maybe<Metadata>;
  /** The name of the condition */
  name: Scalars['String']['output'];
  /** Defines limit type */
  valueType: PatronBlockConditionValueType;
};

export enum PatronBlockConditionValueType {
  Double = 'Double',
  Integer = 'Integer'
}

/** Patron block limits schema */
export type PatronBlockLimit = {
  __typename?: 'PatronBlockLimit';
  condition?: Maybe<PatronBlockCondition>;
  /** A UUID identifying the condition */
  conditionId: Scalars['UUID']['output'];
  /** A UUID identifying the limit */
  id: Scalars['UUID']['output'];
  metadata?: Maybe<Metadata>;
  /** A UUID identifying the patron group */
  patronGroupId: Scalars['UUID']['output'];
  /** Limit value */
  value: Scalars['Float']['output'];
};

/** Charge schema for patron portal integration */
export type PatronCharge = {
  __typename?: 'PatronCharge';
  /** The date when charges begin to accrue */
  accrualDate?: Maybe<Scalars['DateTime']['output']>;
  /** The outstanding balance on the item */
  chargeAmount?: Maybe<Money>;
  /** A description of the charge */
  description?: Maybe<Scalars['String']['output']>;
  feeFine?: Maybe<FeeFine>;
  /** The UUID of the fee/fine for this charge */
  feeFineId?: Maybe<Scalars['UUID']['output']>;
  /** The item that is accruing the charge */
  item?: Maybe<PatronItem>;
  /** The reason for this charge */
  reason?: Maybe<Scalars['String']['output']>;
  /** The current state of the charge */
  state?: Maybe<Scalars['String']['output']>;
};

/** A user group */
export type PatronGroup = {
  __typename?: 'PatronGroup';
  /** An explanation of this group */
  desc?: Maybe<Scalars['String']['output']>;
  /** The default period in days after which a newly created user that belongs to this group will expire */
  expirationOffsetInDays?: Maybe<Scalars['Int']['output']>;
  /** The unique name of this group */
  group: Scalars['String']['output'];
  /** A UUID identifying this group */
  id?: Maybe<Scalars['String']['output']>;
  limits?: Maybe<Array<Maybe<PatronBlockLimit>>>;
  metadata?: Maybe<Metadata>;
};

/** Item schema for patron portal integration */
export type PatronItem = {
  __typename?: 'PatronItem';
  /** The author of the item */
  author?: Maybe<Scalars['String']['output']>;
  instance?: Maybe<Instance>;
  /** The FOLIO id of the instance */
  instanceId: Scalars['UUID']['output'];
  /** The ISBN of the item */
  isbn?: Maybe<Scalars['String']['output']>;
  item?: Maybe<Item>;
  /** The FOLIO id of the item */
  itemId?: Maybe<Scalars['UUID']['output']>;
  /** The title of the item */
  title?: Maybe<Scalars['String']['output']>;
};

/** Loan schema for patron portal integration */
export type PatronLoan = {
  __typename?: 'PatronLoan';
  details: Loan;
  /** The date the item is due */
  dueDate: Scalars['DateTime']['output'];
  /** The id of the loan */
  id?: Maybe<Scalars['UUID']['output']>;
  /** The item that is loaned out */
  item: PatronItem;
  /** The date the item was loaned out */
  loanDate: Scalars['DateTime']['output'];
  /** Indicates if the item is overdue */
  overdue: Scalars['Boolean']['output'];
};

export type Period = {
  __typename?: 'Period';
  /** Duration of the period, number of times the interval repeats */
  duration: Scalars['Int']['output'];
  /** Interval for the period, e.g. hours, days or weeks */
  intervalId: PeriodIntervalId;
};

export enum PeriodIntervalId {
  Days = 'Days',
  Hours = 'Hours',
  Minutes = 'Minutes',
  Months = 'Months',
  Weeks = 'Weeks'
}

/** A proxy for a user */
export type ProxyFor = {
  __typename?: 'ProxyFor';
  /** Where fees and fines accrue */
  accrueTo?: Maybe<Scalars['String']['output']>;
  /** Deprecated */
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  /** The date this proxy relationship expires */
  expirationDate?: Maybe<Scalars['DateTime']['output']>;
  /** A UUID identifying this proxy relationship */
  id?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Metadata>;
  /** Where notifications are sent */
  notificationsTo?: Maybe<Scalars['String']['output']>;
  proxyUser?: Maybe<User>;
  /** The id of the user acting as the proxy */
  proxyUserId?: Maybe<Scalars['String']['output']>;
  /** Can the user request a sponsor (yes/no) */
  requestForSponsor?: Maybe<Scalars['String']['output']>;
  /** Active or Inactive */
  status?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
  /** The id of the user for whom this proxy pertains */
  userId?: Maybe<Scalars['String']['output']>;
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

/** request policy schema */
export type RequestPolicy = {
  __typename?: 'RequestPolicy';
  /** Description of request policy */
  description?: Maybe<Scalars['String']['output']>;
  /** Unique request policy ID */
  id?: Maybe<Scalars['String']['output']>;
  /** Metadata about creation and changes to request policy, provided by the server (client should not provide) */
  metadata?: Maybe<Metadata>;
  /** Unique request policy name, required */
  name: Scalars['String']['output'];
  /** Whether the item should be held upon return, recalled or paged for */
  requestTypes?: Maybe<Array<RequestType>>;
};

export enum RequestType {
  Hold = 'Hold',
  Page = 'Page',
  Recall = 'Recall'
}

/** A date range and associated due date, connected with the parent FixedDueDateSchedule. */
export type Schedule = {
  __typename?: 'Schedule';
  /** The due date for materials checked out in the date range between the 'from' and 'to' dates. Conforms to the ISO 8601 date and time format. */
  due: Scalars['DateTime']['output'];
  /** The start of a date range during which materials checked out will be assigned the due date in the 'due' field. Conforms to the ISO 8601 date and time format. */
  from: Scalars['DateTime']['output'];
  /** The end of a date range during which materials checked out will be assigned the due date in the 'due' field. Conforms to the ISO 8601 date and time format. */
  to: Scalars['DateTime']['output'];
};

/** A service point */
export type ServicePoint = {
  __typename?: 'ServicePoint';
  /** service-point code, a required field */
  code: Scalars['String']['output'];
  /** description of the service-point */
  description?: Maybe<Scalars['String']['output']>;
  /** display name, a required field */
  discoveryDisplayName: Scalars['String']['output'];
  /** enum for closedLibraryDateManagement associated with hold shelf */
  holdShelfClosedLibraryDateManagement?: Maybe<ServicepointHoldShelfClosedLibraryDateManagement>;
  /** expiration period for items on the hold shelf at the service point */
  holdShelfExpiryPeriod?: Maybe<TimePeriod>;
  /** Id of service-point object */
  id?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Metadata>;
  /** service-point name, a required field */
  name: Scalars['String']['output'];
  /** indicates whether or not the service point is a pickup location */
  pickupLocation?: Maybe<Scalars['Boolean']['output']>;
  /** shelving lag time */
  shelvingLagTime?: Maybe<Scalars['Int']['output']>;
  /** List of staff slips for this service point */
  staffSlips?: Maybe<Array<ServicepointStaffSlipsItem>>;
};

export enum ServicepointHoldShelfClosedLibraryDateManagement {
  KeepTheCurrentDueDate = 'Keep_the_current_due_date',
  KeepTheCurrentDueDateTime = 'Keep_the_current_due_date_time',
  MoveToBeginningOfNextOpenServicePointHours = 'Move_to_beginning_of_next_open_service_point_hours',
  MoveToEndOfCurrentServicePointHours = 'Move_to_end_of_current_service_point_hours',
  MoveToTheEndOfTheNextOpenDay = 'Move_to_the_end_of_the_next_open_day',
  MoveToTheEndOfThePreviousOpenDay = 'Move_to_the_end_of_the_previous_open_day'
}

export type ServicepointStaffSlipsItem = {
  __typename?: 'ServicepointStaffSlipsItem';
  /** The ID of the staff slip */
  id: Scalars['UUID']['output'];
  /** Whether or not to print the staff slip by default */
  printByDefault: Scalars['Boolean']['output'];
};

/** List of simple tags that can be added to an object */
export type Tags = {
  __typename?: 'Tags';
  /** List of tags */
  tagList?: Maybe<Array<Scalars['String']['output']>>;
};

/** schema for time-period, which contains time interval 'duration' and the time unit */
export type TimePeriod = {
  __typename?: 'TimePeriod';
  /** Duration interval */
  duration: Scalars['Int']['output'];
  /** Unit of time for the duration */
  intervalId: TimePeriodIntervalId;
};

export enum TimePeriodIntervalId {
  Days = 'Days',
  Hours = 'Hours',
  Minutes = 'Minutes',
  Months = 'Months',
  Weeks = 'Weeks'
}

/** A user */
export type User = {
  __typename?: 'User';
  accounts?: Maybe<Array<Maybe<Account>>>;
  /** A flag to determine if the user's account is effective and not expired. The tenant configuration can require the user to be active for login. Active is different from the loan patron block */
  active?: Maybe<Scalars['Boolean']['output']>;
  /** The unique library barcode for this user */
  barcode?: Maybe<Scalars['String']['output']>;
  blocks?: Maybe<Array<Maybe<Block>>>;
  /** Deprecated */
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  /** Object that contains custom field */
  customFields?: Maybe<UserdataCustomFields>;
  department?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
  /** A list of UUIDs corresponding to the departments the user belongs to, see /departments API */
  departments?: Maybe<Array<Scalars['UUID']['output']>>;
  /** The date in which the user joined the organization */
  enrollmentDate?: Maybe<Scalars['DateTime']['output']>;
  /** The date for when the user becomes inactive */
  expirationDate?: Maybe<Scalars['DateTime']['output']>;
  /** A unique ID that corresponds to an external authority */
  externalSystemId?: Maybe<Scalars['String']['output']>;
  /** A globally unique (UUID) identifier for the user */
  id?: Maybe<Scalars['String']['output']>;
  manualBlocks?: Maybe<Array<Maybe<ManualBlock>>>;
  /** Deprecated */
  meta?: Maybe<UserdataMeta>;
  metadata?: Maybe<Metadata>;
  patronGroup?: Maybe<PatronGroup>;
  /** A UUID corresponding to the group the user belongs to, see /groups API, example groups are undergraduate and faculty; loan rules, patron blocks, fees/fines and expiration days can use the patron group */
  patronGroupId?: Maybe<Scalars['UUID']['output']>;
  /** Personal information about the user */
  personal?: Maybe<UserdataPersonal>;
  proxiesFor?: Maybe<Array<Maybe<ProxyFor>>>;
  proxiesOf?: Maybe<Array<Maybe<ProxyFor>>>;
  /** Deprecated */
  proxyFor?: Maybe<Array<Scalars['String']['output']>>;
  tags?: Maybe<Tags>;
  /** The class of user like staff or patron; this is different from patronGroup */
  type?: Maybe<Scalars['String']['output']>;
  /** Deprecated */
  updatedDate?: Maybe<Scalars['DateTime']['output']>;
  /** A unique name belonging to a user. Typically used for login */
  username?: Maybe<Scalars['String']['output']>;
};

/** Object that contains custom field */
export type UserdataCustomFields = {
  __typename?: 'UserdataCustomFields';
  _typesWithoutFieldsAreNotAllowed_?: Maybe<Scalars['String']['output']>;
};

/** Deprecated */
export type UserdataMeta = {
  __typename?: 'UserdataMeta';
  _typesWithoutFieldsAreNotAllowed_?: Maybe<Scalars['String']['output']>;
};

/** Personal information about the user */
export type UserdataPersonal = {
  __typename?: 'UserdataPersonal';
  /** Physical addresses associated with the user */
  addresses?: Maybe<Array<UserdataPersonalAddressesItem>>;
  /** The user's birth date */
  dateOfBirth?: Maybe<Scalars['DateTime']['output']>;
  /** The user's email address */
  email?: Maybe<Scalars['String']['output']>;
  /** The user's given name */
  firstName?: Maybe<Scalars['String']['output']>;
  /** The user's surname */
  lastName: Scalars['String']['output'];
  /** The user's middle name (if any) */
  middleName?: Maybe<Scalars['String']['output']>;
  /** The user's mobile phone number */
  mobilePhone?: Maybe<Scalars['String']['output']>;
  /** The user's primary phone number */
  phone?: Maybe<Scalars['String']['output']>;
  /** Id of user's preferred contact type like Email, Mail or Text Message, see /addresstypes API */
  preferredContactTypeId?: Maybe<Scalars['String']['output']>;
  /** The user's preferred name */
  preferredFirstName?: Maybe<Scalars['String']['output']>;
};

export type UserdataPersonalAddressesItem = {
  __typename?: 'UserdataPersonalAddressesItem';
  /** Address, Line 1 */
  addressLine1?: Maybe<Scalars['String']['output']>;
  /** Address, Line 2 */
  addressLine2?: Maybe<Scalars['String']['output']>;
  /** A UUID that corresponds with an address type object */
  addressTypeId: Scalars['UUID']['output'];
  /** City name */
  city?: Maybe<Scalars['String']['output']>;
  /** The country code for this address */
  countryId?: Maybe<Scalars['String']['output']>;
  /** A unique id for this address */
  id?: Maybe<Scalars['String']['output']>;
  /** Postal Code */
  postalCode?: Maybe<Scalars['String']['output']>;
  /** Is this the user's primary address? */
  primaryAddress?: Maybe<Scalars['Boolean']['output']>;
  /** Region */
  region?: Maybe<Scalars['String']['output']>;
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
  AccountdataItemStatus: ResolverTypeWrapper<AccountdataItemStatus>;
  AccountdataPaymentStatus: ResolverTypeWrapper<AccountdataPaymentStatus>;
  AccountdataStatus: ResolverTypeWrapper<AccountdataStatus>;
  Block: ResolverTypeWrapper<Block>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Campus: ResolverTypeWrapper<Campus>;
  ClassificationType: ResolverTypeWrapper<ClassificationType>;
  ContributorNameType: ResolverTypeWrapper<ContributorNameType>;
  CqlParams: CqlParams;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  FeeFine: ResolverTypeWrapper<FeeFine>;
  FixedDueDateSchedule: ResolverTypeWrapper<FixedDueDateSchedule>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Hold: ResolverTypeWrapper<Hold>;
  HoldStatus: HoldStatus;
  HoldingsNoteType: ResolverTypeWrapper<HoldingsNoteType>;
  HoldingsRecord: ResolverTypeWrapper<HoldingsRecord>;
  HoldingsrecordElectronicAccessItem: ResolverTypeWrapper<HoldingsrecordElectronicAccessItem>;
  HoldingsrecordHoldingsStatementsForIndexesItem: ResolverTypeWrapper<HoldingsrecordHoldingsStatementsForIndexesItem>;
  HoldingsrecordHoldingsStatementsForSupplementsItem: ResolverTypeWrapper<HoldingsrecordHoldingsStatementsForSupplementsItem>;
  HoldingsrecordHoldingsStatementsItem: ResolverTypeWrapper<HoldingsrecordHoldingsStatementsItem>;
  HoldingsrecordNotesItem: ResolverTypeWrapper<HoldingsrecordNotesItem>;
  HoldingsrecordReceivingHistory: ResolverTypeWrapper<HoldingsrecordReceivingHistory>;
  HoldingsrecordReceivingHistoryEntriesItem: ResolverTypeWrapper<HoldingsrecordReceivingHistoryEntriesItem>;
  ILLpolicy: ResolverTypeWrapper<IlLpolicy>;
  IdentifierType: ResolverTypeWrapper<IdentifierType>;
  Instance: ResolverTypeWrapper<Instance>;
  InstanceAlternativeTitlesItem: ResolverTypeWrapper<InstanceAlternativeTitlesItem>;
  InstanceClassificationsItem: ResolverTypeWrapper<InstanceClassificationsItem>;
  InstanceContributorsItem: ResolverTypeWrapper<InstanceContributorsItem>;
  InstanceElectronicAccessItem: ResolverTypeWrapper<InstanceElectronicAccessItem>;
  InstanceFormat: ResolverTypeWrapper<InstanceFormat>;
  InstanceIdentifiersItem: ResolverTypeWrapper<InstanceIdentifiersItem>;
  InstanceNotesItem: ResolverTypeWrapper<InstanceNotesItem>;
  InstancePublicationItem: ResolverTypeWrapper<InstancePublicationItem>;
  InstancePublicationPeriod: ResolverTypeWrapper<InstancePublicationPeriod>;
  InstanceSeriesItem: ResolverTypeWrapper<InstanceSeriesItem>;
  InstanceSourceRecordFormat: InstanceSourceRecordFormat;
  InstanceSubjectsItem: ResolverTypeWrapper<InstanceSubjectsItem>;
  Institution: ResolverTypeWrapper<Institution>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Item: ResolverTypeWrapper<Item>;
  ItemCirculationNotesItem: ResolverTypeWrapper<ItemCirculationNotesItem>;
  ItemCirculationNotesItemNoteType: ItemCirculationNotesItemNoteType;
  ItemCirculationNotesItemSource: ResolverTypeWrapper<ItemCirculationNotesItemSource>;
  ItemCirculationNotesItemSourcePersonal: ResolverTypeWrapper<ItemCirculationNotesItemSourcePersonal>;
  ItemEffectiveCallNumberComponents: ResolverTypeWrapper<ItemEffectiveCallNumberComponents>;
  ItemElectronicAccessItem: ResolverTypeWrapper<ItemElectronicAccessItem>;
  ItemLastCheckIn: ResolverTypeWrapper<ItemLastCheckIn>;
  ItemNoteType: ResolverTypeWrapper<ItemNoteType>;
  ItemNotesItem: ResolverTypeWrapper<ItemNotesItem>;
  ItemStatus: ResolverTypeWrapper<ItemStatus>;
  Library: ResolverTypeWrapper<Library>;
  Loan: ResolverTypeWrapper<Loan>;
  LoanBorrower: ResolverTypeWrapper<LoanBorrower>;
  LoanFeesAndFines: ResolverTypeWrapper<LoanFeesAndFines>;
  LoanLostItemPolicy: ResolverTypeWrapper<LoanLostItemPolicy>;
  LoanOverdueFinePolicy: ResolverTypeWrapper<LoanOverdueFinePolicy>;
  LoanPatronGroupAtCheckout: ResolverTypeWrapper<LoanPatronGroupAtCheckout>;
  LoanPolicy: ResolverTypeWrapper<LoanPolicy>;
  LoanPolicyLoansPolicy: ResolverTypeWrapper<LoanPolicyLoansPolicy>;
  LoanPolicyRenewalsPolicy: ResolverTypeWrapper<LoanPolicyRenewalsPolicy>;
  LoanPolicyRequestManagement: ResolverTypeWrapper<LoanPolicyRequestManagement>;
  LoanPolicyRequestManagementHolds: ResolverTypeWrapper<LoanPolicyRequestManagementHolds>;
  LoanPolicyRequestManagementPages: ResolverTypeWrapper<LoanPolicyRequestManagementPages>;
  LoanPolicyRequestManagementRecalls: ResolverTypeWrapper<LoanPolicyRequestManagementRecalls>;
  LoanStatus: ResolverTypeWrapper<LoanStatus>;
  Location: ResolverTypeWrapper<Location>;
  LocationDetails: ResolverTypeWrapper<LocationDetails>;
  ManualBlock: ResolverTypeWrapper<ManualBlock>;
  MaterialType: ResolverTypeWrapper<MaterialType>;
  Metadata: ResolverTypeWrapper<Metadata>;
  Money: ResolverTypeWrapper<Money>;
  Patron: ResolverTypeWrapper<Patron>;
  PatronBlockCondition: ResolverTypeWrapper<PatronBlockCondition>;
  PatronBlockConditionValueType: PatronBlockConditionValueType;
  PatronBlockLimit: ResolverTypeWrapper<PatronBlockLimit>;
  PatronCharge: ResolverTypeWrapper<PatronCharge>;
  PatronGroup: ResolverTypeWrapper<PatronGroup>;
  PatronItem: ResolverTypeWrapper<PatronItem>;
  PatronLoan: ResolverTypeWrapper<PatronLoan>;
  Period: ResolverTypeWrapper<Period>;
  PeriodIntervalId: PeriodIntervalId;
  ProxyFor: ResolverTypeWrapper<ProxyFor>;
  Query: ResolverTypeWrapper<{}>;
  RequestPolicy: ResolverTypeWrapper<RequestPolicy>;
  RequestType: RequestType;
  Schedule: ResolverTypeWrapper<Schedule>;
  ServicePoint: ResolverTypeWrapper<ServicePoint>;
  ServicepointHoldShelfClosedLibraryDateManagement: ServicepointHoldShelfClosedLibraryDateManagement;
  ServicepointStaffSlipsItem: ResolverTypeWrapper<ServicepointStaffSlipsItem>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Tags: ResolverTypeWrapper<Tags>;
  TimePeriod: ResolverTypeWrapper<TimePeriod>;
  TimePeriodIntervalId: TimePeriodIntervalId;
  UUID: ResolverTypeWrapper<Scalars['UUID']['output']>;
  User: ResolverTypeWrapper<User>;
  UserdataCustomFields: ResolverTypeWrapper<UserdataCustomFields>;
  UserdataMeta: ResolverTypeWrapper<UserdataMeta>;
  UserdataPersonal: ResolverTypeWrapper<UserdataPersonal>;
  UserdataPersonalAddressesItem: ResolverTypeWrapper<UserdataPersonalAddressesItem>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Account: Account;
  AccountdataItemStatus: AccountdataItemStatus;
  AccountdataPaymentStatus: AccountdataPaymentStatus;
  AccountdataStatus: AccountdataStatus;
  Block: Block;
  Boolean: Scalars['Boolean']['output'];
  Campus: Campus;
  ClassificationType: ClassificationType;
  ContributorNameType: ContributorNameType;
  CqlParams: CqlParams;
  DateTime: Scalars['DateTime']['output'];
  FeeFine: FeeFine;
  FixedDueDateSchedule: FixedDueDateSchedule;
  Float: Scalars['Float']['output'];
  Hold: Hold;
  HoldingsNoteType: HoldingsNoteType;
  HoldingsRecord: HoldingsRecord;
  HoldingsrecordElectronicAccessItem: HoldingsrecordElectronicAccessItem;
  HoldingsrecordHoldingsStatementsForIndexesItem: HoldingsrecordHoldingsStatementsForIndexesItem;
  HoldingsrecordHoldingsStatementsForSupplementsItem: HoldingsrecordHoldingsStatementsForSupplementsItem;
  HoldingsrecordHoldingsStatementsItem: HoldingsrecordHoldingsStatementsItem;
  HoldingsrecordNotesItem: HoldingsrecordNotesItem;
  HoldingsrecordReceivingHistory: HoldingsrecordReceivingHistory;
  HoldingsrecordReceivingHistoryEntriesItem: HoldingsrecordReceivingHistoryEntriesItem;
  ILLpolicy: IlLpolicy;
  IdentifierType: IdentifierType;
  Instance: Instance;
  InstanceAlternativeTitlesItem: InstanceAlternativeTitlesItem;
  InstanceClassificationsItem: InstanceClassificationsItem;
  InstanceContributorsItem: InstanceContributorsItem;
  InstanceElectronicAccessItem: InstanceElectronicAccessItem;
  InstanceFormat: InstanceFormat;
  InstanceIdentifiersItem: InstanceIdentifiersItem;
  InstanceNotesItem: InstanceNotesItem;
  InstancePublicationItem: InstancePublicationItem;
  InstancePublicationPeriod: InstancePublicationPeriod;
  InstanceSeriesItem: InstanceSeriesItem;
  InstanceSubjectsItem: InstanceSubjectsItem;
  Institution: Institution;
  Int: Scalars['Int']['output'];
  Item: Item;
  ItemCirculationNotesItem: ItemCirculationNotesItem;
  ItemCirculationNotesItemSource: ItemCirculationNotesItemSource;
  ItemCirculationNotesItemSourcePersonal: ItemCirculationNotesItemSourcePersonal;
  ItemEffectiveCallNumberComponents: ItemEffectiveCallNumberComponents;
  ItemElectronicAccessItem: ItemElectronicAccessItem;
  ItemLastCheckIn: ItemLastCheckIn;
  ItemNoteType: ItemNoteType;
  ItemNotesItem: ItemNotesItem;
  ItemStatus: ItemStatus;
  Library: Library;
  Loan: Loan;
  LoanBorrower: LoanBorrower;
  LoanFeesAndFines: LoanFeesAndFines;
  LoanLostItemPolicy: LoanLostItemPolicy;
  LoanOverdueFinePolicy: LoanOverdueFinePolicy;
  LoanPatronGroupAtCheckout: LoanPatronGroupAtCheckout;
  LoanPolicy: LoanPolicy;
  LoanPolicyLoansPolicy: LoanPolicyLoansPolicy;
  LoanPolicyRenewalsPolicy: LoanPolicyRenewalsPolicy;
  LoanPolicyRequestManagement: LoanPolicyRequestManagement;
  LoanPolicyRequestManagementHolds: LoanPolicyRequestManagementHolds;
  LoanPolicyRequestManagementPages: LoanPolicyRequestManagementPages;
  LoanPolicyRequestManagementRecalls: LoanPolicyRequestManagementRecalls;
  LoanStatus: LoanStatus;
  Location: Location;
  LocationDetails: LocationDetails;
  ManualBlock: ManualBlock;
  MaterialType: MaterialType;
  Metadata: Metadata;
  Money: Money;
  Patron: Patron;
  PatronBlockCondition: PatronBlockCondition;
  PatronBlockLimit: PatronBlockLimit;
  PatronCharge: PatronCharge;
  PatronGroup: PatronGroup;
  PatronItem: PatronItem;
  PatronLoan: PatronLoan;
  Period: Period;
  ProxyFor: ProxyFor;
  Query: {};
  RequestPolicy: RequestPolicy;
  Schedule: Schedule;
  ServicePoint: ServicePoint;
  ServicepointStaffSlipsItem: ServicepointStaffSlipsItem;
  String: Scalars['String']['output'];
  Tags: Tags;
  TimePeriod: TimePeriod;
  UUID: Scalars['UUID']['output'];
  User: User;
  UserdataCustomFields: UserdataCustomFields;
  UserdataMeta: UserdataMeta;
  UserdataPersonal: UserdataPersonal;
  UserdataPersonalAddressesItem: UserdataPersonalAddressesItem;
}>;

export type AccountResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = ResolversObject<{
  amount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  barcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  callNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dateCreated?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  dateUpdated?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  dueDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  feeFine?: Resolver<Maybe<ResolversTypes['FeeFine']>, ParentType, ContextType>;
  feeFineId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  feeFineOwner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  feeFineType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  holdingsRecordId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  instanceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  item?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  itemStatus?: Resolver<Maybe<ResolversTypes['AccountdataItemStatus']>, ParentType, ContextType>;
  loan?: Resolver<Maybe<ResolversTypes['Loan']>, ParentType, ContextType>;
  loanId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  loanPolicyId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lostItemFeePolicyId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  materialType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  materialTypeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  overdueFinePolicyId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  ownerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  paymentStatus?: Resolver<Maybe<ResolversTypes['AccountdataPaymentStatus']>, ParentType, ContextType>;
  processId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  remaining?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  returnedDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['AccountdataStatus']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountdataItemStatusResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['AccountdataItemStatus'] = ResolversParentTypes['AccountdataItemStatus']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountdataPaymentStatusResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['AccountdataPaymentStatus'] = ResolversParentTypes['AccountdataPaymentStatus']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountdataStatusResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['AccountdataStatus'] = ResolversParentTypes['AccountdataStatus']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlockResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Block'] = ResolversParentTypes['Block']> = ResolversObject<{
  blockBorrowing?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  blockCondition?: Resolver<Maybe<ResolversTypes['PatronBlockCondition']>, ParentType, ContextType>;
  blockRenewals?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  blockRequests?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  patronBlockConditionId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
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

export type ClassificationTypeResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['ClassificationType'] = ResolversParentTypes['ClassificationType']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContributorNameTypeResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['ContributorNameType'] = ResolversParentTypes['ContributorNameType']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ordering?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
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
  id?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  schedules?: Resolver<Maybe<Array<ResolversTypes['Schedule']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HoldResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Hold'] = ResolversParentTypes['Hold']> = ResolversObject<{
  canceledByUserId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  canceledDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  cancellationAdditionalInformation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cancellationReasonId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  expirationDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  item?: Resolver<Maybe<ResolversTypes['PatronItem']>, ParentType, ContextType>;
  patronComments?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pickupLocation?: Resolver<Maybe<ResolversTypes['ServicePoint']>, ParentType, ContextType>;
  pickupLocationId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  queuePosition?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  requestDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  requestId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['HoldStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HoldingsNoteTypeResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['HoldingsNoteType'] = ResolversParentTypes['HoldingsNoteType']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  source?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HoldingsRecordResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['HoldingsRecord'] = ResolversParentTypes['HoldingsRecord']> = ResolversObject<{
  _version?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  acquisitionFormat?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  acquisitionMethod?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  administrativeNotes?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  bareHoldingsItems?: Resolver<Maybe<Array<ResolversTypes['Item']>>, ParentType, ContextType>;
  callNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  callNumberPrefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  callNumberSuffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  callNumberTypeId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  copyNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  digitizationPolicy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  discoverySuppress?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  effectiveLocation?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>;
  effectiveLocationId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  electronicAccess?: Resolver<Maybe<Array<ResolversTypes['HoldingsrecordElectronicAccessItem']>>, ParentType, ContextType>;
  formerIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  holdingsInstance?: Resolver<Maybe<ResolversTypes['Instance']>, ParentType, ContextType>;
  holdingsItems?: Resolver<Maybe<Array<ResolversTypes['Item']>>, ParentType, ContextType>;
  holdingsStatements?: Resolver<Maybe<Array<ResolversTypes['HoldingsrecordHoldingsStatementsItem']>>, ParentType, ContextType>;
  holdingsStatementsForIndexes?: Resolver<Maybe<Array<ResolversTypes['HoldingsrecordHoldingsStatementsForIndexesItem']>>, ParentType, ContextType>;
  holdingsStatementsForSupplements?: Resolver<Maybe<Array<ResolversTypes['HoldingsrecordHoldingsStatementsForSupplementsItem']>>, ParentType, ContextType>;
  holdingsTypeId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  hrid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  illPolicy?: Resolver<Maybe<ResolversTypes['ILLpolicy']>, ParentType, ContextType>;
  illPolicyId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  instance?: Resolver<Maybe<ResolversTypes['Instance']>, ParentType, ContextType>;
  instanceId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['Item']>>>, ParentType, ContextType, Partial<HoldingsRecordItemsArgs>>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<Array<ResolversTypes['HoldingsrecordNotesItem']>>, ParentType, ContextType>;
  numberOfItems?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  permanentLocation?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>;
  permanentLocationId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  receiptStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  receivingHistory?: Resolver<Maybe<ResolversTypes['HoldingsrecordReceivingHistory']>, ParentType, ContextType>;
  retentionPolicy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shelvingTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sourceId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  statisticalCodeIds?: Resolver<Maybe<Array<ResolversTypes['UUID']>>, ParentType, ContextType>;
  tags?: Resolver<Maybe<ResolversTypes['Tags']>, ParentType, ContextType>;
  temporaryLocation?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>;
  temporaryLocationId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HoldingsrecordElectronicAccessItemResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['HoldingsrecordElectronicAccessItem'] = ResolversParentTypes['HoldingsrecordElectronicAccessItem']> = ResolversObject<{
  linkText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  materialsSpecification?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publicNote?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  relationshipId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HoldingsrecordHoldingsStatementsForIndexesItemResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['HoldingsrecordHoldingsStatementsForIndexesItem'] = ResolversParentTypes['HoldingsrecordHoldingsStatementsForIndexesItem']> = ResolversObject<{
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  staffNote?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  statement?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HoldingsrecordHoldingsStatementsForSupplementsItemResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['HoldingsrecordHoldingsStatementsForSupplementsItem'] = ResolversParentTypes['HoldingsrecordHoldingsStatementsForSupplementsItem']> = ResolversObject<{
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  staffNote?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  statement?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HoldingsrecordHoldingsStatementsItemResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['HoldingsrecordHoldingsStatementsItem'] = ResolversParentTypes['HoldingsrecordHoldingsStatementsItem']> = ResolversObject<{
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  staffNote?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  statement?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HoldingsrecordNotesItemResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['HoldingsrecordNotesItem'] = ResolversParentTypes['HoldingsrecordNotesItem']> = ResolversObject<{
  holdingsNoteType?: Resolver<Maybe<ResolversTypes['HoldingsNoteType']>, ParentType, ContextType>;
  holdingsNoteTypeId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  staffOnly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HoldingsrecordReceivingHistoryResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['HoldingsrecordReceivingHistory'] = ResolversParentTypes['HoldingsrecordReceivingHistory']> = ResolversObject<{
  displayType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entries?: Resolver<Maybe<Array<ResolversTypes['HoldingsrecordReceivingHistoryEntriesItem']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HoldingsrecordReceivingHistoryEntriesItemResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['HoldingsrecordReceivingHistoryEntriesItem'] = ResolversParentTypes['HoldingsrecordReceivingHistoryEntriesItem']> = ResolversObject<{
  chronology?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  enumeration?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publicDisplay?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IlLpolicyResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['ILLpolicy'] = ResolversParentTypes['ILLpolicy']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  source?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IdentifierTypeResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['IdentifierType'] = ResolversParentTypes['IdentifierType']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InstanceResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Instance'] = ResolversParentTypes['Instance']> = ResolversObject<{
  _version?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  administrativeNotes?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  alternativeTitles?: Resolver<Maybe<Array<ResolversTypes['InstanceAlternativeTitlesItem']>>, ParentType, ContextType>;
  catalogedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  classifications?: Resolver<Maybe<Array<ResolversTypes['InstanceClassificationsItem']>>, ParentType, ContextType>;
  contributors?: Resolver<Maybe<Array<ResolversTypes['InstanceContributorsItem']>>, ParentType, ContextType>;
  discoverySuppress?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  editions?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  electronicAccess?: Resolver<Maybe<Array<ResolversTypes['InstanceElectronicAccessItem']>>, ParentType, ContextType>;
  holdingsRecords?: Resolver<Maybe<Array<Maybe<ResolversTypes['HoldingsRecord']>>>, ParentType, ContextType, Partial<InstanceHoldingsRecordsArgs>>;
  holdingsRecords2?: Resolver<Maybe<Array<ResolversTypes['HoldingsRecord']>>, ParentType, ContextType>;
  hrid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  identifiers?: Resolver<Maybe<Array<ResolversTypes['InstanceIdentifiersItem']>>, ParentType, ContextType>;
  indexTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  instanceFormatIds?: Resolver<Maybe<Array<ResolversTypes['UUID']>>, ParentType, ContextType>;
  instanceFormats?: Resolver<Maybe<Array<ResolversTypes['InstanceFormat']>>, ParentType, ContextType>;
  instanceTypeId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['Item']>>>, ParentType, ContextType, Partial<InstanceItemsArgs>>;
  languages?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  matchKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  modeOfIssuanceId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  natureOfContentTermIds?: Resolver<Maybe<Array<ResolversTypes['UUID']>>, ParentType, ContextType>;
  notes?: Resolver<Maybe<Array<ResolversTypes['InstanceNotesItem']>>, ParentType, ContextType>;
  physicalDescriptions?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  previouslyHeld?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  publication?: Resolver<Maybe<Array<ResolversTypes['InstancePublicationItem']>>, ParentType, ContextType>;
  publicationFrequency?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  publicationPeriod?: Resolver<Maybe<ResolversTypes['InstancePublicationPeriod']>, ParentType, ContextType>;
  publicationRange?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  series?: Resolver<Maybe<Array<ResolversTypes['InstanceSeriesItem']>>, ParentType, ContextType>;
  source?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sourceRecordFormat?: Resolver<Maybe<ResolversTypes['InstanceSourceRecordFormat']>, ParentType, ContextType>;
  staffSuppress?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  statisticalCodeIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  statusId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  statusUpdatedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subjects?: Resolver<Maybe<Array<ResolversTypes['InstanceSubjectsItem']>>, ParentType, ContextType>;
  tags?: Resolver<Maybe<ResolversTypes['Tags']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InstanceAlternativeTitlesItemResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['InstanceAlternativeTitlesItem'] = ResolversParentTypes['InstanceAlternativeTitlesItem']> = ResolversObject<{
  alternativeTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  alternativeTitleTypeId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  authorityId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InstanceClassificationsItemResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['InstanceClassificationsItem'] = ResolversParentTypes['InstanceClassificationsItem']> = ResolversObject<{
  classificationNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  classificationType?: Resolver<Maybe<ResolversTypes['ClassificationType']>, ParentType, ContextType>;
  classificationTypeId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InstanceContributorsItemResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['InstanceContributorsItem'] = ResolversParentTypes['InstanceContributorsItem']> = ResolversObject<{
  authorityId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  contributorNameType?: Resolver<Maybe<ResolversTypes['ContributorNameType']>, ParentType, ContextType>;
  contributorNameTypeId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  contributorTypeId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  contributorTypeText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  primary?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InstanceElectronicAccessItemResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['InstanceElectronicAccessItem'] = ResolversParentTypes['InstanceElectronicAccessItem']> = ResolversObject<{
  linkText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  materialsSpecification?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publicNote?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  relationshipId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InstanceFormatResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['InstanceFormat'] = ResolversParentTypes['InstanceFormat']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  source?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InstanceIdentifiersItemResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['InstanceIdentifiersItem'] = ResolversParentTypes['InstanceIdentifiersItem']> = ResolversObject<{
  identifierTypeId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  identifierTypeObject?: Resolver<Maybe<ResolversTypes['IdentifierType']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InstanceNotesItemResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['InstanceNotesItem'] = ResolversParentTypes['InstanceNotesItem']> = ResolversObject<{
  instanceNoteTypeId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  staffOnly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InstancePublicationItemResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['InstancePublicationItem'] = ResolversParentTypes['InstancePublicationItem']> = ResolversObject<{
  dateOfPublication?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  place?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publisher?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InstancePublicationPeriodResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['InstancePublicationPeriod'] = ResolversParentTypes['InstancePublicationPeriod']> = ResolversObject<{
  end?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  start?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InstanceSeriesItemResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['InstanceSeriesItem'] = ResolversParentTypes['InstanceSeriesItem']> = ResolversObject<{
  authorityId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InstanceSubjectsItemResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['InstanceSubjectsItem'] = ResolversParentTypes['InstanceSubjectsItem']> = ResolversObject<{
  authorityId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  _version?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  accessionNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  administrativeNotes?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  barcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  chronology?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  circulationNotes?: Resolver<Maybe<Array<ResolversTypes['ItemCirculationNotesItem']>>, ParentType, ContextType>;
  copyNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  descriptionOfPieces?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  discoverySuppress?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  effectiveCallNumberComponents?: Resolver<Maybe<ResolversTypes['ItemEffectiveCallNumberComponents']>, ParentType, ContextType>;
  effectiveLocation?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>;
  effectiveLocationId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  effectiveShelvingOrder?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  electronicAccess?: Resolver<Maybe<Array<ResolversTypes['ItemElectronicAccessItem']>>, ParentType, ContextType>;
  enumeration?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  formerIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  holdingsRecord?: Resolver<Maybe<ResolversTypes['HoldingsRecord']>, ParentType, ContextType>;
  holdingsRecord2?: Resolver<Maybe<ResolversTypes['HoldingsRecord']>, ParentType, ContextType>;
  holdingsRecordId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hrid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  inTransitDestinationServicePointId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  instance?: Resolver<Maybe<ResolversTypes['Instance']>, ParentType, ContextType>;
  itemDamagedStatusDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  itemDamagedStatusId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  itemIdentifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  itemLevelCallNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  itemLevelCallNumberPrefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  itemLevelCallNumberSuffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  itemLevelCallNumberTypeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastCheckIn?: Resolver<Maybe<ResolversTypes['ItemLastCheckIn']>, ParentType, ContextType>;
  materialType?: Resolver<Maybe<ResolversTypes['MaterialType']>, ParentType, ContextType>;
  materialTypeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  missingPieces?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  missingPiecesDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<Array<ResolversTypes['ItemNotesItem']>>, ParentType, ContextType>;
  numberOfMissingPieces?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  numberOfPieces?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  permanentLoanTypeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  permanentLocation?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>;
  permanentLocationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  purchaseOrderLineIdentifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  statisticalCodeIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ItemStatus'], ParentType, ContextType>;
  tags?: Resolver<Maybe<ResolversTypes['Tags']>, ParentType, ContextType>;
  temporaryLoanTypeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  temporaryLocation?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>;
  temporaryLocationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  volume?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  yearCaption?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ItemCirculationNotesItemResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['ItemCirculationNotesItem'] = ResolversParentTypes['ItemCirculationNotesItem']> = ResolversObject<{
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  noteType?: Resolver<Maybe<ResolversTypes['ItemCirculationNotesItemNoteType']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['ItemCirculationNotesItemSource']>, ParentType, ContextType>;
  staffOnly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ItemCirculationNotesItemSourceResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['ItemCirculationNotesItemSource'] = ResolversParentTypes['ItemCirculationNotesItemSource']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  personal?: Resolver<Maybe<ResolversTypes['ItemCirculationNotesItemSourcePersonal']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ItemCirculationNotesItemSourcePersonalResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['ItemCirculationNotesItemSourcePersonal'] = ResolversParentTypes['ItemCirculationNotesItemSourcePersonal']> = ResolversObject<{
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ItemEffectiveCallNumberComponentsResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['ItemEffectiveCallNumberComponents'] = ResolversParentTypes['ItemEffectiveCallNumberComponents']> = ResolversObject<{
  callNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  prefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  typeId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ItemElectronicAccessItemResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['ItemElectronicAccessItem'] = ResolversParentTypes['ItemElectronicAccessItem']> = ResolversObject<{
  linkText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  materialsSpecification?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publicNote?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  relationshipId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ItemLastCheckInResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['ItemLastCheckIn'] = ResolversParentTypes['ItemLastCheckIn']> = ResolversObject<{
  dateTime?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  servicePointId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  staffMemberId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ItemNoteTypeResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['ItemNoteType'] = ResolversParentTypes['ItemNoteType']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  source?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ItemNotesItemResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['ItemNotesItem'] = ResolversParentTypes['ItemNotesItem']> = ResolversObject<{
  itemNoteType?: Resolver<Maybe<ResolversTypes['ItemNoteType']>, ParentType, ContextType>;
  itemNoteTypeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  staffOnly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ItemStatusResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['ItemStatus'] = ResolversParentTypes['ItemStatus']> = ResolversObject<{
  date?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  action?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  actionComment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  borrower?: Resolver<Maybe<ResolversTypes['LoanBorrower']>, ParentType, ContextType>;
  checkinServicePoint?: Resolver<Maybe<ResolversTypes['ServicePoint']>, ParentType, ContextType>;
  checkinServicePointId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  checkoutServicePoint?: Resolver<Maybe<ResolversTypes['ServicePoint']>, ParentType, ContextType>;
  checkoutServicePointId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  declaredLostDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  dueDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  dueDateChangedByHold?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  dueDateChangedByNearExpireUser?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  dueDateChangedByRecall?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  feesAndFines?: Resolver<Maybe<ResolversTypes['LoanFeesAndFines']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  item?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType>;
  itemEffectiveLocationAtCheckOut?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>;
  itemEffectiveLocationIdAtCheckOut?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  loanDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  loanPolicy?: Resolver<Maybe<ResolversTypes['LoanPolicy']>, ParentType, ContextType>;
  loanPolicyId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  lostItemPolicy?: Resolver<Maybe<ResolversTypes['LoanLostItemPolicy']>, ParentType, ContextType>;
  lostItemPolicyId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  overdueFinePolicy?: Resolver<Maybe<ResolversTypes['LoanOverdueFinePolicy']>, ParentType, ContextType>;
  overdueFinePolicyId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  patronGroupAtCheckout?: Resolver<Maybe<ResolversTypes['LoanPatronGroupAtCheckout']>, ParentType, ContextType>;
  proxyUserId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  renewalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  returnDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['LoanStatus']>, ParentType, ContextType>;
  systemReturnDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoanBorrowerResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['LoanBorrower'] = ResolversParentTypes['LoanBorrower']> = ResolversObject<{
  barcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  middleName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoanFeesAndFinesResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['LoanFeesAndFines'] = ResolversParentTypes['LoanFeesAndFines']> = ResolversObject<{
  amountRemainingToPay?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoanLostItemPolicyResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['LoanLostItemPolicy'] = ResolversParentTypes['LoanLostItemPolicy']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoanOverdueFinePolicyResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['LoanOverdueFinePolicy'] = ResolversParentTypes['LoanOverdueFinePolicy']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoanPatronGroupAtCheckoutResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['LoanPatronGroupAtCheckout'] = ResolversParentTypes['LoanPatronGroupAtCheckout']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoanPolicyResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['LoanPolicy'] = ResolversParentTypes['LoanPolicy']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  loanable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  loansPolicy?: Resolver<Maybe<ResolversTypes['LoanPolicyLoansPolicy']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  renewable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  renewalsPolicy?: Resolver<Maybe<ResolversTypes['LoanPolicyRenewalsPolicy']>, ParentType, ContextType>;
  requestManagement?: Resolver<Maybe<ResolversTypes['LoanPolicyRequestManagement']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoanPolicyLoansPolicyResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['LoanPolicyLoansPolicy'] = ResolversParentTypes['LoanPolicyLoansPolicy']> = ResolversObject<{
  closedLibraryDueDateManagementId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fixedDueDateSchedule?: Resolver<Maybe<ResolversTypes['FixedDueDateSchedule']>, ParentType, ContextType>;
  fixedDueDateScheduleId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gracePeriod?: Resolver<Maybe<ResolversTypes['Period']>, ParentType, ContextType>;
  itemLimit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  openingTimeOffset?: Resolver<Maybe<ResolversTypes['Period']>, ParentType, ContextType>;
  period?: Resolver<Maybe<ResolversTypes['Period']>, ParentType, ContextType>;
  profileId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoanPolicyRenewalsPolicyResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['LoanPolicyRenewalsPolicy'] = ResolversParentTypes['LoanPolicyRenewalsPolicy']> = ResolversObject<{
  alternateFixedDueDateScheduleId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  differentPeriod?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  numberAllowed?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  period?: Resolver<Maybe<ResolversTypes['Period']>, ParentType, ContextType>;
  renewFromId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unlimited?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoanPolicyRequestManagementResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['LoanPolicyRequestManagement'] = ResolversParentTypes['LoanPolicyRequestManagement']> = ResolversObject<{
  holds?: Resolver<Maybe<ResolversTypes['LoanPolicyRequestManagementHolds']>, ParentType, ContextType>;
  pages?: Resolver<Maybe<ResolversTypes['LoanPolicyRequestManagementPages']>, ParentType, ContextType>;
  recalls?: Resolver<Maybe<ResolversTypes['LoanPolicyRequestManagementRecalls']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoanPolicyRequestManagementHoldsResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['LoanPolicyRequestManagementHolds'] = ResolversParentTypes['LoanPolicyRequestManagementHolds']> = ResolversObject<{
  alternateCheckoutLoanPeriod?: Resolver<Maybe<ResolversTypes['Period']>, ParentType, ContextType>;
  alternateRenewalLoanPeriod?: Resolver<Maybe<ResolversTypes['Period']>, ParentType, ContextType>;
  renewItemsWithRequest?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoanPolicyRequestManagementPagesResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['LoanPolicyRequestManagementPages'] = ResolversParentTypes['LoanPolicyRequestManagementPages']> = ResolversObject<{
  alternateCheckoutLoanPeriod?: Resolver<Maybe<ResolversTypes['Period']>, ParentType, ContextType>;
  alternateRenewalLoanPeriod?: Resolver<Maybe<ResolversTypes['Period']>, ParentType, ContextType>;
  renewItemsWithRequest?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoanPolicyRequestManagementRecallsResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['LoanPolicyRequestManagementRecalls'] = ResolversParentTypes['LoanPolicyRequestManagementRecalls']> = ResolversObject<{
  allowRecallsToExtendOverdueLoans?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  alternateGracePeriod?: Resolver<Maybe<ResolversTypes['Period']>, ParentType, ContextType>;
  alternateRecallReturnInterval?: Resolver<Maybe<ResolversTypes['Period']>, ParentType, ContextType>;
  minimumGuaranteedLoanPeriod?: Resolver<Maybe<ResolversTypes['Period']>, ParentType, ContextType>;
  recallReturnInterval?: Resolver<Maybe<ResolversTypes['Period']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoanStatusResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['LoanStatus'] = ResolversParentTypes['LoanStatus']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LocationResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location']> = ResolversObject<{
  campus?: Resolver<Maybe<ResolversTypes['Campus']>, ParentType, ContextType>;
  campusId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['LocationDetails']>, ParentType, ContextType>;
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
  servicePointIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  servicePoints?: Resolver<Maybe<Array<ResolversTypes['ServicePoint']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LocationDetailsResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['LocationDetails'] = ResolversParentTypes['LocationDetails']> = ResolversObject<{
  _typesWithoutFieldsAreNotAllowed_?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ManualBlockResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['ManualBlock'] = ResolversParentTypes['ManualBlock']> = ResolversObject<{
  borrowing?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  desc?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  expirationDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  patronMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  renewals?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  requests?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  staffInformation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MaterialTypeResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['MaterialType'] = ResolversParentTypes['MaterialType']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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

export type MoneyResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Money'] = ResolversParentTypes['Money']> = ResolversObject<{
  amount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  isoCurrencyCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PatronResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Patron'] = ResolversParentTypes['Patron']> = ResolversObject<{
  accounts?: Resolver<Array<ResolversTypes['Account']>, ParentType, ContextType>;
  blocks?: Resolver<Array<ResolversTypes['Block']>, ParentType, ContextType>;
  charges?: Resolver<Array<ResolversTypes['PatronCharge']>, ParentType, ContextType>;
  holds?: Resolver<Array<ResolversTypes['Hold']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  loans?: Resolver<Array<ResolversTypes['PatronLoan']>, ParentType, ContextType>;
  manualBlocks?: Resolver<Array<ResolversTypes['ManualBlock']>, ParentType, ContextType>;
  totalCharges?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  totalChargesCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalHolds?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalLoans?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PatronBlockConditionResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['PatronBlockCondition'] = ResolversParentTypes['PatronBlockCondition']> = ResolversObject<{
  blockBorrowing?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  blockRenewals?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  blockRequests?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  valueType?: Resolver<ResolversTypes['PatronBlockConditionValueType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PatronBlockLimitResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['PatronBlockLimit'] = ResolversParentTypes['PatronBlockLimit']> = ResolversObject<{
  condition?: Resolver<Maybe<ResolversTypes['PatronBlockCondition']>, ParentType, ContextType>;
  conditionId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  patronGroupId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PatronChargeResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['PatronCharge'] = ResolversParentTypes['PatronCharge']> = ResolversObject<{
  accrualDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  chargeAmount?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  feeFine?: Resolver<Maybe<ResolversTypes['FeeFine']>, ParentType, ContextType>;
  feeFineId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  item?: Resolver<Maybe<ResolversTypes['PatronItem']>, ParentType, ContextType>;
  reason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PatronGroupResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['PatronGroup'] = ResolversParentTypes['PatronGroup']> = ResolversObject<{
  desc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expirationOffsetInDays?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  group?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  limits?: Resolver<Maybe<Array<Maybe<ResolversTypes['PatronBlockLimit']>>>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PatronItemResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['PatronItem'] = ResolversParentTypes['PatronItem']> = ResolversObject<{
  author?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  instance?: Resolver<Maybe<ResolversTypes['Instance']>, ParentType, ContextType>;
  instanceId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  isbn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  item?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType>;
  itemId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PatronLoanResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['PatronLoan'] = ResolversParentTypes['PatronLoan']> = ResolversObject<{
  details?: Resolver<ResolversTypes['Loan'], ParentType, ContextType>;
  dueDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  item?: Resolver<ResolversTypes['PatronItem'], ParentType, ContextType>;
  loanDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  overdue?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PeriodResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Period'] = ResolversParentTypes['Period']> = ResolversObject<{
  duration?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  intervalId?: Resolver<ResolversTypes['PeriodIntervalId'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProxyForResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['ProxyFor'] = ResolversParentTypes['ProxyFor']> = ResolversObject<{
  accrueTo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  expirationDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  notificationsTo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  proxyUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  proxyUserId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  requestForSponsor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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

export type RequestPolicyResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['RequestPolicy'] = ResolversParentTypes['RequestPolicy']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  requestTypes?: Resolver<Maybe<Array<ResolversTypes['RequestType']>>, ParentType, ContextType>;
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
  holdShelfClosedLibraryDateManagement?: Resolver<Maybe<ResolversTypes['ServicepointHoldShelfClosedLibraryDateManagement']>, ParentType, ContextType>;
  holdShelfExpiryPeriod?: Resolver<Maybe<ResolversTypes['TimePeriod']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pickupLocation?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  shelvingLagTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  staffSlips?: Resolver<Maybe<Array<ResolversTypes['ServicepointStaffSlipsItem']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ServicepointStaffSlipsItemResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['ServicepointStaffSlipsItem'] = ResolversParentTypes['ServicepointStaffSlipsItem']> = ResolversObject<{
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  printByDefault?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TagsResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Tags'] = ResolversParentTypes['Tags']> = ResolversObject<{
  tagList?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TimePeriodResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['TimePeriod'] = ResolversParentTypes['TimePeriod']> = ResolversObject<{
  duration?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  intervalId?: Resolver<ResolversTypes['TimePeriodIntervalId'], ParentType, ContextType>;
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
  createdDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['UserdataCustomFields']>, ParentType, ContextType>;
  department?: Resolver<Maybe<Array<Maybe<ResolversTypes['UUID']>>>, ParentType, ContextType>;
  departments?: Resolver<Maybe<Array<ResolversTypes['UUID']>>, ParentType, ContextType>;
  enrollmentDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  expirationDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  externalSystemId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manualBlocks?: Resolver<Maybe<Array<Maybe<ResolversTypes['ManualBlock']>>>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['UserdataMeta']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  patronGroup?: Resolver<Maybe<ResolversTypes['PatronGroup']>, ParentType, ContextType>;
  patronGroupId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  personal?: Resolver<Maybe<ResolversTypes['UserdataPersonal']>, ParentType, ContextType>;
  proxiesFor?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProxyFor']>>>, ParentType, ContextType>;
  proxiesOf?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProxyFor']>>>, ParentType, ContextType>;
  proxyFor?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  tags?: Resolver<Maybe<ResolversTypes['Tags']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserdataCustomFieldsResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['UserdataCustomFields'] = ResolversParentTypes['UserdataCustomFields']> = ResolversObject<{
  _typesWithoutFieldsAreNotAllowed_?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserdataMetaResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['UserdataMeta'] = ResolversParentTypes['UserdataMeta']> = ResolversObject<{
  _typesWithoutFieldsAreNotAllowed_?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserdataPersonalResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['UserdataPersonal'] = ResolversParentTypes['UserdataPersonal']> = ResolversObject<{
  addresses?: Resolver<Maybe<Array<ResolversTypes['UserdataPersonalAddressesItem']>>, ParentType, ContextType>;
  dateOfBirth?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  middleName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mobilePhone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  preferredContactTypeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  preferredFirstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserdataPersonalAddressesItemResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['UserdataPersonalAddressesItem'] = ResolversParentTypes['UserdataPersonalAddressesItem']> = ResolversObject<{
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

export type Resolvers<ContextType = FolioContext> = ResolversObject<{
  Account?: AccountResolvers<ContextType>;
  AccountdataItemStatus?: AccountdataItemStatusResolvers<ContextType>;
  AccountdataPaymentStatus?: AccountdataPaymentStatusResolvers<ContextType>;
  AccountdataStatus?: AccountdataStatusResolvers<ContextType>;
  Block?: BlockResolvers<ContextType>;
  Campus?: CampusResolvers<ContextType>;
  ClassificationType?: ClassificationTypeResolvers<ContextType>;
  ContributorNameType?: ContributorNameTypeResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  FeeFine?: FeeFineResolvers<ContextType>;
  FixedDueDateSchedule?: FixedDueDateScheduleResolvers<ContextType>;
  Hold?: HoldResolvers<ContextType>;
  HoldingsNoteType?: HoldingsNoteTypeResolvers<ContextType>;
  HoldingsRecord?: HoldingsRecordResolvers<ContextType>;
  HoldingsrecordElectronicAccessItem?: HoldingsrecordElectronicAccessItemResolvers<ContextType>;
  HoldingsrecordHoldingsStatementsForIndexesItem?: HoldingsrecordHoldingsStatementsForIndexesItemResolvers<ContextType>;
  HoldingsrecordHoldingsStatementsForSupplementsItem?: HoldingsrecordHoldingsStatementsForSupplementsItemResolvers<ContextType>;
  HoldingsrecordHoldingsStatementsItem?: HoldingsrecordHoldingsStatementsItemResolvers<ContextType>;
  HoldingsrecordNotesItem?: HoldingsrecordNotesItemResolvers<ContextType>;
  HoldingsrecordReceivingHistory?: HoldingsrecordReceivingHistoryResolvers<ContextType>;
  HoldingsrecordReceivingHistoryEntriesItem?: HoldingsrecordReceivingHistoryEntriesItemResolvers<ContextType>;
  ILLpolicy?: IlLpolicyResolvers<ContextType>;
  IdentifierType?: IdentifierTypeResolvers<ContextType>;
  Instance?: InstanceResolvers<ContextType>;
  InstanceAlternativeTitlesItem?: InstanceAlternativeTitlesItemResolvers<ContextType>;
  InstanceClassificationsItem?: InstanceClassificationsItemResolvers<ContextType>;
  InstanceContributorsItem?: InstanceContributorsItemResolvers<ContextType>;
  InstanceElectronicAccessItem?: InstanceElectronicAccessItemResolvers<ContextType>;
  InstanceFormat?: InstanceFormatResolvers<ContextType>;
  InstanceIdentifiersItem?: InstanceIdentifiersItemResolvers<ContextType>;
  InstanceNotesItem?: InstanceNotesItemResolvers<ContextType>;
  InstancePublicationItem?: InstancePublicationItemResolvers<ContextType>;
  InstancePublicationPeriod?: InstancePublicationPeriodResolvers<ContextType>;
  InstanceSeriesItem?: InstanceSeriesItemResolvers<ContextType>;
  InstanceSubjectsItem?: InstanceSubjectsItemResolvers<ContextType>;
  Institution?: InstitutionResolvers<ContextType>;
  Item?: ItemResolvers<ContextType>;
  ItemCirculationNotesItem?: ItemCirculationNotesItemResolvers<ContextType>;
  ItemCirculationNotesItemSource?: ItemCirculationNotesItemSourceResolvers<ContextType>;
  ItemCirculationNotesItemSourcePersonal?: ItemCirculationNotesItemSourcePersonalResolvers<ContextType>;
  ItemEffectiveCallNumberComponents?: ItemEffectiveCallNumberComponentsResolvers<ContextType>;
  ItemElectronicAccessItem?: ItemElectronicAccessItemResolvers<ContextType>;
  ItemLastCheckIn?: ItemLastCheckInResolvers<ContextType>;
  ItemNoteType?: ItemNoteTypeResolvers<ContextType>;
  ItemNotesItem?: ItemNotesItemResolvers<ContextType>;
  ItemStatus?: ItemStatusResolvers<ContextType>;
  Library?: LibraryResolvers<ContextType>;
  Loan?: LoanResolvers<ContextType>;
  LoanBorrower?: LoanBorrowerResolvers<ContextType>;
  LoanFeesAndFines?: LoanFeesAndFinesResolvers<ContextType>;
  LoanLostItemPolicy?: LoanLostItemPolicyResolvers<ContextType>;
  LoanOverdueFinePolicy?: LoanOverdueFinePolicyResolvers<ContextType>;
  LoanPatronGroupAtCheckout?: LoanPatronGroupAtCheckoutResolvers<ContextType>;
  LoanPolicy?: LoanPolicyResolvers<ContextType>;
  LoanPolicyLoansPolicy?: LoanPolicyLoansPolicyResolvers<ContextType>;
  LoanPolicyRenewalsPolicy?: LoanPolicyRenewalsPolicyResolvers<ContextType>;
  LoanPolicyRequestManagement?: LoanPolicyRequestManagementResolvers<ContextType>;
  LoanPolicyRequestManagementHolds?: LoanPolicyRequestManagementHoldsResolvers<ContextType>;
  LoanPolicyRequestManagementPages?: LoanPolicyRequestManagementPagesResolvers<ContextType>;
  LoanPolicyRequestManagementRecalls?: LoanPolicyRequestManagementRecallsResolvers<ContextType>;
  LoanStatus?: LoanStatusResolvers<ContextType>;
  Location?: LocationResolvers<ContextType>;
  LocationDetails?: LocationDetailsResolvers<ContextType>;
  ManualBlock?: ManualBlockResolvers<ContextType>;
  MaterialType?: MaterialTypeResolvers<ContextType>;
  Metadata?: MetadataResolvers<ContextType>;
  Money?: MoneyResolvers<ContextType>;
  Patron?: PatronResolvers<ContextType>;
  PatronBlockCondition?: PatronBlockConditionResolvers<ContextType>;
  PatronBlockLimit?: PatronBlockLimitResolvers<ContextType>;
  PatronCharge?: PatronChargeResolvers<ContextType>;
  PatronGroup?: PatronGroupResolvers<ContextType>;
  PatronItem?: PatronItemResolvers<ContextType>;
  PatronLoan?: PatronLoanResolvers<ContextType>;
  Period?: PeriodResolvers<ContextType>;
  ProxyFor?: ProxyForResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RequestPolicy?: RequestPolicyResolvers<ContextType>;
  Schedule?: ScheduleResolvers<ContextType>;
  ServicePoint?: ServicePointResolvers<ContextType>;
  ServicepointStaffSlipsItem?: ServicepointStaffSlipsItemResolvers<ContextType>;
  Tags?: TagsResolvers<ContextType>;
  TimePeriod?: TimePeriodResolvers<ContextType>;
  UUID?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  UserdataCustomFields?: UserdataCustomFieldsResolvers<ContextType>;
  UserdataMeta?: UserdataMetaResolvers<ContextType>;
  UserdataPersonal?: UserdataPersonalResolvers<ContextType>;
  UserdataPersonalAddressesItem?: UserdataPersonalAddressesItemResolvers<ContextType>;
}>;

