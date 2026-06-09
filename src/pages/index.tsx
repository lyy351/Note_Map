import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout title="首页" description="Novel Map 学习路线">
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white">
            Novel Map
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mt-4">
            欢迎来到 Novel Map，一个帮助规划学习路线的网站。
          </p>
        </div>
      </div>
    </Layout>
  );
}