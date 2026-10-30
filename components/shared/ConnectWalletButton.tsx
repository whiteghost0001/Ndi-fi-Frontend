"use client";

import { Wallet as WalletIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Spinner } from "@/components/ui/spinner";
import { useWalletConnect, formatAddress } from "@/hooks/use-wallet-connect";
import { cn } from "@/lib/utils";

interface ConnectWalletButtonProps {
  className?: string;
  fullWidth?: boolean;
}

const ConnectWalletButton = ({
  className,
  fullWidth,
}: ConnectWalletButtonProps) => {
  const {
    address,
    isConnected,
    isConnecting,
    connectors,
    connectWith,
    isConnectingTo,
    disconnect,
  } = useWalletConnect();

  const label =
    isConnected && address ? formatAddress(address) : "Connect Wallet";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className={cn(
            "bg-[#06F9F9] text-black hover:bg-[#9af1f1] cursor-pointer hover:scale-105",
            fullWidth && "w-full",
            className,
          )}
        >
          {isConnecting ? (
            <span className="flex gap-2 items-center">
              <Spinner />
              Connecting
            </span>
          ) : (
            label
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[#151D1D66] border border-[#547F7F33] mt-3 w-64">
        <DropdownMenuLabel className="text-white text-[12px]">
          {isConnected ? "Wallet Connected" : "Connect Wallet"}
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="border border-[#547F7F33]" />
        {isConnected ? (
          <DropdownMenuItem
            className="hover:scale-105 focus:bg-[#5DCBCB] p-3 cursor-pointer"
            onClick={() => disconnect()}
          >
            <p className="text-white">Disconnect</p>
          </DropdownMenuItem>
        ) : connectors.length === 0 ? (
          <DropdownMenuLabel className="text-gray-400 text-[12px] p-3 font-normal">
            No wallets detected.
          </DropdownMenuLabel>
        ) : (
          connectors.map((connector) => {
            const connectingThis = isConnectingTo(connector);
            return (
              <DropdownMenuItem
                key={connector.uid}
                className="hover:scale-105 focus:bg-[#5DCBCB] p-3 cursor-pointer"
                disabled={connectingThis}
                onClick={() => connectWith(connector)}
              >
                {connector.icon ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={connector.icon}
                    alt=""
                    className="w-8 h-8 rounded"
                  />
                ) : (
                  <span className="bg-[#5DCBCB] w-8 h-8 rounded flex items-center justify-center">
                    <WalletIcon size={16} className="text-black" />
                  </span>
                )}
                <p className="text-white">
                  {connectingThis ? "Connecting..." : connector.name}
                </p>
              </DropdownMenuItem>
            );
          })
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ConnectWalletButton;
