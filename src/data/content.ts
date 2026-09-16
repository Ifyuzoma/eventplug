import { photos, avatars } from './photos';

export const categories = [
  { no: '01', name: 'Venues', count: '212' },
  { no: '02', name: 'Catering', count: '186' },
  { no: '03', name: 'Photo & Video', count: '241' },
  { no: '04', name: 'DJs & Live Bands', count: '164' },
  { no: '05', name: 'Decor & Florals', count: '138' },
  { no: '06', name: 'Cakes & Desserts', count: '97' },
  { no: '07', name: 'Hair & Makeup', count: '121' },
  { no: '08', name: 'MCs & Hosts', count: '89' },
];

export const carouselSlides = [
  {
    src: photos.marcBabin,
    caption: 'Search results on screen',
    headline: 'Filter by date, budget and guest count.',
    body: 'Only vendors actually free on your date and inside your budget show up. Every listing carries a published price, never "enquire for pricing".',
  },
  {
    src: photos.jayWennington,
    caption: 'Vendor comparing packages',
    headline: 'Take a published package, or ask for a quote.',
    body: 'Book a listed package at its listed price and get an answer inside 48 hours. For something custom, send one brief and let vendors quote you back.',
  },
  {
    src: photos.dannyHowe,
    caption: 'The event itself',
    headline: 'Deposit holds it. The balance waits.',
    body: 'A 25% deposit locks the date. The balance is due 14 days out, and we hold the money until 48 hours after your event.',
  },
];

export const carouselTabs = ['Search', 'Choose', 'Hold the date'];

export const featured = [
  { src: photos.kimBecker, cat: 'Photography · Toronto', name: 'Nine Frames', meta: 'Editorial, 8h coverage', price: '$2,400', rating: '4.9 · 96' },
  { src: photos.alvinMahmudov, cat: 'Venue · Mississauga', name: 'The Glasshouse', meta: 'Seats 220 · patio', price: '$5,800', rating: '4.8 · 41' },
  { src: photos.thomasWilliam, cat: 'DJ · Brampton', name: 'Ridgeline Sound', meta: 'Afrobeats, soca, top 40', price: '$1,150', rating: '5.0 · 73' },
  { src: photos.jeremyWong, cat: 'Decor · Ottawa', name: 'Marigold Studio', meta: 'Florals + full styling', price: '$3,200', rating: '4.7 · 58' },
];

export const vendorStats = [
  { value: '92%', label: 'of every booking stays with you. Flat 8% platform fee, no lead charges.' },
  { value: '3.4 days', label: 'average time from enquiry to signed deposit on eventplug.' },
  { value: '11,900', label: 'Ontario hosts searching for vendors every month.' },
];

export const reviews = [
  { text: 'We had four quotes back before lunch. Booked the caterer that afternoon and never chased a single email.', by: 'Claire W.', meta: 'Wedding · Hamilton, 180 guests', av: avatars.jakeNackos },
  { text: 'The deposit sitting in escrow is the whole thing for me. Nobody disappears when the money is held.', by: 'Marcus T.', meta: 'Corporate launch · Toronto', av: avatars.ryanHoffman },
  { text: "I planned my mum’s 60th from a hotel room in Calgary. Venue, cake, MC, all confirmed in two days.", by: 'Adaeze O.', meta: 'Birthday · Mississauga, 90 guests', av: avatars.christina },
  { text: 'As a vendor I stopped losing Saturdays to phone tag. Requests come in with the date and budget already on them.', by: 'Devon R.', meta: 'DJ · Ridgeline Sound', av: avatars.dannyPostma },
  { text: 'Two vendors cancelled on us elsewhere. Here the calendar was accurate, so what I booked actually showed up.', by: 'Priya S.', meta: 'Engagement party · Ottawa', av: avatars.giorgioTrovato },
  { text: 'Payouts land two days after the event. I used to wait six weeks and send three invoices.', by: 'Sam H.', meta: 'Caterer · Fern & Fig', av: avatars.willianSouza },
];

