---
title: "Clean Architecture : principes et mise en pratique"
date: "2024-02-20"
description: "Exploration des principes de la Clean Architecture et comment les appliquer dans vos projets."
tags: ["architecture", "clean-code", "bonnes-pratiques"]
---

# Clean Architecture : principes et mise en pratique

La Clean Architecture, popularisée par Robert C. Martin, propose une organisation du code en couches concentriques avec une règle fondamentale : **les dépendances pointent vers l'intérieur**.

## Les couches

### Entités
Les règles métier les plus fondamentales de votre application. Elles ne dépendent de rien d'autre.

### Cas d'utilisation
L'orchestration des entités pour réaliser une action spécifique.

### Adaptateurs
La conversion entre le format des cas d'utilisation et celui du monde extérieur (base de données, API, UI).

### Infrastructure
Les détails techniques : frameworks, bases de données, services externes.

## En pratique

```typescript
// Entité
interface User {
  id: string;
  email: string;
  name: string;
}

// Cas d'utilisation
class CreateUser {
  constructor(private userRepo: UserRepository) {}

  async execute(data: CreateUserDTO): Promise<User> {
    const existing = await this.userRepo.findByEmail(data.email);
    if (existing) throw new Error('Email déjà utilisé');
    return this.userRepo.create(data);
  }
}
```

L'avantage principal : votre logique métier reste testable et indépendante de tout framework.
