import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Clients.css';

const clients = [
  {
    id: 1,
    name: "TechCorp Inc.",
    logo: "https://via.placeholder.com/150x80?text=TechCorp",
    testimonial: "DEEP AS ENTERPRISES transformed our workspace with ergonomic solutions that boosted productivity by 30%."
  },
  {
    id: 2,
    name: "DesignHub Studio",
    logo: "https://via.placeholder.com/150x80?text=DesignHub",
    testimonial: "The quality and design of their furniture perfectly matches our creative environment."
  },
  {
    id: 3,
    name: "Global Solutions",
    logo: "https://via.placeholder.com/150x80?text=GlobalSol",
    testimonial: "From consultation to installation, their service was impeccable. Highly recommended!"
  }
];

const Clients = () => {
  return (
    <section id="clients" className="clients-section">
      <div className="container">
        <h2>Trusted By Leading Companies</h2>
        
        <div className="clients-grid">
          {clients.map(client => (
            <div key={client.id} className="client-card">
              <img src={client.logo} alt={client.name} className="client-logo" />
            </div>
          ))}
        </div>
        
        <div className="testimonials">
          <Swiper
            spaceBetween={30}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            modules={[Pagination, Autoplay]}
            className="testimonial-swiper"
          >
            {clients.map(client => (
              <SwiperSlide key={client.id}>
                <div className="testimonial-card">
                  <p className="testimonial-text">"{client.testimonial}"</p>
                  <p className="client-name">— {client.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Clients;