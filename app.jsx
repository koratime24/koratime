/* FRTV components — sport-forward IPTV landing */

const { useState, useEffect, useRef } = React;

// === ICONS ===
const Icon = ({ name, size = 20 }) => {
  const s = size;
  const props = { width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case 'play':return <svg {...props}><polygon points="6 4 20 12 6 20 6 4" fill="currentColor" stroke="none" /></svg>;
    case 'check':return <svg {...props}><polyline points="4 12 10 18 20 6" /></svg>;
    case 'arrow':return <svg {...props}><line x1="5" y1="12" x2="19" y2="12" /><polyline points="13 6 19 12 13 18" /></svg>;
    case 'tv':return <svg {...props}><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="8" y1="22" x2="16" y2="22" /><line x1="12" y1="19" x2="12" y2="22" /></svg>;
    case 'film':return <svg {...props}><rect x="2" y="3" width="20" height="18" rx="2" /><line x1="2" y1="9" x2="22" y2="9" /><line x1="2" y1="15" x2="22" y2="15" /><line x1="8" y1="3" x2="8" y2="21" /><line x1="16" y1="3" x2="16" y2="21" /></svg>;
    case 'series':return <svg {...props}><rect x="3" y="4" width="18" height="14" rx="2" /><polyline points="10 9 15 12 10 15 10 9" fill="currentColor" stroke="none" /></svg>;
    case 'ball':return <svg {...props}><circle cx="12" cy="12" r="9" /><polygon points="12 6 16 9 14.5 14 9.5 14 8 9 12 6" /><line x1="12" y1="3" x2="12" y2="6" /><line x1="20.5" y1="9" x2="16" y2="9" /><line x1="3.5" y1="9" x2="8" y2="9" /><line x1="6" y1="19" x2="9.5" y2="14" /><line x1="18" y1="19" x2="14.5" y2="14" /></svg>;
    case 'kids':return <svg {...props}><circle cx="12" cy="9" r="5" /><path d="M5 21c0-4 3-6 7-6s7 2 7 6" /></svg>;
    case 'doc':return <svg {...props}><rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="12" cy="12" r="3" /></svg>;
    case 'phone':return <svg {...props}><rect x="6" y="2" width="12" height="20" rx="2.5" /><line x1="11" y1="18" x2="13" y2="18" /></svg>;
    case 'tablet':return <svg {...props}><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="11" y1="18" x2="13" y2="18" /></svg>;
    case 'laptop':return <svg {...props}><rect x="3" y="5" width="18" height="11" rx="1" /><line x1="2" y1="20" x2="22" y2="20" /></svg>;
    case 'cast':return <svg {...props}><path d="M3 9V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-9" /><path d="M3 13a6 6 0 0 1 6 6" /><path d="M3 17a2 2 0 0 1 2 2" /></svg>;
    case 'box':return <svg {...props}><path d="M3 7l9-4 9 4M3 7v10l9 4 9-4V7M3 7l9 4 9-4M12 11v10" /></svg>;
    case 'shield':return <svg {...props}><path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" /><polyline points="9 12 11 14 15 10" /></svg>;
    case 'bolt':return <svg {...props}><polygon points="13 2 4 14 11 14 10 22 20 10 13 10 13 2" fill="currentColor" stroke="none" /></svg>;
    case 'support':return <svg {...props}><circle cx="12" cy="12" r="9" /><path d="M9 9a3 3 0 0 1 6 0c0 1.5-1 2-2 2.5s-1 1.5-1 2" /><line x1="12" y1="17" x2="12" y2="17.5" /></svg>;
    case 'globe':return <svg {...props}><circle cx="12" cy="12" r="9" /><line x1="3" y1="12" x2="21" y2="12" /><path d="M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></svg>;
    case 'wa':return <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.2-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.2 0 1.3.9 2.6 1.1 2.7.1.2 1.8 2.7 4.3 3.8.6.3 1.1.4 1.4.5.6.2 1.2.2 1.6.1.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.2-.3-.2-.6-.4zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 4.9L2 22l5.3-1.4c1.4.7 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.5 0-3-.4-4.3-1.1l-.3-.2-3.1.8.8-3-.2-.3C4.3 14.9 4 13.5 4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8z" /></svg>;
    case 'star':return <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15 9 22 9.5 17 14.5 18.5 22 12 18 5.5 22 7 14.5 2 9.5 9 9 12 2" /></svg>;
    case 'plus':return <svg {...props}><line x1="5" y1="12" x2="19" y2="12" /><line x1="12" y1="5" x2="12" y2="19" /></svg>;
    case 'lightning':return <svg {...props}><polygon points="13 2 4 14 11 14 10 22 20 10 13 10 13 2" /></svg>;
    default:return null;
  }
};

