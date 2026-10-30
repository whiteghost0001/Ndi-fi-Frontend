"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const DepositWithdraw = () => {
  const [activeTab, setActiveTab] = useState("deposit"); // "deposit" or "withdraw"
  const [amount, setAmount] = useState("");

  return (
    <div className=" text-white w-full max-w-300 mt-10">
      <Card className="w-full max-w-3xl bg-[#547F7F1A] border border-[#547F7F99] rounded-xl shadow-lg backdrop-blur-md">
        <div className="flex justify-between bg-[#161A1A]  rounded-lg mx-4 mt-4 overflow-hidden p-1">
          <button
            onClick={() => setActiveTab("deposit")}
            className={`w-1/2 py-3 text-center font-semibold transition-all ${
              activeTab === "deposit"
                ? "bg-[#06F9F9] text-black rounded-md"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Deposit
          </button>
          <button
            onClick={() => setActiveTab("withdraw")}
            className={`w-1/2 py-3 text-center font-semibold transition-all ${
              activeTab === "withdraw"
                ? "bg-[#06F9F9] text-black rounded-md"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Withdraw
          </button>
        </div>

        <CardContent className="mt-6 space-y-6">
          <div>
            <div className="relative flex items-center">
              <Input
                type="text"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="text-3xl text-white bg-[#161A1A] border border-[#547F7F99] py-6 w-full pr-36"
              />
              <div className="flex items-center gap-4 absolute right-4 top-1/2 -translate-y-1/2">
                <span className="text-gray-400 text-lg font-semibold">DAI</span>
                <Button
                  variant="secondary"
                  className="bg-[#06F9F9] text-black font-semibold hover:bg-[#05eaea] cursor-pointer hover:scale-105"
                >
                  MAX
                </Button>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              -${amount || "0.00"} USDC
            </p>
          </div>

          <Button className="w-full bg-[#06F9F9] hover:bg-[#05eaea] text-black font-semibold text-lg py-6 rounded-md hover:scale-105">
            {activeTab === "deposit" ? "Deposit" : "Withdraw"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default DepositWithdraw;
