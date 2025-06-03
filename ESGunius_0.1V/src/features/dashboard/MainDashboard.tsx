import React from 'react';

export default function MainDashboard() {
  return (
    <div style={{margin:'2rem auto',maxWidth:600,padding:'2rem',background:'#222',borderRadius:16}}>
      <h2>실시간 발전량/탄소/ESG 예측차트 (Demo)</h2>
      <p>실시간 데이터·AI예측·알림·보고서까지 SaaS 시각화(샘플)</p>
      <div style={{height:200, background:'#333',margin:'1rem 0',borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center'}}>LIVE GRAPH</div>
      <div style={{display:'flex',gap:16}}>
        <div style={{flex:1,background:'#111',padding:12,borderRadius:12}}>발전량: 125.2MWh</div>
        <div style={{flex:1,background:'#133',padding:12,borderRadius:12}}>탄소: 12.1tCO₂</div>
        <div style={{flex:1,background:'#131',padding:12,borderRadius:12}}>ESG: A등급</div>
      </div>
      <button style={{marginTop:24,padding:'8px 24px',borderRadius:8,background:'#0cf',color:'#fff',border:0}}>PDF 보고서 다운로드</button>
    </div>
  );
}
