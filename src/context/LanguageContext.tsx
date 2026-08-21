import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'ml';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    nav_home: 'HOME',
    nav_about: 'ABOUT US',
    nav_services: 'OUR SERVICES',
    nav_approach: 'OUR APPROACH',
    nav_contact: 'CONTACT US',
    nav_book: 'BOOK CONSULTATION',
    nav_tagline: 'Integrative Wellbeing & Inner Peace',

    // Hero
    hero_tag: 'COMPASSIONATE & NON-JUDGEMENTAL SPACE',
    hero_headline: 'Understand Yourself. Connect Within. Move Forward.',
    hero_subtitle: 'A compassionate space for counselling, clinical hypnotherapy, acupuncture & integrative wellbeing.',
    hero_btn_book: 'BOOK A CONSULTATION',
    hero_btn_explore: 'EXPLORE OUR SERVICES',
    hero_badge1: 'Counselling Psychology',
    hero_badge2: 'Clinical Hypnotherapy',
    hero_badge3: 'Acupuncture Therapy',
    hero_badge4: 'Access Bars® & Constellations',

    // Welcome
    welcome_tag: 'WELCOME TO AAVIRA',
    welcome_title: 'A Safe Space to Pause, Be Heard & Look Within',
    welcome_desc1: 'At Aavira, we believe that meaningful wellbeing begins with understanding yourself. Life can bring moments of uncertainty, emotional overwhelm, stress, relationship challenges and a sense of feeling disconnected from ourselves.',
    welcome_desc2: 'Aavira was created as that space — a compassionate and non-judgemental environment where individuals can slow down, reflect on their experiences and explore meaningful ways forward.',
    welcome_badge: 'Pause. Listen. Understand. Reconnect.',

    // Founder 1 (Welcome)
    founder1_tag: 'MEET AFEEFA',
    founder1_title: 'Founder & Wellness Practitioner at Aavira',
    founder1_creds: 'Counselling Psychologist | Clinical Hypnotherapist | Acupuncture Therapist | Access Bars® Practitioner | Family Constellation Facilitator | Trainer',
    founder1_p1: 'Afeefa is a Counselling Psychologist and integrative wellness practitioner working across psychological wellbeing, mind-body balance, hypnotherapy and personal development.',
    founder1_p2: 'Her approach is centred on creating a safe, compassionate and non-judgemental space where individuals can pause, reflect, understand themselves and explore meaningful ways forward.',
    founder1_p3: 'With training and practice across counselling psychology, clinical hypnotherapy, acupuncture, Access Bars®, Family Constellation facilitation and professional training, Afeefa brings together complementary approaches according to each individual\'s needs, comfort and goals.',
    founder1_btn: 'DISCOVER AFEEFA\'S APPROACH',

    // Founder 2 (About)
    founder2_tag: 'MEET AFEEFA',
    founder2_title: 'Founder & Wellness Practitioner at Aavira',
    founder2_p1: 'Afeefa is a Counselling Psychologist and integrative wellness practitioner with a practice that brings together psychological wellbeing, mind-body balance, self-awareness and personal development.',
    founder2_p2: 'Her work is grounded in the belief that every individual is unique, and that wellbeing cannot always follow a single path.',
    founder2_p3: 'She creates a safe, compassionate and non-judgemental space where individuals can feel heard, understood and respected. Through meaningful conversations, guided self-exploration and complementary wellness practices, she supports individuals in developing greater awareness of their thoughts, emotions, experiences and patterns.',
    founder2_p4: 'Her professional training and practice span Counselling Psychology, Clinical Hypnotherapy, Acupuncture, Access Bars®, Family Constellation facilitation and Training & Facilitation. Rather than following a one-size-fits-all approach, Afeefa considers each person\'s individual needs, comfort, goals and circumstances when exploring appropriate approaches.',

    // About Page Specific Keys
    about_hero_title: 'Understanding Yourself. Connecting Within. Moving Forward.',
    about_hero_sub: 'At Aavira, we believe that meaningful wellbeing begins with understanding yourself.',
    about_hero_desc: 'Life can bring moments of uncertainty, emotional overwhelm, stress, relationship challenges and a sense of feeling disconnected from ourselves. Sometimes, what we need most is not another answer, but a safe space where we can pause, be heard and look within.',
    
    about_sanc_tag: 'THE AAVIRA SANCTUARY',
    about_sanc_title: 'A Compassionate & Non-Judgemental Space',
    about_sanc_p1: 'Aavira was created as that space — a compassionate and non-judgemental environment where individuals can slow down, reflect on their experiences and explore meaningful ways forward.',
    about_sanc_p2: 'Founded by Afeefa, Aavira brings together counselling psychology and complementary wellness practices through an integrative and personalised approach to wellbeing.',
    about_sanc_item1: 'Integrated Mind-Body Balance Practices',
    about_sanc_item2: 'Personalised Counselling & Guided Self-Exploration',
    about_sanc_item3: 'Safe, Confidential & Compassionate Atmosphere',
    about_sanc_quote: '"Not another answer, but a safe space where you can pause, be heard and look within."',

    about_afeefa_intention_tag: 'HER INTENTION',
    about_afeefa_intention_desc: '"To create a space where people can pause, understand themselves more deeply, reconnect with their inner resources and move towards meaningful personal growth."',

    about_appr_tag: 'HER PROFESSIONAL APPROACH',
    about_appr_title: 'A Whole-Person Perspective',
    about_appr_p1: 'At Aavira, wellbeing is viewed as more than simply addressing a particular concern.',
    about_appr_p2: 'Our emotional experiences, thoughts, relationships, physical wellbeing, personal history and everyday environment can all influence how we experience life. Afeefa\'s approach therefore considers the individual as a whole.',
    about_appr_p3: 'Depending on the person\'s needs and goals, different approaches may be explored, including psychological support, guided self-exploration, relaxation-based practices and complementary wellness modalities.',
    about_appr_note: 'The intention is not to use every approach for everyone, but to create a personalised experience that feels appropriate, comfortable and meaningful.',

    about_pillars_tag: 'THE FOUR PILLARS',
    about_pillars_title: 'LISTEN. UNDERSTAND. INTEGRATE. EMPOWER.',

    about_integ_tag: 'AN INTEGRATIVE APPROACH TO WELLBEING',
    about_integ_title: 'Different Paths. One Individual Journey.',
    about_integ_desc: 'There is no single definition of wellbeing and no single approach that works for everyone. At Aavira, psychological and complementary wellness practices may be brought together thoughtfully according to individual needs and comfort.',

    about_values_tag: 'OUR CORE GUIDING PRINCIPLES',
    about_values_title: 'WHAT AAVIRA VALUES',
    val1_title: 'COMPASSION',
    val1_desc: 'Every individual deserves to be approached with kindness, empathy and respect.',
    val2_title: 'SAFETY',
    val2_desc: 'Aavira strives to create an environment where individuals feel comfortable expressing themselves and exploring their experiences.',
    val3_title: 'INDIVIDUALITY',
    val3_desc: 'Your journey is your own. Approaches are considered around your needs, goals, comfort and circumstances.',
    val4_title: 'AWARENESS',
    val4_desc: 'Greater awareness can help us understand ourselves, our experiences and the patterns that shape our lives.',
    val5_title: 'GROWTH',
    val5_desc: 'Wellbeing is an ongoing journey of learning, reflection, connection and personal development.',

    about_cta_tag: 'A SPACE FOR YOUR JOURNEY',
    about_cta_title: 'Begin From Where You Are',
    about_cta_desc: 'You do not have to have everything figured out before you begin. Whether you are looking for emotional support, greater self-awareness, personal growth, relaxation or simply a space to pause and reconnect with yourself, Aavira offers an opportunity to begin from where you are.',
    about_cta_box: 'Begin Your Journey With A Conversation',
    about_cta_box_desc: 'If you would like to understand more about Aavira or explore which approach may be suitable for you, we invite you to get in touch.',
    whatsapp_btn: 'WHATSAPP AAVIRA',

    // Services Page Keys
    serv_hero_title: 'Approaches Designed Around You',
    serv_hero_sub: 'At Aavira, we believe that wellbeing is personal.',
    serv_hero_desc: 'Every individual has different experiences, needs and goals. Our services bring together psychological support and complementary wellness practices to create a personalised space for reflection, awareness, relaxation and growth.',
    serv_hero_footer: 'Explore the approaches offered at Aavira and discover what may be appropriate for your journey.',
    serv_list_counselling_title: 'This may support you with:',
    serv_list_hypno_title: 'The process may involve:',
    serv_list_acu_title: 'Acupuncture may be explored as part of:',
    serv_list_access_title: 'A session may offer space for:',
    serv_list_const_title: 'It may help you explore:',
    serv_list_train_title: 'Areas may include:',
    serv_btn_explore: 'EXPLORE',
    serv_pace_tag: 'FIND THE APPROACH THAT FEELS RIGHT FOR YOU',
    serv_pace_title: 'Your Journey. Your Needs. Your Pace.',
    serv_pace_p1: 'There is no single path to wellbeing.',
    serv_pace_p2: 'Different approaches may be explored individually or, where appropriate, thoughtfully combined according to your needs, goals and comfort. Aavira focuses on creating a safe and personalised experience rather than following a one-size-fits-all model.',
    serv_begin_tag: 'NOT SURE WHERE TO BEGIN?',
    serv_begin_p1: 'You don\'t need to know which approach is right for you before reaching out.',
    serv_begin_p2: 'Start with a conversation. Share what you are currently experiencing, what you are looking for and what you hope to explore. Together, you can understand which approach may be appropriate for your journey.',

    // Approach Page Keys
    appr_hero_sub: 'At Aavira, we believe meaningful wellbeing begins with creating space to listen and understand.',
    appr_hero_desc: 'Every person comes with a unique story, different experiences and individual needs. Our approach is centred around meeting you where you are and creating a safe, compassionate and non-judgemental space for reflection, awareness and meaningful change.',
    appr_hero_p3: 'Rather than following a one-size-fits-all approach, we thoughtfully consider the individual, their needs, comfort and goals.',
    appr_whole_tag: 'A WHOLE-PERSON APPROACH',
    appr_whole_title: 'Understanding the Individual, Not Just the Concern',
    appr_whole_p1: 'Wellbeing can involve many interconnected aspects of our lives.',
    appr_whole_p2: 'Our thoughts, emotions, relationships, experiences, physical wellbeing and personal environment can all influence how we experience ourselves and the world around us.',
    appr_whole_p3: 'At Aavira, we take an integrative perspective that recognises these different dimensions. Depending on your individual needs and goals, psychological support, self-exploration and complementary wellness practices may be explored as part of your journey.',
    appr_meth_tag: 'METHODOLOGY',
    appr_meth_title: 'THE AAVIRA APPROACH',
    step1_tag: 'There is space for your story.',
    step2_tag: 'Awareness can create new possibilities.',
    step3_tag: 'Small shifts can create meaningful change.',
    step4_tag: 'Your journey. Your pace. Your growth.',

    // Contact Page Keys
    cont_tag: 'CONTACT AAVIRA',
    cont_hero_title: 'Let\'s Begin With a Conversation',
    cont_hero_desc: 'Sometimes, taking the first step simply means reaching out. Whether you would like to learn more about our services, understand which approach may be suitable for you, or simply have a question, we are here to listen.',
    cont_hero_sub: 'Reach out to Aavira and begin with a conversation.',
    cont_hear_tag: 'GET IN TOUCH',
    cont_hear_title: 'We\'d Love to Hear From You',
    cont_hear_desc: 'Have a question about a service or want to know more about your options? Send us an enquiry and share what you would like to explore. We will get back to you with the relevant information.',
    cont_phone_title: 'WhatsApp / Call',
    cont_phone_sub: 'Available for enquiries and consultation-related communication.',
    cont_email_title: 'Email Address',
    cont_email_sub: 'For general enquiries, service information and consultation requests.',
    cont_visit_tag: 'VISIT AAVIRA',
    cont_visit_title: 'Wellness Sanctuary',
    cont_enquiry_tag: 'SEND US AN ENQUIRY',
    cont_enquiry_title: 'Have Questions? We Are Here to Support You.',
    cont_enquiry_success_title: 'Enquiry Received',
    cont_enquiry_success_desc: 'Your message has been received. Aavira Wellness will get back to you shortly to assist with your enquiry.',
    cont_form_name: 'Name *',
    cont_form_phone: 'Phone Number *',
    cont_form_email: 'Email Address *',
    cont_form_service: 'Service of Interest',
    cont_form_msg: 'Your Message / Concern',
    cont_form_submit: 'SEND ENQUIRY',
    cont_form_sending: 'SENDING...',

    // Services Section & Page
    services_tag: 'OUR SERVICES',
    services_title: 'Approaches Designed Around You',
    services_sub: 'At Aavira, there is no single path to wellbeing. Different practices may be explored according to your individual needs, goals and comfort.',
    services_btn_all: 'DISCOVER ALL WELLBEING PROGRAMS',
    services_modal_benefits: 'Key Benefits & Outcomes:',
    services_modal_book: 'BOOK THIS SESSION',

    service_counselling_title: 'Counselling Psychology',
    service_counselling_cat: 'Psychological Support',
    service_counselling_sub: 'A Safe Space to Understand Yourself',
    service_counselling_desc: 'A safe and supportive space to explore thoughts, emotions, relationships and personal experiences, helping you develop greater clarity, self-awareness and understanding.',
    service_counselling_full: 'Counselling Psychology at Aavira provides a compassionate, non-judgmental space where you can explore thoughts, emotions, and behavioral patterns. Through tailored therapeutic approaches, we support you in overcoming stress, anxiety, relationship issues, and identity journeys.',
    service_counselling_link: 'Explore Counselling',
    service_counselling_bullets: 'Safe and confidential emotional expression, Coping mechanisms for stress & anxiety, Enhanced self-esteem & boundary setting, Clarity during major life transitions',
    service_counselling_btn: 'BOOK COUNSELLING SESSION',

    service_hypno_title: 'Clinical Hypnotherapy',
    service_hypno_cat: 'Subconscious Transformation',
    service_hypno_sub: 'Guided Relaxation & Inner Awareness',
    service_hypno_desc: 'A guided process of relaxation and focused attention that creates space to explore thoughts, emotions and behavioural patterns, supporting greater self-awareness and positive change.',
    service_hypno_full: 'Clinical Hypnotherapy utilizes gentle, guided relaxation techniques to quiet the conscious mind and engage the subconscious. This allows us to reframe subconscious triggers, heal emotional wounds, and cultivate empowering self-beliefs.',
    service_hypno_link: 'Explore Hypnotherapy',
    service_hypno_bullets: 'Release of deep subconscious blockages, Stress reduction & sleep improvement, Overcoming fears and phobias, Building lasting positive habits',
    service_hypno_btn: 'BOOK HYPNOTHERAPY SESSION',

    service_acu_title: 'Acupuncture Therapy',
    service_acu_cat: 'Somatic & Energy Balance',
    service_acu_sub: 'Supporting Balance & Body Wellbeing',
    service_acu_desc: 'A traditional complementary wellness practice using fine needles at specific points of the body, traditionally intended to support balance and overall wellbeing.',
    service_acu_full: 'Acupuncture is a traditional complementary healing practice designed to harmonize Qi (vital energy flow) within the body. By stimulating precise meridian points, acupuncture releases tension, reduces physical discomfort, and activates natural self-healing mechanisms.',
    service_acu_link: 'Explore Acupuncture',
    service_acu_bullets: 'Relief from chronic physical tension, Balanced nervous system & relaxation, Hormonal & energetic alignment, Improved vital stamina and sleep',
    service_acu_btn: 'BOOK ACUPUNCTURE SESSION',

    service_access_title: 'Access Bars®',
    service_access_cat: 'Energetic Mental Decluttering',
    service_access_sub: 'Resting the Mind & Gentle Relaxation',
    service_access_desc: 'A gentle, touch-based complementary wellness practice involving light touch to specific points on the head. Sessions are designed to encourage deep relaxation, quiet reflection and a sense of mental ease.',
    service_access_full: 'Access Bars® involves softly touching 32 unique points on your head that correspond to different areas of life (healing, calm, control, creativity). This process discharges the electrical charge of thoughts, judgments, and stresses stored in your brain.',
    service_access_link: 'Explore Access Bars®',
    service_access_bullets: 'Deep mental stillness & relaxation, Dissolution of chronic mental noise, Greater ease, joy, and emotional space, Release of rigid limiting beliefs',
    service_access_btn: 'BOOK ACCESS BARS® SESSION',

    service_const_title: 'Family Constellation',
    service_const_cat: 'Systemic & Ancestral Healing',
    service_const_sub: 'Exploring Systemic & Family Dynamics',
    service_const_desc: 'A facilitated self-exploration approach that helps individuals reflect on family relationships, experiences and recurring relational patterns, offering new perspectives and greater self-awareness.',
    service_const_full: 'Family Constellation therapy explores how unresolved trauma and unseen dynamics within previous generations impact your present life. By bringing hidden systemic loyalties to light, you can step out of inherited burdens into your own authentic strength.',
    service_const_link: 'Explore Family Constellation',
    service_const_bullets: 'Resolution of recurring generational patterns, Clarity in complex family relationships, Deep emotional release & reconciliation, Restoration of natural order and peace',
    service_const_btn: 'BOOK CONSTELLATION SESSION',

    service_train_title: 'Training & Facilitation',
    service_train_cat: 'Personal Development',
    service_train_sub: 'Workshops, Learning & Self-Development',
    service_train_desc: 'Professional learning and facilitation experiences designed around awareness, wellbeing, personal development and meaningful growth.',
    service_train_full: 'Aavira offers custom-designed workshops and group facilitation programs for organizations, educational institutions, and community groups. Topics include Emotional Intelligence, Stress Mastery, Mindful Leadership, and Team Alignment.',
    service_train_link: 'Explore Training',
    service_train_bullets: 'Customized corporate & group modules, Actionable stress-resilience strategies, Enhanced empathy and team synergy, Experiential learning & reflection',
    service_train_btn: 'ENQUIRE ABOUT TRAINING',

    // Day With Thyself
    day_tag: 'FEATURED EXPERIENCE',
    day_title: 'A Day With Thyself',
    day_sub: 'One day. One space. One deeper connection with yourself.',
    day_desc: 'A personalised one-to-one wellness experience designed to give you dedicated time and space to pause, reconnect, release and renew.',
    day_retreat_tag: 'ONE-TO-ONE RETREAT',
    day_retreat_sub: 'Fully Tailored Sanctuary',
    day_sec_title: 'An Immersive One-to-One Sanctuary',
    day_sec_p1: 'A Day With Thyself is an immersive experience where you spend a dedicated day with the therapist in a safe, supportive and peaceful environment.',
    day_sec_p2: 'The day is thoughtfully designed around your emotional, mental, energetic and overall wellbeing needs. Depending on your goals and comfort, the experience may bring together counselling and psychological guidance, self-exploration, acupuncture, Access Bars®, clinical hypnotherapy, relaxation and breathwork, guided meditation, mindfulness and other awareness practices.',
    day_sec_note: 'Every experience is personalised. Not every modality is necessarily used; the day\'s approach is selected according to your individual needs, goals and comfort.',
    day_sec_if: 'This may be a space for you if you are:',
    day_point1: 'Feeling emotionally overwhelmed',
    day_point2: 'Mentally exhausted',
    day_point3: 'Feeling stuck in repetitive patterns',
    day_point4: 'Experiencing a sense of disconnection from yourself',
    day_point5: 'Seeking meaningful personal time and reflection',
    day_point6: 'Looking to reconnect with your inner resources',
    day_btn: 'DISCOVER A DAY WITH THYSELF',
    day_inv_title: 'An invitation to pause.',
    day_inv_l1: 'To listen to yourself.',
    day_inv_l2: 'To understand yourself.',
    day_inv_l3: 'To reconnect with yourself.',
    day_inv_final: 'And to gently move towards a better version of you.',

    // Philosophy
    philo_quote: 'The journey of a thousand miles begins with a single step towards understanding yourself.',
    philo_tag: 'OUR GUIDING PHILOSOPHY',
    philo_title: '"Wellbeing Begins With Understanding Yourself"',
    philo_sub: 'Listen. Understand. Integrate. Empower.',
    philo_desc: 'We believe that every individual holds the intrinsic capability to heal. Our role is to create the sacred container, provide gentle guidance, and facilitate your alignment with your true potential.',

    // Approach Steps
    approach_tag: 'OUR APPROACH',
    approach_title: 'Listen. Understand. Integrate. Empower.',
    approach_sub: 'We believe meaningful wellbeing begins by creating space to listen and understand.',
    step1_title: 'LISTEN',
    step1_sub: 'Be Heard & Honoured',
    step1_desc: 'A safe, compassionate space to be heard and acknowledged without judgement.',
    step2_title: 'UNDERSTAND',
    step2_sub: 'Awareness & Insight',
    step2_desc: 'Explore your thoughts, emotions, experiences and patterns with greater awareness.',
    step3_title: 'INTEGRATE',
    step3_sub: 'Everyday Harmony',
    step3_desc: 'Bring insights together and explore ways to create greater balance in everyday life.',
    step4_title: 'EMPOWER',
    step4_sub: 'Self-Mastery & Growth',
    step4_desc: 'Move forward with greater self-awareness, confidence and a deeper connection with yourself.',
    approach_btn: 'EXPLORE OUR APPROACH',

    // Areas of Wellbeing
    areas_tag: 'AREAS OF WELLBEING',
    areas_title: 'Supporting the Whole You',
    areas_sub: 'Our work may support different dimensions of your personal wellbeing, including:',
    area1_title: 'Emotional Wellbeing',
    area1_desc: 'Create space to understand and work through emotional experiences.',
    area2_title: 'Self-Awareness',
    area2_desc: 'Develop a deeper understanding of your thoughts, feelings, needs and patterns.',
    area3_title: 'Stress & Relaxation',
    area3_desc: 'Explore practices that encourage relaxation, reflection and healthier ways of managing stress.',
    area4_title: 'Personal Growth',
    area4_desc: 'Make space for learning, reflection and meaningful personal development.',
    area5_title: 'Relationships',
    area5_desc: 'Explore relationships, family experiences and patterns with greater clarity.',
    area6_title: 'Mind-Body Wellbeing',
    area6_desc: 'Reconnect with the relationship between your inner experience and overall wellbeing.',
    area7_title: 'Self-Care',
    area7_desc: 'Give yourself permission to pause, rest, reflect and reconnect.',

    // Why Aavira
    why_tag: 'WHY AAVIRA?',
    why_title: 'A Compassionate Space for Your Journey',
    why_sub: 'At Aavira, your experience comes first. We recognise that every individual is different, and wellbeing cannot always follow a one-size-fits-all approach. Our work is centred around understanding your needs and creating an experience that feels safe, respectful and meaningful to you.',
    pillar1_title: 'Compassionate',
    pillar1_desc: 'A welcoming, safe and non-judgemental environment.',
    pillar2_title: 'Personalised',
    pillar2_desc: 'Approaches thoughtfully considered around your needs, goals and comfort.',
    pillar3_title: 'Integrative',
    pillar3_desc: 'A combination of psychological and complementary wellness practices where appropriate.',
    pillar4_title: 'Empowering',
    pillar4_desc: 'Supporting you in developing awareness, clarity and a stronger connection with yourself.',

    // Contact & Modal
    modal_begin: 'Begin Your Healing',
    modal_title: 'Book a Consultation',
    modal_sub: 'Select your service and preferred schedule below',
    modal_service_label: 'Select Service / Therapy',
    modal_choose_service: '-- Choose a Service --',
    modal_mode_label: 'Session Format',
    modal_mode_inperson: 'In-Person Sanctuary',
    modal_mode_online: 'Online Video Session',
    modal_name_label: 'Full Name *',
    modal_name_ph: 'Your name',
    modal_phone_label: 'Phone Number *',
    modal_phone_ph: '+91 00000 00000',
    modal_email_label: 'Email Address *',
    modal_email_ph: 'you@example.com',
    modal_date_label: 'Preferred Date',
    modal_note_label: 'Personal Note / What brings you to Aavira?',
    modal_note_ph: 'Share any specific goals or details...',
    modal_submit: 'CONFIRM CONSULTATION REQUEST',
    modal_sending: 'SENDING REQUEST...',
    modal_success_title: 'Consultation Requested',
    modal_success_desc: 'Thank you. Afeefa and the Aavira team have received your request. We will reach out shortly via email or phone to confirm your session timing.',

    form_name: 'Full Name *',
    form_phone: 'Phone Number *',
    form_email: 'Email Address *',
    form_date: 'Preferred Date',
    form_format: 'Session Format',
    format_inperson: 'In-Person Sanctuary',
    format_online: 'Online Video Session',
    form_service: 'Service of Interest',
    form_message: 'Your Message / Concern',
    form_submit: 'SUBMIT BOOKING REQUEST',
    form_submitting: 'SUBMITTING ENQUIRY...',
    form_success_title: 'Consultation Request Sent',
    form_success_msg: 'Thank you for reaching out to Aavira Wellness. We have received your booking request and will contact you shortly.',

    // Footer
    footer_preview_tag: 'BEGIN YOUR HEALING JOURNEY',
    footer_preview_title: 'Let\'s Begin With a Conversation',
    footer_preview_desc: 'Have a question or want to understand which approach may be right for you? Reach out to Aavira to discuss your needs.',
    footer_col1_title: 'Integrative Wellness & Inner Wellbeing',
    footer_col2_title: 'Quick Navigation',
    footer_col3_title: 'Sanctuary Location',
    footer_directions: 'GET DIRECTIONS →',
    footer_copyright: 'Aavira Wellness. All rights reserved.'
  },
  ml: {
    // Header
    nav_home: 'ഹോം',
    nav_about: 'ഞങ്ങളെക്കുറിച്ച്',
    nav_services: 'ഞങ്ങളുടെ സേവനങ്ങൾ',
    nav_approach: 'ഞങ്ങളുടെ സമീപനം',
    nav_contact: 'ബന്ധപ്പെടുക',
    nav_book: 'കൺസൾട്ടേഷൻ ബുക്ക് ചെയ്യുക',
    nav_tagline: 'ഇന്റഗ്രേറ്റീവ വെൽനെസ് & സ്വയം തിരിച്ചറിയൽ',

    // Hero
    hero_tag: 'സ്നേഹപൂർണ്ണവും പക്ഷപാതമില്ലാത്തതുമായ അന്തരീക്ഷം',
    hero_headline: 'നിങ്ങളെക്കുറിച്ച് മനസ്സിലാക്കുക. ഉള്ളിലേക്ക് കണ്ണോടിക്കുക. മുന്നോട്ട് മുന്നേറുക.',
    hero_subtitle: 'കൗൺസിലിംഗ്, ക്ലിനിക്കൽ ഹിപ്നോതെറാപ്പി, അക്യുപങ്ചർ, സമഗ്ര ക്ഷേമം എന്നിവയ്ക്കുള്ള സുരക്ഷിത തണൽ.',
    hero_btn_book: 'കൺസൾട്ടേഷൻ ബുക്ക് ചെയ്യുക',
    hero_btn_explore: 'സേവനങ്ങൾ മനസ്സിലാക്കുക',
    hero_badge1: 'കൗൺസിലിംഗ് സൈക്കോളജി',
    hero_badge2: 'ക്ലിനിക്കൽ ഹിപ്നോതെറാപ്പി',
    hero_badge3: 'അക്യുപങ്ചർ തെറാപ്പി',
    hero_badge4: 'ആക്സസ് ബാർസ്® & കോൺസ്റ്റലേഷൻസ്',

    // Welcome
    welcome_tag: 'ആവിരയിലേക്ക് സ്വാഗതം',
    welcome_title: 'വിശ്രമിക്കാനും കേൾക്കപ്പെടാനും ഉള്ളിലേക്ക് കണ്ണോടിക്കാനുമുള്ള ഒരു സുരക്ഷിത തണൽ',
    welcome_desc1: 'ആവിരയിൽ, അർത്ഥവത്തായ ക്ഷേമം ആരംഭിക്കുന്നത് സ്വയം മനസ്സിലാക്കുന്നതിലൂടെയാണെന്ന് ഞങ്ങൾ വിശ്വസിക്കുന്നു. ജീവിതത്തിൽ അനിശ്ചിതത്വത്തിന്റെ നിമിഷങ്ങളും വൈകാരിക സമ്മർദ്ദങ്ങളും ബന്ധങ്ങളിലെ വെല്ലുവിളികളും സ്വയം ഒറ്റപ്പെട്ടതായി തോന്നുന്ന അവസ്ഥകളും ഉണ്ടാകാം.',
    welcome_desc2: 'വ്യക്തികൾക്ക് ശാന്തമായി ചിന്തിക്കാനും സ്വന്തം അനുഭവങ്ങളെ മനസ്സിലാക്കി പുതിയ വഴികൾ കണ്ടെത്താനുമുള്ള സ്നേഹപൂർണ്ണവും പക്ഷപാതമില്ലാത്തതുമായ ഒരു സുരക്ഷിത തണലായിട്ടാണ് ആവിര രൂപകൽപ്പന ചെയ്തിരിക്കുന്നത്.',
    welcome_badge: 'വിശ്രമിക്കുക. ശ്രദ്ധിക്കുക. മനസ്സിലാക്കുക. പുനഃബന്ധിപ്പിക്കുക.',

    // Founder 1 (Welcome)
    founder1_tag: 'അഫീഫയെ പരിചയപ്പെടാം',
    founder1_title: 'ആവിരയുടെ സ്ഥാപകയും വെൽനെസ് പ്രാക്ടീഷണറും',
    founder1_creds: 'കൗൺസിലിംഗ് സൈക്കോളജിസ്റ്റ് | ക്ലിനിക്കൽ ഹിപ്നോതെറാപ്പിസ്റ്റ് | അക്യുപങ്ചർ തെറാപ്പിസ്റ്റ് | ആക്സസ് ബാർസ്® പ്രാക്ടീഷണർ | ഫാമിലി കോൺസ്റ്റലേഷൻ ഫെസിലിറ്റേറ്റർ | ട്രെയിനർ',
    founder1_p1: 'അഫീഫ മാനസികാരോഗ്യ പരിപാലനം, മനസ്സിന്റെയും ശരീരത്തിന്റെയും സമഗ്ര സന്തുലിതാവസ്ഥ, ഹിപ്നോതെറാപ്പി, വ്യക്തിത്വ വികസനം എന്നിവ സമന്വയിപ്പിച്ച് പ്രവർത്തിക്കുന്ന കൗൺസിലിംഗ് സൈക്കോളജിസ്റ്റാണ്.',
    founder1_p2: 'വ്യക്തികൾക്ക് ആത്മപരിശോധന നടത്താനും സ്വയം തിരിച്ചറിയാനും അനുയോജ്യമായ സുരക്ഷിതവും സ്നേഹനിർഭരവുമായ അന്തരീക്ഷം ഒരുക്കുക എന്നതാണ് അവരുടെ സമീപനം.',
    founder1_p3: 'കൗൺസിലിംഗ് സൈക്കോളജി, ക്ലിനിക്കൽ ഹിപ്നോതെറാപ്പി, അക്യുപങ്ചർ, ആക്സസ് ബാർസ്, ഫാമിലി കോൺസ്റ്റലേഷൻ എന്നിവയിലെ അനുഭവ സമ്പത്ത് ഉപയോഗിച്ച് ഓരോ വ്യക്തിയുടെയും ആവശ്യത്തിനനുസരിച്ച് സേവനം നൽകുന്നു.',
    founder1_btn: 'അഫീഫയുടെ സമീപനം മനസ്സിലാക്കൂ',

    // Founder 2 (About)
    founder2_tag: 'അഫീഫയെ പരിചയപ്പെടാം',
    founder2_title: 'ആവിരയുടെ സ്ഥാപകയും വെൽനെസ് പ്രാക്ടീഷണറും',
    founder2_p1: 'അഫീഫ മാനസികാരോഗ്യം, സമഗ്ര ക്ഷേമം, സ്വയം തിരിച്ചറിയൽ, വ്യക്തിത്വ വികസനം എന്നിവ സമന്വയിപ്പിച്ച് പ്രവർത്തിക്കുന്ന കൗൺസിലിംഗ് സൈക്കോളജിസ്റ്റാണ്.',
    founder2_p2: 'ഓരോ വ്യക്തിയും സവിശേഷമാണെന്നും ക്ഷേമത്തിലേക്ക് ഒരൊറ്റ വഴി മാത്രമല്ല ഉള്ളതെന്നും അവർ വിശ്വസിക്കുന്നു.',
    founder2_p3: 'വ്യക്തികൾക്ക് തങ്ങളുടെ അനുഭവങ്ങൾ തുറന്നു പറയാനും മനസ്സിലാക്കപ്പെടാനും അനുയോജ്യമായ സുരക്ഷിത ഇടം നൽകുന്നു. സംഭാഷണങ്ങളിലൂടെയും ഉപദേശങ്ങളിലൂടെയും മനസ്സിന്റെ വിചാരങ്ങളെയും വികാരങ്ങളെയും കുറിച്ച് ആഴത്തിലുള്ള അറിവ് നൽകാൻ പിന്തുണയ്ക്കുന്നു.',
    founder2_p4: 'കൗൺസിലിംഗ് സൈക്കോളജി, ക്ലിനിക്കൽ ഹിപ്നോതെറാപ്പി, അക്യുപങ്ചർ, ആക്സസ് ബാർസ്, ഫാമിലി കോൺസ്റ്റലേഷൻ എന്നിവയിലെ വൈദഗ്ദ്ധ്യം ഉപയോഗിച്ച് ഓരോ വ്യക്തിയുടെയും ആവശ്യത്തിനും ലക്ഷ്യത്തിനും അനുയോജ്യമായ സംയോജിത സേവനങ്ങൾ നൽകുന്നു.',

    // About Page Specific Keys
    about_hero_title: 'നിങ്ങളെക്കുറിച്ച് മനസ്സിലാക്കുക. ഉള്ളിലേക്ക് കണ്ണോടിക്കുക. മുന്നോട്ട് മുന്നേറുക.',
    about_hero_sub: 'ആവിരയിൽ, അർത്ഥവത്തായ ക്ഷേമം ആരംഭിക്കുന്നത് സ്വയം മനസ്സിലാക്കുന്നതിലൂടെയാണെന്ന് ഞങ്ങൾ വിശ്വസിക്കുന്നു.',
    about_hero_desc: 'ജീവിതത്തിൽ മാനസിക സമ്മർദ്ദവും വൈകാരിക ബുദ്ധിമുട്ടുകളും ബന്ധങ്ങളിലെ അസ്വസ്ഥതകളും അനുഭവപ്പെടാം. ചിലപ്പോൾ നമുക്ക് ആവശ്യമുള്ളത് അടിയന്തിര ഉത്തരങ്ങളല്ല, മറിച്ച് ആത്മപരിശോധന നടത്താനും വികാരങ്ങൾ പങ്കുവെക്കാനുമുള്ള ഒരു സുരക്ഷിത തണലാണ്.',

    about_sanc_tag: 'ആവിര സങ്കേതം',
    about_sanc_title: 'സ്നേഹപൂർണ്ണവും പക്ഷപാതമില്ലാത്തതുമായ അന്തരീക്ഷം',
    about_sanc_p1: 'വ്യക്തികൾക്ക് ശാന്തമായി ചിന്തിക്കാനും സ്വന്തം അനുഭവങ്ങളെ മനസ്സിലാക്കി പുതിയ വഴികൾ കണ്ടെത്താനുമുള്ള ഒരു സുരക്ഷിത തണലായിട്ടാണ് ആവിര രൂപകൽപ്പന ചെയ്തിരിക്കുന്നത്.',
    about_sanc_p2: 'അഫീഫ ആരംഭിച്ച ആവിര, കൗൺസിലിംഗ് സൈക്കോളജിയും പരമ്പരാഗത വെൽനെസ് രീതികളും സമന്വയിപ്പിച്ച് വ്യക്തിഗത സേവനം നൽകുന്നു.',
    about_sanc_item1: 'മനസ്സിന്റെയും ശരീരത്തിന്റെയും സന്തുലിതാവസ്ഥയ്ക്കുള്ള പരിശീലനങ്ങൾ',
    about_sanc_item2: 'വ്യക്തിഗത കൗൺസിലിംഗും ഉപദേശങ്ങളും',
    about_sanc_item3: 'സുരക്ഷിതവും രഹസ്യാത്മകവുമായ അന്തരീക്ഷം',
    about_sanc_quote: '"മറ്റൊരു ഉത്തരമല്ല, മറിച്ച് നിങ്ങളുടെ അനുഭവങ്ങൾ പങ്കുവെക്കാനുള്ള സുരക്ഷിത തണൽ."',

    about_afeefa_intention_tag: 'അവരുടെ ലക്ഷ്യം',
    about_afeefa_intention_desc: '"വ്യക്തികൾക്ക് ശാന്തമാകാനും സ്വയം ആഴത്തിൽ മനസ്സിലാക്കാനും തങ്ങളുടെ ആന്തരിക ശക്തിയെ വീണ്ടെടുക്കാനും അനുയോജ്യമായ തണലൊരുക്കുക."',

    about_appr_tag: 'അവരുടെ പ്രൊഫഷണൽ സമീപനം',
    about_appr_title: 'വ്യക്തിയെ സമഗ്രമായി കാണുന്ന കാഴ്ചപ്പാട്',
    about_appr_p1: 'ആവിരയിൽ, ക്ഷേമം എന്നത് കേവലം ഒരു പ്രശ്നം പരിഹരിക്കുന്നതിനേക്കാൾ ഉപരിയാണ്.',
    about_appr_p2: 'വൈകാരിക അനുഭവങ്ങൾ, ചിന്തകൾ, ബന്ധങ്ങൾ, ശാരീരിക ആരോഗ്യം എന്നിവയെല്ലാം ജീവിതത്തെ സ്വാധീനിക്കുന്നു. അതിനാൽ വ്യക്തിയെ സമഗ്രമായി കണ്ടുകൊണ്ടാണ് അഫീഫയുടെ പ്രവർത്തനം.',
    about_appr_p3: 'വ്യക്തിയുടെ ആവശ്യങ്ങൾക്കനുസരിച്ച് കൗൺസിലിംഗ്, ഉപദേശങ്ങൾ, വിശ്രമ പരിശീലനങ്ങൾ, വെൽനെസ് രീതികൾ എന്നിവ നൽകുന്നു.',
    about_appr_note: 'എല്ലാ രീതികളും എല്ലാവരിലും ഉപയോഗിക്കുകയല്ല, മറിച്ച് ഓരോരുത്തർക്കും അനുയോജ്യമായ വ്യക്തിഗത അനുഭവം സൃഷ്ടിക്കുകയാണ് ലക്ഷ്യം.',

    about_pillars_tag: 'പ്രധാന നാല് തൂണുകൾ',
    about_pillars_title: 'ശ്രദ്ധിക്കുക. മനസ്സിലാക്കുക. സമന്വയിപ്പിക്കുക. ശാക്തീകരിക്കുക.',

    about_integ_tag: 'സംയോജിത വെൽനെസ് സമീപനം',
    about_integ_title: 'വ്യത്യസ്ത വഴികൾ. ഒരൊറ്റ വ്യക്തിഗത യാത്ര.',
    about_integ_desc: 'ക്ഷേമത്തിന് ഒരൊറ്റ നിർവ്വചനമില്ല. കൗൺസിലിംഗും വെൽനെസ് രീതികളും നിങ്ങളുടെ സൗകര്യത്തിനനുസരിച്ച് സമന്വയിപ്പിക്കുന്നു.',

    about_values_tag: 'ഞങ്ങളുടെ പ്രധാന മാർഗ്ഗനിർദ്ദേശങ്ങൾ',
    about_values_title: 'ആവിരയുടെ മൂല്യങ്ങൾ',
    val1_title: 'കരുണ',
    val1_desc: 'ഓരോ വ്യക്തിയും ദയയോടും ആദരവോടും സമീപിക്കപ്പെടാൻ അർഹനാണ്.',
    val2_title: 'സുരക്ഷിതത്വം',
    val2_desc: 'ആളുകൾക്ക് കാര്യങ്ങൾ തുറന്നു പറയാവുന്ന സുരക്ഷിത അന്തരീക്ഷം ആവിര നൽകുന്നു.',
    val3_title: 'വ്യക്തിത്വം',
    val3_desc: 'നിങ്ങളുടെ യാത്ര തനതാണ്. സേവനങ്ങൾ നിങ്ങളുടെ ആവശ്യങ്ങൾക്ക് അനുയോജ്യമായി നൽകുന്നു.',
    val4_title: 'തിരിച്ചറിവ്',
    val4_desc: 'കൂടുതൽ തിരിച്ചറിവുകൾ നമ്മെയും ജീവിത അനുഭവങ്ങളെയും അടുത്തറിയാൻ സഹായിക്കുന്നു.',
    val5_title: 'വികാസം',
    val5_desc: 'ക്ഷേമം എന്നത് തുടർച്ചയായ പഠനത്തിന്റെയും വളർച്ചയുടെയും യാത്രയാണ്.',

    about_cta_tag: 'നിങ്ങളുടെ യാത്രയ്ക്കായുള്ള സുരക്ഷിത ഇടം',
    about_cta_title: 'നിങ്ങൾ നിൽക്കുന്നിടത്ത് നിന്ന് ആരംഭിക്കൂ',
    about_cta_desc: 'എല്ലാ കാര്യങ്ങളും വ്യക്തമായ ശേഷം മാത്രം തുടങ്ങണമെന്നില്ല. വൈകാരിക പിന്തുണയ്ക്കോ മാനസിക ആശ്വാസത്തിനായോ നിങ്ങൾക്ക് ഇന്ന് തന്നെ തുടക്കമിടാം.',
    about_cta_box: 'ഒരു സംഭാഷണത്തിലൂടെ തുടക്കം കുറിക്കാം',
    about_cta_box_desc: 'ആവിരയെക്കുറിച്ചോ സേവനങ്ങളെക്കുറിച്ചോ കൂടുതൽ അറിയാൻ ഞങ്ങളെ ബന്ധപ്പെടൂ.',
    whatsapp_btn: 'വാട്ട്സ്ആപ്പ് സന്ദേശം അയക്കൂ',

    // Services Page Keys
    serv_hero_title: 'നിങ്ങളുടെ ആവശ്യങ്ങൾക്കനുസരിച്ച് തയ്യാറാക്കിയ സേവനങ്ങൾ',
    serv_hero_sub: 'ആവിരയിൽ, ക്ഷേമം എന്നത് തികച്ചും വ്യക്തിഗതമാണെന്ന് ഞങ്ങൾ വിശ്വസിക്കുന്നു.',
    serv_hero_desc: 'ഓരോ വ്യക്തിയുടെയും അനുഭവങ്ങളും ലക്ഷ്യങ്ങളും വ്യത്യസ്തമാണ്. മാനസിക പിന്തുണയും പരമ്പരാഗത വെൽനെസ് രീതികളും സമന്വയിപ്പിച്ച് ഞങ്ങൾ സേവനങ്ങൾ നൽകുന്നു.',
    serv_hero_footer: 'ആവിരയുടെ സേവനങ്ങൾ മനസ്സിലാക്കി നിങ്ങളുടെ യാത്രയ്ക്ക് അനുയോജ്യമായത് തിരഞ്ഞെടുക്കൂ.',
    serv_list_counselling_title: 'ഇവയിൽ പിന്തുണ നൽകുന്നു:',
    serv_list_hypno_title: 'സെഷനിൽ ഉൾപ്പെടുന്നത്:',
    serv_list_acu_title: 'അക്യുപങ്ചറിന്റെ പ്രധാന വശങ്ങൾ:',
    serv_list_access_title: 'സെഷൻ നൽകുന്ന സുഖാനുഭവങ്ങൾ:',
    serv_list_const_title: 'മനസ്സിലാക്കാൻ സഹായിക്കുന്നത്:',
    serv_list_train_title: 'പരിശീലന മേഖലകൾ:',
    serv_btn_explore: 'വിശദമായി അറിയുക',
    serv_pace_tag: 'നിങ്ങൾക്ക് അനുയോജ്യമായ രീതി തിരഞ്ഞെടുക്കുക',
    serv_pace_title: 'നിങ്ങളുടെ യാത്ര. നിങ്ങളുടെ ആവശ്യങ്ങൾ. നിങ്ങളുടെ സമയം.',
    serv_pace_p1: 'ക്ഷേമത്തിലേക്ക് ഒരൊറ്റ വഴി മാത്രമല്ല ഉള്ളത്.',
    serv_pace_p2: 'ആവശ്യത്തിനനുസരിച്ച് വ്യക്തിഗത രീതിയിലോ സമന്വയിപ്പിച്ചോ സേവനങ്ങൾ നൽകുന്നു.',
    serv_begin_tag: 'എവിടെ തുടങ്ങണമെന്ന് ഉറപ്പില്ലേ?',
    serv_begin_p1: 'ബന്ധപ്പെടുന്നതിന് മുൻപ് അനുയോജ്യമായ രീതി ഏതെന്നു മുൻകൂട്ടി അറിയേണ്ടതില്ല.',
    serv_begin_p2: 'ഒരു സംഭാഷണത്തിലൂടെ തുടക്കമിടാം. നിങ്ങളുടെ അനുഭവങ്ങൾ പങ്കുവെക്കുക, അനുയോജ്യമായ സേവനം തിരഞ്ഞെടുക്കാൻ ഞങ്ങൾ സഹായിക്കാം.',

    // Approach Page Keys
    appr_hero_sub: 'ആവിരയിൽ, സ്നേഹപൂർവ്വം കേൾക്കാനും ശാന്തമായി മനസ്സിലാക്കാനുമുള്ള ഇടമൊരുക്കുന്നതിലൂടെയാണ് അർത്ഥവത്തായ ക്ഷേമം ആരംഭിക്കുന്നതെന്ന് ഞങ്ങൾ വിശ്വസിക്കുന്നു.',
    appr_hero_desc: 'ഓരോ വ്യക്തിക്കും വ്യത്യസ്തമായ കഥകളും അനുഭവങ്ങളുമുണ്ട്. നിങ്ങളെ മനസ്സിലാക്കി സുരക്ഷിതമായ അന്തരീക്ഷത്തിൽ വഴികാട്ടുകയാണ് ഞങ്ങളുടെ സമീപനം.',
    appr_hero_p3: 'എല്ലാവർക്കും ഒരൊറ്റ രീതിയല്ല, വ്യക്തിഗതമായ പരിചരണമാണ് നൽകുന്നത്.',
    appr_whole_tag: 'വ്യക്തിയെ സമഗ്രമായി കാണുന്ന സമീപനം',
    appr_whole_title: 'പ്രശ്നത്തെ മാത്രമല്ല, വ്യക്തിയെ മനസ്സിലാക്കുക',
    appr_whole_p1: 'ക്ഷേമത്തിൽ ജീവിതത്തിന്റെ നിരവധി വശങ്ങൾ അടങ്ങിയിരിക്കുന്നു.',
    appr_whole_p2: 'ചിന്തകളും വികാരങ്ങളും ശാരീരിക അവസ്ഥകളും ജീവിത അനുഭവങ്ങളെ സ്വാധീനിക്കുന്നു.',
    appr_whole_p3: 'ഈ വിവിധ ഘടകങ്ങളെ കണക്കിലെടുത്ത് സംയോജിത വെൽനെസ് രീതികളിലൂടെ പിന്തുണ നൽകുന്നു.',
    appr_meth_tag: 'രീതി ശാസ്ത്രം',
    appr_meth_title: 'ആവിര സമീപനം',
    step1_tag: 'നിങ്ങളുടെ അനുഭവങ്ങൾ പങ്കുവെക്കാൻ ഇടമുണ്ട്.',
    step2_tag: 'തിരിച്ചറിവുകൾ പുതിയ വഴികൾ തുറക്കുന്നു.',
    step3_tag: 'ചെറിയ മാറ്റങ്ങൾ വലിയ വ്യത്യാസമുണ്ടാക്കുന്നു.',
    step4_tag: 'നിങ്ങളുടെ യാത്ര. നിങ്ങളുടെ സമയം. നിങ്ങളുടെ വികാസം.',

    // Contact Page Keys
    cont_tag: 'ആവിരയുമായി ബന്ധപ്പെടുക',
    cont_hero_title: 'ഒരു സംഭാഷണത്തിലൂടെ തുടക്കമിടാം',
    cont_hero_desc: 'ആദ്യത്തെ ചുവടുവയ്പ്പ് എന്നാൽ ഞങ്ങളുമായി ബന്ധപ്പെടുക എന്നതാണ്. നിങ്ങളുടെ സംശയങ്ങൾ തീർക്കാനും വഴികാട്ടാനും ഞങ്ങൾ കൂടെയുണ്ട്.',
    cont_hero_sub: 'ആവിരയുമായി ബന്ധപ്പെട്ട് ഒരു പുതിയ തുടക്കം കുറിക്കൂ.',
    cont_hear_tag: 'ബന്ധപ്പെടാം',
    cont_hear_title: 'നിങ്ങളെ കേൾക്കാൻ ഞങ്ങൾ ആഗ്രഹിക്കുന്നു',
    cont_hear_desc: 'സേവനങ്ങളെക്കുറിച്ചോ സങ്കീർണ്ണതകളെക്കുറിച്ചോ സംശയങ്ങളുണ്ടോ? സന്ദേശം അയക്കൂ, ഞങ്ങൾ തിരികെ ബന്ധപ്പെടാം.',
    cont_phone_title: 'വാട്ട്സ്ആപ്പ് / ഫോൺ',
    cont_phone_sub: 'അന്വേഷനങ്ങൾക്കും വിവരങ്ങൾക്കുമായി ലഭ്യമാണ്.',
    cont_email_title: 'ഇമെയിൽ വിലാസം',
    cont_email_sub: 'ആവശ്യങ്ങൾക്കും വിവരങ്ങൾക്കുമായി ബന്ധപ്പെടാം.',
    cont_visit_tag: 'ആവിര സന്ദർശിക്കുക',
    cont_visit_title: 'വെൽനെസ് കേന്ദ്രം',
    cont_enquiry_tag: 'അന്വേഷണം രേഖപ്പെടുത്തൂ',
    cont_enquiry_title: 'സംശയങ്ങളുണ്ടോ? സഹായിക്കാൻ ഞങ്ങൾ തയ്യാറാണ്.',
    cont_enquiry_success_title: 'സന്ദേശം ലഭിച്ചു',
    cont_enquiry_success_desc: 'നിങ്ങളുടെ സന്ദേശം ലഭിച്ചു. ആവിര വെൽനെസ് ഉടൻ തന്നെ തിരികെ ബന്ധപ്പെടുന്നതായിരിക്കും.',
    cont_form_name: 'പേര് *',
    cont_form_phone: 'ഫോൺ നമ്പർ *',
    cont_form_email: 'ഇമെയിൽ വിലാസം *',
    cont_form_service: 'ആവശ്യമുള്ള സേവനം',
    cont_form_msg: 'നിങ്ങളുടെ സന്ദേശം',
    cont_form_submit: 'സന്ദേശം അയക്കുക',
    cont_form_sending: 'അയക്കുന്നു...',

    // Services Section & Page
    services_tag: 'ഞങ്ങളുടെ സേവനങ്ങൾ',
    services_title: 'നിങ്ങളുടെ ആവശ്യങ്ങൾക്കനുസരിച്ച് തയ്യാറാക്കിയ സേവനങ്ങൾ',
    services_sub: 'ആവിരയിൽ ക്ഷേമത്തിലേക്ക് ഒരൊറ്റ വഴി മാത്രമല്ല ഉള്ളത്. നിങ്ങളുടെ ആവശ്യങ്ങൾക്കും സൗകര്യത്തിനും അനുയോജ്യമായ സേവനങ്ങൾ ഇവിടെ ലഭ്യമാണ്.',
    services_btn_all: 'എല്ലാ സുഖാനുഭവ പരിപാടികളും കാണുക',
    services_modal_benefits: 'പ്രധാന നേട്ടങ്ങൾ:',
    services_modal_book: 'ഈ സെഷൻ ബുക്ക് ചെയ്യുക',

    service_counselling_title: 'കൗൺസിലിംഗ് സൈക്കോളജി',
    service_counselling_cat: 'മാനസിക പിന്തുണ',
    service_counselling_sub: 'സ്വയം മനസ്സിലാക്കാനുള്ള സുരക്ഷിത ഇടം',
    service_counselling_desc: 'ചിന്തകളെയും വികാരങ്ങളെയും ബന്ധങ്ങളെയും തുറന്ന് ചർച്ച ചെയ്യാനും വ്യക്തത നേടാനുമുള്ള സുരക്ഷിത അന്തരീക്ഷം കൗൺസിലിംഗ് നൽകുന്നു.',
    service_counselling_full: 'ചിന്തകളും വികാരങ്ങളും തുറന്ന് സംസാരിക്കാനും സങ്കീർണ്ണതകൾ പരിഹരിക്കാനുമുള്ള സുരക്ഷിത തണലാണ് ആവിരയിലെ കൗൺസിലിംഗ് സൈക്കോളജി.',
    service_counselling_link: 'കൗൺസിലിംഗ് മനസ്സിലാക്കുക',
    service_counselling_bullets: 'സുരക്ഷിതമായ വൈകാരിക പ്രകടനം, മാനസിക സമ്മർദ്ദ ആശ്വാസം, സ്വയം തിരിച്ചറിവ് & അതിരുകൾ നിശ്ചയിക്കൽ, ജീവിത മാറ്റങ്ങളിലെ വ്യക്തത',
    service_counselling_btn: 'കൗൺസിലിംഗ് സെഷൻ ബുക്ക് ചെയ്യുക',

    service_hypno_title: 'ക്ലിനിക്കൽ ഹിപ്നോതെറാപ്പി',
    service_hypno_cat: 'അവബോധ മനസ്സിന്റെ പരിവർത്തനം',
    service_hypno_sub: 'വിശ്രമവും ഉള്ളിലെ തിരിച്ചറിവും',
    service_hypno_desc: 'ശാന്തമായ അന്തരീക്ഷത്തിൽ മനസ്സിനെയും വികാരങ്ങളെയും അടുത്തറിയാൻ സഹായിക്കുന്ന ആഴത്തിലുള്ള വിശ്രമ രീതിയാണ് ക്ലിനിക്കൽ ഹിപ്നോതെറാപ്പി.',
    service_hypno_full: 'മനസ്സിന് ആഴത്തിലുള്ള വിശ്രമം നൽകി ഉൾചിന്തകളെ ശാന്തമാക്കാനും പുതിയ ഊർജ്ജം വീണ്ടെടുക്കാനും സഹായിക്കുന്ന രീതി.',
    service_hypno_link: 'ഹിപ്നോതെറാപ്പി മനസ്സിലാക്കുക',
    service_hypno_bullets: 'അവബോധ മനസ്സിന്റെ തടസ്സങ്ങൾ നീക്കൽ, സ്ട്രെസ് ആശ്വാസം & നല്ല ഉറക്കം, ഭയങ്ങളെ മറികടക്കൽ, നല്ല ശീലങ്ങൾ വളർത്തൽ',
    service_hypno_btn: 'ഹിപ്നോതെറാപ്പി സെഷൻ ബുക്ക് ചെയ്യുക',

    service_acu_title: 'അക്യുപങ്ചർ തെറാപ്പി',
    service_acu_cat: 'ശരീര-ഊർജ്ജ സന്തുലിതാവസ്ഥ',
    service_acu_sub: 'ശരീരത്തിന്റെ സന്തുലിതാവസ്ഥ ഉറപ്പാക്കൽ',
    service_acu_desc: 'ശരീരത്തിലെ ഊർജ്ജ പ്രവാഹവും വിശ്രമവും സന്തുലിതാവസ്ഥയും നിലനിർത്താൻ സഹായിക്കുന്ന പരമ്പരാഗത വെൽനെസ് രീതിയാണിത്.',
    service_acu_full: 'ശരീരത്തിലെ ഊർജ്ജ പ്രവാഹവും ശാരീരിക സന്തുലിതാവസ്ഥയും വീണ്ടെടുക്കാനുള്ള പരമ്പരാഗത സുഖപ്പെടുത്തൽ രീതി.',
    service_acu_link: 'അക്യുപങ്ചർ മനസ്സിലാക്കുക',
    service_acu_bullets: 'ശാരീരിക അസ്വസ്ഥതകളിൽ നിന്നുള്ള ആശ്വാസം, നാഡീവ്യൂഹത്തിന്റെ സന്തുലിതാവസ്ഥ, ഊർജ്ജസ്വലത & ഉന്മേഷം, സുഖപ്രദമായ ഉറക്കം',
    service_acu_btn: 'അക്യുപങ്ചർ സെഷൻ ബുക്ക് ചെയ്യുക',

    service_access_title: 'ആക്സസ് ബാർസ്®',
    service_access_cat: 'മാനസിക ചിന്തകളുടെ തെളിച്ചം',
    service_access_sub: 'മനസ്സിന്റെ ശാന്തതയും ലളിത വിശ്രമവും',
    service_access_desc: 'തലച്ചോറിലെ നിർദ്ദിഷ്ട പോയിന്റുകളിൽ മൃദുവായി സ്പർശിച്ച് ആഴത്തിലുള്ള മാനസിക പ്രശാന്തതയും ചിന്തകളുടെ വ്യക്തതയും നൽകുന്ന രീതി.',
    service_access_full: 'തലച്ചോറിലെ പോയിന്റുകളിൽ മൃദുവായി സ്പർശിച്ച് അമിത ചിന്തകളിൽ നിന്നും മാനസിക ഭാരങ്ങളിൽ നിന്നും മോചനം നൽകുന്നു.',
    service_access_link: 'ആക്സസ് ബാർസ്® മനസ്സിലാക്കുക',
    service_access_bullets: 'ആഴത്തിലുള്ള മാനസിക പ്രശാന്തത, അമിത ചിന്തകളിൽ നിന്നുള്ള മുക്തി, മനസ്സമാധാനവും സ സന്തോഷവും, മാനസിക ഭാരം കുറയ്ക്കൽ',
    service_access_btn: 'ആക്സസ് ബാർസ്® സെഷൻ ബുക്ക് ചെയ്യുക',

    service_const_title: 'ഫാമിലി കോൺസ്റ്റലേഷൻ',
    service_const_cat: 'കുടുംബ ബന്ധങ്ങളിലെ സൗഖ്യം',
    service_const_sub: 'കുടുംബ ബന്ധങ്ങളിലെ ഘടന മനസ്സിലാക്കൽ',
    service_const_desc: 'കുടുംബ പശ്ചാത്തലങ്ങളും തലമുറകളായി തുടരുന്ന ബന്ധങ്ങളിലെ സങ്കീർണ്ണതകളും മനസ്സിലാക്കാനുള്ള തെറാപ്പി രീതി.',
    service_const_full: 'കുടുംബ ബന്ധങ്ങളിലെ ഘടനയും പരമ്പരാഗത അനുഭവങ്ങളും മനസ്സിലാക്കി അവയിലെ വൈകാരിക തടസ്സങ്ങൾ മാറ്റാൻ സഹായിക്കുന്നു.',
    service_const_link: 'കോൺസ്റ്റലേഷൻ മനസ്സിലാക്കുക',
    service_const_bullets: 'തലമുറകളായുള്ള ബന്ധങ്ങളുടെ വ്യക്തത, കുടുംബ ബന്ധങ്ങളിലെ സങ്കീർണ്ണതകൾ പരിഹരിക്കൽ, വൈകാരിക ആശ്വാസം, കുടുംബത്തിൽ സമാധാനം',
    service_const_btn: 'കോൺസ്റ്റലേഷൻ സെഷൻ ബുക്ക് ചെയ്യുക',

    service_train_title: 'ട്രെയിനിംഗ് & ഫെസിലിറ്റേഷൻ',
    service_train_cat: 'വ്യക്തിത്വ വികസനം',
    service_train_sub: 'വർക്ക്ഷോപ്പുകളും പരിശീലന പരിപാടികളും',
    service_train_desc: 'സ്ഥാപനങ്ങൾക്കും ഗ്രൂപ്പുകൾക്കും വ്യക്തികൾക്കുമായി മാനസികാരോഗ്യം, സ്ട്രെസ് മാനേജ്മെന്റ്, കമ്മ്യൂണിക്കേഷൻ എന്നിവയിൽ നടത്തുന്ന പരിശീലനങ്ങൾ.',
    service_train_full: 'സ്ഥാപനങ്ങൾക്കും ഗ്രൂപ്പുകൾക്കുമായി മാനസികാരോഗ്യം, സ്ട്രെസ് മാനേജ്മെന്റ്, സ്വയം തിരിച്ചറിവ് എന്നിവയിൽ നടത്തുന്ന പരിശീലനങ്ങൾ.',
    service_train_link: 'ട്രെയിനിംഗ് മനസ്സിലാക്കുക',
    service_train_bullets: 'സ്ഥാപനങ്ങൾക്കായുള്ള പരിശീലനങ്ങൾ, സ്ട്രെസ് മാനേജ്മെന്റ് തന്ത്രങ്ങൾ, ആത്മവിശ്വാസവും ആശയവിനിമയവും, പ്രായോഗിക പഠന രീതികൾ',
    service_train_btn: 'പരിശീലനത്തെക്കുറിച്ച് അന്വേഷിക്കുക',

    // Day With Thyself
    day_tag: 'പ്രത്യേക സുഖാനുഭവ പരിപാടി',
    day_title: 'സ്വന്തം ഉള്ളിലേക്ക് ഒരു ദിവസം',
    day_sub: 'ഒരു ദിവസം. ഒരു സുരക്ഷിത ഇടം. സ്വന്തം ഉള്ളിലേക്ക് ആഴത്തിലുള്ള ഒരു ബന്ധം.',
    day_desc: 'നിങ്ങൾക്ക് വിശ്രമിക്കാനും സ്വന്തം ഉള്ളിലേക്ക് പുനഃബന്ധിപ്പിക്കാനും പ്രത്യേകം ഒരുക്കിയ വ്യക്തിഗത ഒരു ദിവസത്തെ വെൽനെസ് അനുഭവം.',
    day_retreat_tag: 'വൺ-ടു-വൺ റിട്രീറ്റ്',
    day_retreat_sub: 'നിങ്ങൾക്കായി മാത്രം തയ്യാറാക്കിയ തണൽ',
    day_sec_title: 'ആഴത്തിലുള്ള വ്യക്തിഗത സുഖാനുഭവം',
    day_sec_p1: 'ശാന്തവും സുരക്ഷിതവുമായ അന്തരീക്ഷത്തിൽ വെൽനെസ് തെറാപ്പിസ്റ്റിനൊപ്പം ഒരു ദിവസം പൂർണ്ണമായി ചെലവഴിക്കുന്ന വ്യക്തിഗത അനുഭവമാണ് സ്വന്തം ഉള്ളിലേക്ക് ഒരു ദിവസം.',
    day_sec_p2: 'നിങ്ങളുടെ വൈകാരിക, മാനസിക, ആത്മീയ ആവശ്യങ്ങൾ മുൻനിർത്തിയാണ് ഈ ദിവസം ക്രമീകരിക്കുന്നത്. നിങ്ങളുടെ ലക്ഷ്യങ്ങൾക്കനുസരിച്ച് കൗൺസിലിംഗ്, അക്യുപങ്ചർ, ആക്സസ് ബാർസ്, ഹിപ്നോതെറാപ്പി, ശ്വസന വ്യായാമങ്ങൾ, ധ്യാനം എന്നിവ ഇതിൽ സമന്വയിപ്പിക്കാം.',
    day_sec_note: 'ഓരോ അനുഭവവും വ്യക്തിഗതമാണ്. എല്ലാ രീതികളും ഉപയോഗിക്കണമെന്നില്ല; നിങ്ങളുടെ ആവശ്യത്തിനനുസരിച്ചുള്ള രീതികൾ മാത്രം തിരഞ്ഞെടുക്കുന്നു.',
    day_sec_if: 'ഇത് നിങ്ങൾക്ക് അനുയോജ്യമായ ഇടമായിരിക്കാം, നിങ്ങൾ:',
    day_point1: 'വൈകാരികമായി തളർന്നിരിക്കുമ്പോൾ',
    day_point2: 'മാനസികമായി ക്ഷീണം അനുഭവപ്പെടുമ്പോൾ',
    day_point3: 'ജീവിതത്തിൽ ഒരേ വഴികളിൽ കുടുങ്ങിയതായി തോന്നുമ്പോൾ',
    day_point4: 'സ്വന്തം ആന്തരിക സത്തയിൽ നിന്ന് അകന്നതായി തോന്നുമ്പോൾ',
    day_point5: 'ആത്മപരിശോധനയ്ക്കായി സമയം ആഗ്രഹിക്കുമ്പോൾ',
    day_point6: 'ആന്തരിക ശക്തിയെ വീണ്ടെടുക്കാൻ ആഗ്രഹിക്കുമ്പോൾ',
    day_btn: 'ഈ അനുഭവത്തെക്കുറിച്ച് കൂടുതൽ അറിയുക',
    day_inv_title: 'ശാന്തമാകാനുള്ള ഒരു ക്ഷണം.',
    day_inv_l1: 'സ്വന്തം ഉള്ളിലേക്ക് ശ്രദ്ധിക്കാൻ.',
    day_inv_l2: 'സ്വയം മനസ്സിലാക്കാൻ.',
    day_inv_l3: 'സ്വയം പുനഃബന്ധിപ്പിക്കാൻ.',
    day_inv_final: 'കൂടുതൽ മികച്ച ഒരു നിങ്ങളിലേക്ക് സൗമ്യമായി മുന്നേറാൻ.',

    // Philosophy
    philo_quote: 'സ്വയം അറിയാനുള്ള ആദ്യത്തെ ചുവടുവയ്പ്പാണ് ആയിരം മൈലുകളുടെ യാത്രയ്ക്ക് തുടക്കമിടുന്നത്.',
    philo_tag: 'ആവിര വെൽനെസ് തത്വം',
    philo_title: '"സ്വയം മനസ്സിലാക്കുന്നതിലൂടെയാണ് അർത്ഥവത്തായ ക്ഷേമം ആരംഭിക്കുന്നത്"',
    philo_sub: 'ശ്രദ്ധിക്കുക. മനസ്സിലാക്കുക. സമന്വയിപ്പിക്കുക. ശാക്തീകരിക്കുക.',
    philo_desc: 'ഓരോ വ്യക്തിയിലും രോഗശാന്തി നേടാനുള്ള ആന്തരികമായ കഴിവുണ്ടെന്ന് ഞങ്ങൾ വിശ്വസിക്കുന്നു. പ്രചോദനവും വഴികാട്ടലും നൽകി നിങ്ങളുടെ തനതായ കഴിവുകളിലേക്ക് എത്തിക്കുക എന്നതാണ് ഞങ്ങളുടെ കടമ.',

    // Approach Steps
    approach_tag: 'ഞങ്ങളുടെ സമീപനം',
    approach_title: 'ശ്രദ്ധിക്കുക. മനസ്സിലാക്കുക. സമന്വയിപ്പിക്കുക. ശാക്തീകരിക്കുക.',
    approach_sub: 'സ്നേഹപൂർവ്വം കേൾക്കാനും ശാന്തമായി മനസ്സിലാക്കാനുമുള്ള ഇടമൊരുക്കുന്നതിലൂടെയാണ് അർത്ഥവത്തായ ക്ഷേമം ആരംഭിക്കുന്നതെന്ന് ഞങ്ങൾ വിശ്വസിക്കുന്നു.',
    step1_title: 'ശ്രദ്ധിക്കുക',
    step1_sub: 'നിങ്ങളെ കേൾക്കുകയും ആദരിക്കുകയും ചെയ്യുക',
    step1_desc: 'ഏതൊരു യാത്രയും ആരംഭിക്കുന്നത് കേൾക്കുന്നതിലൂടെയാണ്. നിങ്ങളുടെ അനുഭവങ്ങൾ വിധിതീർപ്പുകളില്ലാതെ കേൾക്കാൻ ഞങ്ങൾ ഇടമൊരുക്കുന്നു.',
    step2_title: 'മനസ്സിലാക്കുക',
    step2_sub: 'തിരിച്ചറിവും ഉൾക്കാഴ്ചയും',
    step2_desc: 'സ്വയം മനസ്സിലാക്കുന്നത് അനുഭവങ്ങളെ പുതിയ വെളിച്ചത്തിൽ കാണാൻ സഹായിക്കുന്നു.',
    step3_title: 'സമന്വയിപ്പിക്കുക',
    step3_sub: 'ദൈനംദിന ജീവിതത്തിലേക്ക് മാറ്റങ്ങൾ കൊണ്ടുവരൽ',
    step3_desc: 'പുതിയ ഉൾക്കാഴ്ചകളെ നിങ്ങളുടെ ദിവസേനയുള്ള ജീവിതത്തിൽ പ്രായോഗികമായി നടപ്പിലാക്കൽ.',
    step4_title: 'ശാക്തീകരിക്കുക',
    step4_sub: 'സ്വയം തിരിച്ചറിവും വ്യക്തിത്വ വികസനവും',
    step4_desc: 'ആത്മവിശ്വാസത്തോടെയും വ്യക്തതയോടെയും മുന്നോട്ട് പോകാൻ നിങ്ങളെ പ്രാപ്തരാക്കുന്നു.',
    approach_btn: 'ഞങ്ങളുടെ സമീപനം മനസ്സിലാക്കൂ',

    // Areas of Wellbeing
    areas_tag: 'ക്ഷേമത്തിന്റെ മേഖലകൾ',
    areas_title: 'നിങ്ങളെ സമഗ്രമായി പിന്തുണയ്ക്കുന്നു',
    areas_sub: 'ഞങ്ങളുടെ പ്രവർത്തനങ്ങൾ നിങ്ങളുടെ ജീവിതത്തിന്റെ വിവിധ വശങ്ങളിൽ പിന്തുണ നൽകുന്നു:',
    area1_title: 'വൈകാരിക ക്ഷേമം',
    area1_desc: 'വൈകാരിക അനുഭവങ്ങളെ മനസ്സിലാക്കാനും മറികടക്കാനും അനുയോജ്യമായ ഇടം.',
    area2_title: 'സ്വയം തിരിച്ചറിവ്',
    area2_desc: 'ചിന്തകൾ, വികാരങ്ങൾ, ആവശ്യങ്ങൾ എന്നിവയെക്കുറിച്ച് ആഴത്തിലുള്ള അറിവ് നേടുക.',
    area3_title: 'സമ്മർദ്ദവും വിശ്രമവും',
    area3_desc: 'മനസ്സമാധാനവും വിശ്രമവും നേടാനുള്ള പരിശീലനങ്ങൾ.',
    area4_title: 'വ്യക്തിത്വ വികസനം',
    area4_desc: 'പഠനത്തിനും ആത്മപരിശോധനയ്ക്കും വ്യക്തിഗത വികസനത്തിനുമായി ഇടം കണ്ടെത്തുക.',
    area5_title: 'ബന്ധങ്ങൾ',
    area5_desc: 'കുടുംബ ബന്ധങ്ങളും അനുഭവങ്ങളും കൂടുതൽ വ്യക്തതയോടെ മനസ്സിലാക്കുക.',
    area6_title: 'മനസ്സ്-ശരീര സന്തുലിതാവസ്ഥ',
    area6_desc: 'മനസ്സും ശരീരവും തമ്മിലുള്ള സന്തുലിതാവസ്ഥ തിരികെ നേടുക.',
    area7_title: 'സ്വയം സംരക്ഷണം',
    area7_desc: 'ശാന്തമായി വിശ്രമിക്കാനും ആത്മപരിശോധന നടത്താനും സ്വയം സമയം അനുവദിക്കുക.',

    // Contact Page Keys

    // Services Section & Page







    // Day With Thyself

    // Philosophy

    // Approach Steps

    // Areas of Wellbeing

    // Why Aavira
    why_tag: 'എന്തുകൊണ്ട് ആവിര?',
    why_title: 'നിങ്ങളുടെ യാത്രയ്ക്കായുള്ള സുരക്ഷിത തണൽ',
    why_sub: 'ആവിരയിൽ നിങ്ങളുടെ അനുഭവത്തിനാണ് മുൻഗണന. ഓരോ വ്യക്തിയും വ്യത്യസ്തനാണെന്ന് ഞങ്ങൾ മനസ്സിലാക്കുന്നു. നിങ്ങളുടെ ആവശ്യങ്ങളെയും ലക്ഷ്യങ്ങളെയും മാനിച്ചുകൊണ്ട് അനുയോജ്യമായ തണലൊരുക്കുകയാണ് ഞങ്ങളുടെ ലക്ഷ്യം.',
    pillar1_title: 'കരുണയുള്ള സമീപനം',
    pillar1_desc: 'ആദരവും സ്നേഹവും പക്ഷപാതമില്ലായ്മയും ഉറപ്പുനൽകുന്ന അന്തരീക്ഷം.',
    pillar2_title: 'വ്യക്തിഗത സേവനം',
    pillar2_desc: 'നിങ്ങളുടെ ആവശ്യങ്ങൾക്കും സൗകര്യങ്ങൾക്കും അനുയോജ്യമായ സേവനങ്ങൾ.',
    pillar3_title: 'സംയോജിത രീതി',
    pillar3_desc: 'മാനസിക കൗൺസിലിംഗും പരമ്പരാഗത സുഖപ്പെടുത്തൽ രീതികളും ആവശ്യാനുസരണം ഒന്നിക്കുന്നു.',
    pillar4_title: 'ശാക്തീകരണം',
    pillar4_desc: 'സ്വയം തിരിച്ചറിവും വ്യക്തതയോടെയും തനതായ ആത്മവിശ്വാസവും നൽകാൻ പിന്തുണയ്ക്കുന്നു.',

    // Contact & Modal
    modal_begin: 'നിങ്ങളുടെ സുഖപ്പെടുത്തൽ യാത്ര ആരംഭിക്കൂ',
    modal_title: 'ഒരു കൺസൾട്ടേഷൻ ബുക്ക് ചെയ്യൂ',
    modal_sub: 'സേവനവും സമയവും താഴെ തിരഞ്ഞെടുക്കുക',
    modal_service_label: 'സേവനം / തെറാപ്പി തിരഞ്ഞെടുക്കുക',
    modal_choose_service: '-- ഒരു സേവനം തിരഞ്ഞെടുക്കുക --',
    modal_mode_label: 'സെഷൻ രീതി',
    modal_mode_inperson: 'സാങ്ച്വറിയിൽ നേരിട്ട്',
    modal_mode_online: 'ഓൺലൈൻ വീഡിയോ സെഷൻ',
    modal_name_label: 'പൂർണ്ണ പേര് *',
    modal_name_ph: 'നിങ്ങളുടെ പേര്',
    modal_phone_label: 'ഫോൺ നമ്പർ *',
    modal_phone_ph: '+91 00000 00000',
    modal_email_label: 'ഇമെയിൽ വിലാസം *',
    modal_email_ph: 'you@example.com',
    modal_date_label: 'ആഗ്രഹിക്കുന്ന തീയതി',
    modal_note_label: 'കുറിപ്പ് / എന്താണ് ആവിരയിലേക്ക് കൊണ്ടുവരുന്നത്?',
    modal_note_ph: 'നിങ്ങളുടെ ലക്ഷ്യങ്ങളോ വിവരങ്ങളോ പങ്കുവെക്കുക...',
    modal_submit: 'കൺസൾട്ടേഷൻ അഭ്യർത്ഥന സമർപ്പിക്കുക',
    modal_sending: 'അയക്കുന്നു...',
    modal_success_title: 'അഭ്യർത്ഥന സ്വീകരിച്ചു',
    modal_success_desc: 'നന്ദി! അഫീഫയും ആവിര ടീമും നിങ്ങളുടെ അഭ്യർത്ഥന സ്വീകരിച്ചു. ഉടൻ തന്നെ ബന്ധപ്പെടുന്നതായിരിക്കും.',

    form_name: 'പൂർണ്ണ നാമം *',
    form_phone: 'ഫോൺ നമ്പർ *',
    form_email: 'ഇമെയിൽ വിലാസം *',
    form_date: 'ആവശ്യമുള്ള തീയതി',
    form_format: 'സെഷൻ രീതി',
    format_inperson: 'സാങ്ചുറിയിൽ നേരിട്ട്',
    format_online: 'ഓൺലൈൻ വീഡിയോ സെഷൻ',
    form_service: 'ആവശ്യമുള്ള സേവനം',
    form_message: 'നിങ്ങളുടെ സന്ദേശം / സംശയം',
    form_submit: 'ബുക്കിംഗ് സന്ദേശം അയക്കുക',
    form_submitting: 'സന്ദേശം അയക്കുന്നു...',
    form_success_title: 'ബുക്കിംഗ് അഭ്യർത്ഥന ലഭിച്ചു',
    form_success_msg: 'ആവിര വെൽനെസ്സുമായി ബന്ധപ്പെട്ടതിന് നന്ദി. നിങ്ങളുടെ ബുക്കിംഗ് ലഭിച്ചു, ഞങ്ങൾ ഉടൻ ബന്ധപ്പെടും.',

    // Footer
    footer_preview_tag: 'നിങ്ങളുടെ സുഖപ്പെടുത്തൽ യാത്ര ആരംഭിക്കൂ',
    footer_preview_title: 'ഒരു സംഭാഷണത്തിലൂടെ തുടക്കമിടാം',
    footer_preview_desc: 'നിങ്ങളുടെ സംശയങ്ങൾ തീർക്കാനും അനുയോജ്യമായ സേവനം തിരഞ്ഞെടുക്കാനും ആവിരയുമായി ബന്ധപ്പെടുക.',
    footer_col1_title: 'ഇന്റഗ്രേറ്റീവ വെൽനെസ് & സ്വയം തിരിച്ചറിയൽ',
    footer_col2_title: 'വേഗത്തിലുള്ള ലിങ്കുകൾ',
    footer_col3_title: 'ഞങ്ങളുടെ കേന്ദ്രം',
    footer_directions: 'വഴി മനസ്സിലാക്കുക →',
    footer_copyright: 'ആവിര വെൽനെസ്. എല്ലാ അവകാശങ്ങളും സംരക്ഷിതം.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.setAttribute('data-lang', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
