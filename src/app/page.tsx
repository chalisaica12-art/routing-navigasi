import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Home</h1>
      <p><Link href='/profile'>Profile</Link></p>
      <p><Link href='/about'>About</Link></p>
      <p><Link href='/blogs'>Blogs</Link></p>
      <p><Link href='/products'>Products</Link></p>
    </div>
  );
}