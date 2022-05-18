import { TPost } from '../types';
import { FC } from 'react';
import { StyleSheet, Text, Image } from "react-native";
import { Card, Button } from 'react-native-paper';

type PostProps = {
	post: TPost,
	indicator: 'id' | 'albumId',
	navigation: any,
	action: any
}

export const Post: FC<PostProps> = ({ post, navigation, indicator, action }) => {
	const setPost = action[0] === 'add'
	// @ts-ignore
	return (
		<Card style={styles.container}>
			<Text style={styles.title}>
				{post?.title}
			</Text>
			<Image style={styles.tinyLogo} source={{ uri: post?.thumbnailUrl }} />
			<Card.Actions style={styles.buttons}>
				<Button
					style={setPost ? styles['button-left--active'] : styles['button-left']}
					mode="contained"
					onPress={() => action[1](setPost ? post : post.id) }
				>
					{action[0]}
				</Button>
				<Button style={styles['button-right']} mode="contained" onPress={() => navigation.navigate('Post', {
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
		margin: 10,
		paddingTop: 10,
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 10,
		borderRadius: '15%',
		width: '95%',
	},
	title: {
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 15,
		textAlign: 'center',
		textTransform: 'uppercase'
	},
	category: {
		fontSize: 16,
		fontWeight: 'normal',
		marginTop: 20
	},
	tinyLogo: {
		width: 'auto',
		height: 200,
		borderRadius: '15%',
	},
	buttons: {
		marginTop: 10,
		display: 'flex',
		width: '100%',
		justifyContent: 'space-between'
	},
	'button-left--active': {
		width: '45%',
		backgroundColor: '#28b907',
		borderRadius: 12,
	},
	'button-left': {
		width: '45%',
		backgroundColor: '#f33a3a',
		borderRadius: 12,
	},
	'button-right': {
		width: '45%',
		backgroundColor: '#003b62',
		color: '#fff',
		borderRadius: 12
	}
});
