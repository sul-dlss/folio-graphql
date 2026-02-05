These JSON schemas are imported from upstream FOLIO projects. We only need (a subset of ) the JSON schema files, and the upstream repositories are very big.

From within this directory (`json-schemas`), run these commands:

```
$ export FOLIO_ROOT=/path/to/folio/root
$ (echo -n "Updated date: "; date; echo "-----"; echo "repository | commit"; echo "-----"; for i in $( ls $FOLIO_ROOT ); do (cd $FOLIO_ROOT/$i; echo -n "$i "; git rev-parse HEAD ); done) > last_synced_metadata
$ find $FOLIO_ROOT/**/{raml,ramls,schema,schemas} -name "*.json" -o -name "*.schema" | grep -v "/examples/" | sed -e "s#$FOLIO_ROOT/##" > json_files
$ rsync --files-from json_files --delete-missing-args $FOLIO_ROOT .
$ rm json_files
```
