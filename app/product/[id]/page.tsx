"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/products`)
        .then((res) => res.json())
        .then((data) => {
          const product = data.find((p: Product) => p.id === parseInt(id as string));
          setProduct(product);
        });
    }
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold">{product.name}</h1>
      <Image
        src={product.image}
        alt={product.name}
        width={500} // Adjust the width as needed
        height={300} // Adjust the height as needed
        className="w-full h-96 object-cover mt-4"
      />
      <p className="mt-4">{product.description}</p>
      <div className="flex justify-between items-center mt-6">
        <span className="text-xl font-bold">${product.price}</span>
        <button
          onClick={() => router.push("/")}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
