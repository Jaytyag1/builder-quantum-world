# Authentication Test Instructions

## Current Issue

- Clerk domain `handy-adder-99.accounts.dev` is refusing connections
- This is blocking authentication on your fly.dev deployment

## Quick Test Solution

### Option 1: Test Locally (Recommended)

1. **Run the app locally:**
   ```bash
   npm run dev
   ```
2. **Open:** http://localhost:5173
3. **Try signing up** - localhost should work better with Clerk

### Option 2: Update Clerk Domain Settings

1. **Go to Clerk Dashboard:** https://dashboard.clerk.com
2. **Navigate to:** "Configure" → "Domains"
3. **Add your fly.dev domain:**
   ```
   2618a5544eea4a7b97be3c44a26f4bae-f9af956d4b0c4dfc8814433ca.fly.dev
   ```
4. **Save and wait 5-10 minutes** for DNS propagation

### Option 3: Bypass Auth for Testing

If you want to test the dashboard without authentication:

- I can temporarily disable the auth wrapper
- This will let you see the dashboard with mock data
- We can re-enable auth once the domain issues are resolved

## Which option would you prefer?
