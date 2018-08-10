\c review_db;

CREATE TABLE users (
  id serial NOT NULL,
  name text,
  photo text,
  PRIMARY KEY (id)
);

CREATE TABLE listings (
  id serial NOT NULL,
  name text,
  PRIMARY KEY (id)
);

CREATE TABLE reviews (
  id serial NOT NULL,
  listing_id serial NOT NULL,
  user_id serial NOT NULL,
  accuracy DECIMAL(2,1) NOT NULL,
  communication DECIMAL(2,1) NOT NULL,
  cleanliness DECIMAL(2,1) NOT NULL, 
  location DECIMAL(2,1) NOT NULL,
  check_in DECIMAL(2,1) NOT NULL,
  _value DECIMAL(2,1) NOT NULL,
  _date VARCHAR(20) NOT NULL,
  content text,
  PRIMARY KEY (id),
  FOREIGN KEY (listing_id) REFERENCES listings(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);