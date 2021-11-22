import React from 'react';

export function Page({ error, isLoading, children }) {
  return (
    <div>
      {error && <h3 style={{ color: 'red' }}>{error}</h3>}
      {isLoading && <h3>Is loading ...</h3>}

      {children}
    </div>
  );
}