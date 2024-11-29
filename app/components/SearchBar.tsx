import React from 'react';

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      className={`p-2 border rounded-md w-1/4 ${
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'bg-gray-800 text-white border-gray-700'
          : 'bg-white text-black border-gray-300'
      }`}
      onChange={(e) => {
        setSearch(e.target.value);
      }}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          setSearch('');
        }
      }}
      value={search}
      autoFocus
    />
  );
};
