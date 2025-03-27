<script>
  import { onMount } from 'svelte'
  let show = false
  onMount(() => {
    const form = document.getElementById('form')
    const corner = document.getElementById('corner')
    const text = document.getElementById('text')

    if (form == null || corner == null || text == null) {
      return
    }
    const ftop = form.offsetTop
    const fleft = form.offsetLeft
    let switchopen = 0
    // corner.onmousedown = function (e) {
    //     e.preventDefault();
    //     form.style.cursor = "move";
    //     switchopen = 1;
    // }
    // form.onmousemove = function (e) {
    //     if (switchopen == 1) {
    //         if (e.pageX - fleft > 90 || e.pageY - ftop > 90) {
    //             corner.style.width = corner.style.height = 90 + "px";
    //             corner.style.left = corner.style.top = -4 + "px"
    //         } else {
    //             corner.style.width = corner.style.height = e.pageY - ftop + "px";
    //         }
    //     }
    // }
    // form.onmouseup = function () {
    //     switchopen = 0;
    //     this.style.cursor = "default";
    // }
    form.onmouseenter = function () {
      corner.style.width = corner.style.height = 90 + 'px'
      corner.style.left = corner.style.top = -4 + 'px'
      text.style.opacity = '1'
    }
    form.onmouseleave = function () {
      corner.style.width = corner.style.height = 63 + 'px'
      corner.style.top = corner.style.left = '-4px'
      text.style.opacity = '0'
    }
  })
</script>

<div class="form print:hidden" id="form">
  <div class="corner" id="corner"></div>
  <div class="absolute ml-1 mt-4 rotate-315 text-center text-[9px] color-white dark:color-black">
    <p>by SvelteKit</p>
    <p id="text" class="mt-0.5 transition-all ease-in-out">(´▽`ʃ❤️ƪ)</p>
  </div>
</div>

<style lang="scss">
  .form {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99999;
    width: 200px;
    height: 100px;
    overflow: hidden;
  }

  .corner {
    position: absolute;
    top: -4px;
    left: -4px;
    width: 63px;
    height: 63px;
    overflow: hidden;
    background: linear-gradient(
      45deg,
      #fff 24%,
      rgb(95 95 95 / 50%) 40%,
      rgb(111 111 111 / 50%) 43%,
      rgb(95 95 95 / 50%) 46%,
      #2f2f2f 20%,
      #000 100%,
      #fff
    );
    border-radius: 0 0 0 90px / 0 0 0 30px;
    box-shadow: 5px 2px 8px rgb(0 0 0 / 38%);
    transition: all 0.3s linear 0s;
    transform: rotate(-90deg);
  }

  .corner::after {
    position: absolute;
    top: -15px;
    left: -82px;
    z-index: 1;
    width: 100%;
    height: 100%;
    content: '';
    background: rgb(47 47 47 / 23%);
    border-radius: 90px 90px 0 0 / 40px 40px 0 0;
    box-shadow: 0 0 3px rgb(0 0 0 / 16%) inset;
    transform: rotate(77deg);
  }

  .dark .form .corner {
    background: linear-gradient(
      45deg,
      #1d1d1d 24%,
      #323232 40%,
      #393939 43%,
      #5f5f5f 46%,
      #2f2f2f 50%,
      #fff 0%,
      #fff 0%
    );
  }

  .dark .form .corner::after {
    background: rgb(3 7 18);
    box-shadow: 0 0 3px rgb(150 150 150 / 57%) inset;
  }

  #text {
    opacity: 0;
    transition: opacity 0.3s;
  }
</style>
