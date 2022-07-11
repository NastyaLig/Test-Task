import getInstance from "./instance";

const getRep = async (page, search)=> {
    const instance =getInstance();
    const res = await instance.get(`${search}/repos?per_page=4&page=${page}`);
    return res.data;
};
export default getRep;