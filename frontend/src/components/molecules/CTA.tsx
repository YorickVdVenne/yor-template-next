import React, { ReactNode } from 'react';

interface CTAProps {
  children: ReactNode;
  className?: string;
}

export default function CTA(props: CTAProps): JSX.Element {
  return (
    <div
      className={`${props.className} rounded-xl overflow-hidden p-6 flex flex-col`}
    >
      {props.children}
    </div>
  );
}
