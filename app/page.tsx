import Link from "next/link";
import { getAllSlugs } from "@/lib/getClient";

export const metadata = {
  title: "Link na Bio · Grilo Design",
  description: "Páginas de link na bio personalizadas para negócios locais. Por Grilo Design.",
};

export default function Home() {
  const slugs = getAllSlugs();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;600&family=Reenie+Beanie&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #000; color: #fff; font-family: 'Inter', sans-serif; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        .fade { animation: fadeUp .6s ease both; }
        .fade-2 { animation: fadeUp .6s ease .1s both; }
        .fade-3 { animation: fadeUp .6s ease .2s both; }
        .fade-4 { animation: fadeUp .6s ease .3s both; }
        .card:hover { background: rgba(231,247,132,.06) !important; border-color: rgba(231,247,132,.4) !important; transform: translateY(-2px); }
        .cta:hover { background: #d4f000 !important; transform: translateY(-2px); }
      `}</style>

      <div style={{ minHeight: "100vh", maxWidth: 680, margin: "0 auto", padding: "0 24px 80px" }}>

        {/* nav */}
        <nav className="fade" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "28px 0 0" }}>
          <span style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 16, letterSpacing: ".5px" }}>
            GRILO<span style={{ color: "#E7F784" }}>.</span>
          </span>
          <a href="https://grilodesign.com.br" target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,.45)", textDecoration: "none", letterSpacing: ".5px" }}>
            grilodesign.com.br ↗
          </a>
        </nav>

        {/* hero */}
        <div style={{ paddingTop: 80 }}>
          <p className="fade" style={{ fontFamily: "'Reenie Beanie', cursive", fontSize: 22, color: "#E7F784", letterSpacing: ".5px", marginBottom: 16 }}>
            link na bio
          </p>
          <h1 className="fade-2" style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "clamp(36px, 8vw, 56px)", lineHeight: 1.05, letterSpacing: "-.5px", textTransform: "uppercase" }}>
            PÁGINAS QUE<br />
            <span style={{ color: "#E7F784" }}>CONVERTEM</span><br />
            SEGUIDORES.
          </h1>
          <p className="fade-3" style={{ fontSize: 16, color: "rgba(255,255,255,.55)", marginTop: 24, lineHeight: 1.7, maxWidth: 480 }}>
            Link na bio personalizado para clínicas, estúdios e negócios locais — com design profissional, status em tempo real e direto pro WhatsApp.
          </p>

          <div className="fade-4" style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 36, flexWrap: "wrap" }}>
            <a
              href="https://wa.me/553183281196?text=Olá!%20Quero%20um%20link%20na%20bio%20personalizado."
              target="_blank"
              rel="noopener noreferrer"
              className="cta"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#E7F784", color: "#000", fontFamily: "'Archivo Black', sans-serif", fontSize: 13, letterSpacing: ".5px", padding: "14px 24px", borderRadius: 999, textDecoration: "none", transition: "background .18s ease, transform .18s ease" }}
            >
              QUERO O MEU
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a
              href="https://grilodesign.com.br"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,.45)", textDecoration: "none", letterSpacing: ".3px" }}
            >
              ver portfólio ↗
            </a>
          </div>
        </div>

        {/* divider */}
        <div style={{ height: 1, background: "rgba(255,255,255,.08)", margin: "72px 0 48px" }} />

        {/* clients */}
        <div>
          <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,.3)", letterSpacing: "2px", textTransform: "uppercase", marginBottom: 20 }}>
            Clientes ativos
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {slugs.map((slug) => (
              <Link
                key={slug}
                href={`/${slug}`}
                className="card"
                style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px", borderRadius: 16, background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)", textDecoration: "none", transition: "background .18s ease, border-color .18s ease, transform .18s ease" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(231,247,132,.1)", border: "1px solid rgba(231,247,132,.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#E7F784">
                      <path d="M12 2.2c-2.3 0-3.1 1-4.8 1-1.2 0-2.3-.6-3.3.2C2.4 4.7 2.6 8 3.4 11c.6 2.2.7 3.6 1.1 5.4.4 1.8.7 4.2 1.9 4.4 1.3.2 1.4-2 1.7-3.6.3-1.5.6-2.8 1.9-2.8s1.6 1.3 1.9 2.8c.3 1.6.4 3.8 1.7 3.6 1.2-.2 1.5-2.6 1.9-4.4.4-1.8.5-3.2 1.1-5.4.8-3 1-6.3-.5-7.6-1-.8-2.1-.2-3.3-.2-1.7 0-2.5-1-4.8-1z"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#fff", textTransform: "capitalize" }}>{slug}</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,.35)", marginTop: 2 }}>linkbiio.vercel.app/{slug}</div>
                  </div>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6"/></svg>
              </Link>
            ))}
          </div>
        </div>

        {/* footer */}
        <div style={{ marginTop: 80, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 13, color: "rgba(255,255,255,.2)" }}>
            GRILO<span style={{ color: "#E7F784" }}>.</span>
          </span>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,.2)", letterSpacing: ".3px" }}>
            © {new Date().getFullYear()} Grilo Design · Todos os direitos reservados
          </span>
        </div>

      </div>
    </>
  );
}
