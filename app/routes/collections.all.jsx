import {useLoaderData, useSearchParams} from 'react-router';
import {getPaginationVariables} from '@shopify/hydrogen';
import {PaginatedResourceSection} from '~/components/PaginatedResourceSection';
import {ProductItem} from '~/components/ProductItem';

/**
 * @type {MetaFunction<typeof loader>}
 */
export const meta = () => {
  return [{title: `Hydrogen | Products`}];
};

/**
 * @param {LoaderFunctionArgs} args
 */
export async function loader({context, request}) {
  const url = new URL(request.url);
  const sortKey = url.searchParams.get('sort') || 'RELEVANCE';
  const reverse = url.searchParams.get('reverse') === 'true';

  const paginationVariables = getPaginationVariables(request, {
    pageBy: 8,
  });

  const {storefront} = context;

  const [{products}] = await Promise.all([
    storefront.query(CATALOG_QUERY, {
      variables: {
        ...paginationVariables,
        sortKey,
        reverse,
      },
    }),
  ]);

  return {products, sortKey, reverse};
}

export default function Collection() {
  const {products, sortKey, reverse} = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortChange = (e) => {
    const [sort, rev] = e.target.value.split(',');
    setSearchParams((prev) => {
      prev.set('sort', sort);
      prev.set('reverse', rev);
      return prev;
    });
  };

  return (
    <div className="collection">
      <div className="container">
        <div className="faq-bnr">
          <h1 className="faq-title">Shop</h1>
          <div className="breadcrumb">
            <ul><li>Home</li><li>&bull;</li><li>Shop</li></ul>
          </div>
        </div>

        {/* Sort Dropdown */}
        <div className="sort-bar">
          <label>Sort By:</label>
          <select onChange={handleSortChange} value={`${sortKey},${reverse}`}>
            <option value="RELEVANCE,false">Relevance</option>
            <option value="TITLE,false">Title A-Z</option>
            <option value="TITLE,true">Title Z-A</option>
            <option value="PRICE,false">Price Low to High</option>
            <option value="PRICE,true">Price High to Low</option>
            <option value="CREATED_AT,true">Newest</option>
          </select>
        </div>

        <PaginatedResourceSection
          connection={products}
          resourcesClassName="products-grid"
        >
          {({node: product, index}) => (
            <ProductItem
              key={product.id}
              product={product}
              loading={index < 8 ? 'eager' : undefined}
            />
          )}
        </PaginatedResourceSection>
      </div>
    </div>
  );
}

const COLLECTION_ITEM_FRAGMENT = `#graphql
  fragment MoneyCollectionItem on MoneyV2 {
    amount
    currencyCode
  }
  fragment CollectionItem on Product {
    id
    handle
    title
    featuredImage {
      id
      altText
      url
      width
      height
    }
    priceRange {
      minVariantPrice {
        ...MoneyCollectionItem
      }
      maxVariantPrice {
        ...MoneyCollectionItem
      }
    }
  }
`;

const CATALOG_QUERY = `#graphql
  query Catalog(
    $country: CountryCode
    $language: LanguageCode
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
    $sortKey: ProductSortKeys
    $reverse: Boolean
  ) @inContext(country: $country, language: $language) {
    products(
      first: $first
      last: $last
      before: $startCursor
      after: $endCursor
      sortKey: $sortKey
      reverse: $reverse
    ) {
      nodes {
        ...CollectionItem
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
    }
  }
  ${COLLECTION_ITEM_FRAGMENT}
`;

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @template T @typedef {import('@remix-run/react').MetaFunction<T>} MetaFunction */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
