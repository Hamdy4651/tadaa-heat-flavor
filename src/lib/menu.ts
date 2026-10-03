export type Category = 'pizza' | 'doner' | 'salads' | 'snacks' | 'drinks';
export type Product = { id: string; number?: string; name: string; en?: string; price: number | null; category: Category; group: string; description?: string; spicy?: boolean; vegetarian?: boolean; allergens?: string[]; image?: 'pizza' | 'doner' | 'bowl' };
const make = (category: Category, group: string, rows: [string, string, number | null, string?][], image?: Product['image']): Product[] => rows.map(([number,name,price,description]) => ({ id: `${category}-${group}-${number}`, number, name, price, category, group, ...(description ? {description} : {}), ...(image ? {image} : {}), spicy: name === 'Diavolo', vegetarian: /Margherita|Funghi|Vegetaria|Falafel|Halloumi|Veggie|Caprese|Pommes|Mozzarella|Zwiebelringe/i.test(name), ...(category === 'pizza' ? {allergens:['A','G']} : {}) }));
export const menu: Product[] = [
 ...make('pizza','Pizzen 30 cm', [['01','Margherita',750],['02','Salami',850],['03','Prosciutto',850],['04','Funghi',850],['05','Fantasia',900],['06','Tonno',950],['07','Diavolo',900],['08','Vegetaria',1050],['09','Capricciosa',1100],['10','Quattro Stagioni',1000]],'pizza'),
 ...make('pizza','Calzone', [['23','Calzone',1000,'Schinken, Salami, Champignons, Zwiebeln'],['24','Döner-Calzone',1100]],'pizza'),
 ...make('pizza','Gefüllte Pizzabrötchen', [['25','Salami',900],['26','Schinken',900],['27','Thunfisch',950],['28','Dönerfleisch',950],['29','Sucuk',950]],'pizza'),
 ...make('doner','Döner & Lahmacun', [['01','Döner Kebap',700],['02','Dürüm Döner',800],['03','Döner Teller',1100],['04','Döner Box',700],['05','Lahmacun',800],['06','Lahmacun mit Dönerfleisch',900]],'doner'),
 ...make('doner','Bowls', [['11','Shawarma Bowl',1000,'Hähnchenfleisch, Reis oder Pommes, Salat & Knoblauchcreme'],['12','Crispy Chicken Bowl',1000],['13','Halloumi Bowl',1000],['14','Falafel Bowl',1000],['15','Falafel-Halloumi Bowl',1000],['16','Veggie Bowl',1000]],'bowl'),
 ...make('doner','Sandwiches', [['17','Crispy Chicken Sandwich',800],['18','Pommes Sandwich',600]],'doner'),
 ...make('doner','Falafel & Halloumi', [['19','Falafel im arabischen Brot',800],['20','Falafel Teller',1200],['21','Halloumi im Brot',700],['22','Halloumi Teller',1200]],'bowl'),
 ...make('doner','Schnitzel', [['30','Wiener Art',1000],['31','Hawaii',1100],['32','Holsteiner Art',1100]],'doner'),
 ...make('salads','Salate', [['33','Insalata Mista',1000],['34','Italia',1000],['35','Tonno',1000],['36','Capricciosa',1100],['37','Fiorida',1100],['38','Caprese',1000],['39','della Casa',1000]],'bowl'),
 ...make('snacks','Pommes & Snacks', [['40','Pommes',null,'Preis vor Bestellung bitte telefonisch erfragen'],['41','Chicken Nuggets (6 Stk.)',600],['42','Mozzarella Sticks (6 Stk.)',600],['43','Zwiebelringe (6 Stk.)',500]],'bowl'),
 ...make('drinks','Getränke', [['','Coca-Cola 0,33 l',250],['','Coca-Cola Light 0,33 l',250],['','Fanta 0,33 l',250],['','Sprite 0,33 l',250],['','Mezzo Mix 0,33 l',250],['','Ayran 0,33 l',250],['','Wasser 0,5 l',200]])
];
export const money = (cents: number) => new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(cents / 100);
export const categories: { id: Category; de: string; en: string }[] = [{id:'pizza',de:'Pizza & Co.',en:'Pizza & Co.'},{id:'doner',de:'Döner & Grill',en:'Kebab & Grill'},{id:'salads',de:'Salate',en:'Salads'},{id:'snacks',de:'Pommes & Snacks',en:'Fries & Snacks'},{id:'drinks',de:'Getränke',en:'Drinks'}];
export type CartItem = { key: string; productId: string; quantity: number; sauce?: string; extra?: string; heat?: string; note?: string };
export const EXTRA_PRICE = 150;
export const DISCOUNT_PERCENT = 10;
export const DELIVERY_FEE_CENTS = 0;
export const DELIVERY_MIN_CENTS = 0;
export const DELIVERY_POSTCODES = ['72525'];
export function totalFor(items: CartItem[], fulfillment: string) { const subtotal = items.reduce((sum,item) => { const product = menu.find(p => p.id === item.productId); return sum + (product?.price == null ? 0 : (product.price + (item.extra === 'Extra Käse' ? EXTRA_PRICE : 0)) * item.quantity); },0); const comboCount = Math.min(...(['pizza,doner','salads,snacks','drinks'].map(group => items.filter(i => i.key.endsWith('|combo') && group.split(',').includes(menu.find(p => p.id === i.productId)?.category ?? '')).reduce((sum,i)=>sum+i.quantity,0)))); const comboDiscount = comboCount * 150; const onlineDiscount = Math.round((subtotal - comboDiscount) * DISCOUNT_PERCENT / 100); const discount = comboDiscount + onlineDiscount; const fee = fulfillment === 'delivery' ? DELIVERY_FEE_CENTS : 0; return { subtotal, comboDiscount, onlineDiscount, discount, fee, total: subtotal - discount + fee }; }
