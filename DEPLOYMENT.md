# Deployment Checklist for AI Concierge Chatbot

## Pre-deployment Steps

### 1. Environment Setup

- [ ] MongoDB Atlas database created and configured
- [ ] OpenAI API key obtained
- [ ] Strong PAYLOAD_SECRET generated (minimum 32 characters)

### 2. Local Testing

- [ ] Run `npm run build` successfully
- [ ] Test all features locally with production build
- [ ] Verify FAQ management in admin panel
- [ ] Test chat functionality with both local FAQ and OpenAI fallback

### 3. Vercel Configuration

- [ ] Vercel account created
- [ ] Project connected to GitHub repository
- [ ] Environment variables configured in Vercel dashboard:
  - [ ] `NODE_ENV=production`
  - [ ] `PAYLOAD_SECRET=your-secure-secret`
  - [ ] `DATABASE_URI=mongodb+srv://...`
  - [ ] `OPENAI_API_KEY=sk-...`

## Deployment Steps

### Option 1: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

### Option 2: GitHub Integration

1. Push code to GitHub repository
2. Connect repository to Vercel
3. Configure environment variables
4. Deploy automatically on push

## Post-deployment Verification

### 1. Basic Functionality

- [ ] Frontend loads without errors
- [ ] Admin panel accessible at `/admin`
- [ ] API endpoints responding
- [ ] Database connection working

### 2. Chat Features

- [ ] Chat widget appears on homepage
- [ ] Language switching works (HR/EN)
- [ ] FAQ matching returns correct answers
- [ ] OpenAI fallback works for unknown questions
- [ ] Response source tracking works ("local" vs "openai")

### 3. Admin Panel

- [ ] User authentication works
- [ ] FAQ CRUD operations work
- [ ] Media uploads function
- [ ] Changes reflect immediately in chat

## Troubleshooting Common Issues

### Build Errors

- **Import Map Missing**: Build script automatically generates it
- **Type Errors**: Ignored in production build (see next.config.mjs)
- **Memory Issues**: Check Vercel function timeout settings

### Runtime Errors

- **Database Connection**: Verify DATABASE_URI and network access
- **OpenAI API**: Check API key and usage limits
- **Admin Access**: Verify PAYLOAD_SECRET matches across environments

### Performance Issues

- **Cold Starts**: Vercel functions may have initial delay
- **Database Queries**: Monitor MongoDB performance
- **OpenAI Rate Limits**: Implement proper error handling

## Monitoring and Maintenance

### 1. Logs

- Monitor Vercel function logs
- Check database connection logs
- Track OpenAI API usage

### 2. Updates

- Regular dependency updates
- Payload CMS version updates
- Security patches

### 3. Backup

- Database backup strategy
- Environment variable backup
- Code repository backup

## Academic Submission Notes

### For Professor Review

- Project demonstrates full-stack development
- Showcases AI integration with fallback logic
- Implements modern web technologies (Next.js 15, React 19)
- Includes content management system
- Multilingual support implementation
- Production-ready deployment configuration

### Technology Stack Summary

- **Frontend**: Next.js 15, React 19, Tailwind CSS
- **Backend**: Next.js API Routes, Payload CMS
- **Database**: MongoDB with Mongoose
- **AI**: OpenAI GPT-4 Turbo
- **Deployment**: Vercel, Docker support
- **Authentication**: Payload built-in auth
- **CMS**: Payload CMS with Lexical editor
