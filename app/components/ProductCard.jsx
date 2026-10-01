import Link from "next/link";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const ProductCard = ({ product, bg }) => {
  const {
    id,
    name,
    price,
    img1,
    img2,
    title,
    discount,
  } = product;

  const rating = 5;
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  const productSlug = (title || name || "")
    .toLowerCase()
    .replace(/,/g, "")
    .split(" ")
    .join("-");

  return (
    <>
      <div className="group h-[450px] transition-shadow duration-500 ease-in-out overflow-hidden relative rounded-xl border border-gray-100 bg-white">
        <div className="relative h-[280px] transition-all duration-500 ease-in-out">
          {/* Discount badge commented out */}
          {/*
          {discount && (
            <div className="discount h-10 text-xs text-center flex items-center justify-center text-white bg-green-600 font-bold w-10 absolute z-10 left-4 top-4 rounded-full shadow-sm">
              -{discount}%
            </div>
          )}
          */}

          <Link href={`/product/${productSlug}`} className="w-full h-full block">
            <img
              src={img1}
              alt={name || title}
              className="w-full h-full opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-in-out object-contain p-4"
            />
          </Link>

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none">
            <Link href={`/product/${productSlug}`} className="w-full h-full block pointer-events-auto">
              <img
                src={img2 || img1}
                alt={name || title}
                className="w-full h-full object-contain p-4 transition-opacity duration-500 ease-in-out"
              />
            </Link>
          </div>
        </div>

        <div
          className={`${bg === "bg-black" ? "bg-black text-white" : "bg-[#F3F1EC] text-black"} 
          w-full flex flex-col items-center gap-y-3 py-4 px-4 
          overflow-hidden transition-all duration-300`}
        >
          <Link href={`/product/${productSlug}`}>
            <h6 className="text-center text-base md:text-lg font-bold hover:text-[#023c68] transition-colors line-clamp-1">{title || name}</h6>
          </Link>

          <div className="flex items-center text-yellow-500 text-lg">
            {[...Array(fullStars)].map((_, i) => (
              <FaStar key={`full-${i}`} />
            ))}
            {halfStar && <FaStarHalfAlt />}
            {[...Array(emptyStars)].map((_, i) => (
              <FaRegStar key={`empty-${i}`} />
            ))}
          </div>

          {/* Pricing commented out */}
          {/*
          <div className="flex items-center gap-x-3">
            <span className="text-lg font-bold text-[#023c68]">
              ₹ {price}
            </span>
            <span className="text-gray-400 line-through text-sm">
              ₹ {parseInt(price || 0) + 200}
            </span>
          </div>
          */}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
