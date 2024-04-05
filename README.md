# Vagas e Candidaturas API

### POST /opportunities

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
   "description": "Lorem ipsum"
}
```

### GET /opportunities

Padrão de resposta (STATUS 200)

```json
[
   {
      "id": 1,
      "title": "Lorem ipsum",
      "description": "Lorem ipsum"
   }
]
```

### GET /opportunities/:id

Padrão de resposta (STATUS 200)

```json
{
   "id": 1,
   "title": "Lorem ipsum",
   "description": "Lorem ipsum"
}
```

Possíveis erros

404 NOT FOUND

```json
{
   "message": "Opportunity not found"
}
```

### PATCH /opportunities/:id

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
   "description": "Lorem ipsum"
}
```

### DELETE /opportunities/:id

Nenhum corpo de resposta (STATUS 204)

Possíveis erros

404 NOT FOUND

```json
{
   "message": "Opportunity not found"
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

### GET /opportunities/:id/applications

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