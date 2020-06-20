import { observable, action } from "mobx";
import axios from "../axios-instance";

class StateStore {
    @observable data = null;

    @action getData = () => {
        axios.get("/data.json")
            .then((res) => {
                console.log(res.data.statewise);
            }).catch((res) => {
            console.log(res.data);
        });
    }
}

const store = new StateStore();
export default store;
