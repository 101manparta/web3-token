import { Info, BookOpen, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import BackgroundParticles from "@/components/BackgroundParticles";

const About = () => {
  const references = [
    {
      title: "Blockchain-Based Management of Genomic Data",
      journal: "IEEE Access",
      year: "2023",
      link: "https://ieeexplore.ieee.org",
    },
    {
      title: "Decentralized Storage for Healthcare Data using IPFS",
      journal: "Journal of Medical Systems",
      year: "2022",
      link: "https://link.springer.com",
    },
    {
      title: "Privacy-Preserving Genetic Testing via Blockchain",
      journal: "Nature Biotechnology",
      year: "2023",
      link: "https://nature.com",
    },
  ];

  return (
    <div className="min-h-screen relative">
      <BackgroundParticles />
      
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4 text-gradient">About DecentraGEN</h1>
            <p className="text-foreground/70">Platform desentralisasi untuk data genetika masa depan</p>
          </div>

          {/* Overview */}
          <div className="glass-card p-8 mb-8 animate-zoom-in">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Info className="w-6 h-6 mr-2 text-primary" />
              Tentang Proyek
            </h2>
            
            <div className="space-y-4 text-foreground/80">
              <p>
                <strong>DecentraGEN</strong> adalah platform inovatif yang menggabungkan teknologi blockchain 
                dan IPFS (InterPlanetary File System) untuk menciptakan ekosistem penyimpanan dan pengelolaan 
                data genetika yang aman, transparan, dan terdesentralisasi.
              </p>
              
              <p>
                Platform ini dirancang untuk memberikan kontrol penuh kepada pemilik data atas informasi 
                genetika mereka, sambil memfasilitasi kolaborasi riset yang aman dan etis dalam bidang genomik.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Teknologi Inti</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Blockchain:</strong> Menjamin integritas dan immutability data melalui smart contracts
                </li>
                <li>
                  <strong>IPFS:</strong> Penyimpanan file terdesentralisasi tanpa single point of failure
                </li>
                <li>
                  <strong>Smart Contracts:</strong> Automasi kontrol akses dan audit trail
                </li>
                <li>
                  <strong>Encryption:</strong> Enkripsi end-to-end untuk privasi maksimal
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Manfaat Utama</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Kepemilikan data penuh di tangan individu</li>
                <li>Transparansi akses melalui blockchain audit log</li>
                <li>Keamanan tingkat enterprise dengan desentralisasi</li>
                <li>Monetisasi data untuk riset dengan persetujuan eksplisit</li>
                <li>Interoperabilitas dengan sistem kesehatan modern</li>
              </ul>
            </div>
          </div>

          {/* Research References */}
          <div className="glass-card p-8 animate-zoom-in">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <BookOpen className="w-6 h-6 mr-2 text-primary" />
              Referensi Riset
            </h2>

            <div className="space-y-4">
              {references.map((ref, index) => (
                <div
                  key={index}
                  className="glass-card p-6 hover:scale-[1.01] transition-transform animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="font-semibold mb-2">{ref.title}</h3>
                  <p className="text-sm text-foreground/70 mb-3">
                    {ref.journal} • {ref.year}
                  </p>
                  <Button variant="outline" size="sm" className="btn-glass" asChild>
                    <a href={ref.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Baca Paper
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* GitHub Link */}
          <div className="text-center mt-8 animate-fade-in">
            <Button size="lg" className="btn-glass">
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
