---
title: "Week 5 — The Threshold Is a Product Decision"
description: "A reflection on how machine learning scores become real-world product, risk, and business decisions through thresholds."
date: "2026-06-06"
tags:
  - AI
  - Machine Learning
  - Fintech
  - Product Management
  - Risk
---

# Week 5 — The Threshold Is a Product Decision

After a short break, I am returning to the AI learning journey with Week 5.

The timing actually works quite well.

The first four weeks helped me understand the mechanics of a basic machine learning workflow:

- building a first classification model
- looking beyond accuracy
- understanding precision and recall
- exploring ROC and Precision-Recall curves
- recognising that models usually produce scores, not final decisions

Week 5 builds directly on that idea.

The key lesson this week is simple:

**The threshold is not just a technical setting. It is a product decision.**

## Models Usually Produce Scores

A classification model often gives us a probability or score.

For example, a model might say:

- this transaction has a 0.82 fraud risk score
- this applicant has a 0.64 affordability risk score
- this customer has a 0.71 likelihood of default
- this case has a 0.58 probability of needing review

But the model has not yet made the final decision.

The decision happens when the system applies a threshold.

For example:

- above 0.80: block
- between 0.50 and 0.80: manual review
- below 0.50: allow

That threshold turns a score into an action.

## Moving the Threshold Changes the System

Changing the threshold changes how the system behaves.

A stricter threshold may reduce false positives, but it may also allow more risky cases through.

A looser threshold may catch more risk, but it may also create friction for good customers.

This is where the problem becomes more than a modelling exercise.

The threshold affects:

- customer experience
- operational workload
- fraud losses
- approval rates
- manual review volumes
- regulatory and audit outcomes

In other words, the threshold connects the model to the business.

## Why This Matters in Fintech

In financial systems, threshold decisions can have real consequences.

In fraud detection, the wrong threshold may either miss fraud or block legitimate customers.

In affordability checks, a threshold may influence whether someone is approved, declined, or asked for more evidence.

In credit risk, threshold design affects both portfolio risk and customer access.

In onboarding, thresholds can decide whether a customer moves smoothly through the journey or gets pulled into manual review.

This is why I am starting to see AI systems less as “models” and more as decision systems.

The model is only one part of the architecture.

The surrounding decision logic matters just as much.

## The Question Is Not Only “Is the Model Good?”

A common instinct is to ask:

**How accurate is the model?**

But Week 5 has made me think the better questions are:

**What action does this score trigger?**

**What mistakes are we trying to minimise?**

**What level of risk are we willing to accept?**

**What happens to customers near the boundary?**

**Who owns the threshold decision?**

These questions feel especially important in regulated environments.

A threshold should not be an invisible technical default.

It should be explainable, reviewed, monitored, and connected to the intended business outcome.

## This Week’s Learning

My main takeaway from Week 5 is this:

**A model produces a score. A product makes a decision.**

The threshold is where those two worlds meet.

That is why threshold design belongs in the conversation between data science, product, risk, compliance, operations, and engineering.

It is not just a parameter.

It is policy expressed in code.