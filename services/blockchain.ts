import { Alchemy, Network } from "alchemy-sdk";

console.log("ENV:", process.env.NEXT_PUBLIC_ALCHEMY_API_KEY);

const apiKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;

export const alchemy = new Alchemy({
  apiKey: apiKey || "missing",
  network: Network.ETH_MAINNET,
});

export async function getTokenBalances(address: string) {
  const balances = await alchemy.core.getTokenBalances(address);

  const tokens = await Promise.all(
    balances.tokenBalances
      .filter((token) => token.tokenBalance !== "0")
      .slice(0, 20)
      .map(async (token) => {
        const metadata = await alchemy.core.getTokenMetadata(
          token.contractAddress
        );

        return {
          symbol: metadata.symbol ?? "UNKNOWN",
          name: metadata.name ?? "Unknown Token",
          balance: token.tokenBalance,
          decimals: metadata.decimals ?? 18,
          logo: metadata.logo,
        };
      })
  );

  return tokens;
}

export async function getNFTs(address: string) {
  return await alchemy.nft.getNftsForOwner(address);
}