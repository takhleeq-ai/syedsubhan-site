---
title: "Week 4 — When the Model Doesn’t Decide"
date: "2026-03-30"
description: "Moving from decisions to scores, and why ranking matters more than thresholds."
---

Last week, I changed the threshold.

This week, I removed it entirely.

And something interesting happened:

The model never actually made decisions.

It only produced scores.

Every prediction was a probability — a ranking of how likely something was to be positive.

The “decision” only appeared when I introduced a threshold.

That shift changes how I think about these systems.

In real-world environments like fraud detection, credit risk, or affordability:

We don’t rely on a single threshold.

We:
- prioritise the highest-risk cases  
- review different score bands differently  
- apply different actions at different levels  

Which means the real question is not:

**“Is the prediction correct?”**

But:

**“How well does the model rank what matters?”**

A model can look accurate, behave differently at different thresholds, and still rank poorly.

This week, I’m exploring ROC curves, precision-recall curves, and what they reveal about model quality beyond a single decision point.

Full write-up and experiment coming later this week.
