/**
 * Client reviews, taken from the previous site (mvplaunch.codeswifters.com).
 * Photos live in /public/assets/testimonials/. Entries without a `photo`
 * render a gradient initials avatar.
 */
export type Testimonial = {
  name: string;
  title: string;
  company: string;
  tag: string;
  rating: number;
  photo?: string;
  review: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Maria Gondal",
    title: "Founder & CEO",
    company: "Agent Lists Pro",
    tag: "AI CRM Platform",
    rating: 5,
    photo: "/assets/testimonials/maria-gondal.webp",
    review:
      "Working with CodeSwifters on our AI-powered CRM and lead management platform was an excellent experience. They understood the unique challenges of the real estate industry and transformed our requirements into a scalable solution. The team built intelligent workflows for managing leads, automating follow-ups, and improving sales efficiency through AI-powered features. Their technical expertise, proactive communication, and product-focused approach helped us create a platform that truly adds value to our business.",
  },
  {
    name: "Johannes Milke",
    title: "CEO",
    company: "HeyFlutter",
    tag: "Flutter Development",
    rating: 5,
    photo: "/assets/testimonials/johannes-milke.webp",
    review:
      "Working with CodeSwifters has been an excellent experience. Their strong Flutter expertise and years of cross-platform development allow them to consistently deliver clean, scalable, high-quality solutions. They have a deep understanding of mobile architecture, communicate clearly, and always maintain a strong focus on deadlines and quality. Their problem-solving skills and attention to detail make them a reliable technology partner for any Flutter-based project.",
  },
  {
    name: "Olivier Fousse",
    title: "Founder & CTO",
    company: "WEDFluencer",
    tag: "Platform Build",
    rating: 4.5,
    photo: "/assets/testimonials/olivier-fousse.webp",
    review:
      "CodeSwifters has been an excellent development partner for building WEDFluencer. Their team demonstrated strong technical expertise, great collaboration, and a proactive approach throughout the project. They understood our vision and helped transform complex requirements into a scalable and user-friendly platform. Highly recommended for teams looking for a reliable and skilled development partner.",
  },
  {
    name: "Zur Gränevitze",
    title: "CEO",
    company: "BioTip eyeApp",
    tag: "App Launch",
    rating: 5,
    photo: "/assets/testimonials/zur-granevitze.webp",
    review:
      "The CodeSwifters team was amazing to work with. They quickly understood our product vision, communicated clearly, and provided thoughtful technical solutions throughout the project. Their ability to handle complex requirements while maintaining quality and efficiency made the entire development process seamless. We truly appreciated their dedication and professionalism.",
  },
  {
    name: "Munir",
    title: "Founder",
    company: "Content Blocking App",
    tag: "iOS & macOS App",
    rating: 5,
    photo: "/assets/testimonials/munir.webp",
    review:
      "The CodeSwifters team was extremely helpful and committed throughout. We faced several challenges related to Xcode limitations and Apple developer policies, but they went above and beyond to find the right solution. They took the initiative to rebuild the project from scratch when the initial approach was no longer viable and successfully delivered a working solution. Their persistence, technical knowledge, and problem-solving approach were impressive.",
  },
  {
    name: "Rahmat",
    title: "CEO",
    company: "LYNA Cam",
    tag: "Mobile App",
    rating: 5,
    photo: "/assets/testimonials/rahmat.webp",
    review:
      "Working with CodeSwifters has been an outstanding experience. They took the time to deeply understand our requirements and consistently went the extra mile to deliver the best possible solution. Their attention to detail, proactive communication, and strong problem-solving mindset made the entire process smooth and efficient. The team not only delivered high-quality work on time but also anticipated challenges and suggested improvements along the way.",
  },
  {
    name: "Dawood Sarwar",
    title: "Managing Director",
    company: "Lux Vault",
    tag: "Milestone Delivery",
    rating: 5,
    photo: "/assets/testimonials/dawood-sarwar.webp",
    review:
      "CodeSwifters successfully completed the first milestone with great professionalism and attention to detail. The delivery was on time, aligned with our requirements, and the communication throughout the process was smooth and transparent. Their commitment to quality and ability to execute efficiently gave us confidence moving forward. We look forward to continuing the next phases together.",
  },
  {
    name: "Deepak",
    title: "Founder",
    company: "Hooha",
    tag: "Product Build",
    rating: 5,
    review:
      "Working with CodeSwifters was a great experience. From the beginning, they quickly understood our requirements and the challenges we wanted to solve. Their technical expertise, attention to detail, and ability to translate ideas into practical solutions made the entire process smooth and efficient. Communication was excellent throughout, and they delivered exactly what we needed. I highly recommend CodeSwifters and would definitely work with them again.",
  },
  {
    name: "Chantelle",
    title: "CEO",
    company: "Wight Guide",
    tag: "UX/UI & Product",
    rating: 5,
    review:
      "CodeSwifters has been a pleasure to work with. They are responsive, professional, and bring strong product thinking to every stage of development. Their UX/UI expertise and ability to provide valuable technical guidance helped shape the product in the right direction. They proactively created clear milestones and maintained excellent communication throughout the project.",
  },
];
