---
title: How to execute an UPSERT with PostgreSQL
lang: en
date: 2018-04-11
meta:
  - name: description
    content: 'In cases where you do not want to handle unique constraint violation errors that are caused by duplicate entries, an UPSERT would be useful to have with PostgreSQL.'
  - name: keywords
    content: [PostgreSQL, Postgres, Upsert, 'Insert If Not Exists', SQL]
---

# How to execute an UPSERT with PostgreSQL

In cases where you do not want to handle unique constraint violation errors that are caused by duplicate entries, an UPSERT would be useful to have with PostgreSQL. An UPSERT is similar to an INSERT INTO ... IF NOT EXISTS.

In the following example, the `users` table has a primary key `id` and a `name`. By executing the following statement twice ...

```sql
INSERT INTO users (id, name) VALUES ('fbdf0e604e', 'jonas.havers');
```

... you will get a unique constraint violation error similar to this:

`Caused by: org.postgresql.util.PSQLException: ERROR: duplicate key value violates unique constraint [...]`

The [PostgresSQL INSERT documentation](https://www.postgresql.org/docs/9.5/static/sql-insert.html) specifies an [ON CONFLICT clause](https://www.postgresql.org/docs/9.5/static/sql-insert.html#SQL-ON-CONFLICT) as an alternative to raising a unique constraint or exclusion constraint violation error. There are two options from which you can choose:

* ON CONFLICT DO NOTHING
* ON CONFLICT DO UPDATE

When you use one of them, you won't get the duplicate key error again:

```sql
INSERT INTO users (id, name) VALUES ('fbdf0e604e', 'jonas.havers') ON CONFLICT DO NOTHING;
```

`ON CONFLICT DO NOTHING` is similar to an UPSERT.
