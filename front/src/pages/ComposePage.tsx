import { Sentence, WordData } from '../types/types.ts';

interface ComposePageProps {
    composingPost: Sentence;
    setComposingPost: (composingPost: Sentence) => void;
    handlePost: (newPost: Sentence) => void;
    setButtonClicked: (buttonClicked: boolean) => void;
}

export const ComposePage: React.FC<ComposePageProps> = ({composingPost, setComposingPost, handlePost, setButtonClicked}) => {
    const cancelCompose = () => {
        setButtonClicked(false);
    }

    const handleRemoveWord = (word: WordData) => {
        setComposingPost(composingPost.filter((w) => typeof w !== 'string' && w.id !== word.id));
    };
    
    return (
        <>
            <button onClick={cancelCompose}>cancel</button>
                {composingPost.map((word, index) => (
                    (typeof word === 'string' ?
                        <span key={index}>{word}</span> :
                        <span key={index} onClick={() => handleRemoveWord(word)}>{word.content}</span>
                    )
                ))}
            <button onClick={() => handlePost(composingPost)}>post!</button>
        </>
    );
}