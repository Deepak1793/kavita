import axios from "axios";

const USER_URL ='http://localhost:8282'
const FAV_URL='http://localhost:9093'

class Backendservice{

    registerUser(user){
        return axios.post(`${USER_URL}/register`,user);
    }

   loginUser(user) {
       return axios.post(`${USER_URL}/login`,user);  
   } 
   getlogout(){
       return axios.get(`${USER_URL}/logout`);
   }
   getTopArtists(){
    return axios.get(`${USER_URL}/topartists`);
}
getArtistdetails(name){
    return axios.get(`${USER_URL}/artists/${name}`,name);
}

getAllfavlist(name){
    return axios.get(`${FAV_URL}/getfavlist/${name}`,name);
}
addtoFav(favourite){
    return axios.post(`http://localhost:9093/addtofav`,favourite);
}
deleteFav(id){
 return axios.delete(`http://localhost:9093/deletefav/${id}/`,id);
}
getfavlistUser(userName){
    return axios.get(`${FAV_URL}/favlist/${userName}`,userName);
}
getAllRecommandlist(){
    return axios.get(`${FAV_URL}/getallrecommend`);
}
addtoRecommend(recommend){
     return axios.post(`${FAV_URL}/addtorecommend`,recommend);
 }
getRecommandUser(userName){
    return axios.get(`${FAV_URL}/reclist/${userName}`,userName);
}
}

export default new Backendservice();
