import bgImg from "../assets/imgs/hero/bgHeroLp03.webp";
import logo from "../assets/imgs/logo/logoLp.png";
import { infos } from "./content";

const currentYear = new Date().getFullYear();

const contentLp03 = {
  infos: {
    title:
      "Dr. Matthäus Lima - Especialista em Direito Penal e Defesa em Flagrante",
    description:
      "Dr. Matthäus Lima é especialista em direito penal, oferecendo defesa estratégica em casos de flagrante, audiência de custódia, crimes patrimoniais e outros processos penais. Consultoria e representação jurídica para garantir seus direitos.",
    keywords:
      "Direito Penal, Defesa Criminal, Advogado de Flagrante, Audiência de Custódia, Crimes Patrimoniais, Consultoria Jurídica Penal, Defesa Estratégica, Prisão em Flagrante, Processo Penal, Liberdade Provisória, Direito de Defesa, Habeas Corpus, Representação Jurídica, Advocacia Criminal, Defesa Jurídica, Especialista em Direito Penal, Assistência Jurídica Penal, Dr. Matthäus Lima, Justiça Penal, Direitos do Réu",
  },
  hero: {
    bgImg: bgImg,
    logo: {
      logoImg: logo,
      alt: "Logomarca",
    },
    textArea: {
      title: (
        <h1>
          Você conhece <span className="text-lpTitle"> seus direitos </span> em
          casos de
          <span className="text-lpTitle"> flagrante? </span> Saiba como se
          defender!
        </h1>
      ),
      subtitle:
        "Saiba como garantir sua defesa e proteger seus direitos desde o início. Conte com suporte especializado para você e sua família em audiências de custódia.",
      buttonLabel: "Quero falar com um especialista",
      ctaButtonAriaLabel:
        "Botão para chamada de ação para contato pelo whatsapp",
    },
  },
  features: {
    sectionHeader: {
      miniTag: "DEFESA IMEDIATA",
      title: "Como funciona a defesa em casos de flagrante?",
    },
    cards: {
      card1: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-list-check"
          >
            <path d="M11 18H3" />
            <path d="m15 18 2 2 4-4" />
            <path d="M16 12H3" />
            <path d="M16 6H3" />
          </svg>
        ),
        title: "Verificação da regularidade da prisão",
        description:
          "Ao ser preso em flagrante, a primeira etapa é verificar a legalidade da prisão. Se houver qualquer irregularidade, como abusos ou falhas processuais, nossa equipe atuará imediatamente para garantir a nulidade da prisão e proteger seus direitos.",
      },
      card2: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-file-check"
          >
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            <path d="m9 15 2 2 4-4" />
          </svg>
        ),
        title: "Liberdade provisória ou fiança",
        description:
          "Após a prisão, buscamos a possibilidade de liberdade provisória ou o pagamento de fiança, sempre respeitando as circunstâncias do caso. Nosso objetivo é garantir que você ou seu familiar não fique preso sem justificativa, com base em seus direitos constitucionais.",
      },
      card3: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-speech"
          >
            <path d="M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20" />
            <path d="M19.8 17.8a7.5 7.5 0 0 0 .003-10.603" />
            <path d="M17 15a3.5 3.5 0 0 0-.025-4.975" />
          </svg>
        ),
        title: "Defesa na audiência de custódia",
        description:
          "Na audiência de custódia, lutamos para que o juiz decida sobre a liberação imediata ou outras medidas menos severas. Garantimos que todos os direitos da pessoa em flagrante sejam preservados, além de garantir uma defesa eficaz no momento crucial.",
      },
      card4: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-scale"
          >
            <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
            <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
            <path d="M7 21h10" />
            <path d="M12 3v18" />
            <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
          </svg>
        ),
        title: "Recurso e garantia de direitos",
        description:
          "Caso a prisão seja mantida, recorremos a instâncias superiores, garantindo que seus direitos sejam respeitados ao longo de todo o processo. Buscamos sempre uma solução justa e o cumprimento da lei para reverter a situação.",
      },
    },
  },
  about: {
    bgImg: bgImg,
    logo: {
      logoImg: logo,
      alt: "Logomarca",
    },
    sectionHeader: {
      miniTag: "EXCELÊNCIA EM DEFESA PENAL",
      title: "Dedicação e defesa impecável",
    },
    paragraph: (
      <p>
        Em casos de flagrante, a rapidez e a estratégia são essenciais para
        garantir a proteção dos direitos do cliente. Por isso, atuo de forma
        ágil e eficaz, sem perder a qualidade e o compromisso com sua defesa.
        Com determinação e foco na justiça, estou aqui para assegurar que seus
        direitos sejam respeitados em cada etapa do processo. <br />
        <br /> Independentemente do seu caso, estamos prontos para oferecer a
        melhor solução jurídica. Entre em contato com a Matthäus Advocacia e
        descubra como podemos ser decisivos na sua defesa.
      </p>
    ),
    buttonLabel: "Quero falar com um especialista",
    ctaButtonAriaLabel: "Botão para chamada de ação para contato pelo whatsapp",
  },
  whyUs: {
    sectionHeader: {
      miniTag: "A DEFESA CERTA",
      title: "Por que nos escolher para proteger sua liberdade?",
    },
    cards: {
      card1: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-lightbulb"
          >
            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
            <path d="M9 18h6" />
            <path d="M10 22h4" />
          </svg>
        ),
        title: "Estratégia personalizada para sua defesa em flagrante",
        description:
          "Analisamos seu caso de flagrante com atenção detalhada. Juntos, desenvolveremos uma estratégia personalizada para garantir a melhor defesa e proteger seus direitos. Conte com nosso apoio em cada etapa do processo judicial!",
      },
      card2: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-shield-check"
          >
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        ),
        title: "Soluções personalizadas para sua defesa processual",
        description:
          "Criamos um plano de ação específico para o seu caso de flagrante, com o objetivo de uma solução rápida e eficaz. Cada passo é cuidadosamente pensado para atender às suas necessidades. Estamos aqui para transformar essa situação em uma defesa sólida e eficiente.",
      },
      card3: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-thumbs-up"
          >
            <path d="M7 10v12" />
            <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
          </svg>
        ),
        title: "Compromisso total com sua liberdade",
        description:
          "Nosso compromisso é absoluto com sua defesa em casos de flagrante, protegendo seus direitos em todas as fases do processo. Com nossa assistência, você pode ter certeza de que estamos focados em garantir a melhor resolução para sua situação, cuidando de todos os detalhes para garantir o resultado desejado.",
      },
      card4: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-hourglass"
          >
            <path d="M5 22h14" />
            <path d="M5 2h14" />
            <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
            <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
          </svg>
        ),
        title: "Experiência que inspira confiança na defesa penal",
        description:
          "Com vasta experiência em casos de flagrante e audiência de custódia, garantimos que seu processo seja tratado com a máxima seriedade e competência. Estaremos ao seu lado a cada passo, assegurando que seus direitos sejam respeitados e que sua defesa seja conduzida com eficiência. Conte conosco para fazer a diferença na sua jornada!",
      },
    },
  },
  cta: {
    bgImg: bgImg,
    sectionHeader: {
      miniTag: "NÃO PERCA TEMPO",
      title: "Quanto mais rápido, maiores suas chances.",
      subtitle: `Na Matthäus Advocacia, estamos prontos para defender seus direitos. Nossa equipe especializada em defesa penal atua com agilidade e competência para garantir que você tenha a melhor orientação e representação. Não deixe que dificuldades legais ou a falta de uma defesa adequada impeçam sua liberdade.`,
    },
    buttonLabel: "Quero falar com um especialista",
    ctaButtonAriaLabel: "Botão para chamada de ação para contato pelo whatsapp",
  },
  contact: {
    card1: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-instagram"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
      title: "Instagram",
      description: `@${infos.instagramProfile}`,
    },
    card2: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-mail"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
      title: "Email",
      description: `${infos.email}@${infos.domain}`,
    },
    card3: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-whatsapp"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
        </svg>
      ),
      title: "Whatsapp",
      description: `(${infos.phone.ddd}) ${infos.phone.firstPart}-${infos.phone.secondPart}`,
    },
  },
  footer: {
    copyrightLine: `© ${currentYear} ${infos.name}. Todos os direitos reservados.`,
    disclaimer: `Este site não é um produto Meta Platforms, Inc., Google LLC, tampouco oferece serviços públicos oficiais. ${infos.name} oferece serviços jurídicos privativos de advogado, de acordo com a legislação vigente e o Código de Ética e Disciplina da Ordem dos Advogados do Brasil.`,
  },
  links: {
    instagram: `https://www.instagram.com/${infos.instagramProfile}/`,
    ctaWhatsapp: `https://wa.me/+55${infos.phone.ddd}${infos.phone.firstPart}${infos.phone.secondPart}?text=${infos.whatsappDefaultMessage}`,
  },
};

export default contentLp03;
