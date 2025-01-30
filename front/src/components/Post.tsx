// import React from 'react';
import { PostData, WordData} from '../types/types';

interface PostProps {
    post: PostData;
    addToMyWords: (word: WordData) => void;
    handleLike: (post: PostData) => void;
}

export const Post: React.FC<PostProps> = ({post, addToMyWords, handleLike}) => {

    return (
        <>
            {/* <div onClick={() => addToMyWords(post.id, post.liked)}>{post.content}</div> */}
            {post.content.map((word, index) => (
                typeof word === 'string' ?
                    <span key={index}>{word}</span> :
                    (word.myWord ?
                        <b key={index}><span key={index} onClick={() => addToMyWords(word)}>{word.content}</span></b>
                        : <span key={index} onClick={() => addToMyWords(word)}>{word.content}</span>)
            ))}
            <span onClick={() => handleLike(post)}>{post.liked ? '　❤️' : '　♡'}</span>
            <span > {post.likes}</span>
            <br />
            <br />
        </>
    );
};