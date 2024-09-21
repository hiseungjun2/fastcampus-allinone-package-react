import React, { useCallback } from 'react'

const Message = React.memo(({ message }) => {
  return (
    <p>{message}</p>
  )
})

const ListItem = React.memo(({ post }) => {
  return (
    <li key={post.id}>
      <p>{post.title}</p>
    </li>
  )
})

const List = React.memo(({ posts }) => {
  console.log('List Components is Rendering');
  return (
    <ul>
      {posts.map(post => (
        <ListItem key={post.id} post={post}></ListItem>
      ))}
    </ul>
  )
})

const B = ({ message, posts }) => {
  console.log('B Components is Rendering');
  const testFunction = useCallback(() => {}, []);
  return (
    <div>
      <h1>B Component</h1>
      <Message message={message}></Message>
      <List posts={posts} testFunction={testFunction}></List>
    </div>
  )
}

export default B
