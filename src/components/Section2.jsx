import { useState } from 'react';
import section2_1_1_jpg from '@assets/images/section2-1-1.jpg';
import section2_1_2_jpg from '@assets/images/section2-1-2.jpg';
import section2_2_jpg from '@assets/images/section2-2.jpg';

const Section2 = () => {
  const [slide, setSlide] = useState(false);  // control slide in section 2-1.
  
  const toggleSlide = (index) => {
    index ? setSlide(true) : setSlide(false);
  }

  const borderBlue = {
    borderColor: "#0067E6",
  }

  const borderWhite = {
    borderColor: "white",
  }

  return <>
    <div id="section2" className="pt-16 xl:pt-[100px] px-[10vw] xl:px-[13.5vw] bg-[#F3F3F3] text-[#2E3742]">
      <h3 className="pb-8 xl:pb-16 border-b border-[#CFCFCF] font-semibold text-2xl xl:text-[32px] leading-[46px] text-center">Section 2</h3>
      
      {/* Ssction 2-1 */}
      <div className="py-12 xl:py-[100px] border-b border-[#CFCFCF] xl:flex xl:justify-center">
        <div className='xl:w-[30.3vw] xl:mr-[8.7vw]'>
          <h4 className='w-[120px] py-1 mb-5 font-semibold leading-6 text-center bg-black text-white rounded-[5px]'>Ssction 2-1</h4>

          <div className='mb-8'>
            <span className='mb-2 font-semibold text-[32px] leading-[46px]'>Why do we use it?</span>
            <p className='font-normal leading-6'>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>
          </div>

          <div>
            {/* Where can I get some? */}
            <div className='mb-5 pl-6 border-l-[5px] border-[#0067E6] hover:cursor-pointer' 
                 style={ !slide ?  borderBlue : borderWhite }
            >
              <span className='mb-2 font-semibold text-xl leading-[30px]' onClick={() => toggleSlide(0)}>
                Where can I get some?
              </span>

              {
                !slide && <p className='font-normal leading-5'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
              }
            </div>

            {/* Where does it come from? */}
            <div className=' mb-8 xl:mb-0 pl-6 border-l-[5px] border-white hover:cursor-pointer'
                 style={ slide ?  borderBlue : borderWhite }
            >
              <span className='font-semibold text-xl leading-[30px] text-[#2E3742]/50' onClick={() => toggleSlide(1)}>
                Where does it come from?
              </span>

              { 
                slide && <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
              }
            </div>
          </div>
        </div>
        
        {
          !slide && <img src={ section2_1_1_jpg } alt="section2-1-1 image" title="section2-1-1 image" className='xl:w-[34.3vw] rounded-[10px] object-contain' />
        }

        { 
          slide && <img src={ section2_1_2_jpg } alt="section2-1-2 image" title='section2-1-2 image' className='xl:w-[34.3vw] rounded-[10px] object-contain' />
        }
      </div>
    
      {/* Section2-2 */}
      <div className="py-12 xl:py-[100px] xl:flex xl:justify-center xl:items-center">
        <div className='xl:w-[30.3vw] xl:mr-[8.7vw]'>
          <h4 className='w-[120px] py-1 mb-5 font-semibold leading-6 text-center bg-black text-white rounded-[5px]'>Ssction 2-2</h4>

          <div className='mb-8'>
            <span className='mb-2 font-semibold text-[32px] leading-[46px]'>Why do we use it?</span>
            <p className='font-normal leading-6'>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>
          </div>
        </div>

        <img src={ section2_2_jpg } alt="section2-2 image" title='section2-2 image' className='xl:w-[34.3vw] rounded-[10px] object-contain' />
      </div>
    </div>
  </>
}

export { Section2 };