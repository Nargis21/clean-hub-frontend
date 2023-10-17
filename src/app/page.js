import Banner from '../components/ui/Banner'
import FeaturedServices from '../components/ui/FeaturedServices'
import AboutUs from '../components/ui/AboutUs'
import Package from '../components/ui/Package'


const HomePage = async () => {
  const res = await fetch("https://clean-hub-backend.vercel.app/services",
    {
      cache: 'no-store'
    }
  );
  const services = await res.json();

  return (
    <div>
      <Banner />
      <FeaturedServices services={services} />
      <AboutUs />
      <Package />
    </div>
  );
};

export default HomePage;