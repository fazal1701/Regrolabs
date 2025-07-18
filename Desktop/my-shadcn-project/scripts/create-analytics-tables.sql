-- Analytics tables for tracking Wild Growth Hair Oil performance
CREATE TABLE IF NOT EXISTS product_views (
    id SERIAL PRIMARY KEY,
    product_id VARCHAR(255) NOT NULL,
    product_name VARCHAR(255) NOT NULL,
    user_session VARCHAR(255),
    ip_address INET,
    user_agent TEXT,
    referrer TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS cart_events (
    id SERIAL PRIMARY KEY,
    event_type VARCHAR(50) NOT NULL, -- 'add', 'remove', 'update'
    product_id VARCHAR(255) NOT NULL,
    product_name VARCHAR(255) NOT NULL,
    quantity INTEGER NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    user_session VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS checkout_events (
    id SERIAL PRIMARY KEY,
    checkout_id VARCHAR(255) NOT NULL,
    event_type VARCHAR(50) NOT NULL, -- 'started', 'completed', 'abandoned'
    total_amount DECIMAL(10,2),
    items_count INTEGER,
    user_session VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    source VARCHAR(100), -- 'homepage', 'checkout', 'popup'
    subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT true
);

-- Indexes for better performance
CREATE INDEX idx_product_views_product_id ON product_views(product_id);
CREATE INDEX idx_product_views_created_at ON product_views(created_at);
CREATE INDEX idx_cart_events_product_id ON cart_events(product_id);
CREATE INDEX idx_cart_events_created_at ON cart_events(created_at);
CREATE INDEX idx_checkout_events_checkout_id ON checkout_events(checkout_id);
CREATE INDEX idx_checkout_events_created_at ON checkout_events(created_at);
