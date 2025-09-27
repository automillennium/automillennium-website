// "use client";

// import React, { useRef, useEffect } from "react";
// import { Separator } from "./ui/separator";
// import { gsap } from "gsap";

// const businessData = [
//   {
//     image: "/img/business/vtx.png",
//     text: "<b>Vehicle Transformation Experts</b> customize entry level vehicles, transforming them into premium trims, in our state-of-the-art modification factories located in the UAE, India and soon to open in the Kingdom of Saudi Arabia (KSA).",
//   },
//   {
//     image: "/img/business/rhino.png",
//     text: "<b>Rhinomotive</b> is a global brand, the only ONE-STOP SOLUTION brand with over 500+ products for all automotive care and aftermarket requirements.",
//   },
//   {
//     image: "/img/business/auto-care.png",
//     text: "<b>Autocare360</b> is the Heart of the Automotive industry by providing its dealers with additional incremental profit opportunities for their Service and Sales departments by offering them numerous value-added products and services which will greatly enhance their revenues. These products primarily focus on window tint options, paint protection film, nano ceramic, polishing & detailing along with 20+ additional products and services.",
//   },
// ];

// const BusinessOverview = () => {
//   const sectionsRef = useRef([]);

//   useEffect(() => {
//     // Animate first section immediately
//     if (sectionsRef.current[0]) {
//       const firstSection = sectionsRef.current[0];
//       const image = firstSection.querySelector("img");
//       const text = firstSection.querySelector("p");

//       gsap.to(image, { x: 0, autoAlpha: 1, duration: 0.8, ease: "power2.out" });
//       gsap.to(text, { x: 0, autoAlpha: 1, duration: 0.8, ease: "power2.out", delay: 0.2 });
//     }

//     // Intersection Observer for the rest
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const index = sectionsRef.current.indexOf(entry.target);
//           if (index === 0) return; // skip first

//           const image = entry.target.querySelector("img");
//           const text = entry.target.querySelector("p");

