import React, { useState, useEffect } from "react";

function getRandom(min: number, max: number) {
  return Math.round(Math.random() * (max - min) + min);
}

function App() {
  const [power, setPower] = useState(120 + getRandom(-3, 3));
  const [carbon, setCarbon] = useState(15 + getRandom(-1, 1));
  const [esg, setEsg] = useState(85 + getRandom(-3, 3));

  useEffect(() => {
    const timer = setInterval(() => {
      setPower(120 + getRandom(-5, 8));
      setCarbon(15 + getRandom(-2, 2));
      setEsg(85 + getRandom(-5, 5));
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#171e2b", color: "#fff", padding: "3rem" }}>
      <h1 style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: "2.5rem" }}>
        ESGenius 실시간 대시보드 (SaaS 데모)
      </h1>
      <div style={{ display: "flex", gap: "2rem", justifyContent: "center", marginBottom: "2rem" }}>
        <div style={{ background: "#232f44", borderRadius: "1.3rem", padding: "2.5rem 3.5rem", minWidth: "170px" }}>
          <div style={{ fontSize: "1.1rem", opacity: 0.9, marginBottom: 10 }}>발전량</div>
          <div style={{ fontSize: "2.2rem", fontWeight: 700, color: "#44fbe6" }}>{power} MWh</div>
        </div>
        <div style={{ background: "#232f44", borderRadius: "1.3rem", padding: "2.5rem 3.5rem", minWidth: "170px" }}>
          <div style={{ fontSize: "1.1rem", opacity: 0.9, marginBottom: 10 }}>탄소저감량</div>
          <div style={{ fontSize: "2.2rem", fontWeight: 700, color: "#ffad57" }}>{carbon} tCO₂</div>
        </div>
        <div style={{ background: "#232f44", borderRadius: "1.3rem", padding: "2.5rem 3.5rem", minWidth: "170px" }}>
          <div style={{ fontSize: "1.1rem", opacity: 0.9, marginBottom: 10 }}>ESG 점수</div>
          <div style={{ fontSize: "2.2rem", fontWeight: 700, color: "#9da6ff" }}>{esg} / 100</div>
        </div>
      </div>
      <div style={{ textAlign: "center", margin: "3rem 0 2rem" }}>
        <b>실시간 데이터 예시 · 매초 변화 ·<br />SaaS 대시보드로 커스터마이즈 확장 가능</b>
      </div>
      <div style={{ textAlign: "center", margin: "2rem 0" }}>
        <button
          style={{
            fontSize: "1rem",
            padding: "0.75rem 2rem",
            borderRadius: "2rem",
            background: "#445dfb",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 20px #22308855"
          }}
          onClick={() => alert("PDF 보고서 샘플 다운로드! (실제 기능 연동 가능)")} >
          PDF 보고서 다운로드
        </button>
      </div>
    </div>
  );
}

export default App;
