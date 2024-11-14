---
isDraft: false
isPublic: true
title: 'DSA Observations'
publishDate: 2024-11-13
description: 'Some common tricks and edge cases in DSA problems'
tags: ["dsa"]
---

1. One edge case in case of array of numbers is, what if all numbers in the array are equal
2. IMPORTANT: While approaching a problem, think in opposite way.

    For example if you want to compute pair of numbers in an array which follow a certain condition, instead of computing these pairs, check for pairs which do not follow those conditions and subtract from total pairs.

    Useful in array, string, DP problems etc.

    Example problem:  [2563. Count the Number of Fair Pairs](https://leetcode.com/problems/count-the-number-of-fair-pairs/description/)
