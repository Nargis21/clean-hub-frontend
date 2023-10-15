import FilteredServices from "../../components/ui/FilteredServices";

const ServicesPage = async () => {
    const res = await fetch("http://localhost:5000/services", {
        // cache: "no-cache",
        next: {
            tags: ["services"],
        },
    });
    const services = await res.json();



    return (
        <div>
            <FilteredServices services={services}></FilteredServices>
        </div>
    );
};

export default ServicesPage;