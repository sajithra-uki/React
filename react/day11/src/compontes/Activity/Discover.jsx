import React from 'react';


export default function ElectroHubHome() {
  
  const featuredProducts = [
    {
      
      name: "Smartphone",
      description: "Latest generation smartphone with AI camera and stunning display.",
      price: 999,
      imageAlt: "A sleek modern smartphone",
    },
    {
      name: "Laptop Pro",
      description: "Powerful and lightweight laptop for professionals on the go.",
      price: 1499,
      imageAlt: "A thin professional laptop",
    },
    {
      name: "Smartwatch S",
      description: "Track your fitness and stay connected with this sleek smartwatch.",
      price: 299,
      imageAlt: "A smartwatch displaying time and steps",
    },
    {
      name: "Headphones Z",
      description: "Immersive sound quality with noise-cancelling technology.",
      price: 199,
      imageAlt: "Over-ear wireless headphones",
    },
  ];

  return (
    <>
      
      <header className="navigation-bar">
        <h2>ElectroHub</h2>
        <nav>
          
          <ul className="nav-links">
            <li>Home</li>
            <li>Products</li>
            <li>Categories</li>
            <li>About</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul>
        </nav>
        <button className="shop-button">Shop Now</button>
      </header>

      
      <section className="hero-section">
        <h1>Discover the Future of Tech</h1>
        
        <p>
          Explore our selection of the latest and greatest electronic
          <br />
          gadgets, from smartphone to smart home devices.
        </p>
        <button className="explore-button">Explore</button>
      </section>

      
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
        
          {featuredProducts.map((product, index) => (
            <div key={index} className="product-card">
              
              <img 
                src="placeholder-image-url" 
                alt={product.imageAlt} 
                className="product-image" 
              />
              <h3>{product.name}</h3>
              <p>{product.description.split('<br>').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < product.description.length - 1 && <br />}
                </React.Fragment>
              ))}</p>
              <h2>${product.price}</h2>
              <button className="buy-button">Buy Now</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}