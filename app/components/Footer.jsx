import React from 'react';

/**
 * @param {FooterProps}
 */
export function Footer({footer: footerPromise, header, publicStoreDomain}) {
  return (
    <div className="container"><footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo"><img src="/images/lg-footer.svg" /></div>
        <div className="footer-columns">
          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              <li>We're here M–F 9am – 5pm PST.</li>
              <li><a href="#">Drop us a note anytime.</a></li>
              <li><a href="#">Do Not Sell or Share My Personal Information</a></li>
              <li><a href="#">Cookie Preferences</a></li>
              <li><a href="#">Return</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Navigate</h4>
            <ul>
              <li><a href="/collections/all">Shop</a></li>
              <li><a href="/about">Our Story</a></li>
              <li><a href="#">Bugvaya Futures</a></li>
              <li><a href="#">Impact</a></li>
              <li><a href="#">BLOG</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Official</h4>
            <ul>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Accessibility</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="#">Events</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Social</h4>
            <ul>
              <li><a href="#"><img src="/images/Instagram.svg"  alt="Instagram" /> Instagram</a></li>
              <li><a href="#"><img src="/images/YouTube.svg"  alt="Youtube" /> YouTube</a></li>
              <li><a href="#"><img src="/images/TikTok.svg"  alt="TikTok" /> TikTok</a></li>
              <li>
                <select>
                  <option>United States (USD $)</option>
                  <option>India (INR ₹)</option>
                  <option>UK (GBP £)</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© Copyright 2025. Bugvaya</p>
          <div className="payment-icons">
            <img src="/images/payment.png" alt="payment" />
           
          </div>
        </div>
      </div>
    </footer></div>
    
  );
}

/**
 * @param {{
 *   menu: FooterQuery['menu'];
 *   primaryDomainUrl: FooterProps['header']['shop']['primaryDomain']['url'];
 *   publicStoreDomain: string;
 * }}
 */
function FooterMenu({menu, primaryDomainUrl, publicStoreDomain}) {
  return (
    <nav className="footer-menu" role="navigation">
      {(menu || FALLBACK_FOOTER_MENU).items.map((item) => {
        if (!item.url) return null;
        // if the url is internal, we strip the domain
        const url =
          item.url.includes('myshopify.com') ||
          item.url.includes(publicStoreDomain) ||
          item.url.includes(primaryDomainUrl)
            ? new URL(item.url).pathname
            : item.url;
        const isExternal = !url.startsWith('/');
        return isExternal ? (
          <a href={url} key={item.id} rel="noopener noreferrer" target="_blank">
            {item.title}
          </a>
        ) : (
          <NavLink
            end
            key={item.id}
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

const FALLBACK_FOOTER_MENU = {
  id: 'gid://shopify/Menu/199655620664',
  items: [
    {
      id: 'gid://shopify/MenuItem/461633060920',
      resourceId: 'gid://shopify/ShopPolicy/23358046264',
      tags: [],
      title: 'Privacy Policy',
      type: 'SHOP_POLICY',
      url: '/policies/privacy-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633093688',
      resourceId: 'gid://shopify/ShopPolicy/23358013496',
      tags: [],
      title: 'Refund Policy',
      type: 'SHOP_POLICY',
      url: '/policies/refund-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633126456',
      resourceId: 'gid://shopify/ShopPolicy/23358111800',
      tags: [],
      title: 'Shipping Policy',
      type: 'SHOP_POLICY',
      url: '/policies/shipping-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633159224',
      resourceId: 'gid://shopify/ShopPolicy/23358079032',
      tags: [],
      title: 'Terms of Service',
      type: 'SHOP_POLICY',
      url: '/policies/terms-of-service',
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
    color: isPending ? 'grey' : 'white',
  };
}

/**
 * @typedef {Object} FooterProps
 * @property {Promise<FooterQuery|null>} footer
 * @property {HeaderQuery} header
 * @property {string} publicStoreDomain
 */

/** @typedef {import('storefrontapi.generated').FooterQuery} FooterQuery */
/** @typedef {import('storefrontapi.generated').HeaderQuery} HeaderQuery */
