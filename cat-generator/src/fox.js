import React, {Component} from 'react';
import $ from "jquery";

class Fox extends Component {
    constructor(props) {
        super(props)
        this.state = {foxPicture: {} }
    }

    componentDidMount() {
        $.get("https://randomfox.ca/floof/", (image) => {
            this.setState({foxPicture: image, limit: 1, size:'full'})

        })
    }

    randomise() {
        window.location.reload();
    }

    render() {
        return(
            <div>
                <h4 id = 'fox-heading'>Fox Generator</h4>
                <img id = 'fox-image' src ={this.state.foxPicture.image} />
                <button id ='fox-button' onClick = {this.randomise}>Click Me!</button>
            </div>
        )
    }
}

export default Fox;