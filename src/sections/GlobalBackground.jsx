const GlobalBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Orange Glow */}
      <div className="absolute w-[28rem] h-[28rem] bg-orange-600 rounded-full blur-3xl opacity-20 -top-48 -left-48 animate-pulse" />

      {/* Purple Glow */}
      <div
        className="absolute w-[28rem] h-[28rem] bg-purple-800 rounded-full blur-3xl opacity-20 top-1/3 -right-48 animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Soft Accent */}
      <div
        className="absolute w-[20rem] h-[20rem] bg-orange-600 rounded-full blur-2xl opacity-10 bottom-0 left-1/3 animate-pulse"
        style={{ animationDelay: "2s" }}
      />
    </div>
  );
};

export default GlobalBackground;
