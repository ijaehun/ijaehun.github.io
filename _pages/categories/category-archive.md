---
title: "🔗 Archive"
layout: archive
permalink: /categories/archive/
author_profile: true
sidebar_main: true
---

{% assign posts = site.categories.Archive %}
{% for post in posts %} 
  {% include archive-single2.html type=page.entries_layout %} 
{% endfor %}