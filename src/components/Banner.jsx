import { useState } from "react";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const changeIndex = (num) => {
    setIndex(num);
  };

  const whiteText = {
    color: "white",
  };

  const grayText = {
    color: "white",
    opacity: "50%",
  }

  return <>
    {/* background for banner */}
    <header className='w-full h-[100vh] xl:h-auto bg-cover bg-no-repeat bg-center bg-black/50 xl:bg-transparent bg-blend-multiply xl:bg-blend-normal bg-[url("@assets/images/banner.jpg")] pt-8 xl:pt-[100px] px-[10vw] xl:pl-[13.5vw] xl:pr-[55.2vw] xl:pb-[164px] mb-[-40px] xl:mb-[-68px]'>
      {/* logo */}
      <h1 className='mb-16 xl:mb-8'>
          <a className='w-[131px] h-[32px] invert xl:invert-0 bg-[url("@assets/images/logo@2x.png")] bg-no-repeat bg-contain overflow-hidden indent-[101%] whitespace-nowrap' href="#" onClick={ (e) => e.preventDefault() }>
            群暉科技 Synology Inc.
          </a>
      </h1>

      <h2 className='mb-8 xl:mb-4 text-xl xl:text-[46px] leading-7 xl:leading-[62px] font-bold text-white xl:text-[#2E3742]'>Banner Lorem Ipsum Lorem Ipsum</h2>

      <p className='mb-16 xl:mb-8 text-base xl:text-xl leading-[30px] font-normal text-white xl:text-[#2E3742]'>
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
      </p>

      <button className='px-4 xl:px-8 py-2 xl:py-[11px] text-xs xl:text-base bg-[#0067E6] rounded-full text-white leading-8 text-center font-normal'>
        Request a demo
      </button>
    </header>

    {/* nav about section(1 ~ 5) */}
    <nav className="sticky top-0 left-0 right-0">
      <ul className='flex flex-wrap xl:flex-nowrap justify-between bg-[#151E1C]/50 text-white/50 text-center'>
        <li className='flex-1 hover:text-white hover:cursor-pointer'>
          <a href="#section1" className="py-2 xl:py-5 text-xs xl:text-xl leading-6 active:text-white"
          onClick={() => changeIndex(1)} style={(index === 1) ? whiteText : grayText}>Section 1</a>
        </li>

        <li className='flex-1 hover:text-white hover:cursor-pointer active:text-white'>
          <a href="#section2" className="py-2 xl:py-5 text-xs xl:text-xl leading-6"
          onClick={() => changeIndex(2)} style={(index === 2) ? whiteText : grayText}>Section 2</a>
        </li>

        <li className='flex-1 hover:text-white hover:cursor-pointer active:text-white'>
          <a href="#section3" className="py-2 xl:py-5 text-xs xl:text-xl leading-6"
          onClick={() => changeIndex(3)} style={(index === 3) ? whiteText : grayText}>Section 3</a>
        </li>

        <li className='flex-1 hover:text-white hover:cursor-pointer active:text-white'>
          <a href="#section4" className="py-2 xl:py-5 text-xs xl:text-xl leading-6"
          onClick={() => changeIndex(4)} style={(index === 4) ? whiteText : grayText}>Section 4</a>
        </li>

        <li className='flex-1 hover:text-white hover:cursor-pointer active:text-white'>
          <a href="#section5" className="py-2 xl:py-5 text-xs xl:text-xl leading-6"
          onClick={() => changeIndex(5)} style={(index === 5) ? whiteText : grayText}>Section 5</a>
        </li>
      </ul>
    </nav>
  </>
}

export { Banner };