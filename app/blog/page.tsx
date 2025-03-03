
import { ServiceCard } from "@/components/ServiceCard"
import ImageSwiper from "@/components/swiper"


export default function Blog() {
    return(
        <div className="justify-center items-center ">
        <ImageSwiper/>
        <div className=" grid grid-col-1 gap-4 relative w-full items-center justify-center align-middle  ">
         <ServiceCard/>
        </div>
        </div>
       
    )

  }
  