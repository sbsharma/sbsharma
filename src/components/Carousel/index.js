// import { useEffect } from "react";
// import "./carousel.css";

// export default function Carousel() {
//   useEffect(() => {
//     var $owl = $(".owl-carousel");

//     $owl.children().each(function (index) {
//       $(this).attr("data-position", index); // NB: .attr() instead of .data()
//     });

//     $owl.owlCarousel({
//       center: true,
//       loop: true,
//       items: 5,
//     });

//     $(document).on("click", ".owl-item>div", function () {
//       // see https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html#to-owl-carousel
//       var $speed = 300; // in ms
//       $owl.trigger("to.owl.carousel", [$(this).data("position"), $speed]);
//     });
//   }, []);

//   return (
//     <div class="container">
//       <div class="owl-carousel">
//         <div>
//           <img
//             src="https://via.placeholder.com/400x300/f06/fff/?text=1"
//             alt=""
//           />
//         </div>
//         <div>
//           <img
//             src="https://via.placeholder.com/400x300/f63/fff/?text=2"
//             alt=""
//           />
//         </div>
//         <div>
//           <img
//             src="https://via.placeholder.com/400x300/fc3/fff/?text=3"
//             alt=""
//           />
//         </div>
//         <div>
//           <img
//             src="https://via.placeholder.com/400x300/693/fff/?text=4"
//             alt=""
//           />
//         </div>
//         <div>
//           <img
//             src="https://via.placeholder.com/400x300/3cc/fff/?text=5"
//             alt=""
//           />
//         </div>
//         <div>
//           <img
//             src="https://via.placeholder.com/400x300/369/fff/?text=6"
//             alt=""
//           />
//         </div>
//         <div>
//           <img
//             src="https://via.placeholder.com/400x300/936/fff/?text=7"
//             alt=""
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