// === HEADER ===
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className="nav" style={scrolled ? { boxShadow: '0 8px 30px rgba(0,0,0,0.4)' } : {}}>
      <div className="container nav-inner">
        <div className="brand">
          <div className="brand-mark">F</div>
          <span>FRTV</span>
        </div>
        <div className="nav-links" style={{gap: 20}}>
          <a href="#accueil" className="active">Accueil</a>
          <a href="#tarifs">Tarifs</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="nav-cta">
          <a href="#tarifs" className="btn btn-ghost btn-sm">Connexion</a>
        </div>
      </div>
    </nav>);

}

// === HERO ===
function Hero() {
  return (
    <section id="accueil" className="hero">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow"><span className="pulse"></span>Service IPTV Premium · France</span>
          <h1 className="hero-title" style={{ fontFamily: "-apple-system" }}>
            Le sport, les films et <span className="highlight">les séries en direct</span>, sans limites.
          </h1>
          <p className="hero-sub">
            Plus de 20 000 chaînes live, 80 000 films et séries en HD, FHD et 4K. Compatible avec tous vos appareils — installation en moins de 2 minutes.
          </p>
          <div className="hero-ctas">
            <a href="#tarifs" className="btn btn-primary btn-lg"><Icon name="bolt" size={16} /> Acheter maintenant</a>
            <a href="#tarifs" className="btn btn-ghost btn-lg"><Icon name="play" size={14} /> Voir les abonnements</a>
          </div>
          <div className="hero-trust">
            <span className="stars"><Icon name="star" size={14} /><Icon name="star" size={14} /><Icon name="star" size={14} /><Icon name="star" size={14} /><Icon name="star" size={14} /></span>
            <span><b style={{ color: 'var(--ink)' }}>4,9/5</b> · 12 480 avis vérifiés</span>
          </div>
        </div>
        <DeviceMockup />
      </div>
      <div className="container">
        <div className="stat-strip">
          <div className="stat"><div className="stat-num">+20 000</div><div className="stat-label">Chaînes Live</div></div>
          <div className="stat"><div className="stat-num">+80 000</div><div className="stat-label">Films & Séries</div></div>
          <div className="stat"><div className="stat-num">4K UHD</div><div className="stat-label">Qualité Ultra HD</div></div>
          <div className="stat"><div className="stat-num">24/7</div><div className="stat-label">Support en français</div></div>
        </div>
      </div>
    </section>);

}

