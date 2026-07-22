import {
    Star,
    Heart,
    ShoppingCart,
    Eye,
    Tag,
} from "lucide-react";

const ProductCard = ({ product }) => {
    return (
        <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            {/* Image */}
            <div className="relative bg-gray-100 p-6">
                <img
                    src={product.image}
                    alt={product.title}
                    className="mx-auto h-64 w-full object-contain transition duration-500 group-hover:scale-110"
                />

                {/* Category Badge */}
                <div className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white">
                    <Tag size={14} />
                    {product.category}
                </div>

                {/* Wishlist */}
                <button className="absolute right-4 top-4 rounded-full bg-white p-2 shadow-md transition hover:bg-red-500 hover:text-white">
                    <Heart size={18} />
                </button>
            </div>

            {/* Content */}
            <div className="space-y-4 p-5">
                <h2 className="line-clamp-2 text-lg font-bold text-gray-800">
                    {product.title}
                </h2>

                <p className="line-clamp-3 text-sm text-gray-500">
                    {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        <Star
                            size={18}
                            className="fill-yellow-400 text-yellow-400"
                        />

                        <span className="font-semibold">
                            {product.rating.rate}
                        </span>

                        <span className="text-sm text-gray-500">
                            ({product.rating.count})
                        </span>
                    </div>

                    <span className="text-2xl font-bold text-indigo-600">
                        ${product.price}
                    </span>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-2">
                    <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 font-medium text-white transition hover:bg-indigo-700">
                        <ShoppingCart size={18} />
                        Add to Cart
                    </button>

                    <button className="rounded-xl border border-gray-300 p-3 transition hover:bg-gray-100">
                        <Eye size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;