import React , {useState , useEffect} from "react";
const convert=require('ethereum-unit-converter');

function Calculator() {
  const [ethers, setEthers] = useState(0);
  const [gwei, setGwei] = useState(0);
  const [wei, setWei] = useState(0);

  function convertEthers(e){
    const result = convert(e.target.value, 'ether')
    console.log(result)
    setEthers(e.target.value)
    setGwei(parseInt(result.gwei))
    setWei(parseInt(result.wei))
  }
  
  function convertWei(e){
    const result = convert(e.target.value, 'wei')
    setWei(e.target.value)
    setGwei(parseInt(result.gwei))
    setEthers(parseInt(result.ether))
  }
  
  function convertGwei(e){
    const result = convert(e.target.value, 'wei')
    setGwei(e.target.value)
    setWei(parseInt(result.wei))
    setEthers(parseInt(result.ether))
  }

  return (
    <div className="container ">
      <h2 className="font-display text-base leading-none text-white text-5xl text-center my-4">
		Ethereum Calculator
	  </h2>
      <div className="mb-6">
      <label
        htmlFor="ethers"
        className="font-display text-jacarta-700 mb-2 block dark:text-white"
      >
        Ethers<span className="text-red">*</span>
      </label>
      <input
        type="number"
        id="ethers"
        className="dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 !border-opacity-40 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 px-3 hover:ring-2 dark:text-white"
        placeholder="Item name"
        value={ethers}
        onChange={(e) => convertEthers(e)}
        required
      />
      </div>
      <div className="mb-6">
      <label
        htmlFor="gwei"
        className="font-display text-jacarta-700 mb-2 block dark:text-white"
      >
        Gwei<span className="text-red">*</span>
      </label>
      <input
        type="number"
        id="gwei"
        className="dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 !border-opacity-40 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 px-3 hover:ring-2 dark:text-white"
        placeholder="Item name"
        value={gwei}
        onChange={(e) => convertGwei(e)}
        required
      />
      </div>
      <div className="mb-6">
      <label
        htmlFor="wei"
        className="font-display text-jacarta-700 mb-2 block dark:text-white"
      >
        Wei<span className="text-red">*</span>
      </label>
      <input
        type="number"
        id="wei"
        className="dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 !border-opacity-40 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 px-3 hover:ring-2 dark:text-white"
        placeholder="Item name"
        value={wei}
        onChange={(e) => convertWei(e)}
        required
      />
      </div>
    </div>
    
  );
}

export default Calculator;
