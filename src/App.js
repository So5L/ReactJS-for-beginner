import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const getCoines = async () => {
    const json = await (
      await fetch(`https://api.coinpaprika.com/v1/tickers`)
    ).json();
    setCoins(json);
    console.log(json.map((coin) => coin.name));
    setLoading(false);
  };
  useEffect(() => {
    getCoines();
  }, []);
  console.log(coins.name);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
