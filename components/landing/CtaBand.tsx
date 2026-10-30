import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/shared/Container";

const CtaBand = () => {
  return (
    <Container className="py-16 md:py-24">
      <div className="rounded-2xl border border-[#547F7F99] bg-[#547F7F26] px-6 py-12 md:py-16 text-center space-y-6">
        <h2 className="text-2xl md:text-4xl font-semibold text-white">
          Ready to put your assets to work?
        </h2>
        <p className="text-sm md:text-base text-[#8AA0A0] max-w-md mx-auto">
          Connect your wallet and start depositing, borrowing, or staking in
          minutes.
        </p>
        <Button
          asChild
          className="bg-[#06F9F9] text-black hover:bg-[#9af1f1] hover:scale-105 cursor-pointer text-base px-8 py-6"
        >
          <Link href="/dashboard" className="flex items-center gap-2">
            Launch App <ArrowRight size={18} />
          </Link>
        </Button>
      </div>
    </Container>
  );
};

export default CtaBand;
