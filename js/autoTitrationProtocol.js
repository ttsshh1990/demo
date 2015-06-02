$("document").ready(function () {
	require.config({
        paths: {
            echarts: './js'
        }
    });

    require(
        [
            'echarts',
            'echarts/chart/bar',
            'echarts/chart/line',
            'echarts/chart/map'
        ],
        function (ec) {
            //--- 折柱 ---
            var myChart = ec.init(document.getElementById('main'));
            myChart.setOption({
            	 title : {
			        text: 'Simulator'
			        // subtext: 'Auto Titration Protocol'
			    },
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    data:['flow Rate']
                },
                // toolbox: {
                //     show : true,
                //     feature : {
                //         mark : {show: true},
                //         dataView : {show: true, readOnly: false},
                //         magicType : {show: true, type: ['line', 'bar']},
                //         restore : {show: true},
                //         saveAsImage : {show: true}
                //     }
                // },
                calculable : true,
                xAxis : [
                    {
                        type : 'category',
                        data : ['1','2','3','4','5','6','7','8','9','10','11','12']
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        axisLabel : {
                		formatter: '{value}'
            			},
                        splitArea : {show : true}
                    }
                ],
                series : [
                    {
                        name:'FR',
                        type:'line',
                        data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                        // markPoint : {
		             //    data : [
		             //        {type : 'max', name: '最大值'},
		             //        {type : 'min', name: '最小值'}
			            //     ]
			            // },
			            markLine : {
			                data : [
			                    {type : 'average', name: 'average'}
			                ]
			            }
                    }
                ]
            });
        }
    );
	var running = false;
	var stopFlag = false;
	var sec = 0;
	function timer(){
		
		sec++;
		setTimeout(timer,1000);
	};

	$(".start-button").click(function(){
		sec = 0;
		timer();
	});
})


