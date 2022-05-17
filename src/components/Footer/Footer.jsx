import './Footer.styles.scss';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <p className="footer__creator">
          created by&nbsp;
          <strong>Daniel Arteta Salazar</strong>
        </p>
        <div className="footer__social">
          <a
            rel="noreferrer"
            href="https://github.com/Danatts"
            target="_blank"
            className="footer__link"
          >
            GitHub
          </a>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/feed/"
            target="_blank"
            className="footer__link"
          >
            LinkedIn
          </a>
          <a
            rel="noreferrer"
            href="mailto: danielatts97@gmail.com"
            target="_blank"
            className="footer__link"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
