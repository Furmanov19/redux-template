import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import postsActions from '../store/posts/actions';

function App() {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(postsActions.Creators.loadPostsRequest());
    },[]);

    const onAddPost =()=>{
        dispatch(postsActions.Creators.createPostRequest({userId:991914,id:811884,title:'title',body:'body'}));
    }
  return (
    <div className="App">
      hello world
        <button type="button" onClick={onAddPost}>add fake</button>
    </div>
  );
}

export default App;
