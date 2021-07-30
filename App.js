import React , {Component}from 'react';
import {Image, StyleSheet, View} from 'react-native';
import TabNavigator from 'react-native-tab-navigator'
//界面组件
import HomeComponent from './app/pages/home/index'
import meComponent from './app/pages/me/index'
import newsComponent from './app/pages/news/index'
import ordersComponent from './app/pages/orders/index'
import scanComponent from './app/pages/scan/index'
//图片
let homeNormal = require('./app/imgs/tabbar/icon-tab-unhome.png')
let homeSelectNormal = require('./app/imgs/tabbar/icon-tab-home.png')
let newsNormal = require('./app/imgs/tabbar/icon-tab-unnews.png')
let newsSelectNormal = require('./app/imgs/tabbar/icon-tab-news.png')
let ordersNormal = require('./app/imgs/tabbar/icon-tab-unfind.png')
let ordersSelectNormal = require('./app/imgs/tabbar/icon-tab-find.png')
let scanNormal = require('./app/imgs/tabbar/icon-tab-saoyisao.png')
let scanSelectNormal = require('./app/imgs/tabbar/icon-tab-saoyisao.png')
let meNormal = require('./app/imgs/tabbar/icon-tab-unme.png')
let meSelectNormal = require('./app/imgs/tabbar/icon-tab-me.png')
export default class TabNav extends Component {
	constructor(props) {
		super(props)
		this.state={
			selectedTab:'首页'
		}    
	}
	_renderTabarItems(selectedTab,icon,selectedIcon,Component){
		return (
			<TabNavigator.Item
			          selected={this.state.selectedTab === selectedTab}  
			          titleStyle={styles.tabText}  
			          selectedTitleStyle={styles.selectedTabText}  
			          renderIcon={() => <Image style={[styles.icon,{height:selectedTab == '扫一扫' ? 50 : 35,width:selectedTab == '扫一扫' ? 50 : 25,top:selectedTab == '扫一扫' ? -10 : 2}]} source={icon} resizeMode='stretch' />}  
			          renderSelectedIcon={() => <Image style={[styles.icon,{height:selectedTab == '扫一扫' ? 50 : 35,width:selectedTab == '扫一扫' ? 50 : 25,top:selectedTab == '扫一扫' ? -10 : 2}]} source={selectedIcon} resizeMode='stretch' />}  
			          onPress={() => this.setState({ selectedTab: selectedTab })}
			      >
			       
					<Component />
			      </TabNavigator.Item>
	    )
	}
	 // <View style={styles.page1}></View>
	// title='订单' titleStyle={styles.tabText} selectedTitleStyle={styles.selectedTabText}
	render() {
		return (
			<View style={styles.container}>
				<TabNavigator >
				{this._renderTabarItems('首页',homeNormal,homeSelectNormal,HomeComponent)}
				{this._renderTabarItems('消息',newsNormal,newsSelectNormal,newsComponent)}
				{this._renderTabarItems('扫一扫',scanNormal,scanSelectNormal,scanComponent)}
				{this._renderTabarItems('订单',ordersNormal,ordersSelectNormal,ordersComponent)}
				{this._renderTabarItems('我的',meNormal,meSelectNormal,meComponent)}
				</TabNavigator>
			</View>
		);
	}
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabText: {
        color: "#BFBFBF",
        fontSize: 12,
    },
    selectedTabText: {
        color: "#1296DB",
        fontSize: 12,
    },
    icon: {
        width: 20,
        height: 35,
		top:3
		
    },
	 page1: {
	    flex: 1,
	    backgroundColor: 'red'
	  },
	  page2: {
	    flex: 1,
	    backgroundColor: 'yellow'
	  }
});




// <TabNavigator>
				
// 					<TabNavigator.Item selected={this.state.selectedTab==='首页'}  titleStyle={styles.tabText} selectedTitleStyle={styles.selectedTabText} renderIcon={()=><Image style={styles.icon} source={homeNormal} resizeMode='stretch' />}
// 					renderSelectedIcon={()=><Image style={styles.icon} source={homeSelectNormal} resizeMode='stretch' />} onPress={()=>this.setState({selectedTab:'首页'})}>
// 					 <View style={styles.page2}></View>
// 					</TabNavigator.Item>
// 				<TabNavigator.Item selected={this.state.selectedTab==='消息'}  titleStyle={styles.tabText} selectedTitleStyle={styles.selectedTabText} renderIcon={()=><Image style={styles.icon} source={newsNormal} resizeMode='stretch' />}
// 				renderSelectedIcon={()=><Image style={styles.icon} source={newsSelectNormal} resizeMode='stretch' />} onPress={()=>this.setState({selectedTab:'消息'})}>
// 					 <View style={styles.page1}></View>
// 				</TabNavigator.Item>
// 				<TabNavigator.Item selected={this.state.selectedTab==='扫一扫'}  titleStyle={styles.tabText} selectedTitleStyle={styles.selectedTabText} renderIcon={()=><Image style={styles.icon} source={scanNormal} resizeMode='stretch' />}
// 				renderSelectedIcon={()=><Image style={styles.icon} source={scanSelectNormal} resizeMode='stretch' />} onPress={()=>this.setState({selectedTab:'扫一扫'})}>
// 					  <View style={styles.page2}></View>
// 				</TabNavigator.Item>
// 				<TabNavigator.Item selected={this.state.selectedTab==='订单'}  renderIcon={()=><Image style={styles.icon} source={ordersNormal} resizeMode='stretch' />}
// 				renderSelectedIcon={()=><Image style={styles.icon} source={ordersSelectNormal} resizeMode='stretch' />} onPress={()=>this.setState({selectedTab:'订单'})}>
// 					<View style={styles.page1}></View>
// 				</TabNavigator.Item>
// 				<TabNavigator.Item selected={this.state.selectedTab==='我的'}  titleStyle={styles.tabText} selectedTitleStyle={styles.selectedTabText} renderIcon={()=><Image style={styles.icon} source={meNormal} resizeMode='stretch' />}
// 				renderSelectedIcon={()=><Image style={styles.icon} source={meSelectNormal} resizeMode='stretch' />} onPress={()=>this.setState({selectedTab:'我的'})}>
// 					<View style={styles.page2}></View>
// 				</TabNavigator.Item>
// 			</TabNavigator>