//           if (entry.isIntersecting) {
//             gsap.to(image, { x: 0, autoAlpha: 1, duration: 0.8, ease: "power2.out" });
//             gsap.to(text, { x: 0, autoAlpha: 1, duration: 0.8, ease: "power2.out", delay: 0.2 });
//           } else {
//             gsap.to(image, { x: -50, autoAlpha: 0, duration: 0.8, ease: "power2.out" });
//             gsap.to(text, { x: 50, autoAlpha: 0, duration: 0.8, ease: "power2.out" });
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     sectionsRef.current.slice(1).forEach((section) => {
//       if (section) observer.observe(section);
//     });

//     return () => {
//       sectionsRef.current.slice(1).forEach((section) => {
//         if (section) observer.unobserve(section);
//       });
//     };
//   }, []);

//   return (
//     <div className="flex flex-col justify-center py-20 bg-white px-4">
//       <h2 className="prompto text-3xl md:text-4xl font-bold text-center mb-12 uppercase">
//         Our Business
//       </h2>

//       {businessData.map((item, index) => (
//         <div
//           key={index}
//           ref={(el) => (sectionsRef.current[index] = el)}
//           className="flex flex-col md:flex-row justify-center items-start gap-6 w-full max-w-5xl mx-auto mb-12"
//         >
//           {/* Left: Image */}
//           <div className="flex items-center justify-center md:justify-start">
//             <img
//               src={item.image}
//               alt={`Business ${index + 1}`}
//               className={`w-32 h-32 md:w-32 md:h-32 object-contain opacity-0 transform ${
//                 index === 0 ? "translate-x-0" : "-translate-x-12"
//               }`}
//             />
//           </div>

//           {/* Separators */}
//           <Separator orientation="vertical" className="hidden md:block h-24 w-[2px] bg-black" />
//           <Separator orientation="horizontal" className="block md:hidden w-full h-[2px] bg-black" />

//           {/* Right: Text */}
//           <div className="flex-1 text-center md:text-left">
//             <p
//               className={`lato text-black text-base md:text-lg opacity-0 transform ${
//                 index === 0 ? "translate-x-0" : "translate-x-12"
//               }`}
//               dangerouslySetInnerHTML={{ __html: item.text }}
//             />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BusinessOverview;


// "use client";

// import React, { useRef, useEffect } from "react";
// import { Separator } from "./ui/separator";
// import Lenis from "@studio-freight/lenis";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const businessData = [
//   {
//     image: "/img/business/vtx.png",
//     text: "<b>Vehicle Transformation Experts</b> customize entry level vehicles, transforming them into premium trims, in our state-of-the-art modification factories located in the UAE, India and soon to open in the Kingdom of Saudi Arabia (KSA).",
//   },
//   {
//     image: "/img/business/rhino.png",
//     text: "<b>Rhinomotive</b> is a global brand, the only ONE-STOP SOLUTION brand with over 500+ products for all automotive care and aftermarket requirements.",
//   },
//   {
//     image: "/img/business/auto-care.png",
//     text: "<b>Autocare360</b> is the Heart of the Automotive industry by providing its dealers with additional incremental profit opportunities for their Service and Sales departments by offering them numerous value-added products and services which will greatly enhance their revenues. These products primarily focus on window tint options, paint protection film, nano ceramic, polishing & detailing along with 20+ additional products and services.",
//   },
// ];

// const BusinessOverview = () => {
//   const sectionsRef = useRef([]);

//   useEffect(() => {
//     // ✅ Setup Lenis Smooth Scroll
//     const lenis = new Lenis({
//       smooth: true,
//       lerp: 0.1, // smoothness factor
//       wheelMultiplier: 1.2,
//     });

//     function raf(time) {
//       lenis.raf(time);
//       ScrollTrigger.update(); // keep ScrollTrigger synced
//       requestAnimationFrame(raf);
//     }
//     requestAnimationFrame(raf);

//     // ✅ GSAP Stacking Sections
//     sectionsRef.current.forEach((section) => {
//       ScrollTrigger.create({
//         trigger: section,
//         start: "top top",
//         end: "+=100%",
//         pin: true,
//         pinSpacing: false, // stacking magic
//       });
//     });

//     return () => {
//       lenis.destroy();
//       ScrollTrigger.getAll().forEach((st) => st.kill());
//     };
//   }, []);

//   return (
//     <div className="bg-white">
//       <h2 className="prompto text-3xl md:text-4xl font-bold text-center py-20 uppercase">
//         Our Business
//       </h2>

//       {businessData.map((item, index) => (
//         <section
//           key={index}
//           ref={(el) => (sectionsRef.current[index] = el)}
//           className="h-screen flex flex-col md:flex-row justify-center items-center gap-6 relative z-10"
//         >
//           {/* Left: Image */}
//           <div className="flex items-center justify-center md:justify-start">
//             <img
//               src={item.image}
//               alt={`Business ${index + 1}`}
//               className="w-32 h-32 md:w-40 md:h-40 object-contain"
//             />
//           </div>

//           {/* Separator */}
//           <Separator
//             orientation="vertical"
//             className="hidden md:block h-24 w-[2px] bg-black"
//           />
//           <Separator
//             orientation="horizontal"
//             className="block md:hidden w-full h-[2px] bg-black"
//           />

//           {/* Right: Text */}
//           <div className="flex-1 text-center md:text-left px-6">
//             <p
//               className="lato text-black text-base md:text-lg"
//               dangerouslySetInnerHTML={{ __html: item.text }}
//             />
//           </div>
//         </section>
//       ))}
//     </div>
//   );
// };

// export default BusinessOverview;



















// "use client";



// const businessData = [
//   {
//     image: "/img/business/vtx.png",
//     text: "<b>Vehicle Transformation Experts</b> customize entry level vehicles, transforming them into premium trims, in our state-of-the-art modification factories located in the UAE, India and soon to open in the Kingdom of Saudi Arabia (KSA).",
//   },
//   {
//     image: "/img/business/rhino.png",
//     text: "<b>Rhinomotive</b> is a global brand, the only ONE-STOP SOLUTION brand with over 500+ products for all automotive care and aftermarket requirements.",
//   },
//   {
//     image: "/img/business/auto-care.png",
//     text: "<b>Autocare360</b> is the Heart of the Automotive industry by providing its dealers with additional incremental profit opportunities for their Service and Sales departments by offering them numerous value-added products and services which will greatly enhance their revenues. These products primarily focus on window tint options, paint protection film, nano ceramic, polishing & detailing along with 20+ additional products and services.",
//   },
// ];
// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import ScrollSmoother from "gsap/ScrollSmoother";

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// function OurBusiness() {
//   const wrapperRef = useRef(null);
//   const contentRef = useRef(null);

//   useEffect(() => {
//     if (!wrapperRef.current || !contentRef.current) return;

//     const smoother = ScrollSmoother.create({
//       wrapper: wrapperRef.current,
//       content: contentRef.current,
//       smooth: 1.2,
//       effects: true,
//       smoothTouch: 0.1,
//     });

//     const cards = gsap.utils.toArray(".card");

//     gsap.set(".img-wrapper img", {
//       clipPath: "polygon(0 0,0 100%,0 100%,0 0)",
//       autoAlpha: 0,
//     });

//     gsap.set(".card-content p", {
//       y: 0,
//       autoAlpha: 0,
//     });

//     cards.forEach((card, i) => {
//       const img = card.querySelector("img");
//       const textEls = card.querySelectorAll(".card-content p");

//       gsap.to(card, {
//         scale: 0.8 * 0.2 * (i / (cards.length-1)),
//         ease: "none",
//         scrollTrigger: {
//           trigger: card,
//           start: `top ${10 + 15 * i}`,
//           end: "bottom bottom",
//           endTrigger: ".container",
//           scrub: true,
//           pin: card,
//           pinSpacing: false,
//           invalidateOnRefresh: true,
//         },
//       });

//       ScrollTrigger.create({
//         trigger: card,
//         start: "bottom bottom",
//         once: true,
//         onEnter: () => {
//           const tl = gsap.timeline();
//           tl.to(img, {
//             clipPath: "polygon(0 0,0 100%,100% 100%,100% 0)",
//             autoAlpha: 1,
//             duration: 2,
//             delay: 0.2,
//             ease: "power2.out",
//           });

//           tl.to(
//             textEls,
//             {
//               y: -10,
//               autoAlpha: 1,
//               duration: 0.6,
//               ease: "power2.in",
//               stagger: 0.4,
//             },
//             "-=1.5"
//           );
//         },
//       });
//     });

//     return () => {
//       smoother.kill();
//       ScrollTrigger.getAll().forEach((st) => st.kill());
//     };
//   }, []);

//   return (
//     <div className="bg-red-600 h-[100vh] ">

    
//     <div id="smooth-wrapper" ref={wrapperRef}>
//       <div id="smooth-content" ref={contentRef}>
//         <div className="spacer">
//           <div className="container mx-auto px-4 py-16">
//             <div className="stacked-cards space-y-16">
//               {businessData.map((card, index) => (
//                 <div
//                   className="card flex flex-col md:flex-row items-center md:items-start bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
//                   key={index}
//                 >
//                   <div className="card-content md:w-1/2 p-6 md:pr-12 text-center md:text-left">
//                     <p
//                       className="text-gray-800 text-base md:text-lg"
//                       dangerouslySetInnerHTML={{ __html: card.text }}
//                     />
//                   </div>

//                   <div className="img-wrapper md:w-1/2 flex justify-center md:justify-end p-6">
//                     <img
//                       src={card.image}
//                       alt={`Business ${index + 1}`}
//                       className="w-48 h-48 md:w-64 md:h-64 object-contain"
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//         </div>

//   );
// }

// export default OurBusiness;


// "use client";


// "use client";






// "use client";

// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const OurBusiness = () => {
//   const containerRef = useRef(null);
//   const cardsRef = useRef([]);

//   const businessData = [
//     {
//       image: "/img/business/vtx.png",
//       text: "<b>Vehicle Transformation Experts</b> customize entry level vehicles, transforming them into premium trims, in our state-of-the-art modification factories located in the UAE, India and soon to open in the Kingdom of Saudi Arabia (KSA).",
//     },
//     {
//       image: "/img/business/rhino.png",
//       text: "<b>Rhinomotive</b> is a global brand, the only ONE-STOP SOLUTION brand with over 500+ products for all automotive care and aftermarket requirements.",
//     },
//     {
//       image: "/img/business/auto-care.png",
//       text: "<b>Autocare360</b> is the Heart of the Automotive industry by providing its dealers with additional incremental profit opportunities for their Service and Sales departments by offering them numerous value-added products and services which will greatly enhance their revenues. These products primarily focus on window tint options, paint protection film, nano ceramic, polishing & detailing along with 20+ additional products and services.",
//     },
//   ];

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top top",
//           end: () => `+=${window.innerHeight * businessData.length}`,
//           scrub: 1,
//           pin: true,
//         },
//       });

//       // Animate cards stacking
//       cardsRef.current.forEach((card, i) => {
//         tl.fromTo(
//           card,
//           { y: 50, scale: 0.9, opacity: 0 },
//           { y: 0, scale: 1, opacity: 1, duration: 1, ease: "power2.out" },
//           i * 0.5 // stagger each card
//         );
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (



//     <div className="bg-black text-white">
// <div>
//       <div ref={containerRef} className=" h-screen w-full">
//         {businessData.map((card, index) => (
//           <div
//           key={index}
//           ref={(el) => (cardsRef.current[index] = el)}
//           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
//           w-[75vw] h-[55vh] flex flex-col md:flex-row justify-center items-center 
//           bg-white text-black shadow-2xl rounded-2xl overflow-hidden opacity-0"
//           >
//             {/* Text */}
//             <div className="md:w-1/2 p-8 md:pr-12 text-center md:text-left">
//               <p
//                 className="text-gray-800 text-base md:text-lg leading-relaxed"
//                 dangerouslySetInnerHTML={{ __html: card.text }}
//                 />
//             </div>
//             {/* Image */}
//             <div className="md:w-1/2 flex justify-center md:justify-end p-6">
//               <img
//                 src={card.image}
//                 alt={`Business ${index + 1}`}
//                 className="w-48 h-48 md:w-64 md:h-64 object-contain"
//                 />
//             </div>
//           </div>
//         ))}
//       </div>


//     </div>
//         </div>
//   );
// };

// export default OurBusiness;




"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurBusiness = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  const businessData = [
    {
      image: "/img/business/vtx.png",
      text: "<b>Vehicle Transformation Experts</b> customize entry level vehicles, transforming them into premium trims, in our state-of-the-art modification factories located in the UAE, India and soon to open in the Kingdom of Saudi Arabia (KSA).",
    },
    {
      image: "/img/business/rhino.png",
      text: "<b>Rhinomotive</b> is a global brand, the only ONE-STOP SOLUTION brand with over 500+ products for all automotive care and aftermarket requirements.",
    },
    {
      image: "/img/business/auto-care.png",
      text: "<b>Autocare360</b> is the Heart of the Automotive industry by providing its dealers with additional incremental profit opportunities for their Service and Sales departments by offering them numerous value-added products and services which will greatly enhance their revenues. These products primarily focus on window tint options, paint protection film, nano ceramic, polishing & detailing along with 20+ additional products and services.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${window.innerHeight * (businessData.length + 0.5)}`,
          scrub: 1,
          pin: true,
        },
      });

      cardsRef.current.forEach((card, i) => {
        tl.fromTo(
          card,
          { y: 50, scale: 0.9, opacity: 0 },
          { y: 0, scale: 1, opacity: 1, duration: 1, ease: "power2.out" },
          i * 0.5
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen w-full bg-black">
      {businessData.map((card, index) => (
        <div
          key={index}
          ref={(el) => (cardsRef.current[index] = el)}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                     w-[75vw] h-[55vh] flex flex-col md:flex-row justify-center items-center
                     bg-white text-black shadow-2xl rounded-2xl overflow-hidden opacity-0"
        >
          <div className="md:w-1/2 p-8 md:pr-12 text-center md:text-left">
            <p
              className="text-gray-800 text-base md:text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: card.text }}
            />
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end p-6">
            <img
              src={card.image}
              alt={`Business ${index + 1}`}
              className="w-48 h-48 md:w-64 md:h-64 object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurBusiness;
