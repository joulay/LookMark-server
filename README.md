# LookMark

```
Main Endpoints: 

Get a User: 
  GET: /api/users

Get a Bride: 
  GET: /api/brides/:id
    Requires
      { id } in req.params 
    
Get a Photo: 
  GET: /api/photos/:brideId

Edit a bride: 
  PUT: /api/brides/:it
    Requires
      { id } in req.params 
      { firstName, lastName, phone, email, weddingDate, location, notes } in req.body
     
Post a Photo: 
  POST: /api/photos/:id
    Requires
      { id } in req.params;

Delete a Bride:
  DELETE: /api/brides/:id
    Requires
      { id } in req.params 

Delete a Photo: 
  DELETE: /api/photos/:id
    Requires
      photo id
      responds with 204
      

```
