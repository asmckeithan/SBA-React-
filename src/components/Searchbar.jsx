import React from 'react'
import { useSearch } from '../context/searchcontext'

//pulling state and the dispatch function for searchbar function/component
const Searchbar = () => {
    const {state, dispatch} = useSearch()

    //handling input changes
    //when a user types in the input field the handlechange is triggered with the event object 
const handleChange = (event) => {
    dispatch({type: 'SET_SEARCH_TERM', PAYLOAD:event.target.value})
}

return(
<div >
    <input className='Searchbar' type="text" placeholder='Search the Latest news Here' value={state.searchTerm} />
    <button onClick={handleChange}>Search</button>
</div>
)

}

export default Searchbar