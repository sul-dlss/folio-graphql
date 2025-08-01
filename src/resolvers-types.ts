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
  ID: { input: string; output: string; }
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
  actions?: Maybe<Array<Maybe<FeeFineAction>>>;
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

/** Records the relationship between a part of a bound-with (a holdings-record) and the bound-with as a whole (the circulatable item) */
export type BoundWithPart = {
  __typename?: 'BoundWithPart';
  /** the ID of the holdings record representing a part of a bound-with; a UUID */
  holdingsRecordId: Scalars['String']['output'];
  /** unique ID of the recorded bound-with relation; a UUID */
  id?: Maybe<Scalars['UUID']['output']>;
  /** the ID of the item representing the bind; a UUID */
  itemId: Scalars['String']['output'];
  metadata?: Maybe<Metadata>;
};

/** A collection of parts (holdings-records) of one or more bound-with items */
export type BoundWithParts = {
  __typename?: 'BoundWithParts';
  /** List of bound-with records */
  boundWithParts: Array<BoundWithPart>;
  /** Estimated or exact total number of records */
  totalRecords: Scalars['Int']['output'];
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
  libraries?: Maybe<Array<Maybe<Library>>>;
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

/** details about an order claim */
export type Claim = {
  __typename?: 'Claim';
  /** whether or not this purchase order line has been claimed */
  claimed?: Maybe<Scalars['Boolean']['output']>;
  /** the number of days after the expected receipt date during which claims should not be processed */
  grace?: Maybe<Scalars['Int']['output']>;
  /** date a claim was sent */
  sent?: Maybe<Scalars['DateTime']['output']>;
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

/** contributor to the material */
export type Contributor = {
  __typename?: 'Contributor';
  /** the name of a contributor to the material */
  contributor?: Maybe<Scalars['String']['output']>;
  /** UUID of the contributor type */
  contributorNameTypeId: Scalars['String']['output'];
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
  /** origin of the contributor name type record, e.g. 'local', 'consortium' etc. */
  source?: Maybe<Scalars['String']['output']>;
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

/** purchase order line cost record */
export type Cost = {
  __typename?: 'Cost';
  /** Lump sum that is added to the total estimated price - not affected by discount */
  additionalCost?: Maybe<Scalars['Float']['output']>;
  /** An ISO currency code */
  currency: Scalars['String']['output'];
  /** Percentage (0 to 100) or amount (positive number) that is subtracted from the list price time quantities calculation before additional cost */
  discount?: Maybe<Scalars['Float']['output']>;
  /** Percentage or amount discount type */
  discountType?: Maybe<CostDiscountType>;
  /** Exchange rate */
  exchangeRate?: Maybe<Scalars['Float']['output']>;
  /** Adjustment amount if rollover was happen */
  fyroAdjustmentAmount?: Maybe<Scalars['Float']['output']>;
  /** The per-item list price for physical or resources of 'Other' order format */
  listUnitPrice?: Maybe<Scalars['Float']['output']>;
  /** The e-resource per-item list price */
  listUnitPriceElectronic?: Maybe<Scalars['Float']['output']>;
  /** The calculated total estimated price for this purchase order line: list price time quantities minus discount amount plus additional cost */
  poLineEstimatedPrice?: Maybe<Scalars['Float']['output']>;
  /** Quantity of electronic items in this purchase order line */
  quantityElectronic?: Maybe<Scalars['Int']['output']>;
  /** Quantity of physical items or resources of 'Other' order format in this purchase order line */
  quantityPhysical?: Maybe<Scalars['Int']['output']>;
};

export enum CostDiscountType {
  Amount = 'amount',
  Percentage = 'percentage'
}

export type CqlParams = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  sortby?: InputMaybe<Scalars['String']['input']>;
};

/** purchase order line details */
export type Details = {
  __typename?: 'Details';
  /** Flag for acknowledge receiving note */
  isAcknowledged?: Maybe<Scalars['Boolean']['output']>;
  /** a list of product identifiers */
  productIds?: Maybe<Array<ProductIdentifier>>;
  /** notes regarding receiving instructions */
  receivingNote?: Maybe<Scalars['String']['output']>;
  /** the start date of the subscription */
  subscriptionFrom?: Maybe<Scalars['DateTime']['output']>;
  /** the subscription interval in days */
  subscriptionInterval?: Maybe<Scalars['Int']['output']>;
  /** the end date of the subscription */
  subscriptionTo?: Maybe<Scalars['DateTime']['output']>;
};

/** A qualifier indicating the type of relationship that an electronic resource at a given URL has to an Instance */
export type ElectronicAccessRelationship = {
  __typename?: 'ElectronicAccessRelationship';
  id?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Metadata>;
  /** label for the type of relationship between a URL and an Instance */
  name: Scalars['String']['output'];
  /** Origin of the electronic access relationship record, e.g. 'local', 'consortium' etc. */
  source?: Maybe<Scalars['String']['output']>;
};

/** purchase order line e-resource details */
export type Eresource = {
  __typename?: 'Eresource';
  /** UUID of the access provider */
  accessProvider?: Maybe<Scalars['UUID']['output']>;
  /** whether or not this resource is activated */
  activated?: Maybe<Scalars['Boolean']['output']>;
  /** number of days until activation, from date of order placement */
  activationDue?: Maybe<Scalars['Int']['output']>;
  /** Shows what inventory objects need to be created for electronic resource */
  createInventory?: Maybe<EresourceCreateInventory>;
  /** expected date the resource will be activated */
  expectedActivation?: Maybe<Scalars['DateTime']['output']>;
  /** License record */
  license?: Maybe<License>;
  /** UUID of the material Type */
  materialType?: Maybe<Scalars['UUID']['output']>;
  /** Electronic resource can be access via this URL */
  resourceUrl?: Maybe<Scalars['String']['output']>;
  /** whether or not this is a trial */
  trial?: Maybe<Scalars['Boolean']['output']>;
  /** the concurrent user-limit */
  userLimit?: Maybe<Scalars['Int']['output']>;
};

export enum EresourceCreateInventory {
  Instance = 'Instance',
  InstanceHolding = 'Instance__Holding',
  InstanceHoldingItem = 'Instance__Holding__Item',
  None = 'None'
}

/** An error */
export type Error = {
  __typename?: 'Error';
  /** Error message code */
  code?: Maybe<Scalars['String']['output']>;
  /** Error message text */
  message: Scalars['String']['output'];
  /** Error message type */
  type?: Maybe<Scalars['String']['output']>;
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

/** Transactions or activities associated with a user fee/fine account */
export type FeeFineAction = {
  __typename?: 'FeeFineAction';
  /** ID of the accounts */
  accountId: Scalars['UUID']['output'];
  /** Amount of activity */
  amountAction?: Maybe<Scalars['Float']['output']>;
  /** Calculated amount of remaining balance based on original fee/fine and what has been paid/waived/transferred/refunded */
  balance?: Maybe<Scalars['Float']['output']>;
  /** Additional information entered as part of the activity or on this screen as a 'Staff info only' activity */
  comments?: Maybe<Scalars['String']['output']>;
  /** ID of the service point where the action was created */
  createdAt?: Maybe<Scalars['UUID']['output']>;
  /** Date and time the transaction of the fine/fee was created */
  dateAction?: Maybe<Scalars['DateTime']['output']>;
  /** Fine/fee action id, UUID */
  id?: Maybe<Scalars['UUID']['output']>;
  /** A flag to determine if a patron should be notified or not */
  notify?: Maybe<Scalars['Boolean']['output']>;
  /** Original invalid (non-UUID) value of 'createdAt' moved here when UUID-validation was enabled for 'createdAt' */
  originalCreatedAt?: Maybe<Scalars['String']['output']>;
  /** Overall status of the action-setting */
  paymentMethod?: Maybe<Scalars['String']['output']>;
  /** Person who processed activity (from login information) */
  source?: Maybe<Scalars['String']['output']>;
  /** Number or other transaction id related to payment */
  transactionInformation?: Maybe<Scalars['String']['output']>;
  /** Type of activity including the type of transaction */
  typeAction?: Maybe<Scalars['String']['output']>;
  /** ID of the user */
  userId: Scalars['UUID']['output'];
};

/** A set of date ranges for materials checkout and their associated due dates. */
export type FixedDueDateSchedule = {
  __typename?: 'FixedDueDateSchedule';
  /** Schedule description */
  description?: Maybe<Scalars['String']['output']>;
  /** Unique ID (generated UUID) */
  id?: Maybe<Scalars['UUID']['output']>;
  metadata?: Maybe<Metadata>;
  /** Schedule name */
  name: Scalars['String']['output'];
  /** List date ranges with a due date for each */
  schedules?: Maybe<Array<Schedule>>;
};

/** purchase order fund distribution */
export type FundDistribution = {
  __typename?: 'FundDistribution';
  code?: Maybe<Scalars['String']['output']>;
  /** Percentage or amount type of the value property */
  distributionType: FundDistributionDistributionType;
  /** UUID of encumbrance record associated with this fund distribution */
  encumbrance?: Maybe<Scalars['UUID']['output']>;
  /** UUID of the expense class associated with this fund distribution */
  expenseClassId?: Maybe<Scalars['UUID']['output']>;
  /** UUID of the fund associated with this fund distribution */
  fundId: Scalars['UUID']['output'];
  /** The value of the cost to be applied to this fund */
  value: Scalars['Float']['output'];
};

export enum FundDistributionDistributionType {
  Amount = 'amount',
  Percentage = 'percentage'
}

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

/** Holding summary */
export type HoldingSummary = {
  __typename?: 'HoldingSummary';
  orderCloseReason?: Maybe<Scalars['String']['output']>;
  /** Order sent date */
  orderSentDate?: Maybe<Scalars['DateTime']['output']>;
  /** Order status */
  orderStatus?: Maybe<Scalars['String']['output']>;
  /** Purchase order type */
  orderType?: Maybe<HoldingSummaryOrderType>;
  pieces?: Maybe<Array<Maybe<Piece>>>;
  poLine?: Maybe<PoLine>;
  /** Purchase order line id */
  poLineId?: Maybe<Scalars['String']['output']>;
  /** Purchase order line number */
  poLineNumber?: Maybe<Scalars['String']['output']>;
  polReceiptStatus?: Maybe<Scalars['String']['output']>;
};

/** Collection of holding summary elements */
export type HoldingSummaryCollection = {
  __typename?: 'HoldingSummaryCollection';
  /** an array of holding summaries */
  holdingSummaries: Array<HoldingSummary>;
  /** total number of records in the array */
  totalRecords: Scalars['Int']['output'];
};

export enum HoldingSummaryOrderType {
  OneTime = 'One_Time',
  Ongoing = 'Ongoing'
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
  boundWithItem?: Maybe<Item>;
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
  holdingSummaries?: Maybe<Array<Maybe<HoldingSummary>>>;
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

/** A collection of holdings records */
export type HoldingsRecords = {
  __typename?: 'HoldingsRecords';
  /** List of holdings records */
  holdingsRecords: Array<HoldingsRecord>;
  resultInfo?: Maybe<ResultInfo>;
  /** Estimated or exact total number of records */
  totalRecords: Scalars['Int']['output'];
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
  holdingsRecords2?: Maybe<HoldingsRecords>;
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
  orderLines?: Maybe<Array<Maybe<PoLine>>>;
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
  queueTotalLength?: Maybe<Scalars['Int']['output']>;
  /** List of series titles associated with the resource (e.g. Harry Potter) */
  series?: Maybe<Array<InstanceSeriesItem>>;
  /** The metadata source and its format of the underlying record to the instance record. (e.g. FOLIO if it's a record created in Inventory; MARC if it's a MARC record created in MARCcat or EPKB if it's a record coming from eHoldings; CONSORTIUM-MARC or CONSORTIUM-FOLIO for sharing Instances). */
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
  boundWithHoldingsPerItem?: Maybe<Array<Maybe<HoldingsRecord>>>;
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
  /** Display summary about the item */
  displaySummary?: Maybe<Scalars['String']['output']>;
  dueDate?: Maybe<Scalars['DateTime']['output']>;
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
  /** Fake property for mod-graphql to determine record relationships. */
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
  queueTotalLength?: Maybe<Scalars['Int']['output']>;
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

/** purchase order line license record */
export type License = {
  __typename?: 'License';
  /** license code */
  code?: Maybe<Scalars['String']['output']>;
  /** license description */
  description?: Maybe<Scalars['String']['output']>;
  /** license reference */
  reference?: Maybe<Scalars['String']['output']>;
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

/** Rules governing loans */
export type LoanPolicy = {
  __typename?: 'LoanPolicy';
  /** Description of the loan policy */
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  /** Flag that indicates whether this policy allows loans */
  loanable: Scalars['Boolean']['output'];
  /** Settings for loans */
  loansPolicy?: Maybe<LoanPolicyLoansPolicy>;
  metadata?: Maybe<Metadata>;
  /** The name of the policy. */
  name: Scalars['String']['output'];
  /** Is item renewable */
  renewable: Scalars['Boolean']['output'];
  /** Settings for renewals */
  renewalsPolicy?: Maybe<LoanPolicyRenewalsPolicy>;
  /** Settings for various request types */
  requestManagement?: Maybe<LoanPolicyRequestManagement>;
};

/** Settings for loans */
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

/** Settings for renewals */
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

/** Settings for various request types */
export type LoanPolicyRequestManagement = {
  __typename?: 'LoanPolicyRequestManagement';
  /** Settings for hold requests */
  holds?: Maybe<LoanPolicyRequestManagementHolds>;
  /** Settings for page requests */
  pages?: Maybe<LoanPolicyRequestManagementPages>;
  /** Settings for recall requests */
  recalls?: Maybe<LoanPolicyRequestManagementRecalls>;
};

/** Settings for hold requests */
export type LoanPolicyRequestManagementHolds = {
  __typename?: 'LoanPolicyRequestManagementHolds';
  /** Alternate loan period at checkout for items with active, pending hold request */
  alternateCheckoutLoanPeriod?: Maybe<Period>;
  /** Alternate loan period at renewal for items with active, pending hold request */
  alternateRenewalLoanPeriod?: Maybe<Period>;
  /** Allow renewal of items with active, pending hold request */
  renewItemsWithRequest?: Maybe<Scalars['Boolean']['output']>;
};

/** Settings for page requests */
export type LoanPolicyRequestManagementPages = {
  __typename?: 'LoanPolicyRequestManagementPages';
  /** Alternate loan period at checkout for items with active, pending page request */
  alternateCheckoutLoanPeriod?: Maybe<Period>;
  /** Alternate loan period at renewal for items with active, pending page request */
  alternateRenewalLoanPeriod?: Maybe<Period>;
  /** Allow renewal of items with active, pending page request */
  renewItemsWithRequest?: Maybe<Scalars['Boolean']['output']>;
};

/** Settings for recall requests */
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
  /** Origin of the loan type record, e.g. 'System', 'User', 'Consortium' etc. */
  source?: Maybe<Scalars['String']['output']>;
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

export enum LocationAvailabilityClass {
  Available = 'Available',
  InProcess = 'In_process',
  InProcessNonRequestable = 'In_process_non_requestable',
  Offsite = 'Offsite',
  Unavailable = 'Unavailable'
}

/** Details about this (shelf) location. */
export type LocationDetails = {
  __typename?: 'LocationDetails';
  _typesWithoutFieldsAreNotAllowed_?: Maybe<Scalars['String']['output']>;
  /** "Location-specific item availability information */
  availabilityClass?: Maybe<LocationAvailabilityClass>;
  /** URL for more information about a location (used by Lane in their discovery environment) */
  discoveryDisplayUrl?: Maybe<Scalars['String']['output']>;
  /** Default type name for any holdings records in this location (used esp. for Lane, which lacks holdings types) */
  holdingsTypeName?: Maybe<Scalars['String']['output']>;
  /** Site value passed to Aeon to preselect delivery location for material paged from this location */
  pageAeonSite?: Maybe<Scalars['String']['output']>;
  /** Lookup key for user groups who mediate material paged from this location */
  pageMediationGroupKey?: Maybe<Scalars['String']['output']>;
  /** Some locations (like SAL-PAGE) should attempt an ILLiad request before trying FOLIO */
  pagePreferSendIlliad?: Maybe<Scalars['String']['output']>;
  /** Comma-separated codes for valid pickup locations for material paged from this location */
  pageServicePointCodes?: Maybe<Scalars['String']['output']>;
  /** Valid pickup locations for material paged from this location */
  pageServicePoints?: Maybe<Array<Maybe<ServicePoint>>>;
  /** Location-specific paging schedule code (e.g. SAL3 for offsite locations that aren't nested under the SAL3 library) */
  pagingSchedule?: Maybe<Scalars['String']['output']>;
  /** Service point where material from this location is scanned */
  scanServicePoint?: Maybe<ServicePoint>;
  /** Code for service point where material from this location is scanned */
  scanServicePointCode?: Maybe<Scalars['String']['output']>;
  /** Some locations (like SAL3-PAGE-AR) are also indexed under the paged-to library (i.e. ART) */
  searchworksAdditionalLibraryCodeFacetValues?: Maybe<Scalars['String']['output']>;
  /** Some locations imply the type of gov docs they contain */
  searchworksGovDocsClassification?: Maybe<Scalars['String']['output']>;
  /** User-visible string for building the Searchworks location_facet */
  searchworksLocationFacetDisplayName?: Maybe<Scalars['String']['output']>;
  /** We want to treat some locations that are used as temporary locations as if they were the permanent location */
  searchworksTreatTemporaryLocationAsPermanentLocation?: Maybe<Scalars['String']['output']>;
  /** Some locations aren't shelved by call number; this text should help the user find the thing */
  shelvedByText?: Maybe<Scalars['String']['output']>;
  /**  E.g. 'https://stanford.stackmap.com/json/', if a stackmap is available for that location */
  stackmapBaseUrl?: Maybe<Scalars['String']['output']>;
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

/** purchase order line location record */
export type OrderLocation = {
  __typename?: 'OrderLocation';
  /** Holding UUID associated with order line */
  holdingId?: Maybe<Scalars['String']['output']>;
  /** UUID of the (inventory) location record */
  locationId?: Maybe<Scalars['UUID']['output']>;
  /** combined/total quanitity of physical and electronic items */
  quantity?: Maybe<Scalars['Int']['output']>;
  /** quantity of electronic items */
  quantityElectronic?: Maybe<Scalars['Int']['output']>;
  /** quantity of physical items */
  quantityPhysical?: Maybe<Scalars['Int']['output']>;
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
  /** Rules and schedule for reminders with associated fees */
  reminderFeesPolicy?: Maybe<ReminderFeesPolicy>;
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
  /** Origin of the group record, i.e. 'System' or 'User' */
  source?: Maybe<Scalars['String']['output']>;
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
  /** Notice sending options */
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

/** Notice sending options */
export type PatronNoticePolicyFeeFineNoticesItemSendOptions = {
  __typename?: 'PatronNoticePolicyFeeFineNoticesItemSendOptions';
  /** Delay before the first attempt to send a notice */
  sendBy?: Maybe<Interval>;
  /** Interval between attempts to send a recurring notice */
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
  /** Notice sending options */
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

/** Notice sending options */
export type PatronNoticePolicyLoanNoticesItemSendOptions = {
  __typename?: 'PatronNoticePolicyLoanNoticesItemSendOptions';
  /** Delay before the first attempt to send a notice */
  sendBy?: Maybe<Interval>;
  /** Interval between attempts to send a recurring notice */
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
  /** Notice sending options */
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

/** Notice sending options */
export type PatronNoticePolicyRequestNoticesItemSendOptions = {
  __typename?: 'PatronNoticePolicyRequestNoticesItemSendOptions';
  /** Delay before the first attempt to send a notice */
  sendBy?: Maybe<Interval>;
  /** Interval between attempts to send a recurring notice */
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

/** Time interval defined by its duration */
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

/** purchase order line physical material details */
export type Physical = {
  __typename?: 'Physical';
  /** Shows what inventory objects need to be created for physical resource */
  createInventory?: Maybe<PhysicalCreateInventory>;
  /** vendor agreed date prior to the Receipt Due date item is expected to be received by */
  expectedReceiptDate?: Maybe<Scalars['DateTime']['output']>;
  /** UUID of the material supplier record */
  materialSupplier?: Maybe<Scalars['UUID']['output']>;
  /** UUID of the material Type */
  materialType?: Maybe<Scalars['UUID']['output']>;
  /** date item should be received by */
  receiptDue?: Maybe<Scalars['DateTime']['output']>;
  /** list of volumes included to the physical material */
  volumes: Array<Scalars['String']['output']>;
};

export enum PhysicalCreateInventory {
  Instance = 'Instance',
  InstanceHolding = 'Instance__Holding',
  InstanceHoldingItem = 'Instance__Holding__Item',
  None = 'None'
}

/** Piece details */
export type Piece = {
  __typename?: 'Piece';
  /** Volume/enumeration information */
  caption?: Maybe<Scalars['String']['output']>;
  /** Chronology is the descriptive information for the dating scheme of a serial. Synchronized with inventory item. */
  chronology?: Maybe<Scalars['String']['output']>;
  /** Free form commentary */
  comment?: Maybe<Scalars['String']['output']>;
  /** Copy number of the piece */
  copyNumber?: Maybe<Scalars['String']['output']>;
  /** Records the fact that the record should not be displayed in a discovery system */
  discoverySuppress?: Maybe<Scalars['Boolean']['output']>;
  /** Whether or not receiving history should be displayed in holding record view */
  displayOnHolding?: Maybe<Scalars['Boolean']['output']>;
  /** Enumeration is the descriptive information for the numbering scheme of a serial. Synchronized with inventory item. */
  enumeration?: Maybe<Scalars['String']['output']>;
  /** The format of the piece */
  format: Scalars['String']['output'];
  /** UUID of the holding record */
  holdingId?: Maybe<Scalars['UUID']['output']>;
  /** UUID of this piece record */
  id?: Maybe<Scalars['UUID']['output']>;
  /** UUID of the associated item record */
  itemId?: Maybe<Scalars['UUID']['output']>;
  /** UUID of the (inventory) location record */
  locationId?: Maybe<Scalars['UUID']['output']>;
  /** UUID of the purchase order line this record is associated with */
  poLineId: Scalars['UUID']['output'];
  /** Date that associated item is expected to arrive */
  receiptDate?: Maybe<Scalars['DateTime']['output']>;
  /** The date associated item is actually received */
  receivedDate?: Maybe<Scalars['DateTime']['output']>;
  /** the status of this piece */
  receivingStatus: PieceReceivingStatus;
  /** Whether or not this is supplementary material */
  supplement?: Maybe<Scalars['Boolean']['output']>;
  /** UUID of the title record */
  titleId: Scalars['UUID']['output'];
};

/** collection of piece records */
export type PieceCollection = {
  __typename?: 'PieceCollection';
  /** collection of piece records */
  pieces?: Maybe<Array<Piece>>;
  /** The number of objects contained in this collection */
  totalRecords?: Maybe<Scalars['Int']['output']>;
};

export enum PieceReceivingStatus {
  Expected = 'Expected',
  Received = 'Received'
}

/** purchase order line */
export type PoLine = {
  __typename?: 'PoLine';
  /** UUID of the acquisition method for this purchase order line */
  acquisitionMethod?: Maybe<Scalars['String']['output']>;
  /** UUID of the agreement this purchase order line is related to */
  agreementId?: Maybe<Scalars['UUID']['output']>;
  /** an array of alert record IDs */
  alerts?: Maybe<Array<Scalars['UUID']['output']>>;
  /** if true then line will be marked as available to export in the EDIFACT format or other format */
  automaticExport?: Maybe<Scalars['Boolean']['output']>;
  /** whether or not there are cancellation restrictions for this purchase order line */
  cancellationRestriction?: Maybe<Scalars['Boolean']['output']>;
  /** free-form notes related to cancellation restrictions */
  cancellationRestrictionNote?: Maybe<Scalars['String']['output']>;
  /** if true this will toggle the Check-in workflow for details associated with this PO line */
  checkinItems?: Maybe<Scalars['Boolean']['output']>;
  /** list of claims */
  claims?: Maybe<Array<Claim>>;
  /** whether or not this purchase order line is for a collection */
  collection?: Maybe<Scalars['Boolean']['output']>;
  /** list of contributors to the material */
  contributors?: Maybe<Array<Contributor>>;
  /** cost record */
  cost?: Maybe<Cost>;
  /** description of the material */
  description?: Maybe<Scalars['String']['output']>;
  /** details record */
  details?: Maybe<Details>;
  /** the donor contributing to this purchase order line */
  donor?: Maybe<Scalars['String']['output']>;
  /** edition of the material */
  edition?: Maybe<Scalars['String']['output']>;
  /** eresource record */
  eresource?: Maybe<Eresource>;
  /** Fund distribution records for this purchase order line */
  fundDistribution?: Maybe<Array<FundDistribution>>;
  /** UUID identifying this purchase order line */
  id?: Maybe<Scalars['UUID']['output']>;
  /** UUID of the instance record this purchase order line is related to */
  instanceId?: Maybe<Scalars['UUID']['output']>;
  /** Indicates that this POL is for a package */
  isPackage?: Maybe<Scalars['Boolean']['output']>;
  /** The last date when line was exported in the EDIFACT file */
  lastEDIExportDate?: Maybe<Scalars['DateTime']['output']>;
  /** Location records for this purchase order line */
  locations?: Maybe<Array<OrderLocation>>;
  metadata?: Maybe<Metadata>;
  orderFormat: Scalars['String']['output'];
  /** UUID referencing the poLine that represents the package that this POLs title belongs to */
  packagePoLineId?: Maybe<Scalars['UUID']['output']>;
  /** The purchase order line payment status */
  paymentStatus?: Maybe<Scalars['String']['output']>;
  /** UUID of the physical (details) record */
  physical?: Maybe<Physical>;
  pieces?: Maybe<Array<Maybe<Piece>>>;
  /** purchase order line description */
  poLineDescription?: Maybe<Scalars['String']['output']>;
  /** A human readable number assigned to this PO line */
  poLineNumber?: Maybe<Scalars['String']['output']>;
  /** date (year) of the material's publication */
  publicationDate?: Maybe<Scalars['String']['output']>;
  /** publisher of the material */
  publisher?: Maybe<Scalars['String']['output']>;
  /** UUID of the purchase order */
  purchaseOrderId: Scalars['UUID']['output'];
  /** date the purchase order line was received */
  receiptDate?: Maybe<Scalars['DateTime']['output']>;
  receiptStatus?: Maybe<Scalars['String']['output']>;
  /** Renewal note for this purchase order line */
  renewalNote?: Maybe<Scalars['String']['output']>;
  /** a list of reporting codes associated with this purchase order line */
  reportingCodes?: Maybe<Array<Scalars['UUID']['output']>>;
  /** who requested this purchase order line */
  requester?: Maybe<Scalars['String']['output']>;
  /** whether or not this is a rush order */
  rush?: Maybe<Scalars['Boolean']['output']>;
  /** who selected this material */
  selector?: Maybe<Scalars['String']['output']>;
  source: Scalars['String']['output'];
  /** arbitrary tags associated with this purchase order line */
  tags?: Maybe<Tags>;
  /** title of the material */
  titleOrPackage: Scalars['String']['output'];
  /** Vendor detail record */
  vendorDetail?: Maybe<VendorDetail>;
};

/** collection of purchase order line records */
export type PoLineCollection = {
  __typename?: 'PoLineCollection';
  /** collection of purchase order line records */
  poLines: Array<PoLine>;
  /** The number of objects contained in this collection */
  totalRecords: Scalars['Int']['output'];
};

/** Product identifier */
export type ProductIdentifier = {
  __typename?: 'ProductIdentifier';
  /** The actual product identifier */
  productId?: Maybe<Scalars['String']['output']>;
  productIdType?: Maybe<Scalars['String']['output']>;
  /** Information about the binding, format, volume numbers, part of a set, publisher, distributor, etc. which might be enclosed in parenthesis */
  qualifier?: Maybe<Scalars['String']['output']>;
};

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
  availability?: Maybe<Array<Maybe<RtacHolding>>>;
  campus?: Maybe<Campus>;
  campuses?: Maybe<Array<Maybe<Campus>>>;
  feeFineTypes?: Maybe<Array<Maybe<FeeFine>>>;
  holdingsRecord?: Maybe<HoldingsRecord>;
  holdingsRecords?: Maybe<Array<Maybe<HoldingsRecord>>>;
  instance?: Maybe<Instance>;
  instances?: Maybe<Array<Maybe<Instance>>>;
  institutions?: Maybe<Array<Maybe<Institution>>>;
  item?: Maybe<Item>;
  items?: Maybe<Array<Maybe<Item>>>;
  libraries?: Maybe<Array<Maybe<Library>>>;
  library?: Maybe<Library>;
  loanPolicies?: Maybe<Array<Maybe<LoanPolicy>>>;
  loanTypes?: Maybe<Array<Maybe<LoanType>>>;
  location?: Maybe<Location>;
  locations?: Maybe<Array<Maybe<Location>>>;
  lostItemFeesPolicies?: Maybe<Array<Maybe<LostItemFeePolicy>>>;
  materialTypes?: Maybe<Array<Maybe<MaterialType>>>;
  overdueFinePolicies?: Maybe<Array<Maybe<OverdueFinePolicy>>>;
  patron?: Maybe<Patron>;
  patronGroups?: Maybe<Array<Maybe<PatronGroup>>>;
  patronNoticePolicies?: Maybe<Array<Maybe<PatronNoticePolicy>>>;
  requestPolicies?: Maybe<Array<Maybe<RequestPolicy>>>;
  servicePoints?: Maybe<Array<Maybe<ServicePoint>>>;
};


export type QueryAvailabilityArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCampusArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
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
  barcode?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hrid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  params?: InputMaybe<CqlParams>;
};


export type QueryLibraryArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
};


export type QueryLocationArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPatronArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryServicePointsArgs = {
  id?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Reminder fee policy as part of overdue fine policy */
export type ReminderFeesPolicy = {
  __typename?: 'ReminderFeesPolicy';
  /** Allow renewal of items with reminder fee(s) */
  allowRenewalOfItemsWithReminderFees?: Maybe<Scalars['Boolean']['output']>;
  /** Clear patron block when paid */
  clearPatronBlockWhenPaid?: Maybe<Scalars['Boolean']['output']>;
  /** A flag to determine if a reminder fee should take closed days into account */
  countClosed?: Maybe<Scalars['Boolean']['output']>;
  /** Ignore grace period for holds */
  ignoreGracePeriodHolds?: Maybe<Scalars['Boolean']['output']>;
  /** Ignore grace period for recall */
  ignoreGracePeriodRecall?: Maybe<Scalars['Boolean']['output']>;
  /** Ordered list of reminder notices */
  reminderSchedule?: Maybe<Array<ReminderFeesPolicyReminderScheduleItem>>;
};

/** Scheduled reminder notice with associated fee */
export type ReminderFeesPolicyReminderScheduleItem = {
  __typename?: 'ReminderFeesPolicyReminderScheduleItem';
  /** Id of block reminder template */
  blockTemplateId?: Maybe<Scalars['UUID']['output']>;
  /** Number of units of time before notice should be sent */
  interval: Scalars['Int']['output'];
  /** Method of sending notice */
  noticeFormat?: Maybe<ReminderFeesPolicyReminderScheduleItemNoticeFormat>;
  /** Id of reminder notice template */
  noticeTemplateId: Scalars['UUID']['output'];
  /** Fee amount accrued by reminder notice */
  reminderFee: Scalars['Float']['output'];
  /** Time unit of interval */
  timeUnitId: ReminderFeesPolicyReminderScheduleItemTimeUnitId;
};

export enum ReminderFeesPolicyReminderScheduleItemNoticeFormat {
  Email = 'Email',
  None = 'None',
  Print = 'Print'
}

export enum ReminderFeesPolicyReminderScheduleItemTimeUnitId {
  Day = 'day',
  Minute = 'minute',
  Week = 'week'
}

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
  fulfillmentPreference?: Maybe<RequestFulfillmentPreference>;
  /** Date when an item returned to the hold shelf expires */
  holdShelfExpirationDate?: Maybe<Scalars['DateTime']['output']>;
  /** ID of the holdings record being requested */
  holdingsRecordId?: Maybe<Scalars['UUID']['output']>;
  /** UUID of the request */
  id?: Maybe<Scalars['UUID']['output']>;
  /** ID of the instance being requested */
  instanceId?: Maybe<Scalars['UUID']['output']>;
  /** ID of the item being requested */
  itemId?: Maybe<Scalars['UUID']['output']>;
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
  /** Whether the item should be held upon return, recalled or paged for */
  requestType: RequestRequestType;
  /** Copy of some requesting patron metadata (used for searching and sorting), will be taken from the user referred to by the requesterId */
  requester?: Maybe<RequestRequester>;
  /** ID of the user who made the request */
  requesterId: Scalars['UUID']['output'];
  /** Status of the request */
  status?: Maybe<RequestStatus>;
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
  /** Allowed pickup service point IDs by request type */
  allowedServicePoints?: Maybe<RequestPolicyAllowedServicePoints>;
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

/** Allowed pickup service point IDs by request type */
export type RequestPolicyAllowedServicePoints = {
  __typename?: 'RequestPolicyAllowedServicePoints';
  Hold?: Maybe<Array<Scalars['String']['output']>>;
  Page?: Maybe<Array<Scalars['String']['output']>>;
  Recall?: Maybe<Array<Scalars['String']['output']>>;
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

/** Faceting of result sets */
export type ResultInfo = {
  __typename?: 'ResultInfo';
  /** Array of diagnostic information */
  diagnostics?: Maybe<Array<ResultInfoDiagnosticsItem>>;
  /** Array of facets */
  facets?: Maybe<Array<ResultInfoFacetsItem>>;
  /** Response time */
  responseTime?: Maybe<Scalars['Float']['output']>;
  /** Estimated or exact total number of records */
  totalRecords?: Maybe<Scalars['Int']['output']>;
  /** True if totalRecords is an estimation, false if it is the exact number */
  totalRecordsEstimated?: Maybe<Scalars['Boolean']['output']>;
  /** The rounded value of totalRecords if totalRecords is an estimation */
  totalRecordsRounded?: Maybe<Scalars['Int']['output']>;
};

/** Diagnostic information */
export type ResultInfoDiagnosticsItem = {
  __typename?: 'ResultInfoDiagnosticsItem';
  /** Diagnostic Code */
  code?: Maybe<Scalars['String']['output']>;
  /** Diagnostic Message */
  message?: Maybe<Scalars['String']['output']>;
  /** Module reporting diagnostic information */
  module?: Maybe<Scalars['String']['output']>;
  /** CQL Query associated with results */
  query?: Maybe<Scalars['String']['output']>;
  /** Record Count for diagnostics */
  recordCount?: Maybe<Scalars['Int']['output']>;
  /** Source reporting the diagnostic information */
  source?: Maybe<Scalars['String']['output']>;
};

/** A facet */
export type ResultInfoFacetsItem = {
  __typename?: 'ResultInfoFacetsItem';
  /** Array of facet values */
  facetValues?: Maybe<Array<ResultInfoFacetsItemFacetValuesItem>>;
  /** Type of facet */
  type?: Maybe<Scalars['String']['output']>;
};

/** A facet value */
export type ResultInfoFacetsItemFacetValuesItem = {
  __typename?: 'ResultInfoFacetsItemFacetValuesItem';
  /** Count of facet values */
  count?: Maybe<Scalars['Int']['output']>;
  /** Value Object */
  value?: Maybe<ResultInfoFacetsItemFacetValuesItemValue>;
};

/** Value Object */
export type ResultInfoFacetsItemFacetValuesItemValue = {
  __typename?: 'ResultInfoFacetsItemFacetValuesItemValue';
  _typesWithoutFieldsAreNotAllowed_?: Maybe<Scalars['String']['output']>;
};

/** Real Time Availability Check (RTAC) holding details */
export type RtacHolding = {
  __typename?: 'RtacHolding';
  /** Unique inventory control number for physical resources, used largely for circulation purposes */
  barcode?: Maybe<Scalars['String']['output']>;
  /** The call number of the holding */
  callNumber: Scalars['String']['output'];
  /** The date when the holding will be available */
  dueDate?: Maybe<Scalars['DateTime']['output']>;
  /** Piece ID (usually barcode) for systems that do not use holdings record */
  holdingsCopyNumber?: Maybe<Scalars['String']['output']>;
  /** Notes about action, copy, binding etc. */
  holdingsStatements?: Maybe<Array<RtacHoldingHoldingsStatementsItem>>;
  /** Holdings record indexes statements */
  holdingsStatementsForIndexes?: Maybe<Array<RtacHoldingHoldingsStatementsForIndexesItem>>;
  /** Holdings record supplements statements */
  holdingsStatementsForSupplements?: Maybe<Array<RtacHoldingHoldingsStatementsForSupplementsItem>>;
  /** The FOLIO id of the holding (item) */
  id: Scalars['String']['output'];
  /** Copy number is the piece identifier. The copy number reflects if the library has a copy of a single-volume monograph; a copy of a multi-volume, (e.g. Copy 1, or C.7.) */
  itemCopyNumber?: Maybe<Scalars['String']['output']>;
  library?: Maybe<RtacLibrary>;
  /** The location of the holding */
  location: Scalars['String']['output'];
  /** The location code of the holding */
  locationCode?: Maybe<Scalars['String']['output']>;
  /** The location id of the holding */
  locationId?: Maybe<Scalars['String']['output']>;
  materialType?: Maybe<RtacMaterialType>;
  /** Name of the default loan type for a given item */
  permanentLoanType?: Maybe<Scalars['String']['output']>;
  /** The availability status of the holding */
  status: Scalars['String']['output'];
  /** Indicate if record should not be displayed in a discovery system */
  suppressFromDiscovery?: Maybe<Scalars['Boolean']['output']>;
  /** Name of the temporary loan type for a given item */
  temporaryLoanType?: Maybe<Scalars['String']['output']>;
  /** The total number of requested items for the patron */
  totalHoldRequests?: Maybe<Scalars['Int']['output']>;
  /** Volume details for the holding (item) */
  volume?: Maybe<Scalars['String']['output']>;
};

export type RtacHoldingHoldingsStatementsForIndexesItem = {
  __typename?: 'RtacHoldingHoldingsStatementsForIndexesItem';
  /** Note attached to a holdings statement */
  note?: Maybe<Scalars['String']['output']>;
  /** Textual description of the holdings of indexes */
  statement?: Maybe<Scalars['String']['output']>;
};

export type RtacHoldingHoldingsStatementsForSupplementsItem = {
  __typename?: 'RtacHoldingHoldingsStatementsForSupplementsItem';
  /** Note attached to a holdings statement */
  note?: Maybe<Scalars['String']['output']>;
  /** Textual description of the holdings of supplementary material */
  statement?: Maybe<Scalars['String']['output']>;
};

export type RtacHoldingHoldingsStatementsItem = {
  __typename?: 'RtacHoldingHoldingsStatementsItem';
  /** Text content of the note */
  note?: Maybe<Scalars['String']['output']>;
  /** Name of the holdings note type */
  statement?: Maybe<Scalars['String']['output']>;
};

/** Collection of holdings */
export type RtacHoldings = {
  __typename?: 'RtacHoldings';
  /** Collection of holdings */
  holdings: Array<RtacHolding>;
  /** The FOLIO instance identifier */
  instanceId?: Maybe<Scalars['UUID']['output']>;
};

/** Batch holdings response */
export type RtacHoldingsBatch = {
  __typename?: 'RtacHoldingsBatch';
  /** Errors */
  errors?: Maybe<Array<Error>>;
  /** Real Time Availability Check (RTAC) holding details */
  holdings?: Maybe<Array<RtacHoldings>>;
};

/** third-level location unit */
export type RtacLibrary = {
  __typename?: 'RtacLibrary';
  /** distinct code for the location */
  code: Scalars['String']['output'];
  /** name of the location */
  name: Scalars['String']['output'];
};

/** A material type */
export type RtacMaterialType = {
  __typename?: 'RtacMaterialType';
  id?: Maybe<Scalars['String']['output']>;
  /** label for the material type */
  name: Scalars['String']['output'];
};

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
  details?: Maybe<ServicePointDetails>;
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

export type ServicePointDetails = {
  __typename?: 'ServicePointDetails';
  /** Pseudopatron barcode to use for placing holds */
  holdPseudopatronCode?: Maybe<Scalars['String']['output']>;
  /** IPLC location code equivalent for the service point, generally starts with STA- */
  iplcLocationCode?: Maybe<Scalars['String']['output']>;
  /** The code for the campus for which this service point will be set as default */
  isDefaultForCampus?: Maybe<Scalars['String']['output']>;
  /** Should this service point be a default pickup option for requests? */
  isDefaultPickup?: Maybe<Scalars['Boolean']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
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

/** Title */
export type Title = {
  __typename?: 'Title';
  /** List of contributors to the material */
  contributors?: Maybe<Array<Contributor>>;
  /** Edition of the material */
  edition?: Maybe<Scalars['String']['output']>;
  /** Vendor agreed date prior to the Receipt Due date item is expected to be received by */
  expectedReceiptDate?: Maybe<Scalars['DateTime']['output']>;
  /** UUID of this title */
  id?: Maybe<Scalars['UUID']['output']>;
  /** UUID of the instance associated with this Title */
  instanceId?: Maybe<Scalars['UUID']['output']>;
  /** Flag for acknowledge receiving note */
  isAcknowledged?: Maybe<Scalars['Boolean']['output']>;
  metadata?: Maybe<Metadata>;
  /** The name of the package */
  packageName?: Maybe<Scalars['String']['output']>;
  /** UUID of the purchase order line this Title is associated with */
  poLineId: Scalars['UUID']['output'];
  /** The number of the POL identified by poLineId */
  poLineNumber?: Maybe<Scalars['String']['output']>;
  /** List of product identifiers */
  productIds?: Maybe<Array<ProductIdentifier>>;
  /** Year of the material's publication */
  publishedDate?: Maybe<Scalars['String']['output']>;
  /** Publisher of the material */
  publisher?: Maybe<Scalars['String']['output']>;
  /** Receiving note of the POL identified by poLineId */
  receivingNote?: Maybe<Scalars['String']['output']>;
  /** The start date of the subscription */
  subscriptionFrom?: Maybe<Scalars['DateTime']['output']>;
  /** The subscription interval in days */
  subscriptionInterval?: Maybe<Scalars['Int']['output']>;
  /** The end date of the subscription */
  subscriptionTo?: Maybe<Scalars['DateTime']['output']>;
  /** The title name */
  title: Scalars['String']['output'];
};

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
  /** The class of user like staff or patron; this is different from patronGroup; it can store shadow, system user and dcb types also */
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
  /** Link to the profile picture */
  profilePictureLink?: Maybe<Scalars['String']['output']>;
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

/** purchase order line vendor details */
export type VendorDetail = {
  __typename?: 'VendorDetail';
  /** special instructions for the vendor */
  instructions?: Maybe<Scalars['String']['output']>;
  /** free-form notes from the vendor */
  noteFromVendor?: Maybe<Scalars['String']['output']>;
  referenceNumbers?: Maybe<Array<Scalars['String']['output']>>;
  /** the accound number on the vendor's end associated with this purchase order line */
  vendorAccount?: Maybe<Scalars['String']['output']>;
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
  AlternativeTitleType: ResolverTypeWrapper<AlternativeTitleType>;
  Block: ResolverTypeWrapper<Block>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  BoundWithPart: ResolverTypeWrapper<BoundWithPart>;
  BoundWithParts: ResolverTypeWrapper<BoundWithParts>;
  CallNumberType: ResolverTypeWrapper<CallNumberType>;
  Campus: ResolverTypeWrapper<Campus>;
  Charge: ResolverTypeWrapper<Charge>;
  Claim: ResolverTypeWrapper<Claim>;
  ClassificationType: ResolverTypeWrapper<ClassificationType>;
  Contributor: ResolverTypeWrapper<Contributor>;
  ContributorNameType: ResolverTypeWrapper<ContributorNameType>;
  ContributorType: ResolverTypeWrapper<ContributorType>;
  Cost: ResolverTypeWrapper<Cost>;
  CostDiscountType: CostDiscountType;
  CqlParams: CqlParams;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  Details: ResolverTypeWrapper<Details>;
  ElectronicAccessRelationship: ResolverTypeWrapper<ElectronicAccessRelationship>;
  Eresource: ResolverTypeWrapper<Eresource>;
  EresourceCreateInventory: EresourceCreateInventory;
  Error: ResolverTypeWrapper<Error>;
  FeeFine: ResolverTypeWrapper<FeeFine>;
  FeeFineAction: ResolverTypeWrapper<FeeFineAction>;
  FixedDueDateSchedule: ResolverTypeWrapper<FixedDueDateSchedule>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  FundDistribution: ResolverTypeWrapper<FundDistribution>;
  FundDistributionDistributionType: FundDistributionDistributionType;
  Hold: ResolverTypeWrapper<Hold>;
  HoldStatus: HoldStatus;
  HoldingSummary: ResolverTypeWrapper<HoldingSummary>;
  HoldingSummaryCollection: ResolverTypeWrapper<HoldingSummaryCollection>;
  HoldingSummaryOrderType: HoldingSummaryOrderType;
  HoldingsNoteType: ResolverTypeWrapper<HoldingsNoteType>;
  HoldingsRecord: ResolverTypeWrapper<HoldingsRecord>;
  HoldingsRecords: ResolverTypeWrapper<HoldingsRecords>;
  HoldingsRecordsSource: ResolverTypeWrapper<HoldingsRecordsSource>;
  HoldingsType: ResolverTypeWrapper<HoldingsType>;
  HoldingsrecordElectronicAccessItem: ResolverTypeWrapper<HoldingsrecordElectronicAccessItem>;
  HoldingsrecordHoldingsStatementsForIndexesItem: ResolverTypeWrapper<HoldingsrecordHoldingsStatementsForIndexesItem>;
  HoldingsrecordHoldingsStatementsForSupplementsItem: ResolverTypeWrapper<HoldingsrecordHoldingsStatementsForSupplementsItem>;
  HoldingsrecordHoldingsStatementsItem: ResolverTypeWrapper<HoldingsrecordHoldingsStatementsItem>;
  HoldingsrecordNotesItem: ResolverTypeWrapper<HoldingsrecordNotesItem>;
  HoldingsrecordReceivingHistory: ResolverTypeWrapper<HoldingsrecordReceivingHistory>;
  HoldingsrecordReceivingHistoryEntriesItem: ResolverTypeWrapper<HoldingsrecordReceivingHistoryEntriesItem>;
  HoldingsrecordssourceSource: HoldingsrecordssourceSource;
  ILLpolicy: ResolverTypeWrapper<IlLpolicy>;
  IdentifierType: ResolverTypeWrapper<IdentifierType>;
  Instance: ResolverTypeWrapper<Instance>;
  InstanceAlternativeTitlesItem: ResolverTypeWrapper<InstanceAlternativeTitlesItem>;
  InstanceClassificationsItem: ResolverTypeWrapper<InstanceClassificationsItem>;
  InstanceContributorsItem: ResolverTypeWrapper<InstanceContributorsItem>;
  InstanceElectronicAccessItem: ResolverTypeWrapper<InstanceElectronicAccessItem>;
  InstanceFormat: ResolverTypeWrapper<InstanceFormat>;
  InstanceIdentifiersItem: ResolverTypeWrapper<InstanceIdentifiersItem>;
  InstanceNoteType: ResolverTypeWrapper<InstanceNoteType>;
  InstanceNotesItem: ResolverTypeWrapper<InstanceNotesItem>;
  InstancePublicationItem: ResolverTypeWrapper<InstancePublicationItem>;
  InstancePublicationPeriod: ResolverTypeWrapper<InstancePublicationPeriod>;
  InstanceSeriesItem: ResolverTypeWrapper<InstanceSeriesItem>;
  InstanceSourceRecordFormat: InstanceSourceRecordFormat;
  InstanceStatus: ResolverTypeWrapper<InstanceStatus>;
  InstanceSubjectsItem: ResolverTypeWrapper<InstanceSubjectsItem>;
  InstanceType: ResolverTypeWrapper<InstanceType>;
  Institution: ResolverTypeWrapper<Institution>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Interval: ResolverTypeWrapper<Interval>;
  IntervalIntervalId: IntervalIntervalId;
  Item: ResolverTypeWrapper<Item>;
  ItemCirculationNotesItem: ResolverTypeWrapper<ItemCirculationNotesItem>;
  ItemCirculationNotesItemNoteType: ItemCirculationNotesItemNoteType;
  ItemCirculationNotesItemSource: ResolverTypeWrapper<ItemCirculationNotesItemSource>;
  ItemCirculationNotesItemSourcePersonal: ResolverTypeWrapper<ItemCirculationNotesItemSourcePersonal>;
  ItemDamagedStatus: ResolverTypeWrapper<ItemDamagedStatus>;
  ItemEffectiveCallNumberComponents: ResolverTypeWrapper<ItemEffectiveCallNumberComponents>;
  ItemElectronicAccessItem: ResolverTypeWrapper<ItemElectronicAccessItem>;
  ItemLastCheckIn: ResolverTypeWrapper<ItemLastCheckIn>;
  ItemNoteType: ResolverTypeWrapper<ItemNoteType>;
  ItemNotesItem: ResolverTypeWrapper<ItemNotesItem>;
  ItemStatus: ResolverTypeWrapper<ItemStatus>;
  Library: ResolverTypeWrapper<Library>;
  License: ResolverTypeWrapper<License>;
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
  LoanType: ResolverTypeWrapper<LoanType>;
  Location: ResolverTypeWrapper<Location>;
  LocationAvailabilityClass: LocationAvailabilityClass;
  LocationDetails: ResolverTypeWrapper<LocationDetails>;
  LostItemFeePolicy: ResolverTypeWrapper<LostItemFeePolicy>;
  ManualBlock: ResolverTypeWrapper<ManualBlock>;
  MaterialType: ResolverTypeWrapper<MaterialType>;
  Metadata: ResolverTypeWrapper<Metadata>;
  ModeOfIssuance: ResolverTypeWrapper<ModeOfIssuance>;
  Money: ResolverTypeWrapper<Money>;
  OrderLocation: ResolverTypeWrapper<OrderLocation>;
  OverdueFinePolicy: ResolverTypeWrapper<OverdueFinePolicy>;
  Patron: ResolverTypeWrapper<Patron>;
  PatronBlockCondition: ResolverTypeWrapper<PatronBlockCondition>;
  PatronBlockConditionValueType: PatronBlockConditionValueType;
  PatronBlockLimit: ResolverTypeWrapper<PatronBlockLimit>;
  PatronCharge: ResolverTypeWrapper<PatronCharge>;
  PatronGroup: ResolverTypeWrapper<PatronGroup>;
  PatronItem: ResolverTypeWrapper<PatronItem>;
  PatronLoan: ResolverTypeWrapper<PatronLoan>;
  PatronNoticePolicy: ResolverTypeWrapper<PatronNoticePolicy>;
  PatronNoticePolicyFeeFineNoticesItem: ResolverTypeWrapper<PatronNoticePolicyFeeFineNoticesItem>;
  PatronNoticePolicyFeeFineNoticesItemFormat: PatronNoticePolicyFeeFineNoticesItemFormat;
  PatronNoticePolicyFeeFineNoticesItemFrequency: PatronNoticePolicyFeeFineNoticesItemFrequency;
  PatronNoticePolicyFeeFineNoticesItemSendOptions: ResolverTypeWrapper<PatronNoticePolicyFeeFineNoticesItemSendOptions>;
  PatronNoticePolicyFeeFineNoticesItemSendOptionsSendHow: PatronNoticePolicyFeeFineNoticesItemSendOptionsSendHow;
  PatronNoticePolicyFeeFineNoticesItemSendOptionsSendWhen: PatronNoticePolicyFeeFineNoticesItemSendOptionsSendWhen;
  PatronNoticePolicyLoanNoticesItem: ResolverTypeWrapper<PatronNoticePolicyLoanNoticesItem>;
  PatronNoticePolicyLoanNoticesItemFormat: PatronNoticePolicyLoanNoticesItemFormat;
  PatronNoticePolicyLoanNoticesItemFrequency: PatronNoticePolicyLoanNoticesItemFrequency;
  PatronNoticePolicyLoanNoticesItemSendOptions: ResolverTypeWrapper<PatronNoticePolicyLoanNoticesItemSendOptions>;
  PatronNoticePolicyLoanNoticesItemSendOptionsSendHow: PatronNoticePolicyLoanNoticesItemSendOptionsSendHow;
  PatronNoticePolicyLoanNoticesItemSendOptionsSendWhen: PatronNoticePolicyLoanNoticesItemSendOptionsSendWhen;
  PatronNoticePolicyRequestNoticesItem: ResolverTypeWrapper<PatronNoticePolicyRequestNoticesItem>;
  PatronNoticePolicyRequestNoticesItemFormat: PatronNoticePolicyRequestNoticesItemFormat;
  PatronNoticePolicyRequestNoticesItemFrequency: PatronNoticePolicyRequestNoticesItemFrequency;
  PatronNoticePolicyRequestNoticesItemSendOptions: ResolverTypeWrapper<PatronNoticePolicyRequestNoticesItemSendOptions>;
  PatronNoticePolicyRequestNoticesItemSendOptionsSendHow: PatronNoticePolicyRequestNoticesItemSendOptionsSendHow;
  PatronNoticePolicyRequestNoticesItemSendOptionsSendWhen: PatronNoticePolicyRequestNoticesItemSendOptionsSendWhen;
  Period: ResolverTypeWrapper<Period>;
  PeriodIntervalId: PeriodIntervalId;
  Physical: ResolverTypeWrapper<Physical>;
  PhysicalCreateInventory: PhysicalCreateInventory;
  Piece: ResolverTypeWrapper<Piece>;
  PieceCollection: ResolverTypeWrapper<PieceCollection>;
  PieceReceivingStatus: PieceReceivingStatus;
  PoLine: ResolverTypeWrapper<PoLine>;
  PoLineCollection: ResolverTypeWrapper<PoLineCollection>;
  ProductIdentifier: ResolverTypeWrapper<ProductIdentifier>;
  ProxyFor: ResolverTypeWrapper<ProxyFor>;
  Quantity: ResolverTypeWrapper<Quantity>;
  QuantityIntervalId: QuantityIntervalId;
  Query: ResolverTypeWrapper<{}>;
  ReminderFeesPolicy: ResolverTypeWrapper<ReminderFeesPolicy>;
  ReminderFeesPolicyReminderScheduleItem: ResolverTypeWrapper<ReminderFeesPolicyReminderScheduleItem>;
  ReminderFeesPolicyReminderScheduleItemNoticeFormat: ReminderFeesPolicyReminderScheduleItemNoticeFormat;
  ReminderFeesPolicyReminderScheduleItemTimeUnitId: ReminderFeesPolicyReminderScheduleItemTimeUnitId;
  Request: ResolverTypeWrapper<Request>;
  RequestDeliveryAddress: ResolverTypeWrapper<RequestDeliveryAddress>;
  RequestFulfillmentPreference: RequestFulfillmentPreference;
  RequestPickupServicePoint: ResolverTypeWrapper<RequestPickupServicePoint>;
  RequestPolicy: ResolverTypeWrapper<RequestPolicy>;
  RequestPolicyAllowedServicePoints: ResolverTypeWrapper<RequestPolicyAllowedServicePoints>;
  RequestProxy: ResolverTypeWrapper<RequestProxy>;
  RequestProxyPatronGroup: ResolverTypeWrapper<RequestProxyPatronGroup>;
  RequestRequestLevel: RequestRequestLevel;
  RequestRequestType: RequestRequestType;
  RequestRequester: ResolverTypeWrapper<RequestRequester>;
  RequestRequesterPatronGroup: ResolverTypeWrapper<RequestRequesterPatronGroup>;
  RequestStatus: RequestStatus;
  RequestType: RequestType;
  ResultInfo: ResolverTypeWrapper<ResultInfo>;
  ResultInfoDiagnosticsItem: ResolverTypeWrapper<ResultInfoDiagnosticsItem>;
  ResultInfoFacetsItem: ResolverTypeWrapper<ResultInfoFacetsItem>;
  ResultInfoFacetsItemFacetValuesItem: ResolverTypeWrapper<ResultInfoFacetsItemFacetValuesItem>;
  ResultInfoFacetsItemFacetValuesItemValue: ResolverTypeWrapper<ResultInfoFacetsItemFacetValuesItemValue>;
  RtacHolding: ResolverTypeWrapper<RtacHolding>;
  RtacHoldingHoldingsStatementsForIndexesItem: ResolverTypeWrapper<RtacHoldingHoldingsStatementsForIndexesItem>;
  RtacHoldingHoldingsStatementsForSupplementsItem: ResolverTypeWrapper<RtacHoldingHoldingsStatementsForSupplementsItem>;
  RtacHoldingHoldingsStatementsItem: ResolverTypeWrapper<RtacHoldingHoldingsStatementsItem>;
  RtacHoldings: ResolverTypeWrapper<RtacHoldings>;
  RtacHoldingsBatch: ResolverTypeWrapper<RtacHoldingsBatch>;
  RtacLibrary: ResolverTypeWrapper<RtacLibrary>;
  RtacMaterialType: ResolverTypeWrapper<RtacMaterialType>;
  Schedule: ResolverTypeWrapper<Schedule>;
  ServicePoint: ResolverTypeWrapper<ServicePoint>;
  ServicePointDetails: ResolverTypeWrapper<ServicePointDetails>;
  ServicepointHoldShelfClosedLibraryDateManagement: ServicepointHoldShelfClosedLibraryDateManagement;
  ServicepointStaffSlipsItem: ResolverTypeWrapper<ServicepointStaffSlipsItem>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Tags: ResolverTypeWrapper<Tags>;
  TimePeriod: ResolverTypeWrapper<TimePeriod>;
  TimePeriodIntervalId: TimePeriodIntervalId;
  Title: ResolverTypeWrapper<Title>;
  UUID: ResolverTypeWrapper<Scalars['UUID']['output']>;
  User: ResolverTypeWrapper<User>;
  UserdataCustomFields: ResolverTypeWrapper<UserdataCustomFields>;
  UserdataMeta: ResolverTypeWrapper<UserdataMeta>;
  UserdataPersonal: ResolverTypeWrapper<UserdataPersonal>;
  UserdataPersonalAddressesItem: ResolverTypeWrapper<UserdataPersonalAddressesItem>;
  VendorDetail: ResolverTypeWrapper<VendorDetail>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Account: Account;
  AccountdataItemStatus: AccountdataItemStatus;
  AccountdataPaymentStatus: AccountdataPaymentStatus;
  AccountdataStatus: AccountdataStatus;
  AlternativeTitleType: AlternativeTitleType;
  Block: Block;
  Boolean: Scalars['Boolean']['output'];
  BoundWithPart: BoundWithPart;
  BoundWithParts: BoundWithParts;
  CallNumberType: CallNumberType;
  Campus: Campus;
  Charge: Charge;
  Claim: Claim;
  ClassificationType: ClassificationType;
  Contributor: Contributor;
  ContributorNameType: ContributorNameType;
  ContributorType: ContributorType;
  Cost: Cost;
  CqlParams: CqlParams;
  DateTime: Scalars['DateTime']['output'];
  Details: Details;
  ElectronicAccessRelationship: ElectronicAccessRelationship;
  Eresource: Eresource;
  Error: Error;
  FeeFine: FeeFine;
  FeeFineAction: FeeFineAction;
  FixedDueDateSchedule: FixedDueDateSchedule;
  Float: Scalars['Float']['output'];
  FundDistribution: FundDistribution;
  Hold: Hold;
  HoldingSummary: HoldingSummary;
  HoldingSummaryCollection: HoldingSummaryCollection;
  HoldingsNoteType: HoldingsNoteType;
  HoldingsRecord: HoldingsRecord;
  HoldingsRecords: HoldingsRecords;
  HoldingsRecordsSource: HoldingsRecordsSource;
  HoldingsType: HoldingsType;
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
  InstanceNoteType: InstanceNoteType;
  InstanceNotesItem: InstanceNotesItem;
  InstancePublicationItem: InstancePublicationItem;
  InstancePublicationPeriod: InstancePublicationPeriod;
  InstanceSeriesItem: InstanceSeriesItem;
  InstanceStatus: InstanceStatus;
  InstanceSubjectsItem: InstanceSubjectsItem;
  InstanceType: InstanceType;
  Institution: Institution;
  Int: Scalars['Int']['output'];
  Interval: Interval;
  Item: Item;
  ItemCirculationNotesItem: ItemCirculationNotesItem;
  ItemCirculationNotesItemSource: ItemCirculationNotesItemSource;
  ItemCirculationNotesItemSourcePersonal: ItemCirculationNotesItemSourcePersonal;
  ItemDamagedStatus: ItemDamagedStatus;
  ItemEffectiveCallNumberComponents: ItemEffectiveCallNumberComponents;
  ItemElectronicAccessItem: ItemElectronicAccessItem;
  ItemLastCheckIn: ItemLastCheckIn;
  ItemNoteType: ItemNoteType;
  ItemNotesItem: ItemNotesItem;
  ItemStatus: ItemStatus;
  Library: Library;
  License: License;
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
  LoanType: LoanType;
  Location: Location;
  LocationDetails: LocationDetails;
  LostItemFeePolicy: LostItemFeePolicy;
  ManualBlock: ManualBlock;
  MaterialType: MaterialType;
  Metadata: Metadata;
  ModeOfIssuance: ModeOfIssuance;
  Money: Money;
  OrderLocation: OrderLocation;
  OverdueFinePolicy: OverdueFinePolicy;
  Patron: Patron;
  PatronBlockCondition: PatronBlockCondition;
  PatronBlockLimit: PatronBlockLimit;
  PatronCharge: PatronCharge;
  PatronGroup: PatronGroup;
  PatronItem: PatronItem;
  PatronLoan: PatronLoan;
  PatronNoticePolicy: PatronNoticePolicy;
  PatronNoticePolicyFeeFineNoticesItem: PatronNoticePolicyFeeFineNoticesItem;
  PatronNoticePolicyFeeFineNoticesItemSendOptions: PatronNoticePolicyFeeFineNoticesItemSendOptions;
  PatronNoticePolicyLoanNoticesItem: PatronNoticePolicyLoanNoticesItem;
  PatronNoticePolicyLoanNoticesItemSendOptions: PatronNoticePolicyLoanNoticesItemSendOptions;
  PatronNoticePolicyRequestNoticesItem: PatronNoticePolicyRequestNoticesItem;
  PatronNoticePolicyRequestNoticesItemSendOptions: PatronNoticePolicyRequestNoticesItemSendOptions;
  Period: Period;
  Physical: Physical;
  Piece: Piece;
  PieceCollection: PieceCollection;
  PoLine: PoLine;
  PoLineCollection: PoLineCollection;
  ProductIdentifier: ProductIdentifier;
  ProxyFor: ProxyFor;
  Quantity: Quantity;
  Query: {};
  ReminderFeesPolicy: ReminderFeesPolicy;
  ReminderFeesPolicyReminderScheduleItem: ReminderFeesPolicyReminderScheduleItem;
  Request: Request;
  RequestDeliveryAddress: RequestDeliveryAddress;
  RequestPickupServicePoint: RequestPickupServicePoint;
  RequestPolicy: RequestPolicy;
  RequestPolicyAllowedServicePoints: RequestPolicyAllowedServicePoints;
  RequestProxy: RequestProxy;
  RequestProxyPatronGroup: RequestProxyPatronGroup;
  RequestRequester: RequestRequester;
  RequestRequesterPatronGroup: RequestRequesterPatronGroup;
  ResultInfo: ResultInfo;
  ResultInfoDiagnosticsItem: ResultInfoDiagnosticsItem;
  ResultInfoFacetsItem: ResultInfoFacetsItem;
  ResultInfoFacetsItemFacetValuesItem: ResultInfoFacetsItemFacetValuesItem;
  ResultInfoFacetsItemFacetValuesItemValue: ResultInfoFacetsItemFacetValuesItemValue;
  RtacHolding: RtacHolding;
  RtacHoldingHoldingsStatementsForIndexesItem: RtacHoldingHoldingsStatementsForIndexesItem;
  RtacHoldingHoldingsStatementsForSupplementsItem: RtacHoldingHoldingsStatementsForSupplementsItem;
  RtacHoldingHoldingsStatementsItem: RtacHoldingHoldingsStatementsItem;
  RtacHoldings: RtacHoldings;
  RtacHoldingsBatch: RtacHoldingsBatch;
  RtacLibrary: RtacLibrary;
  RtacMaterialType: RtacMaterialType;
  Schedule: Schedule;
  ServicePoint: ServicePoint;
  ServicePointDetails: ServicePointDetails;
  ServicepointStaffSlipsItem: ServicepointStaffSlipsItem;
  String: Scalars['String']['output'];
  Tags: Tags;
  TimePeriod: TimePeriod;
  Title: Title;
  UUID: Scalars['UUID']['output'];
  User: User;
  UserdataCustomFields: UserdataCustomFields;
  UserdataMeta: UserdataMeta;
  UserdataPersonal: UserdataPersonal;
  UserdataPersonalAddressesItem: UserdataPersonalAddressesItem;
  VendorDetail: VendorDetail;
}>;

export type AccountResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = ResolversObject<{
  actions?: Resolver<Maybe<Array<Maybe<ResolversTypes['FeeFineAction']>>>, ParentType, ContextType>;
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

export type AlternativeTitleTypeResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['AlternativeTitleType'] = ResolversParentTypes['AlternativeTitleType']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  source?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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

export type BoundWithPartResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['BoundWithPart'] = ResolversParentTypes['BoundWithPart']> = ResolversObject<{
  holdingsRecordId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BoundWithPartsResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['BoundWithParts'] = ResolversParentTypes['BoundWithParts']> = ResolversObject<{
  boundWithParts?: Resolver<Array<ResolversTypes['BoundWithPart']>, ParentType, ContextType>;
  totalRecords?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CallNumberTypeResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['CallNumberType'] = ResolversParentTypes['CallNumberType']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  source?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CampusResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Campus'] = ResolversParentTypes['Campus']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  institution?: Resolver<Maybe<ResolversTypes['Institution']>, ParentType, ContextType>;
  institutionId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  libraries?: Resolver<Maybe<Array<Maybe<ResolversTypes['Library']>>>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ChargeResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Charge'] = ResolversParentTypes['Charge']> = ResolversObject<{
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  chargeType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ClaimResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Claim'] = ResolversParentTypes['Claim']> = ResolversObject<{
  claimed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  grace?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sent?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ClassificationTypeResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['ClassificationType'] = ResolversParentTypes['ClassificationType']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContributorResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Contributor'] = ResolversParentTypes['Contributor']> = ResolversObject<{
  contributor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contributorNameTypeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContributorNameTypeResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['ContributorNameType'] = ResolversParentTypes['ContributorNameType']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ordering?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContributorTypeResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['ContributorType'] = ResolversParentTypes['ContributorType']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  source?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CostResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Cost'] = ResolversParentTypes['Cost']> = ResolversObject<{
  additionalCost?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  currency?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  discount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  discountType?: Resolver<Maybe<ResolversTypes['CostDiscountType']>, ParentType, ContextType>;
  exchangeRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  fyroAdjustmentAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  listUnitPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  listUnitPriceElectronic?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  poLineEstimatedPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantityElectronic?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  quantityPhysical?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DetailsResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Details'] = ResolversParentTypes['Details']> = ResolversObject<{
  isAcknowledged?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  productIds?: Resolver<Maybe<Array<ResolversTypes['ProductIdentifier']>>, ParentType, ContextType>;
  receivingNote?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subscriptionFrom?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  subscriptionInterval?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  subscriptionTo?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ElectronicAccessRelationshipResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['ElectronicAccessRelationship'] = ResolversParentTypes['ElectronicAccessRelationship']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EresourceResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Eresource'] = ResolversParentTypes['Eresource']> = ResolversObject<{
  accessProvider?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  activated?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  activationDue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createInventory?: Resolver<Maybe<ResolversTypes['EresourceCreateInventory']>, ParentType, ContextType>;
  expectedActivation?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  license?: Resolver<Maybe<ResolversTypes['License']>, ParentType, ContextType>;
  materialType?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  resourceUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  trial?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  userLimit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ErrorResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Error'] = ResolversParentTypes['Error']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

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

export type FeeFineActionResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['FeeFineAction'] = ResolversParentTypes['FeeFineAction']> = ResolversObject<{
  accountId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  amountAction?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  balance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  comments?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  dateAction?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  notify?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  originalCreatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  paymentMethod?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  transactionInformation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  typeAction?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
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

export type FundDistributionResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['FundDistribution'] = ResolversParentTypes['FundDistribution']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  distributionType?: Resolver<ResolversTypes['FundDistributionDistributionType'], ParentType, ContextType>;
  encumbrance?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  expenseClassId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  fundId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HoldResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Hold'] = ResolversParentTypes['Hold']> = ResolversObject<{
  canceledByUserId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  canceledDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  cancellationAdditionalInformation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cancellationReasonId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['Request']>, ParentType, ContextType>;
  expirationDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  item?: Resolver<Maybe<ResolversTypes['PatronItem']>, ParentType, ContextType>;
  patronComments?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pickupLocation?: Resolver<Maybe<ResolversTypes['ServicePoint']>, ParentType, ContextType>;
  pickupLocationId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  queuePosition?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  queueTotalLength?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  requestDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  requestId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['HoldStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HoldingSummaryResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['HoldingSummary'] = ResolversParentTypes['HoldingSummary']> = ResolversObject<{
  orderCloseReason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orderSentDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  orderStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orderType?: Resolver<Maybe<ResolversTypes['HoldingSummaryOrderType']>, ParentType, ContextType>;
  pieces?: Resolver<Maybe<Array<Maybe<ResolversTypes['Piece']>>>, ParentType, ContextType>;
  poLine?: Resolver<Maybe<ResolversTypes['PoLine']>, ParentType, ContextType>;
  poLineId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  poLineNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  polReceiptStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HoldingSummaryCollectionResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['HoldingSummaryCollection'] = ResolversParentTypes['HoldingSummaryCollection']> = ResolversObject<{
  holdingSummaries?: Resolver<Array<ResolversTypes['HoldingSummary']>, ParentType, ContextType>;
  totalRecords?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
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
  boundWithItem?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType>;
  callNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  callNumberPrefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  callNumberSuffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  callNumberType?: Resolver<Maybe<ResolversTypes['CallNumberType']>, ParentType, ContextType>;
  callNumberTypeId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  copyNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  digitizationPolicy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  discoverySuppress?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  effectiveLocation?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>;
  effectiveLocationId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  electronicAccess?: Resolver<Maybe<Array<ResolversTypes['HoldingsrecordElectronicAccessItem']>>, ParentType, ContextType>;
  formerIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  holdingSummaries?: Resolver<Maybe<Array<Maybe<ResolversTypes['HoldingSummary']>>>, ParentType, ContextType>;
  holdingsInstance?: Resolver<Maybe<ResolversTypes['Instance']>, ParentType, ContextType>;
  holdingsItems?: Resolver<Maybe<Array<ResolversTypes['Item']>>, ParentType, ContextType>;
  holdingsStatements?: Resolver<Maybe<Array<ResolversTypes['HoldingsrecordHoldingsStatementsItem']>>, ParentType, ContextType>;
  holdingsStatementsForIndexes?: Resolver<Maybe<Array<ResolversTypes['HoldingsrecordHoldingsStatementsForIndexesItem']>>, ParentType, ContextType>;
  holdingsStatementsForSupplements?: Resolver<Maybe<Array<ResolversTypes['HoldingsrecordHoldingsStatementsForSupplementsItem']>>, ParentType, ContextType>;
  holdingsType?: Resolver<Maybe<ResolversTypes['HoldingsType']>, ParentType, ContextType>;
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
  source?: Resolver<Maybe<ResolversTypes['HoldingsRecordsSource']>, ParentType, ContextType>;
  sourceId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  statisticalCodeIds?: Resolver<Maybe<Array<ResolversTypes['UUID']>>, ParentType, ContextType>;
  tags?: Resolver<Maybe<ResolversTypes['Tags']>, ParentType, ContextType>;
  temporaryLocation?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>;
  temporaryLocationId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HoldingsRecordsResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['HoldingsRecords'] = ResolversParentTypes['HoldingsRecords']> = ResolversObject<{
  holdingsRecords?: Resolver<Array<ResolversTypes['HoldingsRecord']>, ParentType, ContextType>;
  resultInfo?: Resolver<Maybe<ResolversTypes['ResultInfo']>, ParentType, ContextType>;
  totalRecords?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HoldingsRecordsSourceResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['HoldingsRecordsSource'] = ResolversParentTypes['HoldingsRecordsSource']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['HoldingsrecordssourceSource']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HoldingsTypeResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['HoldingsType'] = ResolversParentTypes['HoldingsType']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  source?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HoldingsrecordElectronicAccessItemResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['HoldingsrecordElectronicAccessItem'] = ResolversParentTypes['HoldingsrecordElectronicAccessItem']> = ResolversObject<{
  linkText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  materialsSpecification?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publicNote?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  relationship?: Resolver<Maybe<ResolversTypes['ElectronicAccessRelationship']>, ParentType, ContextType>;
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
  holdingsRecords2?: Resolver<Maybe<ResolversTypes['HoldingsRecords']>, ParentType, ContextType>;
  hrid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  identifiers?: Resolver<Maybe<Array<ResolversTypes['InstanceIdentifiersItem']>>, ParentType, ContextType>;
  indexTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  instanceFormatIds?: Resolver<Maybe<Array<ResolversTypes['UUID']>>, ParentType, ContextType>;
  instanceFormats?: Resolver<Maybe<Array<ResolversTypes['InstanceFormat']>>, ParentType, ContextType>;
  instanceType?: Resolver<Maybe<ResolversTypes['InstanceType']>, ParentType, ContextType>;
  instanceTypeId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['Item']>>>, ParentType, ContextType, Partial<InstanceItemsArgs>>;
  languages?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  matchKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  modeOfIssuance?: Resolver<Maybe<ResolversTypes['ModeOfIssuance']>, ParentType, ContextType>;
  modeOfIssuanceId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  natureOfContentTermIds?: Resolver<Maybe<Array<ResolversTypes['UUID']>>, ParentType, ContextType>;
  notes?: Resolver<Maybe<Array<ResolversTypes['InstanceNotesItem']>>, ParentType, ContextType>;
  orderLines?: Resolver<Maybe<Array<Maybe<ResolversTypes['PoLine']>>>, ParentType, ContextType>;
  physicalDescriptions?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  previouslyHeld?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  publication?: Resolver<Maybe<Array<ResolversTypes['InstancePublicationItem']>>, ParentType, ContextType>;
  publicationFrequency?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  publicationPeriod?: Resolver<Maybe<ResolversTypes['InstancePublicationPeriod']>, ParentType, ContextType>;
  publicationRange?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  queueTotalLength?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  series?: Resolver<Maybe<Array<ResolversTypes['InstanceSeriesItem']>>, ParentType, ContextType>;
  source?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sourceRecordFormat?: Resolver<Maybe<ResolversTypes['InstanceSourceRecordFormat']>, ParentType, ContextType>;
  staffSuppress?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  statisticalCodeIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['InstanceStatus']>, ParentType, ContextType>;
  statusId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  statusUpdatedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subjects?: Resolver<Maybe<Array<ResolversTypes['InstanceSubjectsItem']>>, ParentType, ContextType>;
  tags?: Resolver<Maybe<ResolversTypes['Tags']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InstanceAlternativeTitlesItemResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['InstanceAlternativeTitlesItem'] = ResolversParentTypes['InstanceAlternativeTitlesItem']> = ResolversObject<{
  alternativeTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  alternativeTitleType?: Resolver<Maybe<ResolversTypes['AlternativeTitleType']>, ParentType, ContextType>;
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
  contributorType?: Resolver<Maybe<ResolversTypes['ContributorType']>, ParentType, ContextType>;
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
  relationship?: Resolver<Maybe<ResolversTypes['ElectronicAccessRelationship']>, ParentType, ContextType>;
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

export type InstanceNoteTypeResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['InstanceNoteType'] = ResolversParentTypes['InstanceNoteType']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  source?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InstanceNotesItemResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['InstanceNotesItem'] = ResolversParentTypes['InstanceNotesItem']> = ResolversObject<{
  instanceNoteType?: Resolver<Maybe<ResolversTypes['InstanceNoteType']>, ParentType, ContextType>;
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

export type InstanceStatusResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['InstanceStatus'] = ResolversParentTypes['InstanceStatus']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  source?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InstanceSubjectsItemResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['InstanceSubjectsItem'] = ResolversParentTypes['InstanceSubjectsItem']> = ResolversObject<{
  authorityId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InstanceTypeResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['InstanceType'] = ResolversParentTypes['InstanceType']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  source?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InstitutionResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Institution'] = ResolversParentTypes['Institution']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IntervalResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Interval'] = ResolversParentTypes['Interval']> = ResolversObject<{
  duration?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  intervalId?: Resolver<ResolversTypes['IntervalIntervalId'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ItemResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Item'] = ResolversParentTypes['Item']> = ResolversObject<{
  _version?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  accessionNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  administrativeNotes?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  barcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  boundWithHoldingsPerItem?: Resolver<Maybe<Array<Maybe<ResolversTypes['HoldingsRecord']>>>, ParentType, ContextType>;
  chronology?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  circulationNotes?: Resolver<Maybe<Array<ResolversTypes['ItemCirculationNotesItem']>>, ParentType, ContextType>;
  copyNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  descriptionOfPieces?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  discoverySuppress?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  displaySummary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dueDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
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
  inTransitDestinationServicePoint?: Resolver<Maybe<ResolversTypes['ServicePoint']>, ParentType, ContextType>;
  inTransitDestinationServicePointId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  instance?: Resolver<Maybe<ResolversTypes['Instance']>, ParentType, ContextType>;
  itemDamagedStatus?: Resolver<Maybe<ResolversTypes['ItemDamagedStatus']>, ParentType, ContextType>;
  itemDamagedStatusDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  itemDamagedStatusId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  itemIdentifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  itemLevelCallNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  itemLevelCallNumberPrefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  itemLevelCallNumberSuffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  itemLevelCallNumberType?: Resolver<Maybe<ResolversTypes['CallNumberType']>, ParentType, ContextType>;
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
  permanentLoanType?: Resolver<Maybe<ResolversTypes['LoanType']>, ParentType, ContextType>;
  permanentLoanTypeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  permanentLocation?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>;
  permanentLocationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  purchaseOrderLineIdentifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  queueTotalLength?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  statisticalCodeIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ItemStatus'], ParentType, ContextType>;
  tags?: Resolver<Maybe<ResolversTypes['Tags']>, ParentType, ContextType>;
  temporaryLoanType?: Resolver<Maybe<ResolversTypes['LoanType']>, ParentType, ContextType>;
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

export type ItemDamagedStatusResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['ItemDamagedStatus'] = ResolversParentTypes['ItemDamagedStatus']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  source?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ItemEffectiveCallNumberComponentsResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['ItemEffectiveCallNumberComponents'] = ResolversParentTypes['ItemEffectiveCallNumberComponents']> = ResolversObject<{
  callNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  prefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['CallNumberType']>, ParentType, ContextType>;
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

export type LicenseResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['License'] = ResolversParentTypes['License']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  proxyUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  proxyUserId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  renewalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  returnDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['LoanStatus']>, ParentType, ContextType>;
  systemReturnDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
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
  alternateFixedDueDateSchedule?: Resolver<Maybe<ResolversTypes['FixedDueDateSchedule']>, ParentType, ContextType>;
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

export type LoanTypeResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['LoanType'] = ResolversParentTypes['LoanType']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  availabilityClass?: Resolver<Maybe<ResolversTypes['LocationAvailabilityClass']>, ParentType, ContextType>;
  discoveryDisplayUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  holdingsTypeName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pageAeonSite?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pageMediationGroupKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pagePreferSendIlliad?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pageServicePointCodes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pageServicePoints?: Resolver<Maybe<Array<Maybe<ResolversTypes['ServicePoint']>>>, ParentType, ContextType>;
  pagingSchedule?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  scanServicePoint?: Resolver<Maybe<ResolversTypes['ServicePoint']>, ParentType, ContextType>;
  scanServicePointCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  searchworksAdditionalLibraryCodeFacetValues?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  searchworksGovDocsClassification?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  searchworksLocationFacetDisplayName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  searchworksTreatTemporaryLocationAsPermanentLocation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shelvedByText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stackmapBaseUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LostItemFeePolicyResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['LostItemFeePolicy'] = ResolversParentTypes['LostItemFeePolicy']> = ResolversObject<{
  chargeAmountItem?: Resolver<Maybe<ResolversTypes['Charge']>, ParentType, ContextType>;
  chargeAmountItemPatron?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  chargeAmountItemSystem?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  feesFinesShallRefunded?: Resolver<Maybe<ResolversTypes['Period']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  itemAgedLostOverdue?: Resolver<Maybe<ResolversTypes['Period']>, ParentType, ContextType>;
  lostItemChargeFeeFine?: Resolver<Maybe<ResolversTypes['Period']>, ParentType, ContextType>;
  lostItemProcessingFee?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lostItemReturned?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  patronBilledAfterAgedLost?: Resolver<Maybe<ResolversTypes['Period']>, ParentType, ContextType>;
  patronBilledAfterRecalledItemAgedLost?: Resolver<Maybe<ResolversTypes['Period']>, ParentType, ContextType>;
  recalledItemAgedLostOverdue?: Resolver<Maybe<ResolversTypes['Period']>, ParentType, ContextType>;
  replacedLostItemProcessingFee?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  replacementAllowed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  replacementProcessingFee?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  returnedLostItemProcessingFee?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
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

export type ModeOfIssuanceResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['ModeOfIssuance'] = ResolversParentTypes['ModeOfIssuance']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MoneyResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Money'] = ResolversParentTypes['Money']> = ResolversObject<{
  amount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  isoCurrencyCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderLocationResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['OrderLocation'] = ResolversParentTypes['OrderLocation']> = ResolversObject<{
  holdingId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  locationId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  quantityElectronic?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  quantityPhysical?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OverdueFinePolicyResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['OverdueFinePolicy'] = ResolversParentTypes['OverdueFinePolicy']> = ResolversObject<{
  countClosed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  forgiveOverdueFine?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  gracePeriodRecall?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  maxOverdueFine?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  maxOverdueRecallFine?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  overdueFine?: Resolver<Maybe<ResolversTypes['Quantity']>, ParentType, ContextType>;
  overdueRecallFine?: Resolver<Maybe<ResolversTypes['Quantity']>, ParentType, ContextType>;
  reminderFeesPolicy?: Resolver<Maybe<ResolversTypes['ReminderFeesPolicy']>, ParentType, ContextType>;
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
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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

export type PatronNoticePolicyResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['PatronNoticePolicy'] = ResolversParentTypes['PatronNoticePolicy']> = ResolversObject<{
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  feeFineNotices?: Resolver<Maybe<Array<ResolversTypes['PatronNoticePolicyFeeFineNoticesItem']>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  loanNotices?: Resolver<Maybe<Array<ResolversTypes['PatronNoticePolicyLoanNoticesItem']>>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  requestNotices?: Resolver<Maybe<Array<ResolversTypes['PatronNoticePolicyRequestNoticesItem']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PatronNoticePolicyFeeFineNoticesItemResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['PatronNoticePolicyFeeFineNoticesItem'] = ResolversParentTypes['PatronNoticePolicyFeeFineNoticesItem']> = ResolversObject<{
  format?: Resolver<ResolversTypes['PatronNoticePolicyFeeFineNoticesItemFormat'], ParentType, ContextType>;
  frequency?: Resolver<Maybe<ResolversTypes['PatronNoticePolicyFeeFineNoticesItemFrequency']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  realTime?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  sendOptions?: Resolver<Maybe<ResolversTypes['PatronNoticePolicyFeeFineNoticesItemSendOptions']>, ParentType, ContextType>;
  templateId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  templateName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PatronNoticePolicyFeeFineNoticesItemSendOptionsResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['PatronNoticePolicyFeeFineNoticesItemSendOptions'] = ResolversParentTypes['PatronNoticePolicyFeeFineNoticesItemSendOptions']> = ResolversObject<{
  sendBy?: Resolver<Maybe<ResolversTypes['Interval']>, ParentType, ContextType>;
  sendEvery?: Resolver<Maybe<ResolversTypes['Interval']>, ParentType, ContextType>;
  sendHow?: Resolver<Maybe<ResolversTypes['PatronNoticePolicyFeeFineNoticesItemSendOptionsSendHow']>, ParentType, ContextType>;
  sendWhen?: Resolver<ResolversTypes['PatronNoticePolicyFeeFineNoticesItemSendOptionsSendWhen'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PatronNoticePolicyLoanNoticesItemResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['PatronNoticePolicyLoanNoticesItem'] = ResolversParentTypes['PatronNoticePolicyLoanNoticesItem']> = ResolversObject<{
  format?: Resolver<ResolversTypes['PatronNoticePolicyLoanNoticesItemFormat'], ParentType, ContextType>;
  frequency?: Resolver<Maybe<ResolversTypes['PatronNoticePolicyLoanNoticesItemFrequency']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  realTime?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  sendOptions?: Resolver<Maybe<ResolversTypes['PatronNoticePolicyLoanNoticesItemSendOptions']>, ParentType, ContextType>;
  templateId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  templateName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PatronNoticePolicyLoanNoticesItemSendOptionsResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['PatronNoticePolicyLoanNoticesItemSendOptions'] = ResolversParentTypes['PatronNoticePolicyLoanNoticesItemSendOptions']> = ResolversObject<{
  sendBy?: Resolver<Maybe<ResolversTypes['Interval']>, ParentType, ContextType>;
  sendEvery?: Resolver<Maybe<ResolversTypes['Interval']>, ParentType, ContextType>;
  sendHow?: Resolver<Maybe<ResolversTypes['PatronNoticePolicyLoanNoticesItemSendOptionsSendHow']>, ParentType, ContextType>;
  sendWhen?: Resolver<ResolversTypes['PatronNoticePolicyLoanNoticesItemSendOptionsSendWhen'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PatronNoticePolicyRequestNoticesItemResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['PatronNoticePolicyRequestNoticesItem'] = ResolversParentTypes['PatronNoticePolicyRequestNoticesItem']> = ResolversObject<{
  format?: Resolver<ResolversTypes['PatronNoticePolicyRequestNoticesItemFormat'], ParentType, ContextType>;
  frequency?: Resolver<Maybe<ResolversTypes['PatronNoticePolicyRequestNoticesItemFrequency']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  realTime?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  sendOptions?: Resolver<Maybe<ResolversTypes['PatronNoticePolicyRequestNoticesItemSendOptions']>, ParentType, ContextType>;
  templateId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  templateName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PatronNoticePolicyRequestNoticesItemSendOptionsResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['PatronNoticePolicyRequestNoticesItemSendOptions'] = ResolversParentTypes['PatronNoticePolicyRequestNoticesItemSendOptions']> = ResolversObject<{
  sendBy?: Resolver<Maybe<ResolversTypes['Interval']>, ParentType, ContextType>;
  sendEvery?: Resolver<Maybe<ResolversTypes['Interval']>, ParentType, ContextType>;
  sendHow?: Resolver<Maybe<ResolversTypes['PatronNoticePolicyRequestNoticesItemSendOptionsSendHow']>, ParentType, ContextType>;
  sendWhen?: Resolver<ResolversTypes['PatronNoticePolicyRequestNoticesItemSendOptionsSendWhen'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PeriodResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Period'] = ResolversParentTypes['Period']> = ResolversObject<{
  duration?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  intervalId?: Resolver<ResolversTypes['PeriodIntervalId'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PhysicalResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Physical'] = ResolversParentTypes['Physical']> = ResolversObject<{
  createInventory?: Resolver<Maybe<ResolversTypes['PhysicalCreateInventory']>, ParentType, ContextType>;
  expectedReceiptDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  materialSupplier?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  materialType?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  receiptDue?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  volumes?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PieceResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Piece'] = ResolversParentTypes['Piece']> = ResolversObject<{
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  chronology?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  copyNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  discoverySuppress?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  displayOnHolding?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  enumeration?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  format?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  holdingId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  itemId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  locationId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  poLineId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  receiptDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  receivedDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  receivingStatus?: Resolver<ResolversTypes['PieceReceivingStatus'], ParentType, ContextType>;
  supplement?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  titleId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PieceCollectionResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['PieceCollection'] = ResolversParentTypes['PieceCollection']> = ResolversObject<{
  pieces?: Resolver<Maybe<Array<ResolversTypes['Piece']>>, ParentType, ContextType>;
  totalRecords?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PoLineResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['PoLine'] = ResolversParentTypes['PoLine']> = ResolversObject<{
  acquisitionMethod?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  agreementId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  alerts?: Resolver<Maybe<Array<ResolversTypes['UUID']>>, ParentType, ContextType>;
  automaticExport?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  cancellationRestriction?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  cancellationRestrictionNote?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  checkinItems?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  claims?: Resolver<Maybe<Array<ResolversTypes['Claim']>>, ParentType, ContextType>;
  collection?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  contributors?: Resolver<Maybe<Array<ResolversTypes['Contributor']>>, ParentType, ContextType>;
  cost?: Resolver<Maybe<ResolversTypes['Cost']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['Details']>, ParentType, ContextType>;
  donor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  edition?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  eresource?: Resolver<Maybe<ResolversTypes['Eresource']>, ParentType, ContextType>;
  fundDistribution?: Resolver<Maybe<Array<ResolversTypes['FundDistribution']>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  instanceId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  isPackage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastEDIExportDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  locations?: Resolver<Maybe<Array<ResolversTypes['OrderLocation']>>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  orderFormat?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  packagePoLineId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  paymentStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  physical?: Resolver<Maybe<ResolversTypes['Physical']>, ParentType, ContextType>;
  pieces?: Resolver<Maybe<Array<Maybe<ResolversTypes['Piece']>>>, ParentType, ContextType>;
  poLineDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  poLineNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publicationDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publisher?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  purchaseOrderId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  receiptDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  receiptStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  renewalNote?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reportingCodes?: Resolver<Maybe<Array<ResolversTypes['UUID']>>, ParentType, ContextType>;
  requester?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rush?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  selector?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tags?: Resolver<Maybe<ResolversTypes['Tags']>, ParentType, ContextType>;
  titleOrPackage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vendorDetail?: Resolver<Maybe<ResolversTypes['VendorDetail']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PoLineCollectionResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['PoLineCollection'] = ResolversParentTypes['PoLineCollection']> = ResolversObject<{
  poLines?: Resolver<Array<ResolversTypes['PoLine']>, ParentType, ContextType>;
  totalRecords?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductIdentifierResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['ProductIdentifier'] = ResolversParentTypes['ProductIdentifier']> = ResolversObject<{
  productId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productIdType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  qualifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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

export type QuantityResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Quantity'] = ResolversParentTypes['Quantity']> = ResolversObject<{
  intervalId?: Resolver<Maybe<ResolversTypes['QuantityIntervalId']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  availability?: Resolver<Maybe<Array<Maybe<ResolversTypes['RtacHolding']>>>, ParentType, ContextType, Partial<QueryAvailabilityArgs>>;
  campus?: Resolver<Maybe<ResolversTypes['Campus']>, ParentType, ContextType, Partial<QueryCampusArgs>>;
  campuses?: Resolver<Maybe<Array<Maybe<ResolversTypes['Campus']>>>, ParentType, ContextType>;
  feeFineTypes?: Resolver<Maybe<Array<Maybe<ResolversTypes['FeeFine']>>>, ParentType, ContextType>;
  holdingsRecord?: Resolver<Maybe<ResolversTypes['HoldingsRecord']>, ParentType, ContextType, RequireFields<QueryHoldingsRecordArgs, 'id'>>;
  holdingsRecords?: Resolver<Maybe<Array<Maybe<ResolversTypes['HoldingsRecord']>>>, ParentType, ContextType, Partial<QueryHoldingsRecordsArgs>>;
  instance?: Resolver<Maybe<ResolversTypes['Instance']>, ParentType, ContextType, RequireFields<QueryInstanceArgs, 'id'>>;
  instances?: Resolver<Maybe<Array<Maybe<ResolversTypes['Instance']>>>, ParentType, ContextType, Partial<QueryInstancesArgs>>;
  institutions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Institution']>>>, ParentType, ContextType>;
  item?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType, RequireFields<QueryItemArgs, 'id'>>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['Item']>>>, ParentType, ContextType, Partial<QueryItemsArgs>>;
  libraries?: Resolver<Maybe<Array<Maybe<ResolversTypes['Library']>>>, ParentType, ContextType>;
  library?: Resolver<Maybe<ResolversTypes['Library']>, ParentType, ContextType, Partial<QueryLibraryArgs>>;
  loanPolicies?: Resolver<Maybe<Array<Maybe<ResolversTypes['LoanPolicy']>>>, ParentType, ContextType>;
  loanTypes?: Resolver<Maybe<Array<Maybe<ResolversTypes['LoanType']>>>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType, Partial<QueryLocationArgs>>;
  locations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Location']>>>, ParentType, ContextType>;
  lostItemFeesPolicies?: Resolver<Maybe<Array<Maybe<ResolversTypes['LostItemFeePolicy']>>>, ParentType, ContextType>;
  materialTypes?: Resolver<Maybe<Array<Maybe<ResolversTypes['MaterialType']>>>, ParentType, ContextType>;
  overdueFinePolicies?: Resolver<Maybe<Array<Maybe<ResolversTypes['OverdueFinePolicy']>>>, ParentType, ContextType>;
  patron?: Resolver<Maybe<ResolversTypes['Patron']>, ParentType, ContextType, RequireFields<QueryPatronArgs, 'id'>>;
  patronGroups?: Resolver<Maybe<Array<Maybe<ResolversTypes['PatronGroup']>>>, ParentType, ContextType>;
  patronNoticePolicies?: Resolver<Maybe<Array<Maybe<ResolversTypes['PatronNoticePolicy']>>>, ParentType, ContextType>;
  requestPolicies?: Resolver<Maybe<Array<Maybe<ResolversTypes['RequestPolicy']>>>, ParentType, ContextType>;
  servicePoints?: Resolver<Maybe<Array<Maybe<ResolversTypes['ServicePoint']>>>, ParentType, ContextType, Partial<QueryServicePointsArgs>>;
}>;

export type ReminderFeesPolicyResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['ReminderFeesPolicy'] = ResolversParentTypes['ReminderFeesPolicy']> = ResolversObject<{
  allowRenewalOfItemsWithReminderFees?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  clearPatronBlockWhenPaid?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  countClosed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  ignoreGracePeriodHolds?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  ignoreGracePeriodRecall?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  reminderSchedule?: Resolver<Maybe<Array<ResolversTypes['ReminderFeesPolicyReminderScheduleItem']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReminderFeesPolicyReminderScheduleItemResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['ReminderFeesPolicyReminderScheduleItem'] = ResolversParentTypes['ReminderFeesPolicyReminderScheduleItem']> = ResolversObject<{
  blockTemplateId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  interval?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  noticeFormat?: Resolver<Maybe<ResolversTypes['ReminderFeesPolicyReminderScheduleItemNoticeFormat']>, ParentType, ContextType>;
  noticeTemplateId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  reminderFee?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  timeUnitId?: Resolver<ResolversTypes['ReminderFeesPolicyReminderScheduleItemTimeUnitId'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RequestResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Request'] = ResolversParentTypes['Request']> = ResolversObject<{
  cancellationAdditionalInformation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cancellationReasonId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  cancelledByUserId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  cancelledDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deliveryAddress?: Resolver<Maybe<ResolversTypes['RequestDeliveryAddress']>, ParentType, ContextType>;
  deliveryAddressTypeId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  fulfillmentPreference?: Resolver<Maybe<ResolversTypes['RequestFulfillmentPreference']>, ParentType, ContextType>;
  holdShelfExpirationDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  holdingsRecordId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  instanceId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  itemId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  patronComments?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pickupServicePoint?: Resolver<Maybe<ResolversTypes['RequestPickupServicePoint']>, ParentType, ContextType>;
  pickupServicePointId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  proxy?: Resolver<Maybe<ResolversTypes['RequestProxy']>, ParentType, ContextType>;
  proxyUserId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  requestDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  requestExpirationDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  requestLevel?: Resolver<Maybe<ResolversTypes['RequestRequestLevel']>, ParentType, ContextType>;
  requestType?: Resolver<ResolversTypes['RequestRequestType'], ParentType, ContextType>;
  requester?: Resolver<Maybe<ResolversTypes['RequestRequester']>, ParentType, ContextType>;
  requesterId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['RequestStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RequestDeliveryAddressResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['RequestDeliveryAddress'] = ResolversParentTypes['RequestDeliveryAddress']> = ResolversObject<{
  addressLine1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  addressLine2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  addressTypeId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postalCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RequestPickupServicePointResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['RequestPickupServicePoint'] = ResolversParentTypes['RequestPickupServicePoint']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  discoveryDisplayName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pickupLocation?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  shelvingLagTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RequestPolicyResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['RequestPolicy'] = ResolversParentTypes['RequestPolicy']> = ResolversObject<{
  allowedServicePoints?: Resolver<Maybe<ResolversTypes['RequestPolicyAllowedServicePoints']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  requestTypes?: Resolver<Maybe<Array<ResolversTypes['RequestType']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RequestPolicyAllowedServicePointsResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['RequestPolicyAllowedServicePoints'] = ResolversParentTypes['RequestPolicyAllowedServicePoints']> = ResolversObject<{
  Hold?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  Page?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  Recall?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RequestProxyResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['RequestProxy'] = ResolversParentTypes['RequestProxy']> = ResolversObject<{
  barcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  middleName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  patronGroup?: Resolver<Maybe<ResolversTypes['RequestProxyPatronGroup']>, ParentType, ContextType>;
  patronGroupId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RequestProxyPatronGroupResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['RequestProxyPatronGroup'] = ResolversParentTypes['RequestProxyPatronGroup']> = ResolversObject<{
  desc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  group?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RequestRequesterResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['RequestRequester'] = ResolversParentTypes['RequestRequester']> = ResolversObject<{
  barcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  middleName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  patronGroup?: Resolver<Maybe<ResolversTypes['RequestRequesterPatronGroup']>, ParentType, ContextType>;
  patronGroupId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RequestRequesterPatronGroupResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['RequestRequesterPatronGroup'] = ResolversParentTypes['RequestRequesterPatronGroup']> = ResolversObject<{
  desc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  group?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResultInfoResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['ResultInfo'] = ResolversParentTypes['ResultInfo']> = ResolversObject<{
  diagnostics?: Resolver<Maybe<Array<ResolversTypes['ResultInfoDiagnosticsItem']>>, ParentType, ContextType>;
  facets?: Resolver<Maybe<Array<ResolversTypes['ResultInfoFacetsItem']>>, ParentType, ContextType>;
  responseTime?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalRecords?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalRecordsEstimated?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  totalRecordsRounded?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResultInfoDiagnosticsItemResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['ResultInfoDiagnosticsItem'] = ResolversParentTypes['ResultInfoDiagnosticsItem']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  module?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recordCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResultInfoFacetsItemResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['ResultInfoFacetsItem'] = ResolversParentTypes['ResultInfoFacetsItem']> = ResolversObject<{
  facetValues?: Resolver<Maybe<Array<ResolversTypes['ResultInfoFacetsItemFacetValuesItem']>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResultInfoFacetsItemFacetValuesItemResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['ResultInfoFacetsItemFacetValuesItem'] = ResolversParentTypes['ResultInfoFacetsItemFacetValuesItem']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['ResultInfoFacetsItemFacetValuesItemValue']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResultInfoFacetsItemFacetValuesItemValueResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['ResultInfoFacetsItemFacetValuesItemValue'] = ResolversParentTypes['ResultInfoFacetsItemFacetValuesItemValue']> = ResolversObject<{
  _typesWithoutFieldsAreNotAllowed_?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RtacHoldingResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['RtacHolding'] = ResolversParentTypes['RtacHolding']> = ResolversObject<{
  barcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  callNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dueDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  holdingsCopyNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  holdingsStatements?: Resolver<Maybe<Array<ResolversTypes['RtacHoldingHoldingsStatementsItem']>>, ParentType, ContextType>;
  holdingsStatementsForIndexes?: Resolver<Maybe<Array<ResolversTypes['RtacHoldingHoldingsStatementsForIndexesItem']>>, ParentType, ContextType>;
  holdingsStatementsForSupplements?: Resolver<Maybe<Array<ResolversTypes['RtacHoldingHoldingsStatementsForSupplementsItem']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  itemCopyNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  library?: Resolver<Maybe<ResolversTypes['RtacLibrary']>, ParentType, ContextType>;
  location?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  locationCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  locationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  materialType?: Resolver<Maybe<ResolversTypes['RtacMaterialType']>, ParentType, ContextType>;
  permanentLoanType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  suppressFromDiscovery?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  temporaryLoanType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalHoldRequests?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  volume?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RtacHoldingHoldingsStatementsForIndexesItemResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['RtacHoldingHoldingsStatementsForIndexesItem'] = ResolversParentTypes['RtacHoldingHoldingsStatementsForIndexesItem']> = ResolversObject<{
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  statement?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RtacHoldingHoldingsStatementsForSupplementsItemResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['RtacHoldingHoldingsStatementsForSupplementsItem'] = ResolversParentTypes['RtacHoldingHoldingsStatementsForSupplementsItem']> = ResolversObject<{
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  statement?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RtacHoldingHoldingsStatementsItemResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['RtacHoldingHoldingsStatementsItem'] = ResolversParentTypes['RtacHoldingHoldingsStatementsItem']> = ResolversObject<{
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  statement?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RtacHoldingsResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['RtacHoldings'] = ResolversParentTypes['RtacHoldings']> = ResolversObject<{
  holdings?: Resolver<Array<ResolversTypes['RtacHolding']>, ParentType, ContextType>;
  instanceId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RtacHoldingsBatchResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['RtacHoldingsBatch'] = ResolversParentTypes['RtacHoldingsBatch']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<ResolversTypes['Error']>>, ParentType, ContextType>;
  holdings?: Resolver<Maybe<Array<ResolversTypes['RtacHoldings']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RtacLibraryResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['RtacLibrary'] = ResolversParentTypes['RtacLibrary']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RtacMaterialTypeResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['RtacMaterialType'] = ResolversParentTypes['RtacMaterialType']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  details?: Resolver<Maybe<ResolversTypes['ServicePointDetails']>, ParentType, ContextType>;
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

export type ServicePointDetailsResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['ServicePointDetails'] = ResolversParentTypes['ServicePointDetails']> = ResolversObject<{
  holdPseudopatronCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  iplcLocationCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isDefaultForCampus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isDefaultPickup?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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

export type TitleResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['Title'] = ResolversParentTypes['Title']> = ResolversObject<{
  contributors?: Resolver<Maybe<Array<ResolversTypes['Contributor']>>, ParentType, ContextType>;
  edition?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expectedReceiptDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  instanceId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  isAcknowledged?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  packageName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  poLineId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  poLineNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productIds?: Resolver<Maybe<Array<ResolversTypes['ProductIdentifier']>>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publisher?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  receivingNote?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subscriptionFrom?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  subscriptionInterval?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  subscriptionTo?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  profilePictureLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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

export type VendorDetailResolvers<ContextType = FolioContext, ParentType extends ResolversParentTypes['VendorDetail'] = ResolversParentTypes['VendorDetail']> = ResolversObject<{
  instructions?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  noteFromVendor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  referenceNumbers?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  vendorAccount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = FolioContext> = ResolversObject<{
  Account?: AccountResolvers<ContextType>;
  AccountdataItemStatus?: AccountdataItemStatusResolvers<ContextType>;
  AccountdataPaymentStatus?: AccountdataPaymentStatusResolvers<ContextType>;
  AccountdataStatus?: AccountdataStatusResolvers<ContextType>;
  AlternativeTitleType?: AlternativeTitleTypeResolvers<ContextType>;
  Block?: BlockResolvers<ContextType>;
  BoundWithPart?: BoundWithPartResolvers<ContextType>;
  BoundWithParts?: BoundWithPartsResolvers<ContextType>;
  CallNumberType?: CallNumberTypeResolvers<ContextType>;
  Campus?: CampusResolvers<ContextType>;
  Charge?: ChargeResolvers<ContextType>;
  Claim?: ClaimResolvers<ContextType>;
  ClassificationType?: ClassificationTypeResolvers<ContextType>;
  Contributor?: ContributorResolvers<ContextType>;
  ContributorNameType?: ContributorNameTypeResolvers<ContextType>;
  ContributorType?: ContributorTypeResolvers<ContextType>;
  Cost?: CostResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Details?: DetailsResolvers<ContextType>;
  ElectronicAccessRelationship?: ElectronicAccessRelationshipResolvers<ContextType>;
  Eresource?: EresourceResolvers<ContextType>;
  Error?: ErrorResolvers<ContextType>;
  FeeFine?: FeeFineResolvers<ContextType>;
  FeeFineAction?: FeeFineActionResolvers<ContextType>;
  FixedDueDateSchedule?: FixedDueDateScheduleResolvers<ContextType>;
  FundDistribution?: FundDistributionResolvers<ContextType>;
  Hold?: HoldResolvers<ContextType>;
  HoldingSummary?: HoldingSummaryResolvers<ContextType>;
  HoldingSummaryCollection?: HoldingSummaryCollectionResolvers<ContextType>;
  HoldingsNoteType?: HoldingsNoteTypeResolvers<ContextType>;
  HoldingsRecord?: HoldingsRecordResolvers<ContextType>;
  HoldingsRecords?: HoldingsRecordsResolvers<ContextType>;
  HoldingsRecordsSource?: HoldingsRecordsSourceResolvers<ContextType>;
  HoldingsType?: HoldingsTypeResolvers<ContextType>;
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
  InstanceNoteType?: InstanceNoteTypeResolvers<ContextType>;
  InstanceNotesItem?: InstanceNotesItemResolvers<ContextType>;
  InstancePublicationItem?: InstancePublicationItemResolvers<ContextType>;
  InstancePublicationPeriod?: InstancePublicationPeriodResolvers<ContextType>;
  InstanceSeriesItem?: InstanceSeriesItemResolvers<ContextType>;
  InstanceStatus?: InstanceStatusResolvers<ContextType>;
  InstanceSubjectsItem?: InstanceSubjectsItemResolvers<ContextType>;
  InstanceType?: InstanceTypeResolvers<ContextType>;
  Institution?: InstitutionResolvers<ContextType>;
  Interval?: IntervalResolvers<ContextType>;
  Item?: ItemResolvers<ContextType>;
  ItemCirculationNotesItem?: ItemCirculationNotesItemResolvers<ContextType>;
  ItemCirculationNotesItemSource?: ItemCirculationNotesItemSourceResolvers<ContextType>;
  ItemCirculationNotesItemSourcePersonal?: ItemCirculationNotesItemSourcePersonalResolvers<ContextType>;
  ItemDamagedStatus?: ItemDamagedStatusResolvers<ContextType>;
  ItemEffectiveCallNumberComponents?: ItemEffectiveCallNumberComponentsResolvers<ContextType>;
  ItemElectronicAccessItem?: ItemElectronicAccessItemResolvers<ContextType>;
  ItemLastCheckIn?: ItemLastCheckInResolvers<ContextType>;
  ItemNoteType?: ItemNoteTypeResolvers<ContextType>;
  ItemNotesItem?: ItemNotesItemResolvers<ContextType>;
  ItemStatus?: ItemStatusResolvers<ContextType>;
  Library?: LibraryResolvers<ContextType>;
  License?: LicenseResolvers<ContextType>;
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
  LoanType?: LoanTypeResolvers<ContextType>;
  Location?: LocationResolvers<ContextType>;
  LocationDetails?: LocationDetailsResolvers<ContextType>;
  LostItemFeePolicy?: LostItemFeePolicyResolvers<ContextType>;
  ManualBlock?: ManualBlockResolvers<ContextType>;
  MaterialType?: MaterialTypeResolvers<ContextType>;
  Metadata?: MetadataResolvers<ContextType>;
  ModeOfIssuance?: ModeOfIssuanceResolvers<ContextType>;
  Money?: MoneyResolvers<ContextType>;
  OrderLocation?: OrderLocationResolvers<ContextType>;
  OverdueFinePolicy?: OverdueFinePolicyResolvers<ContextType>;
  Patron?: PatronResolvers<ContextType>;
  PatronBlockCondition?: PatronBlockConditionResolvers<ContextType>;
  PatronBlockLimit?: PatronBlockLimitResolvers<ContextType>;
  PatronCharge?: PatronChargeResolvers<ContextType>;
  PatronGroup?: PatronGroupResolvers<ContextType>;
  PatronItem?: PatronItemResolvers<ContextType>;
  PatronLoan?: PatronLoanResolvers<ContextType>;
  PatronNoticePolicy?: PatronNoticePolicyResolvers<ContextType>;
  PatronNoticePolicyFeeFineNoticesItem?: PatronNoticePolicyFeeFineNoticesItemResolvers<ContextType>;
  PatronNoticePolicyFeeFineNoticesItemSendOptions?: PatronNoticePolicyFeeFineNoticesItemSendOptionsResolvers<ContextType>;
  PatronNoticePolicyLoanNoticesItem?: PatronNoticePolicyLoanNoticesItemResolvers<ContextType>;
  PatronNoticePolicyLoanNoticesItemSendOptions?: PatronNoticePolicyLoanNoticesItemSendOptionsResolvers<ContextType>;
  PatronNoticePolicyRequestNoticesItem?: PatronNoticePolicyRequestNoticesItemResolvers<ContextType>;
  PatronNoticePolicyRequestNoticesItemSendOptions?: PatronNoticePolicyRequestNoticesItemSendOptionsResolvers<ContextType>;
  Period?: PeriodResolvers<ContextType>;
  Physical?: PhysicalResolvers<ContextType>;
  Piece?: PieceResolvers<ContextType>;
  PieceCollection?: PieceCollectionResolvers<ContextType>;
  PoLine?: PoLineResolvers<ContextType>;
  PoLineCollection?: PoLineCollectionResolvers<ContextType>;
  ProductIdentifier?: ProductIdentifierResolvers<ContextType>;
  ProxyFor?: ProxyForResolvers<ContextType>;
  Quantity?: QuantityResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  ReminderFeesPolicy?: ReminderFeesPolicyResolvers<ContextType>;
  ReminderFeesPolicyReminderScheduleItem?: ReminderFeesPolicyReminderScheduleItemResolvers<ContextType>;
  Request?: RequestResolvers<ContextType>;
  RequestDeliveryAddress?: RequestDeliveryAddressResolvers<ContextType>;
  RequestPickupServicePoint?: RequestPickupServicePointResolvers<ContextType>;
  RequestPolicy?: RequestPolicyResolvers<ContextType>;
  RequestPolicyAllowedServicePoints?: RequestPolicyAllowedServicePointsResolvers<ContextType>;
  RequestProxy?: RequestProxyResolvers<ContextType>;
  RequestProxyPatronGroup?: RequestProxyPatronGroupResolvers<ContextType>;
  RequestRequester?: RequestRequesterResolvers<ContextType>;
  RequestRequesterPatronGroup?: RequestRequesterPatronGroupResolvers<ContextType>;
  ResultInfo?: ResultInfoResolvers<ContextType>;
  ResultInfoDiagnosticsItem?: ResultInfoDiagnosticsItemResolvers<ContextType>;
  ResultInfoFacetsItem?: ResultInfoFacetsItemResolvers<ContextType>;
  ResultInfoFacetsItemFacetValuesItem?: ResultInfoFacetsItemFacetValuesItemResolvers<ContextType>;
  ResultInfoFacetsItemFacetValuesItemValue?: ResultInfoFacetsItemFacetValuesItemValueResolvers<ContextType>;
  RtacHolding?: RtacHoldingResolvers<ContextType>;
  RtacHoldingHoldingsStatementsForIndexesItem?: RtacHoldingHoldingsStatementsForIndexesItemResolvers<ContextType>;
  RtacHoldingHoldingsStatementsForSupplementsItem?: RtacHoldingHoldingsStatementsForSupplementsItemResolvers<ContextType>;
  RtacHoldingHoldingsStatementsItem?: RtacHoldingHoldingsStatementsItemResolvers<ContextType>;
  RtacHoldings?: RtacHoldingsResolvers<ContextType>;
  RtacHoldingsBatch?: RtacHoldingsBatchResolvers<ContextType>;
  RtacLibrary?: RtacLibraryResolvers<ContextType>;
  RtacMaterialType?: RtacMaterialTypeResolvers<ContextType>;
  Schedule?: ScheduleResolvers<ContextType>;
  ServicePoint?: ServicePointResolvers<ContextType>;
  ServicePointDetails?: ServicePointDetailsResolvers<ContextType>;
  ServicepointStaffSlipsItem?: ServicepointStaffSlipsItemResolvers<ContextType>;
  Tags?: TagsResolvers<ContextType>;
  TimePeriod?: TimePeriodResolvers<ContextType>;
  Title?: TitleResolvers<ContextType>;
  UUID?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  UserdataCustomFields?: UserdataCustomFieldsResolvers<ContextType>;
  UserdataMeta?: UserdataMetaResolvers<ContextType>;
  UserdataPersonal?: UserdataPersonalResolvers<ContextType>;
  UserdataPersonalAddressesItem?: UserdataPersonalAddressesItemResolvers<ContextType>;
  VendorDetail?: VendorDetailResolvers<ContextType>;
}>;

