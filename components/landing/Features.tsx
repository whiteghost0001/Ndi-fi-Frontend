import { Eye, Lock, Layers, Code2 } from "lucide-react";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Lock,
    title: "Non-Custodial",
    description:
      "Your keys, your assets. Ndi-Fi never takes custody of your funds.",
  },
  {
    icon: Eye,
    title: "On-Chain Transparency",
    description:
      "Every deposit, loan, and stake is verifiable on-chain in real time.",
  },
  {
    icon: Layers,
    title: "Multi-Asset Collateral",
    description:
      "Deposit a range of assets as collateral to borrow against your portfolio.",
  },
  {
    icon: Code2,
    title: "Open Source",
    description:
      "Smart contracts are open source, so anyone can review how the protocol works.",
  },
];

const Features = () => {
  return (
    <Container className="py-16 md:py-24 space-y-10">
      <SectionHeading
        className="justify-center text-center flex-col items-center"
        title="Built for a transparent financial system"
        description="Everything you need to deposit, borrow, and stake — without giving up control."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map(({ icon: Icon, title, description }) => (
          <Card
            key={title}
            className="bg-[#547F7F26] border border-[#547F7F66] transition-colors hover:border-[#06F9F9]/50"
          >
            <CardHeader>
              <div className="w-10 h-10 rounded-lg bg-[#06F9F9]/10 flex items-center justify-center mb-2">
                <Icon size={20} className="text-[#06F9F9]" />
              </div>
              <CardTitle className="text-white text-base">{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-[#8AA0A0]">{description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Features;
