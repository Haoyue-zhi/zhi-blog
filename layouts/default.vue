<template>
  <div class="relative">
    <div
      class="bg-top bg-no-repeat h-[502px] w-full fixed -z-10"
      style="background-image: url('bg.svg')"
    ></div>
    <AppHeader />
    <slot />
    <AppFooter />
    <AppWidgetWrapper>
      <WidgetThemeSwitch />
    </AppWidgetWrapper>
  </div>
</template>
