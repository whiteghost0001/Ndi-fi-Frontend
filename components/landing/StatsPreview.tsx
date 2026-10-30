import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import StatCard from "@/components/shared/StatCard";

const protocolStats = [
  { label: "Total Value Locked", value: "$ 99.1k", change: "+ 2.5%" },
  { label: "Total Collateral", value: "$ 80.5k", change: "+ 2.5%" },
  { label: "Total Borrowed", value: "$ 45.1k", change: "- 0.5%" },
  { label: "Available Liquidity", value: "$ 55k", change: "+ 3.1%" },
];

const StatsPreview = () => {
  return (
    <Container className="py-16 md:py-24 space-y-6">
      <SectionHeading
        title="Protocol at a glance"
        description="Live figures from the Ndi-Fi protocol."
        action={
          <Link
            href="/dashboard"
            className="text-[#06F9F9] text-sm font-medium hover:underline flex items-center gap-1"
          >
            View full dashboard <ArrowRight size={14} />
          </Link>
        }
      />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {protocolStats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </Container>
  );
};

export default StatsPreview;
