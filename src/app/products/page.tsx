import Link from "next/link";
import MeowArticle from "../components/MeowArticle";
import { getProducts } from "@/service/products";

// export const revalidate = 1;

export default async function ProductsPage() {
  // 서버 파일에 있는 제품의 리스트를 읽어와서 보여줌
  const products = await getProducts();

  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </>
  );
}
