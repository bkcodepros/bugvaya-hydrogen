import {Suspense, useEffect, useState} from 'react';
import {Await, NavLink, useAsyncValue} from 'react-router';
import {useAnalytics, useOptimisticCart} from '@shopify/hydrogen';
import {useAside} from '~/components/Aside';
/**
 * @param {HeaderProps}
 */
export function Header({header, isLoggedIn, cart, publicStoreDomain}) {
  const {shop, menu} = header;
   const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change at 50px scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <><div className="container mx-auto px-40"><div className="promo-bnr">Free Standard shipping on us orders $35+ <a href="#">Learn More</a></div>
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      
      <HeaderMenu
        menu={menu}
        viewport="desktop"
        primaryDomainUrl={header.shop.primaryDomain.url}
        publicStoreDomain={publicStoreDomain}
      />
      <NavLink prefetch="intent" to="/" style={activeLinkStyle} end>
       {/* <img src="https://cdn.shopify.com/s/files/1/0691/3025/6522/files/Logo.png" alt="Logo Image" />*/}
        <svg xmlns="http://www.w3.org/2000/svg" width="246" height="43" viewBox="0 0 246 43" fill="none">
<path d="M245.445 4.74926C245.675 5.0894 245.975 6.72009 245.995 7.19029C246.156 10.9519 241.993 17.0044 241.373 21.4663C240.552 27.4088 244.234 29.5597 240.462 36.0325C238.461 39.4539 233.268 42.7653 229.146 42.055C228.596 41.9549 227.755 41.5948 227.285 41.2947C222.703 38.3334 224.784 34.6919 227.205 32.2909C227.785 31.7206 229.957 30.2 230.197 29.8599C230.517 29.3897 230.457 28.7894 230.247 28.2992C230.137 28.0591 227.685 24.7277 227.495 24.5976C226.875 24.1374 225.574 24.0174 224.974 24.6276C224.264 25.3579 222.473 29.3096 222.112 30.4101C220.922 33.9816 221.252 37.373 219.411 40.8845C217.57 44.396 214.878 42.3351 212.117 42.3151C210.766 42.3151 209.405 43.0654 207.965 42.9954C206.524 42.9254 204.943 42.085 204.793 40.4543C204.753 40.0441 204.963 38.2034 205.083 37.7832C205.633 35.8924 208.685 30.5802 209.836 28.6994C211.877 25.368 215.249 20.8661 218.01 18.1449C221.052 15.1436 229.216 10.6818 230.397 6.83014C230.767 5.61963 230.587 4.33908 231.688 3.26863C233.429 1.58792 234.659 3.28864 236.08 3.36868C239.272 3.53875 240.542 2.22819 244.014 3.81886C244.275 3.93892 245.295 4.57919 245.415 4.74926H245.445ZM234.559 12.3124C233.779 13.7631 232.578 15.924 232.038 17.3546C231.538 18.6651 231.477 19.8356 233.258 19.4755C235.039 19.1153 235.95 15.6939 236.28 14.2433C236.58 12.9027 237.681 10.3216 237.351 10.1615C237.161 10.0715 236.31 10.1015 236.11 10.2716C235.65 10.6718 234.739 11.9923 234.559 12.3325V12.3124Z" fill="white"/>
<path d="M160.629 26.2283C160.028 25.548 157.487 22.4467 156.716 22.4667C156.526 22.4667 156.386 22.5567 156.276 22.7068C155.436 24.6876 154.625 26.7085 154.035 28.7793C152.884 32.8711 151.764 41.5347 146.681 42.5251C144.66 42.9153 140.568 42.9753 138.797 41.9249C135.445 39.934 137.366 37.6631 138.296 35.032C139.957 30.33 140.928 25.3279 143.819 21.0061C147.171 15.9939 153.224 12.8226 156.136 7.61041C156.856 6.31986 156.927 4.93927 157.457 3.72876C157.787 2.96844 159.038 2.1381 159.928 2.21813C160.819 2.29817 162.229 3.33861 163.31 3.50868C165.481 3.85882 166.402 3.24857 168.293 2.92843C168.983 2.80838 171.174 2.42822 172.035 2.51825C172.935 2.60829 174.206 3.72877 174.306 3.81881C177.388 6.84008 172.915 12.8526 171.905 15.8239C169.553 22.7268 173.576 28.6093 169.934 36.0924C167.823 40.4142 163.49 43.1154 158.698 41.1746C153.565 39.1037 157.247 30.24 160.779 30.1699C161.799 30.1499 162.93 30.9703 162.57 28.8494C162.34 27.4988 161.389 27.1086 160.619 26.2183L160.629 26.2283ZM164.891 9.95139C164.781 9.9714 164.691 10.0514 164.651 10.1615C164.331 11.1219 163.96 12.1023 163.47 12.9827C162.8 14.2032 160.979 15.9139 161.199 17.2044C161.329 17.9548 162.59 18.9952 163.26 19.7155C163.42 19.8856 163.69 19.8456 163.78 19.6355C164.08 18.9452 164.09 17.2645 164.251 16.7443C164.371 16.3541 164.901 15.2836 165.111 14.8335C165.731 13.5029 166.662 12.3124 167.322 11.0018C167.352 10.9318 167.372 10.8518 167.352 10.7717C167.092 9.70129 165.791 9.80133 164.881 9.95139H164.891Z" fill="white"/>
<path d="M40.8229 4.07874C45.6555 8.66068 43.8645 17.5044 39.302 21.7262C37.5511 23.3469 35.7601 23.9171 33.8891 25.0876C31.7479 26.4282 33.1587 27.9188 33.5389 29.7696C34.7495 35.7021 31.5478 39.8938 25.9947 41.5846C22.3827 42.685 18.3705 41.8247 16.8497 38.1031C15.629 35.1118 16.4395 29.9196 18.8708 27.6287C20.5818 26.018 24.8141 26.2481 23.1932 29.6795C22.7229 30.67 21.6724 31.0501 21.2621 32.2406C20.8519 33.4311 21.002 34.9318 22.4828 35.1519C23.1932 35.2519 24.9542 33.9413 25.3944 33.3211C26.425 31.8705 27.0353 27.9488 26.535 26.2081C26.475 25.998 25.9747 25.4177 25.7846 25.2377C24.8941 24.4173 23.4133 24.0072 22.6329 23.0267C21.9425 22.1564 21.6223 21.276 21.8725 20.1555C22.1426 18.915 23.4133 17.8746 24.584 17.5144C27.5256 16.604 27.5456 18.7649 26.6251 20.8958C28.1359 21.306 29.3065 21.0759 30.4272 19.9854C31.8379 18.6149 33.6689 15.4535 33.9791 13.5127C34.2493 11.842 33.1887 9.431 31.5978 8.75071C30.117 8.12045 27.9858 7.73029 26.535 8.49061C22.1826 10.7616 15.0087 25.5478 13.4779 30.3998C13.1077 31.5703 12.6474 33.161 12.4073 34.3515C12.0271 36.2323 12.1972 38.2832 11.6769 40.0439C11.3567 41.1144 10.7964 41.9347 9.60573 42.1148C8.41508 42.2949 3.75252 41.7846 2.46181 41.4645C1.41124 41.2044 -0.029555 40.4941 0.000461432 39.2536C0.0104669 38.6533 0.991006 35.6921 1.29117 35.0318C1.92152 33.6312 3.06214 30.5699 3.88259 29.0093C6.29392 24.4273 7.95483 21.266 10.4462 16.7141C12.6874 12.6224 14.8986 8.45059 17.1999 4.38887C17.8503 3.23839 19.8414 1.04747 21.062 0.687314C22.5628 0.247128 24.8141 0.367174 26.3049 0.807359C27.0053 1.00744 27.5856 1.51766 28.276 1.6077C30.207 1.87781 32.4583 0.927414 34.0792 1.07748C36.4205 1.28757 39.1419 2.46806 40.8229 4.06874V4.07874Z" fill="white"/>
<path d="M62.845 14.0332C64.7661 10.1516 67.0273 2.68843 72.5103 3.58881C72.6904 3.61882 74.7015 4.16905 74.8016 4.22907C75.5019 4.56922 75.8722 5.7097 75.8722 6.45001C75.8822 12.4926 68.1379 23.4972 65.4064 29.2196C64.8861 30.3101 63.9656 32.541 64.5059 33.6815C64.8361 34.3618 65.6365 35.0321 66.2869 34.3018C67.7877 32.621 67.4075 28.9495 70.2291 28.5793C71.4998 28.4093 74.5114 28.6394 75.1017 29.9599C76.4825 33.0112 72.2101 38.4935 69.7188 40.0842C66.567 42.095 61.5443 43.8358 58.6227 40.6144C58.2425 40.1943 57.8523 38.8237 57.352 38.7937C56.9818 38.7737 55.0507 40.2543 54.4504 40.5544C49.9979 42.7753 43.7045 42.1451 40.4327 38.3034C39.252 36.9129 39.2521 34.962 39.172 34.0717C38.7918 29.3797 43.0141 23.6773 45.0452 19.4855C46.7762 15.924 48.1169 12.1724 49.9679 8.66095C50.9185 6.85019 52.4893 3.37872 54.5505 2.87851C55.3209 2.68843 57.7022 2.67842 58.4626 2.8485C61.5943 3.53879 59.6132 8.43085 58.8128 10.3617C56.4015 16.1741 52.6494 21.9966 50.4982 27.9991C49.8979 29.6698 49.1975 33.6315 52.2092 32.521C55.491 31.3205 57.312 25.438 58.7227 22.4468C60.0034 19.7256 62.7549 14.1833 62.815 14.0532L62.845 14.0332Z" fill="white"/>
<path d="M108.6 20.726C107.71 21.4363 106.179 22.2466 105.038 22.5868C101.887 23.5172 96.2434 22.4667 94.6926 19.2454C93.7921 17.3846 94.0922 15.974 94.8626 14.1332C95.3929 12.8627 97.0539 10.8318 98.2745 10.2916C101.016 9.09106 102.497 10.2616 101.806 13.1928C101.446 14.7034 99.0449 17.6147 101.276 18.7651C103.367 19.8456 104.578 18.1449 105.629 16.5542C107.339 13.9631 108.12 10.1915 106.369 7.2703C103.277 2.08811 97.6042 6.26987 94.8326 9.4312C91.0105 13.783 86.8282 22.2166 86.438 28.0991C85.8277 37.393 95.6831 36.6127 97.7042 29.5397L97.6742 29.4597C97.5441 29.0195 97.1439 28.6793 96.6836 28.6693C96.5536 28.6693 96.4135 28.6893 96.2834 28.7293C96.0533 28.7994 92.8515 31.8607 91.2707 31.0003C89.9299 30.27 89.7198 29.4496 89.8699 28.0991C90.03 26.6585 90.9005 23.5972 91.831 22.4967C93.4319 20.5959 94.0122 22.6868 95.6431 23.8373C96.8237 24.6676 99.3251 25.628 100.766 25.618C102.567 25.618 105.529 23.8073 106.429 26.4384C106.759 27.3888 106.649 28.0991 106.199 28.9394C105.258 30.7102 104.248 31.3805 103.657 33.6614C103.067 35.9424 103.928 37.7131 103.057 39.884C101.806 43.0154 97.4341 41.7048 94.9427 41.6948C94.1222 41.6948 93.4119 42.0149 92.6915 42.025C81.2552 42.2951 75.542 36.4426 78.3536 24.9878C79.5142 20.2758 83.3363 13.5229 86.348 9.81137C90.3001 4.92931 93.9822 1.53788 100.376 0.247334C112.442 -2.18369 117.145 13.9431 108.59 20.706L108.6 20.726Z" fill="white"/>
<path d="M144.37 11.0519C139.397 16.6643 135.405 22.9569 132.873 30.0599C131.853 32.9411 131.443 36.0925 130.382 38.8436C129.902 40.0841 129.011 41.9449 127.48 42.125C125.329 42.3751 122.208 42.0049 119.956 42.025C117.705 42.045 115.374 42.4451 112.922 41.8649C111.722 41.5848 110.511 40.8445 110.421 39.5339C110.231 36.6027 113.603 29.2996 114.613 26.0882C115.504 23.247 115.884 20.3458 116.664 17.5546C116.825 16.9744 117.045 14.5334 117.115 14.0332C117.245 13.0327 117.435 11.5721 117.395 10.4817C117.345 9.07106 116.544 7.54042 116.564 6.3199C116.564 6.0698 116.795 4.8793 117.155 4.39909C117.545 3.86887 118.395 3.62876 118.495 3.58875C120.276 2.88845 122.768 3.78884 124.619 3.89888C125.95 3.97892 128.891 3.51872 129.882 4.199C132.203 5.76967 129.401 13.1028 127.12 13.2528C126.17 13.3129 125.609 12.8126 124.959 12.4225C124.499 12.1524 123.898 12.4025 123.748 12.9227C123.468 13.8431 123.158 15.2236 123.098 15.5738C122.608 18.0448 122.518 20.5559 123.058 23.037C123.898 26.8986 126.01 28.4692 128.731 24.7977C131.102 21.5863 133.003 13.8131 134.534 9.6513C135.545 6.90014 136.315 2.2982 139.997 1.98807C141.938 1.82801 146.861 1.68795 148.472 2.54831C149.412 3.03852 149.292 3.9589 149.182 4.91931C148.932 7.23028 145.83 9.4012 144.36 11.0619L144.37 11.0519Z" fill="white"/>
<path d="M199.82 13.553C204.913 8.851 206.694 3.06855 214.298 3.1786C215.569 3.19861 217.41 3.50874 217.99 4.78928C220.161 9.5713 211.657 16.5042 208.295 18.7252C201.921 22.9369 196.148 22.8669 192.676 31.0203C191.606 33.5414 190.205 40.6144 188.614 42.115C188.284 42.4252 187.763 42.6953 187.303 42.7553C185.412 43.0054 178.518 42.9154 176.897 42.3451C173.676 41.2146 175.297 38.1634 176.597 36.0725C178.979 32.2509 181.56 29.0095 183.661 24.8377C185.302 21.5764 186.383 17.4746 186.753 14.0132C186.843 13.1728 186.953 12.5325 186.653 11.6222C186.083 9.89143 185.202 12.1224 184.622 12.7626C183.841 13.623 183.191 13.623 182.961 13.673C179.129 14.4634 179.299 9.18112 180.8 6.82013C183.661 2.32823 188.054 3.15859 192.566 2.91849C195.548 2.75842 197.899 1.80802 200.701 3.6488C201.981 4.48915 202.261 6.52001 201.361 7.78054C200.26 9.32119 197.269 9.34119 195.668 10.5717C194.197 11.6922 193.136 13.533 194.387 15.2737C196.068 17.6147 198.469 14.8235 199.82 13.573V13.553Z" fill="white"/>
</svg>
      </NavLink>
      <HeaderCtas isLoggedIn={isLoggedIn} cart={cart} />
    </header>
    </div>
    </>
  );
}

