import getInstance from "./instance";

const getRep = async (page, search)=> {
    const instance =getInstance();
    const res = instance.get (page,search)//?????
    return res.data;
};
export default getRep;