
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerContainer">
        {/* SOL SÜTUN */}
        <div className="footerColumn">
          <img
            src="/images/iteration-2-images/footer/logo-footer.svg"
            alt="Teknolojik Yemekler"
            className="footerLogo"
          />

          <address className="footerContact">
            <a className="footerItem" href="#">
              <img
                src="/images/iteration-2-images/footer/icons/icon-1.png"
                alt=""
                className="footerIcon"
              />
              <span>
                341 Londonderry Road,
                <br />
                Istanbul Türkiye
              </span>
            </a>

            <a
              className="footerItem"
              href="mailto:aciktim@teknolojikyemekler.com"
            >
              <img
                src="/images/iteration-2-images/footer/icons/icon-2.png"
                alt=""
                className="footerIcon"
              />
              <span>aciktim@teknolojikyemekler.com</span>
            </a>

            <a className="footerItem" href="tel:+902161234567">
              <img
                src="/images/iteration-2-images/footer/icons/icon-3.png"
                alt=""
                className="footerIcon"
              />
              <span>+90 216 123 45 67</span>
            </a>
          </address>
        </div>

        {/* ORTA SÜTUN */}
        <div className="footerColumn">
          <h4 className="footerTitle">Hot Menu</h4>
          <nav className="footerMenu">
            <a className="footerLink">Terminal Pizza</a>
            <a className="footerLink">5 Kişilik Hackathlon Pizza</a>
            <a className="footerLink">useEffect Tavuklu Pizza</a>
            <a className="footerLink">Beyaz Console Frosty</a>
            <a className="footerLink">Testler Geçti Mutlu Burger</a>
            <a className="footerLink">Position Absolute Acı Burger</a>
          </nav>
        </div>

        {/* SAĞ SÜTUN */}
        <div className="footerColumn">
          <h4 className="footerTitle">Instagram</h4>
          <div className="footerGallery">
            <img src="/images/iteration-2-images/footer/insta/li-0.png" alt="" />
            <img src="/images/iteration-2-images/footer/insta/li-1.png" alt="" />
            <img src="/images/iteration-2-images/footer/insta/li-2.png" alt="" />
            <img src="/images/iteration-2-images/footer/insta/li-3.png" alt="" />
            <img src="/images/iteration-2-images/footer/insta/li-4.png" alt="" />
            <img src="/images/iteration-2-images/footer/insta/li-5.png" alt="" />
          </div>
        </div>
      </div>

      {/* ALT BAR */}
      <div className="footerBottom">
        <span className="footerCopyright">
          ©2023 Teknolojik Yemekler.
        </span>
        <i className="fa-brands fa-twitter footerSocial"></i>
      </div>
    </footer>
  );
}
