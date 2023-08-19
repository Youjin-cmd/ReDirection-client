import DropInput from "./DropInput";

function Main() {
  return (
    <div className="flex items-center h-full">
      <div className="relative flex-none w-[1000px]">
        <img
          className="w-full"
          src="/assets/main_image_1_dog.png"
          alt="dog image"
        />
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
