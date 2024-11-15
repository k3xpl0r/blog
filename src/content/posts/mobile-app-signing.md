---
isDraft: true
isPublic: false
title: 'UI for React Native SQLite'
publishDate: 2024-11-15
description: 'Mobile app signing process for iOS and Android'
tags: ["react-native", "mobile", "android", "ios", "signing", "distribution"]
---

I'll go over how Mobile Apps are signed for distribution on iOS and Android platforms.

## Why do we need Code Signing

My first question when I was getting started in mobile development was why do we have to go through this hassle of code signing in the first place. What advantages or security features does it bring to the table. To answer that, imagine this case where someone could modify your app to inject malware and distribute as your app. How do we verify who are the intended authors of the app?
