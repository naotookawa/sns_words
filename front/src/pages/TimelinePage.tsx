// import React from 'react';
import {Posts} from '../components/Posts.tsx'


interface PostData {
    id: number;
    content: string;
    likes: number;
}

interface TimelinePageProps {
    posts: PostData[];
    onClickLike: (id: number) => void;
}

export const TimelinePage: React.FC<TimelinePageProps> = ({posts, onClickLike}) => {

    return (<>
    <div>タイムラインです！</div>
    <Posts posts={posts} onClickLike={onClickLike}/>
    </>
    )
};