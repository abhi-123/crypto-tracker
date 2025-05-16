import { useEffect } from 'react';
import { useCryptoStore } from '../store/cryptoStore';
import { connectToBinance, closeSocket } from '../utils/websocket';

export default function PriceCard({ symbol = 'btcusdt' }) {
  const { price, setPrice } = useCryptoStore();

  useEffect(() => {
    const ws = connectToBinance(symbol, setPrice);
    return () => closeSocket();
  }, [symbol, setPrice]);

  return (
    <div className="p-4 border rounded shadow text-center">
      <h2 className="text-xl font-semibold uppercase">{symbol}</h2>
      <p className="text-3xl text-green-600">${price || 'Loading...'}</p>
    </div>
  );
}
