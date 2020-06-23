import { observable, action } from "mobx";
import axios from "../axios-instance";

class DistrictStore {
    @observable data = null;
    @observable error = null;
    @observable loading = false;

    @action getDistrictData = () => {
        this.loading = true;
        axios.get("/state_district_wise.json")
            .then((res) => {
                this.data = res.data;
                this.loading = false;
            }).catch((res) => {
                this.error = res.data.message;
                this.loading = false;
        });
    }
}

const store = new DistrictStore();
export default store;
