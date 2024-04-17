import { paths } from "~/lib/paths";
import { Button } from "./ui/button";
import Link from "next/link";
import localfont from "next/font/local";
import { cn } from "~/lib/utils";

const navfont = localfont({
  src: "../../public/notosan/static/NotoSans-Bold.ttf",
});
export const Navbar = () => {
  const links = paths.map((link) => (
    <Button
      className="text-white"
      size="sm"
      variant="link"
      key={link.label}
      asChild
    >
      <Link href={link.path} className="flex items-center gap-x-4">
        {link.icon}
        {link.label}
      </Link>
    </Button>
  ));
  return (
    <nav
      className={cn(
        "flex flex-col items-start gap-y-4 font-bold",
        navfont.className,
      )}
    >
      {links}
    </nav>
  );
};
