export function EmptyScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-full mt-20 text-center z-20 relative">
      <div className="p-8 border border-green-500/50 bg-black/60 backdrop-blur-sm rounded-lg shadow-[0_0_15px_rgba(0,255,0,0.1)]">
        <h1 className="text-2xl font-bold mb-2">{'>'} AWAITING_INPUT</h1>
        <p className="text-green-600/80 max-w-md mx-auto">
          Diagnostic terminal online. Neural link established. Enter query parameters below to initiate scan.
        </p>
      </div>
    </div>
  );
}
