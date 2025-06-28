export type Projects = {
  title: string
  description: string
  href: string
}

export const projectsData: Projects[] = [
  {
    title: 'Funroad-Multitenant Ecommerce website',
    description:
      "Developed a multi-tenant digital commerce platform using Next.js 15, Payload CMS, Tailwind CSS v4, and ShadcnUI, deployed on Vercel. It supports 100+ merchants with subdomain-based storefronts and role-based access. Integrated Stripe Connect for secure payments, automated vendor payouts, and a commission model, processing over 500 transactions monthly. The platform's CMS-backed APIs and SSR architecture improved onboarding speed by 50% and user retention by 30",
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