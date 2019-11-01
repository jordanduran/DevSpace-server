BEGIN;

TRUNCATE
    users
    RESTART IDENTITY CASCADE;

INSERT INTO users (name, email, password, avatar, date, company, website, location, status, bio)
VALUES
  ('Jordan', 'myemail1@gmail.com', 'Password123', 'https://gravatar.com/avatar/8385556c89b788059f4edfc82735470a', '2001-10-31 01:00:00', 'Dunder-Mifflin', 'https://www.thinkful.com/', 'Manhattan, NY', 'Unemployed', 'I am a full-stack developer who is looking to break into the Tech industry and help create life changing software!'),
  ('Michael', 'myemail2@gmail.com', 'Password177', 'https://gravatar.com/avatar/8385556c89b788059f4edfc82735470a', '2001-09-27 01:40:00', 'Dunder-Mifflin', 'https://www.nbc.com/', 'Scranton, PA', 'Employed', 'Sell paper for Dunder-Mifflin'),
  ('Angela', 'myemail3@gmail.com', 'Password143', 'https://gravatar.com/avatar/8385556c89b788059f4edfc82735470a', '2001-04-08 03:20:47', 'Dunder-Mifflin', 'https://www.youtube.com/', 'Scranton, PA', 'Employed', 'Sell paper for Dunder-Mifflin'),
  ('Stanley', 'myemail4@gmail.com', 'Password822', 'https://gravatar.com/avatar/8385556c89b788059f4edfc82735470a', '2001-04-28 07:03:12', 'Dunder-Mifflin', 'https://www.yahoo.com/', 'Scranton, PA', 'Unemployed', 'Sell paper for Dunder-Mifflin'),
  ('Pam', 'myemail5@gmail.com', 'Password432', 'https://gravatar.com/avatar/8385556c89b788059f4edfc82735470a', '2001-02-09 02:16:10', 'Dunder-Mifflin', 'https://www.msn.com/', 'Scranton, PA', 'Employed', 'Sell paper for Dunder-Mifflin'),
  ('Jim', 'myemail6@gmail.com', 'Password976', 'https://gravatar.com/avatar/8385556c89b788059f4edfc82735470a', '2001-12-21 05:30:20', 'Dunder-Mifflin', 'https://www.google.com/', 'Scranton, PA', 'Unemployed', 'Sell paper for Dunder-Mifflin');

  COMMIT;