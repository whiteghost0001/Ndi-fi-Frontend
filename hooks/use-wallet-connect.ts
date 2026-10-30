"use client";

import { useConnect, useConnection, useConnectors, useDisconnect } from "wagmi";
import type { Connector } from "wagmi";

export const formatAddress = (address: string) =>
  `${address.slice(0, 6)}....${address.slice(-4)}`;

export function useWalletConnect() {
  const { address, isConnected, isConnecting } = useConnection();
  const connectors = useConnectors();
  const { connect, isPending, variables } = useConnect();
  const { disconnect } = useDisconnect();

  const connectWith = (connector: Connector, onSuccess?: () => void) => {
    connect({ connector }, { onSuccess });
  };

  const isConnectingTo = (connector: Connector) =>
    isPending && variables?.connector === connector;

  return {
    address,
    isConnected,
    isConnecting,
    connectors,
    connectWith,
    isConnectingTo,
    disconnect,
  };
}
