import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white p-6 selection:bg-[#1e90ff] selection:text-white">
      <div className="flex flex-col items-center space-y-6">
        {/* Logo */}
        <Image
          src="/logo.svg"
          alt="Ariz Total Logo"
          width={1000} 
          height={250}
          priority 
          className="w-[320px] sm:w-125 md:w-162.5 lg:w-200 h-auto max-w-full" 
        />

        {/* Status Indicator */}
        <div className="flex items-center space-x-3 text-gray-500 font-mono text-xs tracking-widest uppercase">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1e90ff] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#1e90ff]"></span>
          </span>
          <span>System Initializing</span>
        </div>
      </div>
    </main>
  );
}