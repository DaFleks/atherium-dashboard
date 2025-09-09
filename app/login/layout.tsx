const layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="bg-gradient-to-r from-blue-300 to-blue-500 h-full text-white flex items-center">{children}</div>;
};

export default layout;