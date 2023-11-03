function Visual() {
  const randomIndex = Math.floor(Math.random() * 3);

  const imageSrc =
    randomIndex === 0
      ? "/assets/main_image_1_dog.png"
      : randomIndex === 1
      ? "/assets/main_image_2_skate.png"
      : "/assets/main_image_3_cat.png";

  return (
    <div className="relative flex justify-center items-center h-[600px] pb-10 min-w-[900px]">
      <div className="absolute z-10 animate-appearFrame">
        <img
          className="w-[900px]"
          src="/assets/smartphone_frame.png"
          alt="smartphone frame image"
        />
      </div>
      <div className="absolute animate-appearImage">
        <div className="absolute flex items-center w-[404px] h-full bg-white animate-appearBlocker">
          <h2 className="text-xl font-bold animate-appearText">
            Convert your horizontal video
            <br />
            to vertical video with motion analysis.
          </h2>
        </div>
        <div className="absolute left-[618px] w-[400px] h-full bg-white animate-appearBlocker" />
        <img className="w-[850px]" src={imageSrc} alt="main page image" />
      </div>
    </div>
  );
}

export default Visual;
