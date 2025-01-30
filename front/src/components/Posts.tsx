// import React from 'react';
import { Post } from './Post';
import { PostData, WordData} from '../types/types';

interface PostsProps {
    posts: PostData[];
    addToMyWords: (word: WordData) => void;
    handleLike: (post: PostData) => void;
}


export const Posts: React.FC<PostsProps> = ({posts, addToMyWords, handleLike}) => {
    return (
        <>
            {/* <div>ここにpostを表示</div> */}
            {posts.map((post, index) => (
                <Post key={index} post={post} addToMyWords={addToMyWords} handleLike={handleLike}/>
            ))}
        </>
    );
};