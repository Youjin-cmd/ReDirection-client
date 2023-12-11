function Visual() {
  const randomIndex = Math.floor(Math.random() * 3);

  const imageSrc =
    randomIndex === 0
      ? "/assets/main_image_1_dog.png"
      : randomIndex === 1
      ? "/assets/main_image_2_skate.png"
      : "/assets/main_image_3_cat.png";

  return (
    <>
      {/* mobile */}
      <div className="flex flex-col justify-center items-center md:hidden overflow-hidden">
        <div className="relative flex justify-center items-center h-[550px] w-full">
          <div className="absolute z-10 animate-mobileAppearFrame w-[900px]">
            <img
              src="/assets/smartphone_frame.png"
              alt="smartphone frame image"
            />
          </div>
          <div className="absolute animate-mobileAppearImage w-[850px]">
            <div className="absolute flex items-center w-[404px] h-full bg-white animate-mobileAppearBlocker" />
            <div className="absolute left-[618px] w-[235px] h-full bg-white animate-mobileAppearBlocker" />
            <img className="w-[850px]" src={imageSrc} alt="main page image" />
          </div>
        </div>
        <h2 className="flex justify-center items-center mb-16 text-lg md:text-xl font-bold animate-mobileAppearText text-center">
          Convert your horizontal video
          <br />
          to vertical video with motion analysis.
        </h2>
      </div>
      {/* desktop */}
      <div className="hidden flex-col justify-center items-center md:flex overflow-hidden">
        <div className="relative flex justify-center items-center min-h-[550px] w-full">
          <div className="absolute z-10 animate-appearFrame w-[900px]">
            <img
              src="/assets/smartphone_frame.png"
              alt="smartphone frame image"
            />
          </div>
          <div className="absolute animate-appearImage w-[850px]">
            <div className="absolute flex items-center w-[404px] h-full bg-white animate-appearBlocker">
              <h2 className="text-xl font-bold animate-appearText">
                Convert your horizontal video
                <br />
                to vertical video with motion analysis.
              </h2>
            </div>
            <div className="absolute left-[618px] w-[235px] h-full bg-white animate-mobileAppearBlocker" />
            <img className="w-[850px]" src={imageSrc} alt="main page image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Visual;
