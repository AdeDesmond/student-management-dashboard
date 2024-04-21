import { Button } from "~/components/ui/button";

export const MarketingFooter = () => {
  return (
    <footer className="fixed bottom-0 left-0 flex h-[3rem]  w-full items-center justify-between bg-white lg:px-20 2xl:px-[10rem]">
      <h2>some word</h2>
      <div>
        <Button variant="ghost" size="sm">
          Privary Policy
        </Button>
        <Button variant="ghost" size="sm">
          Terms of service
        </Button>
      </div>
    </footer>
  );
};
