import { useState } from 'react';

export default function Demo() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-base-200 p-6">
      <div className="max-w-md mx-auto bg-base-100 rounded-2xl shadow p-6">
        <h1 className="text-2xl font-bold mb-2">React on Webrium</h1>
        <p className="text-sm opacity-70 mb-4">
          Rendered by React, mounted inside a Webrium view.
        </p>

        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
          Clicked {count} times
        </button>
      </div>
    </div>
  );
}
