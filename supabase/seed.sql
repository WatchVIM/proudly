insert into public.cities (id, name, country, score, tagline, safety_notes, popular_for)
values
('barcelona','Barcelona','Spain',92,'Beach days, rooftop nights, and open-hearted culture.','Strong queer nightlife presence with active Pride and inclusive hospitality options.', array['Nightlife','Beaches','Pride','Design Hotels']),
('mexico-city','Mexico City','Mexico',88,'Culture, cuisine, art, and late-night chosen-family energy.','Large LGBTQIA+ community; neighborhood-by-neighborhood safety context recommended.', array['Food','Culture','Bars','Museums']),
('new-york','New York','USA',91,'A global queer capital with every scene under one skyline.','Extensive queer nightlife, hotels, arts, Pride history, and neighborhood options.', array['Ballroom','Theater','Clubs','History']),
('bangkok','Bangkok','Thailand',86,'Luxury stays, vibrant nights, temples, and warm hospitality.','Popular destination with visible queer nightlife; local etiquette still matters.', array['Luxury','Nightlife','Food','Wellness']),
('lisbon','Lisbon','Portugal',89,'Golden-hour city breaks, coastal escapes, and cozy queer bars.','Known for welcoming tourism and growing queer culture.', array['Romance','Food','Architecture','Coast']),
('phoenix','Phoenix','USA',82,'Desert luxury, cocktail lounges, art walks, and warm-weather escapes.','Queer-friendly pockets across Phoenix, Scottsdale, and Tempe; venue verification recommended.', array['Desert Resorts','Cocktails','Art','Wellness'])
on conflict (id) do nothing;

insert into public.places (id, type, name, city_id, neighborhood, description, image, rating, review_count, price_from, currency, categories, amenities, safety_status, safety_score, safety_tags, verified_by, last_reviewed, safety_notes, approved)
values
('casa-rainbow-barcelona','stay','Casa Rainbow Boutique Hotel','barcelona','Eixample','A stylish LGBTQIA+ owned boutique hotel close to bars, cafés, rooftop dinners, and late-night culture.','gradient-hotel-1',4.9,438,158,'USD',array['Boutique Hotel','Couples','Nightlife Nearby'],array['Rooftop Pool','Free Wi‑Fi','Breakfast','Bar','Airport Transfer'],'verified',96,array['lgbtq-owned','trans-friendly','gender-neutral','poc-friendly'],'Proudly. Partner Review','2026-06-01','Staff training confirmed, gender-neutral service language, and strong queer traveler reviews.',true),
('la-federica','nightlife','La Federica','barcelona','Poble-sec','A cozy, community-loved queer bar for cocktails, conversation, and low-pressure nights out.','gradient-bar-1',4.8,214,null,'USD',array['Bar','Cocktails','Community'],array['Cocktails','Outdoor Seating','Late Night','Small Groups'],'community',90,array['trans-friendly','gender-neutral','poc-friendly'],null,'2026-05-28','Community-rated as welcoming with a relaxed atmosphere.',true)
on conflict (id) do nothing;
