import { NextResponse } from "next/server";
import { Alchemy, Network } from "alchemy-sdk";

console.log("=== API ROUTE LOADED ===");
console.log("ALCHEMY_API_KEY:", process.env.ALCHEMY_API_KEY);
console.log("NEXT_PUBLIC_ALCHEMY_API_KEY:", process.env.NEXT_PUBLIC_ALCHEMY_API_KEY);

const apiKey = process.env.ALCHEMY_API_KEY;

if (!apiKey) {
  throw new Error("ALCHEMY_API_KEY is missing");
}

const alchemy = new Alchemy({
  apiKey,
  network: Network.ETH_MAINNET,
});

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const address = searchParams.get("address");

  try {
    const balance = await alchemy.core.getBalance(address!);

    return NextResponse.json({
      success: true,
      balance: balance.toString(),
    });
  } catch (err) {
    console.error("Alchemy Error:", err);

    return NextResponse.json(
      {
        success: false,
        error: String(err),
      },
      { status: 500 }
    );
  }
}