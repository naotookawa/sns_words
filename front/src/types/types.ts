export interface WordData {
    id : string; //uuidで生成したid
    content: string;
    myWord: boolean;
    clickDisabled?: boolean;
}

export type Sentence = (WordData | string)[];
// 例
const example: Sentence = [
    {id: '1', content: 'こんにちは', myWord: false},
    {id: '2', content: '世界', myWord: false},
    'やっほー'
]

export interface PostData {
    id: string; //uuidで生成したid
    user: string;
    content: Sentence;
    likes: number;
    liked: boolean;
    clickDisabled?: boolean;
}

