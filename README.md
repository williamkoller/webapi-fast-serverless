# Fast WebAPIs with Serverless

#### Installation 

- required `serverless`, `docker` and `docker-compose`
- install `serverless` global with `npm`:
  - `npm i -g serverless`

#### How run the application?!

- `npm i`
- `docker-compose up --build`

#### Example create data

- url: `localhost:3000/dev/create-data`
- body:
  ```json
  {
	"name": "any_name",
	"surname": "any_surname",
	"age": 1
  }
  ```
- response body:
  ```json
  {
	"message": "Data inserted successfully!"
  }
  ```