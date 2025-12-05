# 华夏历史时间线 - Nuxt 3 项目

一个交互式的中国历史时间线展示平台，通过可视化时间轴、历史事件卡片和视频播放功能，让用户直观地了解和学习中国历史发展脉络。

## 技术栈

- **框架**: Nuxt 3
- **UI 框架**: Tailwind CSS
- **图标**: Font Awesome 4.7.0
- **字体**: Google Fonts (Ma Shan Zheng, Noto Serif SC)
- **视频播放**: B 站视频嵌入（iframe）

## 项目特性

- ✅ 响应式设计（支持桌面端和移动端）
- ✅ 中国传统文化风格设计（水墨、宣纸质感）
- ✅ 时期筛选功能（古代史、中古史、近代史、现代史）
- ✅ 实时搜索历史事件
- ✅ 可视化时间轴展示
- ✅ B 站视频播放集成
- ✅ 滚动动画效果
- ✅ 回到顶部按钮

## 项目结构

```
chinese-history-timeline/
├── app.vue                 # 主应用组件
├── nuxt.config.ts         # Nuxt 配置
├── tailwind.config.js     # Tailwind CSS 配置
├── package.json           # 项目依赖
├── assets/
│   └── css/
│       └── main.css       # 全局样式
├── components/
│   ├── Common/
│   │   └── BackToTop.vue  # 回到顶部按钮
│   ├── Event/
│   │   └── EventCard.vue  # 历史事件卡片
│   ├── Filter/
│   │   ├── PeriodFilter.vue  # 时期筛选
│   │   └── SearchBox.vue     # 搜索框
│   ├── Header/
│   │   └── PageHeader.vue    # 页面头部
│   ├── Timeline/
│   │   ├── TimelineDot.vue      # 时间轴点
│   │   └── TimelineSection.vue  # 时间轴区段
│   └── Video/
│       └── VideoModal.vue    # 视频播放模态框
├── composables/
│   ├── useFilter.ts          # 筛选和搜索逻辑
│   ├── useScrollReveal.ts    # 滚动动画逻辑
│   └── useVideoPlayer.ts     # 视频播放逻辑
└── data/
    └── history-events.ts     # 历史事件数据
```

## 安装和运行

### 1. 安装依赖

```bash
npm install
```

### 2. 开发模式

```bash
npm run dev
```

访问 `http://localhost:3000` 查看项目

### 3. 构建生产版本

```bash
npm run build
```

### 4. 预览生产版本

```bash
npm run preview
```

### 5. 生成静态站点

```bash
npm run generate
```

## 功能说明

### 时期筛选

点击顶部的时期筛选按钮，可以筛选显示特定历史时期的事件：

- 全部时期
- 古代史 (约公元前 2070 年-公元 581 年)
- 中古史 (581 年-1840 年)
- 近代史 (1840 年-1949 年)
- 现代史 (1949 年至今)

### 搜索功能

在搜索框中输入关键词，可以实时搜索历史事件的标题、年份和描述。

### 时间线滑块

拖动时间线滑块，可以快速定位到不同历史时期。

### 视频播放

点击时间轴上的圆点，可以播放对应历史事件的 B 站视频，并自动跳转到相应时间点。

### 移动端适配

在移动端，点击右上角的菜单按钮，可以打开侧边菜单进行筛选和搜索。

## 自定义数据

历史事件数据存储在 `data/history-events.ts` 文件中，可以根据需要修改或添加新的历史事件。

每个历史事件包含以下字段：

- `id`: 唯一标识符
- `period`: 历史时期 (ancient/medieval/modern/contemporary)
- `year`: 年份
- `title`: 标题
- `description`: 描述
- `videoUrl`: B 站视频链接
- `videoTime`: 视频起始时间（秒）
- `timelinePosition`: 时间轴位置（百分比）

## 设计规范

### 色彩系统

- 宣纸色 (rice): #F5F0E6
- 墨色 (ink): #2D2D2A
- 古代史 (ancient): #8B4513
- 中古史 (medieval): #9E2A2B
- 近代史 (modern): #1A3A59
- 现代史 (contemporary): #0F515C

### 字体系统

- 标题/装饰字体: Ma Shan Zheng (书法体)
- 正文字体: Noto Serif SC (宋体)

## 浏览器兼容性

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 许可证

MIT License

## 联系方式

如有问题或建议，欢迎提交 Issue 或 Pull Request。

---

**华夏历史时间线 © 2025**  
探索上下五千年文明，传承华夏文化精髓
