import React, {Fragment} from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component{
    myInput = React.createRef();

    goToStore = event => {
        //Stop browser from reloading
        event.preventDefault();
        //Get the value from the input
        const storeName = this.myInput.value.value;
        //Change the page to go to the store page
        this.props.history.push(`/store/${storeName}`);
    }

    render(){
        return(
            <Fragment>
                <form className="store-selector" onSubmit={this.goToStore}>
                    <h2>Please Enter A Store!</h2>
                    <input type="text" ref={this.myInput}  required placeholder ="Store Name" defaultValue={getFunName()} />
                    <button type="submit">Visit Store</button>
                </form>
            </Fragment>
        )
    }
}

export default StorePicker;
