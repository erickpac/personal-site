import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { Colors } from "@/types/types";

type FooterProps = {
  colors: Colors;
};

export const Footer = ({ colors }: FooterProps) => {
  return (
    <footer className={`${colors.subtle} border-t border-gray-200`}>
      <div className="container mx-auto px-4 py-8">
        <h2 className="mb-4 text-2xl font-bold">Contact Me</h2>
        <p className="mb-4 text-gray-600">
          Feel free to reach out for collaborations or just a friendly chat.
        </p>
        <a href="mailto:john.doe@example.com" />
        <Button
          className={`${colors.accent} ${colors.accentHover} text-white transition-all duration-300 hover:scale-105`}
        >
          <Mail className="mr-2 h-4 w-4" />
          Email Me
        </Button>
        {/* </Link> */}
      </div>
    </footer>
  );
};
