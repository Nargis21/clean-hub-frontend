'use server'

const getAllServices = async () => {
    const res = await fetch("http://localhost:5000/services", {
        // cache: "no-cache",
        next: {
            tags: ["services"],
        },
    });
    const services = await res.json();
    if (res.ok && services) {
        return services
    } else {
        return []
    }
};
export default getAllServices