---
title: Echarts常用图表
date: 2021-06-21
tags:
 - Echarts
categories: 
 - Echarts
sidebar: auto
---
---
### 1 、Echarts，xaxis文字超出自动换行显示

``` javascript
 dealwithStr(params, provideNumber) {
   let newParamsName = '' // 最终拼接成的字符串
   const paramsNameNumber = params.length // 实际标签的个数
   const rowNumber = Math.ceil(paramsNameNumber / provideNumber) // 换行的话，需要显示几行，向上取整
   /**
​    \* 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，	    就返回原标签
​    */
   // 条件等同于rowNumber>1
   if (paramsNameNumber > provideNumber) {
​    /** 循环每一行,p表示行 */
​    for (let p = 0; p < rowNumber; p++) {
​     let tempStr = '' // 表示每一次截取的字符串
​     const start = p * provideNumber // 开始截取的位置
​     const end = start + provideNumber // 结束截取的位置
​     // 此处特殊处理最后一行的索引值
​     if (p == rowNumber - 1) {
​      // 最后一次不换行
​      tempStr = params.substring(start, paramsNameNumber)
​     } else {
​      // 每一次拼接字符串并换行
​      tempStr = params.substring(start, end) + '\n'
​     }
​     newParamsName += tempStr // 最终拼成的字符串
​    }
   } else {
​    // 将旧标签的值赋给新标签
​    newParamsName = params
   }
   // 将最终的字符串返回
   return newParamsName
  },
```

### 2、Echarts饼图

``` js
drawPie(dateArr, title) {
      const self = this;
      if (!document.getElementById("home-draw-pie")) return;
      let colorlist = ["#2a9ddd", "#5bbfe9", "#63d7a3", "#fec86b"];
      let zjechar = this.$echarts.init(
        document.getElementById("home-draw-pie")
      );
      let option = {
        title: {
          text: title,
          left: "left",
          textStyle: {
            color: "#666",
            fontSize: 16,
            fontWeight: "normal",
          },
        },
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: "55%",
            center: ["50%", "50%"],
            data: dateArr,
            hoverAnimation: false,
            labelLine: {
              normal: {
                lineStyle: {
                  color: "#666",
                },
              },
            },
            label: {
              color: "#666",
              fontSize: 16,
              formatter(a) {
                return `${a.data.name}\n{a|${a.data.value}分}`;
              },
              rich: {
                a: {
                  color: "#333",
                  fontSize: 20,
                },
              },
            },
            itemStyle: {
              normal: {
                color: function (params) {
                  return colorlist[params.dataIndex];
                },
              },
            },
          },
        ],
      };
      zjechar.setOption(option);
      zjechar.on("click", (parm) => {
        self.$http
          .POST("/api/index/getRadar", { kpdaid: parm.data.bm })
          .then((res) => {
            if (res.success) {
              self.sfldt = true;
              self.$nextTick(() => {
                self.drawLdt(res.data, title);
              });
            }
          });
      });
    },
```

### 3、圆环详解

