import Web3 from "web3";
import { addresses } from "../config";
import factoryABI from "../abis/factory.abi";

const web3 = new Web3("https://api.avax.network/ext/bc/C/rpc");

const getPairFromFactory = async (factoryAddress, token1, token2) => {
  const factory = new web3.eth.Contract(factoryABI, factoryAddress);
  return await factory.methods.getPair(token1, token2).call();
};

export const getPairsController = async (token1, token2) => {
  const { pangolin, traderJoe } = addresses.factories;

  return {
    traderJoe: await getPairFromFactory(traderJoe, token1, token2),
    pangolin: await getPairFromFactory(pangolin, token1, token2),
  };
};
