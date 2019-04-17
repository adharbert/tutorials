import React, { Component } from 'react'

export class ImageCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spans: 0
        }

        this.imageRef = React.createRef();
    }

    componentDidMount() {        
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        console.log(this.imageRef.current.clientHeight);
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        this.setState({ spans });
    }

    render() {
        const { alt_description, urls } = this.props.image;

        
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
                <img alt={alt_description} 
                    ref={this.imageRef}
                    src={urls.small} />
            </div>
        )
    }
}

export default ImageCard

