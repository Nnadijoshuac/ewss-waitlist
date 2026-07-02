# Supabase Setup Guide

## 1. Create Supabase Project

1. Go to https://supabase.com
2. Click "Start your project"
3. Sign up or log in
4. Create a new project (free tier available)
5. Wait for project to initialize

## 2. Get Your Credentials

Go to **Project Settings** → **API**:
- Copy `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
- Copy `anon public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Paste these in `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

## 3. Create Waitlist Table

Go to **SQL Editor** and run this:

```sql
-- Create waitlist table
CREATE TABLE public.waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  phone_number VARCHAR(20) NOT NULL,
  email VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create index on email for faster lookups
CREATE INDEX idx_waitlist_email ON public.waitlist(email);

-- Enable Row Level Security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (for signup form)
CREATE POLICY "Allow anonymous inserts"
  ON public.waitlist
  FOR INSERT
  WITH CHECK (true);

-- Allow users to view only their own entries
CREATE POLICY "Users can view own entries"
  ON public.waitlist
  FOR SELECT
  USING (auth.uid() = id OR auth.uid() IS NULL);
```

## 4. Verify Setup

In Supabase dashboard:
- Go to **Table Editor**
- You should see `waitlist` table
- Check that RLS is enabled (green lock icon)

## 5. Test the Form

1. Go to http://localhost:3000
2. Fill in the form
3. Submit
4. Check Supabase dashboard → **Table Editor** → `waitlist`
5. Your entry should appear!

## Optional: Add More Columns

If you need additional fields, run:

```sql
-- Add country column
ALTER TABLE public.waitlist 
ADD COLUMN country VARCHAR(100);

-- Add referral source
ALTER TABLE public.waitlist 
ADD COLUMN referral_source VARCHAR(255);

-- Add status
ALTER TABLE public.waitlist 
ADD COLUMN status VARCHAR(50) DEFAULT 'pending';
```

Then update the form in `app/components/WaitlistForm.tsx` to include these fields.

## Troubleshooting

### Form submissions not working?
- Check `.env.local` has correct credentials
- Verify RLS policies are set correctly
- Check browser console for error messages

### Can't see data in Supabase?
- Make sure RLS insert policy is enabled
- Check table permissions
- Refresh the page

### Email duplicates showing up?
Add unique constraint:
```sql
ALTER TABLE public.waitlist 
ADD CONSTRAINT unique_email UNIQUE(email);
```

## Backup Data

In Supabase:
1. Go to **Database** → **Backups**
2. Enable automated backups
3. Download manual backup before major changes
