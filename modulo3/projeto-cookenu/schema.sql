USE `franklin-leonardo-lima`;

CREATE TABLE IF NOT EXISTS `Users` (
    id VARCHAR(64) PRIMARY KEY,
    `name` VARCHAR(64) NOT NULL, 
    email VARCHAR(64) NOT NULL UNIQUE,
    `password` VARCHAR(256) NOT NULL,
);
