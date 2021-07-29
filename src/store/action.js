// import axios from 'axios'
const actions = {
    increase({commit},num){
        commit('increament',num)

    },
    // async login({commit},details){
        // let url = "http://localhost:8000/api/login";
        // const response = await axios.post(url,details)
        // console.log(response.data); 
        // console.log(response.status)
        // commit('response_login',response.data);
    // }
}
export default actions