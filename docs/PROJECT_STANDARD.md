# SkillBridge Academy Project Standard
**Version:** MVP 1.0  
**Status:** Official Development Standard  
**Organization:** SkillBridge Academy – Educational Technology Company (EdTech)

---

# Mission

SkillBridge Academy exists to help learners acquire real-world skills, build evidence of mastery, and connect those skills to meaningful educational and career opportunities.

Our platform is not simply an online course website—it is an integrated educational ecosystem powered by the **SkillBridge Bridge Learning Operating System (SBLOS)**.

---

# Vision

> **Learn. Practice. Build. Master. Apply. Research. Teach. Innovate.**

Every feature, page, and service must contribute to this learning journey.

---

# Core Philosophy

The platform consists of four major pillars:

```
SkillBridge Academy
│
├── Student Platform
├── Instructor Platform
├── Administration Platform
└── SBLOS (Learning Operating System)
```

SBLOS is the **single source of truth** for all learning logic.

---

# Architecture

```
                    SkillBridge Academy
            Educational Technology Company

                     Student Platform
                           │
                    Instructor Platform
                           │
                    Administration
                           │
                           ▼

=====================================================
        SBLOS (SkillBridge Learning Operating System)
=====================================================

Progress Engine
Mastery Engine
Assessment Engine
XP Engine
Achievement Engine
Portfolio Engine
Recommendation Engine
Luminery Engine
Certification Engine
Analytics Engine
Talent Bridge Engine

=====================================================
                           │
                           ▼

                Curriculum Library

=====================================================

Courses
Lessons
Assessments
Practice Activities
Projects
Portfolio Tasks
Research
Career Content

=====================================================
```

---

# Platform Modules

## 1. Student Platform

Students interact with:

- Dashboard
- Courses
- Lessons
- Assessments
- Progress
- Portfolio
- Research
- Certifications
- Career Readiness
- Luminery

---

## 2. Instructor Platform

Teachers create and manage learning through:

- Course Builder
- Lesson Builder
- Assessment Builder
- Student Analytics
- Course Analytics
- Reports
- AI Teaching Assistant

---

## 3. Administration

Administration manages:

- Users
- Schools
- Organizations
- Permissions
- System Analytics
- Content Approval

---

## 4. SBLOS

SBLOS contains all educational business logic.

It is responsible for:

- Progress Tracking
- Mastery Calculation
- Quiz Evaluation
- XP Calculation
- Unlocking Lessons
- Achievement Tracking
- Recommendations
- Portfolio Evaluation
- Certification
- Analytics
- Talent Bridge Integration

---

# Curriculum Library

The Library contains educational content only.

Examples:

```
library/

Mathematics/
Computer Science/
Artificial Intelligence/
Data Analytics/
Robotics/
Business/
Research/
Projects/
```

The Library **never calculates**:

- Progress
- XP
- Mastery
- Achievements
- Recommendations

It only stores educational content.

---

# SBLOS Responsibilities

Everything educational flows through SBLOS.

```
Lesson
      │
      ▼
Assessment
      │
      ▼
Mastery Engine
      │
      ▼
Progress Tracker
      │
      ▼
Dashboard
```

No page should calculate educational logic independently.

---

# Talent Bridge

Talent Bridge connects learning with opportunity.

It provides:

- Career Readiness
- Internship Matching
- Employer Connections
- University Connections
- Mentor Network
- Portfolio Review
- Skill Verification

Talent Bridge uses verified data from SBLOS.

---

# Luminery

Luminery is the AI learning companion.

Responsibilities include:

- Personalized learning recommendations
- Study coaching
- Motivation
- Learning insights
- Career guidance
- Research suggestions

Luminery reads learning data from SBLOS.

---

# Learning Model

Every course follows the same educational framework.

```
Learn
    ↓
Practice
    ↓
Build
    ↓
Master
    ↓
Apply
    ↓
Research
    ↓
Portfolio
    ↓
Talent Bridge
```

---

# Standard Lesson Structure

Every lesson should follow the same schema.

```
Lesson

Hero

Learning Objectives

Why It Matters

Learn

Practice

Build

Master

Apply

Research

Portfolio Evidence

Career Connection

Luminery Coach

Next Lesson
```

All future lessons must follow this structure.

---

# Development Standards

## Rule 1

Pages do **not** contain business logic.

Examples:

- Dashboard
- LessonPage
- CourseDetail
- Student Dashboard

Pages display information only.

---

## Rule 2

SBLOS owns all educational logic.

No duplicate calculations are allowed.

Incorrect:

```
Dashboard calculates XP

Lesson calculates XP

Course page calculates XP
```

Correct:

```
Dashboard

        │

Lesson

        │

Course

        │

        ▼

      SBLOS

        │

        ▼

XP
```

---

## Rule 3

The Library stores educational content only.

Never place educational calculations inside the Library.

---

## Rule 4

Every feature integrates with SBLOS.

Examples:

- Progress
- Quizzes
- Mastery
- XP
- Portfolio
- Recommendations
- Dashboard
- Talent Bridge

Everything connects through SBLOS.

---

## Rule 5

Every component has a single responsibility.

Example:

```
CourseCard

Displays course information only.
```

```
ProgressTracker

Calculates progress only.
```

---

## Rule 6

Every feature must be reusable.

Avoid duplicate logic.

---

## Rule 7

One source of truth.

Progress exists in one place.

XP exists in one place.

Mastery exists in one place.

Lesson completion exists in one place.

---

## Rule 8

Builder pages never duplicate student pages.

Builders create educational content.

Student pages consume educational content.

---

# File Organization

```
src/

academy/
    sblos/
        ProgressTracker
        MasteryEngine
        QuizEvaluator
        UnlockEngine
        XPEngine
        AchievementEngine
        RecommendationEngine
        LumineryEngine
        TalentBridgeEngine

library/
    courses/
    lessons/
    assessments/
    portfolio/
    research/
    careers/

builders/
    CourseBuilder/
    LessonBuilder/
    AssessmentBuilder/

pages/
    Dashboard/
    Lesson/
    Course/
    Instructor/
    Administration/

components/

services/

hooks/

utils/
```

---

# Development Workflow

Every file review follows this process.

```
GOOD

↓

Keep the file

↓

Test

↓

Commit
```

or

```
REPLACE

↓

Replace entire file

↓

Test

↓

Commit
```

No partial patches.

No guessing.

One file at a time.

---

# MVP Goal

The MVP is complete when the following workflow functions end-to-end:

```
Student Login

        ↓

Dashboard

        ↓

Course

        ↓

Lesson

        ↓

Assessment

        ↓

SBLOS

        ↓

Progress Updated

        ↓

Dashboard Refresh

        ↓

Portfolio Updated

        ↓

Talent Bridge Ready
```

---

# Long-Term Vision

SkillBridge Academy will become a comprehensive educational technology ecosystem where:

- Students learn practical skills.
- Teachers build engaging learning experiences.
- AI provides personalized guidance through Luminery.
- SBLOS measures mastery and growth.
- Talent Bridge connects verified skills with internships, universities, mentors, and employers.

Every architectural decision should support this vision.

---

# Guiding Principle

> **One Platform. One Curriculum Library. One SBLOS. One Learning Journey.**

Every feature added to SkillBridge Academy must strengthen this principle.