import React from 'react';

function JoinSection() {
  return (
    <div className="join_wrapper">
      <div className="join_ad">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <section>
                <img src="./images/image2.png" alt="Join us" style={{ width: '500px', height: 'auto' }} />
              </section>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 join_box">
              <section>
                <h3>ПРИСОЕДИНЯЙСЯ К НАМ</h3>
                <p>АПП - это коллективное сообщество, которое тепло приветствует и открыто для профессионалов, желающих присоединиться к нам.</p>
                <a href="/package" className="btn">Вступить в АПП</a>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className="join_content">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <section>
                <h3>111</h3>
                <a href="/membership-directory" className="btn">111</a>
              </section>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <section>
                <h3>111</h3>
                <p>111</p>
                <a href="/find-accredited-centers" className="btn">111</a>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinSection;