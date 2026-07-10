import { getBalance } from "@wagmi/core";
import { config } from "@/lib/wagmi";

export async function fetchNativeBalance(address: `0x${string}`) {
  return await getBalance(config, {
    address,
  });
}