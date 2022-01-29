# react-protected-routes-v6

- Implemented protected routes in react.
- ` react-router-dom ` version `6.2.1`

## Working of the app

- ` /protected ` is a protected route
- Clicking `Login` button logs the user in,  enabling access to the protected route
- Clicking `Logout` button logs out the user out, disabling access to the protected route
- If logged in, the user can access the `/protected` route.
- If not logged in, the user cannot access the `/protected` route and will be redirected to the `/prohibited` route.

## To run the project

```
yarn install
yarn start
```