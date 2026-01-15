---
title: "📝 Notes"
layout: archive
permalink: /categories/notes/
author_profile: true
sidebar_main: true
---

{% assign posts = site.categories.Notes %}
{% for post in posts %} 
  {% include archive-single2.html type=page.entries_layout %} 
{% endfor %}