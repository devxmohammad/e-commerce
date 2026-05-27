import { ProductDetail } from "@/components/product-detail";
import { stripe } from "@/lib/stripe";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;

  const product = await stripe.products.retrieve(id, {
    expand: ["default_price"],
  });  
  const plainProduct = JSON.parse(JSON.stringify(product)); 
  return <ProductDetail product={product} />;
}