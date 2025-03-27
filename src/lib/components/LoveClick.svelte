<script lang="ts">
  /**
   * @description 点击页面出现爱心特效
   */

  import { onMount } from 'svelte'

  /**
   * @description 爱心数组
   */
  const hearts: {
    el: HTMLElement
    x: number
    y: number
    scale: number
    alpha: number
    color: string
  }[] = []

  onMount(async () => {
    window.requestAnimationFrame = (() => {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
          setTimeout(callback, 1000 / 60)
        }
      )
    })()
    init()
  })

  /**
   * @description 初始化
   */
  const init = () => {
    css(
      ".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: absolute;}.heart:after{top: -5px;}.heart:before{left: -5px;}"
    )
    attachEvent()
    gameLoop()
  }

  /**
   * @description 循环
   */
  const gameLoop = () => {
    for (let i = 0; i < hearts.length; i++) {
      if (hearts[i].alpha <= 0) {
        document.body.removeChild(hearts[i].el)
        hearts.splice(i, 1)
        continue
      }
      hearts[i].y--
      hearts[i].scale += 0.004
      hearts[i].alpha -= 0.013
      hearts[i].el.style.cssText =
        'left:' +
        hearts[i].x +
        'px;top:' +
        hearts[i].y +
        'px;opacity:' +
        hearts[i].alpha +
        ';transform:scale(' +
        hearts[i].scale +
        ',' +
        hearts[i].scale +
        ') rotate(45deg);background:' +
        hearts[i].color
    }
    requestAnimationFrame(gameLoop)
  }

  /**
   * @description 绑定页面点击事件
   */
  const attachEvent = () => {
    const old = typeof window.onclick === 'function' && window.onclick
    window.onclick = event => {
      old && old()
      createHeart(event)
    }
  }

  /**
   * @description 创建爱心
   * @param event
   */
  const createHeart = (event: MouseEvent) => {
    const d = document.createElement('div')
    d.className = 'heart'
    hearts.push({
      el: d,
      x: event.clientX - 5,
      y: event.clientY - 5,
      scale: 1,
      alpha: 1,
      color: randomColor()
    })
    document.body.appendChild(d)
  }

  /**
   * @description 添加css样式
   * @param css
   */
  const css = (css: string) => {
    const style = document.createElement('style')
    style.appendChild(document.createTextNode(css))
    document.getElementsByTagName('head')[0].appendChild(style)
  }

  /**
   * @description 随机颜色
   * @returns {string} 颜色
   */
  const randomColor = (): string => {
    return (
      'rgb(' +
      ~~(Math.random() * 255) +
      ',' +
      ~~(Math.random() * 255) +
      ',' +
      ~~(Math.random() * 255) +
      ')'
    )
  }
</script>
