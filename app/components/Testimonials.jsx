import './Testimonials.css';
export default function Testimonials() {
  const testimonials = [
    {
      name: 'Jocelyn V.',
      role: 'Verified Buyer',
      title: 'Face Feel Squeaky Clean!',
      text: 'I Love This Glow Cleanser It Really Makes My Face Feel Refreshed And Isn’t Too Harsh And Makes I Feel Clean And Beauty.',
      stars: 4,
      image: 'https://cdn.shopify.com/s/files/1/0691/3025/6522/files/testi1.png',
    },
    {
      name: 'Gisele B.',
      role: 'Verified Buyer',
      title: 'Works Well For Sensitive Skin!',
      text: 'I Love This Glow Cleanser It Really Makes My Face Feel Refreshed And Isn’t Too Harsh And Makes I Feel Clean And Beauty.',
      stars: 5,
      image: 'https://cdn.shopify.com/s/files/1/0691/3025/6522/files/testi2.png',
    },
    {
      name: 'Christy T.',
      role: 'Verified Buyer',
      title: 'Makes My Face Feel Refresh',
      text: 'I Love This Glow Cleanser It Really Makes My Face Feel Refreshed And Isn’t Too Harsh And Makes I Feel Clean And Beauty.',
      stars: 5,
      image: 'https://cdn.shopify.com/s/files/1/0691/3025/6522/files/testi3.png',
    },
  ];

  return (
    <section className="bg-white py-12 px-4 md:px-12 testimonials">
      <h2 className="text-3xl font-bold mb-8">Customer Reviews</h2>
      <div className="grid testimonials-wrap grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center mb-4 gap-3">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-bold">{item.name}</h4>
                <p className="text-sm text-gray-500 flex items-center gap-1">
                  <span className="text-blue-500">✔</span> {item.role}
                </p>
              </div>
            </div>
            <h5 className="text-lg font-semibold mb-2">{item.title}</h5>
            <p className="text-sm text-gray-600 mb-4">{item.text}</p>
            <div className="flex gap-1 text-black text-xl">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>{i < item.stars ? '★' : '☆'}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
