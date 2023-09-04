import PropTypes from "prop-types";

function OptionSlider({ setSensitivity }) {
  return (
    <>
      <label className="font-bold" htmlFor="sensitivity">
        motion tracking option
      </label>
      <div className="flex items-center mb-10">
        <span className="mr-5">sensitive</span>
        <input
          id="sensitivity"
          className="w-[200px] h-[12px] accent-blue bg-gray rounded-lg hover:cursor-pointer appearance-none"
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
  setSensitivity: PropTypes.func.isRequired,
};

export default OptionSlider;
