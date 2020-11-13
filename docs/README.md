## 目录 ##

* [规范说明](#%E8%A7%84%E8%8C%83%E8%AF%B4%E6%98%8E)
* [代码规范](#%E4%BB%A3%E7%A0%81%E8%A7%84%E8%8C%83)
  * [命名规范](#%E5%91%BD%E5%90%8D%E8%A7%84%E8%8C%83)
    * [1\. 项目命名](#1-%E9%A1%B9%E7%9B%AE%E5%91%BD%E5%90%8D)
    * [2\. 目录命名](#2-%E7%9B%AE%E5%BD%95%E5%91%BD%E5%90%8D)
    * [3\. Javascript 命名](#3-javascript-%E5%91%BD%E5%90%8D)
    * [4\. Css 命名](#4-css-%E5%91%BD%E5%90%8D)
  * [HTML规范](#html%E8%A7%84%E8%8C%83)
  * [Css规范](#css%E8%A7%84%E8%8C%83)
  * [JavaScript 规范](#javascript-%E8%A7%84%E8%8C%83)


## 规范说明 ##

- 此为前端开发团队遵循和约定的代码书写规范，意在提高代码的规范性和可维护性。 
- 此规范为参考规范，不全是硬性要求，部分硬性约定已予标注，统一团队编码规范和风格。让所有代码都是有规可循的，并且能够得到沉淀，减少重复劳动。


## 代码规范 ##


### 命名规范 ###


#### 1. 项目命名 ####

全部英文小写字母、数字、连接符 " - " 或下划线 " _ "

> 例： vue-element-admin 、 management_project 等


#### 2. 目录命名 ####

参照项目命名规则；有复数结构时，要采用复数命名法。

> 例：assets, pages, styles, components 等


#### 3. Javascript 命名 ####

Javascript 变量、方法采用小驼峰式命名法

> 例：pageIndex 、 getInfo 等


#### 4. Css 命名 ####

参考BEM命名规范

> 标准的 BEM 写法： .block-name__element-name--modifier-name

>* 例： .vi-card__title 、 .vi-btn--primary 等

>* vi是命名前缀，vi-card表示一个block，vi-card__title，__表示vi-card下面的子元素title,--表示修饰符，表示状态 vi-btn--primary表示是普通按钮

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

### HTML规范 ###

- 缩进使用 soft tab（2个空格）；
- 在属性上，使用双引号，不要使用单引号；
- 属性名全小写，用中划线做分隔符；
- 不要在自动闭合标签结尾处使用斜线；
- 非特殊情况下 css 文件放在 body 部分 <meta> 标签后；
- 非特殊情况下大部分 js 文件放在 <body> 标签尾部；
- 如公司内部没有 CDN 服务，引入的第三方 js 库文件时最好下载在本地文件夹中以免公用 CDN 挂掉引起文件报错；
- 语义化 html，如标题根据重要性用 h (同一页面只能有一个h1)，段落标记用 p，列表用ul，内联元素中不可嵌套块级元素；
- 尽可能减少 div 多层级嵌套；
- 在 html 页面中尽量避免使用 style 属性直接修改样式；
- 重要图片必须加上 alt 属性，重要的元素加上 title 属性；
- 给区块代码及重要功能加上注释，提高可读性；
- 明确声明字符编码确保浏览器判断页面内容的渲染方式（一般采用 UTF-8 编码）；
- 减少 JavaScript 生成的标签


### Css规范 ###


- 缩进使用 soft tab（2个空格）；
- 每个属性声明末尾都要加分号；
- 以下几种情况不需要空格：
	* 属性值中 '(' 后和 ')' 前
	* 多个规则的分隔符 ',' 前
	* !important '!' 后
	* 行末不要有多余的空格
- 以下几种情况需要空格：
	* 属性值前
	* 选择器 '>' , '+' , '~' 前后
	* !important '!' 前
	* 属性值中的 ',' 后

```
/* bad */
.element>.dialog{
    ...
}
/* good */
.element > .dialog {
    ...
}

/* bad */
@debug: true;

header {
  background-color: (yellow)when(@debug = true);
}

/* good */
header {
  background-color: (yellow) when (@debug = true);
}

```

- 以下几种情况需要空行：
	* 文件最后保留一个空行
	* '}' 后最好跟一个空行，包括scss中嵌套的规则
	* 属性之间需要适当的空行

```
/* bad */
.element {
    ...
}
.dialog {
    color: red;
    &:after {
        ...
    }
}

/* good */
.element {
    ...
}

.dialog {
    color: red;

    &:after {
        ...
    }
}
```

- 注释统一用 '/* */'（scss中也不要用 '//' ）;
- 最外层统一使用双引号；
- 相关的属性声明按下边的顺序做分组处理，组之间需要有一个空行；

```
书写顺序前后为：

（1）定位属性：position display float left top right bottom overflow clear z-index

（2）自身属性：width height padding border margin background

（3）文字样式：font-family font-size font-style font-weight font-varient color

（4）文本属性：text-align vertical-align text-wrap text-transform text-indent text-decoration letter-spacing word-spacing white-space text-overflow

目的：减少浏览器reflow（回流），提升浏览器渲染dom的性能
```

- 颜色 16 进制用小写字母，尽量用简写；

```
/* bad */
.element {
    color: #ABCDEF;
    background-color: #001122;
}

/* good */
.element {
    color: #abcdef;
    background-color: #012;
}
```

- 尽量少用 '*' 选择器；
- 书写代码前，提高样式重复使用率；
- 必须为大区块样式添加注释，小区块适量注释；


### JavaScript 规范 ###


- 缩进使用 soft tab（2个空格）；
- 文件编码统一为utf-8；
- 每行代码结束必须有分号；
- 若需引入第三方库，须与团队其他人员沟通讨论；
- 尽量避免使用存在兼容性及消耗资源的方法或属性，比如 eval & innerText；
- 代码结构明了，合理添加注释，提高函数复用性；
- 以下几种情况不需要空格：
	* 对象的属性名后
	* 前缀一元运算符后
	* 后缀一元运算符前
	* 函数调用括号前
	* '([{' 后和 ')]}' 前
- 以下几种情况需要空格：
	* 运算符前后
	* 代码块 '{' 前
	* 下列关键字前：else, while, catch, finally
	* 下列关键字后：if, else, for, while, do, switch, case, try,catch, finally, with, return, typeof
	* 对象的属性值前
	* 函数的参数之间

```
// bad
var a = {
    b :1
};

// good
var a = {
    b: 1
};

// bad
++ x;
y ++;
z = x?1:2;

// good
++x;
y++;
z = x ? 1 : 2;

// bad
var a = [ 1, 2 ];

// good
var a = [1, 2];

// bad
var a = ( 1+2 )*3;

// good
var a = (1 + 2) * 3;

// no space before '(', one space before '{', one space between function parameters
var doSomething = function(a, b, c) {
    // do something
};

// no space before '('
doSomething(item);

// bad
for(i=0;i<6;i++){
    x++;
}

// good
for (i = 0; i < 6; i++) {
    x++;
}

```

- 以下几种情况需要空行：
	* 变量声明后（当变量声明在代码块的最后一行时，则无需空行）
	* 注释前（当注释在代码块的第一行时，则无需空行）
	* 代码块后（在函数调用、数组、对象中则无需空行）
	* 文件最后保留一个空行

```
// need blank line after variable declaration
var x = 1;

// not need blank line when variable declaration is last expression in the current block
if (x >= 1) {
    var y = x + 1;
}

var a = 2;

// need blank line before line comment
a++;

function b() {
    // not need blank line when comment is first line of block
    return a;
}

// need blank line after blocks
for (var i = 0; i < 2; i++) {
    if (true) {
        return false;
    }

    continue;
}

var obj = {
    foo: function() {
        return 1;
    },

    bar: function() {
        return 2;
    }
};

// not need blank line when in argument list, array, object
func(
    2,
    function() {
        a++;
    },
    3
);

var foo = [
    2,
    function() {
        a++;
    },
    3
];

var foo = {
    a: 2,
    b: function() {
        a++;
    },
    c: 3
};

```

- 最外层统一使用单引号；
- 变量不要先使用后声明；
- 一个函数作用域中所有的变量声明尽量提到函数首部，用一个var/let 声明，不允许出现两个连续的声明；
- 对象属性名不需要加引号，对象以缩进的形式书写，不要写在一行；
- 用于调试的代码不要出现在生产版本中；
 








