<template>
  <div id="he-plugin-standard"></div>
</template>

<script>
export default {
  name: 'weather',
  created () {
    window.WIDGET = {
      'CONFIG': {
        'layout': '1',
        'width': '450',
        'height': '150',
        'background': '1',
        'dataColor': 'FFFFFF',
        'borderRadius': '5',
        'key': '27703a6b6d2c496fb68f4013685c8729'
      }
    };
    (function (d) {
      var c = d.createElement('link')
      c.rel = 'stylesheet'
      c.href = 'https://widget.qweather.net/standard/static/css/he-standard.css?v=1.4.0'
      var s = d.createElement('script')
      s.src = 'https://widget.qweather.net/standard/static/js/he-standard.js?v=1.4.0'
      var sn = d.getElementsByTagName('script')[0]
      sn.parentNode.insertBefore(c, sn)
      sn.parentNode.insertBefore(s, sn)
    })(document)
  }
}
</script>
