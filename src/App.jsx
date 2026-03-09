import { useState } from "react";

const Tag = ({ type }) => {
  const styles = {
    FACT: { bg: "#dcfce7", text: "#166534", border: "#86efac" },
    INFERENCE: { bg: "#fef3c7", text: "#92400e", border: "#fcd34d" },
    "CLASS LENS": { bg: "#dbeafe", text: "#1e40af", border: "#93c5fd" },
  };
  const s = styles[type];
  return (
    <span style={{ background: s.bg, color: s.text, border: `1px solid ${s.border}`, borderRadius: 4, padding: "2px 8px", fontSize: 11, fontWeight: 700, letterSpacing: 0.5, marginRight: 6 }}>
      {type}
    </span>
  );
};

const Section = ({ title, titleZh, children, defaultOpen = false, accent = "#1e40af" }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ marginBottom: 12, border: "1px solid #e5e7eb", borderRadius: 10, overflow: "hidden", background: "#fff" }}>
      <button onClick={() => setOpen(!open)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 18px", background: open ? accent : "#f9fafb", color: open ? "#fff" : "#111827", border: "none", cursor: "pointer", fontSize: 15, fontWeight: 700, textAlign: "left", transition: "all 0.2s" }}>
        <div>
          <span>{title}</span>
          {titleZh && <span style={{ fontWeight: 400, marginLeft: 10, opacity: 0.85, fontSize: 13 }}>{titleZh}</span>}
        </div>
        <span style={{ fontSize: 18, transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "rotate(0)" }}>▼</span>
      </button>
      {open && <div style={{ padding: "16px 20px", lineHeight: 1.75, fontSize: 14 }}>{children}</div>}
    </div>
  );
};

const KV = ({ label, children }) => (
  <div style={{ display: "flex", gap: 8, marginBottom: 6 }}>
    <span style={{ fontWeight: 700, minWidth: 140, color: "#374151", flexShrink: 0, fontSize: 13 }}>{label}</span>
    <span style={{ color: "#1f2937", fontSize: 13 }}>{children}</span>
  </div>
);

const Callout = ({ type = "key", children }) => {
  const s = type === "key" ? { bg: "#eff6ff", border: "#3b82f6", icon: "💡" } : type === "warn" ? { bg: "#fef2f2", border: "#ef4444", icon: "⚠️" } : { bg: "#f0fdf4", border: "#22c55e", icon: "✅" };
  return (
    <div style={{ background: s.bg, borderLeft: `4px solid ${s.border}`, padding: "12px 16px", borderRadius: 6, margin: "12px 0", fontSize: 13, lineHeight: 1.7 }}>
      <span style={{ marginRight: 6 }}>{s.icon}</span>{children}
    </div>
  );
};

const ProjectCard = ({ num, name, nameZh, role, roleColor, children }) => (
  <div style={{ border: "1px solid #e5e7eb", borderRadius: 10, padding: "16px 20px", marginBottom: 14, background: "#fafafa" }}>
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
      <span style={{ background: "#1e40af", color: "#fff", borderRadius: "50%", width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 13, flexShrink: 0 }}>{num}</span>
      <div>
        <span style={{ fontWeight: 700, fontSize: 15 }}>{name}</span>
        <span style={{ color: "#6b7280", fontSize: 12, marginLeft: 8 }}>{nameZh}</span>
      </div>
      <span style={{ marginLeft: "auto", background: roleColor, color: "#fff", padding: "3px 10px", borderRadius: 20, fontSize: 11, fontWeight: 700, whiteSpace: "nowrap" }}>{role}</span>
    </div>
    {children}
  </div>
);

const QA = ({ q, children }) => (
  <div style={{ marginBottom: 16 }}>
    <div style={{ fontWeight: 700, color: "#1e40af", fontSize: 14, marginBottom: 4 }}>{q}</div>
    <div style={{ fontSize: 13, color: "#374151", lineHeight: 1.7, paddingLeft: 12, borderLeft: "3px solid #dbeafe" }}>{children}</div>
  </div>
);

