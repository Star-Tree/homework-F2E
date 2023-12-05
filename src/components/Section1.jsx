import section1_jpg from '@assets/images/section1.jpg';

const Section1 = () => {
  return <>
    <div id="section1" className="xl:flex xl:justify-center py-12 xl:py-[100px] px-[10vw] xl:pl-[13.5vw] xl:pr-[13vw]">
      <div className='xl:w-[30.3vw] xl:mr-[8.7vw] text-[#2E3742]'>
        <div className='mb-8'>
          <h3 className='mb-2 font-semibold text-2xl xl:text-[32px] leading-[46px]'>Section 1</h3>
          <p className='font-normal text-xs xl:text-base leading-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>

        <div className='mb-8'>
          <span className='font-semibold text-base xl:text-xl leading-[30px]'>Where can I get some?</span>
          <p className='font-normal text-xs xl:text-base leading-6'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
        </div>

        <div className='mb-8 xl:mb-0'>
          <span className='font-semibold text-base xl:text-xl leading-[30px]'>Where does it come from?</span>
          <p className='font-normal text-xs xl:text-base leading-6'>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
        </div>
      </div>
      
      <img src={ section1_jpg } alt="section1 image" title="section1 image" className='xl:w-[34.3vw] rounded-[10px] object-contain' />
    </div>
  </>
}

export { Section1 };