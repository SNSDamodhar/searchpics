import React from 'react';
import unsplash from '../api/UnSplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {

    state = {
        images: []
    };

    //this function is to take search term from the user
    //query unsplash.com website with user's query
    //get results
    //handles response from unsplash.com
    //async and await are used to handle response
    onSearchSubmit = async (term) => {
        const response = await unsplash.get(
            'search/photos',
            {
                params: {
                    query: term
                },
            }
        );

        this.setState({ images: response.data.results });
    }

    render() {
        return(
            <div className = "ui continer" style = {{ marginTop: '10px' }}>
                <SearchBar userOnSubmit = { this.onSearchSubmit }/>
                <ImageList images = {this.state.images} />
            </div>
        );
    }
    
}

export default App;