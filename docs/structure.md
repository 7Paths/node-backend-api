# Project Structure

## HTTP API Endpoints

#### Users
```
    POS  /api/users
    GET  /api/users
    PUT  /api/users
    DEL  /api/users
```

##### Custom Endpoints for Users

#### Administration ZoeTech

##### Users module
```
    POS /api/users
    GET /api/users
    GET /api/users/:id
    PUT /api/users/:id
    PAT /api/users/:id
    DEL /api/users/:id
```

##### Auth for users Module
```
    POS /api/users/signup
    POS /api/users/signup
```

##### Roles Module
```
    POS /api/roles
    GET /api/roles
    GET /api/roles/:id
    PUT /api/roles/:id
    PAT /api/roles/:id
    DEL /api/roles/:id
```

##### Companies Module
```
    POS /api/companies
    GET /api/companies
    GET /api/companies/:id
    PUT /api/companies/:id
    PAT /api/companies/:id
    DEL /api/companies/:id
```




#### users auth for company administration

```
    POS /api/administration/users/signup
    POS /api/administration/users/signin
```

#### users auth for clients

```
    POS /api/services/users/signup
    POS /api/services/users/signin
```



```
    POS /api/user/admin
```

#### Books
```
    POS /api/books
    GET /api/books
    PUT /api/books
    DEL /api/books
```

#### User's books
```
    POS /api/user/books
    PUT /api/user/books
    DEL /api/user/books
    GET /api/user/books

```

#### Journals
```
    POS /api/megazine
    GET /api/journals
    PUT /api/megazine
    DEL /api/megazine
```

## MongoDB Database structure
```
kinal-library
    |--books
    |--users
    |--journals    
```