export const footerCols = [
  { title: 'For hosts', links: ['Start planning', 'Browse vendors', 'Pricing guides', 'Help centre'] },
  { title: 'For vendors', links: ['List your business', 'Vendor dashboard', 'Payout terms', 'Success stories'] },
  { title: 'Company', links: ['About us', 'Careers', 'Press', 'Contact'] },
];

export const sortChips = ['Sat, Jun 20', '120 guests', '$40–$85 / guest', 'Plated', 'Vegan menu', '+ 3 more'];

export const filterGroups = [
  { title: 'Category', items: [{ name: 'Catering', count: '186', on: true }, { name: 'Venues', count: '212', on: false }, { name: 'Photo & Video', count: '241', on: false }, { name: 'DJs & Bands', count: '164', on: false }] },
  { title: 'Service style', items: [{ name: 'Plated dinner', count: '94', on: true }, { name: 'Family style', count: '61', on: false }, { name: 'Buffet', count: '120', on: false }, { name: 'Cocktail / canapés', count: '77', on: false }] },
  { title: 'Dietary', items: [{ name: 'Halal', count: '48', on: false }, { name: 'Vegan menu', count: '82', on: true }, { name: 'Gluten-free', count: '96', on: false }, { name: 'Kosher', count: '19', on: false }] },
];

export const results = [
  { src: photos.alexMunsell, name: 'Fern & Fig Catering', cat: 'Catering', city: 'Etobicoke · 14 km', blurb: 'Seasonal Ontario menus, plated or family-style, for 40–300 guests. Two chefs on site and full front-of-house.', specs: 'Plated · Vegan menu · Bar service · Staffing included', avail: 'Free Sat, Jun 20', price: '$68', unit: '/guest', rating: '4.9', reviews: '128 reviews' },
  { src: photos.chadMontanoDish, name: 'Copperleaf Kitchen', cat: 'Catering', city: 'North York · 21 km', blurb: 'Family-style Levantine spreads. Mezze, grills, and a dessert table that people photograph before eating.', specs: 'Family style · Halal · Vegan menu · Rentals extra', avail: 'Free Sat, Jun 20', price: '$54', unit: '/guest', rating: '4.8', reviews: '77 reviews' },
  { src: photos.codyChan, name: 'Salt & Sumac', cat: 'Catering', city: 'Mississauga · 26 km', blurb: 'Cocktail-format canapés and late-night stations for corporate receptions of 100–600.', specs: 'Canapés · Late-night · Bar service · Uniformed staff', avail: 'Waitlist Jun 20', price: '$41', unit: '/guest', rating: '4.7', reviews: '52 reviews' },
  { src: photos.enginAkyurt, name: 'The Long Table Co.', cat: 'Catering', city: 'Hamilton · 58 km', blurb: 'One long table, one set menu, five courses. Farm partnerships within 100 km of the venue.', specs: 'Plated · Gluten-free · Sommelier add-on', avail: 'Free Sat, Jun 20', price: '$95', unit: '/guest', rating: '5.0', reviews: '34 reviews' },
  { src: photos.anhNguyen, name: 'Bloor Street Bites', cat: 'Catering', city: 'Toronto · 8 km', blurb: 'Buffet catering built for birthdays and showers. Straightforward pricing, quick turnarounds, no minimum.', specs: 'Buffet · Halal · Delivery only · 24h notice', avail: 'Free Sat, Jun 20', price: '$32', unit: '/guest', rating: '4.6', reviews: '210 reviews' },
];

export const packages = [
  { name: 'Plated three-course', desc: 'Two starters, choice of three mains, dessert. Includes service staff for 6 hours.', min: 'Min. 60 guests', price: '$68', unit: 'per guest', tag: 'Instant book', dot: '#FF6B6B' },
  { name: 'Family-style feast', desc: 'Shared platters brought to table, four mains, five sides, bread service.', min: 'Min. 40 guests', price: '$54', unit: 'per guest', tag: 'Instant book', dot: 'transparent' },
  { name: 'Cocktail reception', desc: 'Eight passed canapés, two stations, 3 hours of service.', min: 'Min. 80 guests', price: '$44', unit: 'per guest', tag: 'Instant book', dot: 'transparent' },
];

