import { observable, action } from "mobx";
import axios from "../axios-instance";

class StateStore {
    @observable data = null;
    @observable loading = null;
    @observable error = null;

    @action getData = () => {
        this.loading = true;
        axios.get("/data.json")
            .then((res) => {
                this.loading = false;
                this.data = res.data.statewise;
            }).catch((res) => {
                this.loading = false;
                this.error = res.data.message;
        });
    }
}

const store = new StateStore();
export default store;
