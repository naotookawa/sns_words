// import React from 'react';
import { Post } from './Post';

interface PostData {
    id: number;
    content: string;
    likes: number;
}

interface PostsProps {
    posts: PostData[];
    onClickLike: (id: number) => void;
}


export const Posts: React.FC<PostsProps> = ({posts, onClickLike}) => {

    return (
        <>
            <div>ここにpostを表示</div>
            {posts.map(post => (
                <Post key={post.id} post={post} onClickLike={onClickLike}/>
            ))}
        </>
    );
};