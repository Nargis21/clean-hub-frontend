import getSingleService from "../../../apiServices/services/getSingleService";
import ServiceDetails from "../../../components/ui/ServiceDetails";

const ServiceDetailsPage = async ({ params }) => {
    const serviceId = params.serviceId;
    const service = await getSingleService(serviceId)
    return (
        <div>
            <ServiceDetails service={service}></ServiceDetails>
        </div>
    );
};

export default ServiceDetailsPage;