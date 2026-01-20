import ContactUs from "../components/ContactUs";
import Download from "../components/Download";
import About_community from "./_components/About_community";
import About from "./_components/About_us";
import Benefits from "./_components/Benefits";


export default function Home() {
  return (
    <main className="bg-black text-white">
      <About />
      <About_community/>
      <Benefits />|
      <Download/>
      <ContactUs/>
      {/* <AboutCommunity /> */}
   
    </main>
  )
}
