export default function DesignConceptShowcase() {
  return (
    <div className="space-y-24 bg-gray-100 text-gray-900">
      {/* PARALLAX EFFECT */}
      <section
        className="h-screen bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee)",
        }}
      >
        <h1 className="text-white text-5xl font-bold bg-black/40 px-6 py-4 rounded">
          Parallax Effect
        </h1>
      </section>

      {/* GLASSMORPHISM / FROSTED GLASS / BACKDROP FILTER */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
        <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl p-10 text-white shadow-xl">
          <h2 className="text-3xl font-semibold">Glassmorphism</h2>
          <p className="opacity-80 mt-2">Frosted glass + blur + transparency</p>
        </div>
      </section>

      {/* NEUMORPHISM (SOFT UI) */}
      <section className="flex justify-center">
        <div className="bg-gray-200 p-10 rounded-3xl shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]">
          <h2 className="text-xl font-semibold text-gray-700">
            Neumorphism (Soft UI)
          </h2>
        </div>
      </section>

      {/* SKEUOMORPHISM */}
      <section className="flex justify-center">
        <div className="p-10 rounded-xl bg-gradient-to-b from-gray-300 to-gray-400 shadow-lg border border-gray-500">
          <h2 className="text-xl font-bold">Skeuomorphism</h2>
          <p className="text-sm text-gray-700">Real-world inspired look</p>
        </div>
      </section>

      {/* FLAT DESIGN */}
      <section className="flex justify-center">
        <div className="bg-blue-500 text-white p-10 rounded-md">
          <h2 className="text-xl font-semibold">Flat Design</h2>
        </div>
      </section>

      {/* MATERIAL DESIGN */}
      <section className="flex justify-center">
        <div className="bg-white p-10 rounded-md shadow-md">
          <h2 className="text-xl font-semibold">Material Design</h2>
          <p className="text-gray-500">Elevation + shadow</p>
        </div>
      </section>

      {/* CLAYMORPHISM */}
      <section className="flex justify-center">
        <div className="bg-pink-200 p-10 rounded-[30px] shadow-[0_20px_40px_rgba(0,0,0,0.15)]">
          <h2 className="text-xl font-semibold">Claymorphism</h2>
        </div>
      </section>

      {/* GRADIENT DESIGN */}
      <section className="flex justify-center">
        <div className="p-10 rounded-xl text-white bg-gradient-to-r from-cyan-500 to-blue-600">
          <h2 className="text-xl font-semibold">Gradient Design</h2>
        </div>
      </section>

      {/* GRADIENT OVERLAY */}
      <section
        className="relative h-[40vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
          <h2 className="text-white text-2xl">Gradient Overlay</h2>
        </div>
      </section>

      {/* BLUR EFFECT / BACKGROUND BLUR */}
      <section className="flex justify-center relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')] bg-cover blur-md" />
        <div className="relative bg-white p-10 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold">Background Blur</h2>
        </div>
      </section>

      {/* OPACITY LAYER */}
      <section className="flex justify-center">
        <div className="bg-black/60 text-white p-10 rounded-xl">
          <h2 className="text-xl font-semibold">Opacity Layer</h2>
        </div>
      </section>

      {/* MASKING EFFECT */}
      <section className="flex justify-center">
        <div
          className="w-64 h-64 bg-cover"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee)",
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </section>

      {/* CLIP PATH DESIGN */}
      <section className="flex justify-center">
        <div
          className="w-64 h-64 bg-gradient-to-r from-purple-500 to-pink-500"
          style={{
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          }}
        />
      </section>

      {/* NOISE / GRAIN TEXTURE */}
      <section className="flex justify-center">
        <div className="relative p-10 rounded-xl bg-gray-800 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          <h2 className="relative text-xl font-semibold">
            Noise / Grain Texture
          </h2>
        </div>
      </section>
    </div>
  );
}
