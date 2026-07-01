import FolioAPI from "./folio-api.js"

interface SourceRecord {
  externalIdsHolder?: { instanceId?: string }
  parsedRecord?: { content?: unknown }
}

interface SourceRecordsResponse {
  sourceRecords: SourceRecord[]
}

export default class SourceStorageAPI extends FolioAPI {
  async getParsedMarcByInstanceId(instanceId: string): Promise<unknown | null> {
    const response = await this.post<SourceRecordsResponse>(
      "/source-storage/source-records?idType=INSTANCE",
      { body: [instanceId] },
    )
    return response.sourceRecords?.[0]?.parsedRecord?.content ?? null
  }
}
