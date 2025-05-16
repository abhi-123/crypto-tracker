import Head from 'next/head';
import PriceCard from '../components/PriceCard';

export default function Home() {
  return (
    <>
      <Head>
        <title>Crypto Tracker</title>
      </Head>
      <main className="flex justify-center items-center h-screen bg-gray-100">
        <PriceCard symbol="btcusdt" />
      </main>
    </>
  );
}