/**
 * @param {{
 *   menu: HeaderProps['header']['menu'];
 *   primaryDomainUrl: HeaderProps['header']['shop']['primaryDomain']['url'];
 *   viewport: Viewport;
 *   publicStoreDomain: HeaderProps['publicStoreDomain'];
 * }}
 */
export function HeaderMenu({
  menu,
  primaryDomainUrl,
  viewport,
  publicStoreDomain,
}) {
  const className = `header-menu-${viewport}`;
  const {close} = useAside();

  return (
    <nav className={className} role="navigation">
      {viewport === 'mobile' && (
        <NavLink
          end
          onClick={close}
          prefetch="intent"
          style={activeLinkStyle}
          to="/"
        >
          Home
        </NavLink>
      )}
      {(menu || FALLBACK_HEADER_MENU).items.map((item) => {
        if (!item.url) return null;

        // if the url is internal, we strip the domain
        const url =
          item.url.includes('myshopify.com') ||
          item.url.includes(publicStoreDomain) ||
          item.url.includes(primaryDomainUrl)
            ? new URL(item.url).pathname
            : item.url;
        return (
          <NavLink
            className="header-menu-item"
            end
            key={item.id}
            onClick={close}
            prefetch="intent"
            style={activeLinkStyle}
            to={url}
          >
            {item.title}
          </NavLink>
        );
      })}
    </nav>
  );
}

