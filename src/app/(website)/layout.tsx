import Footer from "@/components/footer&navbar/Footer";
import Navbar from "@/components/footer&navbar/Navbar";
import ReactQueryProvider from "@/components/provider/ReactQueryProvider";
import { Toaster } from "@/components/ui/sonner";
import React from "react";
import NextTopLoader from "nextjs-toploader";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
       <NextTopLoader color="#BA5EEF" height={3} showSpinner={false} />
      <Navbar />
      <ReactQueryProvider>
      <div className="">{children}</div>
         <Toaster />
      </ReactQueryProvider>
      <Footer />
    </div>
  );
}

export default layout;
 