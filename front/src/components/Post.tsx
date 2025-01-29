// import React from 'react';


interface PostProps {
    post: {
        id: number;
        content: string;
        likes: number;
    };
    onClickLike: (id: number) => void;
}

export const Post: React.FC<PostProps> = ({post, onClickLike}) => {

    return (
        <>
            <div>{post.content}</div>
            <button onClick={() => onClickLike(post.id)}>いいね</button>
            <div >いいね数: {post.likes}</div>
        </>
    );
};