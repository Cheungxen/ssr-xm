<template>
  <div class="location">
    <span>{{ $store.state.address.location.province }}</span>
    <span>{{ $store.state.address.location.city }}</span>
    <span>{{ $store.state.address.location.district }}</span>
    <span>{{ $store.state.address.location.township }}</span>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data() {
    return {
      key: '5e3ce3c47e418d6f997504973209b44f'
    }
  },
  mounted() {
    const self = this
    window.onmaploaded = function () {
      const mapObj = new AMap.Map('iCenter')
      Vue.prototype.$AMap = AMap
      mapObj.plugin(['AMap.Geolocation', 'AMap.Geocoder'], function () {
        const geolocation = new AMap.Geolocation({
          enableHighAccuracy: true, // 是否使用高精度定位，默认:true
          timeout: 10000, // 超过10秒后停止定位，默认：无穷大
          maximumAge: 0, // 定位结果缓存0毫秒，默认：0
          convert: true, // 自动偏移坐标，偏移后的坐标为高德坐标，默认：true
          showButton: true, // 显示定位按钮，默认：true
          buttonPosition: 'LB', // 定位按钮停靠位置，默认：'LB'，左下角
          buttonOffset: new AMap.Pixel(10, 20), // 定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          showMarker: true, // 定位成功后在定位到的位置显示点标记，默认：true
          showCircle: true, // 定位成功后用圆圈表示定位精度范围，默认：true
          panToLocation: true, // 定位成功后将定位到的位置作为地图中心点，默认：true
          zoomToAccuracy: true // 定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        })
        mapObj.addControl(geolocation)
        geolocation.getCurrentPosition()
        AMap.event.addListener(geolocation, 'complete', self.onComplete)// 返回定位信息
        AMap.event.addListener(geolocation, 'error', self.onError) // 返回定位出错信息
      })
    }

    const url = `https://webapi.amap.com/maps?v=1.4.15&key=${self.key}&callback=onmaploaded`
    const jsapi = document.createElement('script')
    jsapi.charset = 'utf-8'
    jsapi.src = url
    document.head.appendChild(jsapi)
  },
  methods: {
    onComplete(e) {
      const tempObj = {
        province: e.addressComponent.province,
        city: e.addressComponent.city,
        district: e.addressComponent.district,
        township: e.addressComponent.township
      }
      this.$store.dispatch('address/setLocation', tempObj)
    },
    onError(e) {
      console.log('==> error')
    }
  }
}
</script>

<style>

</style>
