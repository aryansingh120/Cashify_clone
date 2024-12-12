import React from 'react'

const Footer2 = () => {
  let imgArr=["/photos/twitter.webp","/photos/fb.webp","/photos/insta.webp","/photos/youtube.webp"];
  let textArr=[["Services","Sell Phone","Sell Television","Sell Smart Watch","Sell Smart Speakers","Sell DSLR Camera","Sell Earbuds","Repair Phone","Buy Phone","Recycle Phone","Finr New Phone","Partner With Us"],["Company","About us","Careers","Articles","Press Releses","Become cashify Partner","Become supersale partner"],["Sell Device","Mobile Phone","laptop","tablet","imac","gaming consoles"],["Help & Support","FAq","contact us","Warrenty policy","refund policy"],["More Info","Terms & conditions","privacy policy","terms of use","e-waste policy","coolie policy","gdpr compliance","what is refurbished","device safty"]]
  return (
    <div className='bg-[#F7F7F7] px-[2vw]'>
        <div className='md:flex  '>
            
            <div className='md:flex border-2 border-[blue]'>
             
              <div className=' md:w-[13rem] md:flex-shrink-0 '>
              <div className=' h-[5rem] overflow-hidden '>
              <img src="/photos/cashify3-remove.png" alt="img not available" className=' h-[10rem] mt-[-2rem] flex-shrink-0'  />
              </div>
              <div className='flex pl-[.5rem] md:flex-col border-2 border-black'>
                <p className='mr-[1rem] mt-[.2rem] flex-shrink-0 text-[#707070] font-bold'>Follow us on</p>

                <div className=' flex gap-[1rem] md:mt-[1rem] '>
                  {
                     imgArr.map((item,index)=>{
                      return <img key={index} src={item} alt="img not available" className=' h-[2rem]' />
                    })
                  }
                </div>
              </div>

              </div>
            </div>
              <div className=' py-[1rem] border-2 border-black md:w-[20%]'>
                   {/* <p className='text-[#707070] font-bold ml-[.5rem] mb-[1rem]'>Services</p> */}
                   <ul>
                   {
                    textArr[0].map((item,index)=>{
                      return <li key={index} className={`capitalize text-[#707070] text-[13px] mt-[10px] ml-[1.1rem] ${(index===0)? "text-[1.4rem] font-bold ":"font-medium"}`}>{item}</li>
                    })
                   }
                   </ul>
            </div>

   <div className='flex border-2 border-[red] md:w-[75%] md:justify-between md:flex-row flex-col'>
            <div className='border-b-2 md:border-none py-[1rem]'>
            {/* <p className='text-[#707070] font-bold mb-[1rem] ml-[.5rem]'>Company</p> */}
                   <ul>
                   {
                    textArr[1].map((item,index)=>{
                      return <li key={index} className={` capitalize text-[#707070] ml-[1.1rem] text-[13px] mt-[10px] ${(index===0)? "text-[1.4rem] font-bold ":"font-medium"}` }>{item}</li>
                    })
                   }
                   </ul>
            </div>
            <div className='border-b-2 md:border-none  py-[1rem]'>
            {/* <p className='text-[#707070] font-bold mb-[1rem] ml-[.5rem]'>Sell Device</p> */}
                   <ul>
                   {
                    textArr[2].map((item,index)=>{
                      return <li key={index} className={`capitalize text-[#707070] ml-[1.1rem] text-[13px] mt-[10px] ${(index===0)? "text-[1.4rem] font-bold ":"font-medium"}`}>{item}</li>
                    })
                   }
                   </ul>
            </div>
            <div className='border-b-2 md:border-none py-[1rem]'>
            {/* <p className='text-[#707070] font-bold mb-[1rem] ml-[.5rem]'>Help & Support</p> */}
                   <ul>
                   {
                    textArr[3].map((item,index)=>{
                      return <li key={index} className={`capitalize text-[#707070] ml-[1.1rem] text-[13px] mt-[10px] ${(index===0)? "text-[1.4rem] font-bold ":"font-medium"}`}>{item}</li>
                    })
                   }
                   </ul>
            </div>
            <div className='border-b-2 md:border-none  py-[1rem] flex flex-col md:items-center'>
            {/* <p className='text-[#707070] font-bold mb-[1rem] ml-[.5rem]'>More Info</p> */}
                   <ul>
                   {
                    textArr[4].map((item,index)=>{
                      return <li key={index} className={` capitalize text-[#707070] ml-[1.1rem] text-[13px] mt-[10px] ${(index===0)? "text-[1.4rem] font-bold ":"font-medium"}`}>{item}</li>
                    })
                   }
                   </ul>
                   <button className='bg-[#42C8B7] flex rounded-xl p-[.5rem] mt-[1rem] flex-shrink-0 w-[12.5rem] md:hidden'>
                    <img src="/photos/chat.svg" alt="img not available" className='h-[2.5rem] mt-[.3rem] mr-[.5rem]' />
                    <p className='text-white text-start'>
                      <p className='font-bold'>Chat with Us</p>
                      <p className='font-medium text-[12px]'>Got questions? Just ask.</p>
                    </p>
                   </button>
            </div>
            </div>       
        </div>
        {/* ****************************************************************** */}
          <div className='flex flex-col gap-[2rem] items-center md:flex-row md:border-y-2 py-[1rem] border-2 border-black'>
          <div className='pl-[1rem] md:w-[70%] md:text-[12px] font-medium'>
            <p className='text-[#707070]'>Registered Office:</p>
            <p className=''>Manak Waste Management Pvt Ltd.| B-39, 1st Floor, Middle Circle, Connaught Place, New Delhi-110001, India, Support-7290068900 | CIN: U27205DL2009PTC190441 </p>
            <p className=''>Manak Waste Management Pvt Ltd. is ISO 27001 & 27701 Compliance Certified. Person who may be contacted in case of any compliance related queries or grievances : Manoj Kumar </p>
            <p className='cursor-pointer text-[#42C8B7] font-medium'>(sarmendersingh20@gmail.com)</p>
            <p className='mt-[1rem]'>** All product names, logos, and brands are property of their respective owners. All company, product and service names used in this website are for identification purposes only. Use of these names, logos, and brands does not imply endorsement.</p>
          </div>
          <div className='w-[80%] md:w-[30%]'>
            <img src="/photos/btn3.svg" alt="img not available" className=''/>
          </div>
          </div>
          <p className='text-[12px] font-medium my-[2rem] ml-[1rem]'>Copyright @ 2024 Cashify All rights reserved</p>
      
    </div>
  )
}

export default Footer2
