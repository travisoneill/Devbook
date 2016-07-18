friends_query = <<-SQL

  SELECT u1.id
  FROM users AS u2
  JOIN friendships AS f
    ON u2.id = f.user_id2
  JOIN users AS u1
    ON u1.id = f.user_id1
  WHERE u2.id = 50

  UNION

  SELECT u2.id
  FROM users AS u1
  JOIN friendships AS f
    ON u1.id = f.user_id1
  JOIN users AS u2
    ON u2.id = f.user_id2
  WHERE u1.id = 50
  
SQL
