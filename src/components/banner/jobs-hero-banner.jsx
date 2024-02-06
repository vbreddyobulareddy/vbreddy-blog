export function JobsHeroBannerComponent() {
  return (
    <section className="text-gray-600 body-font bg-white dark:bg-slate-900">
      <div className="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow mt-5 md:mt-0   md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="text-xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-3xl md:leading-normal">
            Welcome to VBReddy Jobs Board
          </h1>
          <p className="mb-8 md:pl-0  pl-2 pr-2 leading-relaxed dark:text-gray-300">
            This is my personal blog or better my personal knowledge base where
            I am writing down my thoughts all around Javascript programming, my
            US living expirences, H1B w2 Jobs and agencies information.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://img.freepik.com/free-photo/group-people-illustration_1409-6288.jpg"
          />
        </div>
      </div>
    </section>
  );
}
