-- Anurag Kumar's DynamoDB Table Schema
-- Custom authentication system with AWS integration
-- Built for scalability and security

-- DynamoDB Table Creation Script
-- Note: This is a conceptual SQL representation
-- In practice, DynamoDB tables are created using AWS CLI, SDK, or CloudFormation

-- Users Table Schema
-- Primary Key: email (String)
CREATE TABLE Users (
    email VARCHAR(255) PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL, -- bcrypt hashed
    createdAt TIMESTAMP NOT NULL,
    updatedAt TIMESTAMP NOT NULL,
    isActive BOOLEAN DEFAULT TRUE,
    loginAttempts INTEGER DEFAULT 0,
    lastLoginAttempt TIMESTAMP,
    lockedUntil TIMESTAMP
);

-- User Sessions Table Schema  
-- Primary Key: sessionId (String)
CREATE TABLE UserSessions (
    sessionId VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP NOT NULL,
    expiresAt TIMESTAMP NOT NULL,
    isActive BOOLEAN DEFAULT TRUE,
    ipAddress VARCHAR(45),
    userAgent TEXT
);

-- Indexes for efficient querying
CREATE INDEX idx_users_username ON Users(username);
CREATE INDEX idx_users_created_at ON Users(createdAt);
CREATE INDEX idx_sessions_email ON UserSessions(email);
CREATE INDEX idx_sessions_expires_at ON UserSessions(expiresAt);

-- Sample data for testing
INSERT INTO Users (email, username, password, createdAt, updatedAt, isActive) VALUES 
('sharmaanurag46741@gmail.com', 'anurag_kumar', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj/RK.s5uIoO', NOW(), NOW(), TRUE),
('anurag.test@developer.com', 'anurag_test', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj/RK.s5uIoO', NOW(), NOW(), TRUE);

-- Note: This schema is optimized for Anurag's development workflow
-- Password hash corresponds to 'password123' for testing
-- Production deployment ready with proper indexing
