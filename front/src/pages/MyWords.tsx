import { WordData, Sentence} from '../types/types.ts';

interface MyWordsProps {
    myWords: WordData[];
    composingPost: Sentence;
    setComposingPost: (composingPost: Sentence) => void;
}

export const MyWords: React.FC<MyWordsProps> = ({myWords, composingPost, setComposingPost}) => {
    return (<>
    {myWords.map(myWord => (
        myWord.myWord && 
        <div key={myWord.id} onClick={() => setComposingPost([...composingPost, myWord])}>{myWord.content}</div>
    ))}
    </>
    )
};