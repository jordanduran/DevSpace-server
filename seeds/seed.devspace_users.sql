BEGIN;

TRUNCATE
    users
    RESTART IDENTITY CASCADE;

INSERT INTO users (name, email, password, avatar)
VALUES
  ('Jordan', 'myemail1@gmail.com', 'Password123', 'https://gravatar.com/avatar/8385556c89b788059f4edfc82735470a'),
  ('Michael', 'myemail2@gmail.com', 'Password123', 'https://gravatar.com/avatar/8385556c89b788059f4edfc82735470a'),
  ('Angela', 'myemail3@gmail.com', 'Password123', 'https://gravatar.com/avatar/8385556c89b788059f4edfc82735470a'),
  ('Stanley', 'myemail4@gmail.com', 'Password123', 'https://gravatar.com/avatar/8385556c89b788059f4edfc82735470a'),
  ('Pam', 'myemail5@gmail.com', 'Password123', 'https://gravatar.com/avatar/8385556c89b788059f4edfc82735470a'),
  ('Jim', 'myemail6@gmail.com', 'Password123', 'https://gravatar.com/avatar/8385556c89b788059f4edfc82735470a');

  COMMIT;