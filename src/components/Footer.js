import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer_intro">
          <section>
            <img src={`${process.env.PUBLIC_URL}/images/footer_logo.png`} alt="Footer Logo" />
            <p>
              Ассоциация практикующих психологов (АПП) <br />Все наши профессиональные члены имеют квалификацию для ведения психологической практики  соответствии с кодексом поведения, этикета и этики. АПП стремится обеспечить максимально высокие профессиональные стандарты.<br />
            </p>
            <a href="/public-protection" className="btn">Узнать больше</a>
          </section>
        </div>
        <div className="footer_content">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <section>
                <h3>КОНТАКТЫ</h3>
                <ul className="footer_social_icons">
                  <a href="https://vk.com/spp_psy_tomsk" target="_blank" rel="noopener noreferrer">
                  <img src={`${process.env.PUBLIC_URL}/images/vk-icon.png`} alt="VK" style={{ width: '30px', height: '30px', borderRadius: '70%'}}/>
                </a>
                <a href="https://t.me/spp_psy_tomsk" target="_blank" rel="noopener noreferrer">
                  <img src={`${process.env.PUBLIC_URL}/images/telegram-icon.png`} alt="Telegram" style={{ width: '30px', height: '30px', borderRadius: '70%'}}/>
                   </a>
                </ul>
              </section>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <section>
                <h3>АДРЕС</h3>
                <p>АПП (Ассоциация практикующих психологов)<br />Ленина 55<br />2 этаж, 221 кабинет<br />Томск</p>
              </section>
            </div>
          </div>
        </div>
        <div className="footer_copyright">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <p>© 2025 Ассоциация Практикующих Психологов</p>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 text-end">
              <p>Разработано JeckS</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;