import React, { Component } from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import {getPostDetail} from '../utils/APIs';
import Constants from 'expo-constants';
import { ScrollView } from "react-native-gesture-handler";

export default class PostDetail extends Component {
    state = {
        post: null
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        getPostDetail(this.props.route.params.postId).then(res => res.json())
        .then(resJson => {
            this.setState({post: resJson})
        })
    }

    render() {
        return (
            (!this.state.post)?
            <View></View>
            :
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View style={{flex: 1, marginBottom: 40 }}>
                        <Text>{this.state.post.title.rendered}</Text>
                    </View>
                    <View style={{flex: 1, marginBottom: 20}}>
                        <Text>{this.state.post.date}</Text>
                    </View>
                    <View>
                        <Text>{this.state.post.content.rendered}</Text>
                    </View>
                </ScrollView>
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