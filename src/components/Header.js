// src/components/Header.js
import React from 'react';

function Header() {
  return (
    <header>
      {/* Удаляем весь блок с logo_wrapper, где сейчас соцсети */}
      <div className="menu_wrapper">
        <div className="container">
          <div className="menu-container">
            {/* Логотип */}
            <a className="logo" href="/">
              <img className="logo" src="./images/logo.png" alt="APP Logo" />
            </a>

            {/* Меню */}
            <div className="menu-section">
              <button className="menu_round" onClick={() => console.log('Toggle menu')}>☰</button>
              <ul className="menu">
                {/* Меню */}
                <li><a href="/">Главная</a></li>
                <li>
                  <a href="#" role="button" tabIndex="0">О нас</a>
                  <ul className="drpdwn">
                    <li><a href="/About">История создания Aссоциации</a></li>
                    <li><a href="/public-protection">Этический кодекс</a></li>
                    <li><a href="/rci-registration">Памятные моменты</a></li>
                    <li><a href="/executives">Руководители</a></li>
                  </ul>
                </li>
                <li>
                  <a href="join_association">Вступить в Aссоциацию</a>
  
                </li>
                <li><a href="/resources">Для коллег</a></li>
                <li><a href="/membership-directory">Для общества</a></li>
                <li><a href="/premium-members">События</a></li>
                <li><a href="/find-psychologist">Наши специалисты</a></li>
              </ul>
            </div>

            {/* Социальные сети - перемещаем сюда */}
            <div className="social-links">
              <a href="https://vk.com/spp_psy_tomsk" target="_blank" rel="noopener noreferrer">
                <img src="./images/vk-icon.png" alt="VK" />
              </a>
              <a href="https://t.me/spp_psy_tomsk" target="_blank" rel="noopener noreferrer">
                <img src="./images/telegram-icon.png" alt="Telegram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;