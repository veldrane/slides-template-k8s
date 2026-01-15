<script setup>
import { computed } from 'vue'

const fm = $frontmatter

const showTwist = computed(() => {
  // default: když není twistAt, ukážeme hned (zpětná kompatibilita)
  const at = Number(fm.twistAt ?? 0)
  if (!at) return true
  return ($slidev.nav.clicks ?? 0) >= at
})
</script>

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
        <div class="right-inner">
          <div class="right-top">
            <slot name="right" />
          </div>
          <div v-if="$slots.twist && showTwist" class="twist" role="note" aria-label="Important">
            <div class="twist-bars" aria-hidden="true">
              <span></span>
                <div class="twist-body">
                  <slot name="twist" />
                </div>
            </div>
          </div>
        </div>
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
  flex: 0 0 50%;
  color: var(--color-text-dark);
  padding: 20px 32px;
  box-sizing: border-box;
}

.right {
  color: var(--color-text-dark);
  flex: 0 0 50%;
  padding: 20px 32px;
  box-sizing: border-box;
}


.right-inner {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.right-top {
  flex: 1;
  min-height: 0;
}

/* IMPORTANT / PLOT TWIST box */
.twist {
  margin-top: auto; /* srazí to dolů */
  border-radius: 14px; /* míň kulaté než “pill” */
  padding: 14px 16px;
  position: relative;
  overflow: hidden;
}

/* accent “bars” jako v headeru, ale accent */
.twist-bars {
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
}

.twist-bars span {
  display: inline-block;
  background: var(--color-accent);
  height: 18px;
  opacity: 0.95;
}

.twist-bars span:nth-child(1) { width: 32px; }
.twist-bars span:nth-child(2) { width: 12px; }
.twist-bars span:nth-child(3) { width: 4px; }

.twist-body :deep(p) {
  margin: 0px;
  transform: translateY(-2px);
}

.twist-body :deep(ul) {
  margin: 0;
  transform: translateY(-2px);
  padding-left: 1.1em;
}

.twist-body :deep(li) {
  transform: translateY(-2px);
  margin: 0.15em 0;
}

/* když chceš fakt “prosvítit” accentem bez ošklivý linky */
.twist::before {
  content: "";
  position: absolute;
  inset: 0;
  opacity: 0.10;
  pointer-events: none;
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
