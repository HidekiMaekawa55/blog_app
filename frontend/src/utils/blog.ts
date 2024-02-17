export const getBlog = async (id) => {
  const response = await fetch(`http://api:3000/blogs/${id}`, { cache: 'no-store' });
  return await response.json();
}

export const getBlogs = async () => {
  const response = await fetch("http://api:3000/blogs", { cache: 'no-store' });
  return await response.json();
}

export const deleteBlog = async (id) => {
  fetch(`http://localhost:3004/blogs/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

export const createBlog = async (blogParams) => {
  fetch("http://localhost:3004/blogs", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(blogParams)
  });
}

export const updateBlog = async (blog_id, blogParams) => {
  fetch(`http://localhost:3004/blogs/${blog_id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(blogParams)
  });
}
