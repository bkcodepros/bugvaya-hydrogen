import {useLoaderData, Await} from 'react-router';
import React, {useState, Suspense} from 'react';
import {
  getSelectedProductOptions,
  Analytics,
  useOptimisticVariant,
  getProductOptions,
  getAdjacentAndFirstAvailableVariants,
  useSelectedOptionInUrlParam,
} from '@shopify/hydrogen';
import {ProductPrice} from '~/components/ProductPrice';
import {ProductImage} from '~/components/ProductImage';
import {ProductForm} from '~/components/ProductForm';
import {ProductItem} from '~/components/ProductItem';
import {redirectIfHandleIsLocalized} from '~/lib/redirect';
import Testimonials from '~/components/Testimonials';

export const meta = ({data}) => {
  return [
    {title: `Hydrogen | ${data?.product.title ?? ''}`},
    {
      rel: 'canonical',
      href: `/products/${data?.product.handle}`,
    },
  ];
};

export async function loader(args) {
  const deferredData = await loadDeferredData(args);
  const criticalData = await loadCriticalData(args);
  return {...deferredData, ...criticalData};
}

async function loadCriticalData({context, params, request}) {
  const {handle} = params;
  const {storefront} = context;

  if (!handle) throw new Error('Expected product handle to be defined');

  const [{product}] = await Promise.all([
    storefront.query(PRODUCT_QUERY, {
      variables: {handle, selectedOptions: getSelectedProductOptions(request)},
    }),
  ]);

  if (!product?.id) throw new Response(null, {status: 404});

  redirectIfHandleIsLocalized(request, {handle, data: product});

  return {product};
}

async function loadDeferredData({context}) {
  const {storefront} = context;
  const recommendedProducts = await storefront.query(RECOMMENDED_PRODUCTS_QUERY);
  return {recommendedProducts};
}

export default function Product() {
  const {product, recommendedProducts} = useLoaderData();
  const selectedVariant = useOptimisticVariant(
    product.selectedOrFirstAvailableVariant,
    getAdjacentAndFirstAvailableVariants(product),
  );

  useSelectedOptionInUrlParam(selectedVariant.selectedOptions);

  const productOptions = getProductOptions({
    ...product,
    selectedOrFirstAvailableVariant: selectedVariant,
  });

  const {title} = product;
  const metafields = Array.isArray(product.metafields) ? product.metafields : [];

  const getMetafield = (key) => metafields.find((m) => m?.key === key)?.value || '';
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="product">
      <div className="container">
        <div className="prd-main-wrap">
          <ProductImage image={selectedVariant?.image} />
          <div className="product-main">
            <h1>{title}</h1>
            <ProductPrice
              price={selectedVariant?.price}
              compareAtPrice={selectedVariant?.compareAtPrice}
            />

            <div className="product-tabs">
              <div className="tab-buttons">
                <button
                  className={activeTab === 'description' ? 'active' : ''}
                  onClick={() => setActiveTab('description')}
                >
                  Short Description
                </button>
                <button
                  className={activeTab === 'benefits' ? 'active' : ''}
                  onClick={() => setActiveTab('benefits')}
                >
                  Benefits
                </button>
                <button
                  className={activeTab === 'include' ? 'active' : ''}
                  onClick={() => setActiveTab('include')}
                >
                  What's Included
                </button>
              </div>
              <div className="tab-content">
                {activeTab === 'description' && (
                  <div>{getMetafield('shortdescription')}</div>
                )}
                {activeTab === 'benefits' && (
                  <div>{getMetafield('benefits')}</div>
                )}
                {activeTab === 'include' && (
                  <div>{getMetafield('what_s_include')}</div>
                )}
              </div>
            </div>

            <ProductForm
              productOptions={productOptions}
              selectedVariant={selectedVariant}
            />

            <div className="Product-extra-info">
              <ul>
                <li><span className="icn"><img src="/images/check-icn.svg" /></span> Fresh, herbaceous scent </li>
                <li><span className="icn"><img src="/images/check-icn.svg" /></span> Powered by lemongrass, cedarwood, and peppermint oils </li>
                <li><span className="icn"><img src="/images/check-icn.svg" /></span> 100% plant-based and non-toxic</li>
              </ul>
            </div>

            <Analytics.ProductView
              data={{
                products: [
                  {
                    id: product.id,
                    title: product.title,
                    price: selectedVariant?.price.amount || '0',
                    vendor: product.vendor,
                    variantId: selectedVariant?.id || '',
                    variantTitle: selectedVariant?.title || '',
                    quantity: 1,
                  },
                ],
              }}
            />
          </div>
        </div>
          {/* Add-ons or Extras Section */}
        <div className="product-extras">
          <div className="product-block">
            <div className="product-text">
              <h2>LEMONGRASS WILLOW</h2>
              <ul>
                <li><strong>Good For:</strong> All skin types, including sensitive and acne-prone skin</li>
                <li><strong>Feels Like:</strong> Light, refreshing, and non-greasy — absorbs easily into the skin with a cooling touch that leaves you feeling fresh and uplifted.</li>
                <li><strong>Smells Like:</strong> Bright, citrusy lemongrass with hints of herbal mint and soft florals — zesty, green, and clean with a naturally energizing finish.</li>
                <li><strong>FYI:</strong> This product is made with 100% plant-based essential oils and contains no DEET or synthetic fragrances. Always patch test before first use, especially on sensitive skin.</li>
              </ul>
            </div>
            <div className="product-image">
              <img src="/images/lemongrass-willows.png" alt="Lemongrass Willow" />
            </div>
          </div>

          <div className="video-section">
            <img src="/images/lemongrass-vd.png" alt="Video" />
            <div className="video-overlay">
          <div className="play-icon video-button"><img src="/images/play-icon.svg" alt="Video Icon"/></div>
              <h2>See How To Use Lemongrass</h2>
          </div>
          </div>

          <div className="product-block face-spry">
            <div className="product-image">
              <img src="/images/hydrating-face.png" alt="Bluevaya Face Spray" />
            </div>
            <div className="product-text">
              <h2><span><img src="/images/lg-footer.svg" alt="brnd img" /></span></h2>
              <h4>Hydrating face spray</h4>
              <ul>
                <li><strong>Benefits:</strong> <ul><li>Instantly leaves skin looking glazed, supple, and hydrated</li><li>Provides a glowy, radiant finish that lasts for hours</li></ul></li>
                <li><strong>Where It Fits:</strong> Apply after cleansing and before Glazing Milk, or take on the go and mist whenever skin needs a refresh</li>
                <li><strong>The Effect:</strong> Hydrated, glowy skin</li>
                <li><strong>Key Ingredients:</strong> Ectoin • Ceramide Trio • Beta-Glucan • Magnolia Extract</li>
              </ul>
            </div>
          </div>

          <div className="product-block abt">
            <div className="product-text">
              <h2>About <span><img src="/images/lg-footer.svg" alt="brnd img" /></span></h2>
              <p>
                bugvaya was born out of a need for something better — something clean, effective, and actually pretty enough to leave on the counter. As someone with sensitive skin, I wanted something that didn’t leave me feeling itchy, sticky, or overwhelmed by harsh scents. I wanted a solution that worked, felt good, and looked good. So I created bugvaya: a natural, plant-powered repellent that protects your skin and your peace of mind.</p>
<p>
Each bottle is thoughtfully designed with gentle, skin-loving ingredients — and every scent comes in a Gentle Formula too, for those who need an even softer touch.
</p>
<p>bugvaya was made for real life: weddings, patio dinners, concerts, beach days, farmers markets, and everywhere in between. It’s bug spray you can toss in your bag, pull out at a party, and not feel like you’re carrying a bottle of chemicals.
</p>
<p>This isn’t bug spray you’ll want to hide — it’s your new everyday essential.
              </p>
            </div>
            <div className="product-image">
              <img src="/images/about-bugvaya.png" alt="About Bluevaya" />
            </div>
          </div>
        </div>
        {/* Testimonials and Recommended */}
        <Testimonials />
        <RecommendedProducts products={recommendedProducts} />
      </div>
    </div>
  );
}

