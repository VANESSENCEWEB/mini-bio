import { FaLinkedinIn, FaWhatsapp, FaGithub } from "react-icons/fa";

function Header() {
  return (
    <header className="header">
      <img
        className="foto"
        src="https://placehold.co/150x150"
        alt="Minha foto"
      />
      <h1>Vanessa Lima</h1>
      <p className="bio">
        Estudante de Sistemas para Internet na UNICAP.
        Apaixonada por desenvolvimento web.
      </p>

      <div className="redes">
        <a href="https://linkedin.com/in/vanessa-lima-dev" className="rede linkedin">
          <FaLinkedinIn />
        </a>
        <a href="https://wa.me/558199186878" className="rede whatsapp">
          <FaWhatsapp />
        </a>
        <a href="https://github.com/VANESSENCEWEB" className="rede github">
          <FaGithub />
        </a>
      </div>
    </header>
  );
}

export default Header;