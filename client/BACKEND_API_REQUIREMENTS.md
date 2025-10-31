# Backend API Requirements

This document outlines the API endpoints that your backend server needs to implement for the admin panel to work properly.

## Required API Endpoints

### 1. Services API
```
GET    /api/services          - Get all services
GET    /api/services/:id      - Get service by ID
POST   /api/services          - Create new service
PUT    /api/services/:id      - Update service
DELETE /api/services/:id      - Delete service
```

### 2. Awards API
```
GET    /api/awards            - Get all awards
GET    /api/awards/:id        - Get award by ID
POST   /api/awards            - Create new award
PUT    /api/awards/:id        - Update award
DELETE /api/awards/:id        - Delete award
```

### 3. News API
```
GET    /api/news              - Get all news items
GET    /api/news/:id          - Get news item by ID
POST   /api/news              - Create new news item
PUT    /api/news/:id          - Update news item
DELETE /api/news/:id          - Delete news item
```

### 4. Workshops API
```
GET    /api/workshops         - Get all workshops
GET    /api/workshops/:id     - Get workshop by ID
POST   /api/workshops         - Create new workshop
PUT    /api/workshops/:id     - Update workshop
DELETE /api/workshops/:id     - Delete workshop
```

### 5. Products API (Optional)
```
GET    /api/products          - Get all products
GET    /api/products/:id      - Get product by ID
POST   /api/products          - Create new product
PUT    /api/products/:id      - Update product
DELETE /api/products/:id      - Delete product
```

### 6. Testimonials API (Optional)
```
GET    /api/testimonials      - Get all testimonials
GET    /api/testimonials/:id  - Get testimonial by ID
POST   /api/testimonials      - Create new testimonial
PUT    /api/testimonials/:id  - Update testimonial
DELETE /api/testimonials/:id  - Delete testimonial
```

### 7. Gallery API
```
GET    /api/gallery           - Get all gallery items
GET    /api/gallery/:id       - Get gallery item by ID
POST   /api/gallery           - Create new gallery item
PUT    /api/gallery/:id       - Update gallery item
DELETE /api/gallery/:id       - Delete gallery item
```

### 8. Contacts API
```
GET    /api/contacts          - Get all contact submissions
GET    /api/contacts/:id      - Get contact by ID
POST   /api/contacts          - Create new contact (from contact form)
PUT    /api/contacts/:id      - Update contact (mark as read)
DELETE /api/contacts/:id      - Delete contact
```

## Data Models

### Service/Award/News/Workshop/Product/Testimonial/Gallery Item
```json
{
  "_id": "string",
  "title": "string",
  "slug": "string",
  "description": "string",
  "content": "string",
  "image": "string (URL)",
  "category": "string",
  "features": ["string"],
  "price": "number (optional)",
  "isActive": "boolean",
  "createdAt": "string (ISO date)",
  "updatedAt": "string (ISO date)"
}
```

### Contact
```json
{
  "_id": "string",
  "name": "string",
  "email": "string",
  "phone": "string",
  "subject": "string",
  "message": "string",
  "isRead": "boolean",
  "createdAt": "string (ISO date)"
}
```

## Response Format

All API endpoints should return responses in this format:

### Success Response
```json
{
  "success": true,
  "data": {} // or [] for arrays
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error message",
  "error": "Detailed error information"
}
```

## Authentication

All admin endpoints should be protected with authentication. The frontend sends the admin token in the Authorization header:

```
Authorization: Bearer <admin_token>
```

## CORS Configuration

Make sure your backend server allows CORS requests from your frontend domain:

```javascript
// Example for Express.js
app.use(cors({
  origin: 'http://localhost:3000', // Your frontend URL
  credentials: true
}));
```

## Current Status

✅ **Working APIs:**
- Services API
- Awards API  
- News API
- Workshops API
- Gallery API
- Contacts API

❌ **Missing APIs (Optional):**
- Products API
- Testimonials API

The admin panel will work without the Products and Testimonials APIs - those sections will simply be hidden from the dashboard.

## Next Steps

1. **Implement the missing APIs** on your backend server
2. **Test each endpoint** to ensure they return the correct data format
3. **Add authentication middleware** to protect admin routes
4. **Configure CORS** to allow frontend requests
5. **Test the admin panel** to ensure everything works correctly

## Testing

You can test your APIs using tools like:
- Postman
- curl
- Thunder Client (VS Code extension)

Example curl command:
```bash
curl -X GET http://localhost:5000/api/services \
  -H "Authorization: Bearer your_admin_token" \
  -H "Content-Type: application/json"
```
