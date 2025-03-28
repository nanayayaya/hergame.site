# HerGames - 女性游戏免费合集网站

HerGames是一个专为女性玩家设计的免费游戏合集网站。该项目提供各种类型的游戏，包括治愈、合作、故事等多种游戏类型。

## 项目结构

```
hergame.site/
├── css/                # CSS样式文件
│   └── styles.css      # 主样式文件
├── js/                 # JavaScript文件
│   ├── games-data.js   # 游戏数据
│   ├── game-renderer.js # 游戏渲染模块
│   ├── main.js         # 主功能脚本
│   └── tailwind-config.js # Tailwind配置
├── images/             # 图片资源（需填充）
├── games/              # 游戏相关资源（可选）
└── index.html          # 主页
```

## 技术栈

- HTML5
- CSS3
- JavaScript
- Tailwind CSS（通过CDN加载）

## 特点

- 响应式设计，适配各种设备尺寸
- 游戏数据与展示逻辑分离
- 多种游戏分类
- 内嵌游戏框架
- 支持游戏内特殊控制（如猫咪模拟器）
- 支持URL参数直接跳转到特定游戏

## 本地开发

1. 克隆仓库
   ```
   git clone https://github.com/yourusername/hergame.site.git
   cd hergame.site
   ```

2. 使用任意HTTP服务器启动项目，例如使用Python的简易HTTP服务器:
   ```
   python -m http.server
   ```

3. 在浏览器中访问 `http://localhost:8000`

## 添加新游戏

要添加新游戏，请编辑`js/games-data.js`文件，在相应的游戏分类数组中添加新的游戏对象。例如：

```javascript
{
    id: "new-game",
    title: "新游戏名称",
    description: "游戏描述...",
    category: "游戏类别",
    playtime: "预计游戏时长",
    rating: 4.5,
    perfectFor: "适合人群",
    image: "游戏截图URL",
    embedUrl: "游戏嵌入URL（如果有）",
    fullUrl: "游戏完整URL",
    tip: "游戏提示信息"
}
```

## 许可

本项目代码采用MIT许可证。请注意，游戏内容可能有其自己的许可条款。 