export const addons = [
  { name: 'Bar service + two bartenders', price: '$680', checked: true },
  { name: 'Late-night poutine station', price: '$14 / guest', checked: false },
  { name: 'China, glassware, linen rental', price: '$9 / guest', checked: false },
  { name: 'Menu tasting for two', price: '$120', checked: false },
];

export const vendorBars = [
  { label: 'Food and drink', val: '5.0', w: '100%' },
  { label: 'Communication', val: '4.9', w: '96%' },
  { label: 'Punctuality', val: '4.8', w: '92%' },
  { label: 'Value for money', val: '4.7', w: '88%' },
];

export const vendorFacts = [
  { k: 'Based in', v: 'Etobicoke, ON' },
  { k: 'Travels', v: 'Up to 120 km · GTA, Hamilton, Niagara' },
  { k: 'Capacity', v: '40 – 300 guests' },
  { k: 'Booked since', v: '2019 · 412 events' },
  { k: 'Responds in', v: 'Under 3 hours' },
  { k: 'Insurance', v: '$5M liability · Public Health certified' },
];

export const vendorReviews = [
  { init: 'C', name: 'Claire W.', when: 'Wedding · Sept 2025', stars: 5, text: 'They fed 180 people hot food, on time, in a barn with one outlet. The tasting was honest about what travels well and what does not, and that alone was worth booking them.' },
  { init: 'D', name: 'Daniel Reid', when: 'Corporate · Nov 2025', stars: 5, text: 'Adjusted the menu twice after our guest count moved, and re-quoted inside the thread the same afternoon. Invoice matched the quote to the dollar.' },
  { init: 'H', name: 'Hannah S.', when: 'Engagement party · Aug 2025', stars: 4, text: 'Food was excellent. Setup ran 20 minutes late, which they flagged in advance and made up for by staying an extra hour.', reply: 'You were right to call it out. We now build a 30 minute buffer into barn venues with a single access road.' },
];

export const myEvents = [
  { name: 'Claire & James', kind: 'Wedding · 180 guests', date: 'Sat, Jun 20, 2026', active: true },
  { name: 'Q3 Client Dinner', kind: 'Corporate · 40 guests', date: 'Thu, Sep 10, 2026', active: false },
];

export const mobEvents = [
  { d: '20', m: 'Jun', t: 'Claire & James', s: '3 of 5 vendors booked', bar: '60%', dot: '#FF6B6B' },
  { d: '04', m: 'Sep', t: "Dad’s 60th", s: '1 of 4 vendors booked', bar: '25%', dot: '#FFD166' },
  { d: '12', m: 'Dec', t: 'Northline holiday party', s: 'Collecting quotes', bar: '10%', dot: '#E3DDD3' },
];

export const roster = [
  { cat: 'Catering', vendor: 'Fern & Fig Catering', status: 'Confirmed', dot: '#3D9B70', amount: '$9,989.20', action: 'Balance due Jun 6' },
  { cat: 'Venue', vendor: 'The Glasshouse', status: 'Confirmed', dot: '#3D9B70', amount: '$5,800.00', action: 'Site visit Apr 4' },
  { cat: 'Photography', vendor: 'Nine Frames', status: 'Awaiting vendor', dot: '#E0A32E', amount: '$2,400.00', action: 'Sent 6 hours ago' },
  { cat: 'DJ', vendor: 'Ridgeline Sound', status: 'Quote received', dot: '#2D7FA8', amount: '$1,150.00', action: 'Expires in 4 days' },
  { cat: 'Decor & Florals', vendor: '3 vendors shortlisted', status: 'Comparing', dot: '#8C9AA3', amount: '–', action: 'Compare quotes' },
  { cat: 'Cake', vendor: 'Not started', status: 'To do', dot: '#D6CFC4', amount: '–', action: 'Browse 97 bakers' },
];

