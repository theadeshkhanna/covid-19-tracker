import {observable, action} from "mobx";
import axios from "../axios-instance";

class DistrictDailyStore {
    @observable data = null;
    @observable error = null;
    @observable loading = false;

    @action getDistrictDailyData = () => {
        this.loading = true;
        axios.get("/districts_daily.json")
            .then((res) => {
                this.data = res.data;
                this.loading = false;
            }).catch((res) => {
            this.error = res.data.message;
            this.loading = false;
        });
    }
}

const store = new DistrictDailyStore();
export default store;