function DeviceMockup() {
  // Mini channel grid for TV
  const tvTiles = [
  { label: 'Canal+ Sport', live: true, hue: 200 },
  { label: 'beIN Sports', live: true, hue: 180 },
  { label: 'RMC Sport 1', live: true, hue: 220 },
  { label: 'Eurosport', live: false, hue: 240 },
  { label: 'TF1', live: false, hue: 260 },
  { label: 'M6', live: false, hue: 280 },
  { label: 'Netflix', live: false, hue: 300 },
  { label: 'Prime Video', live: false, hue: 320 }];

  return (
    <div className="devices">
      <div className="devices-glow"></div>
      <div className="tv">
        <div className="ch-grid">
          <div className="topbar">
            <div className="left"><span className="live-dot"></span><span>FRTV · ACCUEIL</span></div>
            <div>20:45</div>
          </div>
          {tvTiles.map((t, i) =>
          <div key={i} className="ch-tile" style={{
            background: `linear-gradient(135deg, hsl(${t.hue} 50% 30%), hsl(${t.hue + 30} 50% 18%))`
          }}>
              {t.live && <span className="ch-tile-badge">LIVE</span>}
              <span className="ch-tile-label">{t.label}</span>
            </div>
          )}
        </div>
      </div>
      <div className="tv-stand"></div>
      <div className="phone">
        <div className="phone-content" style={{
          background: 'linear-gradient(180deg, #0a1330, #0a0e1a)',
          padding: '14px 8px 8px',
          display: 'flex', flexDirection: 'column', gap: 5
        }}>
          <div style={{ fontSize: 7, color: '#5b6890', letterSpacing: '0.1em' }}>EN DIRECT</div>
          <div style={{
            background: 'linear-gradient(135deg, #0a3d0a, #15203f)',
            borderRadius: 4, aspectRatio: '16/10', position: 'relative',
            display: 'grid', placeItems: 'center'
          }}>
            <span style={{ fontSize: 7, color: 'rgba(255,255,255,0.6)' }}>PSG · OM</span>
            <span style={{ position: 'absolute', top: 3, left: 3, fontSize: 5, padding: '1px 3px', background: '#ef4444', borderRadius: 2, color: 'white', fontWeight: 700 }}>LIVE</span>
            <span style={{ position: 'absolute', bottom: 3, right: 3, fontSize: 6, color: 'white', fontWeight: 700 }}>2 - 1</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3 }}>
            {[0, 1, 2, 3].map((i) =>
            <div key={i} style={{
              aspectRatio: '16/10', borderRadius: 3,
              background: `linear-gradient(135deg, hsl(${200 + i * 30} 50% 25%), hsl(${230 + i * 30} 50% 15%))`
            }} />
            )}
          </div>
        </div>
      </div>
      <div className="tablet">
        <div className="tablet-content" style={{
          background: 'linear-gradient(135deg, #0a3d3d, #0a1330)',
          padding: 8, position: 'relative'
        }}>
          {/* Football field */}
          <div style={{
            position: 'absolute', inset: 8,
            background: 'linear-gradient(180deg, #0d4d1a, #094012)',
            borderRadius: 4,
            border: '1px solid rgba(255,255,255,0.15)'
          }}>
            <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 1, background: 'rgba(255,255,255,0.2)' }} />
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 24, height: 24, border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%' }} />
            <div style={{ position: 'absolute', top: '20%', left: '15%', width: 4, height: 4, borderRadius: '50%', background: '#22d3ee', boxShadow: '0 0 6px #22d3ee' }} />
            <div style={{ position: 'absolute', top: '60%', left: '60%', width: 4, height: 4, borderRadius: '50%', background: '#ef4444' }} />
          </div>
          <div style={{ position: 'absolute', top: 12, left: 12, fontSize: 7, color: 'white', fontWeight: 700, display: 'flex', gap: 6 }}>
            <span style={{ padding: '1px 4px', background: '#ef4444', borderRadius: 2 }}>LIVE</span>
            <span>72'</span>
          </div>
          <div style={{ position: 'absolute', top: 12, right: 12, fontSize: 8, color: 'white', fontWeight: 800, fontVariantNumeric: 'tabular-nums' }}>2 - 1</div>
        </div>
      </div>
    </div>);

}

