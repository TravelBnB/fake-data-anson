CREATE TABLE listings (
  id int,
  name text,
  photo text,
  PRIMARY KEY (id)
);

CREATE TABLE listings (
  id int,
  name text,
  PRIMARY KEY (id)
);

CREATE TABLE reviews (
  id int,
  listing_id int,
  user_id int,
  accuracy DECIMAL(2,1),
  communication DECIMAL(2,1),
  cleanliness DECIMAL(2,1),
  location DECIMAL(2,1),
  check_in DECIMAL(2,1),
  value DECIMAL(2,1),
  date VARCHAR(20),
  content text,
  PRIMARY KEY (id)
);