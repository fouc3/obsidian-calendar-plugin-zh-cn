# Obsidian 日历插件

这是一个为 [Obsidian](https://obsidian.md/) 创建的插件，提供简单的日历视图，用于可视化和浏览您的日记笔记。

![screenshot-full](https://raw.githubusercontent.com/liamcain/obsidian-calendar-plugin/master/images/screenshot-full.png)

## 使用方法

在设置菜单中启用插件后，您应该能在右侧边栏看到日历视图。

插件会读取您的日记设置，以了解日期格式、日记模板位置以及新建日记的存放位置。

## 功能特性

- 跳转到任意**日记**。
- 为没有笔记的日期创建新的日记。（这在您需要补充旧笔记或提前规划未来笔记时非常有用！这将使用您当前的**日记**模板！）
- 可视化您的写作。每一天都包含一个计量器，用于估算您当天写了多少内容。
- 使用**周记**作为额外的组织层级！它们的工作方式与日记类似，但有自己的自定义选项。

## 设置

- **每周起始日 [默认: 区域设置]**：配置日历视图以周日或周一作为一周的第一天。选择"区域设置"将根据您选择的语言环境（`设置 > 关于 > 语言`）设置起始日。
- **每点字数 [默认: 250]**：从 1.3 版本开始，圆点反映文件的字数。默认情况下，每个圆点代表 250 个字，您可以将其更改为任意值。设置为 `0` 可完全禁用字数统计。**注意：** 最多显示 5 个圆点，以免视图过大！
- **创建新笔记前确认 [默认: 开启]**：如果您不喜欢在创建新日记前弹出确认对话框，可以关闭此选项。
- **显示周数 [默认: 关闭]**：启用此选项可在日历视图中添加显示[周数](https://en.wikipedia.org/wiki/Week#Week_numbering)的新列。点击这些单元格将打开您的**周记**。

## 自定义样式

以下 CSS 变量可以在您的 `obsidian.css` 文件中覆盖。

```css
/* obsidian-calendar-plugin */
/* https://github.com/liamcain/obsidian-calendar-plugin */

#calendar-container {
  --color-background-heading: transparent;
  --color-background-day: transparent;
  --color-background-weeknum: transparent;
  --color-background-weekend: transparent;

  --color-dot: var(--text-muted);
  --color-arrow: var(--text-muted);
  --color-button: var(--text-muted);

  --color-text-title: var(--text-normal);
  --color-text-heading: var(--text-muted);
  --color-text-day: var(--text-normal);
  --color-text-today: var(--interactive-accent);
  --color-text-weeknum: var(--text-muted);
}
```

除了 CSS 变量外，还有一些类可以覆盖以进行进一步自定义。例如，如果您不喜欢标题的亮度，可以这样覆盖：

```css
#calendar-container .year {
  color: var(--text-normal);
}
```

> **注意：** 在覆盖类时，特别重要的是要在前面加上 `#calendar-container` 前缀，以避免在 Obsidian 中出现意外更改！

### 主题创作者注意事项

如果您在日历上使用"检查元素"，您会发现 CSS 类名相当难以理解。例如：`.task.svelte-1lgyrog.svelte-1lgyrog`。这是怎么回事？以 `svelte-` 开头的类是自动生成的，用于避免日历样式影响应用中的其他元素。也就是说：**忽略它们！** 这些 CSS 类可能会在版本之间发生变化，您的覆盖_将会_失效。只需针对类名中人类可读的部分即可。因此要覆盖 `task.svelte-1lgyrog.svelte-1lgyrog`，您应该使用 `#calendar-container .task { ... }`

## 兼容性

`obsidian-calendar-plugin` 目前需要 Obsidian v0.9.11 或更高版本才能正常工作。

## 安装

您可以通过 Obsidian 内的社区插件选项卡安装此插件。只需搜索"Calendar"即可。

## 常见问题

### 圆点代表什么意思？

每个实心圆点代表日记中的 250 个字。所以 4 个圆点意味着您那天写了一千个字！如果您想更改这个阈值，可以在日历设置中为"每点字数"设置不同的值。

另一方面，空心圆点表示该天有未完成的任务。(**注意：** 无论剩余任务数量如何，特定日期最多只会有 1 个空心圆点)

### 如何更改日历的样式？

默认情况下，日历应该与您的主题无缝匹配，但如果您想进一步自定义，可以！在您的 `obsidian.css` 文件（在您的仓库内）中，您可以随心所欲地配置样式。

### 我可以在日历中添加周数吗？

在设置中，您可以启用"显示周数"以在日历中添加"周数"列。点击周数可打开"周记"。

### 如何在不禁用插件的情况下隐藏日历插件？

就像其他侧边栏视图（例如反向链接、大纲）一样，可以通过右键单击视图图标来关闭日历视图。

![how-to-close](./images/how-to-close.png)

### 我不小心关闭了日历。如何重新打开它？

如果您关闭了日历小部件（右键单击面板导航并单击关闭），您始终可以从命令面板重新打开视图。只需搜索 `日历: 打开视图`。

![how-to-reopen](./images/how-to-reopen.png)

### 如何让日历从周一开始？

从设置菜单中，您可以切换"每周起始日"。

### 如何在周记文件名中包含"未格式化"的文字？

如果您希望周记格式包含一个单词（例如"Week 21 of Year 2020"），可以通过用 `[]` 括号包围单词来实现。这告诉 [moment](https://momentjs.com/docs/#/displaying/format/) 忽略这些单词。因此对于上面的例子，您可以将格式设置为 `[Week] ww [of Year] gggg`。

### 我不喜欢显示周数，但我仍然想使用周记。我还能使用它们吗？

您可以通过在命令面板中搜索 `日历: 打开周记` 来打开当前周记。这将打开当前周的周记。

要配置 `格式`、`文件夹` 和 `模板`，您需要暂时在设置中打开"显示周数"，但如果您将其关闭，您的设置将会保留。

## 使用技巧

### 在周记中嵌入整周内容

如果您将以下代码片段添加到周记模板中，只需单击一下即可获得一周的无缝视图。

```md
## 一周概览

![[{{sunday:gggg-MM-DD}}]]
![[{{monday:gggg-MM-DD}}]]
![[{{tuesday:gggg-MM-DD}}]]
![[{{wednesday:gggg-MM-DD}}]]
![[{{thursday:gggg-MM-DD}}]]
![[{{friday:gggg-MM-DD}}]]
![[{{saturday:gggg-MM-DD}}]]
```

### 悬停预览

就像 Obsidian 的关系图谱和内部链接一样，日历支持日记的页面预览。只需在按住键盘上的 `Ctrl/Cmd` 键的同时将鼠标悬停在单元格上！

### 日历可以移动（并固定！）到任何位置

日历出现在右侧边栏并不意味着它必须留在那里。您可以随意将其拖动到左侧边栏，或者（如果您有足够的屏幕空间）拖动到主内容区域。如果您将其移出侧边栏，视图甚至可以固定；非常适合更高级的平铺布局！

![how-to-pin](./images/how-to-pin.png)

### 在新分栏中打开日记

如果您 `Ctrl/Command`-点击日历中的笔记，它将在新分栏中打开日记。如果您想连续打开多个日记，这很有用（特别是如果您启用了**滑动窗格**插件！）

### 在日历上显示打开的笔记

如果您打开了一个不同月份的笔记，您可能希望在日历视图中看到它。为此，您可以从命令面板运行命令 `日历: 显示当前笔记`。

### 为周末添加自定义样式

如果您希望周末的样式与工作日有所区别，可以将 `var(--color-background-weekend)` 设置为您想要的任何颜色。

![how-to-weekend](./images/how-to-weekend.png)

### 周记（已弃用）

#### 周记功能已迁移

周记功能已拆分到其[专属插件](https://github.com/liamcain/obsidian-periodic-notes/)中。将来，该功能将从日历插件中移除；因此如果您目前正在使用周记，我建议您进行切换。别担心，功能上完全相同，并且仍将与日历视图集成！

这次拆分受到[做好一件事](https://en.wikipedia.org/wiki/Unix_philosophy)哲学的启发。插件应该尽可能模块化。有些用户可能想要周记但不需要日历视图。反之亦然。

如果您当前在日历插件中使用周记，新的周期笔记插件将自动为您迁移设置。

### 使用方法

您可以通过两种方式打开**周记**：在命令面板中搜索 `日历: 打开周记` 或点击周数。周记可以从日历设置中配置。有 3 个设置：

- **文件夹：** 周记存放的文件夹。它可以与日记相同或不同。默认情况下，它们放置在您的仓库根目录中。
- **模板：** 为周记配置模板。周记的模板标签与日记略有不同。请参阅此处支持的[周记模板标签](#template-tags)列表。

> 注意：此处的路径不会自动补全，您需要输入完整路径。

- **格式：** 周记文件名的日期格式。默认为 `"gggg-[W]ww`。如果您在周格式中使用 `DD`，这将指代一周的第一天（周日或周一，取决于您的设置）。

#### 模板标签

| 标签                                                                                   | 描述                                                                                                                                                                      |
| -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sunday`, `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday` | 由于周标签指代主要日期，您可以像这样 `{{sunday:gggg-MM-DD}}` 引用特定日期，以自动插入该天的日期。注意，您必须指定日期格式！               |
| `title`                                                                                | 与日记的 `{{title}}` 相同。它将插入笔记的标题                                                                                                                            |
| `date`, `time`                                                                         | 与日记的 `{{date}}` 和 `{{time}}` 相同。它将插入一周第一天的日期和时间。用于创建标题（例如 `# # {{date:gggg [Week] ww}}`）。             |

## 实际应用

- [Nick Milo 提供了一个不错的插件演示](https://www.youtube.com/watch?v=X61wRmfZU8Y&t=1099s)
- [Santi Younger 演示如何使用日历 + 周期笔记进行每周回顾](https://www.youtube.com/watch?v=T9y8JABS9_Q)
- [Filipe Donadio 使用日历规划他的一天](https://www.youtube.com/watch?v=hxf3_dXIcqc)

## 致谢 🙏

如果您喜欢这个插件并想请我喝杯咖啡，可以！

[<img src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png" alt="BuyMeACoffee" width="100">](https://www.buymeacoffee.com/liamcain)

喜欢我的工作并希望看到更多类似内容？您可以赞助我。

[![GitHub Sponsors](https://img.shields.io/github/sponsors/liamcain?style=social)](https://github.com/sponsors/liamcain)
