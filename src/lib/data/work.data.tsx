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
      'Developed a web application to manage the company’s inventory and sales.',
      'Implemented a barcode scanner to track inventory.',
    ],
    fromDate: '01-2024',
    toDate: '12-2024',
  },
]
