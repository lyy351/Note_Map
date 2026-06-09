import React, { useState, useMemo } from 'react';
import Layout from '@theme/Layout';
import { Funnel, Menu, Search, X, ArrowRight, Sparkles, Box, Wrench, Lock } from 'lucide-react';

// 工具数据（可直接内嵌，也可后续提取到 data/tools.ts）
const tools = [
  {
    id: 1,
    title: 'YOLO数据集查看器',
    description: '可视化 YOLO 格式的目标检测数据集',
    category: '目标检测',
    icon: '🎯',
    color: 'bg-blue-500',
    link: '#',
    isNew: false,
  },
  {
    id: 2,
    title: 'COCO数据集查看器',
    description: '可视化 COCO 格式的目标检测数据集',
    category: '目标检测',
    icon: '🐻',
    color: 'bg-green-500',
    link: '#',
    isNew: false,
  },
  {
    id: 3,
    title: 'CNN动图解释器',
    description: '用动图解释卷积神经网络的步骤',
    category: '深度学习基础',
    icon: '🧠',
    color: 'bg-red-500',
    link: 'https://poloclub.github.io/cnn-explainer/',
    isNew: false,
  },
];

const iconMap = {
  '目标检测': Box,
  '深度学习基础': Sparkles,
};

export default function Labs() {
  const [category, setCategory] = useState('全部');
  const [searchTerm, setSearchTerm] = useState('');
  const categories = ['全部', ...new Set(tools.map(t => t.category))];

  const filtered = useMemo(() => {
    return tools.filter(tool => {
      const matchCat = category === '全部' || tool.category === category;
      const matchSearch = tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          tool.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [category, searchTerm]);

  return (
    <Layout title="土堆实验室" description="深度学习工具工坊">
      <div className="min-h-screen bg-[#f8f9fa] dark:bg-[#0c1222] font-sans">
        {/* Hero */}
        <div className="relative bg-white dark:bg-[#151b2d] border-b border-gray-200 dark:border-gray-800 pt-12 pb-24">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] opacity-[0.03] dark:opacity-[0.05]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 bg-cyan-50 dark:bg-cyan-900/30 border border-cyan-200 dark:border-cyan-800 text-cyan-600 dark:text-cyan-300 rounded-lg text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                TUDUI LAB
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
                土堆 <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">实验室</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                目前已有 <span className="font-mono font-bold text-cyan-600 dark:text-cyan-400 text-xl">{tools.length}</span> 个工具投入使用。
              </p>
            </div>
            <div className="relative h-64 flex items-end justify-center">
              {/* 可放动画 */}
            </div>
          </div>
        </div>

        {/* 筛选栏 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
          <div className="bg-white/90 dark:bg-[#1e293b]/90 backdrop-blur-xl border-2 border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl p-4 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="w-full md:w-auto">
              <div className="md:hidden relative">
                <select
                  value={category}
                  onChange={e => setCategory(e.target.value)}
                  className="block w-full pl-10 pr-10 py-3 text-base border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 appearance-none font-bold"
                >
                  {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Funnel className="h-4 w-4 text-gray-500" />
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <Menu className="h-4 w-4 text-gray-500" />
                </div>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg mr-2">
                  <Funnel className="w-4 h-4 text-gray-500" />
                  <span className="text-xs font-bold text-gray-500 uppercase">类别</span>
                </div>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`px-4 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap border-2 ${
                      category === cat
                        ? 'bg-cyan-50 dark:bg-cyan-900/30 border-cyan-500 text-cyan-600 dark:text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                        : 'bg-transparent border-transparent text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <div className="relative w-full md:w-72 group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400 group-focus-within:text-cyan-500 transition-colors" />
              </div>
              <input
                type="text"
                placeholder="搜索工具..."
                className="block w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl text-sm font-medium text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"
                >
                  <X className="w-3 h-3 text-gray-500" />
                </button>
              )}
            </div>
          </div>

          {/* 卡片网格 */}
          <div className="min-h-[400px] mb-20">
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filtered.map(tool => {
                  const IconComp = iconMap[tool.category] || Wrench;
                  const gradient = `linear-gradient(135deg, ${tool.color === 'bg-blue-500' ? '#0891b2' : tool.color === 'bg-green-500' ? '#10b981' : '#ef4444'}, ${tool.color === 'bg-blue-500' ? '#3b82f6' : tool.color === 'bg-green-500' ? '#059669' : '#dc2626'})`;
                  return (
                    <a key={tool.id} href={tool.link} target="_blank" rel="noopener noreferrer" className="group relative block no-underline hover:no-underline">
                      <div className="relative h-full transition-all duration-500 hover:-translate-y-3">
                        <div className="absolute -inset-3 rounded-3xl blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none" style={{ background: `radial-gradient(circle, ${tool.color === 'bg-blue-500' ? '#0891b2' : '#10b981'}25, transparent 70%)` }} />
                        <div className="relative h-full bg-white dark:bg-[#1a1b26] rounded-2xl overflow-hidden flex flex-col shadow-md group-hover:shadow-xl transition-all border border-gray-100 dark:border-gray-800 group-hover:border-transparent">
                          <div className="relative h-32 overflow-hidden" style={{ background: gradient }}>
                            <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M20 0L40 20L20 40L0 20z\' fill=\'%23fff\'/%3E%3C/svg%3E")', backgroundSize: '24px 24px' }} />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                <IconComp className="w-9 h-9 text-white drop-shadow-lg" strokeWidth={1.5} />
                              </div>
                            </div>
                            <div className="absolute top-3 left-3">
                              <span className="px-2 py-0.5 rounded-md bg-black/20 backdrop-blur-sm text-white/90 text-[10px] font-bold tracking-wide border border-white/10">{tool.category}</span>
                            </div>
                            {tool.isNew && (
                              <div className="absolute top-3 right-3">
                                <span className="px-2 py-0.5 rounded-md bg-red-500/85 text-white text-[10px] font-black">NEW</span>
                              </div>
                            )}
                            <div className="absolute -bottom-px left-0 right-0">
                              <svg viewBox="0 0 400 20" preserveAspectRatio="none" className="w-full h-5 block">
                                <path d="M0,20 Q200,0 400,20 L400,20 L0,20 Z" className="fill-white dark:fill-[#1a1b26]" />
                              </svg>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-col px-5 pb-5 pt-3">
                            <h3 className="text-lg font-black mb-1.5 line-clamp-2 text-gray-900 dark:text-gray-100">{tool.title}</h3>
                            <p className="text-[13px] line-clamp-2 text-gray-500 dark:text-gray-400 leading-relaxed flex-1 mb-4">{tool.description}</p>
                            <div className="w-full py-3 rounded-xl text-white font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 group-hover:scale-[1.02] mt-auto" style={{ background: gradient, boxShadow: `0 4px 20px ${tool.color === 'bg-blue-500' ? '#0891b2' : '#10b981'}25` }}>
                              启动工具
                              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-24 text-center border-4 border-dashed border-gray-200 dark:border-gray-800 rounded-3xl bg-gray-50/50 dark:bg-gray-800/20">
                <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6 animate-bounce">
                  <Lock className="w-8 h-8 text-gray-300 dark:text-gray-600" />
                </div>
                <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2">未找到原型机</h3>
                <p className="text-gray-500 font-medium max-w-xs mx-auto">请尝试调整搜索参数</p>
                <button onClick={() => { setSearchTerm(''); setCategory('全部'); }} className="mt-6 px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-lg transition-colors shadow-lg shadow-cyan-500/30">
                  重置扫描
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}