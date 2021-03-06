import React from 'react'

const SimpleBlog = ({ blog, onClick }) => (
  <div>
    <div className="blog-header">
      {blog.title} {blog.author}
    </div>
    <div className="blog-content">
      blog has {blog.likes} likes
      <button className="blog-like" onClick={onClick}>like</button>
    </div>
  </div>
)

export default SimpleBlog