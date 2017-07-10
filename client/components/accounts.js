/**
 * Created by User on 7/9/2017.
 */
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Template} from 'meteor/templating';
import {Blaze} from 'meteor/blaze';


class Accounts extends Component {
    componentDidMount(){
        //Render the Blaze accounts form then find the div
        //we just rendered in the render method and place
        //the Blaze accounts form in the div
        this.view = Blaze.render(Template.loginButtons,
            ReactDom.findDOMNode(this.refs.container));
    }

    componentWillUnmount(){
        //Go find the forms we created and destroy them
        //We need to cleanup those forms ourselves
        Blaze.remove(this.view);
    }

    render(){
        return (<div ref="container">
        </div>);
    }
}

export default Accounts;