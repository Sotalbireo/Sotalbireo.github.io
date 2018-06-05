!function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,function(e){return t[e]}.bind(null,s));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n\n// CONCATENATED MODULE: ./assets/script/_Wave.ts\nclass Wave {\n    constructor() {\n        this.height = window.innerHeight;\n        this.width = window.innerWidth;\n        this.fpms = Math.floor(1000 / 20);\n        this.ratio = 1.5;\n        this.time = 0;\n        this.subsets = [];\n        this.onFocus = true;\n        this.execute = () => {\n            this.draw();\n            this.interval = setInterval(this.draw, this.fpms);\n            this.eventSet();\n        };\n        this.resize = () => {\n            this.height = window.innerHeight;\n            this.canvas.height = this.height;\n            this.width = window.innerWidth;\n            this.canvas.width = this.width;\n        };\n        this.draw = () => {\n            if (!this.onFocus) {\n                return;\n            }\n            const drawPath = (t, periodicity = 200) => {\n                const amplitude = 30 + 20 * Math.sin(t / 7);\n                let i = 0;\n                let y = Math.sin(t);\n                this.ctx.moveTo(0, this.level + y * amplitude);\n                for (; i <= this.width; i += 25) {\n                    y = Math.sin(t + i / periodicity);\n                    this.ctx.lineTo(i, this.level + y * amplitude);\n                }\n                y = this.level + Math.sin(t + i / periodicity) * amplitude;\n                this.ctx.lineTo(i, y);\n                this.ctx.lineTo(this.width, this.height);\n                this.ctx.lineTo(0, this.height);\n            };\n            this.time += this.ratio;\n            const rad = this.time * Math.PI / 90;\n            this.ctx.clearRect(0, 0, this.width, this.height);\n            this.ctx.save();\n            this.ctx.strokeStyle = 'hsla(251,72.6%,24.3%,1)';\n            this.ctx.fillStyle = 'hsla(251,72.6%,24.3%,0.4)';\n            this.ctx.beginPath();\n            drawPath(rad - this.subsets[0], 541);\n            this.ctx.closePath();\n            this.ctx.fill();\n            this.ctx.restore();\n            this.ctx.save();\n            this.ctx.strokeStyle = 'hsla(334,79.3%,37.8%,1)';\n            this.ctx.fillStyle = 'hsla(334,79.3%,37.8%,0.3)';\n            this.ctx.beginPath();\n            drawPath(rad - this.subsets[1], 337);\n            this.ctx.closePath();\n            this.ctx.fill();\n            this.ctx.restore();\n            this.ctx.save();\n            this.ctx.strokeStyle = 'hsla(216,100%,50%,1)';\n            this.ctx.fillStyle = 'hsla(216,100%,50%,0.3)';\n            this.ctx.beginPath();\n            drawPath(rad - this.subsets[2], 229);\n            this.ctx.closePath();\n            this.ctx.fill();\n            this.ctx.restore();\n        };\n        this.eventSet = () => {\n            window.addEventListener('blur', () => {\n                this.onFocus = false;\n            });\n            window.addEventListener('focus', () => {\n                this.onFocus = true;\n            });\n            window.addEventListener('resize', this.resize);\n        };\n        this.level = Math.floor(this.height / 2);\n        for (let i = 0; i < 3; ++i) {\n            this.subsets[i] = Math.random() * Math.PI;\n        }\n        this.canvas = document.createElement('canvas');\n        this.ctx = this.canvas.getContext('2d');\n        document.querySelector('body').appendChild(this.canvas);\n        this.canvas.className = 'js-no-print';\n        this.canvas.height = this.height;\n        this.canvas.width = this.width;\n        this.canvas.setAttribute('style', 'background-color:hsla(240,100%,12.5%,0.5);position:fixed;z-index:-10000;top:0;left:0;');\n        this.ctx.lineJoin = 'round';\n        this.ctx.lineWidth = 2;\n        this.ctx.save();\n    }\n}\n\n// CONCATENATED MODULE: ./assets/script/index.ts\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    Array.prototype.forEach.call(document.images, (el) => {\n        el.addEventListener('contextmenu', (e) => e.preventDefault());\n        el.addEventListener('dragstart', (e) => e.preventDefault());\n    });\n    const wave = new Wave();\n    wave.execute();\n});\n\n\n//# sourceURL=webpack:///./assets/script/index.ts_+_1_modules?")}]);