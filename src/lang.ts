export const LANG = {
  settings: {
    dailyNotesNotEnabled: "⚠️ 日记插件未启用",
    dailyNotesNotEnabledDesc:
      "日历最好与日记插件或周期笔记插件（可在社区插件目录中找到）配合使用。",
    generalSettings: "常规设置",
    weeklyNoteSettings: "周记设置",
    weeklyNoteSettingsDesc:
      "注意：周记设置正在迁移。建议安装\"周期笔记\"插件以保留此功能。",
    advancedSettings: "高级设置",
    wordsPerDot: "每点字数",
    wordsPerDotDesc: "一个圆点代表多少个字？",
    startWeekOn: "每周起始日：",
    startWeekOnDesc: "选择一周的开始日期。选择\"区域设置默认\"将使用 moment.js 指定的默认值",
    localeDefault: "区域设置默认",
    confirmBeforeCreate: "创建新笔记前确认",
    confirmBeforeCreateDesc: "创建新笔记前显示确认对话框",
    showWeekNumber: "显示周数",
    showWeekNumberDesc: "启用此项将添加周数列",
    weeklyNoteFormat: "周记格式",
    weeklyNoteFormatDesc: "有关更多语法帮助，请参阅格式参考",
    weeklyNoteTemplate: "周记模板",
    weeklyNoteTemplateDesc: "选择要用作周记模板的文件",
    weeklyNoteFolder: "周记文件夹",
    weeklyNoteFolderDesc: "新建的周记将放在此处",
    overrideLocale: "覆盖区域设置：",
    overrideLocaleDesc: "如果您想使用与默认值不同的区域设置，请设置此项",
    sameAsSystem: "与系统相同",
  },
  commands: {
    openView: "打开视图",
    openWeeklyNote: "打开周记",
    revealActiveNote: "显示当前笔记",
  },
  view: {
    calendar: "日历",
  },
  modal: {
    neverMind: "取消",
  },
  dailyNote: {
    create: "创建",
    newDailyNote: "新建日记",
    fileNotExist: (filename: string): string =>
      `文件 ${filename} 不存在。您要创建它吗？`,
  },
  weeklyNote: {
    create: "创建",
    newWeeklyNote: "新建周记",
    fileNotExist: (filename: string): string =>
      `文件 ${filename} 不存在。您要创建它吗？`,
  },
};
