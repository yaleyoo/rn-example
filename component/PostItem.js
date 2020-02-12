import React, {Component} from 'react';
import { TouchableHighlight, View, Image, Text } from 'react-native';

export default class PostItem extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <TouchableHighlight underlayColor="rgb(210,210,210)" onPress={() => this.props.navigation.push('Detail', {postId: this.props.id})}>
                <View style={{flex: 1, flexDirection: 'row', paddingVertical: 5}}>
                    <View style={{flex: 1}}>
                        <Image style={{width: 50, height: 50}}
                            source={{uri: (this.props.image == null)? 'https://facebook.github.io/react-native/img/tiny_logo.png' : this.props.image }} />
                    </View>
                    <View style={{flex: 4}}>
                        <Text>{this.props.title}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}