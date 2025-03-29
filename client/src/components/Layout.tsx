import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CustomCursor from "./CustomCursor";
import ParticlesBackground from "./ParticlesBackground";
import ScrollIndicator from "./ScrollIndicator";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <CustomCursor />
      <ParticlesBackground />
      <ScrollIndicator />
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}
