```batch
for %f in (JSON\recapsheet\*.json) do mongoimport --jsonArray %f -d recapsheet -c %~nf
```
