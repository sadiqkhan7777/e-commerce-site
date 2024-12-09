import Image from "next/image";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

type ProductListProps = {
  products: Product[];
  addToCart: (product: Product) => void;
};

const ProductList = ({ products, addToCart }: ProductListProps) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id} className="p-4 border-b">
          <h2>{product.name}</h2>
          <Image
            src={product.image}
            alt={product.name}
            width={500} // Adjust the width as needed
            height={300} // Adjust the height as needed
            className="w-full h-96 object-cover mt-4"
          />
          <p>{product.description}</p>
          <span className="text-xl font-bold">${product.price}</span>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
