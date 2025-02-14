# Datastream dummy app 

listening on port 8100 (audit)
listening on port 9982 (google analytics)


### Stop Datastream Service
stop datastream in service manager
```
sm --stop DATASTREAM
```

### Run
start audit server
```
npm start
or
npm run audit
```

or

start google analytics server
```
npm run google
```


### Run as server to show http headers
```
npm run google
curl http://localhost:9982/header
```


### Run docker
```
docker compose up --build
docker compose down --rmi all
```