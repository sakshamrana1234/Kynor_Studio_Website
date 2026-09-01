const youtube = (id, alt) => ({
  embedUrl: `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&playsinline=1&rel=0&modestbranding=1`,
  poster: '',
  alt
})

export const mediaConfig = {
  'apple-concept-ad': youtube('PJJMUkhTE5w', 'Apple Concept AD'),
  'penrose-skin': youtube('0Xe9i6OjrNM', 'Penrose Skin'),
  'memzero-gateway': youtube('nKbitVwDCfk', 'MemZero Gateway'),
  'bella-necklace': youtube('Ehl4P-HU8xY', 'Bella Necklace'),
  'accident-claim': youtube('hIdxz3RjYQ8', 'Accident Claim'),
  'vyve-coffee-02': youtube('WukLWwJ4qRU', 'Vyve Coffee 02'),
  lovify: youtube('PZuUkEX6DbM', 'Lovify'),
  'rovina-softgels': youtube('ry3RoeDC5ag', 'Rovina Softgels'),
  'peggy-summer-camp': youtube('AaaBKAfVNDI', 'Peggy Summer Camp'),
  'snatched-the-jawline': youtube('iZEebuFx808', 'Snatched the Jawline'),
  'tooth-truth': youtube('aGhWqFke13g', 'Tooth Truth')
}
