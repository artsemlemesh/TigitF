import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../../../features/commentSlice";

const Comments = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.comments);
  const status = useSelector((state) => state.comments.status);
  const error = useSelector((state) => state.comments.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchComments());
    }
  }, [status, dispatch]);

  let content;

  if (status === "succeeded") {
    content = comments.map((comment, index) => (
      <div
        key={index}
        className="bg-white p-6 rounded-lg shadow-lg mb-4"
      >
        <div className="mb-2">
          <div className="font-bold text-xl text-blue-600">{comment.name}</div>
        </div>
        <p className="text-gray-700 text-base">{comment.content}</p>
      </div>
    ));
  } else if (status === "loading") {
    content = <p>Loading...</p>;
  } else if (status === "failed") {
    content = <p>Error: {error}</p>;
  }

  return (
    <section className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Comments</h2>
      <div>{content}</div>
    </section>
  );
};

export default Comments;