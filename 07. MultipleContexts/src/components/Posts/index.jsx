import { useContext, useEffect, useRef } from "react";
import {
  decrementCounter,
  incrementCounter,
} from "../../contexts/CounterProvider/actions";
import { CounterContext } from "../../contexts/CounterProvider/context";
import { loadPosts } from "../../contexts/PostsProvider/actions";
import { PostsContext } from "../../contexts/PostsProvider/context";

export const Posts = () => {
  const isMounted = useRef(true);

  const postsContext = useContext(PostsContext);
  const { postsState, postsDispatch } = postsContext;

  const counterContext = useContext(CounterContext);
  const { counterState, counterDispatch } = counterContext;

  useEffect(() => {
    loadPosts(postsDispatch).then((dispatch) => {
      if (isMounted.current) {
        dispatch();
      }
    });

    return () => {
      isMounted.current = false;
    };
  }, [postsDispatch]);

  return (
    <div>
      <button onClick={() => incrementCounter(counterDispatch)}>
        counter: {counterState.counter} +
      </button>

      <button onClick={() => decrementCounter(counterDispatch)}>
        counter: {counterState.counter} -
      </button>

      <h1>POSTS</h1>

      {postsState.loading && (
        <p>
          <strong>Carregando posts...</strong>
        </p>
      )}

      {postsState.posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
};