export const tasks = [
  { when: 'Mar 12', label: 'Confirm final guest count with Fern & Fig', who: 'Due in 4 days' },
  { when: 'Mar 15', label: 'Accept or decline Ridgeline Sound quote', who: 'Quote expires' },
  { when: 'Apr 4', label: 'Site visit · The Glasshouse, 2:00 PM', who: 'Calendar invite sent' },
];

export const docs = [
  { name: 'Fern & Fig, signed contract.pdf', meta: 'Mar 2 · 240 KB' },
  { name: 'Glasshouse floor plan.pdf', meta: 'Feb 19 · 1.1 MB' },
  { name: 'Deposit receipt, $2,497.30.pdf', meta: 'Mar 2 · 88 KB' },
];

export const threads = [
  { init: 'F&F', name: 'Fern & Fig Catering', snippet: 'Sent the revised menu. Bread service after the toasts.', time: '11:42', unread: true, active: true },
  { init: 'RS', name: 'Ridgeline Sound', snippet: 'Quote attached: $1,150 for 6 hours + ceremony PA.', time: '09:15', unread: true, active: false },
  { init: 'NF', name: 'Nine Frames', snippet: 'Checking with my second shooter, back to you tonight.', time: 'Yesterday', unread: false, active: false },
  { init: 'TG', name: 'The Glasshouse', snippet: 'Site visit confirmed for April 4 at 2pm.', time: 'Mon', unread: false, active: false },
  { init: 'MS', name: 'Marigold Studio', snippet: 'Would you like the archway in white or blush?', time: 'Feb 28', unread: false, active: false },
];

export const messages = [
  { who: 'Fern & Fig', mine: false, text: 'Hi Claire, thanks for the request. Two things: the coeliac guests are easy, and I would move the bread service after the toasts as you suggested. It plates better warm.', time: '11:02' },
  { who: 'You', mine: true, text: 'That works. Can we swap one main for a vegan option that is not a risotto?', time: '11:18' },
  { who: 'Fern & Fig', mine: false, text: 'Yes, braised king oyster with white bean purée. Same price. I have revised the menu and the quote below.', time: '11:40' },
];

export const notifRows = [
  { label: 'Booking accepted, declined or changed', email: true, sms: true, push: true },
  { label: 'New message from a vendor', email: true, sms: false, push: true },
  { label: 'Quote received or expiring', email: true, sms: true, push: false },
  { label: 'Payment reminders', email: true, sms: false, push: false },
  { label: 'Reviews and follow-ups', email: false, sms: false, push: true },
  { label: 'Planning tips and vendor picks', email: false, sms: false, push: false },
];

export const settingsNav = ['Profile', 'Account & security', 'Notifications', 'Payment methods', 'Privacy'];

export const schedule = [
  { dot: '#FF6B6B', label: 'Deposit · 25%', when: 'Today, authorised', amount: '$2,497.30' },
  { dot: '#E3DDD3', label: 'Balance · 75%', when: 'Jun 6, 2026', amount: '$7,491.90' },
  { dot: '#B4DFCB', label: 'Released to vendor', when: 'Jun 22, 2026', amount: '$9,190.06' },
];

export const nextSteps = [
  { n: '01', t: 'Sam confirms your menu', b: 'Fern & Fig have 48 hours to lock the plated menu you picked. The answer lands in your inbox here.' },
  { n: '02', t: 'Tasting, Apr 4 at 2:00 PM', b: 'Two seats at the studio kitchen in Etobicoke. Move it from your booking page any time before Mar 28.' },
  { n: '03', t: 'Balance on Jun 6', b: 'The remaining $7,491.90 comes off the same card two weeks out. Nothing for you to do until then.' },
];

export const receiptLines = [
  { k: 'Plated dinner, 180 guests at $54.94', v: '$9,889.20' },
  { k: 'Service staff, 8 for six hours', v: '$1,440.00' },
  { k: 'Late-night grilled cheese station', v: '$620.00' },
  { k: 'Ontario HST (13%)', v: '$1,552.70' },
];
