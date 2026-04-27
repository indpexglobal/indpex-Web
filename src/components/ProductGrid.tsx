import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  brand: string;
  specs: string;
  description: string;
  local_image: string;
}

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="product-grid container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link 
            href={`/products/${product.id}`} 
            key={product.id} 
            className="group block bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[var(--color-primary)] transition-all duration-300"
          >
            <div className="relative w-full h-56 bg-slate-50 overflow-hidden">
              <Image 
                src={product.local_image}
                alt={product.name}
                fill
                style={{ objectFit: 'contain' }}
                className="p-4 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-slate-900/80 text-white text-[0.65rem] font-bold uppercase tracking-wider px-2 py-1 rounded">
                   {product.brand}
                </span>
              </div>
            </div>
            
            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900 leading-tight mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                {product.name}
              </h3>
              
              <div className="mb-3">
                <p className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wide">Technical Specs:</p>
                <p className="text-xs text-gray-600 mt-1 line-clamp-2">{product.specs}</p>
              </div>
              
              <div className="border-t border-gray-100 pt-3 mt-3">
                <p className="text-sm text-gray-700 leading-relaxed italic">"{product.description}"</p>
              </div>
              
              <div className="mt-5 w-full bg-transparent group-hover:bg-[var(--color-primary)] text-[var(--color-primary)] group-hover:text-white border border-[var(--color-primary)] font-semibold py-2 px-4 rounded transition-colors text-sm text-center">
                View Details & Request Quote
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
