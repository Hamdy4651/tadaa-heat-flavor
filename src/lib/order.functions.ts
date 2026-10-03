import { createServerFn } from '@tanstack/react-start';
import { z } from 'zod';
import { menu, totalFor, DELIVERY_POSTCODES, type CartItem } from './menu';
const itemSchema = z.object({ key:z.string().max(120), productId:z.string().max(100), quantity:z.number().int().min(1).max(30), sauce:z.string().max(60).optional(), extra:z.string().max(60).optional(), heat:z.string().max(60).optional(), note:z.string().max(250).optional() });
const schema = z.object({ items:z.array(itemSchema).min(1).max(60), fulfillment:z.enum(['pickup','delivery','dinein']), customer:z.object({ firstName:z.string().trim().min(1).max(80), lastName:z.string().trim().min(1).max(80), email:z.string().trim().email().max(255), phone:z.string().trim().min(5).max(30), street:z.string().max(140).optional(), postcode:z.string().max(12).optional(), city:z.string().max(80).optional(), table:z.string().max(20).optional(), time:z.string().max(40).optional(), note:z.string().max(500).optional() }), terms:z.literal(true), payment:z.literal('cash') });
export const placeOrder = createServerFn({ method:'POST' }).inputValidator(data => schema.parse(data)).handler(async ({data}) => {
 for (const item of data.items) { const p = menu.find(m => m.id === item.productId); if (!p || p.price == null || (item.extra && !['Extra Käse','Keine Extras'].includes(item.extra)) || (item.sauce && !['Knoblauch','Kräuter','Scharf','Ohne Soße'].includes(item.sauce))) throw new Error('Ein Artikel ist nicht verfügbar.'); }
 if (data.fulfillment === 'delivery' && (!data.customer.street?.trim() || !DELIVERY_POSTCODES.includes(data.customer.postcode ?? '') || !data.customer.city?.trim())) throw new Error('Lieferung ist derzeit nur für 72525 Münsingen vorbereitet. Bitte wähle Abholung oder ruf uns an.');
 if (data.fulfillment === 'dinein' && !data.customer.table?.trim()) throw new Error('Bitte gib deine Tischnummer ein.');
 const { subtotal,discount,fee,total } = totalFor(data.items as CartItem[], data.fulfillment);
 const orderNumber = `TB-${Date.now().toString(36).toUpperCase()}-${crypto.randomUUID().slice(0,4).toUpperCase()}`;
 const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
 const { error } = await supabaseAdmin.from('restaurant_orders').insert({ order_number:orderNumber, items:data.items, customer:data.customer, fulfillment:data.fulfillment, subtotal_cents:subtotal, discount_cents:discount, delivery_fee_cents:fee, total_cents:total, payment_method:'cash' });
 if (error) throw new Error('Bestellung konnte nicht gespeichert werden. Bitte ruf uns an.');
 return { orderNumber, total };
});
