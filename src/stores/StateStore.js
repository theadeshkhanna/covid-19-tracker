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
                this.data = res.data.statewise;
                this.loading = false;
            }).catch((res) => {
                this.error = res.data.message;
                this.loading = false;
        });
    }
}

const store = new StateStore();
export default store;
