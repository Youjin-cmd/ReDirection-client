function Header() {
  return (
    <div className="flex items-end w-full h-min-[100px] p-5 pt-12">
      <img
        src="/assets/logo_rectangle.svg"
        alt="decoration for logo"
        className="absolute w-8 top-[40px] left-[28px]"
      />
      <img src="/assets/logo.svg" alt="logo" className="z-0 mr-10" />
      <div>
        <span className="truncate h-10">
          Convert your horizontal video to vertical video with motion analysis,
          for free!
        </span>
      </div>
    </div>
  );
}

export default Header;
