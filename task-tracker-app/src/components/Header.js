import React from 'react';

function Header() {
  return (
    <div className='row'>
        <div className='col-md-4'>
        <p>Task Tracker</p>
        </div>
        <div className='col-md-5'>
            <button>Add</button>
        </div>
    </div>
  );
}

export default Header;
