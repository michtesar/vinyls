import React, { useEffect, useState } from 'react';

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ search, setSearch }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setIsDarkMode(mediaQuery.matches);

      // Listen for changes in the color scheme
      const handleChange = (ev: MediaQueryListEvent) => {
        setIsDarkMode(ev.matches);
      };

      mediaQuery.addEventListener('change', handleChange);

      // Cleanup the event listener on component unmount
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  return (
    <input
      type="text"
      placeholder="Search..."
      className={`p-2 border rounded-md w-1/4 ${
        isDarkMode
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
