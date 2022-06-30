import getInstance from "./instance";

const getUsers = async (search)=> {
    const instance =getInstance();
    const res = instance.get(search);
    return res.data;
};
export default getUsers;