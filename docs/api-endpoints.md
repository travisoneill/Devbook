# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app


## JSON API

### Users

- `GET /api/users`
- `GET /api/users/:userId`
- `GET /api/users/search` {params: {text: "query"} }
- `DELETE /api/users/:userId`
- `POST /api/users`
- `PATCH /api/users/:userId`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

### Friends

- `GET /api/friends/:userId`
- `POST /api/friends`
- `DELETE /api/friends`

### Requests

- `GET /api/requests/:userId`
- `POST /api/requests`
- `DELETE /api/requests`

## Photos API
### Figure out how to do this
