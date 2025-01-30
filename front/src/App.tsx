import { useState } from 'react'
import './App.css'
import {TimelinePage} from './pages/TimelinePage.tsx'
// import { Location } from './components/Location.tsx'
import { MyWords } from './pages/MyWords.tsx'
import { ComposeButton } from './components/ComposeButton.tsx'
import { ComposePage } from './pages/ComposePage.tsx'
import { PostData, WordData, Sentence} from './types/types.ts'
import { v4 as uuid } from "uuid";


function App() {
  const saiko:WordData =  {id: uuid(), content: '最高！', myWord : false}
  const firstPosts:PostData[] = ([
    { id: uuid(), user: 'user1', content: [{ id: uuid(), content: 'ラーメン', myWord : false}, 'は', '美味しい'], likes: 0, liked: false },
    { id: uuid(), user: 'user2', content: [{ id: uuid(), content: 'ちょんまげ', myWord : false}, saiko], likes: 0, liked: false },
    { id: uuid(), user: 'user3', content: ['やば'], likes: 0, liked: false },
    { id: uuid(), user: 'user4', content: [{ id: uuid(), content: '侍', myWord : false}, saiko], likes: 0, liked: false },
  ])

  const [posts, setPosts] = useState<PostData[]>(firstPosts)

  const [myWords, setMyWords] = useState<WordData[]>([
    // { id: uuid(), content: 'ちょんまげ', myWord: true },
    // { id: uuid(), content: '偽ちょんまげ', myWord: false }
  ])

  const [buttonClicked, setButtonClicked] = useState(false)
  const [composingPost, setComposingPost] = useState<Sentence>([])

  const addToMyWords = (word:WordData) => {
    if (word.clickDisabled) return;

    if (!word.myWord) {
      setPosts((prev) => prev.map((post) => ({
        ...post,
        content: post.content.map((content) => 
          typeof content === 'object' && content.id === word.id ? { ...content, myWord: true,  clickDisabled: true} : content
        )
      })))
      setMyWords([...myWords, { id: word.id, content: word.content, myWord: true }])
    }
    else {
      setPosts((prev) => prev.map((post) => ({
        ...post,
        content: post.content.map((content) => 
          typeof content === 'object' && content.id === word.id ? { ...content, myWord: false } : content
        )
      }))
      )
      setMyWords(myWords.filter((myWord) => myWord.id !== word.id))
    }
    // setPosts((prev) =>
    //   prev.map((post) =>
    //     post.id === id ? { ...post, likes: post.likes + 1 } : post
    //   )
    // )
    setTimeout(() => {
      setPosts((prev) => prev.map((post) => ({
        ...post,
        content: post.content.map((content) => 
          typeof content === 'object' && content.id === word.id ? { ...content, clickDisabled: false} : content
        )
      })))
    },500)
  }

  const handleLike = (post: PostData) => {
    if (post.clickDisabled) return;

    if (post.liked) {
      setPosts((prev) =>
        prev.map((p) =>
          p.id === post.id ? { ...p, likes: p.likes - 1, liked: false, clickDisabled: true} : p
        )
      )
    } else {
      setPosts((prev) =>
        prev.map((p) =>
          p.id === post.id ? { ...p, likes: p.likes + 1, liked: true, clickDisabled: true} : p
        )
      )
    }

    setTimeout(() => {
      setPosts((prev) =>
        prev.map((p) =>
          p.id === post.id ? { ...p, clickDisabled: false } : p
        )
      )
    }, 500)
  }

    
  const handlePost = (newPost: Sentence) => {
    if (newPost.length === 0) return;
    setPosts([...posts, { id: uuid(), user : 'hello', content: newPost, likes: 0, liked: false }])
    setButtonClicked(false)
    setComposingPost([])
  }
  return (
    <>
      < TimelinePage posts = {posts} addToMyWords={addToMyWords} handleLike={handleLike}/>
      < ComposeButton setButtonClicked={setButtonClicked}/>
      {buttonClicked && <ComposePage composingPost={composingPost} setComposingPost={setComposingPost} handlePost={handlePost} setButtonClicked={setButtonClicked}/>}
      <div>================================================</div>
      <MyWords myWords={myWords} composingPost={composingPost} setComposingPost={setComposingPost}/>
    </>
  )
}

export default App;