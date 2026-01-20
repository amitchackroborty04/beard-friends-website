import Footer from "@/components/footer&navbar/Footer";
import Navbar from "@/components/footer&navbar/Navbar";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className="">{children}</div>
      <Footer />
    </div>
  );
}

export default layout;
 