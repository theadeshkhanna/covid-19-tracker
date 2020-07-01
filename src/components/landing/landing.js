import React, {Component} from "react";
import classes from "./landing.css";
import {inject, observer} from "mobx-react";
import Spinner from "../Spinner/Spinner";
import {toJS} from "mobx";

@inject("StateStore")
@observer
class Landing extends Component {

    componentDidMount() {
        this.props.StateStore.getData();
    };

    render() {
        let pageData = null;
        if (this.props.StateStore.data !== null) {
            this.props.StateStore.data
                .filter(obj => (obj.state === "Total"))
                // eslint-disable-next-line array-callback-return
                .map((o, i) => {
                    console.log(toJS(o));
                });
            pageData = <p>hi</p>

        } else {
            pageData = <Spinner />
        }
        return pageData;
    }
}

export default Landing;
