import {REMOVE_FAVORITE, SET_FAVORITE} from "./actionType";
import {TPost} from "../../../types";

export const removePost = (id: number) => ({
	type: REMOVE_FAVORITE,
	id
})

export const setPost = (post: TPost) => ({
	type: SET_FAVORITE,
	post
})
