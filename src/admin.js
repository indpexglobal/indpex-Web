import { supabase } from './utils/supabase';

// Element Selectors (Updated for Corporate UI)
const authView = document.getElementById('auth-view');
const dashboardView = document.getElementById('dashboard-view');
const loginForm = document.getElementById('login-form');
const authError = document.getElementById('auth-error');
const logoutBtn = document.getElementById('logout-btn');
const adminProductGrid = document.getElementById('admin-product-grid');
const openAddModalBtn = document.getElementById('open-add-modal');
const productModal = document.getElementById('product-modal');
const productForm = document.getElementById('product-form');

/**
 * Initialize Admin App
 */
async function initAdmin() {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (session) {
        showDashboard();
    } else {
        showAuth();
    }

    supabase.auth.onAuthStateChange((_event, session) => {
        if (session) {
            showDashboard();
        } else {
            showAuth();
        }
    });

    // Event Listeners
    if (loginForm) loginForm.addEventListener('submit', handleLogin);
    if (logoutBtn) logoutBtn.addEventListener('click', handleLogout);
    if (openAddModalBtn) openAddModalBtn.addEventListener('click', openAddModal);
    if (productForm) productForm.addEventListener('submit', handleProductSubmit);

    // Close Modal Logic
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', () => { productModal.style.display = 'none'; });
    });
}

/**
 * Auth Functions
 */
function showAuth() {
    authView.style.display = 'flex';
    dashboardView.style.display = 'none';
}

function showDashboard() {
    authView.style.display = 'none';
    dashboardView.style.display = 'flex';
    fetchAdminProducts();
}

async function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
        authError.textContent = error.message;
        authError.style.display = 'block';
    } else {
        authError.style.display = 'none';
    }
}

async function handleLogout() {
    await supabase.auth.signOut();
}

/**
 * Product Management Functions
 */
async function fetchAdminProducts() {
    if (!adminProductGrid) return;
    adminProductGrid.innerHTML = '<div style="padding: 4rem; text-align: center; color: var(--color-text-muted);">Syncing secure catalog data...</div>';
    
    const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        adminProductGrid.innerHTML = `<p style="color:red; text-align:center;">Database Error: ${error.message}</p>`;
        return;
    }

    renderAdminProducts(data);
}

function renderAdminProducts(products) {
    if (products.length === 0) {
        adminProductGrid.innerHTML = '<div style="padding: 4rem; text-align: center; color: var(--color-text-muted);">No components found in the catalog.</div>';
        return;
    }

    adminProductGrid.innerHTML = '';
    products.forEach(p => {
        const row = document.createElement('div');
        row.className = 'p-card-admin';
        row.innerHTML = `
            <img class="p-thumb-admin" src="${p.image_url || 'https://via.placeholder.com/60'}" alt="${p.title}">
            <div class="p-info-admin">
                <h4 style="margin:0;font-size:0.9375rem;">${p.title}</h4>
                <span>${p.category} | ${p.price ? '$' + p.price : 'P.O.A'}</span>
            </div>
            <div style="display:flex; gap:0.5rem;">
                <button class="btn btn--outline btn--xs edit-btn" style="padding:0.25rem 0.75rem;font-size:0.6rem;">Edit</button>
                <button class="btn btn--outline btn--xs delete-btn" style="padding:0.25rem 0.75rem;font-size:0.6rem;color:#ef4444;border-color:#ef4444;">Delete</button>
            </div>
        `;
        
        row.querySelector('.edit-btn').addEventListener('click', () => openEditModal(p));
        row.querySelector('.delete-btn').addEventListener('click', () => deleteProduct(p.id));
        
        adminProductGrid.appendChild(row);
    });
}

function openAddModal() {
    productForm.reset();
    document.getElementById('p-id').value = '';
    productModal.style.display = 'flex';
}

function openEditModal(p) {
    document.getElementById('p-id').value = p.id;
    document.getElementById('p-title').value = p.title;
    document.getElementById('p-category').value = p.category;
    document.getElementById('p-description').value = p.description || '';
    document.getElementById('p-price').value = p.price || '';
    productModal.style.display = 'flex';
}

async function handleProductSubmit(e) {
    e.preventDefault();
    const id = document.getElementById('p-id').value;
    const title = document.getElementById('p-title').value;
    const category = document.getElementById('p-category').value;
    const description = document.getElementById('p-description').value;
    const price = document.getElementById('p-price').value;
    const imageFile = document.getElementById('p-image').files[0];

    let imageUrl = '';

    if (imageFile) {
        const fileExt = imageFile.name.split('.').pop();
        const fileName = `${Date.now()}.${fileExt}`;
        const { error: uploadError } = await supabase.storage.from('products').upload(fileName, imageFile);
        
        if (uploadError) {
            alert('Image Upload Failed: ' + uploadError.message);
            return;
        }
        
        const { data: { publicUrl } } = supabase.storage.from('products').getPublicUrl(fileName);
        imageUrl = publicUrl;
    }

    const payload = { title, category, description, price: price ? parseFloat(price) : null };
    if (imageUrl) payload.image_url = imageUrl;

    if (id) {
        const { error } = await supabase.from('products').update(payload).eq('id', id);
        if (error) alert('Update Failed: ' + error.message);
    } else {
        const { error } = await supabase.from('products').insert([payload]);
        if (error) alert('Create Failed: ' + error.message);
    }

    productModal.style.display = 'none';
    fetchAdminProducts();
}

async function deleteProduct(id) {
    if (confirm('Verify: Permanently delete this component from the industrial catalog?')) {
        const { error } = await supabase.from('products').delete().eq('id', id);
        if (error) alert('Delete Failed: ' + error.message);
        fetchAdminProducts();
    }
}

// Start Admin
initAdmin();
