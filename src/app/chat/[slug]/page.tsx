type Props = {
  params: {
    slug: string;
  };
};
export default function chatPage({ params: { slug } }: Props) {
  return (
    <>
      <h1>{slug}</h1>
    </>
  );
}
