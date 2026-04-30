import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { Users, Briefcase, LogOut, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const navItems = [
  { to: "/clientes", label: "Clientes", icon: Users },
  { to: "/advogados", label: "Advogados", icon: Briefcase },
];

const AppLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success("Logout realizado.");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex w-full">
      {/* Sidebar */}
      <aside className="w-64 bg-sidebar text-sidebar-foreground flex flex-col shrink-0">
        <div className="p-6 flex items-center gap-3 border-b border-sidebar-border">
          <Scale className="h-7 w-7 text-sidebar-primary" />
          <span className="text-lg font-bold text-sidebar-accent-foreground tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            JurisGestão
          </span>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                }`
              }
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-h-screen">
        <header className="h-16 border-b border-border bg-card flex items-center justify-between px-6 shrink-0">
          <div />
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Dr. Carlos Mendes</span>
            <Button variant="ghost" size="sm" onClick={handleLogout} className="text-muted-foreground">
              <LogOut className="h-4 w-4 mr-2" />
              Sair
            </Button>
          </div>
        </header>
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;