import { createPublicClient, http } from "viem";
import {
  mainnet,
  base,
  polygon,
  sepolia,
} from "viem/chains";

export const ethereumClient = createPublicClient({
  chain: mainnet,
  transport: http(),
});

export const baseClient = createPublicClient({
  chain: base,
  transport: http(),
});

export const polygonClient = createPublicClient({
  chain: polygon,
  transport: http(),
});

export const sepoliaClient = createPublicClient({
  chain: sepolia,
  transport: http(),
});