// import Image from 'next/image';
// import Link from 'next/link';
// // import { BehanceIcon, Blur1, DribbbleIcon, FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "@/components/assets/behance.svg";
// import BehanceIcon from "@/components/assets/behance.svg";
// import Blur1 from "@/components/assets/blur.svg";
// import DribbbleIcon from "@/components/assets/dribbble.svg";
// import FacebookIcon from "@/components/assets/facebook.svg";
// import InstagramIcon from "@/components/assets/instagram.svg";
// import LinkedinIcon from "@/components/assets/linkedin.svg";
// import TwitterIcon from "@/components/assets/twitter.svg";
// import logo from "@/components/assets/logo.svg";
// import mail from "@/components/assets/mail.svg";
// import phone from "@/components/assets/phone.svg";

// export default function Footer() {
//   return (
//     <footer className="relative overflow-hidden bg-neutral-950 text-neutral-200 flex flex-col justify-between  min-h-[clamp(480px,60vh,640px)]">
//       <Image src={Blur1}  fill alt="Gradient Glow" className="pointer-events-none absolutetop-0right-0 blur-xlz-0object-cover"/>
//       <div className="flex-1 flex items-center">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6  lg:px-8 w-full">
//           <div className="grid grid-cols-1 gap-20 py-14 md:grid-cols-12">
//             <div className="md:col-span-5 ">
//               <div className="flex items-center gap-3">
//                 <Image
//                   src={logo}
//                   alt="Visiobyte Logo"
//                   className="h-10 w-10 rounded-xl shadow-lg shadow-fuchsia-500/20"
//                 />
//                 <span className="text-3xl text-[#FDFAFF] font-semibold tracking-wide">
//                  <svg width="188" height="25" viewBox="0 0 188 25" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M187.068 19.6094V23.9427H169.002V0.609375H186.635V4.94271H174.368V10.0094H185.202V14.2094H174.368V19.6094H187.068Z" fill="#FDFAFF"/>
//                     <path d="M153.23 5.00937H145.763V0.609375H166.096V5.00937H158.63V23.9427H153.23V5.00937Z" fill="#FDFAFF"/>
//                     <path d="M135.16 15.676V23.9427H129.76V15.6094L120.727 0.609375H126.46L132.693 10.976L138.927 0.609375H144.227L135.16 15.676Z" fill="#FDFAFF"/>
//                     <path d="M116.093 11.8094C117.427 12.2316 118.471 12.9427 119.227 13.9427C119.982 14.9205 120.36 16.1316 120.36 17.576C120.36 19.6205 119.56 21.1983 117.96 22.3094C116.382 23.3983 114.071 23.9427 111.027 23.9427H98.96V0.609375H110.36C113.204 0.609375 115.382 1.15382 116.893 2.24271C118.427 3.3316 119.193 4.80937 119.193 6.67604C119.193 7.80938 118.916 8.82049 118.36 9.70937C117.827 10.5983 117.071 11.2983 116.093 11.8094ZM104.327 4.67604V10.176H109.693C111.027 10.176 112.038 9.94271 112.727 9.47604C113.416 9.00937 113.76 8.32049 113.76 7.40937C113.76 6.49826 113.416 5.82049 112.727 5.37604C112.038 4.90938 111.027 4.67604 109.693 4.67604H104.327ZM110.627 19.876C112.049 19.876 113.116 19.6427 113.827 19.176C114.56 18.7094 114.927 17.9872 114.927 17.0094C114.927 15.076 113.493 14.1094 110.627 14.1094H104.327V19.876H110.627Z" fill="#FDFAFF"/>
//                     <path d="M82.1348 24.3443C79.7126 24.3443 77.5237 23.8221 75.5682 22.7776C73.6348 21.7332 72.1126 20.2998 71.0015 18.4776C69.9126 16.6332 69.3682 14.5665 69.3682 12.2776C69.3682 9.98872 69.9126 7.93316 71.0015 6.11094C72.1126 4.26649 73.6348 2.82205 75.5682 1.7776C77.5237 0.73316 79.7126 0.210938 82.1348 0.210938C84.5571 0.210938 86.7348 0.73316 88.6682 1.7776C90.6015 2.82205 92.1237 4.26649 93.2348 6.11094C94.3459 7.93316 94.9015 9.98872 94.9015 12.2776C94.9015 14.5665 94.3459 16.6332 93.2348 18.4776C92.1237 20.2998 90.6015 21.7332 88.6682 22.7776C86.7348 23.8221 84.5571 24.3443 82.1348 24.3443ZM82.1348 19.7443C83.5126 19.7443 84.7571 19.4332 85.8682 18.8109C86.9793 18.1665 87.8459 17.2776 88.4682 16.1443C89.1126 15.0109 89.4348 13.722 89.4348 12.2776C89.4348 10.8332 89.1126 9.54427 88.4682 8.41094C87.8459 7.2776 86.9793 6.39983 85.8682 5.7776C84.7571 5.13316 83.5126 4.81094 82.1348 4.81094C80.7571 4.81094 79.5126 5.13316 78.4015 5.7776C77.2904 6.39983 76.4126 7.2776 75.7682 8.41094C75.1459 9.54427 74.8348 10.8332 74.8348 12.2776C74.8348 13.722 75.1459 15.0109 75.7682 16.1443C76.4126 17.2776 77.2904 18.1665 78.4015 18.8109C79.5126 19.4332 80.7571 19.7443 82.1348 19.7443Z" fill="#FDFAFF"/>
//                     <path d="M59.8975 0.609375H65.2975V23.9427H59.8975V0.609375Z" fill="#FDFAFF"/>
//                     <path d="M46.3076 24.3443C44.4632 24.3443 42.6743 24.0998 40.941 23.6109C39.2298 23.0998 37.8521 22.4443 36.8076 21.6443L38.641 17.5776C39.641 18.3109 40.8298 18.8998 42.2076 19.3443C43.5854 19.7887 44.9632 20.0109 46.341 20.0109C47.8743 20.0109 49.0076 19.7887 49.7409 19.3443C50.4743 18.8776 50.841 18.2665 50.841 17.5109C50.841 16.9554 50.6187 16.4998 50.1743 16.1443C49.7521 15.7665 49.1965 15.4665 48.5076 15.2443C47.8409 15.022 46.9298 14.7776 45.7743 14.5109C43.9965 14.0887 42.5409 13.6665 41.4076 13.2443C40.2743 12.822 39.2965 12.1443 38.4743 11.2109C37.6743 10.2776 37.2743 9.03316 37.2743 7.4776C37.2743 6.12205 37.641 4.89983 38.3743 3.81094C39.1076 2.69983 40.2076 1.82205 41.6743 1.1776C43.1632 0.53316 44.9743 0.210938 47.1076 0.210938C48.5965 0.210938 50.0521 0.388715 51.4743 0.74427C52.8965 1.09983 54.1409 1.61094 55.2076 2.2776L53.541 6.3776C51.3854 5.15538 49.2298 4.54427 47.0743 4.54427C45.5632 4.54427 44.4409 4.78872 43.7076 5.27761C42.9965 5.76649 42.641 6.41094 42.641 7.21094C42.641 8.01094 43.0521 8.61094 43.8743 9.01094C44.7187 9.38872 45.9965 9.76649 47.7076 10.1443C49.4854 10.5665 50.941 10.9887 52.0743 11.4109C53.2076 11.8332 54.1743 12.4998 54.9743 13.4109C55.7965 14.3221 56.2076 15.5554 56.2076 17.1109C56.2076 18.4443 55.8298 19.6665 55.0743 20.7776C54.341 21.8665 53.2298 22.7332 51.7409 23.3776C50.2521 24.0221 48.4409 24.3443 46.3076 24.3443Z" fill="#FDFAFF"/>
//                     <path d="M27.7034 0.609375H33.1034V23.9427H27.7034V0.609375Z" fill="#FDFAFF"/>
//                     <path d="M25.7554 0.609375L15.6554 23.9427H10.322L0.255371 0.609375H6.0887L13.1887 17.276L20.3887 0.609375H25.7554Z" fill="#FDFAFF"/>
//                   </svg>
//                 </span>
//               </div>
//               <p className="mt-10 max-w-sm text-[18px] sm:text-base font-medium leading-relaxed text-[#FFFFFFB2]">
//                 Visiobyte blends AI/ML expertise with creative Web & App Development, transforming ideas into reality with smart, client-focused, and growth-driven digital solutions.
//               </p>
//             </div>
//             <div className="md:col-span-3">
//               <h3 className="text-[18px] font-semibold tracking-wider text-[#9331F4] ">Links</h3>
//               <ul className="mt-5 space-y-3 text-[18px] text-[#FFFFFF] ">
//                 {[
//                   ["Home", "#"],
//                   ["Our Work", "#"],
//                   ["About", "#"],
//                   ["Blog", "#"],
//                   ["Career", "#"],
//                   ["Contact", "#"],
//                 ].map(([label, href]) => (
//                   <li key={label}>
//                     <a href={href} className="transition-colors hover:text-white">
//                       {label}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="md:col-span-4  text-[18px]">
//               <h3 className=" font-semibold tracking-wider text-[#9331F4]">Contact</h3>
//               <ul className="mt-5 space-y-4">
//                 <li className="flex items-center gap-3">
//                   <Image
//                     src={mail}
//                     alt="email"
//                     className="h-5 w-5 opacity-80"
//                   />
//                   <a href="mailto:contact@visiobyte.in" className="hover:text-white break-all">
//                     contact@visiobyte.in
//                   </a>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <Image
//                     src={phone}
//                     alt="phone"
//                     className="h-5 w-5 opacity-80"
//                   />
//                   <a href="tel:+919998552366" className="hover:text-white">
//                     +91 99985 52366
//                   </a>
//                 </li>
//               </ul>

