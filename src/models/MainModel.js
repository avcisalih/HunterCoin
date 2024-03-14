import axios from "axios";

// anasayfanın model katmanı
export default class MainModel {
    static async getCoins(page){
        try{
            const params = {
                offset:(page - 1) * 5,
                limit: 7,
            }
            const res = await axios.get("https://api.coincap.io/v2/assets",{params});

           
            return res.data.data;
        } catch(err){
            console.log(err)
        }
    }
}

