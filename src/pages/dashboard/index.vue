<template>
  <el-card class="box-card table-card">
    <chart ref="chart1" :options="orgOptions" :auto-resize="false" style="width:100%;"></chart>
  </el-card>
</template>
<script>
import echarts from 'echarts';

export default {
  name: 'office-count-details',
  data() {
    return {
      orgOptions: {}
    };
  },
  methods: {
  },
  mounted() {
    this.$data.orgOptions = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true,
        itemStyle: {
          normal: {
            color: '#0070C1',
            areaStyle: {
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  { offset: 0, color: '#94cbea' },
                  { offset: 0.5, color: '#d6e9f4' },
                  { offset: 1, color: '#FFFFFF' }
                ]
              )
            }
          }
        }
      }]
    };
  }
};
</script>
<style lang="scss" scoped>

</style>

