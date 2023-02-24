const Address = () => {
  return (
    <div className="w-full px-8">
      <h2 className="font-display text-jacarta-700 mb-4 text-xl dark:text-white text-center">
        Reach me out at !
      </h2>
      <div className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 rounded-2.5xl border bg-white p-10">
        <div className="flex items-center space-x-5">
          <span className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 bg-light-base flex h-11 w-11 shrink-0 items-center justify-center rounded-full border">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="fill-jacarta-400"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M2.243 6.854L11.49 1.31a1 1 0 0 1 1.029 0l9.238 5.545a.5.5 0 0 1 .243.429V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.283a.5.5 0 0 1 .243-.429zM4 8.133V19h16V8.132l-7.996-4.8L4 8.132zm8.06 5.565l5.296-4.463 1.288 1.53-6.57 5.537-6.71-5.53 1.272-1.544 5.424 4.47z" />
            </svg>
          </span>

          <div>
            <span className="font-display text-jacarta-700 block text-base dark:text-white">
              Email
            </span>
            <a
              href="mailto:sycoticx@sycoticsociety.com"
              className="hover:text-accent dark:text-jacarta-300 text-sm not-italic"
            >
              sycoticx@sycoticsociety.com
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-5">
          <span className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 bg-light-base flex h-11 w-11 shrink-0 items-center justify-center rounded-full border">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="fill-jacarta-400"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M2.243 6.854L11.49 1.31a1 1 0 0 1 1.029 0l9.238 5.545a.5.5 0 0 1 .243.429V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.283a.5.5 0 0 1 .243-.429zM4 8.133V19h16V8.132l-7.996-4.8L4 8.132zm8.06 5.565l5.296-4.463 1.288 1.53-6.57 5.537-6.71-5.53 1.272-1.544 5.424 4.47z" />
            </svg>
          </span>

          <div>
            <span className="font-display text-jacarta-700 block text-base dark:text-white">
              Email
            </span>
            <ao
              href="mailto:sycoticx@sycoticsociety.com"
              className="hover:text-accent dark:text-jacarta-300 text-sm not-italic"
            >
              @sycoticSociety
            </ao>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