```js
// 基于准备好的容器(这里的容器是id为chart1的div)，初始化echarts实例
	var chart1 = echarts.init(document.getElementById("chart1"));
	
	// 圆环图各环节的颜色
	var color = ['#0000FF', '#00ffff', '#00ff00', '#ffff00'];
	
	// 圆环图各环节的名称和值(系列中各数据项的名称和值)
	var data =[{  
	                name: '其它',
	                value: 320
	            },{
	                name: '休闲裤',
	                value: 586
	            },{
	                name: '女士衬衫',
	                value: 874
	            },{
	                name: '运动服',
	                value: 725
	            }];
	  
	// 指定图表的配置项和数据
	var option = {
		
		//背景色
		backgroundColor: {			// 背景颜色
		    type: 'linear',
		    x: 0,
		    y: 0,
		    x2: 0,
		    y2: 1,
		    colorStops: [{
		        offset: 0, color: 'rgba(0,0,0,0.4)' // 0% 处的颜色
		    }, {
		        offset: 0.5, color: 'rgba(0,0,0,0.4)' 	// 50% 处的颜色
		    }, {
		        offset: 1, color: 'rgba(0,0,0,0.4)' // 100% 处的颜色
		    }],
		    globalCoord: false // 缺省为 false
		},
		
	    // 标题
	    title: [{
	        text: '商城各服装销量对比',
	        top:'5%',
	        left:'3%',
	        textStyle:{
	            color: '#000',
	            fontSize:18,
	        }
	    }],
	    
	    // 图例
	    legend: [{
	        selectedMode:true,             // 图例选择的模式，控制是否可以通过点击图例改变系列的显示状态。默认开启图例选择，可以设成 false 关闭。
	        top: '10%',
	        left: 'center',
	        textStyle: {                      // 图例的公用文本样式。
	            fontSize: 14,
	            color: '#fff'
       		},
	        data: ['其它','休闲裤','女士衬衫','运动服']
	    }],
	    
	    // 提示框
	    tooltip: {
	        show: true,                 // 是否显示提示框
	        formatter: '{b} </br> 销量{c}件 </br> 占比{d}%'      // 提示框显示内容,此处{b}表示各数据项名称，此项配置为默认显示项，{c}表示数据项的值，默认不显示，({d}%)表示数据项项占比，默认不显示。
	    },
	    
	    // graphic 是原生图形元素组件。可以支持的图形元素包括：image, text, circle, sector, ring, polygon, polyline, rect, line, bezierCurve, arc, group,
	    graphic: {
	        type: 'text',               // [ default: image ]用 setOption 首次设定图形元素时必须指定。image, text, circle, sector, ring, polygon, polyline, rect, line, bezierCurve, arc, group,
	        top: 'center',              // 描述怎么根据父元素进行定位。top 和 bottom 只有一个可以生效。如果指定 top 或 bottom，则 shape 里的 y、cy 等定位属性不再生效。『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 group 的子元素，父元素就是 group 元素。
	        left: 'center',             // 同上
	        style: {
	            text: '各服装销量对比',       // 文本块文字。可以使用 \n 来换行。[ default: '' ]
	            fill: '#fff',           // 填充色。
	            fontSize: 16,           // 字体大小
	            fontWeight: 'bold'		// 文字字体的粗细，可选'normal'，'bold'，'bolder'，'lighter'
	        }
	    },
	    
	    // 系列列表
	    series: [{
	        name: '圆环图系列名称',         // 系列名称
	        type: 'pie',                    // 系列类型 
	        center:['50%','50%'],           // 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。[ default: ['50%', '50%'] ]
	        radius: ['30%', '45%'],         // 饼图的半径，数组的第一项是内半径，第二项是外半径。[ default: [0, '75%'] ]
	        hoverAnimation: true,           // 是否开启 hover 在扇区上的放大动画效果。[ default: true ]
	        color: color,                   // 圆环图的颜色
	        label: {                        // 饼图图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等.
	            normal: {
	                show: true,             // 是否显示标签[ default: false ]
	                position: 'outside',    // 标签的位置。'outside'饼图扇区外侧，通过视觉引导线连到相应的扇区。'inside','inner' 同 'inside',饼图扇区内部。'center'在饼图中心位置。
	                formatter: '{b} : {c}件'  // 标签内容
	            }
	        },
	        labelLine: {                    // 标签的视觉引导线样式,在 label 位置 设置为'outside'的时候会显示视觉引导线。
	            normal: {
	                show: true,             // 是否显示视觉引导线。
	                length: 15,             // 在 label 位置 设置为'outside'的时候会显示视觉引导线。
	                length2: 10,            // 视觉引导项第二段的长度。
	                lineStyle: {            // 视觉引导线的样式
	                    //color: '#000',
	                    //width: 1
	                }
	            }
	        },
	        data: data                      // 系列中的数据内容数组。
	    }]
	};
	
	// 使用刚指定的配置项和数据显示图表
	chart1.setOption(option)

```



#### 3-1饼图之圆环

` 如果设置圆环背部填充背景色，可以在series中多加一个大对象用于控制内部填充显示颜色 `

![](.\/cicle.jpg)

