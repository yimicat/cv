<script>
  import headImg from '$lib/assets/head.png'
  import ercode from '$lib/assets/ercode.jpg'
  import { _ } from 'svelte-i18n'
</script>

<div class="flex items-center justify-between">
  <div class="flex-1 space-y-1.5">
    <h1 class="text-2xl font-bold">{$_('Top.name')}</h1>
    <p class="max-w-md text-pretty text-sm text-muted-foreground font-mono">
      {@html $_('Top.intro')}
    </p>
    <p class="max-w-md items-center text-pretty text-xs text-muted-foreground font-mono">
      <a
        class="inline-flex gap-x-1 align-baseline leading-none hover:underline"
        href="https://yimicat.com"
        target="_blank"
      >
        <i class="i-lucide-home size-2.8"></i>
        https://yimicat.com
      </a>
    </p>
    <div class="flex gap-x-1 pt-1 text-sm text-muted-foreground font-mono print:hidden">
      <a
        href="mailto:yimicat@qq.com"
        aria-label="Email"
        class="size-8 inline-flex items-center justify-center whitespace-nowrap border border-input rounded-md bg-background text-sm font-medium ring-offset-background transition-colors disabled:(pointer-events-none opacity-50) hover:(bg-accent text-accent-foreground) focus-visible:(outline-none ring-2 ring-offset-2 ring-ring)"
      >
        <i class="i-ic-baseline-email"></i>
      </a>
      <!--            <a href="tel:+86" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground size-8">-->
      <!--               <i class="i-mingcute-phone-fill size-4.5"></i>-->
      <!--            </a>-->
      <a
        href="https://github.com/yimicat"
        aria-label="github"
        class="size-8 inline-flex items-center justify-center whitespace-nowrap border border-input rounded-md bg-background text-sm font-medium ring-offset-background transition-colors disabled:(pointer-events-none opacity-50) hover:(bg-accent text-accent-foreground) focus-visible:(outline-none ring-2 ring-offset-2 ring-ring)"
      >
        <i class="i-mdi-github size-4.5"></i>
      </a>
      <!--            <a href="tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=787722499" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground size-8">-->
      <!--                <i class="i-mdi-qqchat size-4.3"></i>-->
      <!--            </a>-->
      <span
        class="group relative size-8 inline-flex items-center justify-center whitespace-nowrap border border-input rounded-md bg-background text-sm font-medium ring-offset-background transition-colors disabled:(pointer-events-none opacity-50) hover:(bg-accent text-accent-foreground) focus-visible:(outline-none ring-2 ring-offset-2 ring-ring)"
      >
        <i class="hover:group i-mingcute-wechat-fill size-4.5"></i>
        <span
          class="absolute left-0 top-0 hidden h-30 w-30 border border-muted rounded-md p-1 opacity-0 transition-opacity ease-in-out group-hover:(block opacity-100)"
        >
          <img src={ercode} alt="" class="dark:invert" />
        </span>
      </span>
    </div>
    <!-- print start -->
    <div class="hidden flex-col text-pretty text-xs text-muted-foreground font-mono print:flex">
      <a
        class="inline-flex gap-x-1 align-baseline leading-none"
        href="mailto:yimicat@qq.com"
        target="_blank"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="size-3.5">
          <path
            fill="currentColor"
            d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"
          />
        </svg>
        yimicat@qq.com
      </a>
      <!--            <a href="tel:+86" class="inline-flex gap-x-1 align-baseline leading-none">-->
      <!--                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="size-3.5">-->
      <!--                    <g fill="none" fill-rule="evenodd">-->
      <!--                        <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />-->
      <!--                        <path fill="currentColor" d="M16.552 22.133c-1.44-.053-5.521-.617-9.795-4.89c-4.273-4.274-4.836-8.354-4.89-9.795c-.08-2.196 1.602-4.329 3.545-5.162a1.47 1.47 0 0 1 1.445.159c1.6 1.166 2.704 2.93 3.652 4.317a1.504 1.504 0 0 1-.256 1.986l-1.951 1.449a.48.48 0 0 0-.142.616c.442.803 1.228 1.999 2.128 2.899c.901.9 2.153 1.738 3.012 2.23a.483.483 0 0 0 .644-.162l1.27-1.933a1.503 1.503 0 0 1 2.056-.332c1.407.974 3.049 2.059 4.251 3.598a1.47 1.47 0 0 1 .189 1.485c-.837 1.953-2.955 3.616-5.158 3.535" />-->
      <!--                    </g>-->
      <!--                </svg>-->
      <!--                12-->
      <!--            </a>-->
      <span class="inline-flex gap-x-1 align-baseline leading-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="size-3.5">
          <g fill="none" fill-rule="evenodd">
            <path
              d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
            />
            <path
              fill="currentColor"
              d="M16 10c3.154 0 6 2.186 6 5.213c0 1.696-.92 3.153-2.26 4.08c-.044.265-.008.532-.008.799a.903.903 0 0 1-.897.908c-.68 0-1.31-.224-1.843-.645a6.895 6.895 0 0 1-.992.071c-3.154 0-6-2.186-6-5.213S12.846 10 16 10M9.5 3c3.777 0 7.149 2.535 7.474 6.062A7.686 7.686 0 0 0 16 9c-3.533 0-7 2.473-7 6.209c0 .354.031.697.09 1.027a8.506 8.506 0 0 1-.926-.094c-.67.549-1.443.858-2.31.858c-.518 0-.937-.434-.937-.97l.004-.197l.017-.397a2.103 2.103 0 0 0-.055-.59C3.17 13.667 2 11.794 2 9.624C2 5.807 5.525 3 9.5 3M14 13a1 1 0 1 0 0 2a1 1 0 0 0 0-2m4 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2M7 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2m5 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2"
            />
          </g>
        </svg>
        yimi__cat
      </span>
      <span class="inline-flex gap-x-1 align-baseline leading-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="size-3.5">
          <path
            fill="currentColor"
            d="M3.18 13.54c.58-1.38 1.39-2.4 1.99-2.62c-.01-.8.14-1.3.39-1.7c0-.03-.06-.36.16-.77C5.87 4.85 8.21 2 12 2s6.13 2.85 6.28 6.45c.22.41.16.74.16.77c.25.4.4.9.39 1.7c.6.22 1.41 1.24 1.99 2.63c.75 1.76.87 3.45.27 3.75c-.41.2-1.06-.3-1.67-1.18c-.24.98-.84 1.88-1.69 2.59c.9.33 1.48.87 1.48 1.48c0 1-1.58 1.81-3.52 1.81c-1.76 0-3.19-.66-3.48-1.5h-.42c-.29.84-1.72 1.5-3.48 1.5c-1.94 0-3.52-.81-3.52-1.81c0-.61.58-1.15 1.48-1.48c-.85-.71-1.45-1.61-1.69-2.59c-.61.88-1.26 1.38-1.67 1.18c-.6-.3-.48-1.99.27-3.76"
          />
        </svg>
        953660081
      </span>
    </div>
    <!-- print end -->
  </div>
  <span class="relative h-30 flex overflow-hidden rounded-lg bg-[#5379cdff] dark:bg-pink-600">
    <img class="w-full" alt="Yimi" src={headImg} />
  </span>
</div>
