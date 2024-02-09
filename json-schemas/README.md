These JSON schemas are imported from upstream FOLIO projects. We only need (a subset of ) the JSON schema files, and the upstream repositories are very big.

From within this directory (`json-schemas`), run these commands:

```
$ export FOLIO_ROOT=/path/to/folio/root
$ (echo -n "Updated date: "; date; echo "-----"; echo "repository | commit"; echo "-----"; for i in $( ls $FOLIO_ROOT ); do (cd $FOLIO_ROOT/$i; git pull > /dev/null; echo -n "$i "; git rev-parse HEAD ); done) > last_synced_metadata
$ find $FOLIO_ROOT/*/ramls -name "*.json" ! -path "$FOLIO_ROOT/*/ramls/examples/*" | sed -e "s#$FOLIO_ROOT/##" > json_files
$ find $FOLIO_ROOT/*/ramls -name "*.schema" ! -path "$FOLIO_ROOT/*/ramls/examples/*" | sed -e "s#$FOLIO_ROOT/##" >> json_files
$ rsync --files-from json_files $FOLIO_ROOT .
$ rm json_files
```
