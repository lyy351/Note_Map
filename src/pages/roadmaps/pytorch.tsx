import React, { useState } from 'react';
import Layout from '@theme/Layout';
import { Target } from 'lucide-react';

const beginnerStages = [
  {
    id: 'python-basic',
    title: 'Python 零基础快速入门',
    desc: '从零快速入门 Python 这门语言。',
    importance: 'must',
    status: 'upcoming',
    isLocked: true,
    asset: '/img/python.svg',
    content: { videos: [], docs: [], downloads: [] },
  },
  {
    id: 'pytorch-basic',
    title: 'PyTorch 快速入门教程',
    desc: '入门 PyTorch 深度学习框架。',
    importance: 'must',
    status: 'released',
    isLocked: false,
    asset: '/img/pytorch.svg',
    content: {
      videos: [{ title: '查看视频教程', link: 'https://www.bilibili.com/video/BV1hE411t7RN/' }],
      docs: [{ title: '查看文字教程', link: '#' }],
      downloads: [{ title: '下载课程资料', link: '#' }],
    },
  },
];

const advancedStages = [
  {
    id: 'pytorch-advanced',
    title: 'PyTorch 进阶实战教程',
    desc: '进阶实战，让模型训练更好更快。',
    importance: 'recommended',
    status: 'upcoming',
    isLocked: true,
    asset: 'tower',
    content: { videos: [], docs: [], downloads: [] },
  },
];

const StageCard = ({ stage, isLast }) => {
  const importanceStyles = { must: { label: '入门', accent: '#c41e1e' }, recommended: { label: '进阶', accent: '#1a6bb5' } };
  const imp = importanceStyles[stage.importance];
  const assetUrl = stage.asset?.startsWith('/') ? stage.asset : '/img/game/Tower_Blue.png';
  return (
    <div className={`relative ${isLast ? '' : 'mb-10'}`}>
      <div className="relative bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-800">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-40 p-5 flex justify-center items-center bg-gradient-to-br from-slate-50 to-blue-50/60 dark:from-gray-800 dark:to-gray-900">
            <img src={assetUrl} className="w-16 h-16 object-contain" alt="icon" />
          </div>
          <div className="flex-1 p-6">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold">{stage.title}</h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{stage.desc}</p>
              </div>
              <div className="relative inline-flex items-center px-3 py-1 border-2 border-current rounded-sm text-sm font-black" style={{ color: imp.accent, transform: 'rotate(-3deg)' }}>
                {imp.label}
              </div>
            </div>
            {!stage.isLocked && stage.content.videos.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {stage.content.videos.map((v, i) => (
                  <a key={i} href={v.link} target="_blank" className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">▶ {v.title}</a>
                ))}
              </div>
            )}
            {stage.isLocked && (
              <div className="mt-4 text-gray-400 text-sm flex items-center gap-1"><span>🔒 未制作</span></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function PyTorchRoadmap() {
  const [level, setLevel] = useState('beginner');
  const stages = level === 'beginner' ? beginnerStages : advancedStages;
  return (
    <Layout title="PyTorch学习路线" description="游戏化的学习路线">
      <div className="min-h-screen bg-[#f8f9fa] dark:bg-[#0c1222]">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-4">PyTorch 学习路线</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">从入门到精通的游戏化学习路线图。</p>
          <div className="flex gap-4 mb-8">
            <button onClick={() => setLevel('beginner')} className={`px-6 py-2 rounded-full font-bold ${level === 'beginner' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-800'}`}>入门系列</button>
            <button onClick={() => setLevel('advanced')} className={`px-6 py-2 rounded-full font-bold ${level === 'advanced' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-800'}`}>进阶系列</button>
          </div>
          {stages.map((stage, idx) => (
            <StageCard key={stage.id} stage={stage} isLast={idx === stages.length-1} />
          ))}
        </div>
      </div>
    </Layout>
  );
}