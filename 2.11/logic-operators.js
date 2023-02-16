// здесь первые 5 задач раздела

alert(null || 2 || undefined); // true

alert(alert(1) || 2 || alert(3)); // 1, потом 3

alert(1 && null && 2); // null

alert(alert(1) && alert(2)); // 1, потом undefined

alert(null || 2 && 3 || 4); // 3