/**
 * @param {Pick<HeaderProps, 'isLoggedIn' | 'cart'>}
 */
function HeaderCtas({isLoggedIn, cart}) {
  return (
    <nav className="header-ctas" role="navigation">
      <HeaderMenuMobileToggle />
      <NavLink prefetch="intent" to="/account" style={activeLinkStyle}>
        <Suspense fallback="Sign in">
          <Await resolve={isLoggedIn} errorElement="Sign in">
            {(isLoggedIn) => (isLoggedIn ? 'Account' : 'Sign in')}
          </Await>
        </Suspense>
      </NavLink>
      <SearchToggle />
      <CartToggle cart={cart} />
    </nav>
  );
}

function HeaderMenuMobileToggle() {
  const {open} = useAside();
  return (
    <button
      className="header-menu-mobile-toggle reset"
      onClick={() => open('mobile')}
    >
      <h3>☰</h3>
    </button>
  );
}

function SearchToggle() {
  const {open} = useAside();
  return (
    <button className="reset" onClick={() => open('search')}>
      Search
    </button>
  );
}

/**
 * @param {{count: number | null}}
 */
function CartBadge({count}) {
  const {open} = useAside();
  const {publish, shop, cart, prevCart} = useAnalytics();

  return (
    <a
      href="/cart"
      onClick={(e) => {
        e.preventDefault();
        open('cart');
        publish('cart_viewed', {
          cart,
          prevCart,
          shop,
          url: window.location.href || '',
        });
      }}
    >
      Cart {count === null ? <span>&nbsp;</span> : count}
    </a>
  );
}

