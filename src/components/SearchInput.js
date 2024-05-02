// SearchInput.js
import React from 'react';
import { Input } from 'antd';

const SearchInput = ({ value, onChange }) => {
  return (
    <Input
      placeholder="Search posts"
      value={value}
      onChange={e => onChange(e.target.value)}
      style={{ width: 200, marginBottom: 16 }}
    />
  );
};

export default SearchInput;
