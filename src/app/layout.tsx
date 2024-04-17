import { cn } from "~/lib/utils";
import "~/styles/globals.css";
import localfont from "next/font/local";
import { SideBar } from "~/components/side-bar";
import { Header } from "~/components/header";

const siteFont = localfont({
  src: "../../public/notosan/static/NotoSans_SemiCondensed-Light.ttf",
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          siteFont.className,
          "bg-gradient-to-b from-[#2e026d] to-[#15162c]",
        )}
      >
        <div className="mx-auto flex w-[80%] ">
          <SideBar />
          <div className="grow">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
