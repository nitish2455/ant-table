// Home.js
import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { fetchPosts } from '../api';
import PostsTable from '../components/PostsTable';
import TagsFilter from '../components/TagsFilter';
import SearchInput from '../components/SearchInput';

const Home = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10 });
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const skip = searchParams.get('skip') || 0;
        const limit = searchParams.get('limit') || 10;
        const tags = searchParams.get('tags') || '';
        const search = searchParams.get('search') || '';

        const data = await fetchPosts(skip, limit, tags, search);
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchParams]);

  const handlePageChange = (current, pageSize) => {
    setPagination({ current, pageSize });
    setSearchParams({ skip: (current - 1) * pageSize, limit: pageSize });
  };

  const handleTagChange = value => {
    setSelectedTags(value);
    setSearchParams({ tags: value.join(',') });
  };

  const handleSearchChange = value => {
    setSearchQuery(value);
    setSearchParams({ search: value });
  };

  return (
    <div style={{ padding: 20 }}>
      <SearchInput value={searchQuery} onChange={handleSearchChange} />
      <TagsFilter tags={[]} selectedTags={selectedTags} onChange={handleTagChange} />
      <PostsTable
        posts={posts}
        pagination={pagination}
        loading={loading}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Home;
