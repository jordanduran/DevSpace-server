BEGIN;

TRUNCATE
    post,
    users
    RESTART IDENTITY CASCADE;

INSERT INTO users (name, email, password, avatar, date, company, website, location, bio)
VALUES
  ('Jordan', 'myemail1@gmail.com', '$2b$10$gdAvBdbCYU.UiB.uBCULQeB7Li/kq9Xb9krth26pzTxkPZbVfxJju', 'https://gravatar.com/avatar/8385556c89b788059f4edfc82735470a', '2001-10-31 01:00:00', 'Dunder-Mifflin', 'https://www.thinkful.com/', 'Manhattan, NY', 'I am a full-stack developer who is looking to break into the Tech industry and help create life changing software!'),
  ('Michael', 'myemail2@gmail.com', '$2b$10$gdAvBdbCYU.UiB.uBCULQeB7Li/kq9Xb9krth26pzTxkPZbVfxJju', 'https://gravatar.com/avatar/8385556c89b788059f4edfc82735470a', '2001-09-27 01:40:00', 'Dunder-Mifflin', 'https://www.nbc.com/', 'Scranton, PA', 'Sell paper for Dunder-Mifflin'),
  ('Angela', 'myemail3@gmail.com', '$2b$10$gdAvBdbCYU.UiB.uBCULQeB7Li/kq9Xb9krth26pzTxkPZbVfxJju', 'https://gravatar.com/avatar/8385556c89b788059f4edfc82735470a', '2001-04-08 03:20:47', 'Dunder-Mifflin', 'https://www.youtube.com/', 'Scranton, PA', 'Sell paper for Dunder-Mifflin'),
  ('Stanley', 'myemail4@gmail.com', '$2b$10$gdAvBdbCYU.UiB.uBCULQeB7Li/kq9Xb9krth26pzTxkPZbVfxJju', 'https://gravatar.com/avatar/8385556c89b788059f4edfc82735470a', '2001-04-28 07:03:12', 'Dunder-Mifflin', 'https://www.yahoo.com/', 'Scranton, PA', 'Sell paper for Dunder-Mifflin'),
  ('Pam', 'myemail5@gmail.com', '$2b$10$gdAvBdbCYU.UiB.uBCULQeB7Li/kq9Xb9krth26pzTxkPZbVfxJju', 'https://gravatar.com/avatar/8385556c89b788059f4edfc82735470a', '2001-02-09 02:16:10', 'Dunder-Mifflin', 'https://www.msn.com/', 'Scranton, PA', 'Sell paper for Dunder-Mifflin'),
  ('Jim', 'myemail6@gmail.com', '$2b$10$gdAvBdbCYU.UiB.uBCULQeB7Li/kq9Xb9krth26pzTxkPZbVfxJju', 'https://gravatar.com/avatar/8385556c89b788059f4edfc82735470a', '2001-12-21 05:30:20', 'Dunder-Mifflin', 'https://www.google.com/', 'Scranton, PA', 'Sell paper for Dunder-Mifflin');

INSERT INTO post (users, post, avatar)
VALUES
('3', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              possimus corporis sunt necessitatibus! Minus nesciunt soluta
              suscipit nobis. Amet accusamus distinctio cupiditate blanditiis
              dolor? Illo perferendis eveniet cum cupiditate aliquam?', 'https://gravatar.com/avatar/8385556c89b788059f4edfc82735470a'),
('6', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              possimus corporis sunt necessitatibus! Minus nesciunt soluta
              suscipit nobis. Amet accusamus distinctio cupiditate blanditiis
              dolor? Illo perferendis eveniet cum cupiditate aliquam?', 'https://gravatar.com/avatar/8385556c89b788059f4edfc82735470a');             

  COMMIT;