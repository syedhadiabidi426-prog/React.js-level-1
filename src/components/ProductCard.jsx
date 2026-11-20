
function ProductCard({ product, onAddToCart }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Product Image */}
      <div className="relative overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <span className="absolute left-4 top-4 rounded-full bg-black px-3 py-1 text-xs text-white">
          {product.category}
        </span>
      </div>

      {/* Product Information */}
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-900">
          {product.name}
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          {product.description}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            ${product.price}
          </span>

          <button
            onClick={() => onAddToCart(product)}
            className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-orange-500"
          >
            + Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
