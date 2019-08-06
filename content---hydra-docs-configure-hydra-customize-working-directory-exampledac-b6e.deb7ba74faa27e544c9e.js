(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{62:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",function(){return i}),t.d(n,"rightToc",function(){return u}),t.d(n,"default",function(){return l});t(0);var r=t(68);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i={id:"example",title:"Customizing working directory pattern",sidebar_label:"Customizing working directory pattern"},u=[{value:"Using job name",id:"using-job-name",children:[]},{value:"Using job configuration variables",id:"using-job-configuration-variables",children:[]}],c={rightToc:u},p="wrapper";function l(e){var n=e.components,t=a(e,["components"]);return Object(r.b)(p,o({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This example customizes the working directory in both run and sweeps using the following config snippet:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},".hydra/hydra.yaml:")),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-yaml"}),"hydra:\n  run:\n    dir: ./outputs/${now:%Y-%m-%d}/${now:%H-%M-%S}\n  sweep:\n    dir: /checkpoint/${env:USER}/outputs/${now:%Y-%m-%d}/${now:%H-%M-%S}\n    subdir: ${job:num}_${job:id}_${job:override_dirname}\n")),Object(r.b)("p",null,"This cause output jobs to be grouped by day.\nIn addition, for sweep the directory name would reflect the sweep parameters."),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-bash"}),"$ python demos/99_hydra_configuration/workdir/custom_workdir.py\nWorking directory : /private/home/omry/dev/hydra/outputs/2019-07-10/15-50-36\n")),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-text"}),"python experiment.py -s a=1,2 b=10,20\nSweep output dir : /checkpoint/omry/outputs/2019-07-10/17-07-58\n        #0 : a=1 b=10\n        #1 : a=1 b=20\n        #2 : a=2 b=10\n        #3 : a=2 b=20\n")),Object(r.b)("p",null,"Note how the sub directories contains the job number, slurm ID and then the sweep parameters:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-bash"}),"$ tree /checkpoint/omry/outputs/2019-07-10/17-07-58\n/checkpoint/omry/outputs/2019-07-10/17-07-58\n├── 0_14460332_a:1,b:10\n│   ├── config.yaml\n│   ├── main.log\n│   └── overrides.yaml\n├── 1_14460333_a:1,b:20\n│   ├── config.yaml\n│   ├── main.log\n│   └── overrides.yaml\n├── 2_14460334_a:2,b:10\n│   ├── config.yaml\n│   ├── main.log\n│   └── overrides.yaml\n└── 3_14460335_a:2,b:20\n    ├── config.yaml\n    ├── main.log\n    └── overrides.yaml\n")),Object(r.b)("h3",{id:"using-job-name"},"Using job name"),Object(r.b)("p",null,"You can use the job name as a part of the output directory pattern.\nThe folloing example will group your output directories by the name of the job:\n",Object(r.b)("inlineCode",{parentName:"p"},"/outputs/${job:name}/${now:%Y-%m-%d-%H-%M-%S}")),Object(r.b)("h3",{id:"using-job-configuration-variables"},"Using job configuration variables"),Object(r.b)("p",null,"You can use any configuration variable from your job configuration as a part of the output directory.\nFor example, in sweep runs - You may to have a directory structure that uses the parameters of the job, followed by\nthe random seed used in the job.\nconfiguration:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-yaml"}),"  sweep:\n    dir: /checkpoint/${env:USER}/outputs/${now:%Y-%m-%d}/${now:%H-%M-%S}\n    subdir: ${job:num}_${job:id}_${job:override_dirname}/${random_seed}\n")),Object(r.b)("p",null,"Check the ",Object(r.b)("a",o({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/demos/99_hydra_configuration/workdir"}),"runnable example"),"."))}l.isMDXComponent=!0},68:function(e,n,t){"use strict";t.d(n,"a",function(){return u}),t.d(n,"b",function(){return s});var r=t(0),o=t.n(r),a=o.a.createContext({}),i=function(e){var n=o.a.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},u=function(e){var n=i(e.components);return o.a.createElement(a.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){return o.a.createElement(o.a.Fragment,{},e.children)}},l=function(e){var n=e.components,t=e.mdxType,r=e.originalType,a=e.parentName,u=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),c=i(n);return o.a.createElement(c[a+"."+t]||c[t]||p[t]||r,n?Object.assign({},u,{components:n}):u)};function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=l;var u={};for(var p in n)hasOwnProperty.call(n,p)&&(u[p]=n[p]);u.originalType=e,u[c]="string"==typeof e?e:r,i[1]=u;for(var s=2;s<a;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}l.displayName="MDXCreateElement"}}]);