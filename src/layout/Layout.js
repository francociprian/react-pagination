import React from 'react';
import { Link } from 'react-router-dom';

function Layout() {
    return (
      <div className='h-screen w-screen flex justify-center items-center'>
        <nav>
          <ul>
            <li className='text-4xl font-sans my-8 hover:underline hover:underline-offset-4'>
              <Link to="example-default">Example using React, Axios, useEffect and fetch()</Link>
            </li>
            <li className='text-4xl font-sans my-8 hover:underline hover:underline-offset-4'>
              <Link to="example-react-query">Example using React and @tanstack/react-query</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }


export default Layout