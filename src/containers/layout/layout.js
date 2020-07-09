import React, {Component, Fragment} from "react";
import { Switch, Route } from "react-router";
import Landing from "../../components/landing/landing";
import StateWise from "../../components/stateWise/stateWise";
import DistrictWise from "../../components/districtWise/districtWise";
import DistrictDaily from "../../components/districtDaily/districtDaily";
import Navigation from "../../components/UI/Navigation/Navigation";
import KnowTheDeveloper from "../../components/KnowTheDeveloper/KnowTheDeveloper";
import classes from "./layout.css";

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Navigation />
                <div className={classes.All}>
                    <Switch>
                        <Route path="/KnowTheDeveloper" exact component={KnowTheDeveloper} />
                        <Route path="/state-wise" exact component={StateWise} />
                        <Route path="/district-wise" exact component={DistrictWise} />
                        <Route path="/district-daily" exact component={DistrictDaily} />
                        <Route path="/" exact component={Landing} />
                    </Switch>
                    <div>
                        <img src={require("../../assets/covid.svg")} alt="covid" className={classes.Covid1}/>
                        <img src={require("../../assets/hand soap.svg")} alt="hand soap" className={classes.HandSoap1}/>
                        <img src={require("../../assets/hand wash.svg")} alt="hand wash" className={classes.HandWash1}/>
                        <img src={require("../../assets/no hand shake.svg")} alt="hand shake" className={classes.HandShake1}/>
                        <img src={require("../../assets/mask.svg")} alt="mask" className={classes.Mask1}/>
                        <img src={require("../../assets/covid.svg")} alt="covid" className={classes.Covid2}/>
                        <img src={require("../../assets/hand soap.svg")} alt="hand soap" className={classes.HandSoap2}/>
                        <img src={require("../../assets/hand wash.svg")} alt="hand wash" className={classes.HandWash2}/>
                        <img src={require("../../assets/no hand shake.svg")} alt="hand shake" className={classes.HandShake2}/>
                        <img src={require("../../assets/mask.svg")} alt="mask" className={classes.Mask2}/>
                        <img src={require("../../assets/hand wash.svg")} alt="hand wash" className={classes.HandWash3}/>
                        <img src={require("../../assets/mask.svg")} alt="mask" className={classes.Mask3}/>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Layout;
