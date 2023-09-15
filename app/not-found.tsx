import Link from 'next/link';
import React from 'react';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-6">
      <h1 className="text-5xl">404 - Page Not Found</h1>
      <h2 className="text-3xl">
        Sorry, 😥 we couldn&apos;t find the page you were looking for.
      </h2>
      <h3 className='text-2xl'>
        Go back to the <Link href="/">Home Page</Link>
      </h3>
    </div>
  );
};

export default ErrorPage;
