import React from 'react';

class ImageCard extends React.Component {

    constructor(props) {
        super(props);

        //React references are used to reference some dom element
        //here we are referencing every single image to get its properties
        //like height, width etc to solve the grid system problems in css
        //By taking image height we can decide how much row span we can give for each image
        this.imageRef = React.createRef();

        this.state = {
            spans : 0
        };
    }

    componentDidMount() {
        console.log(this.imageRef);

        //here we are accessing the height of image but we will get 0 for every time
        //because we are accessing height immediately after component mount
        //but there is sometime between the actual image is loaded form the unsplash 
        //so it shows as 0 every time
        //console.log(this.imageRef.current.clientHeight);

        //to resolve above problem we are adding event listener for every image
        //to know when the image is loaded
        //after image is loaded we are finding the height
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height/10);
        this.setState({spans});
    }


    render() {
        return(
            <div style = {{gridRowEnd : `span ${this.state.spans}`}}>
                <img 
                    ref = {this.imageRef}
                    alt = {this.props.image.description}
                    src = {this.props.image.urls.regular}
                />
            </div>
        );
    }
}

export default ImageCard;