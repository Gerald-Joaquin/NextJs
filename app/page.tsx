import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Home Page!</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
      <Link href="/about">About</Link>
    </main>
  );
}