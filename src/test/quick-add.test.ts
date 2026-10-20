import { describe, expect, it } from 'vitest';
import { defaultCartItem, menu } from '@/lib/menu';

describe('Direct basket addition', () => {
 it('adds one item without requiring customization', () => {
  const product = menu.find(p => p.name === 'Margherita');
  if (!product) throw new Error('Missing menu item');
  expect(defaultCartItem(product)).toEqual({ key: `${product.id}|Ohne Soße|Keine Extras|Normal|`, productId: product.id, quantity: 1, sauce: 'Ohne Soße', extra: 'Keine Extras', heat: 'Normal', note: '' });
 });
 it('does not add an item with an unknown price', () => {
  const product = menu.find(p => p.name === 'Pommes');
  if (!product) throw new Error('Missing menu item');
  expect(defaultCartItem(product)).toBeNull();
 });
});