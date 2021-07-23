import React, {Component} from 'react';
import $ from "jquery";

class Dog extends Component {
    constructor(props) {
        super(props)
        this.state = {dogPicture: {} }
    }

    componentDidMount() {
        $.get("https://random.dog/woof.json", (image) => {
            this.setState({dogPicture: image, limit: 1, size:'full'})

        })
    }

    randomise() {
        window.location.reload();
    }

    render() {
        return(
            <div>
                <h3 id = 'dog-heading'>Dog Generator</h3>
                <img id = 'dog-image' src ={this.state.dogPicture.url} />
                <button id ='dog-button' onClick = {this.randomise}>Click Me!</button>
            </div>
        )
    }
}

export default Dog;