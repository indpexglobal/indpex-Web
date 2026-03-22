"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

interface Product {
    id: string;
    title: string;
    category: string;
    image_url: string;
    description: string;
    price: number | null;
}

export default function AdminDashboard() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<any>(null);
    const [isAdding, setIsAdding] = useState(false);
    
    // Form State
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("Mechanical Components");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [price, setPrice] = useState("");

    const router = useRouter();

    useEffect(() => {
        checkUser();
        fetchProducts();
    }, []);

    async function checkUser() {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) {
            router.push("/admin/login");
        } else {
            setUser(session.user);
        }
    }

    async function fetchProducts() {
        setLoading(true);
        const { data, error } = await supabase
            .from('products')
            .select('*')
            .order('created_at', { ascending: false });
        if (!error) setProducts(data || []);
        setLoading(false);
    }

    async function handleAddProduct(e: React.FormEvent) {
        e.preventDefault();
        const { error } = await supabase.from('products').insert([{
            title, category, description, image_url: imageUrl, price: price ? parseFloat(price) : null
        }]);

        if (error) {
            alert("Error adding product: " + error.message);
        } else {
            setIsAdding(false);
            fetchProducts();
            // Reset form
            setTitle("");
            setDescription("");
            setImageUrl("");
            setPrice("");
        }
    }

    async function handleDelete(id: string) {
        if (!confirm("Are you sure you want to delete this industrial listing?")) return;
        const { error } = await supabase.from('products').delete().eq('id', id);
        if (error) alert("Delete failed: " + error.message);
        else fetchProducts();
    }

    async function handleLogout() {
        await supabase.auth.signOut();
        router.push("/admin/login");
    }

    if (!user) return <div style={{ padding: '5rem', textAlign: 'center' }}>Verifying authorization...</div>;

    return (
        <div className="admin-dashboard" style={{ padding: '3rem 0', backgroundColor: '#f8fafc', minHeight: '100vh' }}>
            <div className="l-container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                    <div>
                        <h1 style={{ fontSize: '2rem' }}>Product Management</h1>
                        <p style={{ color: 'var(--color-text-muted)' }}>Authorized Access: {user.email}</p>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button onClick={() => setIsAdding(!isAdding)} className="btn btn--primary">
                            {isAdding ? "Cancel Entry" : "Add New Product"}
                        </button>
                        <button onClick={handleLogout} className="btn btn--outline">Logout</button>
                    </div>
                </div>

                {isAdding && (
                    <div className="card-corp" style={{ marginBottom: '3rem', borderTop: '4px solid var(--color-primary)' }}>
                        <h2 style={{ marginBottom: '2rem', fontSize: '1.25rem' }}>Direct Entry: Industrial Component</h2>
                        <form onSubmit={handleAddProduct} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                            <div style={{ gridColumn: '1 / -1' }}>
                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>Product Title</label>
                                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. SKF 6205 Deep Groove Ball Bearing" style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border)' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>Industrial Sector</label>
                                <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border)' }}>
                                    <option>Machinery</option>
                                    <option>Metal Products</option>
                                    <option>Mechanical Components</option>
                                </select>
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>Image URL</label>
                                <input type="url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="https://..." style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border)' }} />
                            </div>
                            <div style={{ gridColumn: '1 / -1' }}>
                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>Technical Description</label>
                                <textarea rows={4} value={description} onChange={(e) => setDescription(e.target.value)} style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border)' }}></textarea>
                            </div>
                            <button type="submit" className="btn btn--primary" style={{ gridColumn: '1 / -1' }}>Commit to Database</button>
                        </form>
                    </div>
                )}

                <div className="card-corp" style={{ padding: 0, overflow: 'hidden' }}>
                    <div style={{ padding: '1.5rem 2rem', borderBottom: '1px solid var(--color-border)', backgroundColor: '#fff' }}>
                        <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>Active Industrial Listings ({products.length})</h3>
                    </div>
                    {loading ? (
                        <div style={{ padding: '3rem', textAlign: 'center' }}>Syncing data...</div>
                    ) : (
                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                                <thead style={{ backgroundColor: '#f1f5f9', color: 'var(--color-primary-dark)', fontSize: '0.75rem', textTransform: 'uppercase' }}>
                                    <tr>
                                        <th style={{ padding: '1rem 2rem' }}>Product</th>
                                        <th style={{ padding: '1rem 2rem' }}>Sector</th>
                                        <th style={{ padding: '1rem 2rem' }}>Status</th>
                                        <th style={{ padding: '1rem 2rem' }}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map(p => (
                                        <tr key={p.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                                            <td style={{ padding: '1.5rem 2rem' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                                    <img src={p.image_url || "/bearings-hero.png"} alt="" style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '4px' }} />
                                                    <span style={{ fontWeight: 600 }}>{p.title}</span>
                                                </div>
                                            </td>
                                            <td style={{ padding: '1.5rem 2rem', fontSize: '0.875rem' }}>{p.category}</td>
                                            <td style={{ padding: '1.5rem 2rem' }}>
                                                <span style={{ backgroundColor: '#dcfce7', color: '#166534', padding: '0.25rem 0.75rem', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 700 }}>LIVE</span>
                                            </td>
                                            <td style={{ padding: '1.5rem 2rem' }}>
                                                <button onClick={() => handleDelete(p.id)} style={{ color: '#ef4444', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '0.875rem' }}>Remove</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
