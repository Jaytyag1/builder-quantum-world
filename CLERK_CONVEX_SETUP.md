# Clerk + Convex Connection Setup

## Step 1: Configure Clerk JWT Template

1. **Go to your Clerk Dashboard**: https://handy-adder-99.clerk.accounts.dev
2. **Navigate to "JWT Templates"** in the left sidebar
3. **Click "New Template"**
4. **Name**: `convex`
5. **Token lifetime**: 3600 (1 hour)
6. **Claims**: Use this exact configuration:

```json
{
  "aud": "convex",
  "exp": {{exp}},
  "iat": {{iat}},
  "iss": "https://handy-adder-99.clerk.accounts.dev",
  "nbf": {{nbf}},
  "sub": "{{user.id}}"
}
```

7. **Click "Apply Changes"**

## Step 2: Configure Convex Environment Variables

1. **Go to your Convex Dashboard**: https://secret-frog-459.convex.cloud
2. **Navigate to "Settings" → "Environment Variables"**
3. **Add these variables**:

```
CLERK_JWT_ISSUER_DOMAIN=https://handy-adder-99.clerk.accounts.dev
```

## Step 3: Deploy Convex Functions

1. **Run this command in your terminal**:

```bash
npx convex dev
```

2. **This will**:
   - Deploy your functions to Convex
   - Set up the authentication configuration
   - Create the database tables

## Step 4: Restart Your Development Server

1. **Stop your current dev server** (Ctrl+C)
2. **Start it again**:

```bash
npm run dev
```

## Step 5: Test the Integration

1. **Visit your app**: http://localhost:5173
2. **Click "Get Started"** - Should show Clerk sign-in
3. **Sign up/Sign in** with a test account
4. **Go to Dashboard** - Should create user in Convex and show authenticated state

## Verification Checklist

- [ ] JWT Template created in Clerk with name "convex"
- [ ] Convex environment variable set: `CLERK_JWT_ISSUER_DOMAIN`
- [ ] `npx convex dev` ran successfully
- [ ] Can sign in through Clerk
- [ ] Dashboard shows authenticated user data
- [ ] Can create/edit invoices

## Troubleshooting

**If sign-in doesn't work:**

- Check JWT template is named exactly "convex"
- Verify issuer domain matches exactly
- Check browser console for errors

**If dashboard doesn't load:**

- Check Convex dashboard for function deployment status
- Verify environment variables are set correctly
- Check network tab for API call failures

**If data doesn't sync:**

- Check that user is being created in Convex "users" table
- Verify invoice operations work in Convex dashboard

## What This Setup Enables

✅ **Secure Authentication**: Users sign in through Clerk
✅ **Real-time Database**: Data stored in Convex with real-time updates  
✅ **User Isolation**: Each user sees only their own invoices
✅ **Automatic Sync**: Data syncs across devices for authenticated users
✅ **Fallback Mode**: Still works offline with localStorage

Once this is working, you'll have a complete authentication + database system!
