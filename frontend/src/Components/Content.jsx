import React, { useEffect, useState } from 'react'
import Card from './Card'
import Category from './Category';
const content = [
  {
      src: "https://imgs1cdn.adultempire.com/products/48/2791748h.jpg",
      title: "",
  },
  // Aashram Live S01 (E01) MeetX Uncut Web Series Watch Online And Download Free Now Only On our website
  {
      src: "https://imgs1cdn.adultempire.com/products/60/3261060h.jpg",
      title: "",
      // Rangeen Kahaniyan S05 (EP 1-2) ALT Web Series Watch Online And Download Free Now Only On our website
  },
 { src: "https://tabooafairs.icu/wp-content/uploads/2024/04/Makkhan-Doodhwala-S01-Ep-4-5-HitPrime-Web-Series-420x278.jpg",
  title: "Bahu Jaan PrimeShots S02 Ep 1-2 Web Series Watch Online And Download Free Now Only On our website",
},
  {
      src: "https://tabooafairs.icu/wp-content/uploads/2024/05/Manchaha-Ep-4-PrimeShots-Web-Series-420x280.jpg",
      title: "Manchaha Ep 4 PrimeShots Web Series Watch Online And Download Free Now Only On our website",
  },
  {
      src: "https://tabooafairs.icu/wp-content/uploads/2024/05/Andha-Bapu-S01-Ep-1-2-SolTalkies-Web-Series-420x280.jpg",
      title: "Andha Bapu – S01 Ep 1-2 SolTalkies Web Series Watch Online And Download Free Now Only On our website",
  },
  {
      src: "https://tabooafairs.icu/wp-content/uploads/2024/03/Study-Hard-Liz-Jordan-MissaX.jpg",
      title: "Study Hard – Liz Jordan – MissaX Watch Online And Download Free Now Only On our website",
  },
  {
      src: "https://tabooafairs.icu/wp-content/uploads/2024/05/Aashram-Live-S01-E01-MeetX-Uncut-Web-Series-420x280.jpg",
      title: "Aashram Live S01 (E01) MeetX Uncut Web Series Watch Online And Download Free Now Only On Taboo Affairs",
  },
  {
      src: "https://tabooafairs.icu/wp-content/uploads/2024/04/Rangeen-Kahaniyan-S05-EP-1-2-ALT-Web-Series-420x280.jpg",
      title: "Rangeen Kahaniyan S05 (EP 1-2) ALT Web Series Watch Online And Download Free Now Only On our website",
  },
 { src: "https://tabooafairs.icu/wp-content/uploads/2024/04/Makkhan-Doodhwala-S01-Ep-4-5-HitPrime-Web-Series-420x278.jpg",
  title: "Bahu Jaan PrimeShots S02 Ep 1-2 Web Series Watch Online And Download Free Now Only On our website",
},
  {
      src: "https://tabooafairs.icu/wp-content/uploads/2024/05/Manchaha-Ep-4-PrimeShots-Web-Series-420x280.jpg",
      title: "Manchaha Ep 4 PrimeShots Web Series Watch Online And Download Free Now Only On our website",
  },
  {
      src: "https://tabooafairs.icu/wp-content/uploads/2024/05/Andha-Bapu-S01-Ep-1-2-SolTalkies-Web-Series-420x280.jpg",
      title: "Andha Bapu – S01 Ep 1-2 SolTalkies Web Series Watch Online And Download Free Now Only On our website",
  },
]

function Content() {
  const [blogs, setBlogs] = useState([]);

  const [currentPage , setCurrentPage] = useState(1);
  const pageSize = 10//12 blogs per page 
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory , setActiveCategory] = useState(null);
  
  useEffect( () => {
      async function fetchBlogs() {
          let url = `https://blog-website-1-bv96.onrender.com/blogs?page=${currentPage}&limit=${pageSize}`;
  
          // filter by category
          if(selectedCategory) {
              url += `&category=${selectedCategory}`;
          }
  
          const response = await fetch(url);
          const data = await response.json();
          setBlogs(data);
        //   console.log(data);
      }
      fetchBlogs();
    
  } ,[currentPage, pageSize, selectedCategory])

  return (
    <>
        {/* Categories */}
    <Category category = "Desi Porn " link="/desi-webseries"/>
   
    <div className='px-4 py-3 lg:px-32'>
    

   <Card blogs={blogs} currentPage={currentPage}  pageSize={pageSize} selectedCategory={selectedCategory}/>
        
     
    </div>
    </>
  )
}

export default Content