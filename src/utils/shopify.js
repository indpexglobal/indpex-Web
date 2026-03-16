/**
 * Shopify Storefront API Utility
 * 
 * To Use:
 * 1. Go to Shopify Admin > Settings > Apps and sales channels > Develop apps.
 * 2. Create an app and enable 'Storefront API access'.
 * 3. Copy the 'Storefront access token' and 'Store domain'.
 */

const SHOPIFY_CONFIG = {
    shop: 'YOUR_STORE_DOMAIN.myshopify.com', // e.g. indpex-global.myshopify.com
    accessToken: 'YOUR_STOREFRONT_ACCESS_TOKEN'
};

const SHOPIFY_GRAPHQL_URL = `https://${SHOPIFY_CONFIG.shop}/api/2024-01/graphql.json`;

/**
 * Fetch products from Shopify using GraphQL
 */
export const fetchShopifyProducts = async (limit = 10) => {
    const query = `
        {
            products(first: ${limit}) {
                edges {
                    node {
                        id
                        title
                        handle
                        descriptionHtml
                        featuredImage {
                            url
                            altText
                        }
                        variants(first: 1) {
                            edges {
                                node {
                                    price {
                                        amount
                                        currencyCode
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `;

    try {
        const response = await fetch(SHOPIFY_GRAPHQL_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Shopify-Storefront-Access-Token': SHOPIFY_CONFIG.accessToken
            },
            body: JSON.stringify({ query })
        });

        const result = await response.json();
        return result.data.products.edges.map(edge => edge.node);
    } catch (error) {
        console.error('Shopify Sync Error:', error);
        return [];
    }
};

/**
 * Render Shopify products into the product grid
 */
export const renderShopifyGrid = async (containerSelector) => {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    // Show loading state
    container.innerHTML = '<div class="section-header"><p>Syncing catalog with Shopify...</p></div>';

    const products = await fetchShopifyProducts();
    
    if (products.length === 0) {
        container.innerHTML = '<p>No products found in Shopify catalog.</p>';
        return;
    }

    container.innerHTML = ''; // Clear loading
    
    products.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.setAttribute('data-reveal', 'slide-up');
        if (index > 0) card.classList.add(`stagger-${index}`);

        const price = product.variants.edges[0].node.price;

        card.innerHTML = `
            <img src="${product.featuredImage.url}" alt="${product.featuredImage.altText || product.title}" class="product-card__image">
            <div class="product-card__content">
                <span class="product-card__category">Shopify Sync</span>
                <h3 class="product-card__title">${product.title}</h3>
                <p class="product-card__text">${product.descriptionHtml.replace(/<[^>]*>?/gm, '').substring(0, 80)}...</p>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: auto;">
                    <span style="font-weight: bold; color: var(--color-primary);">${price.amount} ${price.currencyCode}</span>
                    <a href="contact.html?product=${encodeURIComponent(product.title)}" class="btn btn--outline" style="padding: 0.5rem 1rem;">Inquiry</a>
                </div>
            </div>
        `;
        container.appendChild(card);
    });

    // Re-initialize animations for new elements
    // Note: You would import initScrollAnimations here in a real module
};
