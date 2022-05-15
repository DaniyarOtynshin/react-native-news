import { TPost } from '../types';
import { FC } from 'react';
import {Button, StyleSheet, Text, View} from "react-native";

type PostProps = {
	post: TPost,
	indicator: 'id' | 'userId',
	navigation: any,
	action: any
}

export const Post: FC<PostProps> = ({ post, navigation, indicator, action }) => {
	const setPost = action[0] === 'set'

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{post.title}</Text>
			<Text style={styles.body}>{post.body}</Text>
			<Text style={styles.category}>USER ID: {post.userId}</Text>
			<Button title={action[0]}  onPress={() => action[1](setPost ? post : post.id) }/>
			<Button title={'read more'} onPress={() => navigation.navigate('Post', {
				indicator,
				value: post.id
			})} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		alignItems: 'center',
		margin: 10,
		paddingTop: 10,
		paddingLeft: 20,
		paddingRight: 20,
		paddingBottom: 20,
		width: '90%',
		borderWidth: 1,
		borderRadius: 10,
		borderColor: '#d7d7d7'
	},
	title: {
		fontSize: 16,
		fontWeight: 'bold',
		maxWidth: '80%',
		marginBottom: 12,
		textAlign: 'center'
	},
	body: {
		fontSize: 10,
		fontWeight: 'normal',
	},
	category: {
		fontSize: 10,
		fontWeight: 'normal',
		alignSelf: 'flex-start',
		marginTop: 10
	},
});
