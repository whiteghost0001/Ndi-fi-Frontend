import { Wallet, ArrowDownToLine, TrendingUp } from "lucide-react";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";

const steps = [
  {
    icon: Wallet,
    step: "01",
    title: "Connect your wallet",
    description: "Link any supported wallet in a couple of clicks.",
  },
  {
    icon: ArrowDownToLine,
    step: "02",
    title: "Deposit collateral",
    description: "Deposit supported assets into a vault as collateral.",
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Borrow or earn",
    description: "Borrow against your collateral, or stake to earn yield.",
  },
];

const HowItWorks = () => {
  return (
    <Container className="py-16 md:py-24 space-y-10">
      <SectionHeading
        className="justify-center text-center flex-col items-center"
        title="Get started in three steps"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map(({ icon: Icon, step, title, description }) => (
          <div key={step} className="text-center space-y-3">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#547F7F33] border border-[#547F7F99] flex items-center justify-center">
              <Icon size={22} className="text-[#06F9F9]" />
            </div>
            <p className="text-[#06F9F9] text-xs font-semibold tracking-wide">
              STEP {step}
            </p>
            <h3 className="text-white font-medium">{title}</h3>
            <p className="text-sm text-[#8AA0A0] max-w-xs mx-auto">
              {description}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default HowItWorks;
