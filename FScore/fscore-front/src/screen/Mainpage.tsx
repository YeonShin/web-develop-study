import MainImage from "../assets/mainImg.png";

const Mainpage = () => {
  return (
    <div className="bg-zinc-300">
      <img src={MainImage} alt="메인이미지" className="w-80"/>
      <input type="text" placeholder="Username" className="w-96 px-8 py-6 border-"/>
    </div>
  )
}

export default Mainpage;