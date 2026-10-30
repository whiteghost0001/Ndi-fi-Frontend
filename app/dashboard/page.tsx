"use client";

import { motion } from "framer-motion";
import Container from "@/components/shared/Container";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import StatCard from "@/components/shared/StatCard";
import PortfolioCard from "@/components/shared/PortfolioCard";
import VaultsTable from "@/components/shared/VaultsTable";

const protocolStats = [
  { label: "Total Value Locked", value: "$ 99.1k", change: "+ 2.5%" },
  { label: "Total Collateral", value: "$ 80.5k", change: "+ 2.5%" },
  { label: "Total Borrowed", value: "$ 45.1k", change: "- 0.5%" },
  { label: "Available Liquidity", value: "$ 55k", change: "+ 3.1%" },
];

const protocolHealth = [
  { label: "Utilization Rate", value: "66.7%" },
  { label: "Vault Staking Cap", value: "70k NDI" },
  { label: "Protocol Status", value: "Normal" },
];

const Dashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Container className="pt-32 md:pt-40 pb-24 space-y-12">
        <PageHeader
          title="Dashboard"
          description="Protocol-wide stats and a live view of your own portfolio."
        />

        <PortfolioCard />

        <div className="space-y-6">
          <SectionHeading title="Protocol Metrics" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {protocolStats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {protocolHealth.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <SectionHeading
            title="Vaults"
            description="Deposit into curated vaults and earn yield."
          />
          <VaultsTable />
        </div>
      </Container>
    </motion.div>
  );
};

export default Dashboard;
