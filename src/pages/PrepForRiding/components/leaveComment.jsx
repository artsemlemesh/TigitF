const LeaveComment = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white dark:bg-gray-950 dark:text-white rounded-lg shadow-md">
      <form action="/submit-comment" method="post">
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
          ></textarea>
        </div>

        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-900 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Name*"
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-900 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email*"
            required
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="py-2 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Post Comment →
          </button>
        </div>
      </form>
    </div>
  );
};

export default LeaveComment;