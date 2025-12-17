<template>
  <div class="slidev-layout split">
    <!-- HEADER -->
    <header class="header">
      <div class="header-left">
        <div class="bars" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div class="header-content">
          <slot name="header" />
        </div>
      </div>
    </header>

    <!-- MAIN -->
    <main class="content">
      <div class="left">
        <slot name="left" />
      </div>
      <div class="right">
        <slot name="right" />
      </div>
    </main>

    <!-- FOOTER -->
    <footer class="footer">
      <slot name="footer">
        <!-- default footer -->
        <span class="page">
          {{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}
        </span>
      </slot>
    </footer>
  </div>
</template>

<style scoped>
.slidev-layout.split {
  display: flex;
  flex-direction: column;
  height: 100%;
}

/* HEADER */
.header {
  padding: 24px 32px 12px 32px;
}

.header-left {
  display: flex;
  align-items: bottom;
  gap: 20px;
}

/* modré obdélníčky */
.bars {
  display: flex;
  gap: 8px;
}

.bars span {
  display: inline-block;
  background: #0b5c83;
  height: 42px;
}

.bars span:nth-child(1) { width: 36px; }
.bars span:nth-child(2) { width: 14px; }
.bars span:nth-child(3) { width: 6px; }

/* header text */
.header-content h1 {
  margin: 0;
  font-size: 3.5rem;
  font-weight: 500;
  color: #666;
  letter-spacing: -0.02em;
}

/* MAIN */
.content {
  flex: 1;
  display: flex;
}

.left,
.right {
  flex: 1;
  padding: 20px 32px;
  box-sizing: border-box;
}

/* FOOTER */
.footer {
  padding: 12px 32px;
  font-size: 0.8em;
  color: #777;
  display: flex;
  justify-content: flex-end;
}
</style>
