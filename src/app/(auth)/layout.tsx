interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="fixed inset-0 flex h-screen w-screen items-center justify-center bg-purple-200 bg-[url('/svgs/authback.svg')] bg-center bg-no-repeat">
      {children}
    </div>
  );
}
