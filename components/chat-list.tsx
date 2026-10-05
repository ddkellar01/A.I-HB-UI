export function Header() {
  return (
    <header className="fixed top-0 w-full z-20 flex items-center justify-between px-6 py-4 bg-black/60 border-b border-green-500/50 backdrop-blur-md shadow-[0_0_15px_rgba(0,255,0,0.1)]">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#00ff00]"></div>
        <span className="font-bold tracking-widest">{'>'} VITAL_NET_OS</span>
      </div>
      <div className="text-xs opacity-70">
        SECURE_CONNECTION // UPLINK_ACTIVE
      </div>
    </header>
  );
}
