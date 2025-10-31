# Services Section Implementation

This document provides a complete guide for the Services section implementation with frontend pages, backend API, and admin panel.

## 📁 Folder Structure

```
client/
├── app/
│   ├── services/
│   │   ├── page.tsx                    # Main services listing page
│   │   ├── vastu/
│   │   │   └── page.tsx               # Vaastu service page
│   │   ├── types-of-vastu/
│   │   │   └── page.tsx               # Types of Vaastu page
│   │   ├── astrology/
│   │   │   └── page.tsx               # Astrology service page
│   │   ├── numerology/
│   │   │   └── page.tsx               # Numerology service page
│   │   └── education/
│   │       └── page.tsx               # Education service page
│   └── admin/
│       └── services/
│           ├── page.tsx               # Admin services listing
│           └── new/
│               └── page.tsx          # Create new service
│
server/
├── models/
│   └── Service.js                     # Service MongoDB model
├── routes/
│   └── services.js                    # Service API routes
└── seed-services.js                  # Sample data seeder
```

## 🗄️ Database Model

### Service Schema
```javascript
{
    title: String,           // Service title
    slug: String,           // URL-friendly identifier
    description: String,    // Short description
    content: String,        // Detailed HTML content
    image: String,          // Service image URL
    category: String,       // Service category
    features: [String],     // Array of service features
    price: Number,          // Service price
    isActive: Boolean,      // Service status
    createdAt: Date,       // Creation timestamp
    updatedAt: Date        // Last update timestamp
}
```

## 🔌 API Endpoints

### Public Endpoints
- `GET /api/services` - Get all active services
- `GET /api/services/slug/:slug` - Get service by slug
- `GET /api/services/category/:category` - Get services by category
- `GET /api/services/id/:id` - Get service by ID

### Admin Endpoints (Requires Authentication)
- `POST /api/services` - Create new service
- `PUT /api/services/:id` - Update service
- `DELETE /api/services/:id` - Delete service

## 🎨 Frontend Pages

### 1. Main Services Page (`/services`)
- Lists all available services
- Category-based filtering
- Responsive grid layout

### 2. Individual Service Pages
- **Vaastu** (`/services/vastu`)
- **Types of Vaastu** (`/services/types-of-vastu`)
- **Astrology** (`/services/astrology`)
- **Numerology** (`/services/numerology`)
- **Education** (`/services/education`)

Each page includes:
- Hero section with service image
- Detailed content (HTML supported)
- Service features list
- Contact CTA section
- Responsive design

### 3. Admin Panel (`/admin/services`)
- Service management interface
- Create, edit, delete services
- Rich text editor for content
- Feature management
- Image upload support

## 🚀 Getting Started

### 1. Install Dependencies
```bash
# Frontend
cd client
npm install

# Backend
cd server
npm install
```

### 2. Environment Variables
Create `.env` file in server directory:
```env
MONGODB_URI=mongodb://localhost:27017/vastu
JWT_SECRET=your_jwt_secret
PORT=5000
```

### 3. Seed Sample Data
```bash
cd server
node seed-services.js
```

### 4. Start Development Servers
```bash
# Backend (Terminal 1)
cd server
npm run dev

# Frontend (Terminal 2)
cd client
npm run dev
```

## 📝 Usage Examples

### Creating a New Service (Admin Panel)
1. Navigate to `/admin/services/new`
2. Fill in the form:
   - **Title**: Service name
   - **Slug**: URL-friendly identifier (auto-generated from title)
   - **Category**: Select from dropdown
   - **Image URL**: Service banner image
   - **Description**: Short description
   - **Content**: Detailed HTML content
   - **Price**: Service price
   - **Features**: Add service features
3. Click "Create Service"

### API Integration Example
```javascript
// Get service by slug
const response = await servicesAPI.getBySlug('vastu');
const service = response.data;

// Get all services
const services = await servicesAPI.getAll();

// Create new service (admin)
const newService = await servicesAPI.create({
    title: 'New Service',
    slug: 'new-service',
    description: 'Service description',
    content: '<p>Detailed content</p>',
    image: 'https://example.com/image.jpg',
    category: 'vastu',
    features: ['Feature 1', 'Feature 2'],
    price: 1000
});
```

## 🎨 Design Features

### Hero Sections
- Dark gradient backgrounds
- Optional background images
- Red accent overlays
- Responsive typography
- Smooth animations

### Content Layout
- Clean typography
- HTML content support
- Feature lists with icons
- Contact CTA sections
- Mobile-responsive design

### Admin Interface
- Modern form design
- Rich text editor
- Feature management
- Image preview
- Validation feedback

## 🔧 Customization

### Adding New Service Categories
1. Update the `category` enum in `Service.js`:
```javascript
enum: ['vastu', 'types-of-vastu', 'astrology', 'numerology', 'education', 'new-category']
```

2. Update the categories array in admin forms:
```javascript
const categories = [
    { value: 'vastu', label: 'Vaastu' },
    { value: 'new-category', label: 'New Category' }
];
```

3. Create a new page at `/services/new-category/page.tsx`

### Styling Customization
- Modify Tailwind classes in component files
- Update color scheme in `globals.css`
- Customize animations in Framer Motion components

## 🐛 Troubleshooting

### Common Issues
1. **Service not found**: Check if slug matches exactly
2. **Image not loading**: Verify image URL is accessible
3. **Admin access denied**: Ensure proper authentication
4. **Database connection**: Check MongoDB connection string

### Debug Mode
Enable debug logging by setting:
```env
DEBUG=true
```

## 📱 Responsive Design

All pages are fully responsive with:
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interfaces
- Optimized images
- Fast loading times

## 🔒 Security Features

- Input validation
- XSS protection
- CSRF protection
- Authentication middleware
- Rate limiting
- Data sanitization

## 📊 Performance Optimization

- Image optimization
- Lazy loading
- Code splitting
- Caching strategies
- Database indexing
- CDN integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions:
- Email: vastuscienceworld@gmail.com
- Phone: +91 70692 00777
- Website: www.vastuscienceworld.com
