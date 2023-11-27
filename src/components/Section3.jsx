import section3_item1_svg from '/images/section3_item1.svg';
import section3_item2_svg from '/images/section3_item2.svg';
import section3_item3_svg from '/images/section3_item3.svg';
import section3_item4_svg from '/images/section3_item4.svg';

const Section3 = () => {
  return <>
    <div id="section3" className="w-full px-[10vw] xl:px-0 py-12 xl:py-[100px] text-center bg-black text-white">
      <h3 className="mb-8 xl:mb-16 font-semibold text-2xl xl:text-[32px] leading-[46px]">Section 3</h3>

      <ul className="w-full xl:flex xl:justify-center">
        {/* item 1 */}
        <li className='xl:w-[15.7vw] xl:mr-16 mb-16 xl:mb-0'>
          <img src={ section3_item1_svg } alt="section3 item1 image" title="section3 item1 image" className='mx-auto mb-4 w-16 h-16 object-contain' />
          <span className='mb-2 font-semibold text-xs xl:text-xl leading-[30px]'>item 1</span>
          <p className='h-24 xl:h-[120px] mb-2 xl:mb-4 font-normal text-xs xl:text-base leading-6'>Almost all Synology backup solutions come license free and allow for the backup of unlimited devices, making us a cost-effective, one-stop shop for all of your backup needs.</p>

          <a href="#" onClick={ (e) => e.preventDefault() } className='font-normal leading-7 text-[#2789F2] underline underline-offset-2 hover:no-underline'>Learn more</a>
        </li>
        
        {/* item 2 */}
        <li className='xl:w-[15.7vw] xl:mr-16 mb-16 xl:mb-0'>
          <img src={ section3_item2_svg } alt="section3 item2 image" title="section3 item2 image" className='mx-auto mb-4 w-16 h-16 object-contain' />
          <span className='mb-2 font-semibold text-xs xl:text-xl leading-[30px]'>item 2</span>
          <p className='h-24 xl:h-[120px] mb-2 xl:mb-4 font-normal text-xs xl:text-base leading-6'>Lorem ipsum and its many variants have been employed since the early 1960ies, and quite likely since the sixteenth century.</p>
          <a href="#" onClick={ (e) => e.preventDefault() } className='font-normal leading-7 text-[#2789F2] underline underline-offset-2 hover:no-underline'>Learn more</a>
        </li>

        {/* item 3 */}
        <li className='xl:w-[15.7vw] xl:mr-16 mb-16 xl:mb-0'>
          <img src={ section3_item3_svg } alt="section3 item3 image" title="section3 item3 image" className='mx-auto mb-4 w-16 h-16 object-contain' />
          <span className='mb-2 font-semibold text-xs xl:text-xl leading-[30px]'>item 3</span>
          <p className='h-24 xl:h-[120px] mb-2 xl:mb-4 font-normal text-xs xl:text-base leading-6'>Lorem ipsum dolor sit amet, aliquip omnesque sit no, te pri vitae veniam intellegebat.</p>
          <a href="#" onClick={ (e) => e.preventDefault() } className='font-normal leading-7 text-[#2789F2] underline underline-offset-2 hover:no-underline'>Learn more</a>
        </li>

        {/* item 4 */}
        <li className='xl:w-[15.7vw]'>
          <img src={ section3_item4_svg } alt="section3 item4 image" title="section3 item4 image" className='mx-auto mb-4 w-16 h-16 object-contain' />
          <span className='mb-2 font-semibold text-xs xl:text-xl leading-[30px]'>item 4</span>
          <p className='h-24 xl:h-[120px] mb-2 xl:mb-4 font-normal text-xs xl:text-base leading-6'>In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready.</p>
          <a href="#" onClick={ (e) => e.preventDefault() } className='font-normal leading-7 text-[#2789F2] underline underline-offset-2 hover:no-underline'>Learn more</a>
        </li>
      </ul>
    </div>
  </>
}

export { Section3 };