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
		id: "ame",
		title: "雨とカプチーノ",
		artist: "Yorushika",
		cover: "assets/images/music/ame.jpg",
		source: "/assets/music/url/ヨルシカ - 雨とカプチーノ (雨和卡布奇诺).mp3",
		duration: 241,
	},
	{
		id: "coffee",
		title: "コーヒーとシロップ",
		artist: "Official髭男dism",
		cover: "assets/images/music/coffee.jpg",
		source: "/assets/music/url/Official髭男dism (OFFICIAL HIGE DANDISM) - コーヒーとシロップ.ogg",
		duration: 253,
	},
	{
		id: "sake",
		title: "ビンクスの酒",
		artist: "Ado",
		cover: "assets/images/music/sake.jpg",
		source: "/assets/music/url/Ado - ビンクスの酒.ogg",
		duration: 245,
	}
];
