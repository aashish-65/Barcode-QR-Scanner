// import ComingSoon from "../assets/st-Coming-Soon.png";
import Devfolio from "../assets/devfolio_text.png";
import vercel from "../assets/vercel.png";
import lfx from "../assets/LFX_Education.png";
import cnd from "../assets/Cn dgp.png";
import bindu from "../assets/Bindu_with_fav.png";
import nshm_logo from "../assets/nshm_logo.jpeg";
import grafana from "../assets/grafana.png";
const sponsorsData = {
    platinum: [
        { name: 'Cloud Native Durgapur', logo: cnd },
        { name: 'NSHM', logo: nshm_logo },
    ],
    gold: [
        { name: 'Devfolio', logo: Devfolio, link: "https://devfolio.co", alt: "DEVFOLIO LOGO" },
    ],
    silver: [
        { name: 'Vercel', logo: vercel },
        { name: 'The Linux Foundation', logo: lfx },
        { name: 'Bindu', logo: bindu },
        { name: 'Grafana', logo: grafana },
    ],
};

export default sponsorsData;