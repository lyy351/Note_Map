import React, { useState, useMemo } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { Funnel, Menu, Search, X, ArrowRight, Flame, Signal, Scroll, Lock, Map } from 'lucide-react';

const tutorials = [
  {
    id: 'pytorch-quick',
    title: 'PyTorch 快速入门教程',
    description: '快速上手PyTorch深度学习框架',
    category: 'PyTorch',
    difficulty: '入门',
    link: '#',
    cover: '',
  },
  {
    id: 'od-quick',
    title: '目标检测快速入门教程',
    description: '快速上手目标检测，了解基本概念和思路',
    category: '目标检测',
    difficulty: '入门',
    link: '#',
    cover: '',
  },
];

const categoryIcons = {
  PyTorch: Flame,
  '目标检测': Signal,
};

const DifficultyBar = ({ difficulty }) => {
  const colors = { 入门: '#22c55e', 中等: '#3b82f6', 困难: '#ef4444' };
  const level = { 入门: 1, 中等: 2, 困难: 3 }[difficulty];
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-1.5">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" /></svg>
        <span className="text-[10px] font-bold text-gray-400">难度</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex gap-[3px]">
          {[1,2,3].map(lvl => (
            <div key={lvl} className={`w-5 h-1.5 rounded-full transition-all ${lvl <= level ? '' : 'bg-gray-200 dark:bg-gray-700'}`} style={lvl <= level ? { background: colors[difficulty] } : {}} />
          ))}
        </div>
        <span className="text-[10px] font-bold min-w-[2em] text-right" style={{ color: colors[difficulty] }}>{difficulty}</span>
      </div>
    </div>
  );
};

