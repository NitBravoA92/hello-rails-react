import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { useEffect } from 'react';
import { getRandomGreeting } from '../redux/greetings/greetingsSlice';

function Greeting() {
  const {
    greetings, isLoading, error,
  } = useSelector((state) => state.greetings);

  const dispatchActions = useDispatch();

  useEffect(() => {
    dispatchActions(getRandomGreeting());
  }, [dispatchActions]);

  let loadMessage = null;

  if (isLoading) {
    loadMessage = 'Loading message...';
  }

  if (error) {
    loadMessage = 'Error loading data';
  }

  return (
    <section>
    {
      (isLoading || error)
        ? (<p className="status">{loadMessage}</p>)
        : (<p class="greeting-message">{greetings?.message}</p>)
    }
    </section>
  );
}

export default Greeting;