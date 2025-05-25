# AI Concierge Chatbot for Hotels & Restaurants

A modern, multilingual AI-powered chatbot designed for hotel and restaurant guests, built with Next.js 15, Payload CMS, and OpenAI integration. This project provides automated customer service capabilities with fallback to AI when local FAQ knowledge base doesn't contain the answer.

## 🎯 Project Overview

This chatbot serves as a 24/7 virtual concierge for hospitality businesses, capable of:

- Answering frequently asked questions in multiple languages (Croatian, English)
- Providing intelligent responses through OpenAI integration
- Managing FAQ content through an admin panel
- Offering seamless integration with existing hotel/restaurant systems

## 🏗️ Architecture

### Technology Stack

- **Frontend**: Next.js 15 with React 19
- **Backend**: Next.js API routes
- **CMS**: Payload CMS 3.39.1
- **Database**: MongoDB with Mongoose adapter
- **AI Integration**: OpenAI GPT-4 Turbo
- **Styling**: Tailwind CSS
- **Authentication**: Payload built-in auth
- **Deployment**: Docker support included

### Project Structure

```
src/
├── app/                          # Next.js app directory
│   ├── api/chat/                # Chat API endpoint
│   ├── components/              # React components
│   │   ├── ChatWidget.tsx       # Main chat interface
│   │   └── ChatWidgetWrapper.tsx # Client-side wrapper
│   ├── (payload)/              # Payload CMS admin routes
│   └── page.tsx                # Main landing page
├── collections/                 # Payload CMS collections
│   ├── FAQ.ts                  # FAQ data model
│   ├── Users.ts                # User management
│   └── Media.ts                # File uploads
├── payload.config.ts           # Payload CMS configuration
└── payload-types.ts            # Generated TypeScript types
```

## 🚀 Features

### 1. Intelligent Chat System

- **Smart FAQ Matching**: Searches local knowledge base first
- **AI Fallback**: Uses OpenAI when no local answer found
- **Source Tracking**: Shows whether answer came from local FAQ or AI
- **Real-time Responses**: Instant messaging experience

### 2. Multilingual Support

- Croatian (hr) and English (en) support
- Dynamic language switching in chat interface
- Language-specific FAQ management

### 3. Admin Panel

- **Content Management**: Easy FAQ creation and editing
- **User Management**: Admin user authentication
- **Media Management**: File upload capabilities
- **Real-time Updates**: Changes reflect immediately in chatbot

### 4. Modern UI/UX

- **Responsive Design**: Works on desktop and mobile
- **Gradient Animations**: Modern visual effects
- **Loading States**: Smooth user experience
- **Accessible**: Keyboard navigation and screen reader support

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18.20.2+ or 20.9.0+
- MongoDB database
- OpenAI API key
- pnpm package manager

### Environment Configuration

Create a `.env` file based on `.env.example`:

```env
PAYLOAD_SECRET=your-payload-secret-key
DATABASE_URI=mongodb://127.0.0.1/ai-concierge-chatbot
OPENAI_API_KEY=your-openai-api-key
```

### Installation Steps

1. **Clone and Install**

```bash
git clone <repository-url>
cd ai-concierge-chatbot
pnpm install
```

2. **Start Development Server**

```bash
pnpm dev
```

3. **Access the Application**

- Frontend: http://localhost:3000
- Admin Panel: http://localhost:3000/admin

### Docker Deployment

```bash
# Using Docker Compose
docker-compose up

# Or build custom image
docker build -t ai-concierge .
docker run -p 3000:3000 ai-concierge
```

## 📊 API Endpoints

### Chat API

```typescript
POST /api/chat
{
  "message": "What are the breakfast hours?",
  "lang": "hr" | "en"
}

Response:
{
  "answer": "Breakfast is served from 7:00 AM to 10:00 AM",
  "source": "local" | "openai"
}
```

### Payload CMS API

- **REST API**: `/api/collections/[collection]`
- **GraphQL**: `/api/graphql`
- **Admin Panel**: `/admin`

## 🔧 Configuration

### FAQ Collection Schema

The [`FAQ`](src/collections/FAQ.ts) collection includes:

- `question`: Text field for the question
- `answer`: Textarea for the response
- `language`: Select field (hr/en)

### Payload Configuration

Key settings in [`payload.config.ts`](src/payload.config.ts):

- MongoDB adapter configuration
- Lexical rich text editor
- TypeScript type generation
- Admin user authentication

## 🎨 Customization

### Adding New Languages

1. Update the [`FAQ`](src/collections/FAQ.ts) collection options
2. Modify [`ChatWidget.tsx`](src/app/components/ChatWidget.tsx) language selector
3. Add translations to the interface

### Extending FAQ Schema

Add new fields to the [`FAQ`](src/collections/FAQ.ts) collection:

```typescript
{
  name: 'category',
  type: 'select',
  options: [
    { label: 'Food & Beverage', value: 'food' },
    { label: 'Accommodation', value: 'rooms' },
    // ...
  ]
}
```

## 🧪 Testing

### Development Testing

```bash
# Lint code
pnpm lint

# Type checking
pnpm generate:types
```

### Manual Testing Scenarios

1. **FAQ Matching**: Test with exact and partial question matches
2. **AI Fallback**: Ask questions not in FAQ database
3. **Language Switching**: Verify responses in both languages
4. **Admin Panel**: Test CRUD operations on FAQ entries

## 📈 Performance Considerations

### Optimization Features

- **Next.js 15**: Latest performance improvements
- **Static Generation**: Pre-built pages where possible
- **Code Splitting**: Automatic bundle optimization

### Monitoring

- Response time tracking in chat API
- OpenAI token usage monitoring
- Database query optimization

## 🚀 Deployment

### Production Build

```bash
pnpm build
pnpm start
```

### Environment Variables (Production)

```env
NODE_ENV=production
PAYLOAD_SECRET=secure-production-secret
DATABASE_URI=mongodb://production-db-url
OPENAI_API_KEY=production-openai-key
```

## 🔒 Security

### Implemented Security Measures

- Environment variable protection
- Payload CMS authentication
- API rate limiting considerations
- Input sanitization

### Recommendations

- Use strong `PAYLOAD_SECRET` in production
- Implement API rate limiting
- Regular security updates
- Monitor OpenAI API usage

## 📚 Academic Context

This project demonstrates:

- **Full-stack Development**: Frontend and backend integration
- **Modern Web Technologies**: Next.js 15, React 19, TypeScript
- **AI Integration**: Practical OpenAI API implementation
- **Database Design**: MongoDB with relational concepts
- **Content Management**: Headless CMS architecture
- **User Experience**: Modern chat interface design
- **Deployment**: Docker containerization

### Learning Outcomes

- Understanding of modern web development patterns
- AI/ML integration in web applications
- Content management system architecture
- Real-time user interface development
- Database design and optimization
- Production deployment strategies

## 📄 License

MIT License - see LICENSE file for details

## 👨‍💻 Author

**Krystian Synakowski**

- University Project
- Course: Script Programming Language