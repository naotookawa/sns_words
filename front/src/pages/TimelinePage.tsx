// import React from 'react';
import {Posts} from '../components/Posts.tsx'
import { PostData, WordData } from '../types/types.ts'


interface TimelinePageProps {
    posts: PostData[];
    addToMyWords: (word: WordData) => void;
    handleLike: (post: PostData) => void;
}

export const TimelinePage: React.FC<TimelinePageProps> = ({posts, addToMyWords, handleLike}) => {

    return (<>
    {/* <div>タイムラインです！</div> */}
    <Posts posts={posts} addToMyWords={addToMyWords} handleLike={handleLike}/>
    </>
    )
};