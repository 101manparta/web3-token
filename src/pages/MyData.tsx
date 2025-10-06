import { useState } from "react";
import { Upload, File, Hash, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import BackgroundParticles from "@/components/BackgroundParticles";

const MyData = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [ipfsHash, setIpfsHash] = useState<string>("");
  const [isRegistered, setIsRegistered] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      // Simulate IPFS hash generation
      const mockHash = `Qm${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`;
      setIpfsHash(mockHash);
      toast({
        title: "File berhasil diunggah",
        description: "Hash IPFS telah dihasilkan",
      });
    }
  };

  const handleRegisterToBlockchain = () => {
    setIsRegistered(true);
    toast({
      title: "Berhasil terdaftar di Blockchain",
      description: "Data DNA Anda telah terdaftar secara permanen",
    });
  };

  return (
    <div className="min-h-screen relative">
      <BackgroundParticles />
      
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4 text-gradient">My DNA Data</h1>
            <p className="text-foreground/70">Upload dan kelola data genetika Anda dengan aman</p>
          </div>

          {/* Upload Section */}
          <div className="glass-card p-8 mb-8 animate-zoom-in">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Upload className="w-6 h-6 mr-2 text-primary" />
              Upload DNA File
            </h2>
            
            <div className="border-2 border-dashed border-primary/30 rounded-xl p-12 text-center hover:border-primary/50 transition-all duration-300">
              <Input
                type="file"
                onChange={handleFileChange}
                className="hidden"
                id="dna-upload"
                accept=".txt,.csv,.vcf,.fasta"
              />
              <label htmlFor="dna-upload" className="cursor-pointer">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-4">
                  <File className="w-10 h-10 text-primary" />
                </div>
                <p className="text-lg mb-2">Klik untuk memilih file DNA</p>
                <p className="text-sm text-foreground/50">Format: .txt, .csv, .vcf, .fasta</p>
              </label>
            </div>

            {selectedFile && (
              <div className="mt-6 p-4 bg-primary/10 rounded-lg animate-fade-in">
                <p className="font-medium">File terpilih:</p>
                <p className="text-sm text-foreground/70">{selectedFile.name}</p>
              </div>
            )}
          </div>

          {/* IPFS Hash Section */}
          {ipfsHash && (
            <div className="glass-card p-8 mb-8 animate-zoom-in">
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <Hash className="w-6 h-6 mr-2 text-primary" />
                IPFS Hash
              </h2>
              
              <div className="bg-primary/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-foreground/70 mb-2">Hash IPFS Anda:</p>
                <code className="text-sm break-all font-mono">{ipfsHash}</code>
              </div>

              <Button
                onClick={handleRegisterToBlockchain}
                disabled={isRegistered}
                className="btn-glass w-full"
              >
                {isRegistered ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Terdaftar di Blockchain
                  </>
                ) : (
                  <>
                    Register to Blockchain
                  </>
                )}
              </Button>
            </div>
          )}

          {/* Status */}
          {isRegistered && (
            <div className="glass-card p-6 bg-green-500/10 border-green-500/30 animate-fade-in">
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                <div>
                  <p className="font-semibold">Data berhasil terdaftar</p>
                  <p className="text-sm text-foreground/70">Hash IPFS telah disimpan di blockchain</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyData;
