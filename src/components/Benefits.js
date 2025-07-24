// src/components/Benefits.js
import React from 'react';
import { Link } from 'react-router-dom';

function Benefits() {
  const benefits = [
    {
      icon: `${process.env.PUBLIC_URL}/images/benefit-icon1.png`,
      title: 'Направления психотерапии',
      text: 'Здесь можно выбрать не только своего специалиста, но и ознакомиться с различными направлениями психотерапии, задать интересующие вас вопросы.',
      link: '/benefits/directions'
    },
    {
      icon: `${process.env.PUBLIC_URL}/images/benefit-icon2.png`,
      title: 'Психотерапевтические группы',
      text: 'Психотерапевтическая группа – это сообщество людей, объединённых с целью решения проблем и внутренних конфликтов каждого участника.',
      link: '/benefits/grupp_psy'
    },
    {
      icon: `${process.env.PUBLIC_URL}/images/benefit-icon3.png`,
      title: 'Открытые семинары',
      text: 'Открытые семинары представляют собой обсуждение различных психологических тем.',
      link: '/benefits/seminars'
    },
    {
      icon: `${process.env.PUBLIC_URL}/images/benefit-icon4.png`,
      title: 'Интервизионные группы',
      text: 'В нашей Ассоциации проводятся регулярные встречи, на которых мы еженедельно разбираем кейсы участников, трудности, которые встречаются в нашей непростой работе, феномены, с которыми встречаемся в процессе консультирования и многое другое.',
      link: '/benefits/intervision'
    },
    {
      icon: `${process.env.PUBLIC_URL}/images/benefit-icon5.png`,
      title: 'Тренинговый раздел. Обучение.',
      text: 'Открыты к предложениям различных тем и в будущем будем нарабатывать свою базу готовых мероприятий.',
      link: '/benefits/tr'
    }
  ];

  return (
    <div className="benefits_wrapper">
      <div className="container">
        <h2>Что мы можем предложить</h2>
        <div className="row">
          {benefits.map((benefit, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-4">
              <section>
                <img src={benefit.icon} alt={`Benefit ${index + 1}`} />
                <h5 dangerouslySetInnerHTML={{ __html: benefit.title }}></h5>
                <p>{benefit.text}</p>
                <Link to={benefit.link} className="ben-link">Узнать больше</Link>
              </section>
            </div>
          ))}
          <div className="col-12 col-sm-6 col-md-4 col-lg-4">
            <section className="benefit_join">
              <article>
                <h4>ПРИСОЕДИНЯЙТЕСЬ К СООБЩЕСТВУ<br />ПРОФЕССИОНАЛЬНЫХ ПСИХОЛОГОВ</h4>
                <Link to="/join_association" className="btn">ВСТУПИТЬ В АПП</Link>
              </article>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