//               <div className="mt-8">
//                 <p className="font-semibold text-[#9331F4]">Follow Us On</p>
//                 <div className="mt-4 flex flex-wrap gap-3">
//                   {[
//                     ["LinkedIn", LinkedinIcon],
//                     ["Facebook", FacebookIcon],
//                     ["X", TwitterIcon],
//                     ["Instagram", InstagramIcon],
//                     ["Dribbble", DribbbleIcon],
//                     ["Behance", BehanceIcon],
//                   ].map(([name, src]) => (
//                     <a
//                       key={name}
//                       href="#"
//                       aria-label={name}
//                       className="group inline-flex h-[40px] w-[40px] items-center justify-cente"
//                     >
//                       <Image src={src} alt={name} className="h-[40px] w-[40px] opacity-90 group-hover:opacity-100" />
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="py-5 text-xs sm:text-sm text-neutral-400 border-t border-[#9331F44D]">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
//           <p className="text-center text-[#909090] sm:text-left">
//             © Visiobyte <span className="mx-2">|</span> All Rights Reserved
//           </p>
//           <div className="flex gap-4">
//             <a href="#" className="hover:text-white">Terms & Conditions</a>
//             <a href="#" className="hover:text-white">Privacy Policy</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
import Image from 'next/image';
import Link from 'next/link';
// import { BehanceIcon, Blur1, DribbbleIcon, FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "@/components/assets/behance.svg";
import BehanceIcon from "@/components/assets/behance.svg";
import Blur1 from "@/components/assets/blur.svg";
import DribbbleIcon from "@/components/assets/dribbble.svg";
import FacebookIcon from "@/components/assets/facebook.svg";
import InstagramIcon from "@/components/assets/instagram.svg";
import LinkedinIcon from "@/components/assets/linkedin.svg";
import TwitterIcon from "@/components/assets/twitter.svg";
import logo from "@/components/assets/logo.svg";
import mail from "@/components/assets/mail.svg";
import phone from "@/components/assets/phone.svg";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-neutral-950 text-neutral-200 flex flex-col justify-between  min-h-[clamp(480px,60vh,640px)]">
      <Image src={Blur1}  fill alt="Gradient Glow" className="pointer-events-none absolute top-0 right-0 blur-xlz-0 object-cover"/>
      <div className="flex-1 flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6  lg:px-8 w-full">
          <div className="grid grid-cols-1 gap-20 py-14 md:grid-cols-12">
            <div className="md:col-span-5 ">
              <div className="flex items-center gap-3">
                <Image
                  src={logo}
                  alt="Visiobyte Logo"
                  className="h-10 w-10 rounded-xl shadow-lg shadow-fuchsia-500/20"
                />
                <span className="text-3xl text-[#FDFAFF] font-semibold tracking-wide">
                 <svg width="188" height="25" viewBox="0 0 188 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M187.068 19.6094V23.9427H169.002V0.609375H186.635V4.94271H174.368V10.0094H185.202V14.2094H174.368V19.6094H187.068Z" fill="#FDFAFF"/>
                    <path d="M153.23 5.00937H145.763V0.609375H166.096V5.00937H158.63V23.9427H153.23V5.00937Z" fill="#FDFAFF"/>
                    <path d="M135.16 15.676V23.9427H129.76V15.6094L120.727 0.609375H126.46L132.693 10.976L138.927 0.609375H144.227L135.16 15.676Z" fill="#FDFAFF"/>
                    <path d="M116.093 11.8094C117.427 12.2316 118.471 12.9427 119.227 13.9427C119.982 14.9205 120.36 16.1316 120.36 17.576C120.36 19.6205 119.56 21.1983 117.96 22.3094C116.382 23.3983 114.071 23.9427 111.027 23.9427H98.96V0.609375H110.36C113.204 0.609375 115.382 1.15382 116.893 2.24271C118.427 3.3316 119.193 4.80937 119.193 6.67604C119.193 7.80938 118.916 8.82049 118.36 9.70937C117.827 10.5983 117.071 11.2983 116.093 11.8094ZM104.327 4.67604V10.176H109.693C111.027 10.176 112.038 9.94271 112.727 9.47604C113.416 9.00937 113.76 8.32049 113.76 7.40937C113.76 6.49826 113.416 5.82049 112.727 5.37604C112.038 4.90938 111.027 4.67604 109.693 4.67604H104.327ZM110.627 19.876C112.049 19.876 113.116 19.6427 113.827 19.176C114.56 18.7094 114.927 17.9872 114.927 17.0094C114.927 15.076 113.493 14.1094 110.627 14.1094H104.327V19.876H110.627Z" fill="#FDFAFF"/>
                    <path d="M82.1348 24.3443C79.7126 24.3443 77.5237 23.8221 75.5682 22.7776C73.6348 21.7332 72.1126 20.2998 71.0015 18.4776C69.9126 16.6332 69.3682 14.5665 69.3682 12.2776C69.3682 9.98872 69.9126 7.93316 71.0015 6.11094C72.1126 4.26649 73.6348 2.82205 75.5682 1.7776C77.5237 0.73316 79.7126 0.210938 82.1348 0.210938C84.5571 0.210938 86.7348 0.73316 88.6682 1.7776C90.6015 2.82205 92.1237 4.26649 93.2348 6.11094C94.3459 7.93316 94.9015 9.98872 94.9015 12.2776C94.9015 14.5665 94.3459 16.6332 93.2348 18.4776C92.1237 20.2998 90.6015 21.7332 88.6682 22.7776C86.7348 23.8221 84.5571 24.3443 82.1348 24.3443ZM82.1348 19.7443C83.5126 19.7443 84.7571 19.4332 85.8682 18.8109C86.9793 18.1665 87.8459 17.2776 88.4682 16.1443C89.1126 15.0109 89.4348 13.722 89.4348 12.2776C89.4348 10.8332 89.1126 9.54427 88.4682 8.41094C87.8459 7.2776 86.9793 6.39983 85.8682 5.7776C84.7571 5.13316 83.5126 4.81094 82.1348 4.81094C80.7571 4.81094 79.5126 5.13316 78.4015 5.7776C77.2904 6.39983 76.4126 7.2776 75.7682 8.41094C75.1459 9.54427 74.8348 10.8332 74.8348 12.2776C74.8348 13.722 75.1459 15.0109 75.7682 16.1443C76.4126 17.2776 77.2904 18.1665 78.4015 18.8109C79.5126 19.4332 80.7571 19.7443 82.1348 19.7443Z" fill="#FDFAFF"/>
                    <path d="M59.8975 0.609375H65.2975V23.9427H59.8975V0.609375Z" fill="#FDFAFF"/>
                    <path d="M46.3076 24.3443C44.4632 24.3443 42.6743 24.0998 40.941 23.6109C39.2298 23.0998 37.8521 22.4443 36.8076 21.6443L38.641 17.5776C39.641 18.3109 40.8298 18.8998 42.2076 19.3443C43.5854 19.7887 44.9632 20.0109 46.341 20.0109C47.8743 20.0109 49.0076 19.7887 49.7409 19.3443C50.4743 18.8776 50.841 18.2665 50.841 17.5109C50.841 16.9554 50.6187 16.4998 50.1743 16.1443C49.7521 15.7665 49.1965 15.4665 48.5076 15.2443C47.8409 15.022 46.9298 14.7776 45.7743 14.5109C43.9965 14.0887 42.5409 13.6665 41.4076 13.2443C40.2743 12.822 39.2965 12.1443 38.4743 11.2109C37.6743 10.2776 37.2743 9.03316 37.2743 7.4776C37.2743 6.12205 37.641 4.89983 38.3743 3.81094C39.1076 2.69983 40.2076 1.82205 41.6743 1.1776C43.1632 0.53316 44.9743 0.210938 47.1076 0.210938C48.5965 0.210938 50.0521 0.388715 51.4743 0.74427C52.8965 1.09983 54.1409 1.61094 55.2076 2.2776L53.541 6.3776C51.3854 5.15538 49.2298 4.54427 47.0743 4.54427C45.5632 4.54427 44.4409 4.78872 43.7076 5.27761C42.9965 5.76649 42.641 6.41094 42.641 7.21094C42.641 8.01094 43.0521 8.61094 43.8743 9.01094C44.7187 9.38872 45.9965 9.76649 47.7076 10.1443C49.4854 10.5665 50.941 10.9887 52.0743 11.4109C53.2076 11.8332 54.1743 12.4998 54.9743 13.4109C55.7965 14.3221 56.2076 15.5554 56.2076 17.1109C56.2076 18.4443 55.8298 19.6665 55.0743 20.7776C54.341 21.8665 53.2298 22.7332 51.7409 23.3776C50.2521 24.0221 48.4409 24.3443 46.3076 24.3443Z" fill="#FDFAFF"/>
                    <path d="M27.7034 0.609375H33.1034V23.9427H27.7034V0.609375Z" fill="#FDFAFF"/>
                    <path d="M25.7554 0.609375L15.6554 23.9427H10.322L0.255371 0.609375H6.0887L13.1887 17.276L20.3887 0.609375H25.7554Z" fill="#FDFAFF"/>
                  </svg>
                </span>
              </div>
              <p className="mt-10 max-w-sm text-[18px] sm:text-base font-medium leading-relaxed text-[#FFFFFFB2]">
                Visiobyte blends AI/ML expertise with creative Web & App Development, transforming ideas into reality with smart, client-focused, and growth-driven digital solutions.
              </p>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-[18px] font-semibold tracking-wider text-[#9331F4] ">Links</h3>
              <ul className="mt-5 space-y-3 text-[18px] text-[#FFFFFF] ">
                {[
                  ["Home", "#"],
                  ["Our Work", "#"],
                  ["About", "#"],
                  ["Blog", "#"],
                  ["Career", "#"],
                  ["Contact", "#"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="transition-colors hover:text-white">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-4  text-[18px]">
              <h3 className=" font-semibold tracking-wider text-[#9331F4]">Contact</h3>
              <ul className="mt-5 space-y-4">
                <li className="flex items-center gap-3">
                  <Image
                    src={mail}
                    alt="email"
                    className="h-5 w-5 opacity-80"
                  />
                  <a href="mailto:contact@visiobyte.in" className="hover:text-white break-all">
                    contact@visiobyte.in
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Image
                    src={phone}
                    alt="phone"
                    className="h-5 w-5 opacity-80"
                  />
                  <a href="tel:+919998552366" className="hover:text-white">
                    +91 99985 52366
                  </a>
                </li>
              </ul>

              <div className="mt-8">
                <p className="font-semibold text-[#9331F4]">Follow Us On</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {[
                    ["LinkedIn", LinkedinIcon],
                    ["Facebook", FacebookIcon],
                    ["X", TwitterIcon],
                    ["Instagram", InstagramIcon],
                    ["Dribbble", DribbbleIcon],
                    ["Behance", BehanceIcon],
                  ].map(([name, src]) => (
                    <a
                      key={name}
                      href="#"
                      aria-label={name}
                      className="group inline-flex h-[40px] w-[40px] items-center justify-cente"
                    >
                      <Image src={src} alt={name} className="h-[40px] w-[40px] opacity-90 group-hover:opacity-100" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 text-xs sm:text-sm text-neutral-400 border-t border-[#9331F44D]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center text-[#909090] sm:text-left">
            © Visiobyte <span className="mx-2">|</span> All Rights Reserved
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Terms & Conditions</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
