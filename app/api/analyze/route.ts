import { NextResponse } from "next/server";
import { Alchemy, Network } from "alchemy-sdk";

console.log("ENV:", {
  ALCHEMY_API_KEY: process.env.ALCHEMY_API_KEY,
});

const settings = {
  apiKey: process.env.ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const address = searchParams.get("address");

    if (!address) {
      return NextResponse.json(
        {
          success: false,
          error: "Wallet address required",
        },
        {
          status: 400,
        }
      );
    }

    console.log("Analyzing wallet:", address);

    const balanceWei = await alchemy.core.getBalance(address);

    const balance = Number(balanceWei) / 1e18;

    console.log("Balance:", balance);

    return NextResponse.json({
      success: true,
      address,
      balance,
    });
  } catch (error: any) {
    console.error("========== ALCHEMY ERROR ==========");
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: error?.message || "Unknown error",
        stack: error?.stack || null,
      },
      {
        status: 500,
      }
    );
  }
}