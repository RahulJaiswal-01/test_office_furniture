import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Hero.css';

// Sample data
const slides = [
  {
    id: 1,
    title: "Premium Office Chairs",
    description: "Ergonomic designs for maximum comfort",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd",
    cta: "Shop Now"
  },
  {
    id: 2,
    title: "Modern Workstations",
    description: "Boost productivity with our sleek designs",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
    cta: "Explore"
  },
  {
    id: 3,
    title: "Conference Room Solutions",
    description: "Professional setups for effective meetings",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
    cta: "View Collection"
  }
];

const Hero = () => {
  return (
    <section id="home" className="hero">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-content">
              <div className="text-content">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                <button className="cta-button">{slide.cta}</button>
              </div>
              <div className="image-content">
                <img 
                  src={`${slide.image}?auto=format&fit=crop&w=1350&q=80`} 
                  alt={slide.title}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;