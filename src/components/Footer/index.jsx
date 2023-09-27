import {
  AiOutlineWhatsApp,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillHouseFill } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";

export default function Footer() {
  return (
    <footer>
      <div>
        <span>Get connected with us on social networks:</span>
        <span>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            style={{ all: "unset" }}
          >
            {" "}
            <AiOutlineFacebook />
          </a>
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            style={{ all: "unset" }}
          >
            {" "}
            <FiTwitter />
          </a>
          <a
            href="https://www.instagram.com/diogoo_0202/#"
            target="_blank"
            rel="noopener noreferrer"
            style={{ all: "unset" }}
          >
            {" "}
            <AiOutlineInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/diogo-ma%C3%A7al-3b37b224a/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ all: "unset" }}
          >
            {" "}
            <AiOutlineLinkedin />
          </a>
          <a
            href="https://github.com/henryFranz"
            target="_blank"
            rel="noopener noreferrer"
            style={{ all: "unset" }}
          >
            {" "}
            <AiOutlineGithub />
          </a>
        </span>
      </div>
      <div>
        <div>
          <span> XHEALTH </span>
          <span>
            Não tente <strong> ser perfeito</strong> apenas tente ser melhor do
            que você foi ontem
          </span>
        </div>
        <div>
          <span>PRODUCTS</span>
          <span>MUSCULAÇÃO</span>
          <span> MUAY THAI </span>
          <span>HIIT </span>
          <span>ZUMBA</span>
        </div>
        <div>
          <span>USEFUL LINKS</span> <span>Pricing Settings Orders Help</span>
        </div>
        <div>
          <span>CONTACT</span>
          <span>
            <BsFillHouseFill /> New York, NY 10012, US
          </span>
          <span>
            <HiOutlineMail /> XHealth@gmail.com
          </span>
          <span>
            {" "}
            <AiOutlineWhatsApp /> +55 11 96760-03378
          </span>
          <span>
            {" "}
            <AiOutlineWhatsApp /> +55 27 98800-4330
          </span>
        </div>
      </div>
      <div>Feito com amor por Henry &copy; 2023</div>
    </footer>
  );
}
