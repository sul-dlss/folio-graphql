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

/** A call number type */
export type AlternativeTitleType = {
  __typename?: 'AlternativeTitleType';
  /** unique ID of the alternative title type; a UUID */
  id?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Metadata>;
  /** name of the alternative title type */
  name: Scalars['String']['output'];
  /** label indicating where the alternative title type entry originates from, i.e. 'folio' or 'local' */
  source: Scalars['String']['output'];
};

/** An authority record */
export type Authority = {
  __typename?: 'Authority';
  /** Record version for optimistic locking */
  _version?: Maybe<Scalars['Int']['output']>;
  /** Heading corporate name */
  corporateName?: Maybe<Scalars['String']['output']>;
  /** Heading corporate name title */
  corporateNameTitle?: Maybe<Scalars['String']['output']>;
  /** Heading genre/form term */
  genreTerm?: Maybe<Scalars['String']['output']>;
  /** Heading geographic name */
  geographicName?: Maybe<Scalars['String']['output']>;
  /** Authority UUID */
  id?: Maybe<Scalars['UUID']['output']>;
  /** An extensible set of name-value pairs of identifiers associated with the resource */
  identifiers?: Maybe<Array<AuthorityIdentifiersItem>>;
  /** Heading meeting name */
  meetingName?: Maybe<Scalars['String']['output']>;
  /** Heading meeting name title */
  meetingNameTitle?: Maybe<Scalars['String']['output']>;
  /** Creater, updater, creation date, last updated date */
  metadata?: Maybe<Metadata>;
  /** Authority Natural ID */
  naturalId?: Maybe<Scalars['String']['output']>;
  /** Notes (e.g. nonpublic general note) */
  notes?: Maybe<Array<AuthorityNotesItem>>;
  /** Heading personal name */
  personalName?: Maybe<Scalars['String']['output']>;
  /** Heading personal name title */
  personalNameTitle?: Maybe<Scalars['String']['output']>;
  /** See also from tracing corporate name */
  saftCorporateName?: Maybe<Array<Scalars['String']['output']>>;
  /** See also from tracing corporate name title */
  saftCorporateNameTitle?: Maybe<Array<Scalars['String']['output']>>;
  /** See also from tracing genre/form term */
  saftGenreTerm?: Maybe<Array<Scalars['String']['output']>>;
  /** See also from tracing geographic name */
  saftGeographicName?: Maybe<Array<Scalars['String']['output']>>;
  /** See also from tracing meeting name */
  saftMeetingName?: Maybe<Array<Scalars['String']['output']>>;
  /** See also from tracing meeting name title */
  saftMeetingNameTitle?: Maybe<Array<Scalars['String']['output']>>;
  /** See also from tracing personal name */
  saftPersonalName?: Maybe<Array<Scalars['String']['output']>>;
  /** See also from tracing personal name title */
  saftPersonalNameTitle?: Maybe<Array<Scalars['String']['output']>>;
  /** See also from tracing topical term */
  saftTopicalTerm?: Maybe<Array<Scalars['String']['output']>>;
  /** See also from tracing uniform title */
  saftUniformTitle?: Maybe<Array<Scalars['String']['output']>>;
  /** See from tracing corporate name */
  sftCorporateName?: Maybe<Array<Scalars['String']['output']>>;
  /** See from tracing corporate name title */
  sftCorporateNameTitle?: Maybe<Array<Scalars['String']['output']>>;
  /** See from tracing genre/form term */
  sftGenreTerm?: Maybe<Array<Scalars['String']['output']>>;
  /** See from tracing geographic name */
  sftGeographicName?: Maybe<Array<Scalars['String']['output']>>;
  /** See from tracing meeting name */
  sftMeetingName?: Maybe<Array<Scalars['String']['output']>>;
  /** See from tracing meeting name title */
  sftMeetingNameTitle?: Maybe<Array<Scalars['String']['output']>>;
  /** See from tracing personal name */
  sftPersonalName?: Maybe<Array<Scalars['String']['output']>>;
  /** See from tracing personal name title */
  sftPersonalNameTitle?: Maybe<Array<Scalars['String']['output']>>;
  /** See from tracing topical term */
  sftTopicalTerm?: Maybe<Array<Scalars['String']['output']>>;
  /** See from tracing uniform title */
  sftUniformTitle?: Maybe<Array<Scalars['String']['output']>>;
  /** The metadata source of the underlying record to the authority record. (e.g. FOLIO if it's a record created in Inventory;  MARC if it's a MARC record created in data-import) */
  source?: Maybe<AuthoritySource>;
  /** Authority source file id; UUID */
  sourceFileId?: Maybe<Scalars['UUID']['output']>;
  /** Children's subject headings */
  subjectHeadings?: Maybe<Scalars['String']['output']>;
  /** Heading topical term */
  topicalTerm?: Maybe<Scalars['String']['output']>;
  /** Heading uniform title */
  uniformTitle?: Maybe<Scalars['String']['output']>;
};

export type AuthorityIdentifiersItem = {
  __typename?: 'AuthorityIdentifiersItem';
  /** Resource identifier type (e.g. Control number, LCCN, Other standard identifier, System control number) */
  identifierTypeId: Scalars['UUID']['output'];
  /** Resource identifier value */
  value: Scalars['String']['output'];
};

