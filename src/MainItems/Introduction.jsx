function Introduction() {
  return (
    <div className="py-10 bg-red">
      <article className="flex justify-center items-center w-full">
        <div className="flex flex-col mr-10">
          <h3 className="mb-5 text-xl text-white font-bold">STEP 1</h3>
          <div className="flex flex-col w-60 bg-white rounded-lg">
            <div className="flex justify-center items-center w-full h-60 py-5">
              <div className="absolute text-6xl">🎬</div>
              <div className="w-40 h-24 border-2 bg-gradient-to-b from-white to-gray" />
            </div>
            <div className="h-20 mx-5 mb-5 text-center">
              <h4>Upload your video in horizontal format.</h4>
            </div>
          </div>
        </div>
        <div className="flex flex-col mr-10">
          <h3 className="mb-5 text-xl text-white font-bold">STEP 2</h3>
          <div className="group flex flex-col items-center w-60 rounded-lg bg-white">
            <div className="flex justify-center items-center w-full h-60 py-5">
              <div className="absolute text-3xl w-24 h-28 mr-10 bg-red opacity-50" />
              <div className="absolute text-3xl mr-10 rounded-full group-hover:animate-moveLeftRight">
                💃🏻
              </div>
              <div className="absolute text-2xl ml-24 rounded-full group-hover:animate-moveLeftRight2">
                🐕
              </div>
              <div className="w-40 h-24 border-2 bg-gradient-to-b from-white to-gray" />
            </div>
            <div className="h-20 mx-5 mb-5 text-center">
              <h4>Select the area for motion analysis and cropping.</h4>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="mb-5 text-xl text-white font-bold">STEP 3</h3>
          <div className="group flex flex-col items-center w-60 bg-white rounded-lg">
            <div className="flex justify-center items-center w-full h-60 py-5">
              <span className="absolute mb-28 px-1 mr-8 bg-white text-sm text-pureRed">
                cool!
              </span>
              <img
                className="absolute w-[55px] mt-28 ml-6"
                src="https://re-direction-bucket.s3.ap-northeast-2.amazonaws.com/stickers/fabulous.svg"
                alt="smartphone frame image"
              />
              <div className="absolute text-7xl group-hover:animate-dancing">
                💃🏻
              </div>
              <div className="w-24 h-40 border-2 bg-gradient-to-b from-white to-gray" />
            </div>
            <div className="h-20 mx-5 mb-5 text-center">
              <h4>
                Review the results, and optionally add text and stickers for decoration.
              </h4>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Introduction;
