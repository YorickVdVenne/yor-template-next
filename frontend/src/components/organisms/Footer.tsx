import React from 'react';

export default function Footer() {
  return (
    <footer className="p-4 bg-gray-100">
      <p>&copy; {new Date().getFullYear()} My Site</p>
    </footer>
  );
}
