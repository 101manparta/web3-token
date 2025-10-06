import { useState } from "react";
import { Shield, UserPlus, UserMinus, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import BackgroundParticles from "@/components/BackgroundParticles";

interface AccessUser {
  id: string;
  address: string;
  grantedAt: string;
  hasAccess: boolean;
}

const AccessControl = () => {
  const [users, setUsers] = useState<AccessUser[]>([
    {
      id: "1",
      address: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
      grantedAt: "2024-01-15",
      hasAccess: true,
    },
    {
      id: "2",
      address: "0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7",
      grantedAt: "2024-01-20",
      hasAccess: true,
    },
  ]);
  const [newAddress, setNewAddress] = useState("");
  const { toast } = useToast();

  const handleGrantAccess = () => {
    if (!newAddress) return;
    
    const newUser: AccessUser = {
      id: Date.now().toString(),
      address: newAddress,
      grantedAt: new Date().toISOString().split("T")[0],
      hasAccess: true,
    };
    
    setUsers([...users, newUser]);
    setNewAddress("");
    toast({
      title: "Akses diberikan",
      description: `Akses telah diberikan kepada ${newAddress}`,
    });
  };

  const handleRevokeAccess = (userId: string) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, hasAccess: false } : user
    ));
    toast({
      title: "Akses dicabut",
      description: "Akses pengguna telah dicabut",
      variant: "destructive",
    });
  };

  const handleRestoreAccess = (userId: string) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, hasAccess: true } : user
    ));
    toast({
      title: "Akses dikembalikan",
      description: "Akses pengguna telah dikembalikan",
    });
  };

  return (
    <div className="min-h-screen relative">
      <BackgroundParticles />
      
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4 text-gradient">Access Control</h1>
            <p className="text-foreground/70">Kelola siapa saja yang dapat mengakses data DNA Anda</p>
          </div>

          {/* Grant Access Form */}
          <div className="glass-card p-8 mb-8 animate-zoom-in">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <UserPlus className="w-6 h-6 mr-2 text-primary" />
              Berikan Akses Baru
            </h2>
            
            <div className="flex gap-4">
              <Input
                placeholder="Masukkan alamat wallet (0x...)"
                value={newAddress}
                onChange={(e) => setNewAddress(e.target.value)}
                className="flex-1 backdrop-blur-md bg-white/50 border-white/30"
              />
              <Button onClick={handleGrantAccess} className="btn-glass">
                Grant Access
              </Button>
            </div>
          </div>

          {/* Users List */}
          <div className="glass-card p-8 animate-zoom-in">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Shield className="w-6 h-6 mr-2 text-primary" />
              Daftar Akses Pengguna
            </h2>

            <div className="space-y-4">
              {users.map((user) => (
                <div
                  key={user.id}
                  className="glass-card p-6 flex items-center justify-between animate-fade-in"
                >
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <code className="text-sm font-mono">{user.address}</code>
                      {user.hasAccess ? (
                        <span className="ml-3 px-2 py-1 bg-green-500/20 text-green-500 text-xs rounded-full flex items-center">
                          <Check className="w-3 h-3 mr-1" />
                          Aktif
                        </span>
                      ) : (
                        <span className="ml-3 px-2 py-1 bg-red-500/20 text-red-500 text-xs rounded-full flex items-center">
                          <X className="w-3 h-3 mr-1" />
                          Dicabut
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-foreground/70">
                      Diberikan: {user.grantedAt}
                    </p>
                  </div>

                  <div>
                    {user.hasAccess ? (
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleRevokeAccess(user.id)}
                        className="backdrop-blur-md"
                      >
                        <UserMinus className="w-4 h-4 mr-2" />
                        Revoke
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        onClick={() => handleRestoreAccess(user.id)}
                        className="btn-glass"
                      >
                        <UserPlus className="w-4 h-4 mr-2" />
                        Restore
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessControl;
