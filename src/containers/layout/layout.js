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
                <div>
                    <Switch>
                        <Route path="/KnowTheDeveloper" exact component={KnowTheDeveloper} />
                        <Route path="/state-wise" exact component={StateWise} />
                        <Route path="/district-wise" exact component={DistrictWise} />
                        <Route path="/district-daily" exact component={DistrictDaily} />
                        <Route path="/" exact component={Landing} />
                    </Switch>
                    <div>
                        <img src={require("../../assets/covid.svg")} alt="covid" className={classes.Covid}/>
                        <img src={require("../../assets/hand soap.svg")} alt="hand soap" className={classes.HandSoap}/>
                        <img src={require("../../assets/hand wash.svg")} alt="hand wash" className={classes.HandWash}/>
                        <img src={require("../../assets/no hand shake.svg")} alt="hand shake" className={classes.HandShake}/>
                        <img src={require("../../assets/mask.svg")} alt="mask" className={classes.Mask}/>
                        <img src={require("../../assets/covid.svg")} alt="covid" className={classes.Covid}/>
                        <img src={require("../../assets/hand soap.svg")} alt="hand soap" className={classes.HandSoap}/>
                        <img src={require("../../assets/hand wash.svg")} alt="hand wash" className={classes.HandWash}/>
                        <img src={require("../../assets/no hand shake.svg")} alt="hand shake" className={classes.HandShake}/>
                        <img src={require("../../assets/mask.svg")} alt="mask" className={classes.Mask}/>
                        <img src={require("../../assets/covid.svg")} alt="covid" className={classes.Covid}/>
                        <img src={require("../../assets/hand soap.svg")} alt="hand soap" className={classes.HandSoap}/>
                        <img src={require("../../assets/hand wash.svg")} alt="hand wash" className={classes.HandWash}/>
                        <img src={require("../../assets/no hand shake.svg")} alt="hand shake" className={classes.HandShake}/>
                        <img src={require("../../assets/mask.svg")} alt="mask" className={classes.Mask}/>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Layout;
