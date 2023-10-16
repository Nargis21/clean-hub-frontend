import ManageServiceTable from '../../../../components/tables/ManageServiceTable'

const ManageService = async () => {
    const res = await fetch("https://clean-hub-backend.vercel.app/services", {
        cache: "no-cache",
    });
    const services = await res.json();

    return (
        <div>
            <ManageServiceTable services={services}></ManageServiceTable>
        </div>
    );
};

export default ManageService;