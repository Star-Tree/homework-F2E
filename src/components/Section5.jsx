import section5_card1_svg from '/images/section5_card1.svg';
import section5_card2_svg from '/images/section5_card2.svg';
import section5_card3_svg from '/images/section5_card3.svg';
import section5_arrow_svg from '/images/section5_arrow.svg';

const Section5 = () => {
  return <>
    <div id="section5" className="px-[10vw] xl:px-0 py-12 xl:py-[100px] bg-[#F3F3F3] text-[#2E3742]">
      <h3 className="mb-8 xl:mb-16 text-center font-semibold text-2xl xl:text-[32px] leading-[46px]">Section 5</h3>

      <ul className="xl:flex xl:justify-center">
        {/* card1 */}
        <li className='xl:w-[23.4vw] xl:mr-[1.2vw] mb-16 xl:mb-0 hover:drop-shadow-lg hover:cursor-pointer'>
          <img src={ section5_card1_svg } alt="section5 card1 image" title="section5 card1 image" className='w-full object-contain' />

          <div className='flex flex-col justify-between h-[310px] p-8 bg-white rounded-b-[10px]'>
            <div>
              <span className='mb-2 font-semibold text-xl leading-[30px]'>card 1</span>
              <p className='font-normal leading-6'>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
            </div>
            
            <div className='flex items-center'>
              <a href="#" onClick={ (e) => e.preventDefault() } className='mr-3 font-medium text-[15px] leading-[18.15px] text-[#0067E6]'>
                Learn more
              </a>

              <img src={ section5_arrow_svg } alt="section5 arrow image" title="section5 arrow image" className='w-[14px] h-[3] object-contain' />
            </div>
          </div>
        </li>

        {/* card2 */}
        <li className='xl:w-[23.4vw] xl:mr-[1.2vw] mb-16 xl:mb-0 hover:drop-shadow-lg hover:cursor-pointer'>
          <img src={ section5_card2_svg } alt="section5 card2 image" title="section5 card2 image" className='w-full object-contain' />
          
          <div className='flex flex-col justify-between h-[310px] p-8 bg-white rounded-b-[10px]'>
            <div>
              <span className='mb-2 font-semibold text-xl leading-[30px]'>card 2</span>
              <p className='font-normal leading-6'>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </div>

            <div className='flex items-center'>
              <a href="#" onClick={ (e) => e.preventDefault() } className='mr-3 font-medium text-[15px] leading-[18.15px] text-[#0067E6]'>
                Learn more
              </a>

              <img src={ section5_arrow_svg } alt="section5 arrow image" title="section5 arrow image" className='w-[14px] h-[3] object-contain' />
            </div>
          </div>
        </li>

        {/* card3 */}
        <li className='xl:w-[23.4vw] hover:drop-shadow-lg hover:cursor-pointer'>
          <img src={ section5_card3_svg } alt="section5 card3 image" title="section5 card3 image" className='w-full object-contain' />
          
          <div className='flex flex-col justify-between h-[310px] p-8 bg-white rounded-b-[10px]'>
            <div>
              <span className='mb-2 font-semibold text-xl leading-[30px]'>card 3</span>
              <p className='font-normal leading-6'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
            </div>

            <div className='flex items-center'>
              <a href="#" onClick={ (e) => e.preventDefault() } className='mr-3 font-medium text-[15px] leading-[18.15px] text-[#0067E6]'>
                Learn more
              </a>
              
              <img src={ section5_arrow_svg } alt="section5 arrow image" title="section5 arrow image" className='w-[14px] h-[3] object-contain' />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </>
}

export { Section5 };