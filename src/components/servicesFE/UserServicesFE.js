import axios from "axios"
export const loginUser = async (data) => {
    const res = await axios.post(`https://backend-phucapp.onrender.com/api/user/sign-in`,data)
    return res
}
export const signupUser = async (data) => {
    const res = await axios.post(`https://backend-phucapp.onrender.com/api/user/sign-up`,data)
    return res
}
export const getDetailsUser = async (id,access_token) => {
    const res = await axios.get(`https://backend-phucapp.onrender.com/api/user/get-details/${id}`,{
        headers:{
            token: `Bearer ${access_token}`,
        }
    })
    return res
}
export const createProducts = async (data) => {
    const res = await axios.post(`https://backend-phucapp.onrender.com/api/product/create`,data)
    return res
}
export const GetAllProduct = async (data) => {
    const res = await axios.get(`https://backend-phucapp.onrender.com/api/product/get-all`,data)
    return res
}
export const deleteProduct = async (id) => {
    const res = await axios.delete(`https://backend-phucapp.onrender.com/api/product/delete-product/${id}`)
    return res
}