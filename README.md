## Development

### Environment variables

backend/.env 
```
PORT=3001
FRONTEND_URL=http://localhost:3000
```

frontend/.env 
```
PORT=3000
REACT_APP_BACKEND_URL=http://localhost:3001
```

### Run Docker

Backend
```
cd backend
docker compose up
```

Frontend
```
cd frontend
docker compose up
```

### Local

Backend
```
cd backend
npm install
npm run dev
```

Frontend
```
cd frontend
npm install
npm run dev
```
