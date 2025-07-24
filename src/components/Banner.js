import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Banner() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        }
      },
    ]
  };

  return (
    <div className="banner_wrapper">
      <div className="container">
        <Slider {...settings}>
          {/* Первый слайд */}
          <div>
            <div className="row">
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 banner_img">
                <section>
                  <img src="./images/banner100.png" alt="Join Community Banner" />
                </section>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 banner_content">
                <section>
                  <h3>Станьте частью<br />сообщества психологов!</h3>
                  <p>Присоединяйтесь к нашей активной сети профессионалов и расширьте свой кругозор в области психологии. Общайтесь с единомышленниками, получайте доступ к ценным ресурсам и отправляйтесь в путь профессионального роста и сотрудничества.</p>
                  <a href="/package" className="btn">ВСТУПИТЬ В АПП</a>
                </section>
              </div>
            </div>
          </div>

          {/* Второй слайд */}
          <div>
            <div className="row">
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 banner_img">
                <section>
                  <img src="./images/banner200.png" alt="APP Logo Banner" />
                </section>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 banner_content">
                <section>
                  <h3>Ассоциация <br />Практикующих <br />Психологов</h3>
                  <p>АПП - профессиональная организация, призванная представлять психологию в мировом масштабе.</p>
                  <a href="/public-protection" className="btn">О нас</a>
                </section>
              </div>
            </div>
          </div>

          {/* Третий слайд */}
          <div>
            <div className="row">
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 banner_img">
                <section>
                  <img src="./images/banner300.png" alt="Find Psychologist Banner" />
                </section>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 banner_content">
                <section>
                  <h3>Найдите своего союзника в вопросах психического здоровья: найдите психологов здесь!</h3>
                  <p>Получите необходимую поддержку, связавшись с психологами в АПП.  легко найти проверенных специалистов, которые помогут вам в поддержании вашего психического благополучия.</p>
                  <a href="/search" className="btn">Найти психолога</a>
                </section>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Banner;