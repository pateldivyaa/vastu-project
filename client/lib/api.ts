import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add auth token to requests
api.interceptors.request.use((config) => {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('adminToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    }
    return config;
});

// Add response interceptor for error handling
api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API Error:', error.response?.data || error.message);
        return Promise.reject(error);
    }
);

// Services API
export const servicesAPI = {
    getAll: () => api.get('/services'),
    getCategories: () => api.get('/services/categories'),
    getById: (id: string) => api.get(`/services/id/${id}`),
    getBySlug: (slug: string) => api.get(`/services/slug/${slug}`),
    getByCategory: (category: string) => api.get(`/services/category/${category}`),
    create: (data: any) => api.post('/services', data),
    update: (id: string, data: any) => api.put(`/services/${id}`, data),
    delete: (id: string) => api.delete(`/services/${id}`),
};

// Awards API
export const awardsAPI = {
    getAll: () => api.get('/awards'),
    getById: (id: string) => api.get(`/awards/id/${id}`),
    getBySlug: (slug: string) => api.get(`/awards/slug/${slug}`),
    create: (data: any) => api.post('/awards', data),
    update: (id: string, data: any) => api.put(`/awards/${id}`, data),
    delete: (id: string) => api.delete(`/awards/${id}`),
};

// News API
export const newsAPI = {
    getAll: () => api.get('/news'),
    getById: (id: string) => api.get(`/news/id/${id}`),
    getBySlug: (slug: string) => api.get(`/news/slug/${slug}`),
    create: (data: any) => api.post('/news', data),
    update: (id: string, data: any) => api.put(`/news/${id}`, data),
    delete: (id: string) => api.delete(`/news/${id}`),
};

// Workshops API
export const workshopsAPI = {
    getAll: () => api.get('/workshops'),
    getByCategory: (category: string) => api.get(`/workshops/category/${category}`),
    getById: (id: string) => api.get(`/workshops/id/${id}`),
    getBySlug: (slug: string) => api.get(`/workshops/slug/${slug}`),
    create: (data: any) => api.post('/workshops', data),
    update: (id: string, data: any) => api.put(`/workshops/${id}`, data),
    delete: (id: string) => api.delete(`/workshops/${id}`),
};

// Gallery API
export const galleryAPI = {
    getAll: () => api.get('/gallery'),
    getById: (id: string) => api.get(`/gallery/${id}`),
    create: (data: any) => api.post('/gallery', data),
    update: (id: string, data: any) => api.put(`/gallery/${id}`, data),
    delete: (id: string) => api.delete(`/gallery/${id}`),
};

// Contact API
export const contactAPI = {
    create: (data: any) => api.post('/contact', data),
    getAll: () => api.get('/contact'),
    getById: (id: string) => api.get(`/contact/${id}`),
    markAsRead: (id: string) => api.put(`/contact/${id}/read`),
    delete: (id: string) => api.delete(`/contact/${id}`),
};

// Confirmations API
export const confirmationsAPI = {
    create: (data: any) => api.post('/confirmations', data),
    getAll: () => api.get('/confirmations'),
    getById: (id: string) => api.get(`/confirmations/${id}`),
    delete: (id: string) => api.delete(`/confirmations/${id}`),
};

// Products API
export const productsAPI = {
    getAll: () => api.get('/products'),
    getById: (id: string) => api.get(`/products/${id}`),
    create: (data: any) => api.post('/products', data),
    update: (id: string, data: any) => api.put(`/products/${id}`, data),
    delete: (id: string) => api.delete(`/products/${id}`),
};

// Testimonials API
export const testimonialsAPI = {
    getAll: () => api.get('/testimonials'),
    getById: (id: string) => api.get(`/testimonials/${id}`),
    create: (data: any) => api.post('/testimonials', data),
    update: (id: string, data: any) => api.put(`/testimonials/${id}`, data),
    delete: (id: string) => api.delete(`/testimonials/${id}`),
};

// Auth API
export const authAPI = {
    login: (credentials: { email: string; password: string }) =>
        api.post('/auth/login', credentials),
    register: (data: { email: string; password: string }) =>
        api.post('/auth/register', data),
};

export default api;
