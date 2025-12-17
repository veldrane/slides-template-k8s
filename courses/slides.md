---
# try also 'default' to start simple
theme: default
title: Kubernetes training
date: 15.1.2026
author: Jan Dvořák
email: jan.dvorak@rocketmail.com
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# apply UnoCSS classes to the current slide
layout: cover
# https://sli.dev/features/drawing
drawings:
  persist: false
transition: slide-left
mdc: true
duration: 40min
---


---
layout: simple
---

::header::

Co jsou kontejnery

::left::

- kontejner je izolovaný linuxový process
- není to VM!
- běží v kontextu operačního systému
    - jeho scheduleru
    - sdilí s ním zdroje.

::right::

```mermaid { scale: 0.8 }
%%{init: {
  "theme": "base",
  "themeVariables": {
    "background": "#121212",
    "primaryColor": "#f8f8f8",
    "primaryBorderColor": "#444",
    "lineColor": "#aaa",
    "fontFamily": "monospace"
  }
}}%%

block-beta
columns 1
  PID1
  space
  block:ID
    A["Container"]
    B["Process"]
    C["Container"]
    D["Process"]
  end
  Kernel
  Hardware
  PID1-->A
  PID1-->B
  PID1-->C
  PID1-->D
  style PID1 fill: var(--color-accent-soft)
  style A fill: var(--color-accent)
  style C fill: var(--color-accent)
```
---
layout: simple
---

::header::

Filosofie

::left::

- kontejner je process uzavřený v tzv. namespacech
- je spouštěn z tzv. image
- "vidí" omezené zdroje 
    - síťové interface
    - vlastní mountpointy
    - ipc, time domain, atd, apod
