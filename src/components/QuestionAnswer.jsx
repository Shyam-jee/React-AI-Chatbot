import Answer from "./Answer";
function QuestionAnswer({item, index}) {
  return (
    <>
      <div key={index} className={item.type == "q" ? "flex justify-end" : ""}>
        {item.type == "q" ? (
          <li
            key={index + Math.random()}
            className="text-right p-1 border-8 dark:bg-zinc-700 dark:border-zinc-700  border-slate-300 rounded-tl-3xl rounded-br-3xl rounded-bl-3xl w-fit mr-3 text-slate-800 bg-slate-300 dark:text-zinc-300"
          >
            <Answer
              ans={item.text}
              totalResultLength={1}
              type={item.type}
              index={index}
            />
          </li>
        ) : (
          item.text.map((ansItem, ansIndex) => (
            <li key={ansIndex + Math.random()} className="text-left p-1 text-slate-800 dark:text-zinc-300">
              <Answer
                ans={ansItem}
                totalResultLength={item.length}
                type={item.type}
                index={ansIndex}
              />
            </li>
          ))
        )}
      </div>
    </>
  );
}

export default QuestionAnswer;
