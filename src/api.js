
const API_BASE_URL = 'https://dummyjson.com';

export const fetchPosts = async (skip, limit, tags = '', search = '') => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/posts?skip=${skip}&limit=${limit}&tags=${tags}&search=${search}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    const data = await response.json();
    return data.posts; // Extracting the posts array from the response
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};