```js
drawCircle () {
      const self = this
      let myChart = this.$echarts.init(
        document.getElementById('circle')
      )
      let option = {
        title: {},
        series: [
        {
            name: '分数',
            type: 'pie',
            radius: ['70%', '87%'],
            avoidLabelOverlap: false,
          itemStyle: {
            normal: {
              label: {
                show: true,
                  position: 'center',
                  // self.zsdf
                  formatter (par) {
                    let dom = self.zsdf
                    return dom
                  },
                  textStyle: {
                    color: this.fsColor,
                    fontSize: '45',
                    fontWeight: 'bolder'
                  }
                },
                rich: {
                  span: {
                    color: '#666',
                    fontSize: '15px'
                  }
                },
                labelLine: {
                  show: false
                },
                shadowBlur: 10,
                shadowColor: 'rgba(25,158,252,0.4)',
                shadowOffsetX: 5,
                shadowOffsetY: 5,

            }
            },
            data: [
              {
                value: this.zf - this.zsdf,
                name: '总数',
                itemStyle: {
                  normal: {
                    color: '#b7ddfb'
                  }
                }
              },
              {
                value: this.zsdf,
                name: '实际得分',
                itemStyle: {
                  normal: {// 颜色渐变
                    color: new echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                      [
                        {offset: 0, color: this.ajdfColor},
                        // {offset: 0.5, color: '#0CB9FF'},
                        {offset: 1, color: this.qtdfColor}
                      ]
                    )
                  }
                }
              }
            ]
          },
          { // 控制圆环内部填充显示颜色
            name: '',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '70%'],
            label: {
              position: 'inner'
            },
            labelLine: {
              show: false
            },
            itemStyle: {
             color:'#fff',
            },
            data: [
              {value: 100, name: ''}
            ]
          },
        ]
      }
      myChart.setOption(option)
    }
```





### 4、Echarts 雷达图

```js
 drawLdt(data, title) {
      const self = this;
      let arr = data.map((el) => {
        return { name: el.zblxmc, max: parseFloat(el.zgf) };
      });
      let arr1 = data.map((el) => {
        return parseFloat(el.fs);
      });
      let ldtechar = this.$echarts.init(document.getElementById("ldt"));
      let option = {
        tooltip: {
          formatter(params, id) {
            let stringlist = `${params.name}<br>`;
            for (let [i, item] of arr.entries()) {
              stringlist += `${item.name}：${params.value[i]}<br>`;
            }
            return stringlist;
          },
        },
        // legend: {
        //     data: [title],
        //     top: '20px',
        //     bottom:'20px'
        // },
        radar: {
          // shape: 'circle',
          radius: 120, //大小
          name: {
            textStyle: {
              color: "#666",
              fontSize: 16,
              padding: [3, 5],
            },
            formatter: function (par, index) {
              for (let item of data) {
                if (item.zblxmc == par) {
                  return `${par}({a|${item.fs}})`;
                }
              }
            },
            rich: {
              a: {
                color: "#037aea",
                fontSize: 16,
              },
            },
          },
          indicator: arr,
        },
        series: [
          {
            name: title,
            type: "radar",
            areaStyle: {
              normal: {
                color: "rgba(109,220,179,0.5)",
              },
            },
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#6ddcb3", // 图表中各个图区域的边框线颜色
                },
              },
            },
            symbol: "none", // 去掉图表中各个图区域的边框线拐点
            data: [
              {
                value: arr1,
                name: title,
              },
            ],
          },
        ],
      };
      ldtechar.setOption(option);
    },
```



### 5、hightCharts 3D饼图

```js
 var chart = Highcharts.chart('home-draw-pie', {
        chart: {
          type: 'pie',
          options3d: {
            enabled: true,
            alpha:50
          }
        },
        title:{
          verticalAlign: 'middle',
          floating: true,
          text: '<span style="color:#333;font-size:22px;line-height:20px;">考评总分</span>' + '<br/>' + '<br/>' + '<br/>' +'<span style="color:#fa4e2c;font-size:22px;">'+ total+'分</span>',
          y:40,
          x:0
        },
        credits:{
          enabled: false
        },
        plotOptions: {
          pie: {
            innerSize: '65%',
            depth: 65,
            dataLabels: {
              enabled: true,
              format: '<span style="color:#344145;font-size:16px;line-height:20px;">{point.name}</span><br/><span style="color:#2b6cc6;font-size:16px;">{point.y}分</span> ',
              style: {
                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
              },
              connectorColor:'#6ccceb', // 牵引线颜色
              connectorWidth: 2,
              connectorPadding:10,
              softConnector:false,
              verticalAlign: "top"
            },
          }
        },
        tooltip: {
          borderRadius: 10,
          borderWidth: 3,
          shadow: true,
          animation: true,
          style: {
            fontSize: "12px",
            fontWeight: "blod",
            fontFamily: "Courir new"
          },
          formatter:function () {
            return '<span style="color: '+ this.series.color + '">\u25CF</span> '+
              this.series.name+'<br/><b>'+ this.point.name +'<b/>:'+'<b>'+ this.y +'分<b/>'
          }
        },
        series: [{
          name: title,
          colors: ['#e8ab3b', '#e26b6a', '#1fd5b5','#2ea4e5' ],
          data: dateArr
        }]
      });
```