export default function App() {
  const [lang, setLang] = useState("both");

  const T = (en, zh) => {
    if (lang === "en") return en;
    if (lang === "zh") return zh;
    return <>{en}<br/><span style={{ color: "#6b7280", fontSize: 12 }}>{zh}</span></>;
  };

  return (
    <div style={{ maxWidth: 780, margin: "0 auto", padding: "20px 16px", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", color: "#111827" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 24, padding: "24px 20px", background: "linear-gradient(135deg, #1e3a5f 0%, #1e40af 100%)", borderRadius: 14, color: "#fff" }}>
        <div style={{ fontSize: 11, letterSpacing: 2, opacity: 0.7, marginBottom: 6 }}>MODULE IV · PREDICTION FACTORY · AI · AUTOMATION OF JUDGMENT</div>
        <h1 style={{ margin: "0 0 6px", fontSize: 22, fontWeight: 800 }}>Coursera's Foray into GenAI</h1>
        <div style={{ fontSize: 13, opacity: 0.85 }}>HBS Case 9-124-089 · Final Pre-Class Review</div>
      </div>

      {/* Language toggle */}
      <div style={{ display: "flex", justifyContent: "center", gap: 6, marginBottom: 20 }}>
        {["both", "en", "zh"].map(l => (
          <button key={l} onClick={() => setLang(l)} style={{ padding: "5px 16px", borderRadius: 20, border: lang === l ? "2px solid #1e40af" : "1px solid #d1d5db", background: lang === l ? "#eff6ff" : "#fff", color: lang === l ? "#1e40af" : "#6b7280", fontWeight: lang === l ? 700 : 400, fontSize: 12, cursor: "pointer" }}>
            {l === "both" ? "EN/繁中" : l === "en" ? "English" : "繁體中文"}
          </button>
        ))}
      </div>

      {/* Legend */}
      <div style={{ display: "flex", gap: 12, justifyContent: "center", marginBottom: 20, flexWrap: "wrap" }}>
        <Tag type="FACT" /><span style={{ fontSize: 11, color: "#6b7280" }}>{T("Case verbatim", "案例原文")}</span>
        <Tag type="INFERENCE" /><span style={{ fontSize: 11, color: "#6b7280" }}>{T("Supported inference", "有據推論")}</span>
        <Tag type="CLASS LENS" /><span style={{ fontSize: 11, color: "#6b7280" }}>{T("Course framework", "課堂框架")}</span>
      </div>

      {/* Core Thesis */}
      <div style={{ background: "#fefce8", border: "2px solid #eab308", borderRadius: 12, padding: "18px 22px", marginBottom: 20, textAlign: "center" }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#92400e", letterSpacing: 1, marginBottom: 8 }}>{T("CORE THESIS", "核心命題")}</div>
        <div style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.7 }}>
          {T(
            "Can Coursera turn external GenAI from a general-purpose technology into a Coursera-specific operating capability that improves value creation on multiple sides while preserving trust, brand, and differentiation?",
            "Coursera 能不能把外部生成式 AI 從通用技術，轉化成屬於自己的 operating capability，在平台多個 side 上提升 value creation，同時守住信任、品牌與經濟差異化？"
          )}
        </div>
      </div>

      {/* Main Sections */}
      <Section title="1. Company & Platform" titleZh="公司與平台" defaultOpen={true} accent="#1e40af">
        <Tag type="FACT" />
        <div style={{ marginTop: 10 }}>
          <KV label="Founded">{T("2012, by Stanford CS professors Andrew Ng & Daphne Koller", "2012年，史丹佛電腦科學教授 Andrew Ng 與 Daphne Koller")}</KV>
          <KV label="Mission">{T("Universal access to world-class learning", "讓所有人取得世界級學習資源")}</KV>
          <KV label="IPO">{T("NYSE, March 31, 2021 · ~$520M raised · $33/share · ~$4.3B valuation", "2021年3月31日NYSE · 募資約5.2億 · $33/股 · 估值約43億")}</KV>
          <KV label="Scale (2024)">{T("325+ partners · ~7,000 courses · 142M learners · 190 countries · 1,300+ enterprise customers", "325+合作夥伴 · ~7,000門課 · 1.42億學習者 · 190國 · 1,300+企業客戶")}</KV>
          <KV label="2023 Revenue">{T("$635.8M — Consumer 57% · Enterprise 35% · Degree 8%", "6.358億美元 — 消費者57% · 企業35% · 學位8%")}</KV>
          <KV label="Content Stack">{T("200K+ clips · 3,500+ projects · 5,800+ courses · 750+ specializations · 130+ certificates · 50+ degrees · 500K+ assessments", "20萬+片段 · 3,500+專案 · 5,800+課程 · 750+專項 · 130+證書 · 50+學位 · 50萬+評量")}</KV>
        </div>
        <Callout type="key">
          {T(
            "Multi-sided platform: Learners (B2C) + Enterprise buyers (B2B) + Content partners (universities, tech firms). GenAI affects each side differently.",
            "多邊平台：學習者(B2C) + 企業買家(B2B) + 內容合作夥伴。GenAI 對每個 side 的影響不同。"
          )}
        </Callout>
      </Section>

      <Section title="2. Market Context" titleZh="市場背景" accent="#059669">
        <Tag type="FACT" />
        <div style={{ marginTop: 10 }}>
          <KV label="Post-secondary market">$2.3 trillion</KV>
          <KV label="EdTech CAGR">17%+, 2023–2026</KV>
          <KV label="TAM (Exhibit 3)">{T("$183B (2023) → $309B (2026)", "$1,830億(2023) → $3,090億(2026)")}</KV>
          <KV label="Fastest segment">{T("Corporate e-learning: 35% CAGR ($91B → $145B)", "企業電子學習：35% CAGR（$910億→$1,450億）")}</KV>
          <KV label="US higher ed">{T("Enrollment declines, cost inflation, weak employability outside elite schools", "招生下降、成本通膨、頂尖學校以外就業力弱")}</KV>
          <KV label="Emerging markets">{T("Population growth + skills mismatch + underdeveloped infrastructure → digital opportunity", "人口成長+技能錯配+基礎設施不足→數位教育機會")}</KV>
        </div>
      </Section>

      <Section title="3. CEO & The GenAI Moment" titleZh="CEO 與 GenAI 時刻" accent="#7c3aed">
        <Tag type="FACT" />
        <div style={{ marginTop: 10 }}>
          <KV label="CEO">{T("Jeff Maggioncalda (June 2017–). Stanford BA + MBA. Co-founded Financial Engines.", "Jeff Maggioncalda（2017年6月就任）。史丹佛學士+MBA。共同創辦Financial Engines。")}</KV>
          <KV label="GenAI trigger">{T("Dec 2, 2022: Top engineer emailed about ChatGPT. Maggioncalda tried it immediately, sent to exec team same day.", "2022年12月2日：頂尖工程師來信介紹ChatGPT。Maggioncalda當天試用並轉發高階主管團隊。")}</KV>
          <KV label="Personal practice">{T("Daily use of ChatGPT, Bing Chat, Edge, Bard to assess capabilities firsthand", "每日使用ChatGPT、Bing Chat、Edge、Bard親自評估能力")}</KV>
        </div>
        <Callout type="warn">
          <strong>{T("The GenAI Conundrum:", "GenAI困境：")}</strong><br/>
          {T(
            "Move too fast → ethical/data/regulatory pitfalls, hallucinations, partner distrust. Move too slow → fall behind agile competitors. This is the central tension.",
            "太快→倫理/數據/監管陷阱、幻覺、夥伴不信任。太慢→被敏捷競爭者超越。這是核心張力。"
          )}
        </Callout>
      </Section>

      <Section title="4. Project Genesis" titleZh="Genesis計畫" accent="#dc2626">
        <Tag type="FACT" />
        <div style={{ marginTop: 10 }}>
          <KV label="Launched">{T("December 2022. Cross-functional team: product, engineering, tech, strategy, HR.", "2022年12月。跨部門團隊：產品、工程、技術、策略、HR。")}</KV>
          <KV label="Deadline">{T("Demo prototypes ready by April 12, 2023 global conference", "2023年4月12日全球會議前完成demo原型")}</KV>
          <KV label="Name origin">{T("'Genesis' suggested by ChatGPT itself — 'the beginning of something new'", "「Genesis」名稱由ChatGPT建議——代表「新事物的開端」")}</KV>
        </div>

        <div style={{ background: "#f9fafb", borderRadius: 8, padding: 14, margin: "14px 0" }}>
          <div style={{ fontWeight: 700, marginBottom: 8, fontSize: 13 }}>{T("Exhibit 6: Three Strategic Questions", "Exhibit 6：三大策略問題")}</div>
          <div style={{ fontSize: 13 }}>
            1. {T("What pressing customer problems across consumer, enterprise, degree?", "消費者/企業/學位三區塊各有哪些迫切客戶問題？")}<br/>
            2. {T("How would GenAI change products/solutions Coursera should offer?", "GenAI如何改變Coursera應提供的產品/方案？")}<br/>
            3. {T("How to stay ahead of and differentiate from competition?", "如何保持領先並與競爭者區隔？")}
          </div>
        </div>

        <div style={{ background: "#f9fafb", borderRadius: 8, padding: 14, margin: "14px 0" }}>
          <div style={{ fontWeight: 700, marginBottom: 8, fontSize: 13 }}>{T("Three Selection Criteria", "三大篩選標準")}</div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {["Value 價值", "Cost & Risk 成本與風險", "Ease of Implementation 實施便利性"].map(c => (
              <span key={c} style={{ background: "#dbeafe", padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 600 }}>{c}</span>
            ))}
          </div>
        </div>

        <div style={{ background: "#f9fafb", borderRadius: 8, padding: 14, margin: "14px 0" }}>
          <div style={{ fontWeight: 700, marginBottom: 8, fontSize: 13 }}>{T("Exhibit 6: Customer / Enhancer / Leader", "Exhibit 6：客戶/增強者/領導者")}</div>
          <div style={{ fontSize: 13 }}>
            {T(
              "Each opportunity required Coursera to clarify its role: (a) customer of external AI, (b) enhancer layering on top of AI using own content/data, or (c) leader in specific AI space via buy-or-build.",
              "每個機會要求Coursera釐清角色：(a)外部AI的客戶、(b)利用自身內容/數據疊加在AI之上的增強者、(c)透過買進或自建成為特定AI領域的領導者。"
            )}
          </div>
        </div>

        <div style={{ fontWeight: 700, marginBottom: 6, marginTop: 14, fontSize: 13 }}>{T("Core Principles", "核心實施原則")}</div>
        <div style={{ fontSize: 13 }}>
          • {T("Value generation first, sustainable differentiation later", "先創造價值，再談可持續差異化")}<br/>
          • {T("Multi-model with technological optionality (not locked to one provider)", "多模型、技術選擇權（不鎖定單一供應商）")}<br/>
          • {T("Hands-on internal practice — employees must use tools daily", "親身實踐——員工必須每日使用工具")}
        </div>

        <div style={{ fontWeight: 700, marginBottom: 6, marginTop: 14, fontSize: 13 }}>{T("Five GenAI Principles", "五項GenAI原則")}</div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {["Positive Impact", "Safety & Security", "Fairness", "Transparency", "Accountability"].map(p => (
            <span key={p} style={{ background: "#f3f4f6", border: "1px solid #d1d5db", padding: "3px 10px", borderRadius: 6, fontSize: 11, fontWeight: 600 }}>{p}</span>
          ))}
        </div>
      </Section>

      <Section title="5. The Four GenAI Projects" titleZh="四大GenAI專案" accent="#ea580c">
        <ProjectCard num="A" name="AI-Powered Translation" nameZh="AI翻譯" role="CLEAREST EARLY WIN" roleColor="#16a34a">
          <Tag type="FACT" />
          <div style={{ fontSize: 13, marginTop: 8 }}>
            <KV label="Goal">{T("Translate thousands of courses cheaply at scale for enterprise and international learners", "以低成本大規模翻譯數千門課程")}</KV>
            <KV label="Cost reduction"><strong>$10,000 → $20</strong> {T("per course", "每門課")}</KV>
            <KV label="Scale (early 2024)">{T("4,400 highest-grossing courses in 21 languages", "4,400門高營收課程翻成21種語言")}</KV>
            <KV label="Key detail">{T("3rd-party vendor failed at mass scale → pivoted to in-house solution", "第三方供應商大規模失敗→轉為自建方案")}</KV>
            <KV label="Next steps">{T("Voice cloning, text-in-image translation, AI highlights/summaries/flashcards, smart skip, video generation", "語音克隆、圖片文字翻譯、AI重點/摘要/閃卡、smart skip、影片生成")}</KV>
          </div>
        </ProjectCard>

        <ProjectCard num="B" name="AI-Powered Coach" nameZh="AI教練" role="BIGGEST STRATEGIC BET" roleColor="#1e40af">
          <Tag type="FACT" />
          <div style={{ fontSize: 13, marginTop: 8 }}>
            <KV label="Tech">{T("OpenAI GPT-3 + Retrieval-Augmented Generation (RAG)", "OpenAI GPT-3 + 檢索增強生成（RAG）")}</KV>
            <KV label="Data sources">{T("Learner profile, past assessments, conversations, forum posts, courses taken, pages visited", "學習者檔案、過去評量、對話、論壇貼文、修課紀錄、瀏覽頁面")}</KV>
            <KV label="Key result">{T("~10% more likely to pass quizzes on first try", "首次通過測驗機率提高約10%")}</KV>
            <KV label="Key advantage">{T("Added to ALL existing courses with NO effort from instructors — free for partners, auto-improves with LLM upgrades", "無需教師任何投入即加入全部課程——合作夥伴免費獲得，隨LLM升級自動改進")}</KV>
            <KV label="Branding">{T("Maggioncalda: Coach should become 'the face of Coursera' (cf. Duolingo Owl)", "Maggioncalda：Coach應成為「Coursera的門面」（參照Duolingo貓頭鷹）")}</KV>
            <KV label="Future">{T("Role-play, career counseling, interview prep, academic integrity (multimodal proctoring + thought-process evaluation like PhD oral defense)", "角色扮演、職涯諮詢、面試準備、學術誠信（多模態監考+類博士口試的思維過程評估）")}</KV>
          </div>
        </ProjectCard>

        <ProjectCard num="C" name="AI-Based Course Builder" nameZh="AI課程建構" role="BIGGEST GOVERNANCE RISK" roleColor="#dc2626">
          <Tag type="FACT" />
          <div style={{ fontSize: 13, marginTop: 8 }}>
            <KV label="Function">{T("Auto-generate outlines, objectives, assessments; recommend and blend existing Coursera content into custom courses; future: generate missing content, avatar videos", "自動生成大綱/目標/評量、推薦和混合現有內容成客製課程、未來：生成缺失內容、虛擬講師影片")}</KV>
            <KV label="Validation">{T("Peruvian university (blended master's) + Sanofi (enrollment surges in Trade team)", "秘魯大學（混合碩士）+ Sanofi（貿易團隊報名激增）")}</KV>
          </div>
          <Callout type="warn">
            <strong>{T("IP/Governance Tension:", "智財/治理張力：")}</strong> {T("University logos, instructors, authors shown in every clip — customers cannot edit brand away. Economics likely consumption-based but still being designed. Partners must change behavior (opt-in). Competitor 2U faced allegations of low-quality AI content. The technology problem may be solvable faster than the governance problem.", "每段影片顯示大學標誌/教師/作者——客戶無法移除品牌。經濟模式可能採消費制但仍在設計中。合作夥伴必須改變行為。競爭者2U曾面臨低品質AI內容指控。技術問題可能比治理問題更快解決。")}
          </Callout>
        </ProjectCard>

        <ProjectCard num="D" name="GenAI Academy" nameZh="GenAI學院" role="MONETIZING DEMAND" roleColor="#7c3aed">
          <Tag type="FACT" />
          <div style={{ fontSize: 13, marginTop: 8 }}>
            <KV label="Three tiers">{T("GenAI for Everyone (Q4 2023) · GenAI for Executives (Jan 2024) · GenAI for Teams (planned H1 2024)", "GenAI for Everyone(Q4 2023) · GenAI for Executives(2024年1月) · GenAI for Teams（計劃H1 2024）")}</KV>
            <KV label="Scale">{T("800+ AI courses · ~7M enrollments · Ng's course: 90K learners in 30 days (fastest-growing 2023)", "800+AI課程 · ~700萬註冊 · Ng課程：30天9萬學習者（2023成長最快）")}</KV>
            <KV label="BCG data">{T("Only 6% of firms trained >25% of employees on GenAI; ~50% of employees need AI upskilling within 3 years", "僅6%企業訓練超過25%員工使用GenAI；約50%員工需在3年內進行AI技能升級")}</KV>
          </div>
        </ProjectCard>
      </Section>

      <Section title="6. Competitive Advantage (Exhibit 8)" titleZh="競爭優勢來源" accent="#0891b2">
        <Tag type="FACT" /><span style={{ fontSize: 12, color: "#6b7280", marginLeft: 8 }}>{T("All 9 labels verified verbatim against Exhibit 8, p.20", "全部9項標籤已逐字核對Exhibit 8第20頁")}</span>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginTop: 14 }}>
          {[
            { n: "1", t: "Time to Market", d: "Application / User experience" },
            { n: "2", t: "Reach & Distribution", d: "Active learners, Enterprise orgs, Partner orgs" },
            { n: "3", t: "Integration in Workflow", d: "How we learn / author / work" },
            { n: "4", t: "Industry Expertise", d: "Skills taxonomy, Career/Degree pathways, Pedagogy" },
            { n: "5", t: "Brand", d: "Partner credibility, content, Trust & safety" },
            { n: "6", t: "Network Effects", d: "Institutions mix & match content" },
            { n: "7", t: "Proprietary Data", d: "Learner profile, activity, Content structure" },
            { n: "8", t: "Data Acquisition", d: "Ongoing learner & user activity" },
            { n: "9", t: "Data Validation", d: "Human-in-the-loop system" },
          ].map(s => (
            <div key={s.n} style={{ background: "#f0f9ff", border: "1px solid #bae6fd", borderRadius: 8, padding: "10px 12px" }}>
              <div style={{ fontWeight: 700, fontSize: 13 }}><span style={{ color: "#0284c7" }}>#{s.n}</span> {s.t}</div>
              <div style={{ fontSize: 11, color: "#6b7280", marginTop: 2 }}>{s.d}</div>
            </div>
          ))}
        </div>
        <Callout type="key">
          <Tag type="CLASS LENS" /> {T(
            "GenAI potentially strengthens #1, #3, #4, #7, #8, #9. Threatens #5 (brand/trust). Could commoditize #4 if competitors replicate. The core question: can Coursera combine all nine into a capability flywheel competitors cannot copy?",
            "GenAI可能強化#1、#3、#4、#7、#8、#9。威脅#5（品牌/信任）。若競爭者複製則可能使#4商品化。核心問題：Coursera能否將全部九項結合成競爭者無法複製的能力飛輪？"
          )}
        </Callout>
      </Section>

      <Section title="7. Opportunities & Threats" titleZh="機會與威脅" accent="#16a34a">
        <Tag type="FACT" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 12 }}>
          <div style={{ background: "#f0fdf4", border: "1px solid #86efac", borderRadius: 10, padding: 14 }}>
            <div style={{ fontWeight: 700, color: "#166534", marginBottom: 8 }}>{T("OPPORTUNITIES", "機會")}</div>
            <div style={{ fontSize: 12, lineHeight: 1.8 }}>
              • {T("Personalized learning at scale", "規模化個人化學習")}<br/>
              • {T("Cheaper multilingual expansion", "低成本多語擴張")}<br/>
              • {T("Faster content production", "更快內容生產")}<br/>
              • {T("Better enterprise training", "更好企業訓練")}<br/>
              • {T("Internal productivity gains", "內部生產力提升")}<br/>
              • {T("Morgan Stanley: $200B in new education-sector value by 2025", "摩根士丹利：2025年教育領域2,000億美元新價值")}<br/>
              • {T("Data flywheel: more usage → better AI → better outcomes → more usage", "數據飛輪：更多使用→更好AI→更好成果→更多使用")}
            </div>
          </div>
          <div style={{ background: "#fef2f2", border: "1px solid #fca5a5", borderRadius: 10, padding: 14 }}>
            <div style={{ fontWeight: 700, color: "#991b1b", marginBottom: 8 }}>{T("THREATS", "威脅")}</div>
            <div style={{ fontSize: 12, lineHeight: 1.8 }}>
              • {T("Cheating → credential devaluation", "作弊→證書貶值")}<br/>
              • {T("Content commoditization → pricing pressure", "內容商品化→定價壓力")}<br/>
              • {T("Entry-level job reduction → weaker credential demand", "初階工作減少→證書需求削弱")}<br/>
              • {T("Learner disengagement without human interaction", "缺乏人際互動致學習者脫離")}<br/>
              • {T("Hallucination / bias / inaccurate output", "幻覺/偏見/不準確輸出")}<br/>
              • {T("Partner resistance (IP, trust, control)", "合作夥伴抗拒（IP、信任、控制）")}<br/>
              • {T("Competitive displacement by nimbler players", "被更靈活競爭者替代")}
            </div>
          </div>
        </div>
      </Section>

      <Section title="8. Stakeholders & Internal Tension" titleZh="利害關係人與內部張力" accent="#9333ea">
        <Tag type="FACT" />
        <div style={{ fontSize: 13, marginTop: 10 }}>
          <KV label="Partners">{T("Most critical stakeholder. Feb 2023: first meeting to show prototypes and discuss principles. Sensitive about content, IP, being 'in the dark.'", "最重要利害關係人。2023年2月首次會議展示原型和原則。對內容、IP、被蒙在鼓裡高度敏感。")}</KV>
          <KV label="Internal pushback">{T("Employees asked 'Why chase shiny objects?' CEO held up OKR release, insisted on integrating GenAI. Teams upset — felt overridden. Maggioncalda: 'couldn't miss the most important KPI of the year.'", "員工質疑「為何追逐閃亮新事物」。CEO擱置OKR發布，堅持納入GenAI。團隊不滿，認為被凌駕。Maggioncalda：「不能錯過年度最重要的KPI。」")}</KV>
          <KV label="Knowledge building">{T("Hired specialized GenAI coding firm for engineers. Introduced LLM-based pair-programming tool (Exhibit 9 context).", "聘請專業GenAI編碼公司培訓工程師。引入基於LLM的結對程式設計工具。")}</KV>
        </div>
      </Section>

      <Section title="9. Competitors" titleZh="競爭者" accent="#475569">
        <Tag type="FACT" />
        <div style={{ fontSize: 13, marginTop: 10 }}>
          <KV label="D2C">2U (edX), Udemy</KV>
          <KV label="OPM / Tech">2U, Eruditus, Noodle Partners, upGrad</KV>
          <KV label="Corporate training">Skillsoft, LinkedIn, Pluralsight, Udacity, Udemy</KV>
          <KV label="Free">Khan Academy, Wikipedia Foundation, Google</KV>
          <KV label="Internal">{T("University in-house online degree programs", "大學自建線上學位")}</KV>
        </div>
        <div style={{ fontWeight: 700, marginTop: 12, marginBottom: 6, fontSize: 13 }}>{T("Competitor GenAI Moves", "競爭者GenAI動態")}</div>
        <div style={{ fontSize: 12, lineHeight: 1.8 }}>
          • <strong>May 2023:</strong> {T("2U — ChatGPT plugin + AI learning assistant", "2U — ChatGPT插件 + AI學習助手")}<br/>
          • <strong>Feb 2024:</strong> {T("Udemy — AI learning assistant + skills mapper", "Udemy — AI學習助手 + 技能映射器")}<br/>
          • <strong>Mar 2024:</strong> {T("Accenture acquired Udacity for global skilling", "Accenture收購Udacity用於全球技能升級")}<br/>
          • <strong>Exhibit 11:</strong> {T("40+ ed/edtech startups leveraging GenAI — acquisition targets", "40+ EdTech新創運用GenAI——潛在收購標的")}
        </div>
      </Section>

      <Section title="10. Course Framework Analysis" titleZh="課堂框架分析" accent="#b45309">
        <Tag type="CLASS LENS" />

        <div style={{ fontWeight: 700, marginTop: 10, marginBottom: 6, fontSize: 14 }}>{T("A. Value Curves", "A. 價值曲線")}</div>
        <div style={{ fontSize: 13 }}>
          {T("GenAI raises: personalization, language accessibility, interactivity, content breadth, enterprise customization.", "GenAI提升：個人化、語言可及性、互動性、內容廣度、企業客製化。")}<br/>
          {T("GenAI threatens: credential trust, human touch, content uniqueness, partner exclusivity.", "GenAI威脅：證書信任、人際接觸、內容獨特性、夥伴排他性。")}<br/>
          {T("Key question: Does Coursera's new curve become stronger, or just more like everyone else's?", "關鍵問題：Coursera的新價值曲線會更強，還是只是更像其他人？")}
        </div>

        <div style={{ fontWeight: 700, marginTop: 16, marginBottom: 6, fontSize: 14 }}>{T("B. Network Effects", "B. 網路效應")}</div>
        <div style={{ fontSize: 13 }}>
          {T("Data network effect: More learners → more data → better Coach (RAG) → better outcomes → more learners. Same-side, data-driven positive feedback amplified by GenAI.", "數據網路效應：更多學習者→更多數據→更好Coach(RAG)→更好成果→更多學習者。GenAI放大的同側數據驅動正向回饋。")}<br/>
          {T("Cross-side tension: Better AI tools attract partners, but if AI commoditizes content, partners become less essential.", "跨側張力：更好的AI工具吸引合作夥伴，但若AI使內容商品化，合作夥伴變得不那麼重要。")}
        </div>

        <div style={{ fontWeight: 700, marginTop: 16, marginBottom: 6, fontSize: 14 }}>{T("C. Prediction Factory / Automation of Judgment", "C. 預測工廠/判斷自動化")}</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 8 }}>
          <div style={{ background: "#f0fdf4", borderRadius: 8, padding: 12 }}>
            <div style={{ fontWeight: 700, fontSize: 12, color: "#166534", marginBottom: 6 }}>{T("AUTOMATE / AUGMENT", "自動化/增強")}</div>
            <div style={{ fontSize: 12, lineHeight: 1.8 }}>
              {T("Translation · Content recommendation · Pre-quiz support · Feedback generation · Curriculum assembly · Career guidance · Partial grading · Partial integrity detection", "翻譯·內容推薦·預習支援·回饋生成·課程組裝·職涯指導·部分評分·部分誠信偵測")}
            </div>
          </div>
          <div style={{ background: "#fef2f2", borderRadius: 8, padding: 12 }}>
            <div style={{ fontWeight: 700, fontSize: 12, color: "#991b1b", marginBottom: 6 }}>{T("KEEP HUMAN", "保留人類")}</div>
            <div style={{ fontSize: 12, lineHeight: 1.8 }}>
              {T("Final quality control · Partner relationship management · High-stakes pedagogical judgment · Final academic integrity rulings · Governance & accountability", "最終品質控管·夥伴關係管理·高風險教學判斷·學術誠信最終裁定·治理與問責")}
            </div>
          </div>
        </div>

        <Callout type="key">
          <strong>{T("Best class line:", "最佳課堂金句：")}</strong> {T(
            "\"The real design question is not whether AI can do more. It is which judgments Coursera should automate, which it should augment, and which it must keep under human control.\"",
            "「真正的設計問題不是AI能不能做更多，而是Coursera應該自動化哪些判斷、增強哪些判斷、以及哪些必須保留在人類控制之下。」"
          )}
        </Callout>
      </Section>

      <Section title="11. Cold-Call Q&A" titleZh="課堂提問應答" defaultOpen={true} accent="#be123c">
        <QA q={T("Q1: Will GenAI help or harm Coursera?", "Q1：GenAI會幫助還是傷害Coursera？")}>
          {T("Help if it deepens platform-specific advantages (trusted content, learner data, workflow integration, personalization). Harm if it mainly commoditizes content, enables cheating, weakens credential trust. The answer depends on operating model design, not the technology itself.", "若深化平台特有優勢（可信內容、學習者數據、工作流整合、個人化）則有幫助。若主要只是使內容商品化、助長作弊、削弱證書信任則有害。答案取決於operating model設計，而非技術本身。")}
        </QA>
        <QA q={T("Q2: Which project is most important?", "Q2：哪個專案最重要？")}>
          {T("Translation = clearest early win. Coach = biggest strategic bet (platform interface, broadest data, 'face of Coursera'). Course Builder = most governance-sensitive (IP, partner branding). GenAI Academy = simplest (monetizes demand).", "翻譯=最清楚的早期勝利。Coach=最大策略下注（平台介面、最廣數據、「Coursera的門面」）。Course Builder=治理風險最高（IP、夥伴品牌）。GenAI Academy=最單純（直接將需求變現）。")}
        </QA>
        <QA q={T("Q3: Was Maggioncalda right to override OKR process?", "Q3：Maggioncalda凌駕OKR流程是否正確？")}>
          {T("Probably yes strategically — timing mattered at an inflection point. But organizationally risky. Urgency may justify override in rare moments; repeated bypassing damages trust.", "策略上大概率正確——在轉折點時機很重要。但對組織有風險。緊迫性可能在少數時刻正當化凌駕；反覆繞過流程則會損害信任。")}
        </QA>
        <QA q={T("Q4: Is Coursera building AI or renting it?", "Q4：Coursera是在建構AI還是租用AI？")}>
          {T("Neither exactly. It's an enhancer — layering external LLM capability on its own content, data, workflows, partner ecosystem. Durable advantage depends on proprietary assets, not the AI itself.", "都不完全是。它是增強者——在自身內容、數據、工作流、夥伴生態系之上疊加外部LLM能力。持久優勢取決於專有資產，而非AI本身。")}
        </QA>
        <QA q={T("Q5: Biggest long-term risk?", "Q5：最大長期風險？")}>
          {T("Credential devaluation. If GenAI improves learning but makes cheating easier, Coursera risks improving the experience while undermining the economic value of what it sells.", "證書貶值。若GenAI改善學習但使作弊更容易，Coursera可能改善體驗卻同時削弱其產品的經濟價值。")}
        </QA>
        <QA q={T("Q6: Sharpest tension?", "Q6：最尖銳的張力？")}>
          {T("Technology vs. governance gap. The tech (translation, coaching, assembly) advances faster than the governance (partner IP, branding, behavior change, economic sharing). Directly connects to Boudreau's emphasis on coordination, control, organizational design.", "技術與治理的落差。技術（翻譯、教練、組裝）推進速度快於治理（夥伴IP、品牌、行為改變、經濟分配）。直接呼應Boudreau對協調、控制、組織設計的強調。")}
        </QA>
        <QA q={T("Q7: What should Coursera do next?", "Q7：Coursera下一步該做什麼？")}>
          {T("Double down on Coach as differentiated interface. Use translation as global growth engine. Proceed cautiously on Course Builder — solve governance before scaling. Continue GenAI Academy for revenue. Invest in academic integrity as credential-protection moat. Ensure the combination creates a flywheel competitors using same APIs cannot copy.", "全力投入Coach作為差異化介面。以翻譯作為全球成長引擎。Course Builder謹慎推進——先解決治理再擴展。繼續GenAI Academy獲取營收。投資學術誠信作為證書保護護城河。確保整體組合創造使用相同API的競爭者無法複製的飛輪。")}
        </QA>
      </Section>

      {/* Memory Sheet */}
      <div style={{ background: "linear-gradient(135deg, #1e3a5f, #1e40af)", borderRadius: 14, padding: "22px 24px", color: "#fff", marginTop: 10 }}>
        <div style={{ fontSize: 11, letterSpacing: 2, opacity: 0.7, marginBottom: 8 }}>{T("3-MINUTE MEMORY SHEET", "三分鐘記憶版")}</div>
        <div style={{ fontSize: 13, lineHeight: 2 }}>
          <strong>1.</strong> {T("Platform operating model case, not pure tech case.", "平台operating model案例，不是純技術案例。")}<br/>
          <strong>2.</strong> {T("Central question: Does GenAI strengthen Coursera's specific advantages or just commoditize the market?", "核心問題：GenAI是強化Coursera特有優勢，還是只讓市場更commodity？")}<br/>
          <strong>3.</strong> {T("Translation = early win · Coach = strategic bet · Course Builder = governance risk · Academy = demand monetization", "翻譯=早期勝利 · Coach=策略下注 · Course Builder=治理風險 · Academy=需求變現")}<br/>
          <strong>4.</strong> {T("Upside: personalization, localization, speed, enterprise value, cost reduction, data flywheel.", "上行：個人化、在地化、速度、企業價值、成本降低、數據飛輪。")}<br/>
          <strong>5.</strong> {T("Downside: cheating, credential erosion, partner resistance, commoditization, hallucination.", "下行：作弊、證書侵蝕、夥伴抗拒、商品化、幻覺。")}<br/>
          <strong>6.</strong> {T("Exhibit 8: 9 sources of advantage. Can GenAI amplify the system or does it commoditize parts?", "Exhibit 8：9項優勢來源。GenAI能放大這個系統，還是使部分商品化？")}<br/>
          <strong>7.</strong> {T("Key line: \"Which judgments to automate, augment, or keep under human control?\"", "金句：「哪些判斷該自動化、增強、或保留人類控制？」")}<br/>
          <strong>8.</strong> {T("One sentence: Can Coursera turn external GenAI into a Coursera-specific operating capability while preserving trust, brand, and differentiation?", "一句話：Coursera能否將外部GenAI轉化為自身operating capability，同時守住信任、品牌與差異化？")}
        </div>
      </div>
    </div>
  );
}