export default function DocsPage() {
  const [category, setCategory] = useState('全部');
  const [searchTerm, setSearchTerm] = useState('');
  const categories = ['全部', ...new Set(tutorials.map(t => t.category))];

  const filtered = useMemo(() => {
    return tutorials.filter(t => {
      const matchCat = category === '全部' || t.category === category;
      const matchSearch = t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          t.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [category, searchTerm]);

  return (
    <Layout title="土堆教程" description="教程列表">
      <div className="min-h-screen bg-[#f8f9fa] dark:bg-[#0c1222] font-sans">
        <div className="relative bg-white dark:bg-[#151b2d] border-b border-gray-200 dark:border-gray-800 pt-12 pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-5 py-2 mb-5 bg-blue-400 text-black font-black text-sm uppercase tracking-wider transform -rotate-1 shadow-sm rounded-md">
                文字教程
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
                土堆 <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">教程</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                目前已收录 <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400 text-xl">{tutorials.length}</span> 份教程。
              </p>
              <div className="mt-5 inline-flex max-w-lg items-center gap-3 rounded-xl border border-indigo-200/80 dark:border-indigo-800 bg-indigo-50/80 dark:bg-indigo-900/20 px-4 py-3">
                <Map className="w-4 h-4 text-indigo-600 dark:text-indigo-300" />
                <p className="text-sm text-gray-700 dark:text-gray-300 font-semibold">不知道先学哪个？可以去首页按照学习路线图进行学习。</p>
                <Link to="/#roadmaps" className="shrink-0 inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-black px-3 py-2 no-underline">
                  查看路线图
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
          <div className="bg-white/90 dark:bg-[#1e293b]/90 backdrop-blur-xl border-2 border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl p-4 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="w-full md:w-auto">
              <div className="md:hidden relative">
                <select value={category} onChange={e => setCategory(e.target.value)} className="block w-full pl-10 pr-10 py-3 text-base border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none font-bold">
                  {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center"><Funnel className="h-4 w-4 text-gray-500" /></div>
                <div className="absolute inset-y-0 right-0 flex items-center px-2"><Menu className="h-4 w-4 text-gray-500" /></div>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg mr-2"><Funnel className="w-4 h-4 text-gray-500" /><span className="text-xs font-bold text-gray-500 uppercase">类型</span></div>
                {categories.map(cat => (
                  <button key={cat} onClick={() => setCategory(cat)} className={`px-4 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap border-2 ${category === cat ? 'bg-indigo-50 dark:bg-indigo-900/30 border-indigo-500 text-indigo-600 dark:text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.2)]' : 'bg-transparent border-transparent text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'}`}>
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <div className="relative w-full md:w-72 group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center"><Search className="h-4 w-4 text-gray-400 group-focus-within:text-indigo-500 transition-colors" /></div>
              <input type="text" placeholder="搜索教程..." className="block w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl text-sm font-medium focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
              {searchTerm && <button onClick={() => setSearchTerm('')} className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"><X className="w-3 h-3 text-gray-500" /></button>}
            </div>
          </div>

          <div className="min-h-[400px] mb-20">
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filtered.map((tutorial, idx) => {
                  const IconComp = categoryIcons[tutorial.category] || Scroll;
                  const gradient = `linear-gradient(135deg, ${tutorial.category === 'PyTorch' ? '#f97316' : '#8b5cf6'}, ${tutorial.category === 'PyTorch' ? '#ef4444' : '#a855f7'})`;
                  return (
                    <Link key={tutorial.id} to={tutorial.link} className="group relative block no-underline hover:no-underline">
                      <div className="relative h-full transition-all duration-500 hover:-translate-y-3">
                        <div className="absolute -inset-3 rounded-3xl blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none" style={{ background: `radial-gradient(circle, ${tutorial.category === 'PyTorch' ? '#f97316' : '#8b5cf6'}25, transparent 70%)` }} />
                        <div className="relative h-full bg-white dark:bg-[#1a1b26] rounded-2xl overflow-hidden flex flex-col shadow-md group-hover:shadow-xl transition-all border border-gray-100 dark:border-gray-800 group-hover:border-transparent">
                          <div className="relative h-36 overflow-hidden" style={{ background: gradient }}>
                            <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M20 0L40 20L20 40L0 20z\' fill=\'%23fff\'/%3E%3C/svg%3E")', backgroundSize: '24px 24px' }} />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="relative w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                <IconComp className="w-9 h-9 text-white drop-shadow-lg" strokeWidth={1.5} />
                              </div>
                            </div>
                            <div className="absolute top-3 left-3"><span className="px-2 py-0.5 rounded-md bg-black/20 backdrop-blur-sm text-white/90 text-[10px] font-bold">{tutorial.category}</span></div>
                            <div className="absolute -bottom-px left-0 right-0"><svg viewBox="0 0 400 20" preserveAspectRatio="none" className="w-full h-5 block"><path d="M0,20 Q200,0 400,20 L400,20 L0,20 Z" className="fill-white dark:fill-[#1a1b26]" /></svg></div>
                          </div>
                          <div className="flex-1 flex flex-col px-5 pb-5 pt-3">
                            <h3 className="text-lg font-black mb-1.5 line-clamp-2 text-gray-900 dark:text-gray-100">{tutorial.title}</h3>
                            <p className="text-[13px] line-clamp-2 text-gray-500 dark:text-gray-400 leading-relaxed flex-1 mb-4">{tutorial.description}</p>
                            <div className="p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 space-y-2.5 mb-4">
                              <DifficultyBar difficulty={tutorial.difficulty} />
                            </div>
                            <div className="w-full py-3 rounded-xl text-white font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 group-hover:scale-[1.02] mt-auto" style={{ background: gradient, boxShadow: `0 4px 20px ${tutorial.category === 'PyTorch' ? '#f97316' : '#8b5cf6'}25` }}>
                              <BookOpenIcon className="w-4 h-4" />
                              开始阅读
                              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-24 text-center border-4 border-dashed border-gray-200 dark:border-gray-800 rounded-3xl bg-gray-50/50 dark:bg-gray-800/20">
                <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6 animate-bounce"><Search className="w-8 h-8 text-gray-300 dark:text-gray-600" /></div>
                <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2">未发现任何战利品</h3>
                <button onClick={() => { setSearchTerm(''); setCategory('全部'); }} className="mt-6 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg shadow-lg shadow-indigo-500/30">重置过滤器</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

function BookOpenIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 7v14M3 18a1 1 0 01-1-1V4a1 1 0 011-1h5a4 4 0 014 4 4 4 0 014-4h5a1 1 0 011 1v13a1 1 0 01-1 1h-6a3 3 0 00-3 3 3 3 0 00-3-3z" /></svg>;
}