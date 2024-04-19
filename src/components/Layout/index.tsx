interface LayoutProps {
  className?: string;
  children: JSX.Element;
}

const Layout = ({ children, className }: LayoutProps) => {
  return (
    <div className={className}>
      <nav className="bg-white text-black font-semibold text-2xl py-4 px-6 flex justify-between">
        <div>
          <h1>Mini Project #1</h1>
        </div>
        <div>
          <h1>Deadline 19/04 16:00</h1>
        </div>
      </nav>

      {children}
    </div>
  );
};

export default Layout;
