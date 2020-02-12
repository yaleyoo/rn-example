import React, { Component } from "react";
import { View, StyleSheet, Text, SafeAreaView, Button } from "react-native";
import {getPostDetail} from '../utils/APIs';
import Constants from 'expo-constants';
import { ScrollView } from "react-native-gesture-handler";
import {setFontSize} from '../data/actions';
import {connect} from 'react-redux';
import { Slider, Card  } from 'react-native-elements';

class PostDetail extends Component {
    state = {
        post: null,
        showSlider: false,
        fontSize: this.props.fontSize
    }

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.navigation.setOptions({
            headerRight: () => (
                <Button
                  onPress={() => this.setState({showSlider: true})}
                  title="A"
                  color="#000"
                />
              ),
        })
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
                {this.state.showSlider &&
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Card title="调节字体大小" containerStyle={{width: '80%', height: 160}}>
                        <Slider
                            value={this.state.fontSize}
                            minimumValue={20}
                            maximumValue={40}
                            step={1}
                            onValueChange={(value) => this.setState({fontSize: value})}
                        />
                        <Text>Value: {this.state.fontSize}</Text>
                        <Button title="确认更改" 
                            containerStyle={{width: '100%'}}
                            buttonStyle={{backgroundColor: '#e06773', }}  
                            onPress={() => {
                                this.setState({showSlider: false});
                                this.props.setFontSize(this.state.fontSize)
                            }} />
                    </Card>
                </View>
                }
                {!this.state.showSlider &&
                <ScrollView>
                    <View style={{flex: 1, marginBottom: 40 }}>
                        <Text style={{fontSize: this.props.fontSize}}>{this.state.post.title.rendered}</Text>
                    </View>
                    <View style={{flex: 1, marginBottom: 20}}>
                        <Text style={{fontSize: this.props.fontSize}}>{this.state.post.date}</Text>
                    </View>
                    <View>
                        <Text style={{fontSize: this.props.fontSize}}>{this.state.post.content.rendered}</Text>
                    </View>
                </ScrollView>
                }
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

const mapStateToProps = state => {
    return { 
        fontSize : state.rootStore.fontSize,
    };
}

export default connect(
    mapStateToProps,
    { setFontSize }
)(PostDetail)