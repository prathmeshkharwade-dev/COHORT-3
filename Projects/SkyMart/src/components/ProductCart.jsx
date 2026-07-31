import { useState } from "react";
import { Minus, Plus, ShoppingCart } from "lucide-react";

export default function ProductCard({
  product = {
    title: "Essence Mascara Lash Princess",
    price: 9.99,
    discountPercentage: 10.48,
    images: [
      "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
    stock: 99,
  },
} = {}) {
  const [quantity, setQuantity] = useState(1);

  const image = product.images?.[0] || product.thumbnail;
  const hasDiscount = product.discountPercentage > 0;
  const discountedPrice = hasDiscount
    ? product.price - (product.price * product.discountPercentage) / 100
    : product.price;

  const decrease = () => setQuantity((q) => Math.max(1, q - 1));
  const increase = () => setQuantity((q) => Math.min(product.stock ?? 99, q + 1));

  return (
    <div className="w-64 rounded-2xl bg-zinc-900 border border-zinc-800 p-4 shadow-lg shadow-black/30 hover:border-zinc-700 transition-colors">
      {/* Image */}
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-zinc-800">
        <img
          src={image}
          alt={product.title}
          className="h-full w-full object-cover"
        />
        {hasDiscount && (
          <span className="absolute top-2 left-2 rounded-full bg-emerald-500/90 px-2 py-0.5 text-xs font-medium text-zinc-950">
            -{Math.round(product.discountPercentage)}%
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="mt-3 truncate text-sm font-medium text-zinc-100">
        {product.title}
      </h3>

      {/* Price */}
      <div className="mt-1 flex items-center gap-2">
        <span className="text-lg font-semibold text-white">
          ${discountedPrice.toFixed(2)}
        </span>
        {hasDiscount && (
          <span className="text-sm text-zinc-500 line-through">
            ${product.price.toFixed(2)}
          </span>
        )}
      </div>

      {/* Quantity + Add to cart */}
      <div className="mt-4 flex items-center gap-2">
        <div className="flex items-center rounded-lg border border-zinc-700 bg-zinc-800">
          <button
            onClick={decrease}
            className="flex h-8 w-8 items-center justify-center text-zinc-300 hover:text-white transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus size={14} />
          </button>
          <span className="w-6 text-center text-sm text-zinc-100">
            {quantity}
          </span>
          <button
            onClick={increase}
            className="flex h-8 w-8 items-center justify-center text-zinc-300 hover:text-white transition-colors"
            aria-label="Increase quantity"
          >
            <Plus size={14} />
          </button>
        </div>

        <button className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-emerald-500 py-2 text-sm font-medium text-zinc-950 hover:bg-emerald-400 active:scale-[0.98] transition-all">
          <ShoppingCart size={15} />
          Add to cart
        </button>
      </div>
    </div>
  );
}