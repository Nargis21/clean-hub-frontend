import ManageUserTable from '../../../../components/tables/ManageUserTable'

const ManageUser = async () => {
    const res = await fetch("https://clean-hub-backend.vercel.app/users", {
        cache: "no-cache",
    });
    const users = await res.json();

    return (
        <div>
            <ManageUserTable users={users}></ManageUserTable>
        </div>
    );
};

export default ManageUser;