export type AuthorityNotesItem = {
  __typename?: 'AuthorityNotesItem';
  /** Text content of the note */
  note: Scalars['String']['output'];
  /** ID of the type of note */
  noteTypeId: Scalars['UUID']['output'];
};

export enum AuthoritySource {
  Folio = 'FOLIO',
  Marc = 'MARC'
}

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

/** A call number type */
export type CallNumberType = {
  __typename?: 'CallNumberType';
  /** unique ID of the call number type; a UUID */
  id?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Metadata>;
  /** name of the call number type */
  name: Scalars['String']['output'];
  /** label indicating where the call number type entry originates from, i.e. 'folio' or 'local' */
  source: Scalars['String']['output'];
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

/** Charge amount for item */
export type Charge = {
  __typename?: 'Charge';
  /** Charge amount for item may be Actual cost or an amount */
  amount?: Maybe<Scalars['Float']['output']>;
  /** Charge type amount for item may be Actual cost or an amount */
  chargeType?: Maybe<Scalars['String']['output']>;
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

/** A contributor type */
export type ContributorType = {
  __typename?: 'ContributorType';
  /** distinct code for the contributor type */
  code: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Metadata>;
  /** label for the contributor type */
  name: Scalars['String']['output'];
  /** origin of the contributor type record */
  source: Scalars['String']['output'];
};

export type CqlParams = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  sortby?: InputMaybe<Scalars['String']['input']>;
};

/** A qualifier indicating the type of relationship that an electronic resource at a given URL has to an Instance */
export type ElectronicAccessRelationship = {
  __typename?: 'ElectronicAccessRelationship';
  id?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Metadata>;
  /** label for the type of relationship between a URL and an Instance */
  name: Scalars['String']['output'];
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
  details?: Maybe<Request>;
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
  queueTotalLength?: Maybe<Scalars['Int']['output']>;
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
  callNumberType?: Maybe<CallNumberType>;
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
  holdingsType?: Maybe<HoldingsType>;
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
  source?: Maybe<HoldingsRecordsSource>;
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

/** A holdings records source */
export type HoldingsRecordsSource = {
  __typename?: 'HoldingsRecordsSource';
  /** The unique ID of the holdings records source; UUID */
  id?: Maybe<Scalars['UUID']['output']>;
  metadata?: Maybe<Metadata>;
  /** Name of the holdings records source */
  name: Scalars['String']['output'];
  /** The holdings records source */
  source?: Maybe<HoldingsrecordssourceSource>;
};

/** A holdings type */
export type HoldingsType = {
  __typename?: 'HoldingsType';
  /** unique ID of the holdings type; a UUID */
  id?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Metadata>;
  /** name of the holdings type */
  name: Scalars['String']['output'];
  /** label indicating where the holdings type entry originates from, i.e. 'folio' or 'local' */
  source: Scalars['String']['output'];
};

export type HoldingsrecordElectronicAccessItem = {
  __typename?: 'HoldingsrecordElectronicAccessItem';
  /** the value of the MARC tag field 856 2nd indicator, where the values are: no information provided, resource, version of resource, related resource, no display constant generated */
  linkText?: Maybe<Scalars['String']['output']>;
  /** materials specified is used to specify to what portion or aspect of the resource the electronic location and access information applies (e.g. a portion or subset of the item is electronic, or a related electronic resource is being linked to the record) */
  materialsSpecification?: Maybe<Scalars['String']['output']>;
  /** URL public note to be displayed in the discovery */
  publicNote?: Maybe<Scalars['String']['output']>;
  relationship?: Maybe<ElectronicAccessRelationship>;
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

export enum HoldingsrecordssourceSource {
  Folio = 'folio',
  Local = 'local'
}

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
  instanceType?: Maybe<InstanceType>;
  /** UUID of the unique term for the resource type whether it's from the RDA content term list of locally defined */
  instanceTypeId: Scalars['UUID']['output'];
  items?: Maybe<Array<Maybe<Item>>>;
  /** The set of languages used by the resource */
  languages?: Maybe<Array<Scalars['String']['output']>>;
  /** A unique instance identifier matching a client-side bibliographic record identification scheme, in particular for a scenario where multiple separate catalogs with no shared record identifiers contribute to the same Instance in Inventory. A match key is typically generated from select, normalized pieces of metadata in bibliographic records */
  matchKey?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Metadata>;
  modeOfIssuance?: Maybe<ModeOfIssuance>;
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
  status?: Maybe<InstanceStatus>;
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
  alternativeTitleType?: Maybe<AlternativeTitleType>;
  /** UUID for an alternative title qualifier */
  alternativeTitleTypeId?: Maybe<Scalars['UUID']['output']>;
  authority?: Maybe<Authority>;
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
  authority?: Maybe<Authority>;
  /** UUID of authority record that controls the contributor */
  authorityId?: Maybe<Scalars['UUID']['output']>;
  /** Dereferenced contributor-name type */
  contributorNameType?: Maybe<ContributorNameType>;
  /** UUID of contributor name type term defined by the MARC code list for relators */
  contributorNameTypeId: Scalars['UUID']['output'];
  contributorType?: Maybe<ContributorType>;
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
  relationship?: Maybe<ElectronicAccessRelationship>;
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

/** An Instance note type */
export type InstanceNoteType = {
  __typename?: 'InstanceNoteType';
  /** unique ID of the Instance note type; a UUID */
  id?: Maybe<Scalars['UUID']['output']>;
  metadata?: Maybe<Metadata>;
  /** name of the Instance note type */
  name: Scalars['String']['output'];
  /** label indicating where the Instance note type entry originates from, i.e. 'folio' or 'local' */
  source: Scalars['String']['output'];
};

export type InstanceNotesItem = {
  __typename?: 'InstanceNotesItem';
  instanceNoteType?: Maybe<InstanceNoteType>;
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
  authority?: Maybe<Authority>;
  /** UUID of authority record that controls an series title */
  authorityId?: Maybe<Scalars['UUID']['output']>;
  /** Series title value */
  value: Scalars['String']['output'];
};

export enum InstanceSourceRecordFormat {
  MarcJson = 'MARC_JSON'
}

/** Cataloging status for Instance records */
export type InstanceStatus = {
  __typename?: 'InstanceStatus';
  /** distinct code for an instance status */
  code: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Metadata>;
  /** label for the instance status */
  name: Scalars['String']['output'];
  /** origin of an instance status record */
  source: Scalars['String']['output'];
};

export type InstanceSubjectsItem = {
  __typename?: 'InstanceSubjectsItem';
  authority?: Maybe<Authority>;
  /** UUID of authority record that controls a subject heading */
  authorityId?: Maybe<Scalars['UUID']['output']>;
  /** Subject heading value */
  value: Scalars['String']['output'];
};

/** The resource type of an Instance */
export type InstanceType = {
  __typename?: 'InstanceType';
  /** distinct code for the resource type */
  code: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Metadata>;
  /** label for the resource type */
  name: Scalars['String']['output'];
  /** origin of a resource type record */
  source: Scalars['String']['output'];
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

/** Time interval */
export type Interval = {
  __typename?: 'Interval';
  /** Interval duration, number of time units */
  duration: Scalars['Int']['output'];
  /** Unit of time */
  intervalId: IntervalIntervalId;
};

export enum IntervalIntervalId {
  Days = 'Days',
  Hours = 'Hours',
  Minutes = 'Minutes',
  Months = 'Months',
  Weeks = 'Weeks',
  Years = 'Years'
}

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
  inTransitDestinationServicePoint?: Maybe<ServicePoint>;
  /** Service point an item is intended to be transited to (should only be present when in transit) */
  inTransitDestinationServicePointId?: Maybe<Scalars['UUID']['output']>;
  instance?: Maybe<Instance>;
  itemDamagedStatus?: Maybe<ItemDamagedStatus>;
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
  itemLevelCallNumberType?: Maybe<CallNumberType>;
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
  permanentLoanType?: Maybe<LoanType>;
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
  temporaryLoanType?: Maybe<LoanType>;
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

/** An item damage status */
export type ItemDamagedStatus = {
  __typename?: 'ItemDamagedStatus';
  /** unique ID of the item damage status; a UUID */
  id?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Metadata>;
  /** name of the item damage status */
  name: Scalars['String']['output'];
  /** label indicating where the item damage status entry originates from, i.e. 'folio' or 'local' */
  source: Scalars['String']['output'];
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
  type?: Maybe<CallNumberType>;
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
  proxyUser?: Maybe<User>;
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
  user?: Maybe<User>;
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
  alternateFixedDueDateSchedule?: Maybe<FixedDueDateSchedule>;
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

/** A loan type */
export type LoanType = {
  __typename?: 'LoanType';
  id?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Metadata>;
  /** label for the loan type */
  name: Scalars['String']['output'];
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
  /** Site value passed to Aeon to preselect delivery location for material paged from this location */
  aeonSite?: Maybe<Scalars['String']['output']>;
  /** Lookup key for user groups who mediate material paged from this location */
  mediatedPagingGroupKey?: Maybe<Scalars['String']['output']>;
  /** Comma-separated IDs of valid pickup locations for material paged from the location */
  pageServicePointIds?: Maybe<Scalars['String']['output']>;
  /** Valid pickup locations for material paged from this location */
  pageServicePoints?: Maybe<Array<Maybe<ServicePoint>>>;
};

/** CRUD to lost item fee policies */
export type LostItemFeePolicy = {
  __typename?: 'LostItemFeePolicy';
  /** Option to charge amount for item */
  chargeAmountItem?: Maybe<Charge>;
  /** A flag to determine charge lost item processing fee if item declared lost by patron must be Yes or No, with default set to Yes */
  chargeAmountItemPatron?: Maybe<Scalars['Boolean']['output']>;
  /** A flag to determine charge lost item processing fee if item aged to lost by system must be Yes or No, with default set to Yes */
  chargeAmountItemSystem?: Maybe<Scalars['Boolean']['output']>;
  /** Lost item fee policy description */
  description?: Maybe<Scalars['String']['output']>;
  /** Fees/fines shall be refunded if a lost item is returned more than entered, must be 0 or > 0 and, if > 0 must have interval selected */
  feesFinesShallRefunded?: Maybe<Period>;
  /** Lost item fee policy id, UUID */
  id?: Maybe<Scalars['UUID']['output']>;
  /** Items aged to lost after overdue entered, must be 0 or > 0 and, if > 0 must have interval selected */
  itemAgedLostOverdue?: Maybe<Period>;
  /** For items not charged a fee/fine, close the loan after entered, must be 0 or > 0 and, if > 0 must have interval selected */
  lostItemChargeFeeFine?: Maybe<Period>;
  /** Lost item processing fee, must be = 0 or > 0 */
  lostItemProcessingFee?: Maybe<Scalars['Float']['output']>;
  /** Option to lost item returned may be Charge overdues based on returned date up to maximum (if applicable) or Remove overdue fines, with a default of _Charge overdues based on returned date up to maximum (if applicable) */
  lostItemReturned?: Maybe<Scalars['String']['output']>;
  /** Metadata about creation to lost item fee policy, provided by the server */
  metadata?: Maybe<Metadata>;
  /** Lost item fee policy name, is a required field */
  name: Scalars['String']['output'];
  /** Patron billed after aged to lost entered, must be 0 or > 0 and, if > 0 must have interval selected */
  patronBilledAfterAgedLost?: Maybe<Period>;
  /** Patron billed after a recalled item aged to lost entered, must be 0 or > 0 and, if > 0 must have interval selected */
  patronBilledAfterRecalledItemAgedLost?: Maybe<Period>;
  /** Recalled items aged to lost after overdue entered, must be 0 or > 0 and, if > 0 must have interval selected */
  recalledItemAgedLostOverdue?: Maybe<Period>;
  /** A flag to determine if lost item replaced, remove lost item processing fee */
  replacedLostItemProcessingFee?: Maybe<Scalars['Boolean']['output']>;
  /** A flag to determine replacement allowed */
  replacementAllowed?: Maybe<Scalars['Boolean']['output']>;
  /** Amount for replacement process fee */
  replacementProcessingFee?: Maybe<Scalars['Float']['output']>;
  /** A flag to determine if lost item returned, remove lost item processing fee */
  returnedLostItemProcessingFee?: Maybe<Scalars['Boolean']['output']>;
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

/** A mode of issuance to be assigned to an Instance */
export type ModeOfIssuance = {
  __typename?: 'ModeOfIssuance';
  id?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Metadata>;
  /** label for the mode of issuance */
  name: Scalars['String']['output'];
  /** label indicating where the mode of issuance entry originates from, i.e. 'rdamodeissue' or 'local' */
  source?: Maybe<Scalars['String']['output']>;
};

/** Money schema for patron portal integration */
export type Money = {
  __typename?: 'Money';
  /** The amount of the fine or charge */
  amount: Scalars['Float']['output'];
  /** An ISO 4217 standard currency code */
  isoCurrencyCode: Scalars['String']['output'];
};

/** Overdue fine policy to be associated with a loan policy by the Circulation Rules Editor */
export type OverdueFinePolicy = {
  __typename?: 'OverdueFinePolicy';
  /** A flag to determine if a fine is count closed */
  countClosed?: Maybe<Scalars['Boolean']['output']>;
  /** Overdue fine policy description */
  description?: Maybe<Scalars['String']['output']>;
  /** A flag to determine forgive overdue fine if item renewed */
  forgiveOverdueFine?: Maybe<Scalars['Boolean']['output']>;
  /** Grace period for recall */
  gracePeriodRecall?: Maybe<Scalars['Boolean']['output']>;
  /** Overdue fine policy id, UUID */
  id?: Maybe<Scalars['UUID']['output']>;
  /** Maximum overdue fine */
  maxOverdueFine?: Maybe<Scalars['Float']['output']>;
  /** Maximum overdue recall fine */
  maxOverdueRecallFine?: Maybe<Scalars['Float']['output']>;
  /** Metadata about creation to overdue fine policy, provided by the server */
  metadata?: Maybe<Metadata>;
  /** Overdue fine policy name */
  name: Scalars['String']['output'];
  /** Fine for overdue */
  overdueFine?: Maybe<Quantity>;
  /** Fine overdue recall fine */
  overdueRecallFine?: Maybe<Quantity>;
};

/** Blocks to override (e.g. during checkout or renewal) */
export type OverrideBlocks = {
  __typename?: 'OverrideBlocks';
  /** Reason for override */
  comment?: Maybe<Scalars['String']['output']>;
  /** Item limit block */
  itemLimitBlock?: Maybe<OverrideBlocksItemLimitBlock>;
  /** 'Item not loanable' block */
  itemNotLoanableBlock?: Maybe<OverrideBlocksItemNotLoanableBlock>;
  /** Automated patron block */
  patronBlock?: Maybe<OverrideBlocksPatronBlock>;
  /** Renewal block */
  renewalBlock?: Maybe<OverrideBlocksRenewalBlock>;
  /** Override renewal block which requires due date field */
  renewalDueDateRequiredBlock?: Maybe<OverrideBlocksRenewalDueDateRequiredBlock>;
};

/** Item limit block */
export type OverrideBlocksItemLimitBlock = {
  __typename?: 'OverrideBlocksItemLimitBlock';
  _typesWithoutFieldsAreNotAllowed_?: Maybe<Scalars['String']['output']>;
};

/** 'Item not loanable' block */
export type OverrideBlocksItemNotLoanableBlock = {
  __typename?: 'OverrideBlocksItemNotLoanableBlock';
  /** Due date for a new loan */
  dueDate: Scalars['DateTime']['output'];
};

/** Automated patron block */
export type OverrideBlocksPatronBlock = {
  __typename?: 'OverrideBlocksPatronBlock';
  _typesWithoutFieldsAreNotAllowed_?: Maybe<Scalars['String']['output']>;
};

/** Renewal block */
export type OverrideBlocksRenewalBlock = {
  __typename?: 'OverrideBlocksRenewalBlock';
  _typesWithoutFieldsAreNotAllowed_?: Maybe<Scalars['String']['output']>;
};

/** Override renewal block which requires due date field */
export type OverrideBlocksRenewalDueDateRequiredBlock = {
  __typename?: 'OverrideBlocksRenewalDueDateRequiredBlock';
  /** Due date for a new loan */
  dueDate: Scalars['DateTime']['output'];
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

/** Patron notice policy */
export type PatronNoticePolicy = {
  __typename?: 'PatronNoticePolicy';
  /** A flag to determine if a patron notice policy is active */
  active?: Maybe<Scalars['Boolean']['output']>;
  /** Patron notice policy description */
  description?: Maybe<Scalars['String']['output']>;
  /** List of fee/fine notices */
  feeFineNotices?: Maybe<Array<PatronNoticePolicyFeeFineNoticesItem>>;
  /** Patron notice policy id, UUID */
  id?: Maybe<Scalars['String']['output']>;
  /** List of loan notices */
  loanNotices?: Maybe<Array<PatronNoticePolicyLoanNoticesItem>>;
  /** Metadata about creation and changes to policy, provided by the server (client should not provide) */
  metadata?: Maybe<Metadata>;
  /** Patron notice policy name */
  name: Scalars['String']['output'];
  /** List of request notice */
  requestNotices?: Maybe<Array<PatronNoticePolicyRequestNoticesItem>>;
};

export type PatronNoticePolicyFeeFineNoticesItem = {
  __typename?: 'PatronNoticePolicyFeeFineNoticesItem';
  /** Notice format, send through email, sms etc. */
  format: PatronNoticePolicyFeeFineNoticesItemFormat;
  /** Frequency, send it once or more */
  frequency?: Maybe<PatronNoticePolicyFeeFineNoticesItemFrequency>;
  /** Notice name */
  name?: Maybe<Scalars['String']['output']>;
  /** Is this real time event */
  realTime: Scalars['Boolean']['output'];
  sendOptions?: Maybe<PatronNoticePolicyFeeFineNoticesItemSendOptions>;
  /** Template id, UUID */
  templateId: Scalars['String']['output'];
  /** Template name */
  templateName?: Maybe<Scalars['String']['output']>;
};

export enum PatronNoticePolicyFeeFineNoticesItemFormat {
  Email = 'Email',
  Print = 'Print',
  Sms = 'SMS'
}

export enum PatronNoticePolicyFeeFineNoticesItemFrequency {
  OneTime = 'One_time',
  Recurring = 'Recurring'
}

export type PatronNoticePolicyFeeFineNoticesItemSendOptions = {
  __typename?: 'PatronNoticePolicyFeeFineNoticesItemSendOptions';
  sendBy?: Maybe<Interval>;
  sendEvery?: Maybe<Interval>;
  /** Defines how notice should be sent: after or upon */
  sendHow?: Maybe<PatronNoticePolicyFeeFineNoticesItemSendOptionsSendHow>;
  /** Triggering event */
  sendWhen: PatronNoticePolicyFeeFineNoticesItemSendOptionsSendWhen;
};

export enum PatronNoticePolicyFeeFineNoticesItemSendOptionsSendHow {
  After = 'After',
  UponAt = 'Upon_At'
}

export enum PatronNoticePolicyFeeFineNoticesItemSendOptionsSendWhen {
  AgedToLostFineCharged = 'Aged_to_lost___fine_charged',
  AgedToLostItemReplacedFineAdjusted = 'Aged_to_lost___item_replaced___fine_adjusted',
  AgedToLostItemReturnedFineAdjusted = 'Aged_to_lost___item_returned___fine_adjusted',
  OverdueFineRenewed = 'Overdue_fine_renewed',
  OverdueFineReturned = 'Overdue_fine_returned'
}

export type PatronNoticePolicyLoanNoticesItem = {
  __typename?: 'PatronNoticePolicyLoanNoticesItem';
  /** Notice format, send through email, sms etc. */
  format: PatronNoticePolicyLoanNoticesItemFormat;
  /** Frequency, send it once or more */
  frequency?: Maybe<PatronNoticePolicyLoanNoticesItemFrequency>;
  /** Notice name */
  name?: Maybe<Scalars['String']['output']>;
  /** Is this real time event */
  realTime: Scalars['Boolean']['output'];
  sendOptions?: Maybe<PatronNoticePolicyLoanNoticesItemSendOptions>;
  /** Template id, UUID */
  templateId: Scalars['String']['output'];
  /** Template name */
  templateName?: Maybe<Scalars['String']['output']>;
};

export enum PatronNoticePolicyLoanNoticesItemFormat {
  Email = 'Email',
  Print = 'Print',
  Sms = 'SMS'
}

export enum PatronNoticePolicyLoanNoticesItemFrequency {
  OneTime = 'One_time',
  Recurring = 'Recurring'
}

export type PatronNoticePolicyLoanNoticesItemSendOptions = {
  __typename?: 'PatronNoticePolicyLoanNoticesItemSendOptions';
  sendBy?: Maybe<Interval>;
  sendEvery?: Maybe<Interval>;
  /** Defines how notice should be sent, before, after or upon */
  sendHow?: Maybe<PatronNoticePolicyLoanNoticesItemSendOptionsSendHow>;
  /** Triggering event */
  sendWhen: PatronNoticePolicyLoanNoticesItemSendOptionsSendWhen;
};

export enum PatronNoticePolicyLoanNoticesItemSendOptionsSendHow {
  After = 'After',
  Before = 'Before',
  UponAt = 'Upon_At'
}

export enum PatronNoticePolicyLoanNoticesItemSendOptionsSendWhen {
  AgedToLost = 'Aged_to_lost',
  CheckIn = 'Check_in',
  CheckOut = 'Check_out',
  DueDate = 'Due_date',
  ItemRecalled = 'Item_recalled',
  ManualDueDateChange = 'Manual_due_date_change',
  Renewed = 'Renewed'
}

export type PatronNoticePolicyRequestNoticesItem = {
  __typename?: 'PatronNoticePolicyRequestNoticesItem';
  /** Notice format, send through email, sms etc. */
  format: PatronNoticePolicyRequestNoticesItemFormat;
  /** Frequency, send it once or more */
  frequency?: Maybe<PatronNoticePolicyRequestNoticesItemFrequency>;
  /** Notice name */
  name?: Maybe<Scalars['String']['output']>;
  /** Is this real time event */
  realTime: Scalars['Boolean']['output'];
  sendOptions?: Maybe<PatronNoticePolicyRequestNoticesItemSendOptions>;
  /** Template id, UUID */
  templateId: Scalars['String']['output'];
  /** Template name */
  templateName?: Maybe<Scalars['String']['output']>;
};

export enum PatronNoticePolicyRequestNoticesItemFormat {
  Email = 'Email',
  Print = 'Print',
  Sms = 'SMS'
}

export enum PatronNoticePolicyRequestNoticesItemFrequency {
  OneTime = 'One_time',
  Recurring = 'Recurring'
}

export type PatronNoticePolicyRequestNoticesItemSendOptions = {
  __typename?: 'PatronNoticePolicyRequestNoticesItemSendOptions';
  sendBy?: Maybe<Interval>;
  sendEvery?: Maybe<Interval>;
  /** Defines how notice should be sent, before, after or upon */
  sendHow?: Maybe<PatronNoticePolicyRequestNoticesItemSendOptionsSendHow>;
  /** User initiated and time driven events for request related notices */
  sendWhen: PatronNoticePolicyRequestNoticesItemSendOptionsSendWhen;
};

export enum PatronNoticePolicyRequestNoticesItemSendOptionsSendHow {
  After = 'After',
  Before = 'Before',
  UponAt = 'Upon_At'
}

export enum PatronNoticePolicyRequestNoticesItemSendOptionsSendWhen {
  Available = 'Available',
  HoldExpiration = 'Hold_expiration',
  HoldRequest = 'Hold_request',
  PagingRequest = 'Paging_request',
  RecallRequest = 'Recall_request',
  RequestCancellation = 'Request_cancellation',
  RequestExpiration = 'Request_expiration'
}

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

/** Amount of times the interval repeats */
export type Quantity = {
  __typename?: 'Quantity';
  /** Interval for the period, e.g. hour, day, week, month or year */
  intervalId?: Maybe<QuantityIntervalId>;
  /** Fine amount per interval */
  quantity?: Maybe<Scalars['Float']['output']>;
};

export enum QuantityIntervalId {
  Day = 'day',
  Hour = 'hour',
  Minute = 'minute',
  Month = 'month',
  Week = 'week',
  Year = 'year'
}

export type Query = {
  __typename?: 'Query';
  campuses?: Maybe<Array<Maybe<Campus>>>;
  holdingsRecord?: Maybe<HoldingsRecord>;
  holdingsRecords?: Maybe<Array<Maybe<HoldingsRecord>>>;
  instance?: Maybe<Instance>;
  instances?: Maybe<Array<Maybe<Instance>>>;
  institutions?: Maybe<Array<Maybe<Institution>>>;
  item?: Maybe<Item>;
  items?: Maybe<Array<Maybe<Item>>>;
  libraries?: Maybe<Array<Maybe<Library>>>;
  loanPolicies?: Maybe<Array<Maybe<LoanPolicy>>>;
  loanTypes?: Maybe<Array<Maybe<LoanType>>>;
  locations?: Maybe<Array<Maybe<Location>>>;
  lostItemFeesPolicies?: Maybe<Array<Maybe<LostItemFeePolicy>>>;
  materialTypes?: Maybe<Array<Maybe<MaterialType>>>;
  overdueFinePolicies?: Maybe<Array<Maybe<OverdueFinePolicy>>>;
  patron?: Maybe<Patron>;
  patronGroups?: Maybe<Array<Maybe<PatronGroup>>>;
  patronNoticePolicies?: Maybe<Array<Maybe<PatronNoticePolicy>>>;
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


export type QueryPatronArgs = {
  id: Scalars['UUID']['input'];
};

/** Request for an item that might be at a different location or already checked out to another patron */
export type Request = {
  __typename?: 'Request';
  /** Additional information about a cancellation */
  cancellationAdditionalInformation?: Maybe<Scalars['String']['output']>;
  /** The id of the request reason */
  cancellationReasonId?: Maybe<Scalars['UUID']['output']>;
  /** The id of the user that cancelled the request */
  cancelledByUserId?: Maybe<Scalars['UUID']['output']>;
  /** Date the request was cancelled */
  cancelledDate?: Maybe<Scalars['DateTime']['output']>;
  /** Address the item is to be delivered to (derived from requester information) */
  deliveryAddress?: Maybe<RequestDeliveryAddress>;
  /** Deliver to the address of this type, for the requesting patron */
  deliveryAddressTypeId?: Maybe<Scalars['UUID']['output']>;
  /** How should the request be fulfilled (whether the item should be kept on the hold shelf for collection or delivered to the requester) */
  fulfillmentPreference: RequestFulfillmentPreference;
  /** Date when an item returned to the hold shelf expires */
  holdShelfExpirationDate?: Maybe<Scalars['DateTime']['output']>;
  /** ID of the holdings record being requested */
  holdingsRecordId?: Maybe<Scalars['UUID']['output']>;
  /** UUID of the request */
  id?: Maybe<Scalars['UUID']['output']>;
  /** Copy of some instance metadata (used for searching and sorting) */
  instance?: Maybe<RequestInstance>;
  /** ID of the instance being requested */
  instanceId?: Maybe<Scalars['UUID']['output']>;
  /** Copy of some item metadata (used for searching and sorting) */
  item?: Maybe<RequestItem>;
  /** ID of the item being requested */
  itemId?: Maybe<Scalars['UUID']['output']>;
  /** Metadata about creation and changes to requests, provided by the server (client should not provide) */
  metadata?: Maybe<Metadata>;
  /** Comments made by the patron */
  patronComments?: Maybe<Scalars['String']['output']>;
  /** The full object of the Service Point record from pickupServicePointId */
  pickupServicePoint?: Maybe<RequestPickupServicePoint>;
  /** The ID of the Service Point where this request can be picked up */
  pickupServicePointId?: Maybe<Scalars['UUID']['output']>;
  /** position of the request in a per-item request queue */
  position?: Maybe<Scalars['Int']['output']>;
  /** Copy of some proxy patron metadata (used for searching and sorting), will be taken from the user referred to by the proxyUserId */
  proxy?: Maybe<RequestProxy>;
  /** ID of the user representing a proxy for the patron */
  proxyUserId?: Maybe<Scalars['UUID']['output']>;
  /** Date the request was made */
  requestDate: Scalars['DateTime']['output'];
  /** Date when the request expires */
  requestExpirationDate?: Maybe<Scalars['DateTime']['output']>;
  /** Level of the request - Item or Title */
  requestLevel?: Maybe<RequestRequestLevel>;
  /** Additional parameters used for request processing and discarded afterwards. Not part of request record. */
  requestProcessingParameters?: Maybe<RequestRequestProcessingParameters>;
  /** Whether the item should be held upon return, recalled or paged for */
  requestType: RequestRequestType;
  /** Copy of some requesting patron metadata (used for searching and sorting), will be taken from the user referred to by the requesterId */
  requester?: Maybe<RequestRequester>;
  /** ID of the user who made the request */
  requesterId: Scalars['UUID']['output'];
  /** Request fields used for search */
  searchIndex?: Maybe<RequestSearchIndex>;
  /** Status of the request */
  status?: Maybe<RequestStatus>;
  /** Tags */
  tags?: Maybe<Tags>;
};

/** Address the item is to be delivered to (derived from requester information) */
export type RequestDeliveryAddress = {
  __typename?: 'RequestDeliveryAddress';
  /** Address line 1 */
  addressLine1?: Maybe<Scalars['String']['output']>;
  /** Address line 2 */
  addressLine2?: Maybe<Scalars['String']['output']>;
  /** Type of address (refers to address types) */
  addressTypeId?: Maybe<Scalars['UUID']['output']>;
  /** City name */
  city?: Maybe<Scalars['String']['output']>;
  /** Country code */
  countryId?: Maybe<Scalars['String']['output']>;
  /** Postal code */
  postalCode?: Maybe<Scalars['String']['output']>;
  /** Region */
  region?: Maybe<Scalars['String']['output']>;
};

export enum RequestFulfillmentPreference {
  Delivery = 'Delivery',
  HoldShelf = 'Hold_Shelf'
}

/** Copy of some instance metadata (used for searching and sorting) */
export type RequestInstance = {
  __typename?: 'RequestInstance';
  /** An extensible set of name-value pairs of identifiers associated with the resource */
  identifiers?: Maybe<Array<RequestInstanceIdentifiersItem>>;
  /** title of the item */
  title?: Maybe<Scalars['String']['output']>;
};

export type RequestInstanceIdentifiersItem = {
  __typename?: 'RequestInstanceIdentifiersItem';
  /** UUID of resource identifier type (e.g. ISBN, ISSN, LCCN, CODEN, Locally defined identifiers) */
  identifierTypeId: Scalars['UUID']['output'];
  /** Resource identifier value */
  value: Scalars['String']['output'];
};

/** Copy of some item metadata (used for searching and sorting) */
export type RequestItem = {
  __typename?: 'RequestItem';
  /** barcode of the item */
  barcode?: Maybe<Scalars['String']['output']>;
};

/** The full object of the Service Point record from pickupServicePointId */
export type RequestPickupServicePoint = {
  __typename?: 'RequestPickupServicePoint';
  /** Unique code for the service point */
  code?: Maybe<Scalars['String']['output']>;
  /** Description of the service point */
  description?: Maybe<Scalars['String']['output']>;
  /** Human-readable name for the service point */
  discoveryDisplayName?: Maybe<Scalars['String']['output']>;
  /** Unique name for the service point */
  name?: Maybe<Scalars['String']['output']>;
  /** Is this service point a pickup location? */
  pickupLocation?: Maybe<Scalars['Boolean']['output']>;
  /** Shelving lag time */
  shelvingLagTime?: Maybe<Scalars['Int']['output']>;
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

/** Copy of some proxy patron metadata (used for searching and sorting), will be taken from the user referred to by the proxyUserId */
export type RequestProxy = {
  __typename?: 'RequestProxy';
  /** barcode of the proxy patron (read only, defined by the server) */
  barcode?: Maybe<Scalars['String']['output']>;
  /** first name of the proxy patron (read only, defined by the server) */
  firstName?: Maybe<Scalars['String']['output']>;
  /** last name of the proxy patron (read only, defined by the server) */
  lastName?: Maybe<Scalars['String']['output']>;
  /** middle name of the proxy patron (read only, defined by the server) */
  middleName?: Maybe<Scalars['String']['output']>;
  /** record for the user's patrongroup */
  patronGroup?: Maybe<RequestProxyPatronGroup>;
  /** UUID for the patrongroup that this user belongs to */
  patronGroupId?: Maybe<Scalars['UUID']['output']>;
};

/** record for the user's patrongroup */
export type RequestProxyPatronGroup = {
  __typename?: 'RequestProxyPatronGroup';
  /** A description of the patrongroup */
  desc?: Maybe<Scalars['String']['output']>;
  /** The unique name of the patrongroup */
  group?: Maybe<Scalars['String']['output']>;
  /** ID of the patrongroup */
  id?: Maybe<Scalars['UUID']['output']>;
};

export enum RequestRequestLevel {
  Item = 'Item'
}

/** Additional parameters used for request processing and discarded afterwards. Not part of request record. */
export type RequestRequestProcessingParameters = {
  __typename?: 'RequestRequestProcessingParameters';
  /** Blocks to override if user has corresponding permissions */
  overrideBlocks?: Maybe<OverrideBlocks>;
};

export enum RequestRequestType {
  Hold = 'Hold',
  Page = 'Page',
  Recall = 'Recall'
}

/** Copy of some requesting patron metadata (used for searching and sorting), will be taken from the user referred to by the requesterId */
export type RequestRequester = {
  __typename?: 'RequestRequester';
  /** barcode of the patron (read only, defined by the server) */
  barcode?: Maybe<Scalars['String']['output']>;
  /** first name of the patron (read only, defined by the server) */
  firstName?: Maybe<Scalars['String']['output']>;
  /** last name of the patron (read only, defined by the server) */
  lastName?: Maybe<Scalars['String']['output']>;
  /** middle name of the patron (read only, defined by the server) */
  middleName?: Maybe<Scalars['String']['output']>;
  /** record for the user's patron group */
  patronGroup?: Maybe<RequestRequesterPatronGroup>;
  /** UUID for the patron group that this user belongs to */
  patronGroupId?: Maybe<Scalars['UUID']['output']>;
};

/** record for the user's patron group */
export type RequestRequesterPatronGroup = {
  __typename?: 'RequestRequesterPatronGroup';
  /** A description of the patron group */
  desc?: Maybe<Scalars['String']['output']>;
  /** The unique name of the patron group */
  group?: Maybe<Scalars['String']['output']>;
  /** ID of the patron group */
  id?: Maybe<Scalars['UUID']['output']>;
};

/** Request fields used for search */
export type RequestSearchIndex = {
  __typename?: 'RequestSearchIndex';
  /** Effective call number components */
  callNumberComponents?: Maybe<RequestSearchIndexCallNumberComponents>;
  /** The name of the request pickup service point */
  pickupServicePointName?: Maybe<Scalars['String']['output']>;
  /** A system generated normalization of the call number that allows for call number sorting in reports and search results */
  shelvingOrder?: Maybe<Scalars['String']['output']>;
};

/** Effective call number components */
export type RequestSearchIndexCallNumberComponents = {
  __typename?: 'RequestSearchIndexCallNumberComponents';
  /** Effective Call Number is an identifier assigned to an item or its holding and associated with the item. */
  callNumber?: Maybe<Scalars['String']['output']>;
  /** Effective Call Number Prefix is the prefix of the identifier assigned to an item or its holding and associated with the item. */
  prefix?: Maybe<Scalars['String']['output']>;
  /** Effective Call Number Suffix is the suffix of the identifier assigned to an item or its holding and associated with the item. */
  suffix?: Maybe<Scalars['String']['output']>;
};

export enum RequestStatus {
  ClosedCancelled = 'Closed___Cancelled',
  ClosedFilled = 'Closed___Filled',
  ClosedPickupExpired = 'Closed___Pickup_expired',
  ClosedUnfilled = 'Closed___Unfilled',
  OpenAwaitingDelivery = 'Open___Awaiting_delivery',
  OpenAwaitingPickup = 'Open___Awaiting_pickup',
  OpenInTransit = 'Open___In_transit',
  OpenNotYetFilled = 'Open___Not_yet_filled'
}

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
