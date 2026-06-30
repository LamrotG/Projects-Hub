import { Mail } from "lucide-react";
import { GithubIcon, XIcon, TelegramIcon } from "@/components/icons";
import { ContactForm } from "@/components/contact-form";
import type { ComponentType, SVGProps } from "react";

const socialLinks: {
  label: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}[] = [
  {
    label: "GitHub",
    href: "https://github.com/LamrotG",
    icon: GithubIcon,
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/Lamrotgt",
    icon: XIcon,
  },
  {
    label: "Telegram",
    href: "https://t.me/Aexti",
    icon: TelegramIcon,
  },
  {
    label: "Email",
    href: "mailto:lgutsa16@gmail.com",
    icon: Mail,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-sm font-medium text-foreground">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
                  aria-label={link.label}
                >
                  <link.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-foreground">
              Get in touch
            </h3>
            <ContactForm />
          </div>
        </div>

        <div className="mt-12 border-t border-border/50 pt-6 text-center text-xs text-muted-foreground">
          &copy; All rights reserved.
        </div>
      </div>
    </footer>
  );
}
