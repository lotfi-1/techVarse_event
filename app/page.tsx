/** @format */
import PurpleLight from "@/components/ui/PurpleLight";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Home from "@/components/landing/Home";
import EventHighlights from "@/components/landing/Event";
import Speakers from "@/components/landing/Speakers";
import Audience from "@/components/landing/Audience";
import Schedule from "@/components/landing/Schedule";
import Partners from "@/components/landing/Partners";

export default function Page() {
  return (
    <div>
      <Header />
      <Home />
      <PurpleLight className="border-b border-foreground" />
      <EventHighlights />
      <Speakers />
      <Audience />
      <Schedule />
      <Partners />
      <Footer />
    </div>
  );
}
