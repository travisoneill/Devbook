posts_query = <<-SQL

  SELECT u1.id, u1.full_name, u2.id, u2.full_name, p.id, p.user_id, c.id, c.user_id, u3.id, u3.full_name
  FROM users AS u1
  JOIN friendships AS f
    ON u1.id = f.user_id1
  JOIN users AS u2
    ON u2.id = f.user_id2
  JOIN posts AS p
    ON u2.id = p.user_id
  JOIN comments AS c
    ON c.post_id = p.id
  JOIN users as u3
    ON c.user_id = u3.id
  WHERE u1.id = 1
  LIMIT 1

SQL

timeline_eager_load = <<-SQL

  SELECT p.*, c.*, u3.full_name, u3.profile_pic_url
  FROM users AS u1
  JOIN friendships AS f
    ON u1.id = f.user_id1
  JOIN users AS u2
    ON u2.id = f.user_id2
  JOIN posts AS p
    ON u2.id = p.user_id
  JOIN comments AS c
    ON c.post_id = p.id
  JOIN users as u3
    ON c.user_id = u3.id
  WHERE u1.id = 1

  UNION

  SELECT p.*, c.*, u3.full_name, u3.profile_pic_url
  FROM users AS u1
  JOIN friendships AS f
    ON u1.id = f.user_id2
  JOIN users AS u2
    ON u2.id = f.user_id1
  JOIN posts AS p
    ON u2.id = p.user_id
  JOIN comments AS c
    ON c.post_id = p.id
  JOIN users as u3
    ON c.user_id = u3.id
  WHERE u1.id = 1

SQL



friends_query = <<-SQL

  SELECT u1.*
  FROM users AS u2
  JOIN friendships AS f
    ON u2.id = f.user_id2
  JOIN users AS u1
    ON u1.id = f.user_id1
  WHERE u2.id = #{id}

  UNION

  SELECT u2.*
  FROM users AS u1
  JOIN friendships AS f
    ON u1.id = f.user_id1
  JOIN users AS u2
    ON u2.id = f.user_id2
  WHERE u1.id = #{id};

SQL
