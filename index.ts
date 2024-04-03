import * as ethers from "ethers";
import * as dotenv from "dotenv";
dotenv.config();

async function main() {
  const provider = new ethers.EtherscanProvider(
    process.env.ETH_NETWORK,
    process.env.ETHERSCAN_TOKEN,
  );
  const currentBlock = await provider.getBlockNumber();

  console.log(
    `Hello, Node Web3 Typescript app from ${process.env.ETH_NETWORK} network at block ${currentBlock}`,
  );

  const address = process.argv[2];
  const balance = ethers.formatEther(await provider.getBalance(address));
  console.log(`Account: ${address} Balance: ${balance}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
