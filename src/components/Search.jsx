

import React from 'react'
import { SearchOutline } from 'react-ionicons';

const Search = () => {
  return (
    <div className='w-full mt-10'>
        <div className='flex items-center gap-3 px-2 bg-white dark:bg-indigo-200 rounded-md border border-slate-200 w-full'>
            <SearchOutline color="#6366f1" />
            <input type="text" placeholder='Search for a Job Title' className='w-full px-2 py-4 dark:bg-indigo-200 text-slate-400'/>
        </div>
        

    </div>
  )
}
export default Search;