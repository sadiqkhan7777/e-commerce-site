// app/api/products/route.ts
import { NextResponse } from 'next/server';

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

const products: Product[] = [
  { id: 1, name: "Eggo Waffles", description: "Description for Product 1", price: 29.99, image: "/images/eggo-waffles.jpeg" },
  { id: 2, name: "Healthy Choice", description: "Description for Product 2", price: 49.99, image: "/images/HealthyChoice.jpg" },
  { id: 3, name: "Progresso Chicken Noodle", description: "Description for Product 3", price: 39.99, image: "/images/ChickenNoodle.jpeg" }
];

export async function GET() {
  return NextResponse.json(products);
}
