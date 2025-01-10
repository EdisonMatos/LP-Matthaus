import BackToTopButton from "../components/interactives/BackToTopButton";
import LPFloatingWhatsappButton from "../components/interactives/LPFloatingWhatsappButton";
import AboutParalaxeLP from "../components/sections/lp01/AboutParalaxeLP";
import ContactLP from "../components/sections/lp01/ContactLP";
import CtaLP from "../components/sections/lp01/CtaLP";
import FeaturesLP from "../components/sections/lp01/FeaturesLP";
import FooterLP from "../components/sections/lp01/FooterLP";
import HeroLP from "../components/sections/lp01/HeroLP";
import WhyUs from "../components/sections/lp01/WhyUs";

export default function Lp01() {
  return (
    <div>
      <HeroLP />
      <FeaturesLP />
      <AboutParalaxeLP />
      <WhyUs />
      <CtaLP />
      <ContactLP />
      <FooterLP />
      <LPFloatingWhatsappButton />
      <BackToTopButton />
    </div>
  );
}
