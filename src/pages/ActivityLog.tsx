import { Activity, Upload, Shield, Eye, CheckCircle } from "lucide-react";
import BackgroundParticles from "@/components/BackgroundParticles";

interface LogEntry {
  id: string;
  type: "upload" | "access_grant" | "access_revoke" | "view" | "register";
  description: string;
  timestamp: string;
  txHash?: string;
}

const ActivityLog = () => {
  const logs: LogEntry[] = [
    {
      id: "1",
      type: "register",
      description: "Data DNA terdaftar di blockchain",
      timestamp: "2024-01-20 14:30:25",
      txHash: "0x1234567890abcdef...",
    },
    {
      id: "2",
      type: "upload",
      description: "File DNA diunggah ke IPFS",
      timestamp: "2024-01-20 14:25:10",
      txHash: "QmX7f3h...",
    },
    {
      id: "3",
      type: "access_grant",
      description: "Akses diberikan ke 0x742d35Cc...",
      timestamp: "2024-01-15 10:15:00",
      txHash: "0xabcdef1234567890...",
    },
    {
      id: "4",
      type: "view",
      description: "Data diakses oleh 0x89205A3A...",
      timestamp: "2024-01-14 16:45:30",
    },
    {
      id: "5",
      type: "access_revoke",
      description: "Akses dicabut dari 0x9876543210...",
      timestamp: "2024-01-12 09:20:15",
      txHash: "0xfedcba0987654321...",
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "upload":
        return <Upload className="w-5 h-5" />;
      case "access_grant":
        return <Shield className="w-5 h-5 text-green-500" />;
      case "access_revoke":
        return <Shield className="w-5 h-5 text-red-500" />;
      case "view":
        return <Eye className="w-5 h-5" />;
      case "register":
        return <CheckCircle className="w-5 h-5 text-primary" />;
      default:
        return <Activity className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen relative">
      <BackgroundParticles />
      
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4 text-gradient">Activity Log</h1>
            <p className="text-foreground/70">Riwayat aktivitas dan transaksi data DNA Anda</p>
          </div>

          <div className="glass-card p-8 animate-zoom-in">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Activity className="w-6 h-6 mr-2 text-primary" />
              Riwayat Transaksi
            </h2>

            <div className="space-y-4">
              {logs.map((log, index) => (
                <div
                  key={log.id}
                  className="glass-card p-6 hover:scale-[1.01] transition-transform animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      {getIcon(log.type)}
                    </div>
                    
                    <div className="flex-1">
                      <p className="font-medium mb-1">{log.description}</p>
                      <p className="text-sm text-foreground/70 mb-2">{log.timestamp}</p>
                      {log.txHash && (
                        <code className="text-xs bg-primary/10 px-2 py-1 rounded">
                          TX: {log.txHash}
                        </code>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-8">
            <div className="glass-card p-6 text-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <p className="text-3xl font-bold text-primary mb-2">12</p>
              <p className="text-sm text-foreground/70">Total Transaksi</p>
            </div>
            <div className="glass-card p-6 text-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <p className="text-3xl font-bold text-primary mb-2">5</p>
              <p className="text-sm text-foreground/70">Akses Diberikan</p>
            </div>
            <div className="glass-card p-6 text-center animate-fade-in" style={{ animationDelay: "0.7s" }}>
              <p className="text-3xl font-bold text-primary mb-2">2</p>
              <p className="text-sm text-foreground/70">File Tersimpan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityLog;
