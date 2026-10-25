<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep menu prices, discounts, and catalog data static in `src/lib/menu.ts`; recalculate checkout totals in the server function.
- Do not connect a database or persist submitted customer details or real order inquiries. Checkout is a local demo only; clearly state that demo orders are not sent to the restaurant.
- Keep product and cart overlays as bottom sheets rather than centered dialogs, matching the restaurant's mobile ordering flow.
- Scope the light ordering-surface tokens to bottom sheets and the basket dock so menu pages retain the restaurant theme while ordering controls stay high-contrast.
