import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { Colors } from "@/types/types";

type FooterProps = {
  colors: Colors;
};

export const Footer = ({ colors }: FooterProps) => {
  return (
    <footer className={`${colors.subtle} border-t`}>
      <div className="container mx-auto px-4 py-8">
        <h2 className="mb-4 text-2xl font-bold">Contact Me</h2>
        <p className="mb-4">
          Feel free to reach out for collaborations or just a friendly chat.
        </p>
        <a href="mailto:erickj.pac@gmail.com">
          <Button
            className={`${colors.accent} ${colors.accentHover} transition-all duration-300 hover:scale-105`}
          >
            <Mail className="mr-2 h-4 w-4" />
            Email Me
          </Button>
        </a>
      </div>
    </footer>
  );
};
