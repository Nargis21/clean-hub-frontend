import FilteredServices from "../../components/ui/FilteredServices";
import getAllServices from '../../apiServices/services/getAllServices'

const ServicesPage = async ({ searchParams }) => {

    const services = await getAllServices()
    console.log(services);
    return (
        <div>
            <FilteredServices services={services} searchParams={searchParams}></FilteredServices>
        </div>
    );
};

export default ServicesPage;