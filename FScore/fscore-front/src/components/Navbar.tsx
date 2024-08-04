import settingBtn from '../assets/settingBtn.png';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-20 px-12 py-3 border-b-2 border-solid border-zinc-200">
      <h1 className="kadwa-bold text-3xl hover:text-zinc-500 cursor-pointer">FScore</h1>
      <div className="flex gap-10">
        <p className="text-xl font-bold cursor-pointer hover:underline">뉴스</p>
        <p className="text-xl font-bold cursor-pointer hover:underline">이적</p>
        <img src={settingBtn} alt="설정" className="h-8 cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
