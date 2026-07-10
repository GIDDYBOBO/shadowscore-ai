export async function getWalletData(address: string) {
  const response = await fetch(`/api/wallet?address=${address}`);

  if (!response.ok) {
    throw new Error("Failed");
  }

  return response.json();
}