import FilteredServices from "../../components/ui/FilteredServices";

const ServicesPage = async ({ searchParams }) => {
    const res = await fetch("http://localhost:5000/services", {
        // cache: "no-cache",
        next: {
            tags: ["services"],
        },
    });
    const services = await res.json();

    return (
        <div>
            <FilteredServices services={services} searchParams={searchParams}></FilteredServices>
        </div>
    );
};

export default ServicesPage;