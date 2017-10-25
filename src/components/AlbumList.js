import React, { Component } from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {
    constructor(props) {
        super(props);
    }

    state = { movies: [] };
    componentWillMount(props) {

        let url = this.props.url;
        console.log('Apiurl', url);
        movieUrl = "https://api.themoviedb.org/3/movie/popular?api_key=ab7f35103dac044075517a15da238890";
        songsUrl = "https://rallycoding.herokuapp.com/api/music_albums";
        if (url == movieUrl) {
            fetch(url)
                .then(response => response.json())
                .then(responseJson => this.setState({ movies: responseJson.results }))
                .catch(error => console.log(error));
        }
        else if (url == songsUrl) {
            fetch(url)
                .then(response => response.json())
                .then(responseJson => this.setState({ movies: responseJson }))
                .catch(error => console.log(error));
        }

    }
   
   
    renderMovies(props) {
        let url = this.props.url;
         let { navigate, setParams } = this.props.navigation;

        if (url == movieUrl) {

            return this.state.movies.map(movie =>
                <TouchableOpacity onPress={() => navigate("DetailScreen", {}, { type: "Navigation/NAVIGATE", routeName: "DetailScreen", params: { title: movie.title ,date :movie.release_date,average:movie.vote_average,image :"https://image.tmdb.org/t/p/w185" + movie.poster_path,overview:movie.overview} })}>
                    <View style={styles.containerStyle} >
                        <Image key={movie.poster_path} style={{ width: 60, height: 60, margin: 5 }}
                            source={{ uri:"https://image.tmdb.org/t/p/w185" + movie.poster_path }}
                        />
                        <Text key={movie.title} >{movie.title}
                        </Text>
                    </View>
                </TouchableOpacity>
            );

        }
        else {
            return this.state.movies.map(movie =>
                <View style={styles.containerStyle} >
                    <Image key={movie.image} style={styles.imageStyle}
                        source={{ uri: movie.image }}
                    />
                    <Text key={movie.title} >{movie.title}
                    </Text>
                </View>);
        }


    }
    render() {
        console.log('component will mount', this.props);
        console.log(this.state);
        return (
            <ScrollView>

                {this.renderMovies()}

            </ScrollView>

        );
    }


}
const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        flex: 1,
        flexDirection: 'row',
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    },
    imageStyle:{
        width: 60,
        height: 60, 
        margin: 5 
    }

};

export default AlbumList;