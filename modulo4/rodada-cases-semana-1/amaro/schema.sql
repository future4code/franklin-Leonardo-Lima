USE `franklin-leonardo-lima`;

CREATE TABLE IF NOT EXISTS `Products` (
    id VARCHAR(64) PRIMARY KEY,
    `name` VARCHAR(64) NOT NULL
);

CREATE TABLE IF NOT EXISTS `Tags` (
    id VARCHAR(64) PRIMARY KEY,
    `name`  VARCHAR(64) NOT NULL, 
    productId VARCHAR(255) NOT NULL,
    FOREIGN KEY (productId) REFERENCES Products(id)
);
