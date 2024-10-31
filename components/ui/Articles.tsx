/** @format */

export default function Articles({ articles }: { articles: ArticleProps[] }) {
  return (
    <div className="flex flex-wrap lg:flex-nowrap gap-x-2 gap-y-2">
      {articles.map((article, ind) => (
        <div
          key={ind}
          className={`flex gap-4 w-full max-w-[400px] lg:w-[180px] h-[100px] lg:h-[200px] ${
            ind % 2 === 0 ? "lg:flex-col self-end xl:-translate-y-[15px]" : "lg:flex-col-reverse self-start"
          }`}
        >
          <div className="flex flex-col lg:flex-row gap-2 justify-center items-center">
            <span className="w-4 aspect-square rounded-[50%] bg-foreground" />
            <span className="w-[3px] h-dimension lg:w-dimension lg:h-[3px]  bg-foreground" />
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-start text-xl md:text-2xl font-bold">
              {article.title}
            </h3>
            <p>{article.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
