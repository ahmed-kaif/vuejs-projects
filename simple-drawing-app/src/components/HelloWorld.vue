<template>
  <div class="hello">
    <span>{{ x }},{{ y }}</span>
    <h1>{{ msg }}</h1>
    <canvas
      id="myCanvas"
      height="500"
      width="800"
      @mousemove="draw"
      @mousedown="beginDrawing"
      @mouseup="stopDrwaing"
    ></canvas>
    <button @click="clear">Clean</button>
  </div>
</template>

<script>
export default {
  name: 'Draw',
  props: {
    msg: String,
  },
  data() {
    return {
      canvas: null,
      x: 0,
      y: 0,
      isDrwaing: false,
    }
  },
  methods: {
    clear() {
      this.canvas.clearRect(0, 0, 800, 500)
    },
    drawLine(x1, y1, x2, y2) {
      let ctx = this.canvas
      ctx.beginPath()
      ctx.strokeStyle = 'black'
      ctx.lineWidth = 1
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)
      ctx.stroke()
      ctx.closePath()
    },
    beginDrawing(e) {
      this.x = e.offsetX
      this.y = e.offsetY
      this.isDrwaing = true
    },
    stopDrwaing() {
      this.x = 0
      this.y = 0
      this.isDrwaing = false
    },
    draw(e) {
      if (this.isDrwaing) {
        this.drawLine(this.x, this.y, e.offsetX, e.offsetY)
        this.x = e.offsetX
        this.y = e.offsetY
      }
    },
  },
  mounted() {
    let c = document.getElementById('myCanvas')
    this.canvas = c.getContext('2d')
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#myCanvas {
  border: 1px solid black;
}
</style>
