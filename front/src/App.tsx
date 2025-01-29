import { useState } from 'react'

import './App.css'
import {TimelinePage} from './pages/TimelinePage.tsx'
// import { Location } from './components/Location.tsx'

function App() {
  const [posts, setPosts] = useState([
    { id: 0, content: '楽しい', likes: 0 },
    { id: 1, content: '厳しい', likes: 0 },
    { id: 2, content: 'ありがたい', likes: 0 }
  ])

  const onClickLike = (id: number) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    )
  }


  return (
    <>
      < TimelinePage posts = {posts} onClickLike={onClickLike}/>
    </>
  )
}

export default App;