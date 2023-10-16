import ManageUserTable from '../../../../components/tables/ManageUserTable'

const ManageUser = async () => {
    const res = await fetch("http://localhost:5000/users", {
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