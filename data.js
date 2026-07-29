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
    // ===== 绘画路线：5本书 =====
    'painting-route': [
      {
        id: 'book1',
        title: '第一本书',
        author: '作者一',
        publisher: '出版社一',
        year: '2020',
        cover: 'https://picsum.photos/200/280?random=1',
        notes: `
          <h3>📌 心得体会</h3>
          <p>这是第一本书的笔记内容。</p>
          <h3>📝 摘抄</h3>
          <blockquote style="background:#f5f5f5;padding:10px;border-left:4px solid #fc5204;">
            "第一本书的精彩语录。"
          </blockquote>
        `
      },
      {
        id: 'book2',
        title: '第二本书',
        author: '作者二',
        publisher: '出版社二',
        year: '2021',
        cover: 'https://picsum.photos/200/280?random=2',
        notes: `
          <h3>📌 心得体会</h3>
          <p>第二本书的读后感。</p>
          <h3>🧠 思维导图</h3>
          <img src="https://picsum.photos/600/300?random=10" alt="思维导图" style="max-width:100%;border-radius:8px;">
        `
      },
      {
        id: 'book3',
        title: '第三本书',
        author: '作者三',
        publisher: '出版社三',
        year: '2022',
        cover: 'https://picsum.photos/200/280?random=3',
        notes: `
          <h3>📌 心得体会</h3>
          <p>第三本书的学习收获。</p>
          <h3>📊 表格对比</h3>
          <table border="1" style="border-collapse:collapse;width:100%;">
            <tr><th>项目</th><th>结果</th></tr>
            <tr><td>测试A</td><td>通过</td></tr>
          </table>
        `
      },
      {
        id: 'book4',
        title: '第四本书',
        author: '作者四',
        publisher: '出版社四',
        year: '2023',
        cover: 'https://picsum.photos/200/280?random=4',
        notes: `<p>第四本书的简要笔记。</p>`
      },
      {
        id: 'book5',
        title: '第五本书',
        author: '作者五',
        publisher: '出版社五',
        year: '2024',
        cover: 'https://picsum.photos/200/280?random=5',
        notes: `<p>第五本书的笔记内容。</p>`
      }
    ],

    // ===== 文学理论：5本书 =====
    'literary-theory': [
      {
        id: 'lit1',
        title: '第一本书（文学理论）',
        author: '理论作者一',
        publisher: '理论出版社一',
        year: '2019',
        cover: 'https://picsum.photos/200/280?random=6',
        notes: `<p>文学理论第一本书的笔记。</p>`
      },
      {
        id: 'lit2',
        title: '第二本书（文学理论）',
        author: '理论作者二',
        publisher: '理论出版社二',
        year: '2020',
        cover: 'https://picsum.photos/200/280?random=7',
        notes: `<p>文学理论第二本书的笔记。</p>`
      },
      {
        id: 'lit3',
        title: '第三本书（文学理论）',
        author: '理论作者三',
        publisher: '理论出版社三',
        year: '2021',
        cover: 'https://picsum.photos/200/280?random=8',
        notes: `<p>文学理论第三本书的笔记。</p>`
      },
      {
        id: 'lit4',
        title: '第四本书（文学理论）',
        author: '理论作者四',
        publisher: '理论出版社四',
        year: '2022',
        cover: 'https://picsum.photos/200/280?random=9',
        notes: `<p>文学理论第四本书的笔记。</p>`
      },
      {
        id: 'lit5',
        title: '第五本书（文学理论）',
        author: '理论作者五',
        publisher: '理论出版社五',
        year: '2023',
        cover: 'https://picsum.photos/200/280?random=11',
        notes: `<p>文学理论第五本书的笔记。</p>`
      }
    ],

    // ===== 其他栏目暂时为空（你可以后续添加） =====
    'painting-free': [],
    'female': [],
    'others': []
  }
};
