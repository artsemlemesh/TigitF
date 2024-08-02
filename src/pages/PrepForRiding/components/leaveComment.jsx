import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewComment } from "../../../features/commentSlice";

const LeaveComment = () => {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const dispatch = useDispatch();


  const cannSave = [email, name, content].every(Boolean) && addRequestStatus === 'idle'

  const onSavePostClicked = async () => {
    if (cannSave) {
      try {
        setAddRequestStatus('pending')
        await dispatch(addNewComment({name, email, content})).unwrap()
        setName('')
        setEmail('')
        setContent('')
      } catch (err){
        console.error('failed to save the comment', err)
      } finally {
        setAddRequestStatus('idle')
      }
    }
  }

  const onNameChanged = (e) => setName(e.target.value);
  const onEmailChanged = (e) => setEmail(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);



  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white dark:bg-gray-950 dark:text-white rounded-lg shadow-md">
      <form >
        <h2 className="text-2xl mb-4 font-light text-gray-900 dark:text-gray-200">
          Leave a Comment
        </h2>
        <p className="text-gray-600 mb-6">
          Your email address will not be published. Required fields are marked *
        </p>

        <div className="mb-4">
          <textarea
            id="comment"
            name="comment"
            className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-900 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            placeholder="Type Comment...*"
            rows="5"
            required
            value={content}
            onChange={onContentChanged}
          />
        </div>

        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-900 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Name*"
            required
            value={name}
            onChange={onNameChanged}
          />
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-900 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email*"
            required
            value={email}
            onChange={onEmailChanged}
          />
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            className="py-2 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={onSavePostClicked}
            disabled={!cannSave}
          >
            Post Comment →
          </button>
        </div>
      </form>
    </div>
  );
};

export default LeaveComment;