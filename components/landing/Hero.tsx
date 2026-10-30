"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/shared/Container";

const Hero = () => {
  return (
    <Container className="pt-40 pb-16 md:pt-48 md:pb-24">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Transparent. Secure.
            <br />
            <span className="text-[#06F9F9]">Decentralized.</span>
          </h1>
          <p className="text-sm md:text-base text-[#8AA0A0] max-w-md mx-auto md:mx-0">
            Ndi-Fi puts you in control of your digital wealth — with open-source
            smart contracts and verified on-chain data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
            <Button
              asChild
              className="bg-[#06F9F9] text-black hover:bg-[#9af1f1] hover:scale-105 cursor-pointer text-base px-8 py-6"
            >
              <Link href="/dashboard" className="flex items-center gap-2">
                Launch App <ArrowRight size={18} />
              </Link>
            </Button>
            <Button
              variant="outline"
              className="border-[#547F7F99] bg-transparent text-white hover:bg-[#547F7F33] hover:scale-105 cursor-pointer text-base px-8 py-6"
            >
              Read Docs
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="shrink-0"
        >
          <Image
            src="/images/Hero.png"
            alt="Ndi-Fi protocol illustration"
            width={420}
            height={320}
            priority
            className="w-56 md:w-96 h-auto"
          />
        </motion.div>
      </div>
    </Container>
  );
};

export default Hero;
