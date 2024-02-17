export const getBlog = async (id) => {
  const response = await fetch(`http://api:3000/blogs/${id}`, { cache: 'no-store' });
  return await response.json();
}

export const getBlogs = async () => {
  const response = await fetch("http://api:3000/blogs", { cache: 'no-store' });
  return await response.json();
}

export const deleteBlog = async (id) => {
  await fetch(`http://localhost:3004/blogs/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
