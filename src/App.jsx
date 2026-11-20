
import { useState } from "react";
import ProductCard from "./components/ProductCard";

function App() {
  // Products data
  const products = [
    {
      id: 1,
      name: "Classic Sneakers",
      price: 89,
      category: "Shoes",
      description: "Comfortable everyday sneakers with a modern design.",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Wireless Headphones",
      price: 129,
      category: "Electronics",
      description: "Premium sound quality with a comfortable fit.",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Luxury Watch",
      price: 199,
      category: "Accessories",
      description: "Elegant watch for everyday and special occasions.",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      name: "Leather Backpack",
      price: 79,
      category: "Accessories",
      description: "Stylish backpack with plenty of storage space.",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      name: "Modern Sunglasses",
      price: 59,
      category: "Accessories",
      description: "Lightweight sunglasses with a timeless look.",
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      name: "Running Shoes",
      price: 110,
      category: "Shoes",
      description: "Lightweight shoes designed for daily running.",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    },
  ];

  // State
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);

  // Add product to cart
  function addToCart(product) {
    setCart((previousCart) => [...previousCart, product]);
  }

  // Filter products
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  const categories = ["All", "Shoes", "Electronics", "Accessories"];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* Navbar */}
      <nav className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 bg-white px-6 py-5 md:px-12">
        <h1 className="text-2xl font-black tracking-tight">
          SHOP<span className="text-orange-500">LY.</span>
        </h1>

        <div className="rounded-full bg-gray-100 px-5 py-3 text-sm font-semibold">
          🛒 Cart: {cart.length}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-16 text-center md:py-24">
        <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-orange-500">
          Discover Your Style
        </p>

        <h2 className="text-4xl font-black tracking-tight md:text-6xl">
          Find Your Next <br />
          <span className="text-orange-500">Favorite Product.</span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-gray-500">
          Explore our collection of premium products.
          Quality, style and comfort — all in one place.
        </p>
      </section>

      {/* Product Section */}
      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-10">

        {/* Search */}
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <h2 className="text-2xl font-bold">
            Our Products
          </h2>

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-orange-500 md:max-w-xs"
          />
        </div>

        {/* Category Buttons */}
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                category === item
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-200"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="py-20 text-center">
            <h3 className="text-xl font-bold">
              No products found
            </h3>
            <p className="mt-2 text-gray-500">
              Try searching for another product.
            </p>
          </div>
        )}

      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white px-6 py-8 text-center">
        <p className="font-bold">
          SHOPLY.
        </p>
        <p className="mt-2 text-sm text-gray-500">
          Interactive Product Catalog — Built with React & Tailwind CSS
        </p>
        <p className="mt-3 text-xs text-gray-400">
          © 2026 SHOPLY. All rights reserved.
        </p>
      </footer>

    </div>
  );
}

export default App;
