# Serverless Test

## This project demonstrates how to setup a Google Functions function that provides a CRUD REST frontend to a Google Firestore DB.

### How to deploy this function
gcloud functions deploy martin_helloUser --runtime nodejs8 --trigger-http --project <Project id>

### How to trigger this function
GET a stored document:
	curl -i -X GET https://us-central1-functionstest-234600.cloudfunctions.net/martin_helloUser?id=PS17mrGVZQEwLETUlmpC
POST a new document:
	curl -i -X POST -H 'Content-Type: application/json' -d '{"ttl":1,"ciphertext":"daa5370871aa301e5e12d4274d80691f75e295d648aa84b73e291d8c82"}' https://us-central1-functionstest-234600.cloudfunctions.net/martin_helloUser