function RecommendedProducts({products}) {
  return (
    <div className="recommended-products">
      <h2>Related Products</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={products}>
          {(response) => (
            <div className="recommended-products-grid">
              {response?.products?.nodes?.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
            </div>
          )}
        </Await>
      </Suspense>
    </div>
  );
}

const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    featuredImage {
      id
      url
      altText
      width
      height
    }
  }
  query RecommendedProducts($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 4, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
`;

const PRODUCT_VARIANT_FRAGMENT = `#graphql
  fragment ProductVariant on ProductVariant {
    availableForSale
    compareAtPrice {
      amount
      currencyCode
    }
    id
    image {
      __typename
      id
      url
      altText
      width
      height
    }
    price {
      amount
      currencyCode
    }
    product {
      title
      handle
    }
    selectedOptions {
      name
      value
    }
    sku
    title
    unitPrice {
      amount
      currencyCode
    }
  }
`;

const PRODUCT_FRAGMENT = `#graphql
  fragment Product on Product {
    id
    title
    vendor
    handle
    descriptionHtml
    description
    metafields(identifiers: [
      {namespace: "custom", key: "shortdescription"},
      {namespace: "custom", key: "benefits"},
      {namespace: "custom", key: "what_s_include"}
    ]) {
      key
      value
      type
      namespace
    }
    encodedVariantExistence
    encodedVariantAvailability
    options {
      name
      optionValues {
        name
        firstSelectableVariant {
          ...ProductVariant
        }
        swatch {
          color
          image {
            previewImage {
              url
            }
          }
        }
      }
    }
    selectedOrFirstAvailableVariant(selectedOptions: $selectedOptions, ignoreUnknownOptions: true, caseInsensitiveMatch: true) {
      ...ProductVariant
    }
    adjacentVariants(selectedOptions: $selectedOptions) {
      ...ProductVariant
    }
    seo {
      description
      title
    }
  }
  ${PRODUCT_VARIANT_FRAGMENT}
`;

const PRODUCT_QUERY = `#graphql
  query Product(
    $country: CountryCode
    $handle: String!
    $language: LanguageCode
    $selectedOptions: [SelectedOptionInput!]!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      ...Product
    }
  }
  ${PRODUCT_FRAGMENT}
`;