import { TPost } from '../types';
import { FC } from 'react';
import { StyleSheet, Text, View} from "react-native";
import { Card, Button } from 'react-native-paper';

type PostProps = {
	post: TPost,
	indicator: 'id' | 'userId',
	navigation: any,
	action: any
}

export const Post: FC<PostProps> = ({ post, navigation, indicator, action }) => {
	const setPost = action[0] === 'set'

	return (
		<Card style={styles.container}>
			<Text style={styles.title}>{post.title}</Text>
			<Text style={styles.body}>{post.body}</Text>
			<Text style={styles.category}>USER ID: {post.userId}</Text>
			<Card.Actions>
				<Button mode="contained" onPress={() => action[1](setPost ? post : post.id) }>
					{action[0]}
				</Button>
				<Button onPress={() => navigation.navigate('Post', {
					indicator,
					value: post.id
				})}>
					read more
				</Button>
			</Card.Actions>
		</Card>
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
