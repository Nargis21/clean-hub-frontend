import Banner from '../components/ui/Banner'
import FeaturedServices from '../components/ui/FeaturedServices'
import AboutUs from '../components/ui/AboutUs'
import Package from '../components/ui/Package'
import Testimonial from '../components/ui/Testimonial'
import Booking from '../components/ui/Booking'
import BackToTop from '../components/shared/BackToTop'


const HomePage = async () => {
  const res = await fetch("https://clean-hub-backend.vercel.app/services",
    {
      cache: 'no-store'
    }
  );
  const services = await res.json();

  return (
    <div>
      <BackToTop />
      <Banner />
      <FeaturedServices services={services} />
      <AboutUs />
      <Package />
      <Testimonial />
      <Booking />
    </div>
  );
};

export default HomePage;