import {Link} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';

export default function NewCollectionSection({products = []}) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-4">
            Get your skin to glow with our new collection
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We carefully and clinically source our ingredients, to create clean and sustainable products.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 w-24 mx-auto mb-12"></div>

        {/* Collection Title */}
        <h2 className="text-center text-xl font-medium text-gray-900 mb-8 tracking-wider">
          Shop New Collection
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {products.map((product) => (
            <Link 
              key={product.id} 
              to={`/products/${product.handle}`}
              className="group block text-center"
            >
              <div className="aspect-square overflow-hidden mb-4">
                <Image
                  data={product.featuredImage}
                  alt={product.featuredImage?.altText || product.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-1">
                {product.title}
              </h3>
              <p className="text-gray-500 uppercase text-sm tracking-wider">
                {product.description?.value || ''}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}