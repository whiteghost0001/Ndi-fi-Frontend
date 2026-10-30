"use client";

import CollateralRow from "@/components/shared/CollateralRow";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { motion } from "framer-motion";
import Container from "@/components/shared/Container";
import PageHeader from "@/components/shared/PageHeader";

const Collateral = [
  {
    name: "ETH",
    price: "3500.00",
    balance: "2.5 ETH",
  },
  {
    name: "WBTC",
    price: "650, 000.00",
    balance: "2.5 WBTC",
  },
  {
    name: "LINK",
    price: "18.50",
    balance: "1000 LINK",
  },
];

export const description = "A radial chart with text";
const chartData = [
  { browser: "safari", safe: 120, fill: "var(--color-safari)" },
];
const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  safari: {
    label: "Safari",
    color: "#38C00A",
  },
} satisfies ChartConfig;

const Borrow = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Container className="pt-32 md:pt-40 pb-24">
        <PageHeader
          title="Collateral Management"
          description="Manage the assets backing your loans and borrow against them."
        />
        <div className="space-y-3">
          {Collateral.map((collateral, index) => (
            <CollateralRow key={index} {...collateral} />
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-15 mt-10">
          <div className="bg-[#161A1A0D] border border-[#547F7F99] w-full max-w-140 rounded-md p-10">
            <p className="text-3xl">Borrow</p>
            <div className="text-sm flex justify-between items-center pt-5 space-y-3">
              <p className="text-[#39D4DF]">Collateral Value</p>
              <p>$5,250.00</p>
            </div>
            <div className="text-sm flex justify-between items-center">
              <p className="text-[#39D4DF]">Borrowing Power</p>
              <p>$3,250.00</p>
            </div>
            <div className="mt-5">
              <Progress
                value={50}
                className="bg-[#0D4E4E] h-2.5 [&>div]:bg-[#06F9F9]"
              />
              <p className="text-[#39D4DF] text-[11px] pt-1">
                Liquidation at {">"} 120%
              </p>
            </div>
            <div className="relative py-6">
              <Input
                type="text"
                className="bg-[#161A1A] border border-[#547F7F99] text-white py-6 pr-20"
              />
              <Button className="absolute right-2 top-1/2 -translate-y-1/2 text-lg bg-[#39D4DF] hover:bg-[#6ceff8] cursor-pointer">
                MAX
              </Button>
            </div>

            <div className="bg-[#161A1A] border border-[#547F7F99] p-5 space-y-4 rounded-md">
              <div className="flex items-center justify-between text-sm">
                <p className="text-[#39D4DF]">Transaction Fee</p>
                <p>-0.005 ETH</p>
              </div>
              <div className="flex items-center justify-between text-sm">
                <p className="text-[#39D4DF]">Required Collateral</p>
                <p>$4,000.00</p>
              </div>
              <div className="flex items-center justify-between text-sm">
                <p className="text-[#39D4DF]">Resulting High Factor</p>
                <p className="text-[12px] text-[#38C00A]">112.67%</p>
              </div>
            </div>
            <Button className="bg-[#39D4DF] px-15 py-2 text-lg mt-10 hover:bg-[#67e2eb] hover:scale-105 cursor-pointer">
              Borrow DAI
            </Button>
          </div>
          <div className="bg-[#161A1A0D] border border-[#547F7F99] w-full max-w-140 rounded-md p-10">
            <p className="text-3xl">Active Loan</p>
            <div>
              <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square max-h-[250px]"
              >
                <RadialBarChart
                  data={chartData}
                  startAngle={0}
                  endAngle={250}
                  innerRadius={80}
                  outerRadius={110}
                >
                  <PolarGrid
                    gridType="circle"
                    radialLines={false}
                    stroke="none"
                    className="first:fill-[#38C00A] last:fill-background"
                    polarRadius={[86, 74]}
                  />
                  <RadialBar dataKey="visitors" background cornerRadius={10} />
                  <PolarRadiusAxis
                    tick={false}
                    tickLine={false}
                    axisLine={false}
                  >
                    <Label
                      content={({ viewBox }) => {
                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                          return (
                            <text
                              x={viewBox.cx}
                              y={viewBox.cy}
                              textAnchor="middle"
                              dominantBaseline="middle"
                            >
                              <tspan
                                x={viewBox.cx}
                                y={viewBox.cy}
                                className="fill-foreground text-4xl font-bold"
                              >
                                {chartData[0].safe.toLocaleString()}%
                              </tspan>
                              <tspan
                                x={(viewBox.cx || 0) - 30}
                                y={(viewBox.cy || 0) + 24}
                                textAnchor="start"
                                className="fill-[#38C00A]"
                              >
                                safe
                              </tspan>
                            </text>
                          );
                        }
                      }}
                    />
                  </PolarRadiusAxis>
                </RadialBarChart>
              </ChartContainer>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <p className="text-[#39D4DF]">Total Borrowed</p>
                <p>5,000 DAI</p>
              </div>
              <div className="flex items-center justify-between text-sm">
                <p className="text-[#39D4DF]">Interest Rate (APY)</p>
                <p>3.5%</p>
              </div>
            </div>
            <Button className="bg-transparent px-15 mt-15 border border-[#06F9F9] text-[#06F9F9] hover:text-white hover:bg-[#39D4DF] hover:scale-105 cursor-pointer">
              Repay Loan
            </Button>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default Borrow;
