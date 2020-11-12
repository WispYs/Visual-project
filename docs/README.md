
## 规范说明 ##

- 此为前端开发团队遵循和约定的代码书写规范，意在提高代码的规范性和可维护性。 
- 此规范为参考规范，不全是硬性要求，部分硬性约定见下一条书写规范，统一团队编码规范和风格。让所有代码都是有规可循的，并且能够得到沉淀，减少重复劳动。

## 代码规范 ##

### 命名规范 ###

1. 项目命名

全部英文小写字母、数字、连接符 " - " 或下划线 " _ "

> 例：my_project_name 、 vue-element-admin 等

2. 目录命名

参照项目命名规则；有复数结构时，要采用复数命名法。

> 例：assets, pages, styles, components 等

3. Javascript 变量、方法命名采用小驼峰式命名法

> 例：pageIndex 、 getInfo 等

4. Css 命名参考BEM命名规范

> 标准的 BEM 写法： .block-name__element-name--modifier-name

>> 例： .vi-card__title 、 .vi-btn--primary 等

>> vi是命名前缀，vi-card表示一个block，vi-card__title，__表示vi-card下面的子元素title,--表示修饰符，表示状态 vi-btn--primary表示是普通按钮

```

常用的CSS类名

包裹类： container, wrapper, outer, inner, box, header, footer, main, content, aside, page, section, block

状态类： primary, secondary, success, danger, warning, info, error, Link, light, dark, disabled, active, checked, loading

尺寸类： large, middle, small, bigger, smaller

组件类： card, list, picture, carousel, swiper, menu, navs, badge, hint, modal, dialog

位置类： first, last, current, prev, next, forward, back

文本类： title, desc, content, date, author, category，label，tag

人物类： avatar, name, age, post, intro


```


