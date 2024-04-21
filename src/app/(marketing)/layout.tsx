import { MarketingFooter } from "./_components/marketing-footer";
import { MarketingHeader } from "./_components/marketing-header";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="fixed inset-0 h-screen w-screen bg-purple-200">
      <MarketingHeader />
      {children}
      <MarketingFooter />
    </div>
  );
}

export default MarketingLayout;
