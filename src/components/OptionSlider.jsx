import PropTypes from "prop-types";
import useProgressStore from "../store/progress";

function OptionSlider({ isFixed, setSensitivity }) {
  const { showLoading } = useProgressStore();

  return (
    <>
      <label className="font-bold" htmlFor="sensitivity">
        motion tracking option
      </label>
      <div className="flex items-center mb-10">
        <span className="mr-5">sensitive</span>
        {(isFixed || showLoading) && (
          <div className="absolute w-[440px] h-20 -m-10 bg-white opacity-70" />
        )}
        <input
          id="sensitivity"
          className={`w-[200px] h-[12px] bg-gray rounded-lg hover:cursor-pointer appearance-none"
          ${isFixed ? "accent-gray" : "accent-blue"}`}
          type="range"
          min={10}
          max={20}
          step={5}
          defaultValue={15}
          onChange={e => setSensitivity(e.target.value)}
        />
        <span className="ml-5">modest</span>
      </div>
    </>
  );
}

OptionSlider.propTypes = {
  isFixed: PropTypes.bool.isRequired,
  setSensitivity: PropTypes.func.isRequired,
};

export default OptionSlider;
