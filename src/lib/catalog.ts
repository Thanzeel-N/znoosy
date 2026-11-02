export const products = [
  { id: 'essential', name: 'The Essential', mood: 'SIMPLICITY, PERFECTED', description: 'A quietly luxurious foundation for every night. Gentle cushioning meets a reassuring, balanced feel.', feel: 'Medium firm', price: 890, image: '/images/ritual.jpg', tag: 'EVERYDAY COMFORT', materials: 'Breathable knit cover · Adaptive comfort foam · Supportive base' },
  { id: 'signature', name: 'The Signature', mood: 'OUR MOST CONSIDERED COMFORT', description: 'The best of both worlds. An inviting, cloudlike surface with the responsive support of a hybrid core.', feel: 'Medium plush', price: 1290, image: '/images/bedroom.jpg', tag: 'THE SIGNATURE EXPERIENCE', materials: 'Soft quilted cover · Responsive comfort layers · Pocket spring core' },
  { id: 'reserve', name: 'The Reserve', mood: 'AN EXTRAORDINARY KIND OF REST', description: 'Our fullest expression of comfort. A generous pillow top and a deeply supportive foundation for slow, restorative nights.', feel: 'Luxury plush', price: 1890, image: '/images/suite.jpg', tag: 'ULTIMATE INDULGENCE', materials: 'Plush pillow top · Layered comfort system · Zoned spring support' },
];
export type Product = typeof products[number];
export const sizes = [{ name: 'Twin', add: -200 }, { name: 'Queen', add: 0 }, { name: 'King', add: 300 }];
export const money = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
export const layers = [
  { title: 'A softer first impression', material: '01 / BREATHABLE QUILTED COVER', text: 'A gently textured surface welcomes you in, with an airy knit designed around the feeling of fresh sheets.' },
  { title: 'Comfort that follows you', material: '02 / ADAPTIVE COMFORT LAYER', text: 'A yielding comfort layer contours to your natural shape, creating a relaxed, cradled feeling as you settle in.' },
  { title: 'Room to breathe', material: '03 / AIRFLOW TRANSITION LAYER', text: 'An open structure creates space for air to circulate, bringing a lighter feel to the heart of the mattress.' },
  { title: 'Support, in perfect balance', material: '04 / RESPONSIVE SPRING CORE', text: 'Individually wrapped springs respond to movement, balancing a soft welcome with a dependable foundation.' },
  { title: 'Made for the long rest', material: '05 / STABILITY BASE', text: 'A steady base brings every layer together. Considered from top to bottom, down to the details you never see.' },
];
