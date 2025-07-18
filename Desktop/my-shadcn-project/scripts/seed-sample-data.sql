-- Sample data for Wild Growth Hair Oil products
INSERT INTO product_views (product_id, product_name, user_session, created_at) VALUES
('hair-oil', 'Wild Growth Hair Oil', 'session_001', NOW() - INTERVAL '7 days'),
('hair-oil', 'Wild Growth Hair Oil', 'session_002', NOW() - INTERVAL '6 days'),
('light-oil', 'Wild Growth Light Oil Moisturizer', 'session_003', NOW() - INTERVAL '5 days'),
('hair-oil', 'Wild Growth Hair Oil', 'session_004', NOW() - INTERVAL '4 days'),
('light-oil', 'Wild Growth Light Oil Moisturizer', 'session_005', NOW() - INTERVAL '3 days'),
('hair-oil', 'Wild Growth Hair Oil', 'session_006', NOW() - INTERVAL '2 days'),
('hair-oil', 'Wild Growth Hair Oil', 'session_007', NOW() - INTERVAL '1 day'),
('light-oil', 'Wild Growth Light Oil Moisturizer', 'session_008', NOW());

INSERT INTO cart_events (event_type, product_id, product_name, quantity, price, user_session, created_at) VALUES
('add', 'hair-oil', 'Wild Growth Hair Oil', 1, 24.99, 'session_001', NOW() - INTERVAL '6 days'),
('add', 'light-oil', 'Wild Growth Light Oil Moisturizer', 1, 22.99, 'session_002', NOW() - INTERVAL '5 days'),
('add', 'hair-oil', 'Wild Growth Hair Oil', 2, 24.99, 'session_003', NOW() - INTERVAL '4 days'),
('remove', 'hair-oil', 'Wild Growth Hair Oil', 1, 24.99, 'session_003', NOW() - INTERVAL '4 days'),
('add', 'light-oil', 'Wild Growth Light Oil Moisturizer', 1, 22.99, 'session_004', NOW() - INTERVAL '3 days');

INSERT INTO checkout_events (checkout_id, event_type, total_amount, items_count, user_session, created_at) VALUES
('checkout_001', 'started', 24.99, 1, 'session_001', NOW() - INTERVAL '6 days'),
('checkout_001', 'completed', 24.99, 1, 'session_001', NOW() - INTERVAL '6 days'),
('checkout_002', 'started', 22.99, 1, 'session_002', NOW() - INTERVAL '5 days'),
('checkout_002', 'abandoned', 22.99, 1, 'session_002', NOW() - INTERVAL '5 days'),
('checkout_003', 'started', 24.99, 1, 'session_003', NOW() - INTERVAL '4 days'),
('checkout_003', 'completed', 24.99, 1, 'session_003', NOW() - INTERVAL '4 days');

INSERT INTO newsletter_subscriptions (email, source, subscribed_at) VALUES
('sarah.johnson@email.com', 'homepage', NOW() - INTERVAL '10 days'),
('maria.rodriguez@email.com', 'checkout', NOW() - INTERVAL '8 days'),
('ashley.chen@email.com', 'homepage', NOW() - INTERVAL '6 days'),
('customer1@email.com', 'popup', NOW() - INTERVAL '4 days'),
('customer2@email.com', 'homepage', NOW() - INTERVAL '2 days');
