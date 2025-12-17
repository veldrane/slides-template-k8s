<template>
  <div class="slidev-layout simple">
    <!-- HEADER -->
    <header class="header">
      <div class="header-left">
        <div class="bars" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h1 class="title">
          <span
            v-if="$frontmatter.kind"
            class="label"
          >
            [ {{ $frontmatter.kind }} ]
          </span>

          <span class="title-text">
            <slot name="header" />
          </span>
        </h1>
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
        <span class="footer-right">
          {{ $slidev.configs.email }}
        </span>
      </slot>
    </footer>
  </div>
</template>

<style scoped>



.slidev-layout.simple {
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
  align-items: center;
  gap: 20px;
}

/* modré obdélníčky */
.bars {
  display: flex;
  gap: 8px;
}

.bars span {
  display: inline-block;
  background: var(--color-primary);
  height: 42px;
}

.bars span:nth-child(1) { width: 36px; }
.bars span:nth-child(2) { width: 14px; }
.bars span:nth-child(3) { width: 6px; }

/* h1 už neurčuje velikost textu */
.title {
  margin: 0;
  display: flex;
  align-items: baseline;
  gap: 10px;              /* menší mezera */
}

/* TITLE – tady řídíš velikost titulku */
.title-text {
  font-size: 1.6rem;   /* sem saháš, když chceš větší/menší titulek */
  font-weight: 500;
  color: var(--color-text-title);
  letter-spacing: -0.02em;
}

/* LABEL – nezávislý na title */
.label {
  font-family: monospace;
  font-size: 1.6rem;     /* fixní velikost (nezávislá) */
  letter-spacing: 0;      /* žádný tracking */
  color: #0b5c83;            /* stejné jako title - asi zmenime */ 
  opacity: 0.7;           /* ať je to meta */
  white-space: nowrap;
}

/* MAIN */
.content {
  flex: 1;
  display: flex;
}

.left {
  flex: 0 0 60%;
  color: var(--color-text-dark);
  padding: 20px 32px;
  box-sizing: border-box;
}

.right {
  color: var(--color-text-dark);
  flex: 0 0 40%;
  padding: 20px 32px;
  box-sizing: border-box;
}

/* FOOTER */
.footer {
  padding: 12px 32px;
  font-size: 0.8em;
  color: var(--color-text-dark);
  display: flex;
  justify-content: flex-end;
}
</style>
