import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import postsActions from '../store/posts/actions';

function App() {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(postsActions.Creators.loadPostsRequest());
    },[]);

  return (
    <div className="App">
      hello world
    </div>
  );
}

export default App;
