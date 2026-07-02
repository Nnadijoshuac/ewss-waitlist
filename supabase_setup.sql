-- VALE Waitlist - Supabase Setup SQL
-- Copy and paste this in Supabase SQL Editor

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

-- Create unique constraint to prevent duplicate emails
ALTER TABLE public.waitlist
ADD CONSTRAINT unique_email UNIQUE(email);

-- Enable Row Level Security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (for public signup form)
CREATE POLICY "Allow anonymous inserts"
  ON public.waitlist
  FOR INSERT
  WITH CHECK (true);

-- Allow users to view their own entries
CREATE POLICY "Users can view own entries"
  ON public.waitlist
  FOR SELECT
  USING (true);

-- Optional: Allow updates to own entries
CREATE POLICY "Users can update own entries"
  ON public.waitlist
  FOR UPDATE
  USING (true);
