"use client";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/app/shared/api/apiservices";
import { ProductsType } from "@/app/types";

export default function ProductsClient({ id }: { id: number }) {
  const {
    data: products, isError, error, isLoading,} = useQuery<ProductsType[], Error>({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  const product = products?.find((p) => p.id === id);

  return (
    <section>
      {product ? (
        <div>
          <h1>{product.name}</h1>
          <p>{product.price}</p>
          <img src={product.photo} alt={product.name} />
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </section>
  );
}
