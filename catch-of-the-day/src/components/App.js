import React from 'react';
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import Fish from "./Fish";
import sampleFishes from "../sample-fishes";

class App extends React.Component{
    state={
        fishes: {},
        order: {}
    };

    addFish = fish =>{
        //Copy of existing state
        const fishes = {...this.state.fishes};
        //Add fish to the fishes variable
        fishes[`fish${Date.now()}`] = fish;
        //Update state
        this.setState({fishes})
    }

    loadSampleFishes = () => {
        this.setState({fishes: sampleFishes});
    }

    addToOrder = (key) => {
        //Take a copy of state
        const order = {...this.state.order};
        //Either add to order or update
        order[key] = order[key] +1 || 1;
        //Set State
        this.setState({order});
    }

    render(){
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"/>
                    <ul className="fishes">
                       {Object.keys(this.state.fishes).map(key => (
                           <Fish index={key} key={key} details={this.state.fishes[key]} addToOrder={this.addToOrder}/>
                        ))}
                    </ul>
                </div>
                <Order/>
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
            </div>
        )
    }
}

export default App;