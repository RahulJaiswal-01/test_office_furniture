import { FaShippingFast, FaCogs, FaRulerCombined, FaHeadset, FaRecycle, FaDollarSign } from 'react-icons/fa';
import './Services.css';

const services = [
  {
    id: 1,
    icon: <FaShippingFast className="service-icon" />,
    title: "Fast Delivery",
    description: "Same-day delivery for local orders and expedited shipping nationwide."
  },
  {
    id: 2,
    icon: <FaCogs className="service-icon" />,
    title: "Custom Solutions",
    description: "Tailored furniture designs to match your specific workspace requirements."
  },
  {
    id: 3,
    icon: <FaRulerCombined className="service-icon" />,
    title: "Space Planning",
    description: "Professional layout designs for optimal space utilization and workflow."
  },
  {
    id: 4,
    icon: <FaHeadset className="service-icon" />,
    title: "Dedicated Support",
    description: "24/7 customer service for all your inquiries and after-sales support."
  },
  {
    id: 5,
    icon: <FaRecycle className="service-icon" />,
    title: "Eco-Friendly Options",
    description: "Sustainable materials and environmentally conscious products."
  },
  {
    id: 6,
    icon: <FaDollarSign className="service-icon" />,
    title: "Flexible Financing",
    description: "Lease-to-own and installment payment plans available."
  }
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Comprehensive Services</h2>
          <p className="section-subtitle">
            We provide end-to-end solutions to create your perfect workspace
          </p>
        </div>
        
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon-container">
                {service.icon}
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;