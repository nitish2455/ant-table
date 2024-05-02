// PostsTable.js
import React from 'react';
import { Table } from 'antd';

const PostsTable = ({ posts, pagination, loading, onPageChange }) => {
  const columns = [
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Body', dataIndex: 'body', key: 'body' },
    { 
      title: 'Tags', 
      dataIndex: 'tags', 
      key: 'tags', 
      render: tags => Array.isArray(tags) ? tags.join(', ') : null 
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={posts}
      pagination={pagination}
      loading={loading}
      onChange={onPageChange}
    />
  );
};

export default PostsTable;
