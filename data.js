// ========== data.js ==========
// 所有栏目和书籍数据
const APP_DATA = {
  // 栏目列表（和首页卡片对应）
  categories: [
    { id: 'painting-route', name: '绘画路线' },
    { id: 'painting-free', name: '绘画随意' },
    { id: 'female', name: '女性' },
    { id: 'literary-theory', name: '文学理论' },
    { id: 'others', name: '其他' }
  ],

  // 每个栏目下的书籍/笔记条目
  items: {
    'painting-route': [
      {
        id: 'sketch',
        title: '素描的诀窍',
        author: '伯特·多德森',
        publisher: '上海人民美术出版社',
        year: '2014',
        cover: 'https://picsum.photos/200/280?random=1',  // 网络图片URL
        notes: `
          <h3>📌 心得体会</h3>
          <p>这本书让我重新认识了线条的运用，尤其是"观察即绘画"的理念。</p>
          <h3>🧠 思维导图</h3>
          <img src="https://picsum.photos/600/300?random=2" alt="思维导图" style="max-width:100%;border-radius:8px;">
          <h3>📝 摘抄</h3>
          <blockquote style="background:#f5f5f5;padding:10px;border-left:4px solid #fc5204;">
            "画素描不是复制对象，而是理解对象。"
          </blockquote>
        `
      }
    ],

    'literary-theory': [
      {
        id: '1984',
        title: '1984',
        author: '乔治·奥威尔',
        publisher: '上海译文出版社',
        year: '2018',
        cover: 'https://picsum.photos/200/280?random=3',
        notes: `
          <h3>📌 读后感</h3>
          <p>反乌托邦的经典，对极权主义的深刻警示。</p>
          <h3>📝 经典语录</h3>
          <blockquote style="background:#f5f5f5;padding:10px;border-left:4px solid #fc5204;">
            "战争即和平，自由即奴役，无知即力量。"
          </blockquote>
        `
      }
    ],

    // 其他栏目先留空，以后慢慢加
    'painting-free': [],
    'female': [],
    'others': []
  }
};
