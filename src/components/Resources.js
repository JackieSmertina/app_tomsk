import React from 'react';

function Resources() {
  const resources = [
    {
      id: 'pink',
      title: 'КОФЕ С ПСИХОЛОГОМ',
      text: '1111',
      link: '/resource/behavioural-medicine'
    },
    {
      id: 'white',
      title: 'СЕМИНАР "ЖЕНА ИЛИ МАМА, КТО ГЛАВНЕЕ?"',
      text: '222',
      link: '/resource/neuropsychology'
    },
    {
      id: 'purple',
      title: 'ГОРЯЧЕЕ КРЕСЛО',
      text: '333',
      link: '/resource/cognitive-science'
    }
  ];

  return (
    <div className="resource_wrapper">
      <div className="container">
        <h2>МЕРОПРИЯТИЯ</h2>
        <div className="row">
          {resources.map((resource, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-4">
              <section id={resource.id}>
                <h5>{resource.title}</h5>
                <p>{resource.text}</p>
                <a href={resource.link} className="ben-link">Read More</a>
              </section>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resources;