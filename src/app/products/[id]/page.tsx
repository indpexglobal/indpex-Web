import { notFound } from "next/navigation";
import Image from "next/image";
import productData from "@/data/products.json";
import type { Metadata } from "next";

interface Product {
  id: string;
  name: string;
  brand: string;
  specs: string;
  description: string;
  local_image: string;
}

const MANUFACTURER_MAP: Record<string, string> = {
  "SKF": "SKF Group",
  "FAG / Schaeffler": "Schaeffler Group",
  "NBC": "NEI (NBC)",
  "Timken": "Timken Company",
  "NTN": "NTN Corporation"
};

const ORIGIN_MAP: Record<string, string> = {
  "SKF": "Sweden",
  "FAG / Schaeffler": "Germany",
  "NBC": "India",
  "Timken": "USA",
  "NTN": "Japan"
};

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = productData.find((p) => p.id === params.id);
  if (!product) return { title: "Product Not Found" };

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{ url: product.local_image }],
    },
  };
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = productData.find((p) => p.id === params.id) as Product | undefined;

  if (!product) {
    notFound();
  }

  // Helper to extract properties from specs string
  const getSpecValue = (label: string) => {
    const regex = new RegExp(`${label}[:\\s]*([^|\\n]+)`, "i");
    const match = product.specs.match(regex);
    return match ? match[1].trim() : "N/A";
  };

  const bore = getSpecValue("Bore");
  const od = getSpecValue("OD");
  const width = getSpecValue("Width");
  const dynamicLoad = getSpecValue("Dynamic Load");
  
  // Extract SKU from name (usually the first part)
  const sku = product.name.split(" ")[1] || product.id;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": `https://www.indpexglobal.com${product.local_image}`,
    "brand": { "@type": "Brand", "name": product.brand },
    "manufacturer": { "@type": "Organization", "name": MANUFACTURER_MAP[product.brand] || product.brand },
    "sku": sku,
    "mpn": sku,
    "category": "Industrial Bearing",
    "offers": {
      "@type": "Offer",
      "url": `https://www.indpexglobal.com/products/${product.id}`,
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "seller": {
        "@type": "Organization",
        "name": "Indpex Global",
        "url": "https://www.indpexglobal.com"
      }
    },
    "additionalProperty": [
      { "@type": "PropertyValue", "name": "Bore Diameter", "value": bore },
      { "@type": "PropertyValue", "name": "Outer Diameter", "value": od },
      { "@type": "PropertyValue", "name": "Width", "value": width },
      { "@type": "PropertyValue", "name": "Dynamic Load Rating", "value": dynamicLoad },
      { "@type": "PropertyValue", "name": "Country of Origin", "value": ORIGIN_MAP[product.brand] || "Various" }
    ]
  };

  return (
    <div className="product-detail-page bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb or Back Button */}
      <div className="l-container py-6">
        <a href="/products" className="text-[var(--color-primary)] font-semibold flex items-center gap-2 hover:underline">
          ← Back to Catalog
        </a>
      </div>

      <div className="l-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Product Image */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 flex items-center justify-center min-h-[400px]">
            <div className="relative w-full aspect-square">
              <Image
                src={product.local_image}
                alt={product.name}
                fill
                style={{ objectFit: "contain" }}
                className="hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="product-info">
            <div className="mb-6">
              <span className="bg-[var(--color-primary)] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 inline-block">
                {product.brand} Authorised Supply
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed italic border-l-4 border-[var(--color-primary)] pl-6 py-2">
                "{product.description}"
              </p>
            </div>

            {/* Specs Table */}
            <div className="specs-section bg-slate-50 rounded-xl p-6 border border-slate-100 mb-8">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">Technical Specifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.specs.split("|").map((spec, i) => (
                  <div key={i} className="flex justify-between border-b border-slate-200 pb-2 last:border-0">
                    <span className="text-slate-500 text-sm">{spec.split(":")[0]?.trim() || "Feature"}</span>
                    <span className="text-slate-900 font-semibold text-sm">{spec.split(":")[1]?.trim() || spec.trim()}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="cta-box bg-slate-900 rounded-xl p-8 text-white shadow-xl">
              <h3 className="text-xl font-bold mb-2">Requirement for {sku}?</h3>
              <p className="text-slate-400 text-sm mb-6">
                Direct stock available for immediate dispatch. Special pricing for bulk industrial procurement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={`mailto:contact@indpexglobal.com?subject=Quote Request: ${product.name}`}
                  className="bg-[var(--color-primary)] hover:bg-white hover:text-[var(--color-primary)] text-white font-bold py-3 px-8 rounded-lg text-center transition-all duration-300"
                >
                  Request Official Quote
                </a>
                <a 
                  href="https://wa.me/917877744377"
                  target="_blank"
                  className="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-8 rounded-lg text-center transition-all duration-300 flex items-center justify-center gap-2"
                >
                  WhatsApp Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
