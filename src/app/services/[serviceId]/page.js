import ServiceDetails from "../../../components/ui/ServiceDetails";

const ServiceDetailsPage = async ({ params }) => {
    const serviceId = params.serviceId;
    const res = await fetch(`http://localhost:5000/services/${serviceId}`, {
        // cache: "no-cache",
    });
    const service = await res.json();
    return (
        <div>
            <ServiceDetails service={service}></ServiceDetails>
        </div>
    );
};

export default ServiceDetailsPage;