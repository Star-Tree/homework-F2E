import alabama_svg from '@assets/images/section4_alabama.svg';
import corin_svg from '@assets/images/section4_corin.svg';
import dsm_svg from '@assets/images/section4_dsm.svg';
import university_of_washington_svg from '@assets/images/section4_university_of_washington.svg';
import shiseido_svg from '@assets/images/section4_shiseido.svg';
import unesco from '@assets/images/section4_unesco.svg';

const Section4 = () => {
  return <>
    <div id="section4" className="px-[10vw] xl:px-0 py-12 xl:py-[100px] text-[#2E3742]">
      <h3 className="mb-[52px] font-semibold text-2xl xl:text-[32px] leading-[46px] text-center">Section 4</h3>

      <ul className="xl:flex xl:justify-center mb-20">
        {/* alabama */}
        <li className="xl:w-[34.8vw] xl:flex xl:justify-center xl:items-center mb-12 xl:mb-0 xl:mr-16 p-[52px] bg-[#F3F3F3] rounded-[10px]">
          <img src={ alabama_svg } alt="alabama image" title="alabama image" className='mb-8 xl:mb-0 xl:w-[184px] xl:h-[106px] xl:mr-10 object-contain' />
          <p className='font-semibold text-xl leading-[30px]'>Lorem ipsum dolor sit amet, aliquip omnesque sit no, te pri vitae veniam intellegebat.</p>
        </li>

        {/* corin */}
        <li className="xl:w-[34.8vw] xl:flex xl:justify-center xl:items-center p-[52px] bg-[#F3F3F3] rounded-[10px]">
          <img src={ corin_svg } alt="corin image" title="corin image" className='mb-8 xl:mb-0 xl:w-[180px] xl:h-[106px] xl:mr-10 object-contain' />
          <p className='font-semibold text-xl leading-[30px]'>It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
        </li>
      </ul>

      <ul className='mx-8 xl:mx-[14.5vw] xl:flex xl:justify-center xl:items-center'>
        {/* dsm_ */}
        <li className='flex justify-center xl:block mb-8 xl:mb-0 xl:mr-[7.2vw]'>
          <img src={ dsm_svg } alt="dsm image" title="dsm image" className='xl:w-[251px] xl:h-[96px] object-contain' />
        </li>

        {/* university_of_washington_ */}
        <li className='flex justify-center xl:block mb-8 xl:mb-0 xl:mr-[7.2vw]'>
          <img src={ university_of_washington_svg } alt="university of washington image" title="university of washington image" className='xl:w-[206px] xl:h-[96px] object-contain' />
        </li>
        
        {/* shiseido */}
        <li className='flex justify-center xl:block mb-8 xl:mb-0 xl:mr-[7.2vw]'>
          <img src={ shiseido_svg } alt="shiseido image" title="shiseido image" className='xl:w-[277px] xl:h-[96px] object-contain' />
        </li>

        {/* unesco */}
        <li className='flex justify-center xl:block'>
          <img src={ unesco } alt="unesco image" title="unesco image" className='xl:w-[206px] xl:h-[96px] object-contain' />
        </li>
      </ul>
    </div>
  </>
}

export { Section4 };