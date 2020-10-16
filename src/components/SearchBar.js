import React from 'react';

class SearchBar extends React.Component {

    state = {
        term: ''
    };

    //Handles when user changes the input 
    //event is a normal JS object
    //In jsx we call this function as this.onInputChange instead of this.onInputChange() because it is a call back function
    // if we use this.onInputChange() then whenever render() executes onInputchange() also executes but we dont want that 
    //we just want onInputchange() to be executed when user puts any character in input feild so we are using this.onInputChange
    /*onInputChange(event) {
        console.log(event.target.value); //Outputs what user types
    }*/


    componentDidUpdate() {
        console.log("Component Update");
    }

    //By default when user enter something and click on enter the page automatically reresh but we dont want that beaviour
    //so we can use this function
    onFormSubmit = (event) => {
        event.preventDefault();

        //console.log(this.state.term);//error, to get rid of this convert this function into arrow function from norma function
        
        //In class component we can access props by using this.props
        //below statement pass props from children to parent(App)
        this.props.userOnSubmit(this.state.term);
    }

    render() {
        return(
            <div className = "ui segment">
                <form className = "ui form" onSubmit = { this.onFormSubmit }>
                    <div className = "field">
                        <label>Image Search</label>
                        <input type = "text" value = { this.state.term } onChange = { event => this.setState({ term: event.target.value }) }/>
                        {/*<input type = "text" onChange = { this.onInputChange }/> */}
                        {/*<input type = "text" onChange = { event => console.log(event.target.value) }/>*/}
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default SearchBar;