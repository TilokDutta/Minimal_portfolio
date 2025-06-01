export type Work = {
  company: string
  role:string
  deliverable: string[]
  fromDate: string
  toDate: string
}

export const worksData: Work[] = [
  {
    company: 'Code Crafters',
    role:'Deputy Secretary',
    deliverable: [
      'Led two hackathons and organised five+ guest lectures, promoting a strong coding culture within the IITM BS degree community.',
      'Actively encouraged student participation in competitive programming and coding events.',
    ],
    fromDate: '01-2024',
    toDate: '12-2024',
  },
]
