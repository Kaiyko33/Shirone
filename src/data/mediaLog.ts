/**
 * 年度作品记录数据（本地数据源）。
 * 用途：src/pages/manabi.astro → organisms/MediaLogSection.astro。
 *
 * - 每个分类（如「漫画」「书」）一个条目；分类名 name 由站主直接撰写
 *   （与罗盘分组名同策略，站主内容不走 i18n）；
 * - 年份分组 years 渲染时自动按年份倒序；条目为纯作品名；
 * - 条目数为 0 的分类 / 年份分组整体隐藏；
 * - 顺序即展示顺序，新增记录往对应年份的 items 里追加即可。
 */

/** 年份分组 */
export interface MediaLogYearGroup {
	/** 年份 */
	year: number;
	/** 该年记录的作品名列表 */
	items: string[];
}

/** 记录分类（如 漫画 / 书） */
export interface MediaLogCategory {
	/** 分类名（站主自拟） */
	name: string;
	/** 分类图标（Iconify 名，标题行首；可省略） */
	icon?: string;
	/** 年份分组 */
	years: MediaLogYearGroup[];
}

export const mediaLogData: MediaLogCategory[] = [
	{
		name: "漫画",
		icon: "material-symbols:menu-book-outline-rounded",
		years: [
			{ year: 2026, items: ["海贼王(33~106卷)", "朝剧(1~9卷)", "笑园漫画大王", "夏日重现", "亚人", 
								  "错位的青春", "庸才", "残响", "大逃杀", "梦印-MUJIRUSHI-",
								  "杀手阿一", "晚安布布", "擅长捉弄的高木同学", "北极百货的秋乃小姐",
								  "枪王黑泽", "怪物", "巨人战争", "监狱学园", "魂环", "沉睡的傻瓜",
								  "少女终末旅行", "噬亡村", "死亡笔记 短篇集", "死亡笔记", "新世纪福音战士",
								  "宫城良田 耳环", "灌篮高手", "剑风传奇", "麻辣教师GTO"] },
		],
	},
	{
		name: "书",
		icon: "material-symbols:auto-stories-outline-rounded",
		years: [
			{ year: 2026, items: ["告白", ""] },
		],
	},
];
