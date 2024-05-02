// TagsFilter.js
import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const TagsFilter = ({ tags, selectedTags, onChange }) => {
  const handleChange = selectedValues => {
    onChange(selectedValues);
  };

  return (
    <Select
      mode="multiple"
      placeholder="Select tags"
      value={selectedTags}
      onChange={handleChange}
      style={{ width: '100%' }}
    >
      {tags.map(tag => (
        <Option key={tag} value={tag}>
          {tag}
        </Option>
      ))}
    </Select>
  );
};

export default TagsFilter;
