import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GaugeChart } from '@/components/ui/gauge';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { AlertCircle, TrendingUp, Zap, Leaf } from 'lucide-react';

const samplePredict = [
  { time: '09:00', 발전량: 24, 탄소: 19, ESG: 71 },
  { time: '10:00', 발전량: 28, 탄소: 16, ESG: 73 },
  { time: '11:00', 발전량: 32, 탄소: 15, ESG: 75 },
  { time: '12:00', 발전량: 35, 탄소: 13, ESG: 78 },
  { time: '13:00', 발전량: 33, 탄소: 12, ESG: 80 },
];

const alerts = [
  { icon: <AlertCircle className="w-4 h-4 text-red-500" />, message: '태양광 설비1 이상감지', level: '경고' },
  { icon: <Zap className="w-4 h-4 text-yellow-500" />, message: '발전량 단기 예측 하락', level: '주의' },
];

export default function MainDashboard() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#101b28] to-[#26303e] p-6">
      <header className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-white">ESGenius Dashboard</h1>
        <div className="flex gap-4">
          <Card>
            <CardContent className="flex items-center gap-2">
              <TrendingUp className="text-green-400" /> <span>ESG Score</span>
              <span className="font-bold text-lg text-green-200">80</span>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-2">
              <Leaf className="text-blue-300" /> <span>탄소저감량</span>
              <span className="font-bold text-lg text-blue-200">12%</span>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-2">
              <Zap className="text-yellow-300" /> <span>실시간 발전량</span>
              <span className="font-bold text-lg text-yellow-200">33MW</span>
            </CardContent>
          </Card>
        </div>
      </header>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>AI 발전량 예측</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={samplePredict}>
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="발전량" stroke="#facc15" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>AI ESG/탄소 예측</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-6 items-center">
            <GaugeChart value={80} max={100} label="ESG" />
            <GaugeChart value={12} max={30} label="탄소저감량(%)" />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>실시간 이상·경고 알림</CardTitle>
          </CardHeader>
          <CardContent>
            {alerts.map((a, i) => (
              <div key={i} className="flex items-center gap-2 mb-2">
                {a.icon}
                <span className="font-semibold">{a.message}</span>
                <span className={`text-xs px-2 py-1 rounded ${a.level === '경고' ? 'bg-red-200 text-red-600' : 'bg-yellow-200 text-yellow-600'}`}>{a.level}</span>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>AI 권장 시나리오</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-4 text-white/90">
              <li>설비1 점검 및 예비 부품 교체 권장</li>
              <li>탄소배출 저감을 위해 오후 태양광 효율 극대화 운영 추천</li>
              <li>ESG 등급 목표 달성을 위한 투자안 검토 필요</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
