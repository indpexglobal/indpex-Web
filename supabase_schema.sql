-- 1. Create a table for products
CREATE TABLE products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    title TEXT NOT NULL,
    category TEXT,
    description TEXT,
    price DECIMAL(10, 2),
    currency TEXT DEFAULT 'USD',
    image_url TEXT,
    is_featured BOOLEAN DEFAULT false
);

-- 2. Create a storage bucket for product images
-- Go to Supabase > Storage > Create a new bucket named 'products' and set it to 'Public'.

-- 3. Row Level Security (RLS)
-- Enable RLS on products table
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Allow public read access to products
CREATE POLICY "Public Read Access" ON products FOR SELECT USING (true);

-- Allow authenticated users (admin) full access
CREATE POLICY "Admin Full Access" ON products FOR ALL USING (auth.role() = 'authenticated');
