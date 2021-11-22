import React from 'react';

export function Page({ error, isLoading, children }) {
  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="flex flex-col gap-2">
        {error && <h3 className="mb-5 text-red-500 text-xl" style={{ color: 'red' }}>{error}</h3>}
        {isLoading && <h3 className="mb-5 text-2xl">Is loading ...</h3>}
      </div>

      <div>{children}</div>
    </div>
  );
}