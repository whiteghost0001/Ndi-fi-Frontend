import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import Container from "@/components/shared/Container";

const Footer = () => {
  return (
    <footer className="border-t border-[#547F7F33] mt-20">
      <Container className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm py-6 text-[#8AA0A0]">
        <div>
          <ul className="flex flex-row flex-wrap gap-4 md:gap-5">
            <li className="hover:text-[#06F9F9] hover:scale-105 cursor-pointer transition-colors">
              Terms
            </li>
            <li className="hover:text-[#06F9F9] hover:scale-105 cursor-pointer transition-colors">
              Privacy
            </li>
            <li className="hover:text-[#06F9F9] hover:scale-105 cursor-pointer transition-colors">
              Docs
            </li>
            <li className="hover:text-[#06F9F9] hover:scale-105 cursor-pointer transition-colors">
              Get Support
            </li>
          </ul>
        </div>
        <div className="flex gap-5 items-center">
          <p>Follow on</p>
          <FaXTwitter className="text-lg hover:text-[#06F9F9] hover:scale-105 cursor-pointer transition-colors" />
          <FaDiscord className="text-xl hover:text-[#06F9F9] hover:scale-105 cursor-pointer transition-colors" />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
