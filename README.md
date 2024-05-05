# Vagas e Candidaturas API

## Rotas de Usuário

### Registro de usuário POST /users

Padrão de corpo

```json
{
   "name": "Osvaldo",
   "email": "osvaldo@email.com",
   "password": "@12patinhos"
}
```

Padrão de resposta (STATUS 201)

```json
{
   "id": 2,
   "name": "Osvaldo",
   "email": "osvaldo@email.com"
}
```

### Login POST /users/login

Padrão de corpo

```json
{
   "email": "osvaldo@email.com",
   "password": "@12patinhos"
}
```

Padrão de resposta (STATUS 200)

```json
{
   "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzAwNzQ0MTkzfQ.2cBz7ugLGJGw2HvoDxn_3u5FOBUo6tKjkwLpRG7ra-Q",
   "user": {
      "id": 2,
      "name": "Osvaldo",
      "email": "osvaldo@email.com"
   }
}
```

Possíveis erros

401 UNAUTHORIZED

```json
{
   "message": "Email and password doesn't match"
}
```

404 NOT FOUND

```json
{
   "message": "User not registered"
}
```

### Retornar usuário GET /users

É necessário autorização para acessar está rota, forneça o token do cabeçalho da requisição

```json
{
   "headers": {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzAwNzQ0NzkyfQ.pSaxG1zUp99DyI-yum_3GrpV-AJAk38B-heEE60uOMk"
   }
}
```

Padrão de resposta (STATUS 200)

```json
{
   "id": 2,
   "name": "Osvaldo",
   "email": "osvaldo@email.com"
}
```

### POST /opportunities (Está rota precisa de autorização)

Padrão de corpo

```json
{
   "title": "Lorem ipsum",
   "description": "Lorem ipsum"
}
```

Padrão de resposta (STATUS 201)

```json
{
   "id": 1,
   "title": "Lorem ipsum",
   "description": "Lorem ipsum",
   "userId": 1
}
```

### GET /opportunities

Padrão de resposta (STATUS 200)

```json
[
   {
      "id": 1,
      "title": "Lorem ipsum",
      "description": "Lorem ipsum",
      "userId": 1
   }
]
```

### GET /opportunities/user (Está rota precisa de autorização)

Padrão de resposta (STATUS 200)

```json
[
   {
      "id": 1,
      "title": "Lorem ipsum",
      "description": "Lorem ipsum",
      "userId": 1
   }
]
```

### GET /opportunities/:id (Está rota precisa de autorização)

Padrão de resposta (STATUS 200)

```json
{
   "id": 1,
   "title": "Lorem ipsum",
   "description": "Lorem ipsum",
   "userId": 1
}
```

Possíveis erros

404 NOT FOUND

```json
{
   "message": "Opportunity not found"
}
```

403 FORBIDDEN

```json
{
   "message": "User is not the owner of this opportunity"
}
```

### PATCH /opportunities/:id (Está rota precisa de autorização)

Padrão de corpo

```json
{
   "title?": "Lorem ipsum",
   "description?": "Lorem ipsum"
}
```

Padrão de resposta (STATUS 200)

```json
{
   "id": 1,
   "title": "Lorem ipsum",
   "description": "Lorem ipsum",
   "userId": 1
}
```

### DELETE /opportunities/:id (Está rota precisa de autorização)

Nenhum corpo de resposta (STATUS 204)

Possíveis erros

404 NOT FOUND

```json
{
   "message": "Opportunity not found"
}
```

403 FORBIDDEN

```json
{
   "message": "User is not the owner of this opportunity"
}
```

### POST /opportunities/:id/applications

Padrão de corpo

```json
{
   "name": "John Doe",
   "email": "johndoe@email.com",
   "linkedin": "https://example.com"
}
```

Padrão de resposta (STATUS 201)

```json
{
   "id": 1,
   "name": "John Doe",
   "email": "johndoe@email.com",
   "linkedin": "https://example.com",
   "opportunityId": 1
}
```

Possíveis erros

404 NOT FOUND

```json
{
   "message": "Opportunity not found"
}
```

### GET /opportunities/:id/applications (Está rota precisa de autorização)

Padrão de resposta (STATUS 200)

```json
[
   {
      "id": 1,
      "name": "John Doe",
      "email": "johndoe@email.com",
      "linkedin": "https://example.com",
      "opportunityId": 1
   }
]
```

Possíveis erros

404 NOT FOUND

```json
{
   "message": "Opportunity not found"
}
```

403 FORBIDDEN

```json
{
   "message": "User is not the owner of this opportunity"
}
```
