  
## Description
ocr-reader-api

## App Requirements

- MongoDB
- NodeJS Latest LTS

## Installation

```bash

# 1 - Install [tesseract project] (https://github.com/tesseract-ocr/tessdoc/blob/master/Installation.md)

# FOR LINUX Debian/Ubuntu
sudo apt install tesseract-ocr

# 2 - Install Project Dependencies
npm install

```

## Running the app

```bash
# With nodemon watch
npm run --prefix start:dev:nodemon

# Production mode
npm run start:prod
```

## Using the app

```bash
# With nodemon watch
curl --header "Content-Type: application/json" \
    --request POST \
    --data '{"imageUrl": "https://i.stack.imgur.com/t3qWG.png"}' \
    http://localhost:9011/read
```
![./images/ocr.png](./images/ocr.png)
![./images/result.png](./images/result.png)


## App Package Structure
![./images/dir.png](./images/dir.png)


## App Configurations
- Check `environments package`

```bash
# Rename [.env.sample] file to [.env]

# Set Mongo DB URI
MONGO_DB_URI=mongodb://username:password@localhost:27018

```

## Important Links 
- https://github.com/zapolnoch/node-tesseract-ocr
- https://github.com/naptha/tesseract.js
- https://github.com/tesseract-ocr/tessdoc/blob/master/Installation.md
- https://github.com/tesseract-ocr/tesseract/blob/master/doc/tesseract.1.asc#options
- https://tesseract-ocr.github.io/tessdoc/tess3/ControlParams


## Todo
- Queue implementation.
- Accept multiple Urls.
- API to read the Collection from DB.
- Docker Setup