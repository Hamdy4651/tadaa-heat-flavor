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

- Keep menu prices and discounts in `src/lib/menu.ts` and recalculate order totals in the server function; client cart totals are previews only.
- Store only submitted restaurant order inquiries in Lovable Cloud; do not imply payment, acceptance, or live order tracking until operator integrations exist.
- Keep product and cart overlays as bottom sheets rather than centered dialogs, matching the restaurant's mobile ordering flow.
- Scope the light ordering-surface tokens to bottom sheets and the basket dock so menu pages retain the restaurant theme while ordering controls stay high-contrast.
