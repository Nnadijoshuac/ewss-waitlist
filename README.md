# VALE - Waitlist Landing Page

A modern landing page built with Next.js, Tailwind CSS, and ShadcnUI for the VALE water access initiative.

## Features

- ✨ Responsive design optimized for mobile
- 🎨 Beautiful UI with Tailwind CSS
- ✅ Form validation with React Hook Form and Zod
- 💾 Supabase integration for data persistence
- 🚀 Built with Next.js latest

## Tech Stack

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **Supabase** - Backend database

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Supabase account (free tier available at https://supabase.com)

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up Supabase:**
   - Create a Supabase account
   - Create a new project
   - In the SQL Editor, run this query to create the waitlist table:
   ```sql
   CREATE TABLE waitlist (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     full_name VARCHAR(255) NOT NULL,
     phone_number VARCHAR(20) NOT NULL,
     email VARCHAR(255) NOT NULL,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );

   -- Enable Row Level Security (RLS)
   ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

   -- Create policy to allow anonymous inserts
   CREATE POLICY "Allow anonymous inserts" ON waitlist
     FOR INSERT
     WITH CHECK (true);
   ```

3. **Configure environment variables:**
   - Copy `.env.local` and update it with your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
   - Get these from your Supabase project settings

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   - Visit [http://localhost:3000](http://localhost:3000)

## Building for Production

```bash
npm run build
npm run start
```

## Project Structure

```
waitlist/
├── app/
│   ├── components/
│   │   └── WaitlistForm.tsx    # Form component with validation
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Landing page
│   └── globals.css             # Global styles
├── public/                      # Static assets
├── .env.local                   # Environment variables
├── next.config.js              # Next.js config
├── tailwind.config.ts          # Tailwind config
├── tsconfig.json               # TypeScript config
└── package.json
```

## Customization

### Styling
- Colors and theme can be modified in `tailwind.config.ts`
- Global styles in `app/globals.css`

### Form Fields
- Edit validation rules in `app/components/WaitlistForm.tsx`
- Modify the schema object to add/remove fields

### Content
- Update heading and description text in `app/page.tsx`

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables in Vercel settings
4. Deploy!

### Other Platforms
Works with any Node.js hosting (Netlify, Railway, Render, etc.)

## Support

For issues or questions, please create an issue in the repository.
# ewss-waitlist
