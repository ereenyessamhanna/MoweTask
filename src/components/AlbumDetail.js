import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
//import Card from './Card';

class AlbumDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var { params } = this.props.navigation.state;
        let title = params.title;
        let image = params.image;
        let date = params.date;
        let average = params.average;
        let overview = params.overview;
        console.log('date', date + average + title + image);



        return (
            <View style ={styles.containerStyle}>
                <Text style={styles.textStyle}>
                {title}
                </Text >
                <Image  source={{ uri: image }} style={styles.imageStyle}>
                </Image>
                <Text style={styles.textStyle}>
                Date :{date}
                </Text>
                <Text style={styles.textStyle}>
                Average Vote: {average}/10
                </Text>
                <Text style={styles.textStyle} >
                {overview}
                </Text>

            </View>
        );
    }

}
const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
      
    },
    imageStyle: {
        width: 350,
        height: 200,
        justifyContent: "center",
        resizeMode: "contain", 
        
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign :'center',

    }

};
export default AlbumDetail;