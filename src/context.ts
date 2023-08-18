import PatronsAPI from "./folio/patrons-api.js"
import UsersAPI from "./folio/users-api.js"
import ServicePointsAPI from "./folio/service-points-api.js"
import InstancesAPI from "./folio/instances-api.js"
import ItemsAPI from "./folio/items-api.js"
import HoldingsAPI from "./folio/holdings-api.js"
import TypeAPI from "./folio/type-api.js"
import FeeFinesAPI from "./folio/feefines-api.js"
import CirculationAPI from "./folio/circulation-api.js"
import MaterialTypesAPI from "./folio/material-type-api.js"
import OrdersAPI from "./folio/orders-api.js"
import RtacApi from "./folio/rtac-api.js"

export interface FolioContext {
  token: string;
  dataSources: {
    patrons: PatronsAPI;
    users: UsersAPI;
    servicepoints: ServicePointsAPI;
    instances: InstancesAPI;
    items: ItemsAPI;
    holdings: HoldingsAPI;
    types: TypeAPI;
    feefines: FeeFinesAPI;
    circulation: CirculationAPI;
    materialtypes: MaterialTypesAPI;
    orders: OrdersAPI;
    rtac: RtacApi;
  };
}
