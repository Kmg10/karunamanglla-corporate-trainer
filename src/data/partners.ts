export type Partner = {
  name: string;
  shortName: string;
  logo: string;
  /** Display width in px — never larger than source image */
  width: number;
  /** Display height in px — never larger than source image */
  height: number;
};

export const partners: Partner[] = [
  { name: 'upGrad', shortName: 'upGrad', logo: '/assets/logos/upgrad.png', width: 88, height: 88 },
  { name: 'Coding Ninjas', shortName: 'Coding Ninjas', logo: '/assets/logos/coding-ninjas.png', width: 168, height: 48 },
  { name: 'BITS Pilani', shortName: 'BITS Pilani', logo: '/assets/logos/bits-pilani.png', width: 176, height: 92 },
  { name: 'Info Edge', shortName: 'Info Edge', logo: '/assets/logos/info-edge.png', width: 152, height: 136 },
  { name: 'Edwisor', shortName: 'Edwisor', logo: '/assets/logos/edwisor.png', width: 176, height: 92 },
  { name: 'Madrid Software', shortName: 'Madrid Software', logo: '/assets/logos/madrid-software.png', width: 196, height: 56 },
  { name: 'Datafolkz', shortName: 'Datafolkz', logo: '/assets/logos/datafolkz.png', width: 80, height: 82 },
  { name: 'NPTEL', shortName: 'NPTEL', logo: '/assets/logos/nptel-crop.png', width: 156, height: 102 },
  { name: 'INSAID', shortName: 'INSAID', logo: '/assets/logos/insaid.png', width: 64, height: 64 },
  { name: 'E&ICT Academy IIT Guwahati', shortName: 'IIT Guwahati', logo: '/assets/logos/eict-iitg.png', width: 196, height: 40 },
];
