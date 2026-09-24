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

    // ===== 其他：1本书（存在主义心理治疗） =====
    'others': [
      {
        id: 'existential-psychotherapy',
        title: '存在主义心理治疗',
        author: '欧文·D. 亚隆（Irvin D. Yalom）',
        publisher: '商务印书馆',
        year: '2015',
        cover: 'https://picsum.photos/200/280?random=20',
        url: 'https://lyy351.github.io/Note_Map/存在主义心理学导论deep版.html',
        overview: `
          <p>存在主义治疗并非一个独立的治疗流派，而是每一个心理治疗师在其临床工作和个人生活中都可能会采用到的一种精神取向，或者说是生活哲学。存在主义治疗所基于的假设是：我们是自由的，并且要为自己的选择及行动负责任。</p>
          <p>欧文·D. 亚隆，斯坦福大学医学院精神病学教授，美国团体心理治疗的权威、当代精神病学大师，存在主义治疗三大代表人物之一。在本书中，亚隆教授从临床经验、实证性研究、哲学文献以及其他大量资料出发，围绕着四个“生命的终极关怀”——<strong>死亡、自由、存在的孤独和无意义</strong>——逐一进行深入探讨，阐述每一个存在性关怀的意义，并论述治疗师应该如何通过对它们的理解来进行有效的临床工作。</p>
          <p>心理治疗的根本问题与人类存在的核心问题在这里相遇，不仅为那些存在主义取向的心理治疗师提供了一部经典的教科书，同时也为所有流派的治疗师以及所有思考过人生意义的人提供了一个对生命和存在进行反思的空间。</p>
        `,
        notes: `
          <h3>📖 本书相关网页</h3>
          <ul style="list-style:none;padding:0;">
            <li style="margin-bottom:14px;">
              <a href="https://lyy351.github.io/Note_Map/存在主义心理学导论deep版.html" target="_blank" rel="noopener"
                 style="display:block;padding:14px 18px;background:#f9f6f0;border:1px solid #e2dacd;border-radius:10px;text-decoration:none;color:#1b1917;transition:.2s;">
                <strong style="color:#9c3b2e;">网页一 · DeepSeek 版</strong><br>
                <span style="font-size:13px;color:#8a8278;font-family:-apple-system,sans-serif;">存在主义心理学导论 deep 版</span>
              </a>
            </li>
            <li style="margin-bottom:14px;">
              <a href="https://lyy351.github.io/Note_Map/存在主义心理学导论GPT版.html" target="_blank" rel="noopener"
                 style="display:block;padding:14px 18px;background:#f9f6f0;border:1px solid #e2dacd;border-radius:10px;text-decoration:none;color:#1b1917;transition:.2s;">
                <strong style="color:#9c3b2e;">网页二 · GPT 版</strong><br>
                <span style="font-size:13px;color:#8a8278;font-family:-apple-system,sans-serif;">存在主义心理学导论 GPT 版</span>
              </a>
            </li>
            <li>
              <a href="https://stvaxp8g.qwenwork.host/" target="_blank" rel="noopener"
                 style="display:block;padding:14px 18px;background:#f9f6f0;border:1px solid #e2dacd;border-radius:10px;text-decoration:none;color:#1b1917;transition:.2s;">
                <strong style="color:#9c3b2e;">网页三 · 千问办公</strong><br>
                <span style="font-size:13px;color:#8a8278;font-family:-apple-system,sans-serif;">qwenwork.host</span>
              </a>
            </li>
          </ul>
        `
      }
    ],

    // ===== 绘画随意、女性 暂时为空 =====
    'painting-free': [],
    'female': []
  }
};
