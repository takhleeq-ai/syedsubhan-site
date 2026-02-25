---
title: "Week 1: Why Evaluation Metrics Matter More Than Accuracy"
date: "2026-02-25"
summary: "Accuracy lies. Precision and recall tell the truth, especially in regulated domains like finance and health."
---

## Context
This week I built a baseline classifier and judged it by accuracy. It looked great, until I inspected the errors.

## Constraint
In regulated domains, the cost of a mistake is asymmetric. False positives and false negatives are not interchangeable.

## Diagnosis
Accuracy can look strong when classes are imbalanced. Precision and recall reveal the real story.

## Intervention
I shifted evaluation toward confusion matrix, precision, recall, and ROC-AUC where appropriate.

## Trade-off
Optimizing recall can reduce precision. Better outcomes require choosing the right metric for the domain.

## Systems Insight
In lending, a false positive can mean approving risk you can't price. In health workflows, a false negative can be dangerous. Metrics are product decisions.