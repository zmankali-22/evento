export default function Container({ children }) {
  return (
    <div className="max-w-7xl min-h-screen mx-auto bg-white/[3%]">
      {children}
    </div>
  );
}
