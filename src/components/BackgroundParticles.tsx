const BackgroundParticles = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* DNA Helix particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute rounded-full bg-primary/10 animate-float-slow"
          style={{
            width: Math.random() * 8 + 4 + "px",
            height: Math.random() * 8 + 4 + "px",
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
            animationDelay: Math.random() * 5 + "s",
            animationDuration: Math.random() * 10 + 10 + "s",
          }}
        />
      ))}
      
      {/* Network nodes */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`node-${i}`}
          className="absolute rounded-full border-2 border-primary/20 animate-pulse"
          style={{
            width: Math.random() * 100 + 50 + "px",
            height: Math.random() * 100 + 50 + "px",
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
            animationDelay: Math.random() * 3 + "s",
            animationDuration: Math.random() * 4 + 4 + "s",
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundParticles;
