import { getProduct, getProducts } from "@/service/products";

import Image from "next/image";
import NotFound from "@/app/not-found";
import clothesImage from "../../../../public/images/clothes.jpg";
import { redirect } from "next/navigation";

export const revalidate = 1;

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `${params.slug} 제품 설명`,
  };
}
export default async function PantsPage({ params: { slug } }: Props) {
  const product = await getProduct(slug);
  if (!product) {
    redirect("/products");
    // NotFound();
  }
  // 서버 파일에 있는 데이터중 해당 제품의 정보를 읽어와서 보여줌
  return (
    <>
      <h1>{product?.name} 제품 설명 페이지</h1>
      <Image
        src={`/images/${product?.image}`}
        width={400}
        height={500}
        alt={product?.name}
      />
    </>
  );
}

export async function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줄거임 (SSG)
  const products = await getProducts();
  return products.map((product) => ({ sulg: product.id }));
}
