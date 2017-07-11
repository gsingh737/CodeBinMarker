/**
 * Created by User on 7/9/2017.
 */
import React, {Component} from 'react';
import Accounts from './accounts';
import {Link, withRouter} from 'react-router-dom';

class Header extends Component
{

    onBinClick(event){
        event.preventDefault();
        Meteor.call('bins.insert', (error, bin) => {
            console.log(this);
            this.props.history.push(`/bins/${bin}`);
        });
    }


    render(){
     return(
         <nav className="nav navbar-default">
            <div className="navbar-header">
                <Link to="/" className="navbar-brand">Markbin</Link>
            </div>
             <ul className="nav navbar-nav">
                 <li>
                     <a><Accounts/></a>
                 </li>
                 <li>
                     <a href="#" onClick={this.onBinClick.bind(this)}>Create Bin</a>
                 </li>
             </ul>
         </nav>
     );
    }
}
export default withRouter(Header);
