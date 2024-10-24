import React, { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
}

export default function Main({ children }: MainProps) {
  return <main className="p-4 bg-gray-100">{children}</main>;
}
