
import { ServiceCard } from "@/app/blog/component/ServiceCard"
import ImageSwiper from "@/app/blog/component/swiper"


export default function Blog() {
    return(
        <div className="justify-center items-center ">
        <ImageSwiper/>
    
        <div>
       <ServiceCard/>
        </div>
        </div>
       
    )

  }
  