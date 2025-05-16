let socket;

export function connectToBinance(symbol = 'btcusdt', onMessage) {
  socket = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol}@trade`);
  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    onMessage(parseFloat(data.p));
  };
  return socket;
}

export function closeSocket() {
  if (socket) socket.close();
}
