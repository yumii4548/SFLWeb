/**
 * 极鱼社官网 - 公共组件 & 数据配置
 * 通过 JS 动态注入导航栏和页脚，方便统一维护
 */
(function (global) {
    'use strict';

    // ===== 网站数据配置 =====
    var SITE = {
        name: '极鱼社',
        en: 'Swift Fish Lab',
        desc: 'Minecraft 综合型开发团队',
        qq: {
            chat: '914029611',
            join1: '2176179242',
            join2: '83345672'
        }
    };

    var SERVICES = [
        { id: 'skinsubmit', icon: '📤', name: '授权皮肤代投', subtitle: 'SKIN SUBMISSION SERVICE', desc: '提供授权皮肤代投服务，专业对接各大平台审核通道，高效稳定，让你的皮肤作品快速上架各平台。', features: ['平台授权代理', '审核通道对接', '快速批量上架', '全程跟踪反馈'], price: '面议', badge: 'NEW', color: '#ec4899', url: '' },
        { id: 'skin', icon: '🎨', name: 'MC 皮肤定制', subtitle: 'SKIN CUSTOMIZATION', desc: '打造独一无二的角色皮肤，涵盖多种风格，从可爱萌系到硬核战斗，总有一款适合你。', features: ['角色皮肤设计', '材质贴图制作', '定制化修改', '批量生产'], price: '面议', badge: 'POPULAR', color: '#00d4ff' },
        { id: 'build', icon: '🏛️', name: '建筑承包', subtitle: 'ARCHITECTURE CONTRACTING', desc: '精美像素建筑，涵盖古风建筑与现代都市，从单体景观到完整城市规划，专业团队施工。', features: ['古建筑群建造', '现代建筑设计', '大型地图规划', '服务器主城建设'], price: '面议', badge: 'HOT', color: '#7c3aed' },
        { id: 'crossversion', icon: '🔄', name: '全版本存档互通', subtitle: 'CROSS-VERSION MIGRATION', desc: '专业的 Minecraft 存档转换服务，实现各版本间存档互通，让你的建筑跨越版本限制。', features: ['基岩版转Java版', 'Java版转基岩版', '版本升级降级', '数据完整性保障'], price: '面议', badge: 'NEW', color: '#f59e0b' },
        { id: 'pixel', icon: '✨', name: '拼豆像素画图纸', subtitle: 'PIXEL ART BLUEPRINT', desc: '将任意图片转换为拼豆（Perler Beads）像素画图纸，支持多种尺寸和调色板，附带详细制作说明。', features: ['图片转像素图纸', '调色板优化', '多尺寸导出', '制作教程附带'], price: '¥10 起', badge: 'UNIQUE', color: '#10b981' }
    ];

    var WORKS = {
        buildings: [
            { id: 'beijingzijincheng', title: '北京明紫禁城', subtitle: 'the Forbidden City', category: '古建筑组 · 尚国营建', desc: '1:100比例还原北京明代紫禁城，包含奉天殿、谨身殿等主要建筑群，气势恢宏，工笔细腻，每一处斗拱飞檐都经精心考据。', tags: ['#尚国营建', '#宫殿', '#大型建筑'], icon: 'fa-chess-rook', image: 'images/beijingzijincheng.jpg', author: '' },
            { id: 'datongyungangjichang', title: '大同云冈机场', subtitle: 'Datong Yungang Airport', category: '现代建筑 · HG Studio', desc: '大同意向机场建筑，现代主义设计风格，流线型航站楼+跑道系统，功能齐全，细节逼真，可直接用于服务器地图。', tags: ['#HG Studio', '#现代', '#交通建筑'], icon: 'fa-plane', image: 'images/datongyungangjichang.jpg', author: '' },
            { id: 'reserved-building-1', title: '预留建筑作品 1', subtitle: 'Coming Soon', category: '即将上架', desc: '更多精彩建筑项目正在制作中，敬请期待...', tags: ['#敬请期待'], icon: 'fa-hammer', image: '', isReserved: true, author: '' },
            { id: 'reserved-building-2', title: '预留建筑作品 2', subtitle: 'Coming Soon', category: '即将上架', desc: '更多精彩建筑项目正在制作中，敬请期待...', tags: ['#敬请期待'], icon: 'fa-hammer', image: '', isReserved: true, author: '' }
        ],
        maps: [
            { id: 'reserved-map-1', title: '预留玩法地图 1', subtitle: 'Coming Soon', category: '即将上架', desc: '更多精彩玩法地图正在制作中，敬请期待...', tags: ['#敬请期待'], icon: 'fa-map', image: '', isReserved: true, author: '' },
            { id: 'reserved-map-2', title: '预留玩法地图 2', subtitle: 'Coming Soon', category: '即将上架', desc: '更多精彩玩法地图正在制作中，敬请期待...', tags: ['#敬请期待'], icon: 'fa-map', image: '', isReserved: true, author: '' },
            { id: 'reserved-map-3', title: '预留玩法地图 3', subtitle: 'Coming Soon', category: '即将上架', desc: '更多精彩玩法地图正在制作中，敬请期待...', tags: ['#敬请期待'], icon: 'fa-map', image: '', isReserved: true, author: '' },
            { id: 'reserved-map-4', title: '预留玩法地图 4', subtitle: 'Coming Soon', category: '即将上架', desc: '更多精彩玩法地图正在制作中，敬请期待...', tags: ['#敬请期待'], icon: 'fa-map', image: '', isReserved: true, author: '' },
            { id: 'reserved-map-5', title: '预留玩法地图 5', subtitle: 'Coming Soon', category: '即将上架', desc: '更多精彩玩法地图正在制作中，敬请期待...', tags: ['#敬请期待'], icon: 'fa-map', image: '', isReserved: true, author: '' },
            { id: 'reserved-map-6', title: '预留玩法地图 6', subtitle: 'Coming Soon', category: '即将上架', desc: '更多精彩玩法地图正在制作中，敬请期待...', tags: ['#敬请期待'], icon: 'fa-map', image: '', isReserved: true, author: '' }
        ],
        addons: [
            { id: 'binfentangzixingche', title: '缤纷糖自行车', subtitle: 'Candy Bike Addon', category: 'Addon · 载具', desc: '糖果主题自行车载具，缤纷色彩搭配多种皮肤，骑行音效+粒子特效，让你的MC世界充满甜蜜与活力。', layout: 'wide', tags: ['#载具', '#Addon', '#可爱'], icon: 'fa-bicycle', image: 'images/binfentangzixingche.jpg', author: '' },
            { id: 'fugukehuanzaijubao', title: '复古科幻载具包', subtitle: 'Retro Sci-Fi Vehicles', category: 'Addon · 载具包', desc: '复古科幻风格载具合集，包含飞行器、悬浮车、复古跑车等10+载具，蒸汽朋克与赛博朋克完美融合。', layout: 'wide', tags: ['#载具包', '#科幻', '#Addon'], icon: 'fa-rocket', image: 'images/fugukehuanzaijubao.jpg', author: '' },
            { id: 'paopaochuan', title: '泡泡船', subtitle: 'Bubble Boat', category: 'Addon · 载具', desc: '可爱的泡泡主题小船，可在水面自由航行，产生泡泡粒子效果，冒险必备萌系载具。', layout: 'square', tags: ['#载具', '#Addon', '#海洋'], icon: 'fa-ship', image: 'images/paopaochuan.jpg', author: '' },
            { id: 'yuanbanshengwuqicheng', title: '原版生物启程', subtitle: 'Vanilla Mobs Enhanced', category: 'Addon · 生物增强', desc: '原版生物全方位增强，新增AI行为、进化形态、驯服机制、骑乘功能，让生存冒险更具挑战和乐趣。', layout: 'square', tags: ['#生物', '#生存', '#Addon'], icon: 'fa-dragon', image: 'images/yuanbanshengwuqicheng.jpg', author: '' },
            { id: 'reserved-addon-1', title: '预留 Addon', subtitle: 'Coming Soon', category: '即将上架', desc: '更多精彩Addon正在开发中，敬请期待...', layout: 'square', tags: ['#敬请期待'], icon: 'fa-gears', image: '', isReserved: true, author: '' },
            { id: 'reserved-addon-2', title: '预留 Addon', subtitle: 'Coming Soon', category: '即将上架', desc: '更多精彩Addon正在开发中，敬请期待...', layout: 'square', tags: ['#敬请期待'], icon: 'fa-gears', image: '', isReserved: true, author: '' },
            { id: 'reserved-addon-3', title: '预留 Addon', subtitle: 'Coming Soon', category: '即将上架', desc: '更多精彩Addon正在开发中，敬请期待...', layout: 'square', tags: ['#敬请期待'], icon: 'fa-gears', image: '', isReserved: true, author: '' },
            { id: 'reserved-addon-4', title: '预留 Addon', subtitle: 'Coming Soon', category: '即将上架', desc: '更多精彩Addon正在开发中，敬请期待...', layout: 'square', tags: ['#敬请期待'], icon: 'fa-gears', image: '', isReserved: true, author: '' },
            { id: 'reserved-addon-5', title: '预留 Addon', subtitle: 'Coming Soon', category: '即将上架', desc: '更多精彩Addon正在开发中，敬请期待...', layout: 'square', tags: ['#敬请期待'], icon: 'fa-gears', image: '', isReserved: true, author: '' },
            { id: 'reserved-addon-6', title: '预留 Addon', subtitle: 'Coming Soon', category: '即将上架', desc: '更多精彩Addon正在开发中，敬请期待...', layout: 'square', tags: ['#敬请期待'], icon: 'fa-gears', image: '', isReserved: true, author: '' }
        ],
        skins: [
            { id: 'skin-1', title: '仙侠主题系列', author: '极鱼社·皮肤组', category: '仙侠风', desc: '中国风仙侠角色皮肤，12款精美设计', image: 'images/skin-1.jpg' },
            { id: 'skin-2', title: '校园青春系列', author: '极鱼社·皮肤组', category: '日常风', desc: '青春校园主题角色皮肤，8款设计', image: 'images/skin-2.jpg' },
            { id: 'skin-3', title: '赛博朋克系列', author: '极鱼社·皮肤组', category: '科幻风', desc: '未来科幻赛博朋克角色皮肤，10款设计', image: 'images/skin-3.jpg' },
            { id: 'skin-4', title: '萌系可爱系列', author: '极鱼社·皮肤组', category: '萌系风', desc: '软萌可爱角色皮肤合集，15款设计', image: 'images/skin-4.png' },
            { id: 'skin-5', title: '硬核战斗系列', author: '极鱼社·皮肤组', category: '战斗风', desc: '硬核冒险战斗主题皮肤，6款设计', image: 'images/skin-5.jpg' },
            { id: 'skin-6', title: '节日限定系列', author: '极鱼社·皮肤组', category: '限定款', desc: '春节/圣诞/中秋等节日皮肤，20款+', image: 'images/skin-6.png' },
            { id: 'skin-7', title: '暗黑哥特系列', author: '极鱼社·皮肤组', category: '暗黑风', desc: '暗黑哥特风格角色皮肤，哥特建筑与服饰融合，8款设计', image: 'images/skin-7.jpg' },
            { id: 'skin-8', title: '蒸汽朋克系列', author: '极鱼社·皮肤组', category: '复古风', desc: '蒸汽朋克主题角色皮肤，机械与复古完美结合，10款设计', image: 'images/skin-8.jpg' },
            { id: 'skin-9', title: '奇幻异兽系列', author: '极鱼社·皮肤组', category: '奇幻风', desc: '神话奇幻生物主题皮肤，龙族精灵等异世界角色，12款设计', image: 'images/skin-9.png' }
        ]
    };

    var PLATFORMS = [
        { name: '我的世界中国版', type: '游戏平台', url: '#', icon: 'fa-solid fa-cube', color: '#00d4ff' },
        { name: '爱发电', type: '创作者平台', url: '#', icon: 'fa-solid fa-heart', color: '#f59e0b' },
        { name: 'B站 / 哔哩哔哩', type: '视频平台', url: '#', icon: 'fa-brands fa-bilibili', color: '#fb7299' },
        { name: '抖音', type: '短视频', url: '#', icon: 'fa-brands fa-tiktok', color: '#111111' },
        { name: 'QQ频道', type: '社群平台', url: '#', icon: 'fa-brands fa-qq', color: '#12b7f5' },
        { name: '微信公众号', type: '社交平台', url: '#', icon: 'fa-brands fa-weixin', color: '#07c160' }
    ];

    var MEMBERS = [
        { name: '极鱼', role: '创始人 / 主理人', desc: '团队总负责人，战略规划与资源对接', avatar: 'fa-solid fa-crown', color: '#f59e0b', image: 'images/member-1.jpg' },
        { name: '尚国', role: '尚国营建 负责人', desc: '古建筑设计总监，擅长宫殿园林建造', avatar: 'fa-solid fa-chess-rook', color: '#8b5cf6', image: 'images/member-2.jpg' },
        { name: 'HG', role: 'HG Studio 负责人', desc: '现代建筑设计总监，科幻都市风格', avatar: 'fa-solid fa-city', color: '#0ea5e9', image: 'images/member-3.jpg' },
        { name: '某皮肤师', role: '皮肤设计师', desc: '精通皮肤绘制，千余款皮肤量产经验', avatar: 'fa-solid fa-palette', color: '#ec4899', image: 'images/member-4.jpg' },
        { name: '某工程师', role: 'Addon 开发', desc: '行为包/资源包开发，精通红石机械', avatar: 'fa-solid fa-microchip', color: '#10b981', image: 'images/member-5.jpg' },
        { name: '某画师', role: '像素画师', desc: '拼豆图纸与像素画创作，细节控', avatar: 'fa-solid fa-paint-brush', color: '#ef4444', image: 'images/member-6.jpg' },
        { name: '运营小助手', role: '运营专员', desc: '社群运营、客服对接、平台发布', avatar: 'fa-solid fa-user-tie', color: '#06b6d4', image: 'images/member-7.jpg' },
        { name: '审核组', role: '资源审核', desc: '代投稿件审核与质量把控', avatar: 'fa-solid fa-clipboard-check', color: '#84cc16', image: 'images/member-8.jpg' }
    ];

    var SHOP_ITEMS = [
        { title: '仙侠皮肤·十连包', category: '皮肤包', price: '¥29.9', original: '¥49.9', icon: 'fa-user-ninja', desc: '精选十款中国风仙侠主题皮肤', tag: '热销', tagColor: '#ef4444', image: 'images/shop-1.jpg' },
        { title: '紫禁城·建筑存档', category: '建筑存档', price: '¥99', original: '¥199', icon: 'fa-chess-rook', desc: '1:100比例还原完整紫禁城建筑群', tag: '限时', tagColor: '#f59e0b', image: 'images/shop-2.jpg' },
        { title: '机械纪元·Addon', category: 'Addon模组', price: '¥19.9', original: '¥39.9', icon: 'fa-gears', desc: '工业时代自动化机械系统Addon', tag: '新品', tagColor: '#10b981', image: 'images/shop-3.jpg' },
        { title: '动漫拼豆图纸·50款', category: '拼豆图纸', price: '¥9.9', original: '¥29.9', icon: 'fa-cubes', desc: '热门动漫角色拼豆像素图纸合集', tag: '超值', tagColor: '#8b5cf6', image: 'images/shop-4.jpg' },
        { title: '苏州园林·景观包', category: '建筑存档', price: '¥59', original: '¥128', icon: 'fa-tree', desc: '古典园林亭台楼阁景观建筑存档', tag: '', tagColor: '', image: 'images/shop-5.jpg' },
        { title: '未来都市·天际线', category: '建筑存档', price: '¥79', original: '¥158', icon: 'fa-city', desc: '50+摩天大楼科幻现代都市存档', tag: '推荐', tagColor: '#0ea5e9', image: 'images/shop-6.jpg' }
    ];

    var PARTNERS = [
        { name: '尚国营建', en: 'ShangGuo Architecture', type: '建筑合作组织', desc: '古建筑专门建设组织，与极鱼社深度合作，共同打造大型宫殿园林建筑群', url: '#', color: '#f59e0b', logo: 'fa-solid fa-chess-rook', image: 'images/partner-1.jpg' },
        { name: 'HG Studio', en: 'HG Architecture Studio', type: '建筑合作组织', desc: '现代建筑建设组织，专注科幻都市与现代主义风格建筑设计', url: '#', color: '#0ea5e9', logo: 'fa-solid fa-city', image: 'images/partner-2.jpg' },
        { name: 'MC皮肤创作联盟', en: 'MC Skin Creators Union', type: '创作联盟', desc: '国内最大的MC皮肤创作者联盟，共同推广优质皮肤作品与设计师', url: '#', color: '#ec4899', logo: 'fa-solid fa-palette', image: 'images/partner-3.jpg' },
        { name: 'Addon开发者社区', en: 'Addon Dev Community', type: '技术社区', desc: '国内活跃的Addon/行为包开发技术社区，分享教程与资源', url: '#', color: '#8b5cf6', logo: 'fa-solid fa-microchip', image: 'images/partner-4.jpg' },
        { name: '拼豆创作者之家', en: 'Perler Beads Creators', type: '手工社群', desc: '拼豆像素画手工爱好者聚集地，推广MC主题拼豆创作', url: '#', color: '#10b981', logo: 'fa-solid fa-cubes', image: 'images/partner-5.jpg' },
        { name: 'MC服务器运营联盟', en: 'MC Server Operators Union', type: '运营联盟', desc: '国内MC服务器运营者交流合作平台，资源共享与活动合作', url: '#', color: '#ef4444', logo: 'fa-solid fa-server', image: 'images/partner-6.jpg' }
    ];

    var FRIEND_LINKS = [
        { name: '我的世界中国版', url: '#', desc: '官方游戏平台', icon: 'fa-solid fa-cube', color: '#00d4ff' },
        { name: '爱发电', url: '#', desc: '创作者支持平台', icon: 'fa-solid fa-heart', color: '#f59e0b' },
        { name: 'Minecraft Wiki', url: '#', desc: 'MC百科全书', icon: 'fa-solid fa-book', color: '#8b5cf6' },
        { name: 'MCBBS', url: '#', desc: 'MC中文论坛', icon: 'fa-solid fa-comments', color: '#0ea5e9' },
        { name: '像素画教程网', url: '#', desc: '像素画学习平台', icon: 'fa-solid fa-paint-brush', color: '#ec4899' },
        { name: '红石学院', url: '#', desc: '红石技术教程', icon: 'fa-solid fa-bolt', color: '#ef4444' },
        { name: '建筑美学社', url: '#', desc: 'MC建筑分享', icon: 'fa-solid fa-building', color: '#10b981' },
        { name: '皮肤资源站', url: '#', desc: '免费皮肤下载', icon: 'fa-solid fa-user', color: '#06b6d4' }
    ];

    // ===== 导航栏 HTML =====
    function getNavbar(activePage) {
        var isSubPage = activePage === 'partners';
        var links = [
            { href: isSubPage ? 'index.html#hero'     : '#hero',     label: '主页',     key: 'hero' },
            { href: isSubPage ? 'index.html#about'    : '#about',    label: '简介',     key: 'about' },
            { href: isSubPage ? 'index.html#works'    : '#works',    label: '代表作品', key: 'works' },
            { href: isSubPage ? 'index.html#services' : '#services', label: '业务服务', key: 'services' },
            { href: isSubPage ? 'index.html#shop'     : '#shop',     label: '在售资源', key: 'shop' },
            { href: isSubPage ? 'index.html#members'  : '#members',  label: '成员列表', key: 'members' },
            { href: isSubPage ? 'index.html#feedback' : '#feedback', label: '反馈入口', key: 'feedback' },
            { href: isSubPage ? 'index.html#join'     : '#join',     label: '加入我们', key: 'join' },
            { href: 'partners.html', label: '合作伙伴', key: 'partners' }
        ];
        var navItems = links.map(function (l) {
            return '<li><a href="' + l.href + '" class="nav-link ' + (l.key === activePage ? 'active' : '') + '" data-nav="' + l.key + '">' + l.label + '</a></li>';
        }).join('');

        var logoHref = isSubPage ? 'index.html#hero' : '#hero';

        return '' +
            '<nav class="navbar" id="navbar">' +
            '  <div class="nav-container">' +
            '    <a href="' + logoHref + '" class="nav-logo">' +
            '      <img src="images/sfllogo.png" alt="' + SITE.name + '" class="logo-img">' +
            '    </a>' +
            '    <ul class="nav-menu" id="navMenu">' + navItems + '</ul>' +
            '    <button class="nav-toggle" id="navToggle" aria-label="菜单" aria-expanded="false">' +
            '      <span></span><span></span><span></span>' +
            '    </button>' +
            '  </div>' +
            '  <div class="nav-overlay" id="navOverlay"></div>' +
            '</nav>';
    }

    // ===== 页脚 HTML =====
    function getFooter() {
        var platformLinks = PLATFORMS.map(function (p) {
            return '<a href="' + p.url + '" class="social-link" style="border-color:' + p.color + '40;color:' + p.color + '" title="' + p.name + '" target="_blank" rel="noopener"><i class="' + p.icon + '"></i></a>';
        }).join('');

        var serviceLinks = SERVICES.map(function (s) {
            return '<li><a href="#services">' + s.name + '</a></li>';
        }).join('');

        var friendLinksHtml = FRIEND_LINKS.map(function (f) {
            return '<a href="' + f.url + '" class="friend-link-item" target="_blank" rel="noopener" title="' + f.desc + '">' +
                '<span class="friend-link-icon" style="--fl-bg:' + f.color + '1a;--fl-color:' + f.color + '"><i class="' + f.icon + '"></i></span>' +
                '<span class="friend-link-text"><strong>' + f.name + '</strong><span>' + f.desc + '</span></span>' +
                '</a>';
        }).join('');

        return '' +
            '<footer class="footer">' +
            '  <div class="footer-bg"><div class="footer-grid"></div></div>' +
            '  <div class="container">' +
            '    <div class="footer-main">' +
            '      <div class="footer-brand">' +
    '        <div class="footer-logo"><img src="images/sfllogo.png" alt="' + SITE.name + ' Logo" class="logo-img"></div>' +
    '        <h3>' + SITE.name + ' <span>' + SITE.en + '</span></h3>' +
            '        <p class="footer-desc">' + SITE.desc + '<br>皮肤 · 建筑 · Addon · 资源定制</p>' +
            '        <div class="footer-socials">' + platformLinks + '</div>' +
            '      </div>' +
            '      <div class="footer-nav"><h4>快速导航</h4><ul>' +
            '<li><a href="#hero">主页</a></li>' +
            '<li><a href="#about">简介</a></li>' +
            '<li><a href="#works">代表作品</a></li>' +
            '<li><a href="#services">业务服务</a></li>' +
            '<li><a href="#shop">在售资源</a></li>' +
            '<li><a href="#members">成员列表</a></li>' +
            '<li><a href="#feedback">反馈入口</a></li>' +
            '<li><a href="#join">加入我们</a></li>' +
            '<li><a href="partners.html">合作伙伴</a></li>' +
            '</ul></div>' +
            '      <div class="footer-services"><h4>业务范围</h4><ul>' + serviceLinks + '</ul></div>' +
            '      <div class="footer-contact"><h4>联系方式</h4>' +
            '        <div class="contact-item"><i class="fa-solid fa-users"></i><div><span>交流群</span><a href="#" onclick="copyText(\'' + SITE.qq.chat + '\');return false;">' + SITE.qq.chat + '</a></div></div>' +
            '        <div class="contact-item"><i class="fa-solid fa-user-plus"></i><div><span>合作群</span><a href="#" onclick="copyText(\'' + SITE.qq.join1 + '\');return false;">' + SITE.qq.join1 + '</a></div></div>' +
            '        <div class="contact-item"><i class="fa-solid fa-user-plus"></i><div><span>合作群</span><a href="#" onclick="copyText(\'' + SITE.qq.join2 + '\');return false;">' + SITE.qq.join2 + '</a></div></div>' +
            '      </div>' +
            '      <div class="footer-friendlinks"><h4>友情链接</h4><div class="friend-links">' + friendLinksHtml + '</div></div>' +
            '    </div>' +
            '    <div class="footer-bottom"><p>© 2021-2026 ' + SITE.name + ' ' + SITE.en + '. All Rights Reserved.</p><p>本网站与 Mojang AB 及网易公司无关 · ' + SITE.desc + '</p></div>' +
            '  </div>' +
            '</footer>' +
            '<button class="back-to-top" id="backToTop" aria-label="返回顶部"><i class="fa-solid fa-arrow-up"></i></button>' +
            '<div class="toast" id="toast"></div>';
    }

    // ===== 注入公共组件 =====
    function injectLayout(activePage) {
        // 在 body 最前面插入导航
        document.body.insertAdjacentHTML('afterbegin', getNavbar(activePage));

        // 在 body 最后面插入页脚
        document.body.insertAdjacentHTML('beforeend', getFooter());
    }

    // ===== 导出 =====
    global.SITE_DATA = { SITE: SITE, SERVICES: SERVICES, WORKS: WORKS, PLATFORMS: PLATFORMS, MEMBERS: MEMBERS, SHOP_ITEMS: SHOP_ITEMS, PARTNERS: PARTNERS, FRIEND_LINKS: FRIEND_LINKS };
    global.injectLayout = injectLayout;
})(window);
