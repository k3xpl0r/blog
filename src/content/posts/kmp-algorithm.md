---
isDraft: true
isPublic: true
title: 'KMP Algorithm'
publishDate: 2024-11-13
description: 'Efficient String Matching Using KMP Algorithm'
tags: ["dsa", "kmp", "strings"]
---

This post will go over how string searching/matching can be made efficient using KMP Algorithm

## Naive Searching

Naive matching has complexity of O(n*m) in the worst case ( n = length of string, m = length of pattern )

Example of worst case:\
    &emsp; string: kkkkkkkkkkdd\
    &emsp; pattern: kkd

In the above case, naive way back tracks the pointer back to the next character of string even when there is a mismatch of a single character at the end of the pattern. Basically in the example case, discards the match of kk when third letter d is not matched

## KMP

KMP (Knuth-Morris-Pratt) is a much better algorithmn over naive n^2 matching. It searches presence of a smaller string within a larger string.

Inefficiency in the naive/brute force approach is, we are losing progress on already matched characters. If we can, somehow avoid this, we can make the algorithm much more efficient.

How do we avoid losing progress?

We create a array LPS ( Longest Prefix Suffix ) which stores index of the largest prefix that is also a suffix so far ( excluding i, so until i - 1 ) lps[i] in this LPS array, where i is the current index of the LPS array.

### Computing LPS

length of lps array = length of the pattern string

There is a catch in computing LPS array.

NOTE: Let's say we are at index i of LPS. We need to store the length of the longest prefix that is also a suffix so far. BUT the prefix cannot be the whole string [0, i]. It has to be [0, i). This is the reason, first value of the LPS array at lps[0] will always be 0.
