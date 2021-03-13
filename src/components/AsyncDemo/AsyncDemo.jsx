import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAsyncMessage } from '../../model/features/asyncDemo/asyncDemoSlice';

const AsyncDemo = () => {
  const { idx, message } = useSelector((state) => state.asyncDemo);
  const dispatch = useDispatch();
  return (
    <div>
      <button type="button" onClick={() => dispatch(fetchAsyncMessage(idx))}>Fetch message</button>
      <h5>{message}</h5>
    </div>
  );
};

export default AsyncDemo;
