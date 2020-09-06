import React, {useState} from 'react'

const Search = ({getQuery}) => {
   const [text, setText] = useState('');

   // when user type something in the searchbar, get that input and pass it above to App.js (prop.getQuery)
   const typing = (input) => {
      setText(input);
      getQuery(input);
   }

   const onSubmit = (e) => {
      e.preventDefault();
   }

   return (
      <div className="search">
         <form onSubmit={onSubmit}>
            <input
               type="text"
               className="form-control"
               placeholder="Search country"
               value={text}
               onChange={(input) => typing(input.target.value)}
            />
         </form>
      </div>
   )
}

export default Search
