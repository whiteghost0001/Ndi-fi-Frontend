"use client";

import { useBalance, useConnection } from "wagmi";
import { formatUnits } from "viem";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ConnectWalletButton from "@/components/shared/ConnectWalletButton";
import { formatAddress } from "@/hooks/use-wallet-connect";

const PortfolioCard = () => {
  const { address, isConnected, chain } = useConnection();
  const { data: balance, isLoading } = useBalance({
    address,
    query: { enabled: isConnected },
  });

  if (!isConnected) {
    return (
      <Card className="bg-[#547F7F1A] border border-[#547F7F99] rounded-xl">
        <CardContent className="flex flex-col md:flex-row items-center justify-between gap-4 py-6">
          <div>
            <p className="text-white font-medium">
              Connect your wallet to view your portfolio
            </p>
            <p className="text-sm text-[#8AA0A0] mt-1">
              See your balance and track your positions across Ndi-Fi.
            </p>
          </div>
          <ConnectWalletButton />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-[#547F7F1A] border border-[#547F7F99] rounded-xl">
      <CardHeader>
        <CardTitle className="text-white text-lg">Your Portfolio</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row md:items-center gap-6">
        <div>
          <p className="text-[#8AA0A0] text-xs uppercase tracking-wide">
            Wallet
          </p>
          <p className="text-white font-medium mt-1">
            {address ? formatAddress(address) : "—"}
          </p>
        </div>
        <div>
          <p className="text-[#8AA0A0] text-xs uppercase tracking-wide">
            Balance
          </p>
          <p className="text-white font-medium mt-1">
            {isLoading
              ? "Loading..."
              : balance
                ? `${Number(formatUnits(balance.value, balance.decimals)).toFixed(4)} ${balance.symbol}`
                : "—"}
          </p>
        </div>
        <div>
          <p className="text-[#8AA0A0] text-xs uppercase tracking-wide">
            Network
          </p>
          <p className="text-white font-medium mt-1">
            {chain?.name ?? "Unknown"}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioCard;
