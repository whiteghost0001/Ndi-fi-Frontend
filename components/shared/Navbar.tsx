"use client";

import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Wallet as WalletIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useWalletConnect, formatAddress } from "@/hooks/use-wallet-connect";
import ConnectWalletButton from "@/components/shared/ConnectWalletButton";

const navLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/deposit", label: "Deposit" },
  { href: "/borrow", label: "Borrow" },
  { href: "/stake", label: "Stake" },
];

const Navbar = () => {
  const pathname = usePathname();
  const isLanding = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);
  const [showWalletModal, setShowWalletModal] = useState(false);

  const {
    address,
    isConnected,
    connectors,
    connectWith,
    isConnectingTo,
    disconnect,
  } = useWalletConnect();

  return (
    <>
      {showWalletModal && (
        <div className="fixed inset-0 bg-black/95 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#151D1D66] border border-[#547F7F33] rounded-lg p-6 w-80">
            <div className="flex justify-between items-center mb-4">
              <span className="text-white text-sm">Connect Wallet</span>
              <button onClick={() => setShowWalletModal(false)}>
                <X size={15} />
              </button>
            </div>
            <div className="space-y-3">
              {connectors.length === 0 && (
                <p className="text-gray-400 text-sm">No wallets detected.</p>
              )}
              {connectors.map((connector) => {
                const connectingThis = isConnectingTo(connector);
                return (
                  <button
                    key={connector.uid}
                    onClick={() =>
                      connectWith(connector, () => setShowWalletModal(false))
                    }
                    disabled={connectingThis}
                    className="flex items-center gap-3 p-3 hover:bg-[#5DCBCB] rounded cursor-pointer w-full text-left disabled:opacity-50 disabled:cursor-not-allowed"
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
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
      <motion.div
        className="flex justify-between items-center px-4 md:px-20 py-5 bg-[#141616] border-b border-[#141616] fixed top-0 w-full z-40"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/" className="text-xl font-semibold">
          Ndi-Fi
        </Link>

        {isLanding ? (
          <Button
            asChild
            className="bg-[#06F9F9] text-black hover:bg-[#9af1f1] cursor-pointer hover:scale-105"
          >
            <Link href="/dashboard">Launch App</Link>
          </Button>
        ) : (
          <>
            {/* Desktop nav links */}
            <ul className="hidden md:flex gap-10 text-[12px]">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "hover:text-[#06F9F9] hover:scale-105 transition-colors inline-block",
                        active && "text-[#06F9F9] font-medium",
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Desktop Connect Wallet */}
            <div className="hidden md:block">
              <ConnectWalletButton />
            </div>

            {/* Mobile Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="block md:hidden">
                <button
                  className="md:hidden text-white"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#161D1D] border border-[#547F7F33] mr-5 mt-3 w-50 space-y-3">
                {navLinks.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <DropdownMenuItem
                      key={link.href}
                      className="hover:scale-105 focus:bg-[#5DCBCB]"
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="w-full"
                      >
                        <span
                          className={cn(
                            "hover:scale-105 cursor-pointer text-white ml-7",
                            active && "text-[#06F9F9]",
                          )}
                        >
                          {link.label}
                        </span>
                      </Link>
                    </DropdownMenuItem>
                  );
                })}
                <DropdownMenuItem
                  className="hover:scale-105 focus:bg-[#5DCBCB]"
                  onClick={() => {
                    setIsOpen(false);
                    if (isConnected) {
                      disconnect();
                    } else {
                      setShowWalletModal(true);
                    }
                  }}
                >
                  <span className="hover:scale-105 cursor-pointer text-white ml-3 bg-[#5DCBCB] px-8 py-2 rounded-md ">
                    {isConnected && address
                      ? formatAddress(address)
                      : "Connect Wallet"}
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        )}
      </motion.div>
    </>
  );
};

export default Navbar;
