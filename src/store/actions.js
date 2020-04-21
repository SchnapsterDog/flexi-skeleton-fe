import client from 'api-client';
//const apiUrl = process.env.VUE_APP_API_URL;
//const token = process.env.VUE_APP_SECRET;

export default {
    fetchData({ commit }) {
        return client
            .fetchData()
            .then(data => commit('setData', data))
    },
    setBurger({ commit }) {
        commit('updateBurger');
    },
    calculateData() {
        // var xhr = new XMLHttpRequest();
        // xhr.withCredentials = false;

        // xhr.addEventListener("readystatechange", function () {
        //     if (this.readyState === 4) { 
        //         commit('updateData', JSON.parse(this.responseText));
        //     }
        // });


        // xhr.open("POST", `${apiUrl}`);
        // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        // xhr.setRequestHeader(
        //     "Authorization",
        //     `Bearer ${token}`
        // );
        // xhr.setRequestHeader("htmlContent", encodeURI(content));
        // xhr.setRequestHeader("Accept", "*/*");
        // xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
        // xhr.setRequestHeader("Access-Control-Allow-Headers", "*");
        // xhr.setRequestHeader("cache-control", "no-cache");
        // xhr.send();        
    }
}