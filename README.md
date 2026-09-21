# SVD LGDS — Learn Geeta Design System

A client pilot by **Studio Vitamin D** for **Learn Geeta**, pairing a Figma design system with React component implementations for developer handoff.

## Purpose

This pilot explores a design-to-development handoff that includes both the design system in Figma and a code version of its components. Learn Geeta’s developers will receive reusable React components alongside their design references, helping them translate the approved designs into the product with greater consistency.

## Planned deliverables

- **Figma design system:** component designs, variants, states, and shared visual foundations.
- **React components:** code implementations of the agreed components for the Learn Geeta project.
- **Shared design tokens:** colors, typography, spacing, and other foundations aligned with Figma.
- **Developer handoff documentation:** component APIs, usage examples, implementation notes, and relevant Figma references.

The component scope and implementation approach will be refined during the pilot.

## From Figma to React

1. Review the agreed Figma components, including their variants, states, and responsive behavior.
2. Identify shared tokens and reusable patterns.
3. Implement the components in React with clear APIs.
4. Check visual alignment, accessibility, and interaction behavior.
5. Document usage and implementation details for the Learn Geeta development team.

Figma references will be added as the pilot progresses.

## Project status

The pilot now has a Vite + React + TypeScript foundation with Tailwind CSS and Radian UI configured. Radian UI's editable Button, Badge, and Spinner components are available in `src/components/ui`. Additional components will be added as the Learn Geeta component scope is defined.

## Local setup

Project collaborators can clone the repository:

```bash
git clone https://github.com/StudiovitaminD/svd_lgds.git
cd svd_lgds
```

Install dependencies and start the local development server:

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

## Collaboration and handoff

This repository supports collaboration between Studio Vitamin D and the Learn Geeta project team. Track component requirements, implementation questions, and review feedback through project issues and pull requests. UI changes should include the relevant Figma reference, screenshots where useful, and a description of how the implementation was checked.

## Usage and permissions

This is a client project, not a freely reusable open-source component library. The current project does not grant a general license to use, copy, modify, or distribute its contents. Usage and delivery rights are governed by the applicable agreement with Learn Geeta; obtain permission before reuse outside that scope.
