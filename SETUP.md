# InvoIQ Setup Guide - Convex + Clerk Integration

This guide will help you set up InvoIQ with Convex (database) and Clerk (authentication) integration.

## Prerequisites

- Node.js 18+ installed
- npm/yarn package manager
- A Convex account (free tier available)
- A Clerk account (free tier available)

## 1. Clone and Install Dependencies

```bash
# Clone the repository
git clone <your-repo-url>
cd invoiq

# Install dependencies
npm install
```

## 2. Set Up Convex Backend

### Create Convex Account

1. Go to [convex.dev](https://convex.dev) and sign up
2. Install Convex CLI globally:
   ```bash
   npm install -g convex
   ```

### Initialize Convex

1. Run the setup command:
   ```bash
   npx convex dev
   ```
2. Follow the prompts to:
   - Log in to your Convex account
   - Create a new project
   - Generate deployment URL

3. Copy the deployment URL from the output (looks like `https://your-project.convex.cloud`)

## 3. Set Up Clerk Authentication

### Create Clerk Account

1. Go to [clerk.com](https://clerk.com) and sign up
2. Create a new application
3. Choose your preferred authentication methods (Email, Google, etc.)

### Get Clerk Keys

1. In your Clerk dashboard, go to "API Keys"
2. Copy the "Publishable Key" (starts with `pk_test_` or `pk_live_`)
3. Copy the "Secret Key" (starts with `sk_test_` or `sk_live_`)

## 4. Configure Environment Variables

Create a `.env.local` file in your project root:

```bash
# Clerk Authentication
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_publishable_key_here

# Convex Database
VITE_CONVEX_URL=https://your-convex-deployment.convex.cloud

# Optional: For production deployment
CLERK_SECRET_KEY=sk_test_your_clerk_secret_key_here
```

## 5. Configure Clerk + Convex Integration

### Enable Clerk JWT

1. In your Clerk dashboard, go to "JWT Templates"
2. Create a new template named "convex"
3. Set the following configuration:
   ```json
   {
     "aud": "convex",
     "iss": "https://your-clerk-frontend-api.clerk.accounts.dev",
     "sub": "{{user.id}}"
   }
   ```

### Configure Convex Auth

1. In your Convex dashboard, go to "Settings" → "Environment Variables"
2. Add the following variables:
   ```
   CLERK_JWT_ISSUER_DOMAIN=https://your-clerk-frontend-api.clerk.accounts.dev
   ```

## 6. Run the Application

```bash
# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`

## 7. Test the Integration

1. **Visit the homepage** - Should load without authentication
2. **Click "Get Started"** - Should redirect to Clerk sign-in
3. **Sign up/Sign in** - Complete the authentication flow
4. **Access Dashboard** - Should show authenticated dashboard with Convex data
5. **Create an invoice** - Test the full CRUD operations

## Data Flow

### Without Authentication (Fallback Mode)

- Uses localStorage for data persistence
- Full functionality available offline
- Data stays local to browser

### With Authentication (Full Mode)

- Uses Convex for real-time database
- Data synced across devices
- Multi-user support
- Real-time updates

## Deployment Options

### Netlify (Recommended)

1. Connect your GitHub repository to Netlify
2. Set environment variables in Netlify dashboard
3. Deploy automatically on git push

### Vercel

1. Connect repository to Vercel
2. Add environment variables
3. Deploy with automatic builds

### Self-Hosted

1. Build the project: `npm run build`
2. Serve the `dist` folder with any static file server
3. Ensure environment variables are set

## Troubleshooting

### Common Issues

**"Clerk is not configured"**

- Ensure `VITE_CLERK_PUBLISHABLE_KEY` is set correctly
- Check that the key starts with `pk_test_` or `pk_live_`

**"Convex client not initialized"**

- Verify `VITE_CONVEX_URL` points to your deployment
- Run `npx convex dev` to ensure backend is running

**Authentication not working**

- Check Clerk dashboard for allowed domains
- Ensure JWT template is configured correctly

**Data not syncing**

- Verify user is authenticated
- Check browser console for Convex errors
- Ensure Convex functions are deployed

### Getting Help

1. Check the [Convex Documentation](https://docs.convex.dev)
2. Check the [Clerk Documentation](https://clerk.com/docs)
3. Create an issue in this repository

## Features

### ✅ Implemented

- Clerk authentication integration
- Convex database integration
- Automatic user creation and management
- Invoice CRUD operations
- Real-time data synchronization
- Fallback to localStorage when offline
- Responsive design
- Dark/light theme support

### 🚧 Coming Soon

- Email notifications
- PDF generation
- Payment integration
- Advanced analytics
- Team collaboration
- API access

## Security Notes

- Never commit `.env.local` to version control
- Use environment-specific keys (test vs production)
- Regularly rotate your secret keys
- Enable MFA on your Convex and Clerk accounts