// === CATEGORIES ===
function Categories() {
  const cats = [
  { id: 'sport', name: 'Sport en direct', channels: 'beIN Sports · Canal+ Sport · RMC Sport · Eurosport', icon: 'ball', cls: 'sport' },
  { id: 'films', name: 'Films', channels: 'Netflix · Prime Video · OCS · Disney+', icon: 'film', cls: 'films' },
  { id: 'series', name: 'Séries', channels: 'HBO · Netflix · Apple TV+ · Canal+', icon: 'series', cls: 'series' },
  { id: 'kids', name: 'Kids', channels: 'Disney Junior · Gulli · TF1 Kids · Nickelodeon', icon: 'kids', cls: 'kids' },
  { id: 'docs', name: 'Documentaires', channels: 'NatGeo · Discovery · History · Arte', icon: 'doc', cls: 'docs' }];

  return (
    <section id="chaines" className="container">
      <div className="section-head">
        <span className="eyebrow">Catalogue complet</span>
        <h2>Tout ce que vous aimez, en un seul endroit.</h2>
        <p>Plus de 80 000 contenus organisés par thématique. Recherche instantanée, sous-titres FR, multi-écrans.</p>
      </div>
      <div className="cats">
        {cats.map((c) =>
        <div key={c.id} className={`cat ${c.cls}`}>
            <div className="cat-img"></div>
            <div className="cat-content">
              <div className="cat-icon"><Icon name={c.icon} size={20} /></div>
              <div className="cat-meta">
                <div>
                  <div className="cat-name">{c.name}</div>
                  <div className="cat-count">{c.channels}</div>
                </div>
                <div className="cat-arrow"><Icon name="arrow" size={18} /></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>);

}

// === HOW IT WORKS ===
function HowItWorks() {
  const steps = [
  { n: 1, t: 'Choisissez votre formule', d: 'Sélectionnez l\'abonnement qui vous convient — sans engagement, annulable à tout moment.' },
  { n: 2, t: 'Recevez vos accès', d: 'Identifiants envoyés par email en moins de 60 secondes après votre paiement sécurisé.' },
  { n: 3, t: 'Profitez en illimité', d: 'Installez l\'application sur tous vos appareils et regardez ce que vous voulez, où vous voulez.' }];

  return (
    <section className="container">
      <div className="section-head">
        <span className="eyebrow">3 étapes simples</span>
        <h2>Diffusion en moins de 2 minutes.</h2>
      </div>
      <div className="steps">
        {steps.map((s) =>
        <div key={s.n} className="step">
            <div className="step-num">{s.n}</div>
            <h3>{s.t}</h3>
            <p>{s.d}</p>
          </div>
        )}
      </div>
    </section>);

}

// === PRICING ===
function Pricing() {
  const [plans] = useState([
  {
    name: '1 mois', price: '9,99', monthly: null,
    features: ['+20 000 chaînes Live', '+80 000 films & séries', 'Qualité HD / FHD / 4K', '1 appareil simultané', 'Support 24/7'],
    featured: false, save: null
  },
  {
    name: '3 mois', price: '24,99', monthly: '8,33',
    features: ['+20 000 chaînes Live', '+80 000 films & séries', 'Qualité HD / FHD / 4K', '2 appareils simultanés', 'Support prioritaire 24/7', 'Anti-coupure premium'],
    featured: true, save: '17%'
  },
  {
    name: '12 mois', price: '59,99', monthly: '4,99',
    features: ['+20 000 chaînes Live', '+80 000 films & séries', 'Qualité HD / FHD / 4K', '3 appareils simultanés', 'Support VIP dédié', 'Anti-coupure premium', '7 jours de replay'],
    featured: false, save: '50%'
  }]
  );
  const [selected, setSelected] = useState(1);

  return (
    <section id="tarifs" className="container">
      <div className="section-head">
        <span className="eyebrow">Tarifs transparents</span>
        <h2>Choisissez votre formule.</h2>
        <p>Sans engagement. Paiement sécurisé. Activation immédiate par email.</p>
      </div>
      <div className="pricing">
        {plans.map((p, i) =>
        <div key={i}
        className={`plan ${p.featured ? 'featured' : ''}`}
        onClick={() => setSelected(i)}
        style={selected === i && !p.featured ? { borderColor: 'rgba(34,211,238,0.4)' } : {}}>
            {p.featured && <div className="plan-tag">Meilleure offre</div>}
            <div>
              <div className="plan-name">{p.name}</div>
              {p.save && <div style={{ display: 'inline-block', marginTop: 8, padding: '3px 10px', borderRadius: 999, background: 'rgba(34,197,94,0.12)', color: 'var(--green)', fontSize: 11, fontWeight: 700 }}>Économisez {p.save}</div>}
            </div>
            <div className="plan-price">
              <span className="amount">{p.price} €</span>
            </div>
            <div className="plan-monthly">
              {p.monthly ? <>soit <b>{p.monthly} €</b> / mois</> : 'par mois'}
            </div>
            <ul>
              {p.features.map((f, j) =>
            <li key={j}><Icon name="check" size={16} /> {f}</li>
            )}
            </ul>
            <button className={`btn ${p.featured ? 'btn-primary' : 'btn-ghost'} btn-lg`}>
              Acheter maintenant <Icon name="arrow" size={14} />
            </button>
          </div>
        )}
      </div>
      <div style={{ textAlign: 'center', marginTop: 28, color: 'var(--ink-mute)', fontSize: 13, display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
        <span><Icon name="shield" size={14} /> Paiement 100% sécurisé</span>
        <span><Icon name="bolt" size={14} /> Activation en 60 secondes</span>
        <span><Icon name="support" size={14} /> Support en français 24/7</span>
        <span><Icon name="globe" size={14} /> Garantie satisfait ou remboursé 7 jours</span>
      </div>
    </section>);

}

// === DEVICES ===
function Devices() {
  const devs = [
  { icon: 'tv', name: 'Smart TV', meta: 'Samsung, LG, Sony' },
  { icon: 'phone', name: 'Smartphone', meta: 'iOS & Android' },
  { icon: 'tablet', name: 'Tablette', meta: 'iPad & Android' },
  { icon: 'laptop', name: 'PC / Mac', meta: 'Windows, macOS, Linux' },
  { icon: 'box', name: 'Box & Console', meta: 'Firestick, Apple TV, Xbox' }];

  return (
    <section className="container">
      <div className="section-head">
        <span className="eyebrow">Multi-écrans</span>
        <h2>Compatible avec tous vos appareils.</h2>
      </div>
      <div className="devices-section">
        {devs.map((d, i) =>
        <div key={i} className="dev-card">
            <div className="dev-card-icon"><Icon name={d.icon} size={28} /></div>
            <div className="dev-card-name">{d.name}</div>
            <div className="dev-card-meta">{d.meta}</div>
          </div>
        )}
      </div>
    </section>);

}

// === TESTIMONIALS ===
function Testimonials() {
  const items = [
  { quote: "Image impeccable même en 4K, et toutes les chaînes sport françaises sont là. La Ligue 1 ne coupe jamais, c\u2019est exactement ce que je cherchais.", name: 'Karim B.', loc: 'Marseille', initials: 'KB' },
  { quote: "Installation en 5 minutes sur ma Samsung et mon iPhone. Le support a répondu en français en moins de 10 minutes pour une question sur le replay.", name: 'Sophie L.', loc: 'Lyon', initials: 'SL' },
  { quote: "J'avais essayé 3 services avant FRTV, c\u2019est de loin le plus stable. Aucune coupure pendant le match PSG-Real, parfait.", name: 'Mehdi T.', loc: 'Paris', initials: 'MT' }];

  return (
    <section className="container">
      <div className="section-head">
        <span className="eyebrow">+12 000 abonnés en France</span>
        <h2>Ils ne reviendront pas en arrière.</h2>
      </div>
      <div className="testimonials">
        {items.map((t, i) =>
        <div key={i} className="testi">
            <div className="testi-stars">
              <Icon name="star" size={14} /><Icon name="star" size={14} /><Icon name="star" size={14} /><Icon name="star" size={14} /><Icon name="star" size={14} />
            </div>
            <p className="testi-quote">« {t.quote} »</p>
            <div className="testi-who">
              <div className="testi-avatar">{t.initials}</div>
              <div>
                <div className="testi-name">{t.name}</div>
                <div className="testi-loc">{t.loc}, France</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>);

}

// === FAQ ===
function FAQ() {
  const items = [
  { q: 'Comment fonctionne l\u2019activation après paiement ?', a: 'Dès la confirmation du paiement, vous recevez un email avec vos identifiants et un guide d\u2019installation pas-à-pas pour votre appareil. L\u2019activation est instantanée, généralement en moins de 60 secondes.' },
  { q: 'Sur combien d\u2019appareils puis-je regarder en même temps ?', a: '1 appareil pour la formule mensuelle, 2 pour la formule 3 mois, et jusqu\u2019à 3 appareils simultanés pour la formule annuelle. Vous pouvez installer FRTV sur autant d\u2019appareils que vous voulez.' },
  { q: 'Quels modes de paiement acceptez-vous ?', a: 'Cartes bancaires (Visa, Mastercard, CB), PayPal, Apple Pay, Google Pay et virement. Tous les paiements sont chiffrés et sécurisés via Stripe.' },
  { q: 'Y a-t-il un engagement ?', a: 'Aucun engagement. Vous pouvez annuler à tout moment depuis votre espace client. Une garantie satisfait ou remboursé de 7 jours est offerte sur toutes les formules.' },
  { q: 'La qualité 4K est-elle disponible sur toutes les chaînes ?', a: 'La 4K UHD est disponible sur les contenus marqués "4K" — principalement les grands matchs sportifs, films récents et séries premium. Les autres contenus sont en HD ou FHD selon la source.' },
  { q: 'Puis-je tester avant de m\u2019abonner ?', a: 'Oui — un essai gratuit de 24h est disponible sur demande. Contactez-nous via WhatsApp ou le chat pour recevoir vos accès de test.' }];

  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="container">
      <div className="section-head">
        <span className="eyebrow">Questions fréquentes</span>
        <h2>Tout ce qu&apos;il faut savoir.</h2>
      </div>
      <div className="faq">
        {items.map((it, i) =>
        <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
            <div className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
              <span>{it.q}</span>
              <span className="plus"><Icon name="plus" size={20} /></span>
            </div>
            <div className="faq-a">{it.a}</div>
          </div>
        )}
      </div>
    </section>);

}

// === CTA BANNER ===
function CTABanner() {
  return (
    <section className="container">
      <div className="cta-banner">
        <div>
          <h3>Prêt à regarder sans limites ?</h3>
          <p>Activez votre abonnement en moins de 2 minutes. Sans engagement, annulable à tout moment.</p>
        </div>
        <a href="#tarifs" className="btn btn-primary btn-lg"><Icon name="bolt" size={16} /> Démarrer maintenant</a>
      </div>
    </section>);

}

// === FOOTER ===
function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand">
              <div className="brand-mark">F</div>
              <span>FRTV</span>
            </div>
            <p>Service IPTV premium pour la France. Sport, films et séries en HD, FHD et 4K — sur tous vos appareils.</p>
            <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
              <a href="#" className="btn btn-ghost btn-sm" style={{ padding: 8, width: 36, height: 36 }}><Icon name="wa" size={16} /></a>
              <a href="#" className="btn btn-ghost btn-sm" style={{ padding: 8, width: 36, height: 36 }}><Icon name="globe" size={16} /></a>
            </div>
          </div>
          <div>
            <h4>Service</h4>
            <ul>
              <li><a href="#chaines">Chaînes</a></li>
              <li><a href="#tarifs">Tarifs</a></li>
              <li><a href="tv.html">Smart TV</a></li>
              <li><a href="phone.html">Mobile</a></li>
              <li><a href="box.html">Android Box</a></li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#">Installation</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">WhatsApp</a></li>
            </ul>
          </div>
          <div>
            <h4>Légal</h4>
            <ul>
              <li><a href="#">CGV</a></li>
              <li><a href="#">Confidentialité</a></li>
              <li><a href="#">Mentions légales</a></li>
              <li><a href="#">Remboursement</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 FRTV — Tous droits réservés.</span>
          <div className="legal">
            <span>Paiement sécurisé · SSL 256-bit</span>
            <span>🇫🇷 Service en français</span>
          </div>
        </div>
      </div>
    </footer>);

}


// === WHATSAPP FAB ===
function WhatsAppFab() {
  return (
    <a href="https://wa.me/212778890405" className="wa-fab" title="Contactez-nous sur WhatsApp" target="_blank" rel="noopener noreferrer">
      <Icon name="wa" size={26} />
    </a>);

}

// === TWEAKS ===
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "glow": 1,
  "grain": 0.06
} /*EDITMODE-END*/;

function FRTVTweaks() {
  const [t, setT] = useTweaks(TWEAK_DEFAULTS);
  useEffect(() => {
    document.documentElement.style.setProperty('--glow', t.glow);
    document.documentElement.style.setProperty('--grain', t.grain);
  }, [t]);
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Background intensity">
        <TweakSlider label="Glow" value={t.glow} min={0} max={2} step={0.05} onChange={(v) => setT({ glow: v })} />
        <TweakSlider label="Grain" value={t.grain} min={0} max={0.3} step={0.01} onChange={(v) => setT({ grain: v })} />
      </TweakSection>
    </TweaksPanel>);

}

// === APP ===
function App() {
  return (
    <>
      <div className="bg-shell">
        <div className="bg-grid"></div>
        <div className="bg-grain"></div>
      </div>
      <div className="page">
        <Nav />
        <Hero />
        <Categories />
        <HowItWorks />
        <Pricing />
        <Devices />
        <Testimonials />
        <FAQ />
        <CTABanner />
        <Footer />
      </div>
      <WhatsAppFab />
      <FRTVTweaks />
    </>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);