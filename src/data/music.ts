import type { TrackDescriptor } from "@/types/musicConfig";

/**
 * 侧栏音乐本地曲目数据源。
 * 遵循「零额外负担」原则：配置与数据解耦，此处专用于管理本地曲目列表。
 *
 * 添加曲目：在 musicTracks 中追加一项即可：
 * - id: 唯一标识
 * - title: 曲目标题
 * - artist: 艺术家（可选）
 * - cover: 封面图地址（可选；推荐相对 /src，亦支持 /public 或绝对 URL）
 * - source: 音频文件地址（相对 /public 或绝对 URL）
 * - duration: 曲目时长（秒，可选）
 */
export const musicTracks: readonly TrackDescriptor[] = [
	{
		id: "01",
		title: "雨とカプチーノ",
		artist: "Yorushika",
		cover: "assets/images/music/1.jpg",
		source: "/assets/music/url/ヨルシカ - 雨とカプチーノ (雨和卡布奇诺).mp3",
		duration: 241,
	},
	{
		id: "02",
		title: "コーヒーとシロップ",
		artist: "Official髭男dism",
		cover: "assets/images/music/2.jpg",
		source: "/assets/music/url/Official髭男dism (OFFICIAL HIGE DANDISM) - コーヒーとシロップ.ogg",
		duration: 253,
	},
	{
		id: "03",
		title: "ビンクスの酒",
		artist: "Ado",
		cover: "assets/images/music/3.jpg",
		source: "/assets/music/url/Ado - ビンクスの酒.ogg",
		duration: 245,
	},
	{
		id: "04",
		title: "マリーゴールド",
		artist: "Aimyon",
		cover: "assets/images/music/4.jpg",
		source: "/assets/music/url/マリーゴールド-あいみょん.mp3",
		duration: 308,
	},
	{
		id: "05",
		title: "ハルノヒ",
		artist: "Aimyon",
		cover: "assets/images/music/5.jpg",
		source: "/assets/music/url/ハルノヒ(春日) - 爱缪.mp3",
		duration: 326,
	},
	{
		id: "06",
		title: "愛を伝えたいだとか",
		artist: "Aimyon",
		cover: "assets/images/music/6.jpg",
		source: "/assets/music/url/愛を伝えたいだとか - 爱缪.mp3",
		duration: 235,
	},
	{
		id: "07",
		title: "3636",
		artist: "Aimyon",
		cover: "assets/images/music/7.jpg",
		source: "/assets/music/url/3636 - 爱缪.mp3",
		duration: 251,
	},
	{
		id: "08",
		title: "Subtitle",
		artist: "Official髭男dism",
		cover: "assets/images/music/8.jpg",
		source: "/assets/music/url/Subtitle - Official髭男dism.mp3",
		duration: 305,
	},
	{
		id: "09",
		title: "Prentender",
		artist: "Official髭男dism",
		cover: "assets/images/music/9.jpg",
		source: "/assets/music/url/Pretender.mp3",
		duration: 326,
	},
	{
		id: "10",
		title: "TATTOO",
		artist: "Official髭男dism",
		cover: "assets/images/music/10.jpg",
		source: "/assets/music/url/TATTOO-Official髭男dism.mp3",
		duration: 308,
	},
	{
		id: "11",
		title: "Same Blue",
		artist: "Official髭男dism",
		cover: "assets/images/music/11.jpg",
		source: "/assets/music/url/Same Blue-Official髭男dism.mp3",
		duration: 237,
	},
	{
		id: "12",
		title: "日常",
		artist: "Official髭男dism",
		cover: "assets/images/music/12.jpg",	
		source: "/assets/music/url/日常-Official髭男dism.mp3",
		duration: 353,
	},
	{
		id: "13",
		title: "アポトーシス",
		artist: "Official髭男dism",
		cover: "assets/images/music/13.jpg",	
		source: "/assets/music/url/アポトーシス-Official髭男dism.mp3",
		duration: 389,
	},
	{
		id: "14",
		title: "らしさ",
		artist: "Official髭男dism",
		cover: "assets/images/music/14.jpg",	
		source: "/assets/music/url/Official髭男dism - らしさ.mp3",
		duration: 302,
	},
	{
		id: "15",
		title: "115万キロのフィルム",
		artist: "Official髭男dism",
		cover: "assets/images/music/15.jpg",	
		source: "/assets/music/url/115万キロのフィルム-Official髭男dism.mp3",
		duration: 324,
	},
	{
		id: "16",
		title: "宿命",
		artist: "Official髭男dism",
		cover: "assets/images/music/16.jpg",	
		source: "/assets/music/url/Official髭男dism - 宿命.mp3",
		duration: 301,
	},
];
