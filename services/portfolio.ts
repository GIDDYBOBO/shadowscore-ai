import { alchemy } from "@/lib/alchemy";

export async function getTokenBalances(address: string) {
  return await alchemy.core.getTokenBalances(address);
}