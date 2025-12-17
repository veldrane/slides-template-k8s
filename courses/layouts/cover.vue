<template>
  <div class="slidev-layout cover">
    <!-- MAIN -->
    <main class="content">
      <div class="title">
        <slot name="header" />
        {{ $frontmatter.title }}
      </div>
      <div class="author">
        <slot name="author" />
        {{ $frontmatter.author }}
      </div>
    </main>
  </div>
</template>

<style scoped>
.slidev-layout.cover {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--color-primary);
}

/* MAIN */
.content {
  flex: 1;
  background: var(--color-primary);
  display: flex;
  flex-direction: column;   /* <-- tohle chybělo */
  justify-content: center;  /* vertikální centrování obsahu */
  align-items: flex-start;  /* nebo center, jak chceš */
  font-family: monospace;
  letter-spacing: 0.02em;   /* 0.15em je hrozně moc */
  padding-left: 64px;       /* hezčí než margin: 50px */
}

.title {
  margin: 1px;
  font-size: 1.6rem;   /* sem saháš, když chceš větší/menší titulek */
  font-weight: 500;
  color: var(--color-text-light);
  letter-spacing: -0.02em;
  align-items: baseline;
  gap: 10px;             /* menší mezera */
  white-space: nowrap;
}

.author {
  margin: 1px;
  font-size: 1.0rem;   /* sem saháš, když chceš větší/menší titulek */
  font-weight: 500;
  color: var(--color-text-light);
  letter-spacing: -0.02em;
  align-items: baseline;
  gap: 10px;              /* menší mezera */
}

.date {
  margin: 1px;
  font-size: 1.0rem;   /* sem saháš, když chceš větší/menší titulek */
  font-weight: 500;
  color: var(--color-text-light);
  letter-spacing: -0.02em;
  align-items: baseline;
  gap: 10px;              /* menší mezera */
}


</style>
