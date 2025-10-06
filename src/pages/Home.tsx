import { Link } from "react-router-dom";
import { Dna, Upload, Shield, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import BackgroundParticles from "@/components/BackgroundParticles";

const Home = () => {
  return (
    <div className="min-h-screen relative">
      <BackgroundParticles />
      
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center justify-center mb-6">
            <Dna className="w-20 h-20 text-primary animate-float" />
          </div>
          <h1 className="text-6xl font-bold mb-6 text-gradient">
            DecentraGEN
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
            Platform desentralisasi data genetika berbasis blockchain dan IPFS.
            Kelola data DNA Anda dengan aman, transparan, dan terdesentralisasi.
          </p>
          <Link to="/my-data">
            <Button size="lg" className="btn-glass text-lg px-8 py-6 animate-zoom-in">
              <Upload className="w-5 h-5 mr-2" />
              Upload DNA Data
            </Button>
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="glass-card p-8 text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Keamanan Blockchain</h3>
            <p className="text-foreground/70">
              Data genetika Anda dilindungi dengan teknologi blockchain yang tidak dapat diubah
            </p>
          </div>

          <div className="glass-card p-8 text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
              <Network className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Penyimpanan IPFS</h3>
            <p className="text-foreground/70">
              File DNA tersimpan terdesentralisasi dengan IPFS, tanpa single point of failure
            </p>
          </div>

          <div className="glass-card p-8 text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
              <Dna className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Kontrol Akses Penuh</h3>
            <p className="text-foreground/70">
              Anda yang menentukan siapa saja yang dapat mengakses data genetika Anda
            </p>
          </div>
        </div>

        {/* How it Works */}
        <div className="mt-32 text-center">
          <h2 className="text-4xl font-bold mb-12 text-gradient">Bagaimana Cara Kerjanya?</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { step: "01", title: "Upload Data DNA", desc: "Unggah file data genetika Anda" },
              { step: "02", title: "IPFS Storage", desc: "File disimpan di jaringan IPFS terdesentralisasi" },
              { step: "03", title: "Blockchain Registry", desc: "Hash IPFS didaftarkan ke blockchain" },
              { step: "04", title: "Kelola Akses", desc: "Berikan atau cabut akses sesuai keinginan" },
            ].map((item, i) => (
              <div key={i} className="glass-card p-6 animate-fade-in" style={{ animationDelay: `${0.1 * (i + 1)}s` }}>
                <div className="text-4xl font-bold text-primary/30 mb-3">{item.step}</div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
