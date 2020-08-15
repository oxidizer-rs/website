---
id: entity
title: Entity
sidebar_label: Entity
---

```rust
#[derive(Entity, Default)]
pub struct MyEntity {
    #[primary_key]
    id: i32,
    name: String,
}
```
