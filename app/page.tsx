import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Home for app 1</h1>
      <Link href="/">Home page for app 1</Link>
      <Link href="/internal">Internal page for app 1</Link>
      <a href="/other">Home page for app 2</a>
      <a href="/other/internal">Internal page for app 2</a>
    </main>
  );
}
