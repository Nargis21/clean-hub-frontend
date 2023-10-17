import Banner from '../components/ui/Banner'
import Featured from '../components/ui/Featured'

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
      <Featured services={services} />
    </div>
  );
};

export default HomePage;