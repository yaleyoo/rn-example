import React, {Component} from 'react';
import { View, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import {getPosts} from '../utils/APIs';
import Constants from 'expo-constants';
import PostItem from '../component/PostItem';

export default class Homepage extends Component {
    state = {
        posts: []
    }

    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        getPosts()
        .then( (res) => res.json())
        .then( (resJson) => {
            this.setState({posts: resJson})
        })  
        .catch( (err) => {
            console.log(err);
        })  
    }

    render() {
        return(
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={this.state.posts}
                    keyExtractor={item => item.id+''}
                    renderItem={({item, index, separators}) => (
                        <PostItem {...this.props} title={item.title.rendered} image={item.type_img} id={item.id} />
                    )}
                />
            </SafeAreaView>
        )
    }
} 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
      marginHorizontal: '5%',
      width: '90%'
    },
});
