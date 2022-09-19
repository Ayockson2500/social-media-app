import { CREAT_POST } from "./types";

export const CreatePost = (post, id) => {
    return {
        type: CREAT_POST,
        payload: {
            post: post,
            id: id
        }
    }
}

