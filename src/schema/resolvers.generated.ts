/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated.js';
    import    { Account } from './circulation/resolvers/Account.js';
import    { Address } from './patron/resolvers/Address.js';
import    { AlternativeTitle } from './instance/resolvers/AlternativeTitle.js';
import    { Block } from './patron/resolvers/Block.js';
import    { BlockCondition } from './patron/resolvers/BlockCondition.js';
import    { BlockLimit } from './patron/resolvers/BlockLimit.js';
import    { Campus } from './location/resolvers/Campus.js';
import    { Charge } from './patron/resolvers/Charge.js';
import    { ChargeAmount } from './patron/resolvers/ChargeAmount.js';
import    { CheckIn } from './instance/resolvers/CheckIn.js';
import    { CirculationLoan } from './circulation/resolvers/CirculationLoan.js';
import    { CirculationLoanFeesAndFines } from './circulation/resolvers/CirculationLoanFeesAndFines.js';
import    { CirculationNote } from './instance/resolvers/CirculationNote.js';
import    { Classification } from './instance/resolvers/Classification.js';
import    { ClassificationType } from './instance/resolvers/ClassificationType.js';
import    { Contributor } from './instance/resolvers/Contributor.js';
import    { EffectiveCallNumberComponents } from './instance/resolvers/EffectiveCallNumberComponents.js';
import    { ElectronicAccess } from './instance/resolvers/ElectronicAccess.js';
import    { FeeFine } from './circulation/resolvers/FeeFine.js';
import    { FixedDueDateSchedule } from './circulation/resolvers/FixedDueDateSchedule.js';
import    { Hold } from './patron/resolvers/Hold.js';
import    { HoldingsNote } from './instance/resolvers/HoldingsNote.js';
import    { HoldingsRecord } from './instance/resolvers/HoldingsRecord.js';
import    { HoldingsStatement } from './instance/resolvers/HoldingsStatement.js';
import    { Identifier } from './instance/resolvers/Identifier.js';
import    { Instance } from './instance/resolvers/Instance.js';
import    { InstanceNote } from './instance/resolvers/InstanceNote.js';
import    { Institution } from './location/resolvers/Institution.js';
import    { Item } from './instance/resolvers/Item.js';
import    { ItemNote } from './instance/resolvers/ItemNote.js';
import    { Library } from './location/resolvers/Library.js';
import    { Loan } from './patron/resolvers/Loan.js';
import    { LoanPolicy } from './circulation/resolvers/LoanPolicy.js';
import    { LoansPolicy } from './circulation/resolvers/LoansPolicy.js';
import    { Location } from './location/resolvers/Location.js';
import    { ManualBlock } from './patron/resolvers/ManualBlock.js';
import    { Metadata } from './base/resolvers/Metadata.js';
import    { Patron } from './patron/resolvers/Patron.js';
import    { PatronGroup } from './patron/resolvers/PatronGroup.js';
import    { Period } from './circulation/resolvers/Period.js';
import    { Personal } from './patron/resolvers/Personal.js';
import    { ProxyFor } from './patron/resolvers/ProxyFor.js';
import    { Publication } from './instance/resolvers/Publication.js';
import    { PublicationPeriod } from './instance/resolvers/PublicationPeriod.js';
import    { holdingsRecord as Query_holdingsRecord } from './instance/resolvers/Query/holdingsRecord.js';
import    { holdingsRecords as Query_holdingsRecords } from './instance/resolvers/Query/holdingsRecords.js';
import    { instance as Query_instance } from './instance/resolvers/Query/instance.js';
import    { instances as Query_instances } from './instance/resolvers/Query/instances.js';
import    { item as Query_item } from './instance/resolvers/Query/item.js';
import    { items as Query_items } from './instance/resolvers/Query/items.js';
import    { libraries as Query_libraries } from './location/resolvers/Query/libraries.js';
import    { loanPolicies as Query_loanPolicies } from './circulation/resolvers/Query/loanPolicies.js';
import    { patron as Query_patron } from './patron/resolvers/Query/patron.js';
import    { patronGroups as Query_patronGroups } from './patron/resolvers/Query/patronGroups.js';
import    { requestPolicies as Query_requestPolicies } from './circulation/resolvers/Query/requestPolicies.js';
import    { ReceivingHistory } from './instance/resolvers/ReceivingHistory.js';
import    { ReceivingHistoryEntry } from './instance/resolvers/ReceivingHistoryEntry.js';
import    { RenewalsPolicy } from './circulation/resolvers/RenewalsPolicy.js';
import    { RequestItem } from './patron/resolvers/RequestItem.js';
import    { RequestPolicy } from './circulation/resolvers/RequestPolicy.js';
import    { Schedule } from './circulation/resolvers/Schedule.js';
import    { ServicePoint } from './location/resolvers/ServicePoint.js';
import    { Source } from './instance/resolvers/Source.js';
import    { Status } from './instance/resolvers/Status.js';
import    { Tag } from './instance/resolvers/Tag.js';
import    { Tags } from './base/resolvers/Tags.js';
import    { User } from './patron/resolvers/User.js';
import    { DateTimeResolver,EmailAddressResolver,UUIDResolver } from 'graphql-scalars';
    export const resolvers: Resolvers = {
      Query: { holdingsRecord: Query_holdingsRecord,holdingsRecords: Query_holdingsRecords,instance: Query_instance,instances: Query_instances,item: Query_item,items: Query_items,libraries: Query_libraries,loanPolicies: Query_loanPolicies,patron: Query_patron,patronGroups: Query_patronGroups,requestPolicies: Query_requestPolicies },
      
      
      Account: Account,
Address: Address,
AlternativeTitle: AlternativeTitle,
Block: Block,
BlockCondition: BlockCondition,
BlockLimit: BlockLimit,
Campus: Campus,
Charge: Charge,
ChargeAmount: ChargeAmount,
CheckIn: CheckIn,
CirculationLoan: CirculationLoan,
CirculationLoanFeesAndFines: CirculationLoanFeesAndFines,
CirculationNote: CirculationNote,
Classification: Classification,
ClassificationType: ClassificationType,
Contributor: Contributor,
EffectiveCallNumberComponents: EffectiveCallNumberComponents,
ElectronicAccess: ElectronicAccess,
FeeFine: FeeFine,
FixedDueDateSchedule: FixedDueDateSchedule,
Hold: Hold,
HoldingsNote: HoldingsNote,
HoldingsRecord: HoldingsRecord,
HoldingsStatement: HoldingsStatement,
Identifier: Identifier,
Instance: Instance,
InstanceNote: InstanceNote,
Institution: Institution,
Item: Item,
ItemNote: ItemNote,
Library: Library,
Loan: Loan,
LoanPolicy: LoanPolicy,
LoansPolicy: LoansPolicy,
Location: Location,
ManualBlock: ManualBlock,
Metadata: Metadata,
Patron: Patron,
PatronGroup: PatronGroup,
Period: Period,
Personal: Personal,
ProxyFor: ProxyFor,
Publication: Publication,
PublicationPeriod: PublicationPeriod,
ReceivingHistory: ReceivingHistory,
ReceivingHistoryEntry: ReceivingHistoryEntry,
RenewalsPolicy: RenewalsPolicy,
RequestItem: RequestItem,
RequestPolicy: RequestPolicy,
Schedule: Schedule,
ServicePoint: ServicePoint,
Source: Source,
Status: Status,
Tag: Tag,
Tags: Tags,
User: User,
DateTime: DateTimeResolver,
EmailAddress: EmailAddressResolver,
UUID: UUIDResolver
    }