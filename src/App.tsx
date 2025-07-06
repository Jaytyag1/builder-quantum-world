import { Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { useSafeAuth } from "@/hooks/useSafeAuth";
import AuthWrapper from "@/components/AuthWrapper";
import Home from "@/pages/Home";
import Dashboard from "@/pages/Dashboard";
import InvoiceCreate from "@/pages/InvoiceCreate";
import InvoiceView from "@/pages/InvoiceView";
import Pricing from "@/pages/Pricing";
import About from "@/pages/About";
import NotFound from "@/pages/NotFound";

export default function App() {
  const { isSignedIn } = useSafeAuth();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/invoice/create" element={<InvoiceCreate />} />
        <Route path="/invoice/:id" element={<InvoiceView />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </div>
  );
}
