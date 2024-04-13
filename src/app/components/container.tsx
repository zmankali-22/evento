
type ContainerProps = {
    children: React.ReactNode
}


export default function Container({ children }: ContainerProps) {
  return (
    <div className="flex flex-col max-w-7xl min-h-screen mx-auto bg-white/[3%]">
      {children}
    </div>
  );
}
