export default function FullScreenLoader() {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 z-[9999] bg-white/70 flex items-center justify-center">
      <div className="rounded-md h-12 w-12 border-4 border-t-4 border-brand-green animate-spin absolute"></div>
    </div>
  );
}
