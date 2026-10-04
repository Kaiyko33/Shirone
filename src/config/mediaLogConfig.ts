import type { MediaLogConfig } from "../types/mediaLogConfig.ts";
import { withUserConfig } from "../utils/config-overlay.ts";

/**
 * 年度作品记录页配置单一真源。
 *
 * 遵循「零额外负担」原则：enable: false 时不渲染页面（访问重定向 404）、
 * 导航入口自动裁剪、零额外 DOM 与请求。
 * 分类内容与年份分组数据见 src/data/mediaLog.ts。
 */
export const mediaLogConfig: MediaLogConfig = withUserConfig("mediaLog", {
	/** 页面总开关 */
	enable: true,
	/** 页面标题："$t:mediaLog" 表示使用 i18n 词条，也可写字面量 */
	title: "$t:mediaLog",
	/** 页面副标题："$t:mediaLogBanner" 表示使用 i18n 词条，也可写字面量 */
	description: "$t:mediaLogBanner",
});
