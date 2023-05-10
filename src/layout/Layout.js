import React from 'react';
import { Link } from 'react-router-dom';

function Layout() {
    return (
      <div className='h-screen w-screen flex justify-center items-center'>
        <nav>
          <ul>
            <li className='text-6xl font-sans'>
              <Link to="example-default">Example 1</Link>
            </li>
            <li className='text-6xl font-sans'>
              <Link to="example-react-query">Example 2</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }


export default Layout