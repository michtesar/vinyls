'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-start">
        <h1 className="text-6xl font-bold">Vinyls</h1>

        <h2 className="text-3xl font-bold mt-8">Menu</h2>
        <nav className="mt-8 flex flex-col gap-4">
          <Link href={'/collection'}>Collection</Link>
          <Link href={'/wanted'}>Wanted</Link>
        </nav>
      </main>
    </div>
  );
}
