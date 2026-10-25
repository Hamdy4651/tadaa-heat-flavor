import { useEffect, useRef, useState } from "react";
import { ArrowRight, Plus, Minus, Trash2, Check, Sparkles } from "lucide-react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  categories,
  menu,
  money,
  totalFor,
  type CartItem,
  type Category,
  type Product,
  DELIVERY_POSTCODES,
} from "@/lib/menu";
import { copy, type Language } from "@/lib/copy";
import logo from "@/assets/tadaabiss-logo.jpg";
import pizza from "@/assets/pizza-fire.jpg";
import doner from "@/assets/doner-fire.jpg";
import dough from "@/assets/dough-hands.jpg";
import table from "@/assets/food-table.jpg";
const imageFor = (item: Product) =>
  item.image === "pizza" ? pizza : item.image === "doner" ? doner : table;
export function useRestaurant() {
  const [lang, setLang] = useState<Language>("de");
  const [fulfillment, setFulfillment] = useState<"pickup" | "delivery" | "dinein">("pickup");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    try {
      const raw = localStorage.getItem("tadaabiss-cart");
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed))
          setCart(
            parsed.filter(
              (i: CartItem) =>
                i &&
                menu.some((p) => p.id === i.productId && p.price != null) &&
                Number.isInteger(i.quantity) &&
                i.quantity > 0,
            ),
          );
      }
      const stored = localStorage.getItem("tadaabiss-mode");
      if (stored === "pickup" || stored === "delivery" || stored === "dinein")
        setFulfillment(stored);
      const language = localStorage.getItem("tadaabiss-lang");
      if (language === "en") setLang("en");
    } catch {
      /* ignore stale preferences */
    } finally {
      setHydrated(true);
    }
  }, []);
  useEffect(() => {
    if (hydrated) localStorage.setItem("tadaabiss-cart", JSON.stringify(cart));
  }, [cart, hydrated]);
  useEffect(() => {
    localStorage.setItem("tadaabiss-mode", fulfillment);
  }, [fulfillment]);
  useEffect(() => {
    localStorage.setItem("tadaabiss-lang", lang);
  }, [lang]);
  const add = (item: CartItem) =>
    setCart((previous) => {
      const existing = previous.find((i) => i.key === item.key);
      return existing
        ? previous.map((i) =>
            i.key === item.key ? { ...i, quantity: i.quantity + item.quantity } : i,
          )
        : [...previous, item];
    });
  const update = (key: string, change: number) =>
    setCart((previous) =>
      previous
        .map((i) => (i.key === key ? { ...i, quantity: i.quantity + change } : i))
        .filter((i) => i.quantity > 0),
    );
  return {
    lang,
    setLang,
    fulfillment,
    setFulfillment,
    cart,
    setCart,
    add,
    update,
    t: copy[lang],
    totals: totalFor(cart, fulfillment),
  };
}
export type RestaurantState = ReturnType<typeof useRestaurant>;
export function Header({ state, onCart }: { state: RestaurantState; onCart: () => void }) {
  const [mobile, setMobile] = useState(false);
  const count = state.cart.reduce((n, i) => n + i.quantity, 0);
  const links = [
    ["/#speisekarte", state.t.menu],
    ["/#so-gehts", state.t.how],
    ["/#ueber-uns", state.t.about],
    ["/#kontakt", state.t.contact],
  ];
  return (
    <>
      <header className="site-header">
        <div className="section-wrap header-inner">
          <Link to="/" aria-label="TadaaBiss Startseite">
            <img className="brand-img" src={logo} alt="TadaaBiss – Eat Meet Repeat" />
          </Link>
          <nav className="nav-links" aria-label="Hauptnavigation">
            {links.map(([href, text]) => (
              <a key={href} href={href}>
                {text}
              </a>
            ))}
          </nav>
          <div className="nav-right">
            <div className="lang-switch">
              <Button
                variant="ghost"
                className={state.lang === "de" ? "active" : ""}
                onClick={() => state.setLang("de")}
                aria-label="Deutsch"
              >
                DE
              </Button>
              <span>/</span>
              <Button
                variant="ghost"
                className={state.lang === "en" ? "active" : ""}
                onClick={() => state.setLang("en")}
                aria-label="English"
              >
                EN
              </Button>
            </div>
            <Button
              variant="ghost"
              className="cart-icon"
              aria-label={`${state.t.cart}: ${count}`}
              onClick={onCart}
            >
              <BagIcon />
              {count > 0 && <span className="cart-count">{count}</span>}
            </Button>
            <Button
              variant="ghost"
              className="menu-toggle"
              aria-label="Menü öffnen"
              onClick={() => setMobile(true)}
            >
              ☰
            </Button>
          </div>
        </div>
      </header>
      {mobile && (
        <div className="mobile-overlay">
          <Button
            variant="ghost"
            className="close"
            aria-label="Menü schließen"
            onClick={() => setMobile(false)}
          >
            ×
          </Button>
          <img className="brand-img" src={logo} alt="TadaaBiss" />
          {links.map(([href, text]) => (
            <a key={href} href={href} onClick={() => setMobile(false)}>
              {text}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
function BagIcon() {
  return (
    <svg
      width="20"
      height="22"
      viewBox="0 0 20 22"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M2 7h16l-1 13H3L2 7Z" />
      <path d="M6 9V5a4 4 0 0 1 8 0v4" />
    </svg>
  );
}
export function Fulfillment({ state }: { state: RestaurantState }) {
  return (
    <div className="fulfillment" role="group" aria-label="Bestellart">
      {(["pickup", "delivery", "dinein"] as const).map((mode) => (
        <Button
          key={mode}
          variant="ghost"
          className={state.fulfillment === mode ? "selected" : ""}
          onClick={() => state.setFulfillment(mode)}
        >
          {state.t[mode]}
        </Button>
      ))}
    </div>
  );
}
export function BottomSheet({
  title,
  onClose,
  children,
  footer,
  className,
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}) {
  const [height, setHeight] = useState<"compact" | "normal" | "expanded">("normal");
  const start = useRef(0);
  const closeRef = useRef<HTMLButtonElement>(null);
  const prior = useRef<HTMLElement | null>(null);
  useEffect(() => {
    prior.current = document.activeElement as HTMLElement;
    closeRef.current?.focus();
    const priorOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", key);
    return () => {
      document.body.style.overflow = priorOverflow;
      window.removeEventListener("keydown", key);
      prior.current?.focus();
    };
  }, [onClose]);
  return (
    <>
      <div className="sheet-backdrop" onClick={onClose} />
      <div
        className={`sheet ${height === "normal" ? "" : height} ${className ?? ""}`}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <div
          className="sheet-handle-row"
          onTouchStart={(e) => (start.current = e.touches[0]?.clientY ?? 0)}
          onTouchEnd={(e) => {
            const delta = (e.changedTouches[0]?.clientY ?? 0) - start.current;
            if (delta > 110) {
              if (height === "expanded") setHeight("normal");
              else if (height === "normal") setHeight("compact");
              else onClose();
            } else if (delta < -90) setHeight("expanded");
          }}
        >
          <Button
            variant="ghost"
            className="sheet-grip"
            aria-label="Fenster vergrößern"
            onClick={() => setHeight(height === "expanded" ? "normal" : "expanded")}
          />
          <Button
            ref={closeRef}
            variant="ghost"
            className="sheet-close"
            onClick={onClose}
            aria-label="Schließen"
          >
            ×
          </Button>
        </div>
        <div className="sheet-content">{children}</div>
        {footer && <div className="sheet-foot">{footer}</div>}
      </div>
    </>
  );
}
export function ProductSheet({
  product,
  state,
  onClose,
}: {
  product: Product;
  state: RestaurantState;
  onClose: () => void;
}) {
  const [quantity, setQuantity] = useState(1),
    [sauce, setSauce] = useState("Ohne Soße"),
    [extra, setExtra] = useState("Keine Extras"),
    [heat, setHeat] = useState("Normal"),
    [note, setNote] = useState(""),
    [added, setAdded] = useState(false);
  const price = (product.price ?? 0) + (extra === "Extra Käse" ? 150 : 0);
  const english = state.lang === "en";
  const selectExtra = (value: string) => setExtra(value);
  return (
    <BottomSheet
      title={product.name}
      onClose={onClose}
      className="product-sheet"
      footer={
        product.price !== null ? (
          <div className="product-sheet-footer">
            <div className="product-sheet-quantity">
              <Button
                variant="outline"
                aria-label="Weniger"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus size={16} />
              </Button>
              <span>{quantity}</span>
              <Button
                variant="outline"
                aria-label="Mehr"
                onClick={() => setQuantity(Math.min(30, quantity + 1))}
              >
                <Plus size={16} />
              </Button>
            </div>
            <Button
              className="product-sheet-add"
              onClick={() => {
                state.add({
                  key: `${product.id}|${sauce}|${extra}|${heat}|${note}`,
                  productId: product.id,
                  quantity,
                  sauce,
                  extra,
                  heat,
                  note,
                });
                setAdded(true);
              }}
            >
              {added ? <Check size={18} /> : <Plus size={18} />}
              <span>
                {added
                  ? english
                    ? "Added to basket"
                    : "Im Warenkorb"
                  : `${english ? "Add to basket" : "In den Warenkorb"} · ${money(price * quantity)}`}
              </span>
            </Button>
          </div>
        ) : undefined
      }
    >
      <div className="product-sheet-hero">
        <img src={imageFor(product)} alt={`${product.name} – Beispielbild`} />
        <div className="product-sheet-image-shade" />
        <span className="product-sheet-fresh">
          <Sparkles size={14} />
          {english ? "Freshly made" : "Frisch zubereitet"}
        </span>
        <span className="product-sheet-number">
          {product.number ? `Nº ${product.number}` : product.group}
        </span>
        <div className="product-sheet-image-caption">
          <span className="eyebrow">{product.group}</span>
          <h2>{product.name}</h2>
          <p>{english ? "Illustrative image" : "Beispielbild"}</p>
        </div>
      </div>
      <div className="product-sheet-details">
        <div className="product-sheet-summary">
          <div>
            <span className="eyebrow">
              {english ? "THE TADAABISS FAVORITE" : "DEIN TADAABISS MOMENT"}
            </span>
            <p>{product.description || state.t.heroNote}</p>
          </div>
          <strong>
            {product.price === null
              ? english
                ? "Ask for price"
                : "Preis auf Anfrage"
              : money(price)}
          </strong>
        </div>
        <div className="product-sheet-tags">
          {product.vegetarian && <span>{english ? "Vegetarian" : "Vegetarisch"}</span>}
          {product.spicy && <span className="is-spicy">♨ {english ? "Spicy" : "Scharf"}</span>}
          {product.allergens?.map((a) => (
            <span key={a}>{a}</span>
          ))}
        </div>
        {product.price !== null ? (
          <div className="product-sheet-options">
            <label>
              <span>{state.t.sauce}</span>
              <select
                value={sauce}
                onChange={(e) => {
                  setSauce(e.target.value);
                  setAdded(false);
                }}
              >
                {["Ohne Soße", "Knoblauch", "Kräuter", "Scharf"].map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </label>
            <label>
              <span>{state.t.extras}</span>
              <select
                value={extra}
                onChange={(e) => {
                  selectExtra(e.target.value);
                  setAdded(false);
                }}
              >
                <option value="Keine Extras">Keine Extras</option>
                <option value="Extra Käse">Extra Käse (+1,50 €)</option>
              </select>
            </label>
            <label>
              <span>{state.t.heat}</span>
              <select
                value={heat}
                onChange={(e) => {
                  setHeat(e.target.value);
                  setAdded(false);
                }}
              >
                {["Mild", "Normal", "Scharf"].map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </label>
            <label className="product-sheet-note">
              <span>{state.t.notes}</span>
              <textarea
                maxLength={250}
                rows={2}
                value={note}
                onChange={(e) => {
                  setNote(e.target.value);
                  setAdded(false);
                }}
                placeholder="z. B. ohne Zwiebeln"
              />
            </label>
          </div>
        ) : (
          <a className="product-sheet-call" href="tel:+4917660850594">
            {english ? "Call for current price" : "Preis telefonisch erfragen"}
          </a>
        )}
        <p className="product-sheet-footnote">
          {english
            ? "Your order is a request and must be confirmed by the restaurant."
            : "Deine Bestellung ist eine Anfrage und muss vom Restaurant bestätigt werden."}
        </p>
      </div>
    </BottomSheet>
  );
}
export function CartSheet({ state, onClose }: { state: RestaurantState; onClose: () => void }) {
  const navigate = useNavigate();
  const [postcode, setPostcode] = useState("");
  const invalid = state.fulfillment === "delivery" && !DELIVERY_POSTCODES.includes(postcode);
  return (
    <BottomSheet
      title={state.t.cart}
      onClose={onClose}
      footer={
        state.cart.length > 0 ? (
          <Button
            className="cta"
            disabled={invalid}
            onClick={() => {
              onClose();
              navigate({ to: "/checkout" });
            }}
          >
            {state.t.checkout} · {money(state.totals.total)} <ArrowRight size={18} />
          </Button>
        ) : undefined
      }
    >
      <div className="cart-restaurant">
        <h2>{state.lang === "de" ? "Dein Warenkorb" : "Your basket"}</h2>
        <small>TadaaBiss · Marktplatz 12, Münsingen</small>
      </div>
      <Fulfillment state={state} />
      {state.fulfillment === "delivery" && (
        <div className="sheet-options">
          <div>
            <label htmlFor="cart-postcode">Liefer-PLZ prüfen</label>
            <input
              id="cart-postcode"
              inputMode="numeric"
              maxLength={5}
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
              placeholder="72525"
            />
            <p style={{ fontSize: 12 }}>
              Liefergebiet derzeit: 72525 Münsingen. Bitte vor Bestellung prüfen.
            </p>
          </div>
        </div>
      )}
      {state.cart.length === 0 ? (
        <div className="cart-empty">
          <span className="display">TADAA?</span>
          <p>{state.t.empty}</p>
          <Button className="cta" onClick={onClose}>
            {state.t.menu}
          </Button>
        </div>
      ) : (
        <>
          {state.cart.map((item) => {
            const product = menu.find((p) => p.id === item.productId);
            if (!product) return null;
            return (
              <div className="cart-line" key={item.key}>
                <img
                  className="cart-item-photo"
                  src={imageFor(product)}
                  alt={product.name}
                  width="72"
                  height="72"
                />
                <div>
                  <h3>{product.name}</h3>
                  <small>
                    {[item.sauce, item.extra !== "Keine Extras" ? item.extra : "", item.note]
                      .filter(Boolean)
                      .join(" · ")}
                  </small>
                  <div className="quantity">
                    <Button
                      variant="outline"
                      aria-label="Anzahl verringern"
                      onClick={() => state.update(item.key, -1)}
                    >
                      <Minus size={14} />
                    </Button>
                    {item.quantity}
                    <Button
                      variant="outline"
                      aria-label="Anzahl erhöhen"
                      onClick={() => state.update(item.key, 1)}
                    >
                      <Plus size={14} />
                    </Button>
                    <Button
                      variant="ghost"
                      className="remove-item"
                      aria-label={`${product.name} entfernen`}
                      onClick={() =>
                        state.setCart((previous) => previous.filter((i) => i.key !== item.key))
                      }
                    >
                      <Trash2 size={14} />
                    </Button>
                  </div>
                </div>
                <strong>
                  {money(
                    ((product.price ?? 0) + (item.extra === "Extra Käse" ? 150 : 0)) *
                      item.quantity,
                  )}
                </strong>
              </div>
            );
          })}
          <Button variant="outline" className="cart-add-more" onClick={onClose}>
            <Plus size={18} />
            {state.lang === "de" ? "Weitere Gerichte hinzufügen" : "Add more items"}
          </Button>
          <h3 className="cart-subheading">
            {state.lang === "de" ? "Deine Übersicht" : "Order summary"}
          </h3>
          <div className="summary-line">
            <span>{state.t.subtotal}</span>
            <span>{money(state.totals.subtotal)}</span>
          </div>
          <div className="summary-line">
            <span>{state.t.discount} (automatisch)</span>
            <span>−{money(state.totals.onlineDiscount)}</span>
          </div>
          {state.totals.comboDiscount > 0 && (
            <div className="summary-line">
              <span>Tadaa-Menü-Rabatt</span>
              <span>−{money(state.totals.comboDiscount)}</span>
            </div>
          )}
          {state.fulfillment === "delivery" && (
            <div className="summary-line">
              <span>Liefergebühr (vorläufig)</span>
              <span>{money(state.totals.fee)}</span>
            </div>
          )}
          <div className="summary-line total">
            <span>{state.t.total}</span>
            <span className="text-glow">{money(state.totals.total)}</span>
          </div>
          <p style={{ fontSize: 11 }}>
            Die Bestellung wird im Restaurant entgegengenommen. Bitte bestätige Details und
            Verfügbarkeit telefonisch.
          </p>
        </>
      )}
    </BottomSheet>
  );
}
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-wrap">
        <div className="footer-grid">
          <div>
            <img src={logo} alt="TadaaBiss" />
            <p>
              Marktplatz 12
              <br />
              72525 Münsingen
            </p>
            <a href="tel:+4917660850594">0176 60850594</a>
          </div>
          <div>
            <strong>Kontakt</strong>
            <p>
              <a href="tel:+4915219529649">01521 9529649</a>
              <br />
              Öffnungszeiten bitte telefonisch erfragen.
            </p>
          </div>
          <div className="footer-links">
            <Link to="/impressum">Impressum</Link>
            <Link to="/datenschutz">Datenschutz</Link>
            <Link to="/agb">AGB</Link>
            <Link to="/allergene">Allergenhinweise</Link>
          </div>
        </div>
        <div className="allergen-box">
          <strong>ALLERGENE A–N</strong> · A Gluten · B Krebstiere · C Eier · D Fisch · E Erdnüsse ·
          F Soja · G Milch · H Schalenfrüchte · I Sellerie · J Senf · K Sesam · L
          Schwefeldioxid/Sulfite · M Lupinen · N Weichtiere. Angaben einzelner Gerichte vor
          Bestellung bitte im Restaurant erfragen.
        </div>
      </div>
      <div className="footer-giant" aria-hidden="true">
        TADAA!
      </div>
    </footer>
  );
}
