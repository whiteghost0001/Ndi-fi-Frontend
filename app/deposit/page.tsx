"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DepositWithdraw from "@/components/shared/DepositWithdraw";
import Container from "@/components/shared/Container";
import PageHeader from "@/components/shared/PageHeader";
import StatCard from "@/components/shared/StatCard";
import { IoIosWarning } from "react-icons/io";
import { GiSpanner } from "react-icons/gi";
import { motion } from "framer-motion";

const Deposit = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Container className="pt-32 md:pt-40 pb-24 space-y-8">
        <PageHeader
          title="DAI Vault"
          description="Deposit DAI to earn yield, or withdraw your position at any time."
        />

        <Card className="bg-[#547F7F33] w-full max-w-60 border-none">
          <CardHeader>
            <CardTitle className="text-[#969696] text-[15px] flex flex-row items-end gap-2">
              <div className="bg-[#06F9F9] w-8 h-8 rounded" />
              <p>DAI</p>
            </CardTitle>
            <CardDescription className="text-[#969696] text-[13px] mt-7">
              Your Deposit
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl text-white">998 DAI</p>
            <p className="text-xl text-white">$885.56 USD</p>
          </CardContent>
        </Card>

        <div className="flex flex-col md:flex-row gap-4 md:gap-10">
          <StatCard
            label="Vault Share Price"
            value="$ 1.05"
            className="w-full max-w-90"
          />
          <StatCard
            label="APY"
            value="5.2%"
            change="+ 0.12%"
            className="w-full max-w-90"
          />
        </div>

        <div className="space-y-4">
          <div className="bg-[#987E114D] border border-[#D6B00F] text-[#D6B00F] p-6 w-full max-w-190 rounded-md flex items-center gap-2">
            <IoIosWarning className="text-xl shrink-0" />
            Staking is temporarily paused as the cap has been reached.
          </div>
          <div className="bg-[#CC352D33] border border-[#D61208] text-[#E58B86] p-6 w-full max-w-190 rounded-md flex items-center gap-2">
            <GiSpanner className="text-xl shrink-0" />
            The platform will undergo scheduled maintenance soon.
          </div>
        </div>

        <DepositWithdraw />
      </Container>
    </motion.div>
  );
};

export default Deposit;
