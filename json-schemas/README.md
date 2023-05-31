These JSON schemas are imported from upstream FOLIO projects. We only need (a subset of ) the JSON schema files, and the upstream repositories are very big.

```
$ export FOLIO_ROOT=/path/to/folio/root
$ (date; for i in $( ls $FOLIO_ROOT ); do (cd $FOLIO_ROOT/$i; git pull > /dev/null; echo -n "$i "; git rev-parse HEAD ); done) > metadata
$ find $FOLIO_ROOT/*/ramls -name "*.json" | sed -e "s#$FOLIO_ROOT/##" > json
$ find $FOLIO_ROOT/*/ramls -name "*.schema" | sed -e "s#$FOLIO_ROOT/##" >> json
$ rsync --files-from json $FOLIO_ROOT .
```
