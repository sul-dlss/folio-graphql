import PatronsAPI from "./folio/patrons-api.js"
import UsersAPI from "./folio/users-api.js"
import LocationsAPI from "./folio/locations-api.js"
import InstancesAPI from "./folio/instances-api.js"
import ItemsAPI from "./folio/items-api.js"
import HoldingsAPI from "./folio/holdings-api.js"
import TypeAPI from "./folio/type-api.js"
import FeeFinesAPI from "./folio/feefines-api.js"
import CirculationAPI from "./folio/circulation-api.js"

export interface FolioContext {
  token: string;
  dataSources: {
    patrons: PatronsAPI;
    users: UsersAPI;
    locations: LocationsAPI;
    instances: InstancesAPI;
    items: ItemsAPI;
    holdings: HoldingsAPI;
    types: TypeAPI;
    feefines: FeeFinesAPI;
    circulation: CirculationAPI;
  };
}
