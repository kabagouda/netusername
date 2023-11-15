const StartSearching = () => {
  return (
    <div className="w-full max-w-xl mx-auto mt-6 space-y-3 text-gray-800 dark:text-gray-200 overflow-y-auto h-1/2">
      <div className="flex flex-col items-center justify-center h-full">
        <svg
          className=" h-24 w-24 text-gray-400 dark:text-gray-600 mb-4"
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
          Start Searching
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400">
          Enter a username above to see its availability on different social
          media platforms.
        </p>
      </div>
    </div>
  );
};
export default StartSearching;
