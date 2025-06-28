export type Projects = {
  title: string
  description: string
  href: string
}

export const projectsData: Projects[] = [
  {
    title: 'Funroad-Multitenant Ecommerce website',
    description:
      "Funroad is a modern multi-tenant e-commerce platform that empowers creators and vendors to launch personalized storefronts on dynamic subdomains. It offers seamless content management, role-based access, and secure payments through Stripe Connect delivering a fast, scalable, and intuitive shopping experience.",
    href:'https://multitenant-ecommerce-xi.vercel.app/'
  },
  {
    title: 'MOCKPrep-Interview Preparation App',
    description:
      'An AI-powered interview practice platform that offers real interview questions, personalized feedback, and tracks past and upcoming interviews to boost users interview readiness and confidence.',
    href: 'https://mock-prep-ten.vercel.app/',
  },
  {
    title: 'WanderLust - Tourism App',
    description:
      'Wanderlust is a tourism platform to make your traveling experience more easy and smooth. It help you to show details about the listed places along with location on the map. ',
    href: 'https://wanderlust-vj3x.onrender.com/listings',
  },
  {
    title: 'YC Directory',
    description:
      'YC DIRECTORY is a platform to publish your startup to the world. You can see all the recent published startups in details. It helps you to grow your startup at its initial stage. ',
    href: 'https://yc-directory-one-puce.vercel.app/',
  },
]