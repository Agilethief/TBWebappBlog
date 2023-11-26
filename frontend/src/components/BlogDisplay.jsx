const BlogDisplay = (props) => {
  const blog = props.blog;
  let readTime = blog.wordcount / 230; // General read speed of adults
  readTime = Math.round(readTime * 10) / 10; // Round to 1 decimal place, reasonable number

  return (
    <div className='blog-display'>
      <img
        className='blogKeyImage'
        src={blog.keyImage}
        alt={blog.title}
      />
      <h1>{blog.title}</h1>
      <h3>{blog.description}</h3>
      <div className='blogDetailBlock'>
        <div>
          <p>Author</p>
          <p>{blog.author}</p>
        </div>
        <div>
          <p>Published</p>
          <p>{blog.datePublished}</p>
        </div>
        <div>
          <p>Category</p>
          <p>{blog.category}</p>
        </div>
        <div>
          <p>Reading time</p>
          <p>
            {blog.wordcount} words / {readTime} minutes
          </p>
        </div>
      </div>

      <hr></hr>
      <div className='contentBlock'>{blog.content}</div>
    </div>
  );
};

export default BlogDisplay;

/*
Blog: 
  {
    ID: “blogID”
    Name: “BlogName”
    "url": "http://www.tbwebapp.com/blog/id",
    DatePublished: “PublishDate”
    DateCreated: “PublishDate”
    DateEdited: “PublishDate”
    Author: “username”
    category: “Programming / Art / Life”
    Tags: [tag1, tag2]
    Title: “title”
    Description: “Short 1 sentence line for the post”
    KeyImage: “/content/images/image.jpg”
    Content: <html>html body content goes in here </html>
    "wordcount": "1120",
  }
  */
