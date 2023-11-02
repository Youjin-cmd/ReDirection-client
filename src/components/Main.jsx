import { useEffect } from "react";
import DropInput from "./DropInput";
import usePageStore from "../store/page";

function Main() {
  const { setCurrentPage } = usePageStore();

  useEffect(() => {
    setCurrentPage("");
  }, [setCurrentPage]);

  const randomIndex = Math.floor(Math.random() * 3);

  const imageSrc =
    randomIndex === 0
      ? "/assets/main_image_1_dog.png"
      : randomIndex === 1
      ? "/assets/main_image_2_skate.png"
      : "/assets/main_image_3_cat.png";

  return (
    <>
      <section className="relative flex justify-center items-center h-[600px] py-20 min-w-[900px]">
        <div className="absolute z-10 animate-appearFrame">
          <img
            className="w-[900px]"
            src="/assets/smartphone_frame.png"
            alt="smartphone frame image"
          />
        </div>
        <div className="absolute animate-appearImage">
          <div className="absolute flex items-center w-[404px] h-full bg-white animate-appearBlocker">
            <h2 className="text-xl font-bold">
              Convert your horizontal video
              <br />
              to vertical video with motion analysis.
            </h2>
          </div>
          <div className="absolute left-[618px] w-[400px] h-full bg-white animate-appearBlocker" />
          <img className="w-[850px]" src={imageSrc} alt="main page image" />
        </div>
      </section>
      <section className="py-10 bg-red">
        <div>
          <article className="flex justify-center items-center w-full">
            <div className="flex flex-col items-center mr-10">
              <h3 className="mb-5 text-xl text-white font-bold">STEP 1</h3>
              <div className="w-60 h-80 bg-white rounded-lg">
                content
              </div>
            </div>
            <div className="flex flex-col items-center mr-10">
              <h3 className="mb-5 text-xl text-white font-bold">STEP 2</h3>
              <div className="w-60 h-80 bg-white rounded-lg">
                content
              </div>
            </div>
            <div className="flex flex-col items-center mr-10">
              <h3 className="mb-5 text-xl text-white font-bold">STEP 3</h3>
              <div className="w-60 h-80 bg-white rounded-lg">
                content
              </div>
            </div>
          </article>
        </div>
      </section>
      <section className="py-20">
        <div>
          <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="mb-5">
              <DropInput />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
