import React from 'react'

const Article = () => {
    let articleArr=[{photo:"/photos/hyper3.webp",head:"HyperOS 2.0 Eligible Devices, Release Date All Details List!",text:"The HyperOS 2.0 release date will be announced in the first week of October, with the rollout for Hyper OS 2.0 eligible devices starting in the second week.",date:"22nd Sep 2024"},{photo:"/photos/hyper2.webp",head:"Best Airtel, Jio, Vi International Roaming Plans In 2024",text:"If you are searching for the best international roaming plans for Airtel, Jio and Vi, you have landed just at the right place. Find the complete details below.",date:"18th Sep 2024"},{photo:"/photos/hyper3.webp",head:"What Is The New Camera Control Button In iPhone 16?",text:"Are you curious about the new Camera Control Button in the iPhone 16 series? Here is everything you need to know about it before you buy a new iPhone!",date:"16th Sep 2024"}];

    let mobArr=[{img1:"/photos/iphone1.webp",head:"How To Customize Action Button On iPhone 16?",date:"13th Sep 2024"},{img1:"/photos/iphone2.webp",head:"How iPhone 16 Enhances Security Features? Tips & Tricks Inside",date:"13th Sep 2024"},{img1:"/photos/iphone3.webp",head:"Snapdragon 8 Gen 4 Vs Bionic A18 Vs Dimensity 9400 – Battle Of Mobile Chipsets",date:"12th Sep 2024"},{img1:"/photos/iphone4.webp",head:"Most Useful iPhone 16 Accessories You Need to Buy Right Now!",date:"13th Sep 2024"}];

    let photoArr=[{img1:"/photos/Oppo1.webp",text:"Oppo F27 5G Review: Can Good Looks Compensate For Average Performance?",date:"23rd Sep 2024"},{img1:"/photos/oppo2.webp",text:"Vivo T3 Pro Review: Great For Gamers, Average For Shutterbugs",date:"16th Sep 2024"},{img1:"/photos/oppo3.webp",text:"Xiaomi Redmi Watch 5 Active Review: Your New Budget Fitness Companion!",date:"16th Sep 2024"},{img1:"/photos/oppo4.webp",text:"Vivo V40 Review: Is It The Best Camera Phone In The Mid-Range Segment?",date:"16th Sep 2024"},{img1:"/photos/oppo5.webp",text:"Samsung Galaxy M35 5G Review: The Ideal Mid-Ranger?",date:"9th Sep 2024"},{img1:"/photos/oppo6.webp",text:"POCO M6 Plus 5G Review: Great Battery Life, But Does It Deliver On Performance?",date:"2nd Sep 2024"},{img1:"/photos/oppo7.webp",text:"Poco Pad 5G Review: The Perfect Multimedia Machine!",date:"9th Sep 2024"},{img1:"/photos/oppo8.webp",text:"OPPO Reno 12 5G Review: AI Powerhouse or Overhyped?",date:"13th Sep 2024"},{img1:"/photos/oppo9.webp",text:"Xiaomi Redmi Pad SE 4G Review: iPad Mini On A Budget!",date:"24th Sep 2024"},{img1:"/photos/oppo11.webp",text:"Realme GT 6 Review: The Return Of The Flagship Killer Era!",date:"16th Sep 2024"}]
  return (
    <div>
    <div className='mx-[2vw] bg-[#F7F7F7] mt-[1rem] pl-[.6rem] '>
        <div className=' flex justify-between pt-[2rem] mb-[1rem] '>
          <div>
          <p className='font-bold text-[1.2rem] sm:text-[1.3rem] capitalize'>Trending Articles</p></div>
          <div>
          <button className='text-[#42C8B7] text-end '>See All</button>
          </div>
          
        </div>
        <div className='flex flex-shrink-0 gap-[1.5rem] overflow-x-scroll paras'>
            {
                 articleArr.map((item,index)=>{
                    return (
                        <div key={index} className=' flex flex-col flex-shrink-0 w-[82%] sm:w-[32%]'>
                            <img src={item.photo} alt="img not available paras"  className='rounded-lg'/>
                            <p className='font-bold mt-[1.6rem] text-[1.1rem]'>{item.head}</p>
                            <p className='mt-[1rem] text-[#707070] font-medium'>{item.text}</p>
                            <p className='mt-[1rem] text-[#707070] font-medium'>{item.date}</p>
                        </div>
                    )
                 })
            }
        </div>
        <div className='pt-[2rem] sm:grid sm:grid-cols-2 sm:gap-[2rem] pb-[2rem]'>
         {
            mobArr.map((item,index)=>{
                return (
                    <div key={index} className='flex justify-between mt-[1.5rem]'>
                     <div className='w-[34%] '>
                        <img src={item.img1} alt="img not available" className='h-[4.7rem] sm:h-auto rounded-lg ' />
                    </div>

                    <div className='w-[61%] sm:w-[64%] font-bold text-[14px] sm:text-[16px] flex flex-col justify-between'>
                        <p className='line-clamp-2'>{item.head}</p>
                        <p className=' text-[#707070]'>{item.date}</p>
                        </div>

                    </div>
                )
            })
         }
        </div>
        <div className='bg-white'>
        <div className=' flex justify-between pt-[2rem] mb-[1rem] '>
          <div>
          <p className='font-bold text-[1.2rem] sm:text-[1.3rem] capitalize'>Recent Reviews</p></div>
          <div>
          <button className='text-[#42C8B7] text-end '>See All</button>
          </div>
          
        </div>
        <div className='flex '>

        <p className='inline-block'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10  bg-[white] rounded-full sm:size-12 transform absolute mt-[2.7rem]">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z" clip-rule="evenodd" />
</svg>
</p>
        <div className='flex overflow-x-scroll gap-[2rem] paras'>
            {
                photoArr.map((item,index)=>{
                    return (
                        <div key={index} className='w-[20rem] flex flex-col flex-shrink-0 '>
                                <img src={item.img1} alt="img not available" className='rounded-xl' />
                                <p className='font-bold line-clamp-2'>{item.text}</p>
                                <p className='mt-[1rem] font-medium text-[#707070]'>{item.date}</p>

                        </div>
                    )
                })
            }
            </div>
            <p className='inline-block'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10 bg-white rounded-full sm:size-12 transform absolute ml-[-2.7rem] mt-[2.7rem]"> 
 <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clip-rule="evenodd" />
 </svg> 
</p> 
    </div>
        </div>
    </div>
        <div className='bg-[#42C8B7] px-[1.5rem] rounded-3xl sm:mx-[2vw] sm:flex sm:justify-between sm:px-[4rem] mt-[3rem]'>
            <div className='text-white font-bold sm:pt-[4rem]'>
                <p className='text-[2rem]'>Download the App</p>
                <p className='mb-[2rem] sm:w-[90%]'>Sell your old phone | Buy top-quality refurbished phones | Get your phone repaired</p>
                <img src="/photos/btn1.svg" alt="img not available" className='inline-block mr-[2.2rem]'/>
                <img src="/photos/btn2.svg" alt="img not available" className='inline-block' />

            </div>
            <div >
                <img src="/photos/cash.webp" alt="img not available" className='sm:h-[18rem] mt-[1rem] h-[12rem]' />
            </div>

        </div>
        {/* ********************************************************************* */}
        <div className='px-[2vw] text-[#707070] mt-[2rem]'>
            <p className='font-bold text-[1.3rem]'>Sell & Buy Your Old Mobile Phone On Cashify</p>
            <p className='text-[15px] font-medium'> <br /><br /> Want to sell old phone online and get some quick cash? Then, there is no better place than Cashify; we assure you that. Forget all those troubles of going to a shop, pleading for the best price and then crossing your fingers for the safety of your data. Cashify is the new one-stop to sell old phone online; it's like a wish granted by god. Yes, you heard it right. <br /><br /> With Cashify's smooth user experience, you can sell old phones online with just a few clicks. So, stay at your home, and sell old mobile phones right in the comfort of your home at the best possible price. No, that's not a typo - it's 100 per cent guaranteed. Introducing Cashify, India's biggest re-commerce website.<br /><br />And not just that, You can now buy old mobile phones with Cashify as well. Buying old mobile phone is the best way to upgrade without causing a hole in the pocket. Cashify keeps old mobile phones in better condition so that they feel as good as new ones when you purchase them.</p>

            <p className='font-medium text-[17px] mt-[1.5rem]'>Why Sell On Cashify?</p>
            <p className='text-[15px] font-medium'>  <br />Cashify allows you to sell old phones, laptops and other gadgets for instant cash, and you can use this money to purchase newer and better models. In addition, Cashify has partnered with several top brands in the country, including Apple, Samsung, Xiaomi, Oppo, Vivo, Amazon, Nokia, Vijay Sales, Reliance Digital, Hp, OnePlus, Dell, Realme and more, for offline and online exchange offers. <br /><br />Cashify's algorithmically generated price quotes are the fairest in the industry. All Cashify needs is certain details about your old phone's condition, age, model number, and warranty period, and you're good to go. <br /><br />Based on this data, Cashify will offer you the ideal cash value if you sell old phones, laptops or gadgets. We have an exclusive home pickup facility for mobile phones. So all you have to do is book an appointment at your comfortable time, and our representative will reach out to you. There's no haggling, no having to step out of your home, and the entire process can be completed in the shortest possible time.</p>

            <p className='font-medium text-[17px] mt-[1.5rem]'>Why Buy Old Mobile Phone With Cashify?</p>
            <p className='text-[15px] font-medium'> <br />If you want to buy old mobile, it is definitely a smart choice. You can save yourself more bucks while getting the best-in-class refurbished smartphones. Old mobile phones at Cashify are available at almost half price. Additionally, when you buy an old phone from unreliable sources, there is a lot of concern regarding device safety, but that's not the case with Cashify. Refurbished mobile phones are backed with a 6-month warranty from Cashify and are thoroughly inspected and expertly restored like new ones.</p>

            <p className='font-medium text-[17px] mt-[1.5rem]'>How does Cashify Work?
            </p>
            <p className='font-medium text-[17px] mt-[1.5rem]'>For Selling: </p>
            <p className='text-[15px] font-medium'>After visiting the Cashify website or app, select the product category you would like to sell. Let's say you want to sell an old mobile phone online - click on the mobile section, select the brand, select the variant and answer a few questions about the device's condition. That is it. After that, we will generate its quote, and if you like the price, we will home-deliver the cash to you and pick up your old device. <br /><br />Our technician will be at your doorstep to pick up the device, inspect it and provide you with the cash amount. In the entire process, you don't need to visit any store or step out of your house. Thus, you can sell old phones online through Cashify with utmost convenience.</p>

            <p className='font-medium text-[17px] mt-[1.5rem]'>For Buying: </p>
            <p className='text-[15px] font-medium'>If you want to buy old mobile phone from Cashify, you can visit the website or app. Then, you can click on the Buy Phone section, and select the brand that you want to purchase. Next, choose the model and the condition- Fair, Good, Superb. Based on your choice, the price will be displayed on the screen. You can then move forward and enter your address and payment mode. Rest assured, the device will be delivered to your doorstep.</p>

            <p className='font-medium text-[17px] mt-[1.5rem]'>Which Mobile Phone Brands Can Be Sold and Bought On Cashify?</p>
            <p className='text-[15px] font-medium'>You can find almost all mobile phone brands available in India, along with popular laptop, tablet and gaming console brands. There are more than 20 mobile phone brands listed on Cashify, and for all devices sold on Cashify, we offer -</p>

            <p className='text-[15px] font-medium mt-[1.5rem]'>- Assured sale at best price <br />- Hassle free <br />- Free home pick up <br />- Instant cash payment on pickup <br /> <br />Moreover, there are no privacy concerns with Cashify. We take optimum precautions while purchasing any old mobile phone. Each old phone goes through a complete data cleaning process, ensuring maximum security for our customers. <br /><br />You don’t need to be concerned about your old mobile phone brand while selling it through Cashify. Since we accept old phones of most brands, the selling procedure won’t be a hassle for you. To proceed, you can choose the mobile phone category, your smartphone brand, and the phone model you want to sell. You can also select your mobile brand from the below quick links.</p>

            <p className='font-medium text-[17px] mt-[1.5rem]'>Quick Links</p>
            <p className='text-[15px] font-medium text-[#42C8B7] cursor-pointer'> <br /> Sell Old Apple Mobile Sell Old Samsung Mobile Sell Old Xiaomi Mobile Sell Old Motorola Mobile Sell Old Google Mobile Sell Old Lenovo Mobile Sell Old Oneplus Mobile Sell Old Oppo Mobile Sell Old Vivo Mobile Sell Old Huawei Mobile Sell Old Asus Mobile Sell Old Nokia Mobile Sell Old Sony Mobile Sell Old LG Mobile Sell Old Panasonic Mobile Sell Old Gionee Mobile Sell Old LeEco Mobile Sell Old Micromax Mobile Sell Old HTC Mobile Sell Old Coolpad Mobile Sell Old Xolo Mobile Sell Old Intex Mobile Sell Old Karbonn Mobile Sell Old Lava Mobile</p>


        </div>
        </div>

  )
}

export default Article
