/**
 * 站点罗盘数据（本地数据源）。
 * 用途：src/pages/compass.astro → organisms/CompassSection → molecules/CompassTile。
 * 添加站点：往对应 Shelf.entries 追加一项；数组顺序即展示顺序。
 * - icon：Iconify 名（material-symbols:xxx）或图片 URL（http(s)/绝对路径）；
 *   省略时瓷砖显示 label 首字母 tonal 块（不自动抓取 favicon）。
 * - image：用户自定义图片 URL（http(s)/绝对路径），优先于 icon 渲染；
 *   加载失败自动降级为首字母块。
 */

/** 单条站点记录 */
export interface CompassEntry {
	/** 站点名（瓷砖标题） */
	label: string;
	/** 外链地址 */
	href: string;
	/** 一句话说明（瓷砖副行；省略则显示域名） */
	note?: string;
	/** 图标：Iconify 名或图片 URL；省略 = 首字母兜底 */
	icon?: string;
	/** 用户自定义图片（http(s)/绝对路径）：优先于 icon 渲染；省略则走 icon/首字母 */
	image?: string;
}

/** 分组（Shelf = 罗盘上的收纳格） */
export interface CompassShelf {
	/** 锚点 id（字母数字，作分组定位与跳转） */
	key: string;
	/** 分组名 */
	name: string;
	/** 分组图标（Iconify 名，SectionTitle 行首） */
	icon?: string;
	/** 分组副文案（标题下弱文本，可选） */
	blurb?: string;
	entries: CompassEntry[];
}

export const compassData: CompassShelf[] = [
	{
		key: "reads",
		name: "ACGN",
		icon: "material-symbols:auto-stories-outline-rounded",
		entries: [
			{ label: "Bangumi", href: "https://bgm.tv/", note: "华语二次元严选，兼具维基和论坛性质的ACG网站，设有动画、游戏、书籍、音乐和三次元五大分区，致力于让阿宅们在欣赏ACG作品之余拥有一个轻松便捷独特的交流与沟通环境。"},
			{ label: "MyAnimeList", href: "https://myanimelist.net/", note: "全球最大的英文动画评分网站。"},
			{ label: "巴哈姆特動畫瘋", href: "https://ani.gamer.com.tw", note: "台湾动画在线播放平台"},
			{ label: "Anich", href: "https://anich.emmmm.eu.org/", note: "动画在线播放网站"},
			{ label: "Zlibrary", href: "https://z-library.sk/", note: "世界上最大的电子书图书馆之一" },
			{ label: "Kmoe", href: "https://kzo.moe/", note: "Kindle格式漫画下载/推送" },
			{ label: "東立出版社", href: "https://www.tongli.com.tw", note: "查出版讯息" },
			{ label: "寶島少年", href: "https://formosayouth.pixnet.net/blog", note: "台灣知名度最高的少年漫畫週刊" },
			{ label: "拷貝漫畫", href: "https://mangacopy.com/", note: "免费在线漫画网站",},
			{ label: "yymanhua", href: "https://yymanhua.com/", note: "日漫在线阅读"},
			{ label: "MangaDex", href: "https://mangadex.org/", note: "多语言高质量漫画站"},
			{ label: "Komiic", href: "https://komiic.cc/", note: "适合网页阅读，但有每日阅读限额"},
			{ label: "Neat Reader", href: "https://www.neat-reader.cn/webapp#/", note: "Neat Reader 是一款清爽、美观、强大的电子书阅读器，支持EPUB和TXT格式，提供云端存储、多端同步、笔记功能等特色服务"},
			{ label: "ACGN资源入门", href: "https://blog.dewsweet.cc/archives/ACGN-i#comic", note: "ACGN正盗资源推荐"},
			{ label: "七米蓝的仓库", href: "https://al.chirmyram.com/", note: "动画、漫画、电影、图书、杂志等超多资源"},
			{ label: "动漫圣地巡礼", href: "https://anitabi.cn/map", note: "动画巡礼地图"}
		],
	},
	{
		key: "tools",
		name: "一些乱七八糟的小工具",
		icon: "material-symbols:build-outline-rounded",
		entries: [
			{
				label: "B站查弹幕评论",
				href: "https://www.aicu.cc/",
				note: "Bilibili 弹幕评论查询工具"
			},
			{
				label: "能不能好好说话？",
				href: "https://lab.magiconch.com/nbnhhsh/",
				note: "社交平台上通过拼音首字母缩写指代特定词句的情况越来越多，为了让更多人能勉强理解这一门另类沟通方式、做了这一个划词转义工具。"			
			},
			{
				label: "wikiHow",
				href: "https://zh.wikihow.com/%E9%A6%96%E9%A1%B5",
				note: "一个我还没怎么看过的指南网站"
			},
			{
				label: "Lks网站推荐合集",
				href: "https://lkssite.vip/",
				note: "B站博主 -LKs- 《良心到难以置信的网站推荐》"
			},
			{
				label: "LOL召唤师头像 - 幽灵疾步",
				href: "https://www.ghostoact.com/act/tools/summonerIcon",
				note: "英雄联盟LOL资料库"
			},
			{
				label: "HumanBenchmark",
				href: "https://humanbenchmark.com/",
				note: "测试你的反应力"
			},
			{
				label: "RadioGarden",
				href: "https://radio.garden/",
				note: "地图式全球广播电台网站"
			}
		],
	},
];