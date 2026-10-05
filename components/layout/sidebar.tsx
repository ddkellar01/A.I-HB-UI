export function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 h-screen fixed left-0 top-0 pt-20 pb-6 px-4 bg-black/80 border-r border-green-500/50 z-15 backdrop-blur-md">
      <div className="text-xs mb-4 pb-2 border-b border-green-900/50">
        {'>'} SYSTEM_LOGS
      </div>
      <div className="flex-1 overflow-y-auto opacity-70 text-xs space-y-2">
        <p>[SYS] Boot sequence initiated...</p>
        <p>[SYS] Neural pathways mapped.</p>
        <p>[SYS] Waiting for operator input.</p>
      </div>
    </aside>
  );
}
