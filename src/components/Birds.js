import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('BirdStore')
@observer
class Birds extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.BirdStore.addBird(this.birdInput.value);
        e.target.reset();
    }

    render() { 
        const { BirdStore } = this.props;

        return (
            <div>
                <h1>You have { BirdStore.birdCount } birds!</h1>

                <form onSubmit={ e => this.handleSubmit(e) }>
                    <input
                        type="text"
                        ref={ input => ( this.birdInput = input ) }
                        placeholder = 'Add a bird'
                    />
                </form>

                <ul>
                    {
                        BirdStore.birds.map(bird => 
                            <li key={bird}>{bird}</li>
                        )
                    }
                </ul>
            </div>
        );
    }
}
 
export default Birds;