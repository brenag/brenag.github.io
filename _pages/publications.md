---
layout: page
permalink: /publications/
title: publications
description: publications by categories in reversed chronological order.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

## Journal Publications

<div class="publications">

{% bibliography  --query @article %}

</div>

## Conference Proceedings

<div class="publications">

{% bibliography  --query @inproceedings %}

</div>
