// components/VideoPlayer.jsx
export default function VideoPlayer() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 mb-12 mt-6">
      <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.youtube.com/embed/AxtOgHTA86g?autoplay=1&mute=0&rel=0&controls=1"
          title="Institucional Intelbras"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
}
