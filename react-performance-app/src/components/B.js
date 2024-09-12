import React from 'react'

const Message = ({ message }) => {
  return (
    <p>{message}</p>
  )
}

const ListItem = ({ post }) => {
  return (
    <li key={post.id}>
      <p>{post.title}</p>
    </li>
  )
}

const List = ({ posts }) => {
  return (
    <ul>
      {posts.map(post => (
        <ListItem key={post.id} post={post}></ListItem>
      ))}
    </ul>
  )
}

const B = ({ message, posts }) => {
  return (
    <div>
      <h1>B Component</h1>
      <Message message={message}></Message>
      <List posts={posts}></List>
    </div>
  )
}

export default B
