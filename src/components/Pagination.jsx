const getPages = (current, total) => {
  const pages = [];
  if (total <= 5) {
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
  } else {
    if (current <= 3) {
      pages.push(1, 2, 3, "...", total);
    } else if (current >= total - 2) {
      pages.push(1, "...", total - 2, total - 1, total);
    } else {
      pages.push(1, "...", current - 1, current, current + 1, "...", total);
    }
  }
  return pages;
};

export const Pagination = ({ page, pageHandler, dynamicPage }) => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <div className="flex items-center space-x-4 justify-center">
        <button
          disabled={page === 1}
          className={`${
            page === 1 ? "bg-gray-500" : "bg-red-600"
          } flex items-center gap-2 cursor-pointer text-white 
        font-semibold py-1 px-4 rounded-lg`}
          onClick={() => pageHandler(page - 1)}
        >
          Prev
        </button>
        {getPages?.(page, dynamicPage)?.map((item, idx) => {
          return (
            <span
              key={idx}
              onClick={() => typeof item === "number" && pageHandler(item)}
              className={`cursor-pointer ${
                item === page ? "font-bold text-red-600" : ""
              }`}
            >
              {item}
            </span>
          );
        })}
        <button
          disabled={page === dynamicPage}
          className={`${
            page === dynamicPage
              ? "bg-gray-500 "
              : "bg-red-600 border border-gray-600 rounded-full p-1"
          } flex items-center gap-2 cursor-pointer text-white 
        font-semibold py-1 px-4 rounded-lg`}
          onClick={() => pageHandler(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};
