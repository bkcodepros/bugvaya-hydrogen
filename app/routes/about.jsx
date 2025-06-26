import styles from '../styles/about.css?url';
import Testimonials from '~/components/Testimonials';
export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

export default function About() {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero-section">
        <img src="/images/bnr-left.png" alt="Enzyme Cleanser" className="hero-image" />
        <div className="hero-text">
          <p className="subheading">FOR THE BEAUTY OF YOUTH</p>
          <h1>Discover The Secrets To Sensitive Skin</h1>
          <p className="description">Nourishing skincare for all skin types. Gentle yet effective formulas for radiant, hydrated skin.</p>
          <a href="/collections/all" className="btn">VIEW ALL PRODUCTS <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
<path d="M9.25 21.25L21.75 8.75" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.25 8.75H21.75V21.25" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg></a>
        </div>
        <img src="/images/bnr-right.png" alt="Model" className="hero-image" />
      </section>

      {/* Brand Story Section */}
      <section className="brand-section">
        <img src="/images/lg-footer.svg" alt="brnd img" />
        <div class="brnd-desc">
        <p>
          bugvaya was born out of a need for something better — something clean, effective, and actually pretty enough to leave on the counter.</p>

<p>As someone with sensitive skin, I wanted something that didn’t leave me feeling itchy, sticky, or overwhelmed by harsh scents. I wanted a solution that worked, felt good, and looked good. So I created bugvaya: a natural, plant-powered repellent that protects your skin and your peace of mind.</p>

<p>Each bottle is thoughtfully designed with gentle, skin-loving ingredients — and every scent comes in a Gentle Formula too, for those who need an even softer touch.</p>

<p>bugvaya was made for real life: weddings, patio dinners, concerts, beach days, farmers markets, and everywhere in between. It’s bug spray you can toss in your bag, pull out at a party, and not feel like you’re carrying a bottle of chemicals.</p>

<p>This isn’t bug spray you’ll want to hide — it’s your new everyday essential.</p>
        </div>
      </section>

      {/* Hydration Section */}
      <section className="info-section">
        <div className="text-block">
          <h3>DESIGNED TO INCREASE THE SKIN'S HYDRATION LEVELS.</h3>
          <p>
            S contains no purified or synthetic surfactants, sulphates, oils, esters or micellar technologies. It is a pH-balanced suspension of the amino acid, Arginine, in saponins from the Ayurvedic plants shikakai and sapindus mukorossi.
          </p>
          <a href="#" className="btn-outline">Shop Now <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
<path d="M9.25 21.25L21.75 8.75" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.25 8.75H21.75V21.25" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg></a>
   <div class="hr"></div>
        </div>
        <img src="/images/designed.png" alt="Hydrated Skin" className="info-image" />
      </section>

      {/* Featured Product Section */}
      <section className="info-section">
        <img src="/images/Aesop.png" alt="Aesop Skincare" className="info-image" />
        <div className="text-block">
          <p className="small">Featured Brand</p>
          <h3>Aesop Winter Skincare</h3>
          
          <a href="#" className="btn-outline">Shop Now <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
<path d="M9.25 21.25L21.75 8.75" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.25 8.75H21.75V21.25" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg></a>
<div class="hr"></div>
<p>S contains no purified or synthetic surfactants, sulphates, oils, esters or micellar technologies. It is a pH-balanced suspension of the amino acid, Arginine, in saponins from the Ayurvedic plants shikakai and sapindus mukorossi.
          </p>
          
        <h4>Skincare for the hyper-educated</h4>  
        </div>
      </section>

       {/* ── Video Hero ── */}
      <section className="video-section">
        <div
          className="video-bg"
          style={{ backgroundImage: 'url(/images/vd-sec.png)' }}
        />
        <div className="video-overlay">
          <div className="play-icon"><img src="/images/play-icon.svg" alt="Video Icon"/></div>
          <h2>Discover Our Products</h2>
          <p>
            We have skincare, body, wellbeing products and amazing fragrance range. All made with
            love in France.
          </p>
        </div>
      </section>

      {/* ── Advisory Board ── */}
      <section className="board-section">
        <h2>Meet The Advisory Board</h2>
        <p className="board-intro">
          Our Skincare Advisory Board is comprised of renowned experts in chemistry and
          dermatology. Informed by the latest research, they guide our product innovation from
          initial formula to final glaze.
        </p>
        <div className="board-grid">
          <div className="board-member">
            <div className="member-photo">
              <img src="/images/meet1.png" alt="Dr. Kristin Watson" />
            </div>
            <h4>Dr. Kristin Watson</h4>
            <p>Cosmetic Chemist</p>
          </div>
          <div className="board-member">
            <div className="member-photo">
              <img src="/images/meet2.png" alt="Dr. Wade Warren" />
            </div>
            <h4>Dr. Wade Warren</h4>
            <p>Cosmetic Chemist</p>
          </div>
          <div className="board-member">
            <div className="member-photo">
              <img src="/images/meet3.png" alt="Dr. Jerome Bell" />
            </div>
            <h4>Dr. Jerome Bell</h4>
            <p>Cosmetic Chemist</p>
          </div>
        </div>
      </section>
      <Testimonials />
    </div>
  );
}