"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ValidatorsTable from "@/components/shared/ValidatorsTable";
import Container from "@/components/shared/Container";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import StatCard from "@/components/shared/StatCard";
import { motion } from "framer-motion";

const stats = [
  { label: "Total Staked", value: "$ 1,235,123", change: "+3.2%" },
  { label: "Staked Rewards", value: "$ 12,500", change: "+1.2%" },
  { label: "Current APY", value: "9.9%", change: "-0.3%" },
  { label: "Pending Rewards", value: "128 NDI", change: "+ 2.1%" },
];

const Stake = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Container className="pt-32 md:pt-40 pb-24 space-y-10">
        <PageHeader
          title="Stake"
          description="Stake NDI to earn rewards and help secure the protocol."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-[#547F7F1A] border border-[#547F7F99] rounded-xl">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Stake DAI</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-gray-300 text-sm">
                  Amount to Stake
                </label>
                <p className="text-gray-400 text-xs">Balance: 9,500 DAI</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Input
                    placeholder="Enter Amount"
                    className="bg-[#161A1A] border-[#547F7F99] text-white w-full py-5 pr-14"
                  />
                  <Button className="absolute right-2 top-1/2 -translate-y-1/2 bg-transparent hover:text-blue-300 cursor-pointer">
                    MAX
                  </Button>
                </div>
                <Button className="bg-[#0ff] text-black font-semibold hover:bg-[#0dd] px-8 py-5 hover:scale-105 cursor-pointer">
                  Approve DAI
                </Button>
              </div>
              <p className="text-gray-300 text-sm">Staking Duration: 21 Days</p>
            </CardContent>
          </Card>
          <Card className="bg-[#547F7F1A] border border-[#547F7F99] rounded-xl">
            <CardHeader>
              <CardTitle className="text-white text-2xl">
                Withdraw Stake
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 text-sm">Amount to Stake</p>
              <p className="text-cyan-400 text-xl font-semibold">
                20d 15h 30m 12s
              </p>
              <p className="text-gray-400 text-xs">
                You can request to withdraw your stake. A 21-day cooldown
                period is required before you can execute the withdrawal.
              </p>
              <Button className="bg-[#0ff] text-black font-semibold hover:bg-[#0dd] hover:scale-105 cursor-pointer">
                Request Withdrawal
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <SectionHeading
            title="Validators"
            description="Choose a validator to stake with."
          />
          <ValidatorsTable />
        </div>
      </Container>
    </motion.div>
  );
};

export default Stake;
