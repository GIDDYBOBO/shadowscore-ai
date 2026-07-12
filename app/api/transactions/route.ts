import { NextRequest, NextResponse } from "next/server";
import {
  Alchemy,
  Network,
  AssetTransfersCategory,
  SortingOrder,
} from "alchemy-sdk";

const alchemy = new Alchemy({
  apiKey: process.env.ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
});

export async function GET(req: NextRequest) {
  const address = req.nextUrl.searchParams.get("address");

  if (!address) {
    return NextResponse.json(
      { error: "Wallet address required" },
      { status: 400 }
    );
  }

  try {
    const response = await alchemy.core.getAssetTransfers({
      fromBlock: "0x0",

      fromAddress: address,

      category: [
        AssetTransfersCategory.EXTERNAL,
        AssetTransfersCategory.ERC20,
        AssetTransfersCategory.ERC721,
        AssetTransfersCategory.ERC1155,
      ],

      order: SortingOrder.DESCENDING,

      withMetadata: true,

      maxCount: 10,
    });

    return NextResponse.json(response.transfers);
  } catch (error) {
    console.error("Alchemy Error:", error);

    return NextResponse.json(
      {
        error: "Unable to fetch transactions",
        message:
          error instanceof Error ? error.message : "Unknown error",
      },
      {
        status: 500,
      }
    );
  }
}