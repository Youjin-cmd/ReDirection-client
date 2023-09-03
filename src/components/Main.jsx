import DropInput from "./DropInput";

function Main() {
  const randomIndex = Math.floor(Math.random() * 2);

  const imageSrc =
    randomIndex === 0
      ? "/assets/main_image_1_dog.png"
      : "/assets/main_image_2_skate.png";

  return (
    <div className="flex items-center h-full">
      <div className="relative flex-none w-[1000px]">
        <img className="w-full" src={imageSrc} alt="dog image" />
        <img
          className="absolute top-[-25px] left-[530px] w-[300px] animate-pulse"
          src="/assets/image_rectangle.svg"
        />
      </div>
      <div className="flex justify-center items-center w-full h-full">
        <DropInput />
      </div>
    </div>
  );
}

export default Main;
