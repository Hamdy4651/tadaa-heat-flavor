import { createServerFn } from '@tanstack/react-start';
import { z } from 'zod';
import { menu, totalFor, type CartItem } from './menu';
const itemSchema = z.object({ key:z.string().max(120), productId:z.string().max(100), quantity:z.number().int().min(1).max(30), sauce:z.string().max(60).optional(), extra:z.string().max(60).optional(), heat:z.string().max(60).optional(), note:z.string().max(250).optional() });
const schema = z.object({ items:z.array(itemSchema).min(1).max(60), fulfillment:z.enum(['pickup','delivery','dinein']) });
export const previewOrder = createServerFn({ method:'POST' }).inputValidator(data => schema.parse(data)).handler(async ({data}) => {
 for (const item of data.items) { const p = menu.find(m => m.id === item.productId); if (!p || p.price == null || (item.extra && !['Extra Käse','Keine Extras'].includes(item.extra)) || (item.sauce && !['Knoblauch','Kräuter','Scharf','Ohne Soße'].includes(item.sauce))) throw new Error('Ein Artikel ist nicht verfügbar.'); }
 const { total } = totalFor(data.items as CartItem[], data.fulfillment);
 const reference = `DEMO-${Date.now().toString(36).toUpperCase()}-${crypto.randomUUID().slice(0,4).toUpperCase()}`;
 return { reference, total };
});
