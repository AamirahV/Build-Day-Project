import React, {Component} from 'react';
import $ from "jquery";

class Cat extends Component {
    constructor(props) {
        super(props)
        this.state = {catPicture: {} }
    }

    componentDidMount() {
        $.get("https://api.thecatapi.com/v1/images/search", (image) => {
            this.setState({catPicture: image[0], limit: 1, size:'full'})

        })
    }

    randomise() {
        window.location.reload();
    }

    render() {
        return(
            <div>
                <h2 id = 'cat-heading'>Cat Generator</h2>
                <img id = 'cat-image' src ={this.state.catPicture.url} />
                <button id ='cat-button' onClick = {this.randomise}>Click Me!</button>
            </div>
        )
    }
}

export default Cat;