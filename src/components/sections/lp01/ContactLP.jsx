import contetLp01 from "../../../content/contentLp01";
import SectionArea from "../../sectionElements/SectionArea";
import SectionWrapper from "../../sectionElements/SectionWrapper";
import ContactCardLP from "./ContactCardLP";

export default function ContactLP() {
  return (
    <>
      <SectionArea paddingTopAndBottom={false}>
        <SectionWrapper>
          <div className="mt-[60px] font-mainFont desktop1:flex desktop1:flex-wrap justify-center">
            {/* <h1 className="text-center mb-[16px]">Entre em contato</h1> */}
            <ContactCardLP
              label={contetLp01.contact.card1.title}
              icon={contetLp01.contact.card1.icon}
              description={contetLp01.contact.card1.description}
            />
            <ContactCardLP
              label={contetLp01.contact.card3.title}
              icon={contetLp01.contact.card3.icon}
              description={contetLp01.contact.card3.description}
            />
            <ContactCardLP
              label={contetLp01.contact.card2.title}
              icon={contetLp01.contact.card2.icon}
              description={contetLp01.contact.card2.description}
            />
          </div>
        </SectionWrapper>
      </SectionArea>
    </>
  );
}
