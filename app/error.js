"use client";

export default function Error({ error, reset }) {
  return (
    <div className="tf-container py-5">
      <h1 className="h3">Something went wrong</h1>
      <p className="text-muted">{error?.message || 'An unexpected error occurred.'}</p>
      <button className="btn btn-primary" onClick={() => reset?.()}>Try again</button>
    </div>
  );
}