/**
 * @param {Pick<HeaderProps, 'cart'>}
 */
function CartToggle({cart}) {
  return (
    <Suspense fallback={<CartBadge count={null} />}>
      <Await resolve={cart}>
        <CartBanner />
      </Await>
    </Suspense>
  );
}

function CartBanner() {
  const originalCart = useAsyncValue();
  const cart = useOptimisticCart(originalCart);
  return <CartBadge count={cart?.totalQuantity ?? 0} />;
}

const FALLBACK_HEADER_MENU = {
  id: 'gid://shopify/Menu/199655587896',
  items: [
    {
      id: 'gid://shopify/MenuItem/461609500728',
      resourceId: null,
      tags: [],
      title: 'Collections',
      type: 'HTTP',
      url: '/collections/all',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609533496',
      resourceId: null,
      tags: [],
      title: 'Blog',
      type: 'HTTP',
      url: '/blogs/journal',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609566264',
      resourceId: null,
      tags: [],
      title: 'Policies',
      type: 'HTTP',
      url: '/policies',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609599032',
      resourceId: 'gid://shopify/Page/92591030328',
      tags: [],
      title: 'About',
      type: 'PAGE',
      url: '/pages/about',
      items: [],
    },
  ],
};

/**
 * @param {{
 *   isActive: boolean;
 *   isPending: boolean;
 * }}
 */
function activeLinkStyle({isActive, isPending}) {
  return {
    fontWeight: isActive ? 'bold' : undefined,
    color: isPending ? 'grey' : 'black',
  };
}

/** @typedef {'desktop' | 'mobile'} Viewport */
/**
 * @typedef {Object} HeaderProps
 * @property {HeaderQuery} header
 * @property {Promise<CartApiQueryFragment|null>} cart
 * @property {Promise<boolean>} isLoggedIn
 * @property {string} publicStoreDomain
 */

/** @typedef {import('@shopify/hydrogen').CartViewPayload} CartViewPayload */
/** @typedef {import('storefrontapi.generated').HeaderQuery} HeaderQuery */
/** @typedef {import('storefrontapi.generated').CartApiQueryFragment} CartApiQueryFragment */
 