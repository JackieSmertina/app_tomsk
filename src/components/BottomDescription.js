import React from 'react';

function BottomDescription() {
  return (
    <div className="bottom_desc">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 bottom_content">
            <section>
              <h3>Преданные своему делу психологи, заботящиеся о вашем благополучии</h3>
              <p>Ассоциация практикующих психологов (АПП) — это профессиональная ассоциация, представляющая интересы всех наших членов. Все наши психологи имеют квалификацию для ведения психологической практики. АПП стремится обеспечить максимально высокие профессиональные стандарты.</p>
              <a href="/public-protection" className="btn">Узнать больше</a>
            </section>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <section>
              <img src="./images/image1.png" alt="Psychologists" />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomDescription;