import ServiceDetails from "../../../components/ui/ServiceDetails";

const ServiceDetailsPage = async ({ params }) => {
    const serviceId = params.serviceId;
    const res = await fetch(`https://clean-hub-backend.vercel.app/services/${serviceId}`, {
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