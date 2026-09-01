const videoProject = (no, slug, name, mediaKey) => ({
  slug, no, name, mediaKey, art: 'video', year: '2026',
  meta: 'Vertical video / Selected work',
  classification: 'Selected work',
  thesis: `A short-form creative film for ${name}.`,
  context: `A focused vertical-video piece created for ${name}.`,
  direction: 'A concise, visually distinct direction built for modern video platforms.',
  contribution: 'Creative direction / AI production / Post-production',
  outcome: 'Selected work. Performance and client attribution will be published only after written clearance.'
})

export const projects = [
  videoProject('01', 'apple-concept-ad', 'Apple Concept AD', 'apple-concept-ad'),
  videoProject('02', 'penrose-skin', 'Penrose Skin', 'penrose-skin'),
  videoProject('03', 'memzero-gateway', 'MemZero / Gateway', 'memzero-gateway'),
  videoProject('04', 'bella-necklace', 'Bella Necklace', 'bella-necklace'),
  videoProject('05', 'accident-claim', 'Accident Claim', 'accident-claim'),
  videoProject('06', 'vyve-coffee-02', 'Vyve Coffee / 02', 'vyve-coffee-02'),
  videoProject('07', 'lovify', 'Lovify', 'lovify'),
  videoProject('08', 'rovina-softgels', 'Rovina Softgels', 'rovina-softgels'),
  videoProject('09', 'peggy-summer-camp', 'Peggy Summer Camp', 'peggy-summer-camp'),
  videoProject('10', 'snatched-the-jawline', 'Snatched the Jawline', 'snatched-the-jawline'),
  videoProject('11', 'tooth-truth', 'Tooth Truth', 'tooth-truth')
]

export const principles = [
  ['Different angles', 'Each concept tests a genuinely different reason for the customer to care.'],
  ['Human direction', 'Research, judgment, taste, and brand context decide what deserves to be produced.'],
  ['Modern production', 'AI expands the number of useful directions a team can explore without lowering the standard.']
]

export const sprintStages = [
  ['01', 'Diagnose', 'Brand, audience, reviews, competitors, existing ads, and available performance signal.'],
  ['02', 'Develop', 'Three strategically distinct creative territories, concepts, hooks, and scripts.'],
  ['03', 'Produce', 'Approved concepts become platform-ready assets at the cadence defined by the engagement.'],
  ['04', 'Learn', 'Testing recommendations and a review of what the next creative cycle should explore.']
]

export const offers = [
  { name: 'Creative Opportunity Audit', price: '$350', cadence: '5-7 business days', description: 'A low-risk way to experience Kynor strategic thinking before committing to production.', items: ['Brand and active-ad review', 'Customer and competitor research', 'Three messaging opportunities', 'One sample creative concept', '30-day testing roadmap'], cta: 'Start with an audit' },
  { name: 'Founding Creative Pilot', price: '$1,250', cadence: '2-3 weeks', featured: true, description: 'A focused first engagement that takes three distinct creative directions from research to test-ready ads.', items: ['Complete creative diagnostic', 'Three territories, concepts and scripts', 'Multiple hook directions', '6-8 finished video ads', 'Testing plan and post-launch review'], cta: 'Apply for a pilot' },
  { name: 'Monthly Creative Partnership', price: '$2,500', cadence: 'per month / after the pilot', description: 'An ongoing creative-testing system for brands ready to turn early learning into a consistent cadence.', items: ['Monthly performance review', 'Five original concepts', '12-16 finished ads', 'Two production batches', 'Monthly testing roadmap'], cta: 'Discuss a partnership' }
]
