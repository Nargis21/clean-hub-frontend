
const getSIngleService = async (serviceId) => {
    const res = await fetch(`http://localhost:5000/services/${serviceId}`, {
        // cache: "no-cache",
    });
    const service = await res.json();
    if (res.ok && service) {
        return service
    } else {
        return []
    }
};

export default getSIngleService;