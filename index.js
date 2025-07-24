var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// shared/schema.ts
var schema_exports = {};
__export(schema_exports, {
  ageVerifications: () => ageVerifications,
  behaviorAnalysis: () => behaviorAnalysis,
  buddyRequests: () => buddyRequests,
  buddyResponses: () => buddyResponses,
  contentModerations: () => contentModerations2,
  crewMembers: () => crewMembers,
  crewMembersRelations: () => crewMembersRelations,
  crews: () => crews,
  crewsRelations: () => crewsRelations,
  deviceFingerprints: () => deviceFingerprints,
  djCollaborations: () => djCollaborations,
  djGigApplications: () => djGigApplications,
  djGigs: () => djGigs,
  djMixLikes: () => djMixLikes,
  djMixes: () => djMixes,
  djProfiles: () => djProfiles,
  emergencyContacts: () => emergencyContacts,
  emergencyContactsRelations: () => emergencyContactsRelations,
  emergencyIncidents: () => emergencyIncidents2,
  eventAttendees: () => eventAttendees,
  eventAttendeesRelations: () => eventAttendeesRelations,
  eventPhotos: () => eventPhotos,
  events: () => events,
  eventsRelations: () => eventsRelations,
  harmReductionResources: () => harmReductionResources,
  insertAgeVerificationSchema: () => insertAgeVerificationSchema,
  insertBehaviorAnalysisSchema: () => insertBehaviorAnalysisSchema,
  insertContentModerationSchema: () => insertContentModerationSchema,
  insertCrewMemberSchema: () => insertCrewMemberSchema,
  insertCrewSchema: () => insertCrewSchema,
  insertDeviceFingerprintSchema: () => insertDeviceFingerprintSchema,
  insertDjCollaborationSchema: () => insertDjCollaborationSchema,
  insertDjGigApplicationSchema: () => insertDjGigApplicationSchema,
  insertDjGigSchema: () => insertDjGigSchema,
  insertDjMixLikeSchema: () => insertDjMixLikeSchema,
  insertDjMixSchema: () => insertDjMixSchema,
  insertDjProfileSchema: () => insertDjProfileSchema,
  insertEmergencyContactSchema: () => insertEmergencyContactSchema,
  insertEmergencyIncidentSchema: () => insertEmergencyIncidentSchema,
  insertEventAttendeeSchema: () => insertEventAttendeeSchema,
  insertEventPhotoSchema: () => insertEventPhotoSchema,
  insertEventSchema: () => insertEventSchema,
  insertHarmReductionResourceSchema: () => insertHarmReductionResourceSchema,
  insertMarketplaceFavoriteSchema: () => insertMarketplaceFavoriteSchema,
  insertMarketplaceItemSchema: () => insertMarketplaceItemSchema,
  insertMarketplaceMessageSchema: () => insertMarketplaceMessageSchema,
  insertMarketplaceOfferSchema: () => insertMarketplaceOfferSchema,
  insertMarketplaceReviewSchema: () => insertMarketplaceReviewSchema,
  insertMatchSchema: () => insertMatchSchema,
  insertMessageSchema: () => insertMessageSchema,
  insertNewsfeedCommentSchema: () => insertNewsfeedCommentSchema,
  insertNewsfeedLikeSchema: () => insertNewsfeedLikeSchema,
  insertNewsfeedPostSchema: () => insertNewsfeedPostSchema,
  insertNewsfeedShareSchema: () => insertNewsfeedShareSchema,
  insertOutfitRecommendationSchema: () => insertOutfitRecommendationSchema,
  insertPLURChallengeSchema: () => insertPLURChallengeSchema,
  insertRaveBuddySchema: () => insertRaveBuddySchema,
  insertRiskMonitoringSchema: () => insertRiskMonitoringSchema,
  insertSafetyCheckInSchema: () => insertSafetyCheckInSchema,
  insertSafetyReportSchema: () => insertSafetyReportSchema,
  insertUserLikeSchema: () => insertUserLikeSchema,
  insertUserPLURProgressSchema: () => insertUserPLURProgressSchema,
  insertUserSchema: () => insertUserSchema,
  insertVenueRatingSchema: () => insertVenueRatingSchema,
  marketplaceFavorites: () => marketplaceFavorites,
  marketplaceFavoritesRelations: () => marketplaceFavoritesRelations,
  marketplaceItems: () => marketplaceItems,
  marketplaceItemsRelations: () => marketplaceItemsRelations,
  marketplaceMessages: () => marketplaceMessages,
  marketplaceMessagesRelations: () => marketplaceMessagesRelations,
  marketplaceOffers: () => marketplaceOffers,
  marketplaceOffersRelations: () => marketplaceOffersRelations,
  marketplaceReviews: () => marketplaceReviews,
  marketplaceReviewsRelations: () => marketplaceReviewsRelations,
  matches: () => matches,
  matchesRelations: () => matchesRelations,
  messages: () => messages,
  messagesRelations: () => messagesRelations,
  newsfeedComments: () => newsfeedComments,
  newsfeedCommentsRelations: () => newsfeedCommentsRelations,
  newsfeedLikes: () => newsfeedLikes,
  newsfeedLikesRelations: () => newsfeedLikesRelations,
  newsfeedPosts: () => newsfeedPosts,
  newsfeedPostsRelations: () => newsfeedPostsRelations,
  newsfeedShares: () => newsfeedShares,
  newsfeedSharesRelations: () => newsfeedSharesRelations,
  outfitRecommendations: () => outfitRecommendations,
  plurChallenges: () => plurChallenges,
  plurChallengesRelations: () => plurChallengesRelations,
  raveBuddies: () => raveBuddies,
  raveBuddiesRelations: () => raveBuddiesRelations,
  riskMonitoring: () => riskMonitoring,
  safetyCheckIns: () => safetyCheckIns,
  safetyCheckInsRelations: () => safetyCheckInsRelations,
  safetyGroupMembers: () => safetyGroupMembers,
  safetyGroups: () => safetyGroups,
  safetyReports: () => safetyReports,
  safetyReportsRelations: () => safetyReportsRelations,
  sessions: () => sessions,
  userLikes: () => userLikes,
  userLikesRelations: () => userLikesRelations,
  userPLURProgress: () => userPLURProgress,
  userPLURProgressRelations: () => userPLURProgressRelations,
  userTrustScores: () => userTrustScores,
  userVerifications: () => userVerifications,
  userVouches: () => userVouches,
  users: () => users,
  usersRelations: () => usersRelations,
  venueRatings: () => venueRatings,
  venueRatingsRelations: () => venueRatingsRelations
});
import {
  pgTable,
  text,
  varchar,
  timestamp,
  jsonb,
  index,
  serial,
  integer,
  boolean,
  decimal,
  date
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { createInsertSchema } from "drizzle-zod";
var sessions, users, events, eventPhotos, crews, crewMembers, matches, plurChallenges, userPLURProgress, userVerifications, userVouches, userTrustScores, buddyRequests, buddyResponses, safetyGroups, safetyGroupMembers, messages, eventAttendees, userLikes, emergencyContacts, safetyCheckIns, raveBuddies, safetyReports, venueRatings, harmReductionResources, marketplaceItems, marketplaceMessages, marketplaceReviews, marketplaceFavorites, marketplaceOffers, newsfeedPosts, newsfeedLikes, newsfeedComments, newsfeedShares, usersRelations, crewsRelations, crewMembersRelations, plurChallengesRelations, userPLURProgressRelations, eventsRelations, matchesRelations, messagesRelations, eventAttendeesRelations, userLikesRelations, emergencyContactsRelations, safetyCheckInsRelations, raveBuddiesRelations, safetyReportsRelations, venueRatingsRelations, marketplaceItemsRelations, marketplaceMessagesRelations, marketplaceReviewsRelations, marketplaceFavoritesRelations, marketplaceOffersRelations, newsfeedPostsRelations, newsfeedLikesRelations, newsfeedCommentsRelations, newsfeedSharesRelations, insertUserSchema, insertCrewSchema, insertCrewMemberSchema, insertPLURChallengeSchema, insertUserPLURProgressSchema, insertEventSchema, insertMatchSchema, insertMessageSchema, insertEventAttendeeSchema, insertUserLikeSchema, insertEmergencyContactSchema, insertSafetyCheckInSchema, insertRaveBuddySchema, insertSafetyReportSchema, insertVenueRatingSchema, insertHarmReductionResourceSchema, insertMarketplaceItemSchema, insertMarketplaceMessageSchema, insertMarketplaceReviewSchema, insertMarketplaceFavoriteSchema, insertMarketplaceOfferSchema, insertNewsfeedPostSchema, insertNewsfeedLikeSchema, insertNewsfeedCommentSchema, insertNewsfeedShareSchema, outfitRecommendations, insertOutfitRecommendationSchema, ageVerifications, behaviorAnalysis, contentModerations2, emergencyIncidents2, deviceFingerprints, riskMonitoring, insertAgeVerificationSchema, insertBehaviorAnalysisSchema, insertContentModerationSchema, insertEmergencyIncidentSchema, insertDeviceFingerprintSchema, insertRiskMonitoringSchema, insertEventPhotoSchema, djProfiles, djMixes, djMixLikes, djGigs, djGigApplications, djCollaborations, insertDjProfileSchema, insertDjMixSchema, insertDjMixLikeSchema, insertDjGigSchema, insertDjGigApplicationSchema, insertDjCollaborationSchema;
var init_schema = __esm({
  "shared/schema.ts"() {
    "use strict";
    sessions = pgTable(
      "sessions",
      {
        sid: varchar("sid").primaryKey(),
        sess: jsonb("sess").notNull(),
        expire: timestamp("expire").notNull()
      },
      (table) => [index("IDX_session_expire").on(table.expire)]
    );
    users = pgTable("users", {
      id: varchar("id").primaryKey().notNull(),
      email: varchar("email").unique(),
      username: varchar("username").unique(),
      firstName: varchar("first_name"),
      lastName: varchar("last_name"),
      profileImageUrl: varchar("profile_image_url"),
      age: integer("age"),
      gender: varchar("gender"),
      bio: text("bio"),
      location: varchar("location"),
      latitude: decimal("latitude", { precision: 10, scale: 8 }),
      longitude: decimal("longitude", { precision: 11, scale: 8 }),
      musicPreferences: text("music_preferences").array(),
      // PLUR & Community-First Relationship Features
      relationshipStyle: varchar("relationship_style", {
        enum: ["monogamous", "polyamorous", "open", "community_first", "festival_family", "crew_oriented"]
      }).default("community_first"),
      plurValues: text("plur_values").array(),
      // ["peace", "love", "unity", "respect", "acceptance", "inclusion"]
      vibeProfile: jsonb("vibe_profile").$type(),
      // Anti-Possession Settings
      communicationStyle: varchar("communication_style", {
        enum: ["direct", "gentle", "playful", "deep", "spiritual"]
      }).default("direct"),
      boundariesAndConsent: text("boundaries_and_consent"),
      relationshipGoals: text("relationship_goals").array(),
      // ["friendship", "romance", "crew_member", "festival_buddy", "life_partner", "play_partner"]
      // Crew/Group Features
      crewName: varchar("crew_name"),
      crewRole: varchar("crew_role"),
      // "leader", "member", "floater", "solo"
      openToNewCrew: boolean("open_to_new_crew").default(true),
      // DJ Profile Features
      isDj: boolean("is_dj").default(false),
      djName: varchar("dj_name"),
      djBio: text("dj_bio"),
      djGenres: text("dj_genres").array(),
      mixLinks: jsonb("mix_links").$type(),
      upcomingGigs: jsonb("upcoming_gigs").$type(),
      djExperience: varchar("dj_experience", {
        enum: ["beginner", "intermediate", "professional", "headliner"]
      }),
      djSocials: jsonb("dj_socials").$type(),
      isProfileComplete: boolean("is_profile_complete").default(false),
      // Age Verification & Safety
      ageVerified: boolean("age_verified").default(false),
      ageVerificationMethod: varchar("age_verification_method", {
        enum: ["government_id", "biometric", "social_auth", "pending"]
      }),
      ageVerificationDate: timestamp("age_verification_date"),
      governmentIdVerified: boolean("government_id_verified").default(false),
      biometricVerified: boolean("biometric_verified").default(false),
      // Risk Scoring
      riskScore: decimal("risk_score", { precision: 5, scale: 2 }).default("0.00"),
      riskLevel: varchar("risk_level", {
        enum: ["low", "medium", "high", "critical"]
      }).default("low"),
      lastRiskAssessment: timestamp("last_risk_assessment"),
      // Account Status
      accountStatus: varchar("account_status", {
        enum: ["active", "suspended", "flagged", "pending_review", "banned"]
      }).default("active"),
      flaggedReason: text("flagged_reason"),
      suspensionDate: timestamp("suspension_date"),
      // Device Fingerprinting
      deviceFingerprint: text("device_fingerprint"),
      ipAddress: varchar("ip_address"),
      lastLoginIp: varchar("last_login_ip"),
      // Emergency Contacts
      emergencyContactName: varchar("emergency_contact_name"),
      emergencyContactPhone: varchar("emergency_contact_phone"),
      emergencyContactRelation: varchar("emergency_contact_relation"),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    events = pgTable("events", {
      id: serial("id").primaryKey(),
      title: varchar("title", { length: 255 }).notNull(),
      description: text("description"),
      date: timestamp("date").notNull(),
      location: varchar("location").notNull(),
      address: text("address"),
      ticketPrice: decimal("ticket_price", { precision: 10, scale: 2 }),
      genres: text("genres").array(),
      imageUrl: varchar("image_url"),
      externalUrl: varchar("external_url"),
      // For EDMTrain and other external event links
      organizerId: varchar("organizer_id").references(() => users.id),
      createdAt: timestamp("created_at").defaultNow()
    });
    eventPhotos = pgTable("event_photos", {
      id: serial("id").primaryKey(),
      eventId: integer("event_id").references(() => events.id).notNull(),
      userId: varchar("user_id").references(() => users.id).notNull(),
      photoUrl: varchar("photo_url").notNull(),
      caption: text("caption"),
      isApproved: boolean("is_approved").default(false),
      createdAt: timestamp("created_at").defaultNow()
    });
    crews = pgTable("crews", {
      id: serial("id").primaryKey(),
      name: varchar("name", { length: 100 }).notNull(),
      description: text("description"),
      crewType: varchar("crew_type", {
        enum: ["festival_family", "local_crew", "online_community", "event_specific", "lifestyle_crew"]
      }).default("local_crew"),
      plurPhilosophy: text("plur_philosophy"),
      isPublic: boolean("is_public").default(true),
      maxMembers: integer("max_members").default(50),
      founderId: varchar("founder_id").references(() => users.id).notNull(),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    crewMembers = pgTable("crew_members", {
      id: serial("id").primaryKey(),
      crewId: integer("crew_id").references(() => crews.id).notNull(),
      userId: varchar("user_id").references(() => users.id).notNull(),
      role: varchar("role", { enum: ["founder", "admin", "member", "pending"] }).default("pending"),
      joinedAt: timestamp("joined_at").defaultNow(),
      contributionLevel: varchar("contribution_level", {
        enum: ["core", "active", "casual", "observer"]
      }).default("casual")
    });
    matches = pgTable("matches", {
      id: serial("id").primaryKey(),
      userId1: varchar("user_id_1").references(() => users.id).notNull(),
      userId2: varchar("user_id_2").references(() => users.id).notNull(),
      matchType: varchar("match_type", {
        enum: ["individual", "crew_to_crew", "individual_to_crew", "festival_family"]
      }).default("individual"),
      connectionIntention: text("connection_intention").array(),
      // ["friendship", "romance", "crew_member", "festival_buddy", "mentor", "mentee"]
      status: varchar("status", { enum: ["pending", "matched", "rejected"] }).default("pending"),
      matchedAt: timestamp("matched_at"),
      createdAt: timestamp("created_at").defaultNow()
    });
    plurChallenges = pgTable("plur_challenges", {
      id: serial("id").primaryKey(),
      title: varchar("title", { length: 200 }).notNull(),
      description: text("description").notNull(),
      challengeType: varchar("challenge_type", {
        enum: ["community_service", "mentorship", "event_organization", "conflict_resolution", "inclusion_action"]
      }).notNull(),
      plurValue: varchar("plur_value", {
        enum: ["peace", "love", "unity", "respect", "acceptance", "inclusion"]
      }).notNull(),
      pointsReward: integer("points_reward").default(10),
      verificationRequired: boolean("verification_required").default(true),
      createdAt: timestamp("created_at").defaultNow()
    });
    userPLURProgress = pgTable("user_plur_progress", {
      id: serial("id").primaryKey(),
      userId: varchar("user_id").references(() => users.id).notNull(),
      challengeId: integer("challenge_id").references(() => plurChallenges.id).notNull(),
      status: varchar("status", { enum: ["started", "completed", "verified"] }).default("started"),
      completedAt: timestamp("completed_at"),
      verifiedAt: timestamp("verified_at"),
      verifiedBy: varchar("verified_by").references(() => users.id),
      evidenceUrl: varchar("evidence_url"),
      reflection: text("reflection"),
      pointsEarned: integer("points_earned").default(0)
    });
    userVerifications = pgTable("user_verifications", {
      id: serial("id").primaryKey(),
      userId: varchar("user_id").references(() => users.id).notNull(),
      verificationType: varchar("verification_type", {
        enum: ["sms", "email", "photo", "government_id", "social_media", "event_attendance"]
      }).notNull(),
      verificationData: text("verification_data"),
      // Encrypted verification details
      status: varchar("status", { enum: ["pending", "verified", "rejected", "expired"] }).default("pending"),
      verifiedAt: timestamp("verified_at"),
      expiresAt: timestamp("expires_at"),
      attemptCount: integer("attempt_count").default(0),
      lastAttempt: timestamp("last_attempt"),
      createdAt: timestamp("created_at").defaultNow()
    });
    userVouches = pgTable("user_vouches", {
      id: serial("id").primaryKey(),
      voucherId: varchar("voucher_id").references(() => users.id).notNull(),
      vouchedUserId: varchar("vouched_user_id").references(() => users.id).notNull(),
      vouchType: varchar("vouch_type", {
        enum: ["safety", "reliability", "community_spirit", "plur_values", "event_behavior"]
      }).notNull(),
      strength: integer("strength").default(1),
      // 1-5 scale
      comment: text("comment"),
      eventId: integer("event_id").references(() => events.id),
      // Event context
      isActive: boolean("is_active").default(true),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    userTrustScores = pgTable("user_trust_scores", {
      id: serial("id").primaryKey(),
      userId: varchar("user_id").references(() => users.id).notNull(),
      trustScore: decimal("trust_score", { precision: 4, scale: 2 }).default("0.00"),
      // 0-100 scale
      verificationScore: decimal("verification_score", { precision: 4, scale: 2 }).default("0.00"),
      vouchingScore: decimal("vouching_score", { precision: 4, scale: 2 }).default("0.00"),
      behaviorScore: decimal("behavior_score", { precision: 4, scale: 2 }).default("100.00"),
      lastCalculated: timestamp("last_calculated").defaultNow(),
      calculationVersion: integer("calculation_version").default(1)
    });
    buddyRequests = pgTable("buddy_requests", {
      id: serial("id").primaryKey(),
      requesterId: varchar("requester_id").references(() => users.id).notNull(),
      eventId: integer("event_id").references(() => events.id).notNull(),
      requestType: varchar("request_type", {
        enum: ["safety_buddy", "group_meetup", "ride_share", "accommodation_share", "explore_together"]
      }).notNull(),
      groupSize: integer("group_size").default(1),
      preferredGender: varchar("preferred_gender", { enum: ["any", "male", "female", "non_binary"] }).default("any"),
      ageRange: varchar("age_range"),
      // e.g., "21-30"
      activities: text("activities").array(),
      // Array of preferred activities
      meetupLocation: varchar("meetup_location"),
      meetupTime: timestamp("meetup_time"),
      duration: varchar("duration"),
      // e.g., "whole_event", "few_hours", "specific_set"
      notes: text("notes"),
      isActive: boolean("is_active").default(true),
      maxResponses: integer("max_responses").default(5),
      responseCount: integer("response_count").default(0),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    buddyResponses = pgTable("buddy_responses", {
      id: serial("id").primaryKey(),
      requestId: integer("request_id").references(() => buddyRequests.id).notNull(),
      responderId: varchar("responder_id").references(() => users.id).notNull(),
      message: text("message"),
      status: varchar("status", { enum: ["pending", "accepted", "declined", "completed"] }).default("pending"),
      meetupConfirmed: boolean("meetup_confirmed").default(false),
      safetyCheckIn: boolean("safety_check_in").default(false),
      rating: integer("rating"),
      // 1-5 stars after completion
      feedback: text("feedback"),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    safetyGroups = pgTable("safety_groups", {
      id: serial("id").primaryKey(),
      eventId: integer("event_id").references(() => events.id).notNull(),
      groupName: varchar("group_name").notNull(),
      leaderId: varchar("leader_id").references(() => users.id).notNull(),
      maxMembers: integer("max_members").default(6),
      currentMembers: integer("current_members").default(1),
      emergencyProcedure: text("emergency_procedure"),
      checkInInterval: integer("check_in_interval").default(60),
      // minutes
      lastGroupCheckIn: timestamp("last_group_check_in"),
      isActive: boolean("is_active").default(true),
      createdAt: timestamp("created_at").defaultNow()
    });
    safetyGroupMembers = pgTable("safety_group_members", {
      id: serial("id").primaryKey(),
      groupId: integer("group_id").references(() => safetyGroups.id).notNull(),
      userId: varchar("user_id").references(() => users.id).notNull(),
      role: varchar("role", { enum: ["leader", "member", "emergency_contact"] }).default("member"),
      joinedAt: timestamp("joined_at").defaultNow(),
      lastCheckIn: timestamp("last_check_in"),
      status: varchar("status", { enum: ["active", "inactive", "emergency"] }).default("active")
    });
    messages = pgTable("messages", {
      id: serial("id").primaryKey(),
      matchId: integer("match_id").references(() => matches.id).notNull(),
      senderId: varchar("sender_id").references(() => users.id).notNull(),
      content: text("content").notNull(),
      sentAt: timestamp("sent_at").defaultNow()
    });
    eventAttendees = pgTable("event_attendees", {
      id: serial("id").primaryKey(),
      eventId: integer("event_id").references(() => events.id).notNull(),
      userId: varchar("user_id").references(() => users.id).notNull(),
      status: varchar("status", { enum: ["interested", "attending"] }).default("interested"),
      createdAt: timestamp("created_at").defaultNow()
    });
    userLikes = pgTable("user_likes", {
      id: serial("id").primaryKey(),
      likerId: varchar("liker_id").references(() => users.id).notNull(),
      likedId: varchar("liked_id").references(() => users.id).notNull(),
      createdAt: timestamp("created_at").defaultNow()
    });
    emergencyContacts = pgTable("emergency_contacts", {
      id: serial("id").primaryKey(),
      userId: varchar("user_id").references(() => users.id).notNull(),
      name: varchar("name").notNull(),
      phoneNumber: varchar("phone_number").notNull(),
      relationship: varchar("relationship").notNull(),
      isPrimary: boolean("is_primary").default(false),
      createdAt: timestamp("created_at").defaultNow()
    });
    safetyCheckIns = pgTable("safety_check_ins", {
      id: serial("id").primaryKey(),
      userId: varchar("user_id").references(() => users.id).notNull(),
      eventId: integer("event_id").references(() => events.id),
      location: varchar("location"),
      status: varchar("status", { enum: ["safe", "need_help", "emergency"] }).notNull(),
      message: text("message"),
      latitude: decimal("latitude", { precision: 10, scale: 8 }),
      longitude: decimal("longitude", { precision: 11, scale: 8 }),
      createdAt: timestamp("created_at").defaultNow()
    });
    raveBuddies = pgTable("rave_buddies", {
      id: serial("id").primaryKey(),
      requesterId: varchar("requester_id").references(() => users.id).notNull(),
      buddyId: varchar("buddy_id").references(() => users.id).notNull(),
      eventId: integer("event_id").references(() => events.id).notNull(),
      status: varchar("status", { enum: ["pending", "accepted", "completed", "cancelled"] }).default("pending"),
      meetupLocation: varchar("meetup_location"),
      meetupTime: timestamp("meetup_time"),
      notes: text("notes"),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    safetyReports = pgTable("safety_reports", {
      id: serial("id").primaryKey(),
      reporterId: varchar("reporter_id").references(() => users.id),
      reportedUserId: varchar("reported_user_id").references(() => users.id),
      eventId: integer("event_id").references(() => events.id),
      category: varchar("category", {
        enum: ["harassment", "unsafe_behavior", "venue_safety", "drug_related", "other"]
      }).notNull(),
      description: text("description").notNull(),
      location: varchar("location"),
      isAnonymous: boolean("is_anonymous").default(false),
      status: varchar("status", { enum: ["pending", "investigating", "resolved", "dismissed"] }).default("pending"),
      createdAt: timestamp("created_at").defaultNow()
    });
    venueRatings = pgTable("venue_ratings", {
      id: serial("id").primaryKey(),
      userId: varchar("user_id").references(() => users.id).notNull(),
      eventId: integer("event_id").references(() => events.id),
      venueName: varchar("venue_name").notNull(),
      safetyRating: integer("safety_rating"),
      // 1-5 scale
      accessibilityRating: integer("accessibility_rating"),
      // 1-5 scale
      securityPresence: boolean("security_presence"),
      wellLitAreas: boolean("well_lit_areas"),
      safeDrinkingWater: boolean("safe_drinking_water"),
      medicalStaffPresent: boolean("medical_staff_present"),
      comments: text("comments"),
      createdAt: timestamp("created_at").defaultNow()
    });
    harmReductionResources = pgTable("harm_reduction_resources", {
      id: serial("id").primaryKey(),
      title: varchar("title").notNull(),
      description: text("description"),
      resourceType: varchar("resource_type", {
        enum: ["testing_kit", "hotline", "website", "app", "location"]
      }).notNull(),
      url: varchar("url"),
      phoneNumber: varchar("phone_number"),
      location: varchar("location"),
      isVerified: boolean("is_verified").default(false),
      createdAt: timestamp("created_at").defaultNow()
    });
    marketplaceItems = pgTable("marketplace_items", {
      id: serial("id").primaryKey(),
      sellerId: varchar("seller_id").notNull().references(() => users.id),
      title: varchar("title").notNull(),
      description: text("description"),
      category: varchar("category", {
        enum: ["tops", "bottoms", "accessories", "shoes", "costumes", "jewelry", "bags", "other"]
      }).notNull(),
      subcategory: varchar("subcategory"),
      brand: varchar("brand"),
      size: varchar("size"),
      color: varchar("color"),
      condition: varchar("condition", {
        enum: ["new_with_tags", "new_without_tags", "excellent", "good", "fair", "worn"]
      }).notNull(),
      price: decimal("price", { precision: 10, scale: 2 }).notNull(),
      originalPrice: decimal("original_price", { precision: 10, scale: 2 }),
      isNegotiable: boolean("is_negotiable").default(true),
      isAvailable: boolean("is_available").default(true),
      images: text("images").array(),
      tags: text("tags").array(),
      location: varchar("location"),
      shippingOptions: text("shipping_options").array(),
      measurements: jsonb("measurements"),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    marketplaceMessages = pgTable("marketplace_messages", {
      id: serial("id").primaryKey(),
      itemId: integer("item_id").notNull().references(() => marketplaceItems.id),
      senderId: varchar("sender_id").notNull().references(() => users.id),
      receiverId: varchar("receiver_id").notNull().references(() => users.id),
      message: text("message").notNull(),
      isRead: boolean("is_read").default(false),
      createdAt: timestamp("created_at").defaultNow()
    });
    marketplaceReviews = pgTable("marketplace_reviews", {
      id: serial("id").primaryKey(),
      itemId: integer("item_id").notNull().references(() => marketplaceItems.id),
      reviewerId: varchar("reviewer_id").notNull().references(() => users.id),
      sellerId: varchar("seller_id").notNull().references(() => users.id),
      rating: integer("rating").notNull(),
      comment: text("comment"),
      transactionType: varchar("transaction_type", {
        enum: ["purchase", "trade", "rental"]
      }).notNull(),
      createdAt: timestamp("created_at").defaultNow()
    });
    marketplaceFavorites = pgTable("marketplace_favorites", {
      id: serial("id").primaryKey(),
      userId: varchar("user_id").notNull().references(() => users.id),
      itemId: integer("item_id").notNull().references(() => marketplaceItems.id),
      createdAt: timestamp("created_at").defaultNow()
    });
    marketplaceOffers = pgTable("marketplace_offers", {
      id: serial("id").primaryKey(),
      itemId: integer("item_id").notNull().references(() => marketplaceItems.id),
      buyerId: varchar("buyer_id").notNull().references(() => users.id),
      sellerId: varchar("seller_id").notNull().references(() => users.id),
      offerPrice: decimal("offer_price", { precision: 10, scale: 2 }),
      offerType: varchar("offer_type", {
        enum: ["purchase", "trade", "rental"]
      }).notNull(),
      tradeItems: text("trade_items").array(),
      message: text("message"),
      status: varchar("status", {
        enum: ["pending", "accepted", "declined", "countered", "completed"]
      }).default("pending"),
      expiresAt: timestamp("expires_at"),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    newsfeedPosts = pgTable("newsfeed_posts", {
      id: serial("id").primaryKey(),
      userId: varchar("user_id").notNull().references(() => users.id),
      postType: varchar("post_type", {
        enum: ["event_update", "festival_review", "outfit_share", "crew_announcement", "safety_alert", "dj_mix", "meetup", "general"]
      }).notNull(),
      content: text("content").notNull(),
      eventId: integer("event_id").references(() => events.id),
      crewId: integer("crew_id").references(() => crews.id),
      images: text("images").array(),
      videoUrl: varchar("video_url"),
      visibility: varchar("visibility", {
        enum: ["public", "crew_only", "friends_only"]
      }).default("public"),
      location: varchar("location"),
      tags: text("tags").array(),
      isPinned: boolean("is_pinned").default(false),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    newsfeedLikes = pgTable("newsfeed_likes", {
      id: serial("id").primaryKey(),
      postId: integer("post_id").notNull().references(() => newsfeedPosts.id),
      userId: varchar("user_id").notNull().references(() => users.id),
      createdAt: timestamp("created_at").defaultNow()
    });
    newsfeedComments = pgTable("newsfeed_comments", {
      id: serial("id").primaryKey(),
      postId: integer("post_id").notNull().references(() => newsfeedPosts.id),
      userId: varchar("user_id").notNull().references(() => users.id),
      parentCommentId: integer("parent_comment_id").references(() => newsfeedComments.id),
      content: text("content").notNull(),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    newsfeedShares = pgTable("newsfeed_shares", {
      id: serial("id").primaryKey(),
      postId: integer("post_id").notNull().references(() => newsfeedPosts.id),
      userId: varchar("user_id").notNull().references(() => users.id),
      shareMessage: text("share_message"),
      sharedTo: varchar("shared_to", {
        enum: ["timeline", "crew", "message"]
      }).default("timeline"),
      createdAt: timestamp("created_at").defaultNow()
    });
    usersRelations = relations(users, ({ many }) => ({
      organizedEvents: many(events),
      sentMatches: many(matches, { relationName: "user1Matches" }),
      receivedMatches: many(matches, { relationName: "user2Matches" }),
      sentMessages: many(messages),
      eventAttendances: many(eventAttendees),
      sentLikes: many(userLikes, { relationName: "sentLikes" }),
      receivedLikes: many(userLikes, { relationName: "receivedLikes" }),
      // Community-First Relations
      foundedCrews: many(crews),
      crewMemberships: many(crewMembers),
      plurProgress: many(userPLURProgress),
      verifiedChallenges: many(userPLURProgress, { relationName: "verifiedBy" }),
      // Marketplace Relations
      marketplaceItems: many(marketplaceItems),
      sentMarketplaceMessages: many(marketplaceMessages, { relationName: "sentMarketplaceMessages" }),
      receivedMarketplaceMessages: many(marketplaceMessages, { relationName: "receivedMarketplaceMessages" }),
      marketplaceReviews: many(marketplaceReviews, { relationName: "reviewerReviews" }),
      receivedReviews: many(marketplaceReviews, { relationName: "sellerReviews" }),
      marketplaceFavorites: many(marketplaceFavorites),
      sentOffers: many(marketplaceOffers, { relationName: "buyerOffers" }),
      receivedOffers: many(marketplaceOffers, { relationName: "sellerOffers" }),
      // Newsfeed Relations
      newsfeedPosts: many(newsfeedPosts),
      newsfeedLikes: many(newsfeedLikes),
      newsfeedComments: many(newsfeedComments),
      newsfeedShares: many(newsfeedShares)
    }));
    crewsRelations = relations(crews, ({ one, many }) => ({
      founder: one(users, {
        fields: [crews.founderId],
        references: [users.id]
      }),
      members: many(crewMembers)
    }));
    crewMembersRelations = relations(crewMembers, ({ one }) => ({
      crew: one(crews, {
        fields: [crewMembers.crewId],
        references: [crews.id]
      }),
      user: one(users, {
        fields: [crewMembers.userId],
        references: [users.id]
      })
    }));
    plurChallengesRelations = relations(plurChallenges, ({ many }) => ({
      userProgress: many(userPLURProgress)
    }));
    userPLURProgressRelations = relations(userPLURProgress, ({ one }) => ({
      user: one(users, {
        fields: [userPLURProgress.userId],
        references: [users.id]
      }),
      challenge: one(plurChallenges, {
        fields: [userPLURProgress.challengeId],
        references: [plurChallenges.id]
      }),
      verifier: one(users, {
        fields: [userPLURProgress.verifiedBy],
        references: [users.id]
      })
    }));
    eventsRelations = relations(events, ({ one, many }) => ({
      organizer: one(users, {
        fields: [events.organizerId],
        references: [users.id]
      }),
      attendees: many(eventAttendees)
    }));
    matchesRelations = relations(matches, ({ one, many }) => ({
      user1: one(users, {
        fields: [matches.userId1],
        references: [users.id],
        relationName: "user1Matches"
      }),
      user2: one(users, {
        fields: [matches.userId2],
        references: [users.id],
        relationName: "user2Matches"
      }),
      messages: many(messages)
    }));
    messagesRelations = relations(messages, ({ one }) => ({
      match: one(matches, {
        fields: [messages.matchId],
        references: [matches.id]
      }),
      sender: one(users, {
        fields: [messages.senderId],
        references: [users.id]
      })
    }));
    eventAttendeesRelations = relations(eventAttendees, ({ one }) => ({
      event: one(events, {
        fields: [eventAttendees.eventId],
        references: [events.id]
      }),
      user: one(users, {
        fields: [eventAttendees.userId],
        references: [users.id]
      })
    }));
    userLikesRelations = relations(userLikes, ({ one }) => ({
      liker: one(users, {
        fields: [userLikes.likerId],
        references: [users.id],
        relationName: "sentLikes"
      }),
      liked: one(users, {
        fields: [userLikes.likedId],
        references: [users.id],
        relationName: "receivedLikes"
      })
    }));
    emergencyContactsRelations = relations(emergencyContacts, ({ one }) => ({
      user: one(users, {
        fields: [emergencyContacts.userId],
        references: [users.id]
      })
    }));
    safetyCheckInsRelations = relations(safetyCheckIns, ({ one }) => ({
      user: one(users, {
        fields: [safetyCheckIns.userId],
        references: [users.id]
      }),
      event: one(events, {
        fields: [safetyCheckIns.eventId],
        references: [events.id]
      })
    }));
    raveBuddiesRelations = relations(raveBuddies, ({ one }) => ({
      requester: one(users, {
        fields: [raveBuddies.requesterId],
        references: [users.id],
        relationName: "buddyRequests"
      }),
      buddy: one(users, {
        fields: [raveBuddies.buddyId],
        references: [users.id],
        relationName: "buddyReceived"
      }),
      event: one(events, {
        fields: [raveBuddies.eventId],
        references: [events.id]
      })
    }));
    safetyReportsRelations = relations(safetyReports, ({ one }) => ({
      reporter: one(users, {
        fields: [safetyReports.reporterId],
        references: [users.id],
        relationName: "reportsMade"
      }),
      reportedUser: one(users, {
        fields: [safetyReports.reportedUserId],
        references: [users.id],
        relationName: "reportsReceived"
      }),
      event: one(events, {
        fields: [safetyReports.eventId],
        references: [events.id]
      })
    }));
    venueRatingsRelations = relations(venueRatings, ({ one }) => ({
      user: one(users, {
        fields: [venueRatings.userId],
        references: [users.id]
      }),
      event: one(events, {
        fields: [venueRatings.eventId],
        references: [events.id]
      })
    }));
    marketplaceItemsRelations = relations(marketplaceItems, ({ one, many }) => ({
      seller: one(users, {
        fields: [marketplaceItems.sellerId],
        references: [users.id]
      }),
      messages: many(marketplaceMessages),
      reviews: many(marketplaceReviews),
      favorites: many(marketplaceFavorites),
      offers: many(marketplaceOffers)
    }));
    marketplaceMessagesRelations = relations(marketplaceMessages, ({ one }) => ({
      item: one(marketplaceItems, {
        fields: [marketplaceMessages.itemId],
        references: [marketplaceItems.id]
      }),
      sender: one(users, {
        fields: [marketplaceMessages.senderId],
        references: [users.id],
        relationName: "sentMarketplaceMessages"
      }),
      receiver: one(users, {
        fields: [marketplaceMessages.receiverId],
        references: [users.id],
        relationName: "receivedMarketplaceMessages"
      })
    }));
    marketplaceReviewsRelations = relations(marketplaceReviews, ({ one }) => ({
      item: one(marketplaceItems, {
        fields: [marketplaceReviews.itemId],
        references: [marketplaceItems.id]
      }),
      reviewer: one(users, {
        fields: [marketplaceReviews.reviewerId],
        references: [users.id],
        relationName: "reviewerReviews"
      }),
      seller: one(users, {
        fields: [marketplaceReviews.sellerId],
        references: [users.id],
        relationName: "sellerReviews"
      })
    }));
    marketplaceFavoritesRelations = relations(marketplaceFavorites, ({ one }) => ({
      user: one(users, {
        fields: [marketplaceFavorites.userId],
        references: [users.id]
      }),
      item: one(marketplaceItems, {
        fields: [marketplaceFavorites.itemId],
        references: [marketplaceItems.id]
      })
    }));
    marketplaceOffersRelations = relations(marketplaceOffers, ({ one }) => ({
      item: one(marketplaceItems, {
        fields: [marketplaceOffers.itemId],
        references: [marketplaceItems.id]
      }),
      buyer: one(users, {
        fields: [marketplaceOffers.buyerId],
        references: [users.id],
        relationName: "buyerOffers"
      }),
      seller: one(users, {
        fields: [marketplaceOffers.sellerId],
        references: [users.id],
        relationName: "sellerOffers"
      })
    }));
    newsfeedPostsRelations = relations(newsfeedPosts, ({ one, many }) => ({
      user: one(users, {
        fields: [newsfeedPosts.userId],
        references: [users.id]
      }),
      event: one(events, {
        fields: [newsfeedPosts.eventId],
        references: [events.id]
      }),
      crew: one(crews, {
        fields: [newsfeedPosts.crewId],
        references: [crews.id]
      }),
      likes: many(newsfeedLikes),
      comments: many(newsfeedComments),
      shares: many(newsfeedShares)
    }));
    newsfeedLikesRelations = relations(newsfeedLikes, ({ one }) => ({
      post: one(newsfeedPosts, {
        fields: [newsfeedLikes.postId],
        references: [newsfeedPosts.id]
      }),
      user: one(users, {
        fields: [newsfeedLikes.userId],
        references: [users.id]
      })
    }));
    newsfeedCommentsRelations = relations(newsfeedComments, ({ one, many }) => ({
      post: one(newsfeedPosts, {
        fields: [newsfeedComments.postId],
        references: [newsfeedPosts.id]
      }),
      user: one(users, {
        fields: [newsfeedComments.userId],
        references: [users.id]
      }),
      parentComment: one(newsfeedComments, {
        fields: [newsfeedComments.parentCommentId],
        references: [newsfeedComments.id]
      }),
      replies: many(newsfeedComments)
    }));
    newsfeedSharesRelations = relations(newsfeedShares, ({ one }) => ({
      post: one(newsfeedPosts, {
        fields: [newsfeedShares.postId],
        references: [newsfeedPosts.id]
      }),
      user: one(users, {
        fields: [newsfeedShares.userId],
        references: [users.id]
      })
    }));
    insertUserSchema = createInsertSchema(users).pick({
      email: true,
      firstName: true,
      lastName: true,
      profileImageUrl: true,
      age: true,
      bio: true,
      location: true,
      latitude: true,
      longitude: true,
      musicPreferences: true,
      relationshipStyle: true,
      plurValues: true,
      vibeProfile: true,
      communicationStyle: true,
      boundariesAndConsent: true,
      relationshipGoals: true,
      crewName: true,
      crewRole: true,
      openToNewCrew: true
    });
    insertCrewSchema = createInsertSchema(crews).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertCrewMemberSchema = createInsertSchema(crewMembers).omit({
      id: true,
      joinedAt: true
    });
    insertPLURChallengeSchema = createInsertSchema(plurChallenges).omit({
      id: true,
      createdAt: true
    });
    insertUserPLURProgressSchema = createInsertSchema(userPLURProgress).omit({
      id: true,
      completedAt: true,
      verifiedAt: true,
      pointsEarned: true
    });
    insertEventSchema = createInsertSchema(events).omit({
      id: true,
      createdAt: true
    });
    insertMatchSchema = createInsertSchema(matches).omit({
      id: true,
      createdAt: true,
      matchedAt: true
    });
    insertMessageSchema = createInsertSchema(messages).omit({
      id: true,
      sentAt: true
    });
    insertEventAttendeeSchema = createInsertSchema(eventAttendees).omit({
      id: true,
      createdAt: true
    });
    insertUserLikeSchema = createInsertSchema(userLikes).omit({
      id: true,
      createdAt: true
    });
    insertEmergencyContactSchema = createInsertSchema(emergencyContacts).omit({
      id: true,
      createdAt: true
    });
    insertSafetyCheckInSchema = createInsertSchema(safetyCheckIns).omit({
      id: true,
      createdAt: true
    });
    insertRaveBuddySchema = createInsertSchema(raveBuddies).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertSafetyReportSchema = createInsertSchema(safetyReports).omit({
      id: true,
      createdAt: true
    });
    insertVenueRatingSchema = createInsertSchema(venueRatings).omit({
      id: true,
      createdAt: true
    });
    insertHarmReductionResourceSchema = createInsertSchema(harmReductionResources).omit({
      id: true,
      createdAt: true
    });
    insertMarketplaceItemSchema = createInsertSchema(marketplaceItems).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertMarketplaceMessageSchema = createInsertSchema(marketplaceMessages).omit({
      id: true,
      createdAt: true
    });
    insertMarketplaceReviewSchema = createInsertSchema(marketplaceReviews).omit({
      id: true,
      createdAt: true
    });
    insertMarketplaceFavoriteSchema = createInsertSchema(marketplaceFavorites).omit({
      id: true,
      createdAt: true
    });
    insertMarketplaceOfferSchema = createInsertSchema(marketplaceOffers).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertNewsfeedPostSchema = createInsertSchema(newsfeedPosts).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertNewsfeedLikeSchema = createInsertSchema(newsfeedLikes).omit({
      id: true,
      createdAt: true
    });
    insertNewsfeedCommentSchema = createInsertSchema(newsfeedComments).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertNewsfeedShareSchema = createInsertSchema(newsfeedShares).omit({
      id: true,
      createdAt: true
    });
    outfitRecommendations = pgTable("outfit_recommendations", {
      id: serial("id").primaryKey(),
      userId: varchar("user_id").notNull().references(() => users.id),
      eventId: integer("event_id").notNull().references(() => events.id),
      recommendationData: jsonb("recommendation_data").notNull(),
      createdAt: timestamp("created_at").defaultNow()
    });
    insertOutfitRecommendationSchema = createInsertSchema(outfitRecommendations).omit({
      id: true,
      createdAt: true
    });
    ageVerifications = pgTable("age_verifications", {
      id: serial("id").primaryKey(),
      userId: varchar("user_id").references(() => users.id, { onDelete: "cascade" }),
      verificationType: varchar("verification_type", {
        enum: ["government_id", "biometric", "social_auth", "phone_carrier", "banking_data"]
      }),
      documentType: varchar("document_type", {
        enum: ["passport", "drivers_license", "national_id", "birth_certificate"]
      }),
      documentNumber: varchar("document_number"),
      documentCountry: varchar("document_country"),
      dateOfBirth: date("date_of_birth"),
      calculatedAge: integer("calculated_age"),
      verificationStatus: varchar("verification_status", {
        enum: ["pending", "verified", "rejected", "expired"]
      }).default("pending"),
      confidenceScore: decimal("confidence_score", { precision: 5, scale: 2 }),
      biometricMatch: boolean("biometric_match").default(false),
      livenessCheck: boolean("liveness_check").default(false),
      documentAuthenticity: boolean("document_authenticity").default(false),
      verificationImages: text("verification_images").array(),
      rejectionReason: text("rejection_reason"),
      verifiedBy: varchar("verified_by"),
      verifiedAt: timestamp("verified_at"),
      expiresAt: timestamp("expires_at"),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    behaviorAnalysis = pgTable("behavior_analysis", {
      id: serial("id").primaryKey(),
      userId: varchar("user_id").references(() => users.id, { onDelete: "cascade" }),
      analysisType: varchar("analysis_type", {
        enum: ["conversation", "profile_behavior", "interaction_pattern", "network_analysis"]
      }),
      riskScore: decimal("risk_score", { precision: 5, scale: 2 }),
      riskFactors: jsonb("risk_factors").$type(),
      flaggedPatterns: text("flagged_patterns").array(),
      mlModelVersion: varchar("ml_model_version"),
      analysisResult: jsonb("analysis_result"),
      actionTaken: varchar("action_taken", {
        enum: ["none", "warning", "content_hidden", "account_flagged", "account_suspended", "reported"]
      }),
      reviewedBy: varchar("reviewed_by"),
      reviewStatus: varchar("review_status", {
        enum: ["pending", "reviewed", "escalated", "resolved"]
      }).default("pending"),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    contentModerations2 = pgTable("content_moderations", {
      id: serial("id").primaryKey(),
      userId: varchar("user_id").references(() => users.id, { onDelete: "cascade" }),
      contentType: varchar("content_type", {
        enum: ["message", "post", "image", "video", "profile", "comment"]
      }),
      contentId: varchar("content_id"),
      moderationType: varchar("moderation_type", {
        enum: ["automated", "human", "ai_flagged", "user_reported"]
      }),
      violationType: varchar("violation_type", {
        enum: ["inappropriate_content", "harassment", "sexual_content", "age_inappropriate", "grooming_behavior", "spam", "fake_profile"]
      }),
      severityLevel: varchar("severity_level", {
        enum: ["low", "medium", "high", "critical"]
      }),
      confidenceScore: decimal("confidence_score", { precision: 5, scale: 2 }),
      aiAnalysis: jsonb("ai_analysis"),
      moderationResult: varchar("moderation_result", {
        enum: ["approved", "rejected", "hidden", "flagged", "escalated"]
      }),
      actionTaken: text("action_taken"),
      moderatedBy: varchar("moderated_by"),
      appealStatus: varchar("appeal_status", {
        enum: ["none", "pending", "reviewed", "upheld", "overturned"]
      }).default("none"),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    emergencyIncidents2 = pgTable("emergency_incidents", {
      id: serial("id").primaryKey(),
      reportedUserId: varchar("reported_user_id").references(() => users.id, { onDelete: "cascade" }),
      reportingUserId: varchar("reporting_user_id").references(() => users.id, { onDelete: "cascade" }),
      incidentType: varchar("incident_type", {
        enum: ["minor_detected", "predatory_behavior", "inappropriate_content", "safety_threat", "criminal_activity"]
      }),
      severityLevel: varchar("severity_level", {
        enum: ["low", "medium", "high", "critical", "emergency"]
      }),
      description: text("description"),
      evidenceData: jsonb("evidence_data"),
      automaticDetection: boolean("automatic_detection").default(false),
      responseProtocol: varchar("response_protocol", {
        enum: ["standard", "expedited", "emergency", "law_enforcement"]
      }),
      status: varchar("status", {
        enum: ["reported", "investigating", "resolved", "escalated", "closed"]
      }).default("reported"),
      assignedTo: varchar("assigned_to"),
      responseTime: timestamp("response_time"),
      resolutionTime: timestamp("resolution_time"),
      actionsTaken: text("actions_taken").array(),
      lawEnforcementNotified: boolean("law_enforcement_notified").default(false),
      parentGuardianNotified: boolean("parent_guardian_notified").default(false),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    deviceFingerprints = pgTable("device_fingerprints", {
      id: serial("id").primaryKey(),
      fingerprint: varchar("fingerprint").unique(),
      userId: varchar("user_id").references(() => users.id, { onDelete: "cascade" }),
      deviceInfo: jsonb("device_info").$type(),
      ipAddress: varchar("ip_address"),
      location: jsonb("location").$type(),
      riskScore: decimal("risk_score", { precision: 5, scale: 2 }).default("0.00"),
      blocked: boolean("blocked").default(false),
      lastSeen: timestamp("last_seen").defaultNow(),
      createdAt: timestamp("created_at").defaultNow()
    });
    riskMonitoring = pgTable("risk_monitoring", {
      id: serial("id").primaryKey(),
      userId: varchar("user_id").references(() => users.id, { onDelete: "cascade" }),
      sessionId: varchar("session_id"),
      riskType: varchar("risk_type", {
        enum: ["behavioral", "content", "network", "temporal", "device"]
      }),
      riskScore: decimal("risk_score", { precision: 5, scale: 2 }),
      riskFactors: jsonb("risk_factors"),
      threshold: varchar("threshold", {
        enum: ["low", "medium", "high", "critical"]
      }),
      actionTriggered: boolean("action_triggered").default(false),
      interventionType: varchar("intervention_type", {
        enum: ["none", "warning", "restriction", "suspension", "escalation"]
      }),
      mlModelVersion: varchar("ml_model_version"),
      analysisData: jsonb("analysis_data"),
      createdAt: timestamp("created_at").defaultNow()
    });
    insertAgeVerificationSchema = createInsertSchema(ageVerifications).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertBehaviorAnalysisSchema = createInsertSchema(behaviorAnalysis).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertContentModerationSchema = createInsertSchema(contentModerations2).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertEmergencyIncidentSchema = createInsertSchema(emergencyIncidents2).omit({
      id: true,
      createdAt: true,
      updatedAt: true
    });
    insertDeviceFingerprintSchema = createInsertSchema(deviceFingerprints).omit({
      id: true,
      createdAt: true
    });
    insertRiskMonitoringSchema = createInsertSchema(riskMonitoring).omit({
      id: true,
      createdAt: true
    });
    insertEventPhotoSchema = createInsertSchema(eventPhotos).omit({ id: true, createdAt: true });
    djProfiles = pgTable("dj_profiles", {
      id: serial("id").primaryKey(),
      userId: varchar("user_id").references(() => users.id).notNull(),
      djName: varchar("dj_name").notNull(),
      // Stage name
      bio: text("bio"),
      // DJ-specific bio
      genres: text("genres").array().notNull(),
      // Primary genres they play
      experience: varchar("experience", {
        enum: ["beginner", "intermediate", "advanced", "professional"]
      }).default("beginner"),
      equipment: text("equipment").array(),
      // Gear they use
      influences: text("influences").array(),
      // Musical influences
      socialLinks: jsonb("social_links").$type(),
      availableForBookings: boolean("available_for_bookings").default(false),
      rates: jsonb("rates").$type(),
      isVerified: boolean("is_verified").default(false),
      // Platform verification
      totalPlays: integer("total_plays").default(0),
      totalLikes: integer("total_likes").default(0),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    djMixes = pgTable("dj_mixes", {
      id: serial("id").primaryKey(),
      djProfileId: integer("dj_profile_id").references(() => djProfiles.id).notNull(),
      title: varchar("title").notNull(),
      description: text("description"),
      genre: varchar("genre").notNull(),
      duration: integer("duration"),
      // in seconds
      bpm: integer("bpm"),
      // beats per minute
      key: varchar("key"),
      // musical key
      mixUrl: text("mix_url"),
      // URL to audio file
      artworkUrl: text("artwork_url"),
      // Mix cover art
      tags: text("tags").array(),
      // searchable tags
      tracklist: jsonb("tracklist").$type(),
      playCount: integer("play_count").default(0),
      likeCount: integer("like_count").default(0),
      isPublic: boolean("is_public").default(true),
      recordedAt: date("recorded_at"),
      // When the mix was recorded
      venueType: varchar("venue_type", {
        enum: ["club", "festival", "warehouse", "radio", "livestream", "studio"]
      }),
      createdAt: timestamp("created_at").defaultNow()
    });
    djMixLikes = pgTable("dj_mix_likes", {
      id: serial("id").primaryKey(),
      userId: varchar("user_id").references(() => users.id).notNull(),
      mixId: integer("mix_id").references(() => djMixes.id).notNull(),
      createdAt: timestamp("created_at").defaultNow()
    });
    djGigs = pgTable("dj_gigs", {
      id: serial("id").primaryKey(),
      posterId: varchar("poster_id").references(() => users.id).notNull(),
      type: varchar("type", { enum: ["offering", "seeking"] }).notNull(),
      // DJ offering services or venue seeking DJ
      title: varchar("title").notNull(),
      description: text("description"),
      venue: varchar("venue"),
      location: varchar("location"),
      eventDate: date("event_date"),
      startTime: varchar("start_time"),
      endTime: varchar("end_time"),
      genres: text("genres").array(),
      // Preferred genres
      budget: jsonb("budget").$type(),
      requirements: text("requirements").array(),
      // Special requirements
      contactMethod: varchar("contact_method", {
        enum: ["platform", "email", "phone"]
      }).default("platform"),
      status: varchar("status", {
        enum: ["open", "in_progress", "booked", "completed", "cancelled"]
      }).default("open"),
      applicantCount: integer("applicant_count").default(0),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    djGigApplications = pgTable("dj_gig_applications", {
      id: serial("id").primaryKey(),
      gigId: integer("gig_id").references(() => djGigs.id).notNull(),
      applicantId: varchar("applicant_id").references(() => users.id).notNull(),
      message: text("message"),
      proposedRate: jsonb("proposed_rate").$type(),
      status: varchar("status", {
        enum: ["pending", "accepted", "rejected", "withdrawn"]
      }).default("pending"),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    djCollaborations = pgTable("dj_collaborations", {
      id: serial("id").primaryKey(),
      initiatorId: varchar("initiator_id").references(() => users.id).notNull(),
      collaboratorId: varchar("collaborator_id").references(() => users.id).notNull(),
      type: varchar("type", {
        enum: ["back_to_back", "remix", "co_production", "mentor_mentee", "practice_session"]
      }).notNull(),
      title: varchar("title").notNull(),
      description: text("description"),
      status: varchar("status", {
        enum: ["pending", "accepted", "in_progress", "completed", "cancelled"]
      }).default("pending"),
      resultMixId: integer("result_mix_id").references(() => djMixes.id),
      // If collaboration results in a mix
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    insertDjProfileSchema = createInsertSchema(djProfiles).omit({ id: true, createdAt: true, updatedAt: true });
    insertDjMixSchema = createInsertSchema(djMixes).omit({ id: true, createdAt: true });
    insertDjMixLikeSchema = createInsertSchema(djMixLikes).omit({ id: true, createdAt: true });
    insertDjGigSchema = createInsertSchema(djGigs).omit({ id: true, createdAt: true, updatedAt: true });
    insertDjGigApplicationSchema = createInsertSchema(djGigApplications).omit({ id: true, createdAt: true, updatedAt: true });
    insertDjCollaborationSchema = createInsertSchema(djCollaborations).omit({ id: true, createdAt: true, updatedAt: true });
  }
});

// server/db.ts
import { Pool, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
var pool, db;
var init_db = __esm({
  "server/db.ts"() {
    "use strict";
    init_schema();
    neonConfig.webSocketConstructor = ws;
    if (!process.env.DATABASE_URL) {
      throw new Error(
        "DATABASE_URL must be set. Did you forget to provision a database?"
      );
    }
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : void 0
    });
    db = drizzle({ client: pool, schema: schema_exports });
  }
});

// server/aiService.ts
var aiService_exports = {};
__export(aiService_exports, {
  calculateVibeCompatibility: () => calculateVibeCompatibility,
  generateOutfitRecommendations: () => generateOutfitRecommendations,
  generateStyleAnalysis: () => generateStyleAnalysis,
  getOutfitRecommendations: () => getOutfitRecommendations,
  getOutfitsWithProgressiveLoading: () => getOutfitsWithProgressiveLoading
});
import Anthropic from "@anthropic-ai/sdk";
async function getOutfitRecommendations(festivalName, festivalDescription, userPreferences, availableItems, useQuickMode = false) {
  try {
    if (useQuickMode) {
      const festivalType = Object.keys(quickSuggestions).find(
        (key) => festivalName.toLowerCase().includes(key.toLowerCase())
      );
      if (festivalType) {
        return {
          success: true,
          outfits: quickSuggestions[festivalType],
          source: "quick",
          loadTime: "instant"
        };
      }
    }
    const cacheKey = `${festivalName}-${userPreferences}`.toLowerCase().replace(/\s+/g, "-");
    if (outfitCache.has(cacheKey)) {
      return {
        success: true,
        ...outfitCache.get(cacheKey),
        source: "cache",
        loadTime: "cached"
      };
    }
    const startTime = Date.now();
    const prompt = `Create 3 ${festivalName} outfits for someone who ${userPreferences}.
Available: ${availableItems || "standard rave wear"}

Format each as: [top + bottom + shoes + accessory] - why it works
Be creative and concise!`;
    const msg = await anthropic.messages.create({
      model: DEFAULT_MODEL_STR,
      // "claude-sonnet-4-20250514"
      max_tokens: 600,
      // Reduced from 20000 for speed
      temperature: 0.3,
      // Lower for faster, focused responses
      system: "You are a rave fashion expert. Give concise, creative outfit suggestions.",
      messages: [
        {
          role: "user",
          content: prompt
        }
      ]
    });
    const firstContent = msg.content[0];
    const outfitText = firstContent.type === "text" ? firstContent.text : "";
    const outfits = outfitText.split("\n").filter((line) => line.trim() && (line.includes("+") || line.includes("-"))).slice(0, 3);
    const result = {
      success: true,
      outfits: outfits.length > 0 ? outfits : [
        `Crop top + shorts + sneakers + fun accessories - Perfect for ${festivalName}!`,
        `Bodysuit + skirt + boots + face gems - ${userPreferences} style!`,
        `Tank + pants + comfortable shoes + glow items - All-night dancing!`
      ],
      source: "ai",
      loadTime: `${Date.now() - startTime}ms`
    };
    outfitCache.set(cacheKey, result);
    return result;
  } catch (error) {
    console.error("Outfit generation error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
      outfits: [
        `Crop top + shorts + comfortable sneakers + accessories - ${festivalName} ready!`,
        `Bodysuit + skirt + platform boots + face gems - Dance floor perfect!`,
        `Tank top + pants + chunky shoes + glow items - All-night energy!`
      ],
      source: "fallback"
    };
  }
}
async function getOutfitsWithProgressiveLoading(festivalData) {
  const quickResults = await getOutfitRecommendations(
    festivalData.name,
    "",
    "",
    "",
    true
    // useQuickMode
  );
  const aiResults = await getOutfitRecommendations(
    festivalData.name,
    festivalData.description,
    festivalData.userPreferences,
    festivalData.availableItems,
    false
    // full AI mode
  );
  return {
    quick: quickResults,
    ai: aiResults
  };
}
async function generateOutfitRecommendations(event, user, availableItems) {
  try {
    const itemsText = availableItems.map(
      (item) => `- ${item.title} ($${item.price}) - ${item.category} - ${item.condition} condition - Tags: ${item.tags?.join(", ") || "none"}`
    ).join("\n");
    const userPrefsText = `
- Vibe profile: ${user.vibeProfile || "Not specified"}
- Relationship style: ${user.relationshipStyle || "Not specified"}
- Bio: ${user.bio || "Not specified"}
`;
    const response = await anthropic.messages.create({
      model: DEFAULT_MODEL_STR,
      max_tokens: 3e3,
      temperature: 0.7,
      system: "You are a rave fashion expert who creates amazing EDM event outfits that embody PLUR (Peace, Love, Unity, Respect) values. You understand festival fashion trends, safety considerations, and how to match outfits to music genres and venue types.",
      messages: [{
        role: "user",
        content: `Create outfit recommendations for this EDM event:

EVENT: ${event.title}
LOCATION: ${event.location}
DATE: ${new Date(event.date).toLocaleDateString()}
GENRES: ${event.genres?.join(", ") || "Electronic Music"}
DESCRIPTION: ${event.description || "Electronic music event"}

USER PREFERENCES:${userPrefsText}

AVAILABLE MARKETPLACE ITEMS:
${itemsText}

Please provide recommendations in this JSON format:
{
  "eventAnalysis": {
    "genre": "detected genre",
    "vibe": "event vibe description", 
    "weatherConsiderations": "weather/season considerations",
    "venueType": "venue type (outdoor/indoor/warehouse/club)"
  },
  "recommendations": [
    {
      "category": "outfit category name",
      "items": ["item 1", "item 2", "item 3"],
      "reasoning": "why this outfit works for the event",
      "marketplaceMatches": [item_ids_from_marketplace],
      "totalEstimatedCost": 150,
      "vibeScore": 9.2
    }
  ],
  "styleNotes": ["style tip 1", "style tip 2"],
  "safetyTips": ["safety tip 1", "safety tip 2"]
}`
      }]
    });
    const aiText = response.content[0]?.type === "text" ? response.content[0].text : "";
    const jsonMatch = aiText.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      const result = JSON.parse(jsonMatch[0]);
      return result;
    } else {
      throw new Error("Invalid AI response format");
    }
  } catch (error) {
    console.error("AI service error:", error);
    return generateFallbackRecommendations(event, user, availableItems);
  }
}
function generateFallbackRecommendations(event, user, availableItems) {
  const genres = event.genres?.join(", ") || "Electronic Music";
  const isOutdoor = event.location.toLowerCase().includes("outdoor") || event.location.toLowerCase().includes("festival") || event.location.toLowerCase().includes("park");
  const isWarehouse = event.location.toLowerCase().includes("warehouse");
  const isClub = event.location.toLowerCase().includes("club") || event.location.toLowerCase().includes("nightclub");
  const genreStyle = getGenreSpecificStyle(genres, isWarehouse, isClub);
  const venueStyle = getVenueSpecificStyle(isOutdoor, isWarehouse, isClub);
  const comfortStyle = getComfortStyle();
  const clothingItems = availableItems.filter(
    (item) => item.category?.toLowerCase().includes("clothing") || item.category?.toLowerCase().includes("top") || item.category?.toLowerCase().includes("bottom")
  );
  const accessoryItems = availableItems.filter(
    (item) => item.category?.toLowerCase().includes("accessories") || item.category?.toLowerCase().includes("jewelry")
  );
  const genreMatches = findBestMatches(clothingItems, genreStyle.keywords);
  const accessoryMatches = findBestMatches(accessoryItems, ["led", "glow", "neon", "holographic"]);
  const recommendations = [
    {
      category: "Genre-Inspired Look",
      items: genreStyle.items,
      reasoning: genreStyle.reasoning,
      marketplaceMatches: genreMatches.map((item) => item.id),
      totalEstimatedCost: genreMatches.reduce((sum, item) => sum + parseFloat(item.price), 0),
      vibeScore: 8.5
    },
    {
      category: "Venue-Appropriate Style",
      items: venueStyle.items,
      reasoning: venueStyle.reasoning,
      marketplaceMatches: accessoryMatches.map((item) => item.id),
      totalEstimatedCost: accessoryMatches.reduce((sum, item) => sum + parseFloat(item.price), 0),
      vibeScore: 8
    },
    {
      category: "Comfort & Safety Focus",
      items: comfortStyle.items,
      reasoning: comfortStyle.reasoning,
      marketplaceMatches: [],
      totalEstimatedCost: 0,
      vibeScore: 9
    }
  ];
  return {
    eventAnalysis: {
      genre: genres,
      vibe: genreStyle.vibe,
      weatherConsiderations: isOutdoor ? "Consider weather protection and comfortable walking shoes" : "Indoor climate controlled environment",
      venueType: isOutdoor ? "outdoor" : isWarehouse ? "warehouse" : isClub ? "club" : "indoor"
    },
    recommendations,
    styleNotes: [
      "Layer clothing for temperature changes",
      "Choose comfortable shoes for dancing",
      "Bring a small bag for essentials",
      "Consider glow sticks or LED accessories for visibility"
    ],
    safetyTips: [
      "Stay hydrated throughout the event",
      "Keep emergency contacts accessible",
      "Stick with your group",
      "Test any LED accessories before the event"
    ]
  };
}
function getGenreSpecificStyle(genre, isWarehouse, isClub) {
  const lowerGenre = genre.toLowerCase();
  if (lowerGenre.includes("techno") || lowerGenre.includes("house")) {
    return {
      items: ["Black fitted top", "High-waisted shorts or pants", "Combat boots or chunky sneakers"],
      reasoning: "Techno/House scenes favor minimalist, dark aesthetics with industrial touches",
      keywords: ["black", "fitted", "minimal", "industrial"],
      vibe: "Underground minimalist"
    };
  }
  if (lowerGenre.includes("trance") || lowerGenre.includes("progressive")) {
    return {
      items: ["Flowing top with cosmic prints", "Comfortable pants", "LED accessories"],
      reasoning: "Trance events embrace cosmic and ethereal aesthetics with flowing fabrics",
      keywords: ["cosmic", "flowing", "ethereal", "space"],
      vibe: "Cosmic ethereal"
    };
  }
  if (lowerGenre.includes("dubstep") || lowerGenre.includes("bass")) {
    return {
      items: ["Graphic tee or crop top", "Baggy shorts", "High-top sneakers"],
      reasoning: "Bass music scenes favor comfortable, streetwear-inspired looks",
      keywords: ["graphic", "baggy", "streetwear", "comfortable"],
      vibe: "Streetwear bass head"
    };
  }
  return {
    items: ["Bright colored top", "Comfortable shorts", "Sneakers", "Kandi bracelets"],
    reasoning: "Classic rave style embraces bright colors and PLUR accessories",
    keywords: ["bright", "colorful", "kandi", "plur"],
    vibe: "Classic rave vibes"
  };
}
function getVenueSpecificStyle(isOutdoor, isWarehouse, isClub) {
  if (isOutdoor) {
    return {
      items: ["Weather-resistant top", "Comfortable pants", "Closed-toe shoes"],
      reasoning: "Outdoor events require weather protection and comfortable walking gear",
      keywords: ["weather", "resistant", "comfortable", "practical"]
    };
  }
  if (isWarehouse) {
    return {
      items: ["Breathable fabrics", "Layers for temperature control", "Comfortable shoes"],
      reasoning: "Warehouse venues can vary in temperature and have concrete floors",
      keywords: ["breathable", "layers", "comfort", "practical"]
    };
  }
  if (isClub) {
    return {
      items: ["Stylish clubwear", "Fashion-forward pieces", "Statement accessories"],
      reasoning: "Club environments allow for more fashion-forward and dressy looks",
      keywords: ["stylish", "fashion", "dressy", "statement"]
    };
  }
  return {
    items: ["Versatile pieces", "Comfortable basics", "Adaptable accessories"],
    reasoning: "Standard venue calls for versatile, comfortable clothing",
    keywords: ["versatile", "comfortable", "basic", "adaptable"]
  };
}
function getComfortStyle() {
  return {
    items: ["Moisture-wicking top", "Stretchy bottoms", "Supportive shoes", "Small crossbody bag"],
    reasoning: "Prioritizing comfort ensures you can dance and enjoy the event all night",
    keywords: ["comfort", "moisture-wicking", "stretchy", "supportive"]
  };
}
function findBestMatches(items, keywords) {
  const scored = items.map((item) => {
    let score = 0;
    const itemText = `${item.title} ${item.description || ""} ${item.tags?.join(" ") || ""}`.toLowerCase();
    keywords.forEach((keyword) => {
      if (itemText.includes(keyword.toLowerCase())) {
        score += 1;
      }
    });
    return { item, score };
  });
  return scored.filter((s) => s.score > 0).sort((a, b) => b.score - a.score).slice(0, 3).map((s) => s.item);
}
async function generateStyleAnalysis(userPreferences, eventContext) {
  try {
    const response = await anthropic.messages.create({
      model: DEFAULT_MODEL_STR,
      max_tokens: 1e3,
      temperature: 0.8,
      system: "You are a fashion stylist specializing in rave and electronic music culture. Provide personalized style analysis.",
      messages: [{
        role: "user",
        content: `Analyze this user's style preferences and provide personalized fashion advice for rave events:

User Preferences: ${JSON.stringify(userPreferences)}
Event Context: ${JSON.stringify(eventContext)}

Provide a style analysis with personality insights and specific recommendations.`
      }]
    });
    return response.content[0]?.type === "text" ? response.content[0].text : "Style analysis unavailable";
  } catch (error) {
    console.error("Style analysis error:", error);
    return "Unable to generate style analysis at this time. Try expressing your personal style through bold colors, comfortable fits, and accessories that reflect your music taste!";
  }
}
async function calculateVibeCompatibility(user1, user2) {
  const prompt = `
You are an expert relationship and compatibility analyst specializing in rave culture and community-first connections. Analyze the compatibility between these two users based on their profiles.

User 1 Profile:
- Username: ${user1.username || "Not set"}
- Age: ${user1.age}
- Location: ${user1.location}
- Music Preferences: ${user1.musicPreferences?.join(", ") || "Not specified"}
- Vibe Profile: ${JSON.stringify(user1.vibeProfile)}
- Relationship Style: ${user1.relationshipStyle}
- PLUR Values: ${user1.plurValues?.join(", ") || "Not specified"}
- Communication Style: ${user1.communicationStyle}
- Relationship Goals: ${user1.relationshipGoals?.join(", ") || "Not specified"}
- Crew Role: ${user1.crewRole}
- Bio: ${user1.bio || "Not provided"}

User 2 Profile:
- Username: ${user2.username || "Not set"}  
- Age: ${user2.age}
- Location: ${user2.location}
- Music Preferences: ${user2.musicPreferences?.join(", ") || "Not specified"}
- Vibe Profile: ${JSON.stringify(user2.vibeProfile)}
- Relationship Style: ${user2.relationshipStyle}
- PLUR Values: ${user2.plurValues?.join(", ") || "Not specified"}
- Communication Style: ${user2.communicationStyle}
- Relationship Goals: ${user2.relationshipGoals?.join(", ") || "Not specified"}
- Crew Role: ${user2.crewRole}
- Bio: ${user2.bio || "Not provided"}

Analyze their compatibility and respond with a JSON object containing:
{
  "overallScore": (number from 0-100),
  "breakdown": {
    "vibeAlignment": (number from 0-100),
    "relationshipCompatibility": (number from 0-100), 
    "plurValues": (number from 0-100),
    "musicTaste": (number from 0-100),
    "communicationStyle": (number from 0-100)
  },
  "explanation": "A warm, encouraging 2-3 sentence explanation of their compatibility focusing on strengths and shared values",
  "connectionPotential": "high|medium|low",
  "recommendedApproach": "Specific advice on how they should connect (e.g., 'Start with music discussions', 'Share festival experiences', 'Connect through crew activities')"
}

Consider:
- Vibe alignment: Energy levels, dancing styles, costume preferences, social preferences
- Relationship compatibility: Relationship styles, goals, crew dynamics, openness to new connections
- PLUR values: Shared values around Peace, Love, Unity, Respect
- Music taste: Genre overlap and musical energy alignment
- Communication styles: How well their communication preferences match

Focus on community-first connections and celebrate diversity while identifying genuine compatibility.
  `;
  try {
    const response = await anthropic.messages.create({
      model: DEFAULT_MODEL_STR,
      max_tokens: 800,
      messages: [{ role: "user", content: prompt }]
    });
    const textContent = response.content.find((c) => c.type === "text");
    if (!textContent) {
      throw new Error("No text content in AI response");
    }
    let responseText = textContent.text;
    responseText = responseText.replace(/```json\n?/g, "").replace(/```\n?/g, "");
    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      responseText = jsonMatch[0];
    }
    const result = JSON.parse(responseText);
    return {
      overallScore: Math.min(100, Math.max(0, result.overallScore || 0)),
      breakdown: {
        vibeAlignment: Math.min(100, Math.max(0, result.breakdown?.vibeAlignment || 0)),
        relationshipCompatibility: Math.min(100, Math.max(0, result.breakdown?.relationshipCompatibility || 0)),
        plurValues: Math.min(100, Math.max(0, result.breakdown?.plurValues || 0)),
        musicTaste: Math.min(100, Math.max(0, result.breakdown?.musicTaste || 0)),
        communicationStyle: Math.min(100, Math.max(0, result.breakdown?.communicationStyle || 0))
      },
      explanation: result.explanation || "These profiles show interesting compatibility potential!",
      connectionPotential: result.connectionPotential || "medium",
      recommendedApproach: result.recommendedApproach || "Start with a friendly conversation about your shared interests."
    };
  } catch (error) {
    console.error("Error calculating vibe compatibility:", error);
    return generateFallbackCompatibility(user1, user2);
  }
}
function generateFallbackCompatibility(user1, user2) {
  let score = 50;
  const musicOverlap = user1.musicPreferences?.filter(
    (genre) => user2.musicPreferences?.includes(genre)
  ).length || 0;
  score += musicOverlap * 10;
  if (user1.relationshipStyle === user2.relationshipStyle) {
    score += 15;
  }
  const plurOverlap = user1.plurValues?.filter(
    (value) => user2.plurValues?.includes(value)
  ).length || 0;
  score += plurOverlap * 8;
  if (user1.communicationStyle === user2.communicationStyle) {
    score += 10;
  }
  if (user1.vibeProfile?.energyLevel === user2.vibeProfile?.energyLevel) {
    score += 12;
  }
  score = Math.min(100, Math.max(20, score));
  return {
    overallScore: score,
    breakdown: {
      vibeAlignment: score > 70 ? 80 : score > 50 ? 60 : 40,
      relationshipCompatibility: score > 70 ? 75 : score > 50 ? 55 : 35,
      plurValues: score > 70 ? 85 : score > 50 ? 65 : 45,
      musicTaste: musicOverlap > 2 ? 90 : musicOverlap > 0 ? 70 : 30,
      communicationStyle: score > 70 ? 70 : score > 50 ? 50 : 30
    },
    explanation: score > 70 ? "You share great compatibility with strong alignment in values and interests!" : score > 50 ? "You have good compatibility potential with some shared interests to explore." : "You have different vibes that could complement each other in interesting ways.",
    connectionPotential: score > 70 ? "high" : score > 50 ? "medium" : "low",
    recommendedApproach: musicOverlap > 0 ? "Start by talking about your shared music tastes and festival experiences." : "Explore your different perspectives on rave culture and what you can learn from each other."
  };
}
var DEFAULT_MODEL_STR, anthropic, quickSuggestions, outfitCache;
var init_aiService = __esm({
  "server/aiService.ts"() {
    "use strict";
    DEFAULT_MODEL_STR = "claude-sonnet-4-20250514";
    anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY
    });
    quickSuggestions = {
      "EDC": [
        "LED crop top + holographic shorts + platform boots + face gems - Electric vibes!",
        "Mesh bodysuit + tutu skirt + chunky sneakers + glow sticks - Dance ready!",
        "Tie-dye tank + booty shorts + combat boots + LED accessories - All night comfort!"
      ],
      "Tomorrowland": [
        "Sequin bralette + high-waisted shorts + ankle boots + flower crown - Festival magic!",
        "Metallic bodysuit + mini skirt + platform sandals + body glitter - Sparkling beauty!",
        "Crop hoodie + cargo pants + chunky sneakers + LED bracelet - Stylish comfort!"
      ],
      "Ultra": [
        "Neon sports bra + bike shorts + chunky sneakers + sunglasses - Miami heat ready!",
        "Holographic bodysuit + mini skirt + platform boots + LED jewelry - Ultra vibes!",
        "Crop tank + cargo shorts + comfortable sneakers + bandana - Bass head style!"
      ],
      "Coachella": [
        "Crochet top + high-waisted shorts + ankle boots + body chain - Boho chic!",
        "Mesh bodysuit + denim shorts + platform sandals + face gems - Desert ready!",
        "Crop tank + flowy pants + comfortable sneakers + layered jewelry - All-day comfort!"
      ],
      "Burning Man": [
        "Metallic bikini + utility shorts + combat boots + dust mask - Playa warrior!",
        "Mesh top + cargo pants + platform boots + LED goggles - Desert survivor!",
        "Sports bra + utility pants + comfortable boots + hydration pack - Function first!"
      ]
    };
    outfitCache = /* @__PURE__ */ new Map();
  }
});

// server/securityService.ts
var securityService_exports = {};
__export(securityService_exports, {
  AgeVerificationService: () => AgeVerificationService,
  ContentModerationService: () => ContentModerationService,
  DeviceFingerprintingService: () => DeviceFingerprintingService,
  EmergencyResponseService: () => EmergencyResponseService,
  PredatorDetectionService: () => PredatorDetectionService
});
import { eq as eq2 } from "drizzle-orm";
var AgeVerificationService, PredatorDetectionService, ContentModerationService, DeviceFingerprintingService, EmergencyResponseService;
var init_securityService = __esm({
  "server/securityService.ts"() {
    "use strict";
    init_db();
    init_schema();
    AgeVerificationService = class {
      static async initiateVerification(request) {
        try {
          const result = await this.processVerification(request);
          const verification = await db.insert(ageVerifications).values({
            userId: request.userId,
            verificationType: request.verificationType,
            documentType: request.documentType,
            documentNumber: request.documentNumber,
            documentCountry: request.documentCountry,
            dateOfBirth: request.dateOfBirth ? new Date(request.dateOfBirth) : null,
            calculatedAge: result.calculatedAge,
            verificationStatus: result.isValid ? "verified" : "rejected",
            confidenceScore: result.confidenceScore.toString(),
            biometricMatch: result.biometricMatch,
            livenessCheck: result.livenessCheck,
            documentAuthenticity: result.documentAuthenticity,
            verificationImages: request.verificationImages || [],
            rejectionReason: result.rejectionReason,
            verifiedAt: result.isValid ? /* @__PURE__ */ new Date() : null,
            expiresAt: result.isValid ? new Date(Date.now() + 365 * 24 * 60 * 60 * 1e3) : null
            // 1 year expiry
          }).returning();
          if (result.isValid) {
            await db.update(users).set({
              ageVerified: true,
              ageVerificationMethod: request.verificationType,
              ageVerificationDate: /* @__PURE__ */ new Date(),
              governmentIdVerified: request.verificationType === "government_id",
              biometricVerified: result.biometricMatch
            }).where(eq2(users.id, request.userId));
          }
          return result;
        } catch (error) {
          console.error("Age verification error:", error);
          throw new Error("Age verification failed");
        }
      }
      static async processVerification(request) {
        const calculatedAge = this.calculateAge(request.dateOfBirth || "1990-01-01");
        if (calculatedAge < 18) {
          return {
            isValid: false,
            calculatedAge,
            confidenceScore: 0,
            biometricMatch: false,
            livenessCheck: false,
            documentAuthenticity: false,
            rejectionReason: "UNDERAGE_USER_DETECTED"
          };
        }
        const documentAuthenticity = this.simulateDocumentCheck(request.documentType);
        const biometricMatch = this.simulateBiometricMatch();
        const livenessCheck = this.simulateLivenessCheck();
        const confidenceScore = this.calculateConfidenceScore(documentAuthenticity, biometricMatch, livenessCheck);
        return {
          isValid: confidenceScore > 0.7,
          calculatedAge,
          confidenceScore,
          biometricMatch,
          livenessCheck,
          documentAuthenticity,
          rejectionReason: confidenceScore <= 0.7 ? "LOW_CONFIDENCE_SCORE" : void 0
        };
      }
      static calculateAge(dateOfBirth) {
        const today = /* @__PURE__ */ new Date();
        const birthDate = new Date(dateOfBirth);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || monthDiff === 0 && today.getDate() < birthDate.getDate()) {
          age--;
        }
        return age;
      }
      static simulateDocumentCheck(documentType) {
        return Math.random() > 0.1;
      }
      static simulateBiometricMatch() {
        return Math.random() > 0.05;
      }
      static simulateLivenessCheck() {
        return Math.random() > 0.03;
      }
      static calculateConfidenceScore(doc, bio, live) {
        let score = 0;
        if (doc) score += 0.4;
        if (bio) score += 0.4;
        if (live) score += 0.2;
        return score;
      }
    };
    PredatorDetectionService = class {
      static async analyzeUser(request) {
        try {
          const result = await this.processAnalysis(request);
          await db.insert(behaviorAnalysis).values({
            userId: request.userId,
            analysisType: request.analysisType,
            riskScore: result.riskScore.toString(),
            riskFactors: this.extractRiskFactors(result),
            flaggedPatterns: result.flaggedPatterns,
            mlModelVersion: "1.0.0",
            analysisResult: { ...result, timestamp: /* @__PURE__ */ new Date() },
            actionTaken: result.actionRecommended,
            reviewStatus: result.riskLevel === "critical" ? "escalated" : "pending"
          });
          await this.updateUserRiskScore(request.userId, result.riskScore);
          if (result.riskLevel === "critical" || result.riskLevel === "high") {
            await this.triggerIntervention(request.userId, result);
          }
          return result;
        } catch (error) {
          console.error("Predator detection error:", error);
          throw new Error("Predator detection analysis failed");
        }
      }
      static async processAnalysis(request) {
        const riskFactors = await this.analyzeRiskFactors(request);
        const riskScore = this.calculateRiskScore(riskFactors);
        const riskLevel = this.determineRiskLevel(riskScore);
        const flaggedPatterns = this.identifyFlaggedPatterns(riskFactors);
        const actionRecommended = this.determineAction(riskLevel, flaggedPatterns);
        return {
          riskScore,
          riskLevel,
          flaggedPatterns,
          actionRecommended,
          explanation: this.generateExplanation(riskFactors, flaggedPatterns)
        };
      }
      static async analyzeRiskFactors(request) {
        const factors = {
          ageGapTargeting: 0,
          groomingLanguage: 0,
          multiAccountActivity: 0,
          festivalExploitation: 0,
          rapidEscalation: 0,
          isolationAttempts: 0,
          substanceOffers: 0,
          accommodationLuring: 0
        };
        if (request.content) {
          factors.groomingLanguage = this.analyzeGroomingLanguage(request.content);
          factors.rapidEscalation = this.analyzeEscalationPattern(request.content);
          factors.isolationAttempts = this.analyzeIsolationAttempts(request.content);
          factors.substanceOffers = this.analyzeSubstanceOffers(request.content);
          factors.accommodationLuring = this.analyzeAccommodationLuring(request.content);
        }
        factors.ageGapTargeting = await this.analyzeAgeGapTargeting(request.userId);
        factors.multiAccountActivity = await this.analyzeMultiAccountActivity(request.userId);
        factors.festivalExploitation = await this.analyzeFestivalExploitation(request.userId);
        return factors;
      }
      static analyzeGroomingLanguage(content) {
        const groomingIndicators = [
          "special",
          "mature",
          "secret",
          "don't tell",
          "between us",
          "private",
          "alone",
          "meet up",
          "come over",
          "nobody will know"
        ];
        let score = 0;
        const lowerContent = content.toLowerCase();
        groomingIndicators.forEach((indicator) => {
          if (lowerContent.includes(indicator)) {
            score += 0.1;
          }
        });
        return Math.min(score, 1);
      }
      static analyzeEscalationPattern(content) {
        const escalationPatterns = [
          "relationship",
          "single",
          "dating",
          "meet",
          "phone",
          "number",
          "personal",
          "private",
          "room",
          "hotel",
          "stay"
        ];
        let score = 0;
        const lowerContent = content.toLowerCase();
        escalationPatterns.forEach((pattern) => {
          if (lowerContent.includes(pattern)) {
            score += 0.05;
          }
        });
        return Math.min(score, 1);
      }
      static analyzeIsolationAttempts(content) {
        const isolationIndicators = [
          "alone",
          "just us",
          "without friends",
          "separate",
          "away from",
          "don't bring",
          "come solo",
          "by yourself"
        ];
        let score = 0;
        const lowerContent = content.toLowerCase();
        isolationIndicators.forEach((indicator) => {
          if (lowerContent.includes(indicator)) {
            score += 0.15;
          }
        });
        return Math.min(score, 1);
      }
      static analyzeSubstanceOffers(content) {
        const substanceIndicators = [
          "molly",
          "mdma",
          "ecstasy",
          "pills",
          "party favors",
          "special treats",
          "enhance",
          "roll",
          "trip"
        ];
        let score = 0;
        const lowerContent = content.toLowerCase();
        substanceIndicators.forEach((indicator) => {
          if (lowerContent.includes(indicator)) {
            score += 0.2;
          }
        });
        return Math.min(score, 1);
      }
      static analyzeAccommodationLuring(content) {
        const accommodationIndicators = [
          "stay with me",
          "my place",
          "room",
          "hotel",
          "crash",
          "accommodation",
          "place to stay",
          "sleep over"
        ];
        let score = 0;
        const lowerContent = content.toLowerCase();
        accommodationIndicators.forEach((indicator) => {
          if (lowerContent.includes(indicator)) {
            score += 0.15;
          }
        });
        return Math.min(score, 1);
      }
      static async analyzeAgeGapTargeting(userId) {
        return Math.random() * 0.3;
      }
      static async analyzeMultiAccountActivity(userId) {
        return Math.random() * 0.2;
      }
      static async analyzeFestivalExploitation(userId) {
        return Math.random() * 0.25;
      }
      static calculateRiskScore(factors) {
        const weights = {
          ageGapTargeting: 0.2,
          groomingLanguage: 0.25,
          multiAccountActivity: 0.15,
          festivalExploitation: 0.2,
          rapidEscalation: 0.1,
          isolationAttempts: 0.25,
          substanceOffers: 0.3,
          accommodationLuring: 0.2
        };
        let score = 0;
        Object.keys(factors).forEach((key) => {
          score += factors[key] * (weights[key] || 0.1);
        });
        return Math.min(score, 1);
      }
      static determineRiskLevel(score) {
        if (score >= 0.8) return "critical";
        if (score >= 0.6) return "high";
        if (score >= 0.4) return "medium";
        return "low";
      }
      static identifyFlaggedPatterns(factors) {
        const patterns = [];
        if (factors.groomingLanguage > 0.3) patterns.push("grooming_language");
        if (factors.ageGapTargeting > 0.4) patterns.push("age_gap_targeting");
        if (factors.isolationAttempts > 0.3) patterns.push("isolation_attempts");
        if (factors.substanceOffers > 0.2) patterns.push("substance_offers");
        if (factors.accommodationLuring > 0.3) patterns.push("accommodation_luring");
        if (factors.multiAccountActivity > 0.3) patterns.push("multi_account_activity");
        if (factors.festivalExploitation > 0.4) patterns.push("festival_exploitation");
        if (factors.rapidEscalation > 0.5) patterns.push("rapid_escalation");
        return patterns;
      }
      static determineAction(riskLevel, patterns) {
        if (riskLevel === "critical") return "account_suspended";
        if (riskLevel === "high") return "account_flagged";
        if (riskLevel === "medium") return "warning";
        return "none";
      }
      static generateExplanation(factors, patterns) {
        if (patterns.length === 0) return "No concerning patterns detected";
        const explanations = {
          grooming_language: "Use of language commonly associated with grooming behavior",
          age_gap_targeting: "Pattern of consistently targeting younger users",
          isolation_attempts: "Attempts to isolate potential victims from support networks",
          substance_offers: "Offering drugs or substances to users",
          accommodation_luring: "Offering accommodation as a means of gaining access",
          multi_account_activity: "Operating multiple accounts simultaneously",
          festival_exploitation: "Targeting vulnerable festival-goers",
          rapid_escalation: "Rapidly escalating conversations to personal topics"
        };
        return patterns.map((pattern) => explanations[pattern] || pattern).join("; ");
      }
      static extractRiskFactors(result) {
        return {
          riskScore: result.riskScore,
          flaggedPatterns: result.flaggedPatterns,
          riskLevel: result.riskLevel
        };
      }
      static async updateUserRiskScore(userId, riskScore) {
        await db.update(users).set({
          riskScore: riskScore.toString(),
          riskLevel: this.determineRiskLevel(riskScore),
          lastRiskAssessment: /* @__PURE__ */ new Date()
        }).where(eq2(users.id, userId));
      }
      static async triggerIntervention(userId, result) {
        if (result.riskLevel === "critical") {
          await db.insert(emergencyIncidents2).values({
            reportedUserId: userId,
            incidentType: "predatory_behavior",
            severityLevel: "critical",
            description: `Automated detection: ${result.explanation}`,
            evidenceData: { analysisResult: result },
            automaticDetection: true,
            responseProtocol: "expedited",
            status: "reported"
          });
        }
        if (result.actionRecommended === "account_suspended") {
          await db.update(users).set({
            accountStatus: "suspended",
            flaggedReason: result.explanation,
            suspensionDate: /* @__PURE__ */ new Date()
          }).where(eq2(users.id, userId));
        } else if (result.actionRecommended === "account_flagged") {
          await db.update(users).set({
            accountStatus: "flagged",
            flaggedReason: result.explanation
          }).where(eq2(users.id, userId));
        }
      }
    };
    ContentModerationService = class {
      static async moderateContent(request) {
        try {
          const result = await this.processModeration(request);
          await db.insert(contentModerations2).values({
            userId: request.userId,
            contentType: request.contentType,
            contentId: request.contentId,
            moderationType: "automated",
            violationType: result.violations.length > 0 ? result.violations[0] : null,
            severityLevel: this.determineSeverity(result.confidence, result.violations),
            confidenceScore: result.confidence.toString(),
            aiAnalysis: { result, timestamp: /* @__PURE__ */ new Date() },
            moderationResult: result.action,
            actionTaken: this.getActionDescription(result.action),
            moderatedBy: "system"
          });
          return result;
        } catch (error) {
          console.error("Content moderation error:", error);
          throw new Error("Content moderation failed");
        }
      }
      static async processModeration(request) {
        const violations = await this.detectViolations(request.content);
        const confidence = this.calculateConfidence(violations);
        const action = this.determineAction(violations, confidence);
        return {
          approved: action === "approved",
          confidence,
          violations,
          action,
          explanation: this.generateExplanation(violations, action)
        };
      }
      static async detectViolations(content) {
        const violations = [];
        const lowerContent = content.toLowerCase();
        const inappropriatePatterns = [
          "explicit",
          "nude",
          "sexual",
          "porn",
          "xxx",
          "nsfw"
        ];
        if (inappropriatePatterns.some((pattern) => lowerContent.includes(pattern))) {
          violations.push("inappropriate_content");
        }
        const harassmentPatterns = [
          "kill yourself",
          "die",
          "hate you",
          "stupid",
          "idiot",
          "loser"
        ];
        if (harassmentPatterns.some((pattern) => lowerContent.includes(pattern))) {
          violations.push("harassment");
        }
        const ageInappropriatePatterns = [
          "underage",
          "minor",
          "teen",
          "young",
          "school",
          "high school"
        ];
        if (ageInappropriatePatterns.some((pattern) => lowerContent.includes(pattern))) {
          violations.push("age_inappropriate");
        }
        const groomingPatterns = [
          "secret",
          "don't tell",
          "special",
          "mature",
          "private"
        ];
        if (groomingPatterns.some((pattern) => lowerContent.includes(pattern))) {
          violations.push("grooming_behavior");
        }
        return violations;
      }
      static calculateConfidence(violations) {
        if (violations.length === 0) return 0.95;
        const severityWeights = {
          inappropriate_content: 0.9,
          harassment: 0.8,
          grooming_behavior: 0.95,
          age_inappropriate: 0.85,
          spam: 0.7,
          fake_profile: 0.8
        };
        let maxConfidence = 0;
        violations.forEach((violation) => {
          const weight = severityWeights[violation] || 0.7;
          maxConfidence = Math.max(maxConfidence, weight);
        });
        return maxConfidence;
      }
      static determineAction(violations, confidence) {
        if (violations.length === 0) return "approved";
        if (violations.includes("grooming_behavior") || violations.includes("age_inappropriate")) {
          return "escalated";
        }
        if (confidence > 0.8) return "rejected";
        if (confidence > 0.6) return "flagged";
        return "hidden";
      }
      static determineSeverity(confidence, violations) {
        if (violations.includes("grooming_behavior") || violations.includes("age_inappropriate")) {
          return "critical";
        }
        if (confidence > 0.8) return "high";
        if (confidence > 0.6) return "medium";
        return "low";
      }
      static getActionDescription(action) {
        const descriptions = {
          approved: "Content approved for display",
          rejected: "Content rejected and hidden",
          hidden: "Content hidden pending review",
          flagged: "Content flagged for human review",
          escalated: "Content escalated to emergency response team"
        };
        return descriptions[action] || "Unknown action";
      }
      static generateExplanation(violations, action) {
        if (violations.length === 0) return "No violations detected";
        const explanations = {
          inappropriate_content: "Contains inappropriate or explicit content",
          harassment: "Contains harassment or threatening language",
          grooming_behavior: "Contains language associated with grooming behavior",
          age_inappropriate: "Contains content inappropriate for minors",
          spam: "Detected as spam or promotional content",
          fake_profile: "Suspected fake or fraudulent profile"
        };
        const violationExplanations = violations.map((v) => explanations[v] || v).join("; ");
        return `${violationExplanations}. Action taken: ${action}`;
      }
    };
    DeviceFingerprintingService = class {
      static async recordDeviceFingerprint(userId, deviceInfo, ipAddress) {
        try {
          const fingerprint = this.generateFingerprint(deviceInfo);
          await db.insert(deviceFingerprints).values({
            fingerprint,
            userId,
            deviceInfo,
            ipAddress,
            location: await this.getLocationData(ipAddress),
            riskScore: this.calculateDeviceRiskScore(deviceInfo, ipAddress),
            lastSeen: /* @__PURE__ */ new Date()
          });
          await db.update(users).set({
            deviceFingerprint: fingerprint,
            ipAddress,
            lastLoginIp: ipAddress
          }).where(eq2(users.id, userId));
        } catch (error) {
          console.error("Device fingerprinting error:", error);
        }
      }
      static generateFingerprint(deviceInfo) {
        const components = [
          deviceInfo.userAgent || "",
          deviceInfo.screen?.width || "",
          deviceInfo.screen?.height || "",
          deviceInfo.timezone || "",
          deviceInfo.language || "",
          deviceInfo.platform || "",
          deviceInfo.canvas || "",
          deviceInfo.webgl || ""
        ];
        return Buffer.from(components.join("|")).toString("base64");
      }
      static async getLocationData(ipAddress) {
        return {
          country: "US",
          city: "San Francisco",
          region: "CA",
          isp: "Example ISP",
          vpn: false,
          proxy: false
        };
      }
      static calculateDeviceRiskScore(deviceInfo, ipAddress) {
        let risk = 0;
        if (deviceInfo.doNotTrack === false) risk += 0.1;
        if (!deviceInfo.cookieEnabled) risk += 0.2;
        if (deviceInfo.language !== "en-US") risk += 0.1;
        if (this.isVpnIp(ipAddress)) risk += 0.3;
        return Math.min(risk, 1).toString();
      }
      static isVpnIp(ipAddress) {
        return Math.random() < 0.1;
      }
    };
    EmergencyResponseService = class {
      static async reportIncident(reportedUserId, reportingUserId, incidentType, description, evidenceData) {
        try {
          await db.insert(emergencyIncidents2).values({
            reportedUserId,
            reportingUserId,
            incidentType,
            severityLevel: this.determineSeverity(incidentType),
            description,
            evidenceData,
            automaticDetection: false,
            responseProtocol: this.determineProtocol(incidentType),
            status: "reported"
          });
          if (incidentType === "minor_detected" || incidentType === "criminal_activity") {
            await this.triggerEmergencyResponse(reportedUserId, incidentType);
          }
        } catch (error) {
          console.error("Emergency response error:", error);
          throw new Error("Failed to report incident");
        }
      }
      static determineSeverity(incidentType) {
        const severityMap = {
          minor_detected: "emergency",
          criminal_activity: "emergency",
          predatory_behavior: "critical",
          safety_threat: "high",
          inappropriate_content: "medium"
        };
        return severityMap[incidentType] || "medium";
      }
      static determineProtocol(incidentType) {
        const protocolMap = {
          minor_detected: "law_enforcement",
          criminal_activity: "law_enforcement",
          predatory_behavior: "emergency",
          safety_threat: "expedited",
          inappropriate_content: "standard"
        };
        return protocolMap[incidentType] || "standard";
      }
      static async triggerEmergencyResponse(userId, incidentType) {
        await db.update(users).set({
          accountStatus: "suspended",
          flaggedReason: `Emergency response: ${incidentType}`,
          suspensionDate: /* @__PURE__ */ new Date()
        }).where(eq2(users.id, userId));
        console.log(`EMERGENCY: ${incidentType} detected for user ${userId}. Account suspended.`);
      }
    };
  }
});

// server/index.ts
import express3 from "express";
import { createServer } from "http";
import { WebSocketServer, WebSocket } from "ws";

// server/routes.ts
import express from "express";
import multer from "multer";
import path from "path";

// server/storage.ts
init_schema();
init_db();
import { eq, and, or, sql, desc, asc, gte, lte } from "drizzle-orm";
var DatabaseStorage = class {
  async getUser(id) {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }
  async upsertUser(userData) {
    const [user] = await db.insert(users).values(userData).onConflictDoUpdate({
      target: users.id,
      set: {
        ...userData,
        updatedAt: /* @__PURE__ */ new Date()
      }
    }).returning();
    return user;
  }
  async updateUser(id, userData) {
    const [user] = await db.update(users).set({ ...userData, updatedAt: /* @__PURE__ */ new Date() }).where(eq(users.id, id)).returning();
    return user;
  }
  async getDiscoveryUsers(userId, limit = 10) {
    const currentUser = await this.getUser(userId);
    if (!currentUser) return [];
    const likedUserIds = await db.select({ likedId: userLikes.likedId }).from(userLikes).where(eq(userLikes.likerId, userId));
    const likedIds = likedUserIds.map((like) => like.likedId);
    let query = db.select().from(users).where(
      and(
        eq(users.isProfileComplete, true),
        sql`${users.id} != ${userId}`,
        likedIds.length > 0 ? sql`${users.id} NOT IN (${likedIds.join(",")})` : void 0
      )
    );
    const potentialMatches = await query;
    const scoredMatches = potentialMatches.map((match) => {
      let score = 0;
      if (currentUser.relationshipStyle && match.relationshipStyle) {
        const compatibleStyles = {
          "monogamous": ["monogamous"],
          "polyamorous": ["polyamorous", "open", "community_first"],
          "open": ["polyamorous", "open", "community_first"],
          "community_first": ["polyamorous", "open", "community_first", "festival_family"],
          "festival_family": ["community_first", "festival_family", "crew_oriented"],
          "crew_oriented": ["festival_family", "crew_oriented", "community_first"]
        };
        if (compatibleStyles[currentUser.relationshipStyle]?.includes(match.relationshipStyle)) {
          score += 20;
        }
      }
      if (currentUser.favoriteGenres?.length && match.favoriteGenres?.length) {
        const genreOverlap = currentUser.favoriteGenres.filter(
          (genre) => match.favoriteGenres?.includes(genre)
        ).length;
        score += Math.min(genreOverlap * 5, 15);
      }
      if (currentUser.plurValues && match.plurValues) {
        const sharedValues = Object.keys(currentUser.plurValues).filter(
          (key) => currentUser.plurValues[key] === match.plurValues[key] && currentUser.plurValues[key] === true
        ).length;
        score += sharedValues * 3;
      }
      if (currentUser.vibeProfile && match.vibeProfile) {
        const energyDiff = Math.abs(
          (currentUser.vibeProfile.energyLevel || 50) - (match.vibeProfile.energyLevel || 50)
        );
        if (energyDiff < 30) score += 5;
        const eventOverlap = (currentUser.vibeProfile.favoriteEventTypes || []).filter(
          (event) => (match.vibeProfile.favoriteEventTypes || []).includes(event)
        ).length;
        score += Math.min(eventOverlap * 2.5, 5);
      }
      if (currentUser.communicationStyle && match.communicationStyle && currentUser.communicationStyle === match.communicationStyle) {
        score += 10;
      }
      if (currentUser.location && match.location) {
        if (currentUser.location === match.location) {
          score += 10;
        }
      }
      if (currentUser.age && match.age) {
        const ageDiff = Math.abs(currentUser.age - match.age);
        if (ageDiff <= 2) score += 10;
        else if (ageDiff <= 5) score += 7;
        else if (ageDiff <= 10) score += 4;
      }
      if (currentUser.relationshipGoals?.includes("finding_partner") && match.relationshipGoals?.includes("finding_partner")) {
        score += 10;
      }
      return { ...match, compatibilityScore: score };
    });
    return scoredMatches.sort((a, b) => b.compatibilityScore - a.compatibilityScore).slice(0, limit).map(({ compatibilityScore, ...user }) => user);
  }
  async getDjs(filters) {
    const conditions = [];
    conditions.push(eq(users.isDj, true));
    conditions.push(eq(users.isProfileComplete, true));
    if (filters?.genre) {
      conditions.push(sql`${filters.genre} = ANY(${users.djGenres})`);
    }
    if (filters?.location) {
      conditions.push(sql`LOWER(${users.location}) LIKE LOWER('%${filters.location}%')`);
    }
    if (filters?.experience) {
      conditions.push(eq(users.djExperience, filters.experience));
    }
    return await db.select().from(users).where(and(...conditions)).orderBy(desc(users.createdAt)).limit(50);
  }
  async getDjById(id) {
    const [dj] = await db.select().from(users).where(and(eq(users.id, id), eq(users.isDj, true)));
    return dj;
  }
  async getDjMixes(djProfileId, filters) {
    const conditions = [];
    if (djProfileId !== void 0) {
      conditions.push(eq(djMixes.djProfileId, djProfileId));
    }
    if (filters?.genre) {
      conditions.push(eq(djMixes.genre, filters.genre));
    }
    if (filters?.isPublic) {
      conditions.push(eq(djMixes.isPublic, filters.isPublic));
    }
    return await db.select().from(djMixes).where(conditions.length > 0 ? and(...conditions) : void 0).orderBy(desc(djMixes.createdAt)).limit(50);
  }
  async createEvent(event) {
    const [newEvent] = await db.insert(events).values(event).returning();
    return newEvent;
  }
  async getEvents(userId) {
    return await db.select().from(events).orderBy(asc(events.date));
  }
  async getEvent(id) {
    const [event] = await db.select().from(events).where(eq(events.id, id));
    return event;
  }
  async attendEvent(attendee) {
    const [newAttendee] = await db.insert(eventAttendees).values(attendee).onConflictDoUpdate({
      target: [eventAttendees.eventId, eventAttendees.userId],
      set: { status: attendee.status }
    }).returning();
    return newAttendee;
  }
  async likeUser(like) {
    const [newLike] = await db.insert(userLikes).values(like).returning();
    return newLike;
  }
  async checkMatch(userId1, userId2) {
    const mutualLike = await db.select().from(userLikes).where(
      and(
        eq(userLikes.likerId, userId2),
        eq(userLikes.likedId, userId1)
      )
    );
    if (mutualLike.length > 0) {
      const [match] = await db.insert(matches).values({
        userId1,
        userId2,
        status: "matched",
        matchedAt: /* @__PURE__ */ new Date()
      }).returning();
      return match;
    }
    return void 0;
  }
  async createMatch(match) {
    const [newMatch] = await db.insert(matches).values(match).returning();
    return newMatch;
  }
  async getUserMatches(userId) {
    const matchResults = await db.select({
      id: matches.id,
      userId1: matches.userId1,
      userId2: matches.userId2,
      matchType: matches.matchType,
      connectionIntention: matches.connectionIntention,
      status: matches.status,
      matchedAt: matches.matchedAt,
      createdAt: matches.createdAt
    }).from(matches).where(
      and(
        or(eq(matches.userId1, userId), eq(matches.userId2, userId)),
        eq(matches.status, "matched")
      )
    ).orderBy(desc(matches.matchedAt));
    const enrichedMatches = await Promise.all(
      matchResults.map(async (match) => {
        const [user1, user2] = await Promise.all([
          this.getUser(match.userId1),
          this.getUser(match.userId2)
        ]);
        return {
          ...match,
          user1,
          user2
        };
      })
    );
    return enrichedMatches;
  }
  async sendMessage(message) {
    const [newMessage] = await db.insert(messages).values(message).returning();
    return newMessage;
  }
  async getMatchMessages(matchId) {
    return await db.select().from(messages).where(eq(messages.matchId, matchId)).orderBy(asc(messages.sentAt));
  }
  async getUserStats(userId) {
    const [matchCount] = await db.select({ count: sql`count(*)` }).from(matches).where(
      and(
        or(eq(matches.userId1, userId), eq(matches.userId2, userId)),
        eq(matches.status, "matched")
      )
    );
    const [eventCount] = await db.select({ count: sql`count(*)` }).from(eventAttendees).where(eq(eventAttendees.userId, userId));
    const userMatches = await this.getUserMatches(userId);
    const activeChats = userMatches.length;
    return {
      totalMatches: Number(matchCount.count) || 0,
      eventsAttended: Number(eventCount.count) || 0,
      activeChats
    };
  }
  // Safety operations
  async createEmergencyContact(contact) {
    const [newContact] = await db.insert(emergencyContacts).values(contact).returning();
    return newContact;
  }
  async getEmergencyContacts(userId) {
    return await db.select().from(emergencyContacts).where(eq(emergencyContacts.userId, userId)).orderBy(desc(emergencyContacts.isPrimary), emergencyContacts.name);
  }
  async updateEmergencyContact(id, contact) {
    const [updated] = await db.update(emergencyContacts).set(contact).where(eq(emergencyContacts.id, id)).returning();
    return updated;
  }
  async deleteEmergencyContact(id) {
    await db.delete(emergencyContacts).where(eq(emergencyContacts.id, id));
  }
  async createSafetyCheckIn(checkIn) {
    const [newCheckIn] = await db.insert(safetyCheckIns).values(checkIn).returning();
    return newCheckIn;
  }
  async getUserSafetyCheckIns(userId) {
    return await db.select().from(safetyCheckIns).where(eq(safetyCheckIns.userId, userId)).orderBy(desc(safetyCheckIns.createdAt));
  }
  async getEventSafetyCheckIns(eventId) {
    return await db.select().from(safetyCheckIns).where(eq(safetyCheckIns.eventId, eventId)).orderBy(desc(safetyCheckIns.createdAt));
  }
  async updateSafetyCheckIn(id, status, message) {
    const [updated] = await db.update(safetyCheckIns).set({ status, message }).where(eq(safetyCheckIns.id, id)).returning();
    return updated;
  }
  async createRaveBuddy(buddy) {
    const [newBuddy] = await db.insert(raveBuddies).values(buddy).returning();
    return newBuddy;
  }
  async getRaveBuddyRequests(userId) {
    return await db.select().from(raveBuddies).where(or(eq(raveBuddies.requesterId, userId), eq(raveBuddies.buddyId, userId))).orderBy(desc(raveBuddies.createdAt));
  }
  async updateRaveBuddy(id, status) {
    const [updated] = await db.update(raveBuddies).set({ status, updatedAt: /* @__PURE__ */ new Date() }).where(eq(raveBuddies.id, id)).returning();
    return updated;
  }
  async getEventRaveBuddies(eventId, userId) {
    return await db.select().from(raveBuddies).where(
      and(
        eq(raveBuddies.eventId, eventId),
        or(eq(raveBuddies.requesterId, userId), eq(raveBuddies.buddyId, userId))
      )
    );
  }
  async createSafetyReport(report) {
    const [newReport] = await db.insert(safetyReports).values(report).returning();
    return newReport;
  }
  async getSafetyReports(filters) {
    let query = db.select().from(safetyReports);
    if (filters?.eventId) {
      query = query.where(eq(safetyReports.eventId, filters.eventId));
    }
    if (filters?.category) {
      query = query.where(eq(safetyReports.category, filters.category));
    }
    return await query.orderBy(desc(safetyReports.createdAt));
  }
  async createVenueRating(rating) {
    const [newRating] = await db.insert(venueRatings).values(rating).returning();
    return newRating;
  }
  async getVenueRatings(venueName) {
    return await db.select().from(venueRatings).where(eq(venueRatings.venueName, venueName)).orderBy(desc(venueRatings.createdAt));
  }
  async getHarmReductionResources(type) {
    let query = db.select().from(harmReductionResources);
    if (type) {
      query = query.where(eq(harmReductionResources.resourceType, type));
    }
    return await query.where(eq(harmReductionResources.isVerified, true)).orderBy(harmReductionResources.title);
  }
  async createHarmReductionResource(resource) {
    const [newResource] = await db.insert(harmReductionResources).values(resource).returning();
    return newResource;
  }
  // Community-First Operations Implementation
  async createCrew(crew) {
    const [newCrew] = await db.insert(crews).values(crew).returning();
    return newCrew;
  }
  async getCrews(filters) {
    let query = db.select().from(crews);
    if (filters?.crewType) {
      query = query.where(eq(crews.crewType, filters.crewType));
    }
    if (filters?.isPublic !== void 0) {
      query = query.where(eq(crews.isPublic, filters.isPublic));
    }
    return await query.orderBy(desc(crews.createdAt));
  }
  async getCrew(id) {
    const [crew] = await db.select().from(crews).where(eq(crews.id, id));
    return crew;
  }
  async getUserCrews(userId) {
    return await db.select({
      id: crews.id,
      name: crews.name,
      description: crews.description,
      crewType: crews.crewType,
      plurPhilosophy: crews.plurPhilosophy,
      isPublic: crews.isPublic,
      maxMembers: crews.maxMembers,
      founderId: crews.founderId,
      createdAt: crews.createdAt,
      updatedAt: crews.updatedAt
    }).from(crews).innerJoin(crewMembers, eq(crews.id, crewMembers.crewId)).where(eq(crewMembers.userId, userId)).orderBy(desc(crews.createdAt));
  }
  async joinCrew(membership) {
    const [newMembership] = await db.insert(crewMembers).values(membership).returning();
    return newMembership;
  }
  async updateCrewMembership(id, role, contributionLevel) {
    const updateData = { role };
    if (contributionLevel) {
      updateData.contributionLevel = contributionLevel;
    }
    const [updatedMembership] = await db.update(crewMembers).set(updateData).where(eq(crewMembers.id, id)).returning();
    return updatedMembership;
  }
  async getCrewMembers(crewId) {
    return await db.select().from(crewMembers).where(eq(crewMembers.crewId, crewId)).orderBy(desc(crewMembers.joinedAt));
  }
  // PLUR Verification System Implementation
  async getPLURChallenges(plurValue) {
    let query = db.select().from(plurChallenges);
    if (plurValue) {
      query = query.where(eq(plurChallenges.plurValue, plurValue));
    }
    return await query.orderBy(asc(plurChallenges.pointsReward));
  }
  async startPLURChallenge(progress) {
    const [newProgress] = await db.insert(userPLURProgress).values(progress).returning();
    return newProgress;
  }
  async completePLURChallenge(progressId, evidenceUrl, reflection) {
    const updateData = {
      status: "completed",
      completedAt: /* @__PURE__ */ new Date()
    };
    if (evidenceUrl) updateData.evidenceUrl = evidenceUrl;
    if (reflection) updateData.reflection = reflection;
    const [updatedProgress] = await db.update(userPLURProgress).set(updateData).where(eq(userPLURProgress.id, progressId)).returning();
    return updatedProgress;
  }
  async verifyPLURChallenge(progressId, verifierId) {
    const [progress] = await db.select().from(userPLURProgress).innerJoin(plurChallenges, eq(userPLURProgress.challengeId, plurChallenges.id)).where(eq(userPLURProgress.id, progressId));
    const [updatedProgress] = await db.update(userPLURProgress).set({
      status: "verified",
      verifiedAt: /* @__PURE__ */ new Date(),
      verifiedBy: verifierId,
      pointsEarned: progress.plur_challenges.pointsReward
    }).where(eq(userPLURProgress.id, progressId)).returning();
    return updatedProgress;
  }
  async getUserPLURProgress(userId) {
    return await db.select().from(userPLURProgress).where(eq(userPLURProgress.userId, userId)).orderBy(desc(userPLURProgress.completedAt));
  }
  async getUserPLURScore(userId) {
    const progress = await db.select({
      totalPoints: sql`COALESCE(SUM(${userPLURProgress.pointsEarned}), 0)`,
      completedChallenges: sql`COUNT(CASE WHEN ${userPLURProgress.status} IN ('completed', 'verified') THEN 1 END)`,
      verifiedChallenges: sql`COUNT(CASE WHEN ${userPLURProgress.status} = 'verified' THEN 1 END)`
    }).from(userPLURProgress).where(eq(userPLURProgress.userId, userId));
    return progress[0] || { totalPoints: 0, completedChallenges: 0, verifiedChallenges: 0 };
  }
  // Enhanced Matching for Community-First
  async getVibeMatchedUsers(userId, filters) {
    let query = db.select().from(users).where(
      and(
        eq(users.isProfileComplete, true),
        sql`${users.id} != ${userId}`
      )
    );
    if (filters?.relationshipStyle && filters.relationshipStyle.length > 0) {
      query = query.where(
        or(
          ...filters.relationshipStyle.map((style) => eq(users.relationshipStyle, style))
        )
      );
    }
    if (filters?.crewPreference) {
      if (filters.crewPreference === "open_to_new") {
        query = query.where(eq(users.openToNewCrew, true));
      } else if (filters.crewPreference === "has_crew") {
        query = query.where(sql`${users.crewName} IS NOT NULL`);
      }
    }
    const alreadyLiked = db.select({ likedId: userLikes.likedId }).from(userLikes).where(eq(userLikes.likerId, userId));
    query = query.where(
      sql`${users.id} NOT IN (${alreadyLiked})`
    );
    return await query.limit(20);
  }
  // Marketplace Operations
  async createMarketplaceItem(item) {
    const [newItem] = await db.insert(marketplaceItems).values(item).returning();
    return newItem;
  }
  async getMarketplaceItems(filters) {
    let query = db.select().from(marketplaceItems).where(eq(marketplaceItems.isAvailable, true));
    if (filters?.category) {
      query = query.where(eq(marketplaceItems.category, filters.category));
    }
    if (filters?.condition) {
      query = query.where(eq(marketplaceItems.condition, filters.condition));
    }
    if (filters?.priceRange) {
      query = query.where(
        and(
          gte(marketplaceItems.price, filters.priceRange.min.toString()),
          lte(marketplaceItems.price, filters.priceRange.max.toString())
        )
      );
    }
    if (filters?.location) {
      query = query.where(eq(marketplaceItems.location, filters.location));
    }
    if (filters?.sellerId) {
      query = query.where(eq(marketplaceItems.sellerId, filters.sellerId));
    }
    return await query.orderBy(desc(marketplaceItems.createdAt));
  }
  async getMarketplaceItem(id) {
    const [item] = await db.select().from(marketplaceItems).where(eq(marketplaceItems.id, id));
    return item;
  }
  async updateMarketplaceItem(id, updates) {
    const [updatedItem] = await db.update(marketplaceItems).set({ ...updates, updatedAt: /* @__PURE__ */ new Date() }).where(eq(marketplaceItems.id, id)).returning();
    return updatedItem;
  }
  async deleteMarketplaceItem(id) {
    await db.delete(marketplaceItems).where(eq(marketplaceItems.id, id));
  }
  async sendMarketplaceMessage(message) {
    const [newMessage] = await db.insert(marketplaceMessages).values(message).returning();
    return newMessage;
  }
  async getMarketplaceMessages(itemId, userId) {
    return await db.select().from(marketplaceMessages).where(
      and(
        eq(marketplaceMessages.itemId, itemId),
        or(
          eq(marketplaceMessages.senderId, userId),
          eq(marketplaceMessages.receiverId, userId)
        )
      )
    ).orderBy(marketplaceMessages.createdAt);
  }
  async createMarketplaceReview(review) {
    const [newReview] = await db.insert(marketplaceReviews).values(review).returning();
    return newReview;
  }
  async getSellerReviews(sellerId) {
    return await db.select().from(marketplaceReviews).where(eq(marketplaceReviews.sellerId, sellerId)).orderBy(desc(marketplaceReviews.createdAt));
  }
  async addToFavorites(favorite) {
    const [newFavorite] = await db.insert(marketplaceFavorites).values(favorite).returning();
    return newFavorite;
  }
  async removeFromFavorites(userId, itemId) {
    await db.delete(marketplaceFavorites).where(
      and(
        eq(marketplaceFavorites.userId, userId),
        eq(marketplaceFavorites.itemId, itemId)
      )
    );
  }
  async getUserFavorites(userId) {
    return await db.select({
      id: marketplaceItems.id,
      sellerId: marketplaceItems.sellerId,
      title: marketplaceItems.title,
      description: marketplaceItems.description,
      category: marketplaceItems.category,
      subcategory: marketplaceItems.subcategory,
      brand: marketplaceItems.brand,
      size: marketplaceItems.size,
      color: marketplaceItems.color,
      condition: marketplaceItems.condition,
      price: marketplaceItems.price,
      originalPrice: marketplaceItems.originalPrice,
      isNegotiable: marketplaceItems.isNegotiable,
      isAvailable: marketplaceItems.isAvailable,
      images: marketplaceItems.images,
      tags: marketplaceItems.tags,
      location: marketplaceItems.location,
      shippingOptions: marketplaceItems.shippingOptions,
      measurements: marketplaceItems.measurements,
      createdAt: marketplaceItems.createdAt,
      updatedAt: marketplaceItems.updatedAt
    }).from(marketplaceFavorites).innerJoin(marketplaceItems, eq(marketplaceFavorites.itemId, marketplaceItems.id)).where(eq(marketplaceFavorites.userId, userId)).orderBy(desc(marketplaceFavorites.createdAt));
  }
  async createMarketplaceOffer(offer) {
    const [newOffer] = await db.insert(marketplaceOffers).values(offer).returning();
    return newOffer;
  }
  async getMarketplaceOffers(itemId, userId) {
    let query = db.select().from(marketplaceOffers);
    if (itemId) {
      query = query.where(eq(marketplaceOffers.itemId, itemId));
    }
    if (userId) {
      query = query.where(
        or(
          eq(marketplaceOffers.buyerId, userId),
          eq(marketplaceOffers.sellerId, userId)
        )
      );
    }
    return await query.orderBy(desc(marketplaceOffers.createdAt));
  }
  async updateMarketplaceOffer(id, status) {
    const [updatedOffer] = await db.update(marketplaceOffers).set({ status, updatedAt: /* @__PURE__ */ new Date() }).where(eq(marketplaceOffers.id, id)).returning();
    return updatedOffer;
  }
  // AI Outfit Recommendations
  async saveOutfitRecommendation(recommendation) {
    const [savedRecommendation] = await db.insert(outfitRecommendations).values(recommendation).returning();
    return savedRecommendation;
  }
  async getUserOutfitRecommendations(userId) {
    return await db.select().from(outfitRecommendations).where(eq(outfitRecommendations.userId, userId)).orderBy(desc(outfitRecommendations.createdAt));
  }
  async getEventOutfitRecommendations(eventId, userId) {
    const [recommendation] = await db.select().from(outfitRecommendations).where(
      and(
        eq(outfitRecommendations.eventId, eventId),
        eq(outfitRecommendations.userId, userId)
      )
    ).orderBy(desc(outfitRecommendations.createdAt));
    return recommendation;
  }
  // Event Photos
  async addEventPhoto(photo) {
    const [newPhoto] = await db.insert(eventPhotos).values(photo).returning();
    return newPhoto;
  }
  async getEventPhotos(eventId) {
    return await db.select().from(eventPhotos).where(and(
      eq(eventPhotos.eventId, eventId),
      eq(eventPhotos.isApproved, true)
    )).orderBy(eventPhotos.createdAt);
  }
  async approveEventPhoto(photoId) {
    const [updatedPhoto] = await db.update(eventPhotos).set({ isApproved: true }).where(eq(eventPhotos.id, photoId)).returning();
    return updatedPhoto;
  }
  async deleteEventPhoto(photoId, userId) {
    await db.delete(eventPhotos).where(and(
      eq(eventPhotos.id, photoId),
      eq(eventPhotos.userId, userId)
    ));
  }
  // DJ Profile Operations
  async createDjProfile(profile) {
    const [newProfile] = await db.insert(djProfiles).values(profile).returning();
    return newProfile;
  }
  async getDjProfile(userId) {
    const [profile] = await db.select().from(djProfiles).where(eq(djProfiles.userId, userId)).limit(1);
    return profile;
  }
  async updateDjProfile(userId, updates) {
    const [updatedProfile] = await db.update(djProfiles).set({ ...updates, updatedAt: /* @__PURE__ */ new Date() }).where(eq(djProfiles.userId, userId)).returning();
    return updatedProfile;
  }
  async getAllDjProfiles(filters) {
    let query = db.select().from(djProfiles);
    const conditions = [];
    if (filters?.genre) {
      conditions.push(sql`${djProfiles.genres} && ARRAY[${filters.genre}]`);
    }
    if (filters?.experience) {
      conditions.push(eq(djProfiles.experience, filters.experience));
    }
    if (filters?.availableForBookings !== void 0) {
      conditions.push(eq(djProfiles.availableForBookings, filters.availableForBookings));
    }
    if (conditions.length > 0) {
      query = query.where(and(...conditions));
    }
    return await query.orderBy(desc(djProfiles.createdAt));
  }
  // DJ Mix Operations
  async createDjMix(mix) {
    const [newMix] = await db.insert(djMixes).values(mix).returning();
    return newMix;
  }
  async getDjMix(id) {
    const [mix] = await db.select().from(djMixes).where(eq(djMixes.id, id)).limit(1);
    return mix;
  }
  async updateDjMix(id, updates) {
    const [updatedMix] = await db.update(djMixes).set(updates).where(eq(djMixes.id, id)).returning();
    return updatedMix;
  }
  async deleteDjMix(id, userId) {
    await db.delete(djMixes).where(and(
      eq(djMixes.id, id),
      eq(
        djMixes.djProfileId,
        db.select({ id: djProfiles.id }).from(djProfiles).where(eq(djProfiles.userId, userId))
      )
    ));
  }
  async likeDjMix(like) {
    const [newLike] = await db.insert(djMixLikes).values(like).returning();
    return newLike;
  }
  async unlikeDjMix(userId, mixId) {
    await db.delete(djMixLikes).where(and(
      eq(djMixLikes.userId, userId),
      eq(djMixLikes.mixId, mixId)
    ));
  }
  async getMixLikes(mixId) {
    return await db.select().from(djMixLikes).where(eq(djMixLikes.mixId, mixId));
  }
  // DJ Gig Operations
  async createDjGig(gig) {
    const [newGig] = await db.insert(djGigs).values(gig).returning();
    return newGig;
  }
  async getDjGigs(filters) {
    let query = db.select().from(djGigs);
    const conditions = [];
    if (filters?.type) {
      conditions.push(eq(djGigs.gigType, filters.type));
    }
    if (filters?.location) {
      conditions.push(eq(djGigs.location, filters.location));
    }
    if (filters?.status) {
      conditions.push(eq(djGigs.status, filters.status));
    }
    if (conditions.length > 0) {
      query = query.where(and(...conditions));
    }
    return await query.orderBy(desc(djGigs.createdAt));
  }
  async getDjGig(id) {
    const [gig] = await db.select().from(djGigs).where(eq(djGigs.id, id)).limit(1);
    return gig;
  }
  async updateDjGig(id, updates) {
    const [updatedGig] = await db.update(djGigs).set({ ...updates, updatedAt: /* @__PURE__ */ new Date() }).where(eq(djGigs.id, id)).returning();
    return updatedGig;
  }
  async deleteDjGig(id, userId) {
    await db.delete(djGigs).where(and(
      eq(djGigs.id, id),
      eq(djGigs.posterId, userId)
    ));
  }
  async applyForGig(application) {
    const [newApplication] = await db.insert(djGigApplications).values(application).returning();
    return newApplication;
  }
  async getGigApplications(gigId, applicantId) {
    let query = db.select().from(djGigApplications);
    const conditions = [];
    if (gigId) {
      conditions.push(eq(djGigApplications.gigId, gigId));
    }
    if (applicantId) {
      conditions.push(eq(djGigApplications.applicantId, applicantId));
    }
    if (conditions.length > 0) {
      query = query.where(and(...conditions));
    }
    return await query.orderBy(desc(djGigApplications.createdAt));
  }
  async updateGigApplication(id, status) {
    const [updatedApplication] = await db.update(djGigApplications).set({ status, updatedAt: /* @__PURE__ */ new Date() }).where(eq(djGigApplications.id, id)).returning();
    return updatedApplication;
  }
  // DJ Collaboration Operations
  async createDjCollaboration(collaboration) {
    const [newCollaboration] = await db.insert(djCollaborations).values(collaboration).returning();
    return newCollaboration;
  }
  async getDjCollaborations(userId) {
    return await db.select().from(djCollaborations).where(or(
      eq(djCollaborations.initiatorId, userId),
      eq(djCollaborations.collaboratorId, userId)
    )).orderBy(desc(djCollaborations.createdAt));
  }
  async updateDjCollaboration(id, status, resultMixId) {
    const updateData = { status, updatedAt: /* @__PURE__ */ new Date() };
    if (resultMixId) {
      updateData.resultMixId = resultMixId;
    }
    const [updatedCollaboration] = await db.update(djCollaborations).set(updateData).where(eq(djCollaborations.id, id)).returning();
    return updatedCollaboration;
  }
  // Newsfeed Operations
  async createNewsfeedPost(post) {
    const [newPost] = await db.insert(newsfeedPosts).values(post).returning();
    return newPost;
  }
  async getNewsfeedPosts(filters) {
    let query = db.select().from(newsfeedPosts);
    const conditions = [];
    if (filters?.userId) {
      conditions.push(eq(newsfeedPosts.userId, filters.userId));
    }
    if (filters?.eventId) {
      conditions.push(eq(newsfeedPosts.eventId, filters.eventId));
    }
    if (filters?.crewId) {
      conditions.push(eq(newsfeedPosts.crewId, filters.crewId));
    }
    if (filters?.postType) {
      conditions.push(eq(newsfeedPosts.postType, filters.postType));
    }
    if (filters?.visibility) {
      conditions.push(eq(newsfeedPosts.visibility, filters.visibility));
    }
    if (conditions.length > 0) {
      query = query.where(and(...conditions));
    }
    query = query.orderBy(desc(newsfeedPosts.createdAt));
    if (filters?.limit) {
      query = query.limit(filters.limit);
    }
    if (filters?.offset) {
      query = query.offset(filters.offset);
    }
    return await query;
  }
  async getNewsfeedPost(id) {
    const [post] = await db.select().from(newsfeedPosts).where(eq(newsfeedPosts.id, id));
    return post;
  }
  async updateNewsfeedPost(id, updates) {
    const [updatedPost] = await db.update(newsfeedPosts).set({
      ...updates,
      updatedAt: /* @__PURE__ */ new Date()
    }).where(eq(newsfeedPosts.id, id)).returning();
    return updatedPost;
  }
  async deleteNewsfeedPost(id, userId) {
    await db.delete(newsfeedPosts).where(and(
      eq(newsfeedPosts.id, id),
      eq(newsfeedPosts.userId, userId)
    ));
  }
  async likeNewsfeedPost(like) {
    const [newLike] = await db.insert(newsfeedLikes).values(like).returning();
    return newLike;
  }
  async unlikeNewsfeedPost(userId, postId) {
    await db.delete(newsfeedLikes).where(and(
      eq(newsfeedLikes.userId, userId),
      eq(newsfeedLikes.postId, postId)
    ));
  }
  async getPostLikes(postId) {
    return await db.select().from(newsfeedLikes).where(eq(newsfeedLikes.postId, postId)).orderBy(desc(newsfeedLikes.createdAt));
  }
  async createNewsfeedComment(comment) {
    const [newComment] = await db.insert(newsfeedComments).values(comment).returning();
    return newComment;
  }
  async getPostComments(postId) {
    return await db.select().from(newsfeedComments).where(eq(newsfeedComments.postId, postId)).orderBy(desc(newsfeedComments.createdAt));
  }
  async updateNewsfeedComment(id, content) {
    const [updatedComment] = await db.update(newsfeedComments).set({
      content,
      updatedAt: /* @__PURE__ */ new Date()
    }).where(eq(newsfeedComments.id, id)).returning();
    return updatedComment;
  }
  async deleteNewsfeedComment(id, userId) {
    await db.delete(newsfeedComments).where(and(
      eq(newsfeedComments.id, id),
      eq(newsfeedComments.userId, userId)
    ));
  }
  async shareNewsfeedPost(share) {
    const [newShare] = await db.insert(newsfeedShares).values(share).returning();
    return newShare;
  }
  async getPostShares(postId) {
    return await db.select().from(newsfeedShares).where(eq(newsfeedShares.postId, postId)).orderBy(desc(newsfeedShares.createdAt));
  }
  // Enhanced User Verification System
  async createUserVerification(verification) {
    const [newVerification] = await db.insert(userVerifications).values(verification).returning();
    return newVerification;
  }
  async getUserVerifications(userId) {
    return await db.select().from(userVerifications).where(eq(userVerifications.userId, userId)).orderBy(desc(userVerifications.createdAt));
  }
  async updateVerificationStatus(id, status) {
    const [updatedVerification] = await db.update(userVerifications).set({
      status,
      verifiedAt: status === "verified" ? /* @__PURE__ */ new Date() : null,
      updatedAt: /* @__PURE__ */ new Date()
    }).where(eq(userVerifications.id, id)).returning();
    return updatedVerification;
  }
  async getVerificationsByType(userId, type) {
    return await db.select().from(userVerifications).where(and(
      eq(userVerifications.userId, userId),
      eq(userVerifications.verificationType, type)
    )).orderBy(desc(userVerifications.createdAt));
  }
  // Social Vouching System
  async createUserVouch(vouch) {
    const [newVouch] = await db.insert(userVouches).values(vouch).returning();
    await this.calculateTrustScore(vouch.vouchedUserId);
    return newVouch;
  }
  async getUserVouches(userId) {
    return await db.select().from(userVouches).where(and(
      eq(userVouches.vouchedUserId, userId),
      eq(userVouches.isActive, true)
    )).orderBy(desc(userVouches.createdAt));
  }
  async getVouchedUsers(voucherId) {
    return await db.select().from(userVouches).where(and(
      eq(userVouches.voucherId, voucherId),
      eq(userVouches.isActive, true)
    )).orderBy(desc(userVouches.createdAt));
  }
  async updateVouchStatus(id, isActive) {
    const [updatedVouch] = await db.update(userVouches).set({
      isActive,
      updatedAt: /* @__PURE__ */ new Date()
    }).where(eq(userVouches.id, id)).returning();
    return updatedVouch;
  }
  async calculateTrustScore(userId) {
    const verifications = await this.getUserVerifications(userId);
    const verifiedCount = verifications.filter((v) => v.status === "verified").length;
    const verificationScore = Math.min(verifiedCount / 4 * 30, 30);
    const vouches = await this.getUserVouches(userId);
    const vouchingScore = Math.min(vouches.length / 5 * 40, 40);
    const reports = await db.select().from(safetyReports).where(eq(safetyReports.reportedUserId, userId));
    const behaviorScore = Math.max(30 - reports.length * 5, 0);
    const totalScore = verificationScore + vouchingScore + behaviorScore;
    await db.insert(userTrustScores).values({
      userId,
      trustScore: totalScore.toString(),
      verificationScore: verificationScore.toString(),
      vouchingScore: vouchingScore.toString(),
      behaviorScore: behaviorScore.toString(),
      lastCalculated: /* @__PURE__ */ new Date()
    }).onConflictDoUpdate({
      target: userTrustScores.userId,
      set: {
        trustScore: totalScore.toString(),
        verificationScore: verificationScore.toString(),
        vouchingScore: vouchingScore.toString(),
        behaviorScore: behaviorScore.toString(),
        lastCalculated: /* @__PURE__ */ new Date()
      }
    });
  }
  async getTrustScore(userId) {
    const [score] = await db.select().from(userTrustScores).where(eq(userTrustScores.userId, userId));
    return score;
  }
  // Enhanced Buddy System
  async createBuddyRequest(request) {
    const [newRequest] = await db.insert(buddyRequests).values(request).returning();
    return newRequest;
  }
  async getBuddyRequests(filters) {
    let query = db.select().from(buddyRequests);
    if (filters?.eventId) {
      query = query.where(eq(buddyRequests.eventId, filters.eventId));
    }
    if (filters?.userId) {
      query = query.where(eq(buddyRequests.requesterId, filters.userId));
    }
    if (filters?.requestType) {
      query = query.where(eq(buddyRequests.requestType, filters.requestType));
    }
    return await query.where(eq(buddyRequests.isActive, true)).orderBy(desc(buddyRequests.createdAt));
  }
  async getBuddyRequest(id) {
    const [request] = await db.select().from(buddyRequests).where(eq(buddyRequests.id, id));
    return request;
  }
  async updateBuddyRequest(id, updates) {
    const [updatedRequest] = await db.update(buddyRequests).set({
      ...updates,
      updatedAt: /* @__PURE__ */ new Date()
    }).where(eq(buddyRequests.id, id)).returning();
    return updatedRequest;
  }
  async deleteBuddyRequest(id, userId) {
    await db.delete(buddyRequests).where(and(
      eq(buddyRequests.id, id),
      eq(buddyRequests.requesterId, userId)
    ));
  }
  async createBuddyResponse(response) {
    const [newResponse] = await db.insert(buddyResponses).values(response).returning();
    await db.update(buddyRequests).set({
      responseCount: sql`${buddyRequests.responseCount} + 1`,
      updatedAt: /* @__PURE__ */ new Date()
    }).where(eq(buddyRequests.id, response.requestId));
    return newResponse;
  }
  async getBuddyResponses(requestId) {
    return await db.select().from(buddyResponses).where(eq(buddyResponses.requestId, requestId)).orderBy(desc(buddyResponses.createdAt));
  }
  async updateBuddyResponse(id, status) {
    const [updatedResponse] = await db.update(buddyResponses).set({
      status,
      updatedAt: /* @__PURE__ */ new Date()
    }).where(eq(buddyResponses.id, id)).returning();
    return updatedResponse;
  }
  async rateBuddyExperience(responseId, rating, feedback) {
    const [updatedResponse] = await db.update(buddyResponses).set({
      rating,
      feedback,
      updatedAt: /* @__PURE__ */ new Date()
    }).where(eq(buddyResponses.id, responseId)).returning();
    return updatedResponse;
  }
  // Enhanced Safety Groups
  async createSafetyGroup(group) {
    const [newGroup] = await db.insert(safetyGroups).values(group).returning();
    await db.insert(safetyGroupMembers).values({
      groupId: newGroup.id,
      userId: group.leaderId,
      role: "leader",
      status: "active"
    });
    return newGroup;
  }
  async getSafetyGroups(eventId) {
    let query = db.select().from(safetyGroups);
    if (eventId) {
      query = query.where(eq(safetyGroups.eventId, eventId));
    }
    return await query.where(eq(safetyGroups.isActive, true)).orderBy(desc(safetyGroups.createdAt));
  }
  async joinSafetyGroup(groupId, userId) {
    const [membership] = await db.insert(safetyGroupMembers).values({
      groupId,
      userId,
      role: "member",
      status: "active"
    }).returning();
    await db.update(safetyGroups).set({
      currentMembers: sql`${safetyGroups.currentMembers} + 1`
    }).where(eq(safetyGroups.id, groupId));
    return membership;
  }
  async leaveSafetyGroup(groupId, userId) {
    await db.delete(safetyGroupMembers).where(and(
      eq(safetyGroupMembers.groupId, groupId),
      eq(safetyGroupMembers.userId, userId)
    ));
    await db.update(safetyGroups).set({
      currentMembers: sql`${safetyGroups.currentMembers} - 1`
    }).where(eq(safetyGroups.id, groupId));
  }
  async updateGroupCheckIn(groupId, userId) {
    const [updatedMember] = await db.update(safetyGroupMembers).set({
      lastCheckIn: /* @__PURE__ */ new Date(),
      status: "active"
    }).where(and(
      eq(safetyGroupMembers.groupId, groupId),
      eq(safetyGroupMembers.userId, userId)
    )).returning();
    return updatedMember;
  }
  async getGroupMembers(groupId) {
    return await db.select().from(safetyGroupMembers).where(eq(safetyGroupMembers.groupId, groupId)).orderBy(asc(safetyGroupMembers.joinedAt));
  }
  // Event-Based Buddy Discovery
  async getEventBuddyRequests(eventId, filters) {
    let query = db.select().from(buddyRequests).where(eq(buddyRequests.eventId, eventId));
    if (filters?.requestType) {
      query = query.where(eq(buddyRequests.requestType, filters.requestType));
    }
    if (filters?.ageRange) {
      query = query.where(eq(buddyRequests.ageRange, filters.ageRange));
    }
    return await query.where(eq(buddyRequests.isActive, true)).orderBy(desc(buddyRequests.createdAt));
  }
  async getCompatibleBuddies(userId, eventId) {
    const userTrustScore = await this.getTrustScore(userId);
    const minTrustScore = userTrustScore ? parseFloat(userTrustScore.trustScore) * 0.7 : 0;
    return await db.select().from(buddyRequests).innerJoin(userTrustScores, eq(buddyRequests.requesterId, userTrustScores.userId)).where(and(
      eq(buddyRequests.eventId, eventId),
      eq(buddyRequests.isActive, true),
      sql`${userTrustScores.trustScore}::decimal >= ${minTrustScore}`
    )).orderBy(desc(userTrustScores.trustScore));
  }
  async searchBuddyRequests(filters) {
    let query = db.select().from(buddyRequests).innerJoin(userTrustScores, eq(buddyRequests.requesterId, userTrustScores.userId));
    if (filters.location) {
      query = query.where(sql`${buddyRequests.meetupLocation} ILIKE ${`%${filters.location}%`}`);
    }
    if (filters.activities && filters.activities.length > 0) {
      query = query.where(sql`${buddyRequests.activities} && ${filters.activities}`);
    }
    if (filters.timeRange) {
      query = query.where(and(
        sql`${buddyRequests.meetupTime} >= ${filters.timeRange.start}`,
        sql`${buddyRequests.meetupTime} <= ${filters.timeRange.end}`
      ));
    }
    if (filters.trustScoreMin) {
      query = query.where(sql`${userTrustScores.trustScore}::decimal >= ${filters.trustScoreMin}`);
    }
    return await query.where(eq(buddyRequests.isActive, true)).orderBy(desc(userTrustScores.trustScore));
  }
  // Security Dashboard Functions
  async getUserCount() {
    try {
      const result = await this.db.select({ count: sql`count(*)` }).from(users);
      return result[0].count;
    } catch (error) {
      console.error("Error getting user count:", error);
      return 0;
    }
  }
  async getVerifiedUserCount() {
    try {
      const result = await this.db.select({ count: sql`count(*)` }).from(users).where(eq(users.ageVerified, true));
      return result[0].count;
    } catch (error) {
      console.error("Error getting verified user count:", error);
      return 0;
    }
  }
  async getSuspendedUserCount() {
    try {
      const result = await this.db.select({ count: sql`count(*)` }).from(users).where(eq(users.accountStatus, "suspended"));
      return result[0].count;
    } catch (error) {
      console.error("Error getting suspended user count:", error);
      return 0;
    }
  }
  async getCriticalIncidentCount() {
    try {
      const result = await this.db.select({ count: sql`count(*)` }).from(emergencyIncidents).where(eq(emergencyIncidents.severityLevel, "critical"));
      return result[0].count;
    } catch (error) {
      console.error("Error getting critical incident count:", error);
      return 0;
    }
  }
  async getRecentIncidents(limit = 10) {
    try {
      const incidents = await this.db.select().from(emergencyIncidents).orderBy(desc(emergencyIncidents.createdAt)).limit(limit);
      return incidents;
    } catch (error) {
      console.error("Error getting recent incidents:", error);
      return [];
    }
  }
  async getRiskAnalysis() {
    try {
      const highRisk = await this.db.select({ count: sql`count(*)` }).from(users).where(sql`${users.riskLevel} = 'high'`);
      const mediumRisk = await this.db.select({ count: sql`count(*)` }).from(users).where(sql`${users.riskLevel} = 'medium'`);
      const lowRisk = await this.db.select({ count: sql`count(*)` }).from(users).where(sql`${users.riskLevel} = 'low' OR ${users.riskLevel} IS NULL`);
      return {
        highRisk: highRisk[0].count,
        mediumRisk: mediumRisk[0].count,
        lowRisk: lowRisk[0].count
      };
    } catch (error) {
      console.error("Error getting risk analysis:", error);
      return { highRisk: 0, mediumRisk: 0, lowRisk: 0 };
    }
  }
  async getModerationStats() {
    try {
      const approved = await this.db.select({ count: sql`count(*)` }).from(contentModerations).where(eq(contentModerations.moderationResult, "approved"));
      const rejected = await this.db.select({ count: sql`count(*)` }).from(contentModerations).where(eq(contentModerations.moderationResult, "rejected"));
      const flagged = await this.db.select({ count: sql`count(*)` }).from(contentModerations).where(eq(contentModerations.moderationResult, "flagged"));
      const pending = await this.db.select({ count: sql`count(*)` }).from(contentModerations).where(eq(contentModerations.moderationResult, "hidden"));
      return {
        approved: approved[0].count,
        rejected: rejected[0].count,
        flagged: flagged[0].count,
        pending: pending[0].count
      };
    } catch (error) {
      console.error("Error getting moderation stats:", error);
      return { approved: 0, rejected: 0, flagged: 0, pending: 0 };
    }
  }
};
var storage = new DatabaseStorage();

// server/replitAuth.ts
import * as client from "openid-client";
import { Strategy } from "openid-client/passport";
import passport from "passport";
import session from "express-session";
import memoize from "memoizee";
import connectPg from "connect-pg-simple";
if (!process.env.REPLIT_DOMAINS) {
  throw new Error("Environment variable REPLIT_DOMAINS not provided");
}
var getOidcConfig = memoize(
  async () => {
    try {
      return await client.discovery(
        new URL(process.env.ISSUER_URL ?? "https://replit.com/oidc"),
        process.env.REPL_ID
      );
    } catch (error) {
      console.error("OIDC Config Error:", error);
      throw error;
    }
  },
  { maxAge: 3600 * 1e3 }
);
function getSession() {
  const sessionTtl = 7 * 24 * 60 * 60 * 1e3;
  const pgStore = connectPg(session);
  const sessionStore = new pgStore({
    conString: process.env.DATABASE_URL,
    createTableIfMissing: true,
    ttl: sessionTtl,
    tableName: "sessions"
  });
  return session({
    secret: process.env.SESSION_SECRET,
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: sessionTtl,
      sameSite: "lax"
    }
  });
}
function updateUserSession(user, tokens) {
  user.claims = tokens.claims();
  user.access_token = tokens.access_token;
  user.refresh_token = tokens.refresh_token;
  user.expires_at = user.claims?.exp;
}
async function upsertUser(claims) {
  await storage.upsertUser({
    id: claims["sub"],
    email: claims["email"],
    firstName: claims["first_name"],
    lastName: claims["last_name"],
    profileImageUrl: claims["profile_image_url"]
  });
}
async function setupAuth(app2) {
  app2.set("trust proxy", 1);
  app2.use(getSession());
  app2.use(passport.initialize());
  app2.use(passport.session());
  const config = await getOidcConfig();
  const verify = async (tokens, verified) => {
    const user = {};
    updateUserSession(user, tokens);
    await upsertUser(tokens.claims());
    verified(null, user);
  };
  const domains = process.env.REPLIT_DOMAINS.split(",");
  if (process.env.NODE_ENV === "development") {
    domains.push("localhost");
  }
  for (const domain of domains) {
    const strategy = new Strategy(
      {
        name: `replitauth:${domain}`,
        config,
        scope: "openid email profile offline_access",
        callbackURL: domain === "localhost" ? `http://${domain}:5000/api/callback` : `https://${domain}/api/callback`
      },
      verify
    );
    passport.use(strategy);
  }
  passport.serializeUser((user, cb) => cb(null, user));
  passport.deserializeUser((user, cb) => cb(null, user));
  app2.get("/api/login", (req, res, next) => {
    const domain = req.hostname || process.env.REPLIT_DOMAINS?.split(",")[0] || "localhost";
    passport.authenticate(`replitauth:${domain}`, {
      prompt: "login consent",
      scope: ["openid", "email", "profile", "offline_access"]
    })(req, res, next);
  });
  app2.get("/api/callback", (req, res, next) => {
    const domain = req.hostname || process.env.REPLIT_DOMAINS?.split(",")[0] || "localhost";
    passport.authenticate(`replitauth:${domain}`, {
      successReturnToOrRedirect: "/",
      failureRedirect: "/api/login"
    })(req, res, (err) => {
      if (err) {
        console.error("Authentication callback error:", err);
        return res.redirect("/api/login");
      }
      console.log("Authentication successful, redirecting to home");
      res.redirect("/");
    });
  });
  app2.get("/api/logout", (req, res) => {
    req.logout(() => {
      res.redirect(
        client.buildEndSessionUrl(config, {
          client_id: process.env.REPL_ID,
          post_logout_redirect_uri: `${req.protocol}://${req.hostname}`
        }).href
      );
    });
  });
}
var isAuthenticated = async (req, res, next) => {
  const user = req.user;
  if (!req.isAuthenticated() || !user.expires_at) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const now = Math.floor(Date.now() / 1e3);
  if (now <= user.expires_at) {
    return next();
  }
  const refreshToken = user.refresh_token;
  if (!refreshToken) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  try {
    const config = await getOidcConfig();
    const tokenResponse = await client.refreshTokenGrant(config, refreshToken);
    updateUserSession(user, tokenResponse);
    return next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
};

// server/routes.ts
init_aiService();
init_schema();
var upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024
    // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type. Only JPEG, PNG, GIF, and WebP are allowed."));
    }
  }
});
var audioUpload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/audio/");
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, "mix-" + uniqueSuffix + path.extname(file.originalname));
    }
  }),
  limits: {
    fileSize: 100 * 1024 * 1024
    // 100MB limit for audio files
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["audio/mpeg", "audio/mp3", "audio/wav", "audio/flac", "audio/mp4", "audio/aac"];
    if (allowedTypes.includes(file.mimetype) || file.originalname.match(/\.(mp3|wav|flac|m4a|aac)$/i)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid audio file type. Only MP3, WAV, FLAC, M4A, and AAC are allowed."));
    }
  }
});
async function registerRoutes(app2) {
  app2.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
  await setupAuth(app2);
  app2.get("/api/auth/user", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      res.json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });
  app2.put("/api/profile", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const userData = req.body;
      const profileData = {
        username: userData.username,
        age: userData.age,
        gender: userData.gender,
        bio: userData.bio,
        location: userData.location,
        musicPreferences: userData.musicPreferences || [],
        relationshipStyle: userData.relationshipStyle || "community_first",
        plurValues: userData.plurValues || [],
        vibeProfile: userData.vibeProfile || {
          energyLevel: "moderate",
          costumeStyle: [],
          ravePhilosophy: [],
          dancingStyle: [],
          socialPreference: "both"
        },
        communicationStyle: userData.communicationStyle || "direct",
        boundariesAndConsent: userData.boundariesAndConsent || "",
        relationshipGoals: userData.relationshipGoals || [],
        crewName: userData.crewName || "",
        crewRole: userData.crewRole || "solo",
        openToNewCrew: userData.openToNewCrew !== void 0 ? userData.openToNewCrew : true,
        isProfileComplete: true
      };
      const updatedUser = await storage.updateUser(userId, profileData);
      res.json(updatedUser);
    } catch (error) {
      console.error("Error updating profile:", error);
      res.status(500).json({ message: "Failed to update profile" });
    }
  });
  app2.post("/api/profile/photo", isAuthenticated, upload.single("photo"), async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      if (!req.file) {
        return res.status(400).json({ message: "No photo file provided" });
      }
      const base64Image = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;
      const updatedUser = await storage.updateUser(userId, {
        profileImageUrl: base64Image
      });
      res.json({
        message: "Photo uploaded successfully",
        profileImageUrl: updatedUser.profileImageUrl
      });
    } catch (error) {
      console.error("Error uploading photo:", error);
      res.status(500).json({ message: "Failed to upload photo" });
    }
  });
  app2.get("/api/discovery", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const users2 = await storage.getDiscoveryUsers(userId);
      res.json(users2);
    } catch (error) {
      console.error("Error fetching discovery users:", error);
      res.status(500).json({ message: "Failed to fetch users" });
    }
  });
  app2.get("/api/users/:id", isAuthenticated, async (req, res) => {
    try {
      const user = await storage.getUser(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
    } catch (error) {
      console.error("Error fetching user profile:", error);
      res.status(500).json({ message: "Failed to fetch user profile" });
    }
  });
  app2.get("/api/djs", async (req, res) => {
    try {
      const filters = {
        genre: req.query.genre,
        location: req.query.location,
        experience: req.query.experience
      };
      const djs = await storage.getDjs(filters);
      res.json(djs);
    } catch (error) {
      console.error("Error fetching DJs:", error);
      res.status(500).json({ message: "Failed to fetch DJs" });
    }
  });
  app2.get("/api/djs/:id", async (req, res) => {
    try {
      const dj = await storage.getDjById(req.params.id);
      if (!dj) {
        return res.status(404).json({ error: "DJ not found" });
      }
      res.json(dj);
    } catch (error) {
      console.error("Error fetching DJ:", error);
      res.status(500).json({ message: "Failed to fetch DJ" });
    }
  });
  app2.get("/api/djs/:id/mixes", async (req, res) => {
    try {
      const djId = req.params.id;
      res.json([]);
    } catch (error) {
      console.error("Error fetching DJ mixes:", error);
      res.status(500).json({ message: "Failed to fetch DJ mixes" });
    }
  });
  app2.post("/api/auth/update-dj-profile", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const djData = req.body;
      const updatedUser = await storage.updateUserDjProfile(userId, djData);
      res.json(updatedUser);
    } catch (error) {
      console.error("Error updating DJ profile:", error);
      res.status(500).json({ message: "Failed to update DJ profile" });
    }
  });
  app2.post("/api/like", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const { likedId } = req.body;
      const like = await storage.likeUser({
        likerId: userId,
        likedId
      });
      const match = await storage.checkMatch(userId, likedId);
      res.json({ like, match });
    } catch (error) {
      console.error("Error liking user:", error);
      res.status(500).json({ message: "Failed to like user" });
    }
  });
  app2.get("/api/vibe-compatibility/:userId", isAuthenticated, async (req, res) => {
    try {
      const currentUserId = req.user.claims.sub;
      const targetUserId = req.params.userId;
      const currentUser = await storage.getUser(currentUserId);
      const targetUser = await storage.getUser(targetUserId);
      if (!currentUser || !targetUser) {
        return res.status(404).json({ message: "User not found" });
      }
      const { calculateVibeCompatibility: calculateVibeCompatibility2 } = await Promise.resolve().then(() => (init_aiService(), aiService_exports));
      const compatibility = await calculateVibeCompatibility2(currentUser, targetUser);
      res.json(compatibility);
    } catch (error) {
      console.error("Error calculating vibe compatibility:", error);
      res.status(500).json({ message: "Failed to calculate vibe compatibility" });
    }
  });
  app2.get("/api/events", async (req, res) => {
    try {
      const events2 = await storage.getEvents();
      res.json(events2);
    } catch (error) {
      console.error("Error fetching events:", error);
      res.status(500).json({ message: "Failed to fetch events" });
    }
  });
  app2.post("/api/events", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const eventData = insertEventSchema.parse(req.body);
      const event = await storage.createEvent({
        ...eventData,
        organizerId: userId
      });
      res.json(event);
    } catch (error) {
      console.error("Error creating event:", error);
      res.status(500).json({ message: "Failed to create event" });
    }
  });
  app2.post("/api/events/:id/attend", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const eventId = parseInt(req.params.id);
      const { status } = req.body;
      const attendee = await storage.attendEvent({
        eventId,
        userId,
        status: status || "interested"
      });
      res.json(attendee);
    } catch (error) {
      console.error("Error attending event:", error);
      res.status(500).json({ message: "Failed to attend event" });
    }
  });
  app2.get("/api/matches", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const matches2 = await storage.getUserMatches(userId);
      res.json(matches2);
    } catch (error) {
      console.error("Error fetching matches:", error);
      res.status(500).json({ message: "Failed to fetch matches" });
    }
  });
  app2.get("/api/matches/:id/messages", isAuthenticated, async (req, res) => {
    try {
      const matchId = parseInt(req.params.id);
      const messages2 = await storage.getMatchMessages(matchId);
      res.json(messages2);
    } catch (error) {
      console.error("Error fetching messages:", error);
      res.status(500).json({ message: "Failed to fetch messages" });
    }
  });
  app2.post("/api/matches/:id/messages", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const matchId = parseInt(req.params.id);
      const { content } = req.body;
      const message = await storage.sendMessage({
        matchId,
        senderId: userId,
        content
      });
      res.json(message);
    } catch (error) {
      console.error("Error sending message:", error);
      res.status(500).json({ message: "Failed to send message" });
    }
  });
  app2.get("/api/dashboard/stats", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const stats = await storage.getUserStats(userId);
      res.json(stats);
    } catch (error) {
      console.error("Error fetching stats:", error);
      res.status(500).json({ message: "Failed to fetch stats" });
    }
  });
  app2.get("/api/safety/emergency-contacts", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const contacts = await storage.getEmergencyContacts(userId);
      res.json(contacts);
    } catch (error) {
      console.error("Error fetching emergency contacts:", error);
      res.status(500).json({ message: "Failed to fetch emergency contacts" });
    }
  });
  app2.post("/api/safety/emergency-contacts", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      console.log("Creating emergency contact for user:", userId);
      console.log("Request body:", req.body);
      const contactData = { ...req.body, userId };
      console.log("Contact data to be saved:", contactData);
      const contact = await storage.createEmergencyContact(contactData);
      console.log("Emergency contact created successfully:", contact);
      res.json(contact);
    } catch (error) {
      console.error("Error creating emergency contact:", error);
      console.error("Error details:", error.message, error.stack);
      res.status(500).json({ message: "Failed to create emergency contact", error: error.message });
    }
  });
  app2.put("/api/safety/emergency-contacts/:id", isAuthenticated, async (req, res) => {
    try {
      const { id } = req.params;
      const contact = await storage.updateEmergencyContact(parseInt(id), req.body);
      res.json(contact);
    } catch (error) {
      console.error("Error updating emergency contact:", error);
      res.status(500).json({ message: "Failed to update emergency contact" });
    }
  });
  app2.delete("/api/safety/emergency-contacts/:id", isAuthenticated, async (req, res) => {
    try {
      const { id } = req.params;
      await storage.deleteEmergencyContact(parseInt(id));
      res.json({ message: "Emergency contact deleted successfully" });
    } catch (error) {
      console.error("Error deleting emergency contact:", error);
      res.status(500).json({ message: "Failed to delete emergency contact" });
    }
  });
  app2.post("/api/safety/check-in", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const checkInData = { ...req.body, userId };
      const checkIn = await storage.createSafetyCheckIn(checkInData);
      res.json(checkIn);
    } catch (error) {
      console.error("Error creating safety check-in:", error);
      res.status(500).json({ message: "Failed to create safety check-in" });
    }
  });
  app2.get("/api/safety/check-ins", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const checkIns = await storage.getUserSafetyCheckIns(userId);
      res.json(checkIns);
    } catch (error) {
      console.error("Error fetching safety check-ins:", error);
      res.status(500).json({ message: "Failed to fetch safety check-ins" });
    }
  });
  app2.post("/api/safety/rave-buddy", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      console.log("Creating rave buddy request for user:", userId);
      console.log("Request body:", req.body);
      const buddyData = { ...req.body, requesterId: userId };
      console.log("Buddy data to be saved:", buddyData);
      const buddy = await storage.createRaveBuddy(buddyData);
      console.log("Rave buddy request created successfully:", buddy);
      res.json(buddy);
    } catch (error) {
      console.error("Error creating rave buddy request:", error);
      console.error("Error details:", error.message, error.stack);
      res.status(500).json({ message: "Failed to create rave buddy request", error: error.message });
    }
  });
  app2.get("/api/safety/rave-buddies", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const buddies = await storage.getRaveBuddyRequests(userId);
      res.json(buddies);
    } catch (error) {
      console.error("Error fetching rave buddy requests:", error);
      res.status(500).json({ message: "Failed to fetch rave buddy requests" });
    }
  });
  app2.put("/api/safety/rave-buddy/:id", isAuthenticated, async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      const buddy = await storage.updateRaveBuddy(parseInt(id), status);
      res.json(buddy);
    } catch (error) {
      console.error("Error updating rave buddy:", error);
      res.status(500).json({ message: "Failed to update rave buddy" });
    }
  });
  app2.get("/api/events/:eventId/rave-buddies", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const eventId = parseInt(req.params.eventId);
      const availableBuddies = await storage.getEventRaveBuddies(eventId, userId);
      res.json(availableBuddies);
    } catch (error) {
      console.error("Error fetching event rave buddies:", error);
      res.status(500).json({ message: "Failed to fetch event rave buddies" });
    }
  });
  app2.post("/api/verification/create", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const verificationData = { ...req.body, userId };
      const verification = await storage.createUserVerification(verificationData);
      res.json(verification);
    } catch (error) {
      console.error("Error creating verification:", error);
      res.status(500).json({ message: "Failed to create verification" });
    }
  });
  app2.get("/api/verification/user/:userId", isAuthenticated, async (req, res) => {
    try {
      const { userId } = req.params;
      const verifications = await storage.getUserVerifications(userId);
      res.json(verifications);
    } catch (error) {
      console.error("Error fetching user verifications:", error);
      res.status(500).json({ message: "Failed to fetch verifications" });
    }
  });
  app2.put("/api/verification/:id/status", isAuthenticated, async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      const verification = await storage.updateVerificationStatus(parseInt(id), status);
      res.json(verification);
    } catch (error) {
      console.error("Error updating verification status:", error);
      res.status(500).json({ message: "Failed to update verification status" });
    }
  });
  app2.post("/api/vouching/create", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const vouchData = { ...req.body, voucherId: userId };
      const vouch = await storage.createUserVouch(vouchData);
      res.json(vouch);
    } catch (error) {
      console.error("Error creating vouch:", error);
      res.status(500).json({ message: "Failed to create vouch" });
    }
  });
  app2.get("/api/vouching/user/:userId", isAuthenticated, async (req, res) => {
    try {
      const { userId } = req.params;
      const vouches = await storage.getUserVouches(userId);
      res.json(vouches);
    } catch (error) {
      console.error("Error fetching user vouches:", error);
      res.status(500).json({ message: "Failed to fetch vouches" });
    }
  });
  app2.get("/api/vouching/trust-score/:userId", isAuthenticated, async (req, res) => {
    try {
      const { userId } = req.params;
      const trustScore = await storage.getTrustScore(userId);
      res.json(trustScore || { trustScore: 0, verificationScore: 0, vouchingScore: 0, behaviorScore: 100 });
    } catch (error) {
      console.error("Error fetching trust score:", error);
      res.status(500).json({ message: "Failed to fetch trust score" });
    }
  });
  app2.post("/api/vouching/calculate/:userId", isAuthenticated, async (req, res) => {
    try {
      const { userId } = req.params;
      await storage.calculateTrustScore(userId);
      const trustScore = await storage.getTrustScore(userId);
      res.json(trustScore);
    } catch (error) {
      console.error("Error calculating trust score:", error);
      res.status(500).json({ message: "Failed to calculate trust score" });
    }
  });
  app2.post("/api/buddy-requests/create", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const requestData = { ...req.body, requesterId: userId };
      const request = await storage.createBuddyRequest(requestData);
      res.json(request);
    } catch (error) {
      console.error("Error creating buddy request:", error);
      res.status(500).json({ message: "Failed to create buddy request" });
    }
  });
  app2.get("/api/buddy-requests", isAuthenticated, async (req, res) => {
    try {
      const { eventId, userId, requestType } = req.query;
      const filters = {
        eventId: eventId ? parseInt(eventId) : void 0,
        userId,
        requestType
      };
      const requests = await storage.getBuddyRequests(filters);
      res.json(requests);
    } catch (error) {
      console.error("Error fetching buddy requests:", error);
      res.status(500).json({ message: "Failed to fetch buddy requests" });
    }
  });
  app2.get("/api/buddy-requests/:id", isAuthenticated, async (req, res) => {
    try {
      const { id } = req.params;
      const request = await storage.getBuddyRequest(parseInt(id));
      res.json(request);
    } catch (error) {
      console.error("Error fetching buddy request:", error);
      res.status(500).json({ message: "Failed to fetch buddy request" });
    }
  });
  app2.put("/api/buddy-requests/:id", isAuthenticated, async (req, res) => {
    try {
      const { id } = req.params;
      const request = await storage.updateBuddyRequest(parseInt(id), req.body);
      res.json(request);
    } catch (error) {
      console.error("Error updating buddy request:", error);
      res.status(500).json({ message: "Failed to update buddy request" });
    }
  });
  app2.delete("/api/buddy-requests/:id", isAuthenticated, async (req, res) => {
    try {
      const { id } = req.params;
      const userId = req.user.claims.sub;
      await storage.deleteBuddyRequest(parseInt(id), userId);
      res.json({ message: "Buddy request deleted successfully" });
    } catch (error) {
      console.error("Error deleting buddy request:", error);
      res.status(500).json({ message: "Failed to delete buddy request" });
    }
  });
  app2.post("/api/buddy-responses/create", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const responseData = { ...req.body, responderId: userId };
      const response = await storage.createBuddyResponse(responseData);
      res.json(response);
    } catch (error) {
      console.error("Error creating buddy response:", error);
      res.status(500).json({ message: "Failed to create buddy response" });
    }
  });
  app2.get("/api/buddy-responses/:requestId", isAuthenticated, async (req, res) => {
    try {
      const { requestId } = req.params;
      const responses = await storage.getBuddyResponses(parseInt(requestId));
      res.json(responses);
    } catch (error) {
      console.error("Error fetching buddy responses:", error);
      res.status(500).json({ message: "Failed to fetch buddy responses" });
    }
  });
  app2.put("/api/buddy-responses/:id", isAuthenticated, async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      const response = await storage.updateBuddyResponse(parseInt(id), status);
      res.json(response);
    } catch (error) {
      console.error("Error updating buddy response:", error);
      res.status(500).json({ message: "Failed to update buddy response" });
    }
  });
  app2.post("/api/buddy-responses/:id/rate", isAuthenticated, async (req, res) => {
    try {
      const { id } = req.params;
      const { rating, feedback } = req.body;
      const response = await storage.rateBuddyExperience(parseInt(id), rating, feedback);
      res.json(response);
    } catch (error) {
      console.error("Error rating buddy experience:", error);
      res.status(500).json({ message: "Failed to rate buddy experience" });
    }
  });
  app2.post("/api/safety-groups/create", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const groupData = { ...req.body, leaderId: userId };
      const group = await storage.createSafetyGroup(groupData);
      res.json(group);
    } catch (error) {
      console.error("Error creating safety group:", error);
      res.status(500).json({ message: "Failed to create safety group" });
    }
  });
  app2.get("/api/safety-groups", isAuthenticated, async (req, res) => {
    try {
      const { eventId } = req.query;
      const groups = await storage.getSafetyGroups(eventId ? parseInt(eventId) : void 0);
      res.json(groups);
    } catch (error) {
      console.error("Error fetching safety groups:", error);
      res.status(500).json({ message: "Failed to fetch safety groups" });
    }
  });
  app2.post("/api/safety-groups/:id/join", isAuthenticated, async (req, res) => {
    try {
      const { id } = req.params;
      const userId = req.user.claims.sub;
      const membership = await storage.joinSafetyGroup(parseInt(id), userId);
      res.json(membership);
    } catch (error) {
      console.error("Error joining safety group:", error);
      res.status(500).json({ message: "Failed to join safety group" });
    }
  });
  app2.post("/api/safety-groups/:id/leave", isAuthenticated, async (req, res) => {
    try {
      const { id } = req.params;
      const userId = req.user.claims.sub;
      await storage.leaveSafetyGroup(parseInt(id), userId);
      res.json({ message: "Left safety group successfully" });
    } catch (error) {
      console.error("Error leaving safety group:", error);
      res.status(500).json({ message: "Failed to leave safety group" });
    }
  });
  app2.post("/api/safety-groups/:id/check-in", isAuthenticated, async (req, res) => {
    try {
      const { id } = req.params;
      const userId = req.user.claims.sub;
      const checkIn = await storage.updateGroupCheckIn(parseInt(id), userId);
      res.json(checkIn);
    } catch (error) {
      console.error("Error updating group check-in:", error);
      res.status(500).json({ message: "Failed to update group check-in" });
    }
  });
  app2.get("/api/safety-groups/:id/members", isAuthenticated, async (req, res) => {
    try {
      const { id } = req.params;
      const members = await storage.getGroupMembers(parseInt(id));
      res.json(members);
    } catch (error) {
      console.error("Error fetching group members:", error);
      res.status(500).json({ message: "Failed to fetch group members" });
    }
  });
  app2.get("/api/events/:eventId/buddy-requests", isAuthenticated, async (req, res) => {
    try {
      const { eventId } = req.params;
      const { requestType, ageRange } = req.query;
      const filters = {
        requestType,
        ageRange
      };
      const requests = await storage.getEventBuddyRequests(parseInt(eventId), filters);
      res.json(requests);
    } catch (error) {
      console.error("Error fetching event buddy requests:", error);
      res.status(500).json({ message: "Failed to fetch event buddy requests" });
    }
  });
  app2.get("/api/events/:eventId/compatible-buddies", isAuthenticated, async (req, res) => {
    try {
      const { eventId } = req.params;
      const userId = req.user.claims.sub;
      const buddies = await storage.getCompatibleBuddies(userId, parseInt(eventId));
      res.json(buddies);
    } catch (error) {
      console.error("Error fetching compatible buddies:", error);
      res.status(500).json({ message: "Failed to fetch compatible buddies" });
    }
  });
  app2.post("/api/buddy-requests/search", isAuthenticated, async (req, res) => {
    try {
      const filters = req.body;
      const requests = await storage.searchBuddyRequests(filters);
      res.json(requests);
    } catch (error) {
      console.error("Error searching buddy requests:", error);
      res.status(500).json({ message: "Failed to search buddy requests" });
    }
  });
  app2.post("/api/security/age-verification", isAuthenticated, async (req, res) => {
    try {
      const { AgeVerificationService: AgeVerificationService2 } = await Promise.resolve().then(() => (init_securityService(), securityService_exports));
      const userId = req.user.claims.sub;
      const result = await AgeVerificationService2.initiateVerification({
        userId,
        ...req.body
      });
      res.json(result);
    } catch (error) {
      console.error("Error in age verification:", error);
      res.status(500).json({ message: "Age verification failed" });
    }
  });
  app2.post("/api/security/predator-detection", isAuthenticated, async (req, res) => {
    try {
      const { PredatorDetectionService: PredatorDetectionService2 } = await Promise.resolve().then(() => (init_securityService(), securityService_exports));
      const userId = req.user.claims.sub;
      const result = await PredatorDetectionService2.analyzeUser({
        userId,
        ...req.body
      });
      res.json(result);
    } catch (error) {
      console.error("Error in predator detection:", error);
      res.status(500).json({ message: "Predator detection failed" });
    }
  });
  app2.post("/api/security/content-moderation", isAuthenticated, async (req, res) => {
    try {
      const { ContentModerationService: ContentModerationService2 } = await Promise.resolve().then(() => (init_securityService(), securityService_exports));
      const userId = req.user.claims.sub;
      const result = await ContentModerationService2.moderateContent({
        userId,
        ...req.body
      });
      res.json(result);
    } catch (error) {
      console.error("Error in content moderation:", error);
      res.status(500).json({ message: "Content moderation failed" });
    }
  });
  app2.post("/api/security/device-fingerprint", isAuthenticated, async (req, res) => {
    try {
      const { DeviceFingerprintingService: DeviceFingerprintingService2 } = await Promise.resolve().then(() => (init_securityService(), securityService_exports));
      const userId = req.user.claims.sub;
      const ipAddress = req.ip || req.connection.remoteAddress;
      await DeviceFingerprintingService2.recordDeviceFingerprint(userId, req.body, ipAddress);
      res.json({ success: true });
    } catch (error) {
      console.error("Error in device fingerprinting:", error);
      res.status(500).json({ message: "Device fingerprinting failed" });
    }
  });
  app2.post("/api/security/emergency-incident", isAuthenticated, async (req, res) => {
    try {
      const { EmergencyResponseService: EmergencyResponseService2 } = await Promise.resolve().then(() => (init_securityService(), securityService_exports));
      const reportingUserId = req.user.claims.sub;
      const { reportedUserId, incidentType, description, evidenceData } = req.body;
      await EmergencyResponseService2.reportIncident(
        reportedUserId,
        reportingUserId,
        incidentType,
        description,
        evidenceData
      );
      res.json({ success: true });
    } catch (error) {
      console.error("Error reporting emergency incident:", error);
      res.status(500).json({ message: "Failed to report incident" });
    }
  });
  app2.get("/api/security/dashboard", isAuthenticated, async (req, res) => {
    try {
      const dashboardData = {
        totalUsers: await storage.getUserCount(),
        verifiedUsers: await storage.getVerifiedUserCount(),
        suspendedUsers: await storage.getSuspendedUserCount(),
        criticalIncidents: await storage.getCriticalIncidentCount(),
        recentIncidents: await storage.getRecentIncidents(10),
        riskAnalysis: await storage.getRiskAnalysis(),
        moderationStats: await storage.getModerationStats()
      };
      res.json(dashboardData);
    } catch (error) {
      console.error("Error fetching security dashboard:", error);
      res.status(500).json({ message: "Failed to fetch security dashboard" });
    }
  });
  app2.post("/api/safety/report", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const reportData = req.body.isAnonymous ? req.body : { ...req.body, reporterId: userId };
      const report = await storage.createSafetyReport(reportData);
      res.json({ message: "Safety report submitted successfully", reportId: report.id });
    } catch (error) {
      console.error("Error creating safety report:", error);
      res.status(500).json({ message: "Failed to submit safety report" });
    }
  });
  app2.post("/api/safety/venue-rating", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const ratingData = { ...req.body, userId };
      const rating = await storage.createVenueRating(ratingData);
      res.json(rating);
    } catch (error) {
      console.error("Error creating venue rating:", error);
      res.status(500).json({ message: "Failed to create venue rating" });
    }
  });
  app2.get("/api/safety/venue-ratings/:venueName", async (req, res) => {
    try {
      const { venueName } = req.params;
      const ratings = await storage.getVenueRatings(decodeURIComponent(venueName));
      res.json(ratings);
    } catch (error) {
      console.error("Error fetching venue ratings:", error);
      res.status(500).json({ message: "Failed to fetch venue ratings" });
    }
  });
  app2.get("/api/safety/harm-reduction", async (req, res) => {
    try {
      const { type } = req.query;
      const resources = await storage.getHarmReductionResources(type);
      res.json(resources);
    } catch (error) {
      console.error("Error fetching harm reduction resources:", error);
      res.status(500).json({ message: "Failed to fetch harm reduction resources" });
    }
  });
  app2.post("/api/safety/harm-reduction/seed", async (req, res) => {
    try {
      const existingResources = await storage.getHarmReductionResources();
      if (existingResources.length === 0) {
        const defaultResources = [
          {
            title: "DanceSafe",
            description: "Drug checking services and harm reduction education for electronic music events",
            resourceType: "website",
            url: "https://dancesafe.org",
            isVerified: true
          },
          {
            title: "The Loop",
            description: "Multi-reagent drug checking service providing real-time drug alerts",
            resourceType: "website",
            url: "https://wearetheloop.org",
            isVerified: true
          },
          {
            title: "Regent Testing Kits",
            description: "At-home drug testing kits for substance identification",
            resourceType: "testing_kit",
            url: "https://testkitplus.com",
            isVerified: true
          },
          {
            title: "Erowid",
            description: "Comprehensive drug information database with experience reports and safety data",
            resourceType: "website",
            url: "https://erowid.org",
            isVerified: true
          },
          {
            title: "SAMHSA National Helpline",
            description: "24/7 treatment referral and information service",
            resourceType: "hotline",
            phoneNumber: "1-800-662-4357",
            isVerified: true
          },
          {
            title: "Crisis Text Line",
            description: "24/7 crisis support via text message",
            resourceType: "hotline",
            phoneNumber: "Text HOME to 741741",
            isVerified: true
          },
          {
            title: "Rollsafe.org",
            description: "MDMA harm reduction guide with supplementation and safety information",
            resourceType: "website",
            url: "https://rollsafe.org",
            isVerified: true
          },
          {
            title: "TripSit",
            description: "Online harm reduction community with chat support and drug information",
            resourceType: "website",
            url: "https://tripsit.me",
            isVerified: true
          },
          {
            title: "Harm Reduction Guide",
            description: "Comprehensive guides for safer drug use practices",
            resourceType: "website",
            url: "https://harmreduction.org",
            isVerified: true
          },
          {
            title: "PsychonautWiki",
            description: "Scientific wiki documenting psychoactive substances and their effects",
            resourceType: "website",
            url: "https://psychonautwiki.org",
            isVerified: true
          }
        ];
        for (const resource of defaultResources) {
          await storage.createHarmReductionResource(resource);
        }
        res.json({ message: "Harm reduction resources seeded successfully", count: defaultResources.length });
      } else {
        res.json({ message: "Resources already exist", count: existingResources.length });
      }
    } catch (error) {
      console.error("Error seeding harm reduction resources:", error);
      res.status(500).json({ message: "Failed to seed resources" });
    }
  });
  app2.post("/api/test/outfit-recommendations/:eventId", async (req, res) => {
    try {
      const eventId = parseInt(req.params.eventId);
      const userId = "test-user-123";
      const event = await storage.getEvent(eventId);
      if (!event) {
        return res.status(404).json({ message: "Event not found" });
      }
      const user = await storage.getUser(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      const marketplaceItems2 = await storage.getMarketplaceItems();
      const recommendations = await generateOutfitRecommendations(event, user, marketplaceItems2);
      res.json(recommendations);
    } catch (error) {
      console.error("Error generating outfit recommendations:", error);
      res.status(500).json({ message: "Failed to generate recommendations", error: error instanceof Error ? error.message : String(error) });
    }
  });
  app2.post("/api/events/:eventId/outfit-recommendations", isAuthenticated, async (req, res) => {
    try {
      const eventId = parseInt(req.params.eventId);
      const userId = req.user.claims.sub;
      const event = await storage.getEvent(eventId);
      if (!event) {
        return res.status(404).json({ message: "Event not found" });
      }
      const user = await storage.getUser(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      const marketplaceItems2 = await storage.getMarketplaceItems();
      const existingRecommendation = await storage.getEventOutfitRecommendations(eventId, userId);
      if (existingRecommendation) {
        return res.json(existingRecommendation.recommendationData);
      }
      const recommendations = await generateOutfitRecommendations(event, user, marketplaceItems2);
      await storage.saveOutfitRecommendation({
        userId,
        eventId,
        recommendationData: recommendations
      });
      res.json(recommendations);
    } catch (error) {
      console.error("Error generating outfit recommendations:", error);
      res.status(500).json({ message: "Failed to generate recommendations" });
    }
  });
  app2.get("/api/outfit-recommendations", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const recommendations = await storage.getUserOutfitRecommendations(userId);
      res.json(recommendations);
    } catch (error) {
      console.error("Error fetching outfit recommendations:", error);
      res.status(500).json({ message: "Failed to fetch recommendations" });
    }
  });
  app2.get("/api/edmtrain-proxy", async (req, res) => {
    try {
      const { endpoint, params } = req.query;
      const queryParams = JSON.parse(params);
      const baseUrl = "https://edmtrain.com/api";
      const apiKey = process.env.EDMTRAIN_API_KEY;
      if (!apiKey) {
        return res.status(500).json({
          error: "Edmtrain API key not configured",
          details: "Please set EDMTRAIN_API_KEY environment variable"
        });
      }
      const apiUrl = `${baseUrl}${endpoint}`;
      const url = new URL(apiUrl);
      url.searchParams.append("client", apiKey);
      Object.entries(queryParams).forEach(([key, value]) => {
        if (value !== void 0 && value !== null && key !== "client") {
          url.searchParams.append(key, String(value));
        }
      });
      console.log("Edmtrain API request URL:", url.toString());
      const response = await fetch(url.toString(), {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "User-Agent": "Electronic Music Community Platform"
        }
      });
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Edmtrain API error response:", response.status, errorText);
        throw new Error(`Edmtrain API error: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      console.log("Edmtrain API success - received events:", data.data?.length || 0);
      res.json(data);
    } catch (error) {
      console.error("Edmtrain proxy error:", error);
      res.status(500).json({ error: "Failed to fetch Edmtrain data", details: error.message });
    }
  });
  app2.post("/api/user/event-interests", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const { eventId, interested, source } = req.body;
      console.log(`User ${userId} expressed interest in ${source} event ${eventId}: ${interested}`);
      res.json({
        success: true,
        message: "Event interest recorded",
        eventId,
        interested,
        source
      });
    } catch (error) {
      console.error("Error recording event interest:", error);
      res.status(500).json({ message: "Failed to record event interest" });
    }
  });
  app2.get("/api/marketplace/items", async (req, res) => {
    try {
      const { category, condition, minPrice, maxPrice, location } = req.query;
      const filters = {};
      if (category) filters.category = category;
      if (condition) filters.condition = condition;
      if (location) filters.location = location;
      if (minPrice || maxPrice) {
        filters.priceRange = {
          min: minPrice ? parseFloat(minPrice) : 0,
          max: maxPrice ? parseFloat(maxPrice) : 99999
        };
      }
      const items = await storage.getMarketplaceItems(filters);
      res.json(items);
    } catch (error) {
      console.error("Error fetching marketplace items:", error);
      res.status(500).json({ message: "Failed to fetch marketplace items" });
    }
  });
  app2.post("/api/marketplace/items", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const itemData = { ...req.body, sellerId: userId };
      const newItem = await storage.createMarketplaceItem(itemData);
      res.json(newItem);
    } catch (error) {
      console.error("Error creating marketplace item:", error);
      res.status(500).json({ message: "Failed to create marketplace item" });
    }
  });
  app2.get("/api/marketplace/items/:id", async (req, res) => {
    try {
      const itemId = parseInt(req.params.id);
      const item = await storage.getMarketplaceItem(itemId);
      if (!item) {
        return res.status(404).json({ message: "Item not found" });
      }
      res.json(item);
    } catch (error) {
      console.error("Error fetching marketplace item:", error);
      res.status(500).json({ message: "Failed to fetch marketplace item" });
    }
  });
  app2.post("/api/marketplace/favorites", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const { itemId } = req.body;
      const favorite = await storage.addToFavorites({ userId, itemId });
      res.json(favorite);
    } catch (error) {
      console.error("Error adding to favorites:", error);
      res.status(500).json({ message: "Failed to add to favorites" });
    }
  });
  app2.delete("/api/marketplace/favorites/:itemId", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const itemId = parseInt(req.params.itemId);
      await storage.removeFromFavorites(userId, itemId);
      res.json({ message: "Removed from favorites" });
    } catch (error) {
      console.error("Error removing from favorites:", error);
      res.status(500).json({ message: "Failed to remove from favorites" });
    }
  });
  app2.get("/api/marketplace/favorites", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const favorites = await storage.getUserFavorites(userId);
      res.json(favorites);
    } catch (error) {
      console.error("Error fetching favorites:", error);
      res.status(500).json({ message: "Failed to fetch favorites" });
    }
  });
  app2.get("/api/marketplace/items/:itemId/messages", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const itemId = parseInt(req.params.itemId);
      const messages2 = await storage.getMarketplaceMessages(itemId, userId);
      res.json(messages2);
    } catch (error) {
      console.error("Error fetching marketplace messages:", error);
      res.status(500).json({ message: "Failed to fetch messages" });
    }
  });
  app2.post("/api/marketplace/items/:itemId/messages", isAuthenticated, async (req, res) => {
    try {
      const senderId = req.user.claims.sub;
      const itemId = parseInt(req.params.itemId);
      const { message, receiverId } = req.body;
      if (!message || !receiverId) {
        return res.status(400).json({ message: "Message and receiverId are required" });
      }
      const newMessage = await storage.sendMarketplaceMessage({
        itemId,
        senderId,
        receiverId,
        message
      });
      res.json(newMessage);
    } catch (error) {
      console.error("Error sending marketplace message:", error);
      res.status(500).json({ message: "Failed to send message" });
    }
  });
  app2.get("/api/users/:userId/event-photos", isAuthenticated, async (req, res) => {
    try {
      const requestingUserId = req.user.claims.sub;
      const targetUserId = req.params.userId;
      if (requestingUserId !== targetUserId) {
        return res.status(403).json({ message: "Access denied" });
      }
      const userPhotos = [
        {
          id: 1,
          eventId: 1,
          eventTitle: "Sample Event",
          photoUrl: "/uploads/event-photos/sample1.jpg",
          caption: "Amazing night at the festival!",
          uploadedAt: (/* @__PURE__ */ new Date()).toISOString(),
          isApproved: true
        }
      ];
      res.json({ photos: userPhotos });
    } catch (error) {
      console.error("Error fetching user event photos:", error);
      res.status(500).json({ message: "Failed to fetch event photos" });
    }
  });
  app2.post("/api/events/:id/photos", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const eventId = parseInt(req.params.id);
      const { photoData, fileName, caption } = req.body;
      if (!photoData) {
        return res.status(400).json({ message: "Photo data is required" });
      }
      const fs2 = __require("fs");
      const path4 = __require("path");
      const uploadsDir = path4.join(process.cwd(), "uploads", "event-photos");
      if (!fs2.existsSync(uploadsDir)) {
        fs2.mkdirSync(uploadsDir, { recursive: true });
      }
      const timestamp2 = Date.now();
      const fileExtension = fileName ? path4.extname(fileName) : ".jpg";
      const uniqueFileName = `event-${eventId}-${userId}-${timestamp2}${fileExtension}`;
      const filePath = path4.join(uploadsDir, uniqueFileName);
      const base64Data = photoData.replace(/^data:image\/[a-z]+;base64,/, "");
      fs2.writeFileSync(filePath, base64Data, "base64");
      const photoUrl = `/uploads/event-photos/${uniqueFileName}`;
      const photo = {
        eventId,
        userId,
        photoUrl,
        // Store file path instead of base64
        caption: caption || null,
        fileName: fileName || null,
        isApproved: true,
        uploadedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      console.log(`Photo saved: ${filePath}`);
      res.json({ success: true, message: "Photo uploaded and saved successfully", photo });
    } catch (error) {
      console.error("Error uploading event photo:", error);
      res.status(500).json({ message: "Failed to upload photo to event" });
    }
  });
  app2.get("/api/events/:id/photos", async (req, res) => {
    try {
      const eventId = parseInt(req.params.id);
      res.json([]);
    } catch (error) {
      console.error("Error fetching event photos:", error);
      res.status(500).json({ message: "Failed to fetch event photos" });
    }
  });
  app2.get("/api/events/:eventId/outfit-recommendations", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const eventId = parseInt(req.params.eventId);
      let event = await storage.getEvent(eventId);
      if (!event) {
        try {
          const response = await fetch("https://edmtrain.com/api/events?client=7188af07-3cba-4a9c-8ff0-7ad59d4605f0&locationIds=85,26,87,6,11&startDate=2025-01-01&endDate=2025-12-31");
          if (response.ok) {
            const edmTrainData = await response.json();
            const edmEvent = edmTrainData.data?.find((e) => e.id === eventId);
            if (edmEvent) {
              const venue = edmEvent.venue || {};
              event = {
                id: edmEvent.id,
                title: edmEvent.name || "Electronic Music Event",
                location: venue.location || `${venue.name || "TBD"}`,
                date: new Date(edmEvent.date || Date.now()),
                description: `Electronic music event at ${venue.name || "venue TBD"}`,
                address: venue.address || null,
                ticketPrice: edmEvent.ticketPrice || null,
                genres: ["Electronic Music", "Dance", "EDM"],
                imageUrl: edmEvent.imageUrl || null,
                externalUrl: edmEvent.link || null,
                organizerId: null,
                createdAt: null
              };
            }
          }
        } catch (error) {
          console.error("Error fetching from Edmtrain API:", error);
        }
      }
      if (!event) {
        return res.status(404).json({ message: "Event not found" });
      }
      const user = await storage.getUser(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      const marketplaceItems2 = await storage.getMarketplaceItems({
        category: "clothing"
      });
      const { generateOutfitRecommendations: generateOutfitRecommendations2 } = await Promise.resolve().then(() => (init_aiService(), aiService_exports));
      const recommendations = await generateOutfitRecommendations2(event, user, marketplaceItems2);
      if (typeof event.id === "number" && event.organizerId !== null) {
        try {
          await storage.saveOutfitRecommendation({
            userId,
            eventId,
            recommendationData: JSON.stringify(recommendations)
          });
        } catch (error) {
          console.log("Note: Could not save recommendation for external event");
        }
      }
      res.json(recommendations);
    } catch (error) {
      console.error("Error generating outfit recommendations:", error);
      res.status(500).json({ message: "Failed to generate recommendations" });
    }
  });
  app2.get("/api/outfits/quick/:festivalName", isAuthenticated, async (req, res) => {
    try {
      const { festivalName } = req.params;
      const result = await Promise.resolve().then(() => (init_aiService(), aiService_exports)).then(
        (module) => module.getOutfitRecommendations(festivalName, "", "", "", true)
      );
      res.json(result);
    } catch (error) {
      console.error("Error getting quick outfits:", error);
      res.status(500).json({ message: "Failed to get quick suggestions" });
    }
  });
  app2.post("/api/outfits/generate", isAuthenticated, async (req, res) => {
    try {
      const { festivalName, festivalDescription, userPreferences, availableItems } = req.body;
      const { getOutfitRecommendations: getOutfitRecommendations2 } = await Promise.resolve().then(() => (init_aiService(), aiService_exports));
      const result = await getOutfitRecommendations2(
        festivalName,
        festivalDescription,
        userPreferences,
        availableItems,
        false
        // full AI mode
      );
      res.json(result);
    } catch (error) {
      console.error("Error generating AI outfits:", error);
      res.status(500).json({ message: "Failed to generate AI recommendations" });
    }
  });
  app2.post("/api/outfits/progressive", isAuthenticated, async (req, res) => {
    try {
      const festivalData = req.body;
      const { getOutfitsWithProgressiveLoading: getOutfitsWithProgressiveLoading2 } = await Promise.resolve().then(() => (init_aiService(), aiService_exports));
      const result = await getOutfitsWithProgressiveLoading2(festivalData);
      res.json(result);
    } catch (error) {
      console.error("Error with progressive loading:", error);
      res.status(500).json({ message: "Failed to load outfit recommendations" });
    }
  });
  app2.get("/api/dj/profile", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const profile = await storage.getDjProfile(userId);
      res.json(profile);
    } catch (error) {
      console.error("Error fetching DJ profile:", error);
      res.status(500).json({ message: "Failed to fetch DJ profile" });
    }
  });
  app2.post("/api/dj/profile", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const profileData = { ...req.body, userId };
      const profile = await storage.createDjProfile(profileData);
      res.json(profile);
    } catch (error) {
      console.error("Error creating DJ profile:", error);
      res.status(500).json({ message: "Failed to create DJ profile" });
    }
  });
  app2.put("/api/dj/profile", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const profile = await storage.updateDjProfile(userId, req.body);
      res.json(profile);
    } catch (error) {
      console.error("Error updating DJ profile:", error);
      res.status(500).json({ message: "Failed to update DJ profile" });
    }
  });
  app2.get("/api/dj/profiles", isAuthenticated, async (req, res) => {
    try {
      const { genre, experience, availableForBookings } = req.query;
      const profiles = await storage.getAllDjProfiles({
        genre,
        experience,
        availableForBookings: availableForBookings === "true"
      });
      res.json(profiles);
    } catch (error) {
      console.error("Error fetching DJ profiles:", error);
      res.status(500).json({ message: "Failed to fetch DJ profiles" });
    }
  });
  app2.get("/api/dj/mixes", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const djProfile = await storage.getDjProfile(userId);
      if (!djProfile) {
        return res.json([]);
      }
      const mixes = await storage.getDjMixes(djProfile.id);
      res.json(mixes);
    } catch (error) {
      console.error("Error fetching DJ mixes:", error);
      res.status(500).json({ message: "Failed to fetch DJ mixes" });
    }
  });
  app2.post("/api/dj/mixes", isAuthenticated, audioUpload.single("audioFile"), async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const djProfile = await storage.getDjProfile(userId);
      if (!djProfile) {
        return res.status(400).json({ message: "DJ profile required to upload mixes" });
      }
      let mixUrl = void 0;
      if (req.file) {
        mixUrl = `/uploads/audio/${req.file.filename}`;
      }
      let tags = [];
      let tracklist = [];
      if (req.body.tags) {
        try {
          tags = JSON.parse(req.body.tags);
        } catch (e) {
          console.error("Error parsing tags:", e);
        }
      }
      if (req.body.tracklist) {
        try {
          tracklist = JSON.parse(req.body.tracklist);
        } catch (e) {
          console.error("Error parsing tracklist:", e);
        }
      }
      const mixData = {
        djProfileId: djProfile.id,
        title: req.body.title,
        description: req.body.description || void 0,
        genre: req.body.genre,
        duration: req.body.duration ? parseInt(req.body.duration) : void 0,
        bpm: req.body.bpm ? parseInt(req.body.bpm) : void 0,
        key: req.body.key || void 0,
        mixUrl,
        artworkUrl: req.body.artworkUrl || void 0,
        tags,
        tracklist,
        isPublic: req.body.isPublic !== "false",
        recordedAt: req.body.recordedAt || void 0,
        venueType: req.body.venueType || void 0
      };
      const mix = await storage.createDjMix(mixData);
      res.json(mix);
    } catch (error) {
      console.error("Error creating DJ mix:", error);
      res.status(500).json({ message: "Failed to create DJ mix" });
    }
  });
  app2.post("/api/newsfeed/posts", isAuthenticated, async (req, res) => {
    try {
      console.log("Creating post, user object:", req.user);
      if (!req.user || !req.user.claims || !req.user.claims.sub) {
        console.error("User object missing:", req.user);
        return res.status(401).json({ message: "User not authenticated" });
      }
      const userId = req.user.claims.sub;
      const postData = {
        ...req.body,
        userId
      };
      console.log("Creating post with data:", postData);
      const post = await storage.createNewsfeedPost(postData);
      res.json(post);
    } catch (error) {
      console.error("Error creating newsfeed post:", error);
      res.status(500).json({ message: "Failed to create post" });
    }
  });
  app2.get("/api/newsfeed/posts", isAuthenticated, async (req, res) => {
    try {
      const filters = {};
      if (req.query.userId) filters.userId = req.query.userId;
      if (req.query.eventId) filters.eventId = parseInt(req.query.eventId);
      if (req.query.crewId) filters.crewId = parseInt(req.query.crewId);
      if (req.query.postType) filters.postType = req.query.postType;
      if (req.query.visibility) filters.visibility = req.query.visibility;
      if (req.query.limit) filters.limit = parseInt(req.query.limit);
      if (req.query.offset) filters.offset = parseInt(req.query.offset);
      const posts = await storage.getNewsfeedPosts(filters);
      const postsWithDetails = await Promise.all(posts.map(async (post) => {
        const [user, likes, comments, shares] = await Promise.all([
          storage.getUser(post.userId),
          storage.getPostLikes(post.id),
          storage.getPostComments(post.id),
          storage.getPostShares(post.id)
        ]);
        return {
          ...post,
          user,
          likeCount: likes.length,
          commentCount: comments.length,
          shareCount: shares.length,
          isLikedByUser: likes.some((like) => like.userId === req.user.claims.sub)
        };
      }));
      res.json(postsWithDetails);
    } catch (error) {
      console.error("Error fetching newsfeed posts:", error);
      res.status(500).json({ message: "Failed to fetch posts" });
    }
  });
  app2.get("/api/newsfeed/posts/:id", isAuthenticated, async (req, res) => {
    try {
      const postId = parseInt(req.params.id);
      const post = await storage.getNewsfeedPost(postId);
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
      const [user, likes, comments, shares] = await Promise.all([
        storage.getUser(post.userId),
        storage.getPostLikes(post.id),
        storage.getPostComments(post.id),
        storage.getPostShares(post.id)
      ]);
      res.json({
        ...post,
        user,
        likeCount: likes.length,
        commentCount: comments.length,
        shareCount: shares.length,
        isLikedByUser: likes.some((like) => like.userId === req.user.claims.sub)
      });
    } catch (error) {
      console.error("Error fetching newsfeed post:", error);
      res.status(500).json({ message: "Failed to fetch post" });
    }
  });
  app2.post("/api/newsfeed/posts/:id/like", isAuthenticated, async (req, res) => {
    try {
      const postId = parseInt(req.params.id);
      const userId = req.user.claims.sub;
      await storage.likeNewsfeedPost({
        postId,
        userId
      });
      res.json({ success: true });
    } catch (error) {
      console.error("Error liking post:", error);
      res.status(500).json({ message: "Failed to like post" });
    }
  });
  app2.delete("/api/newsfeed/posts/:id/like", isAuthenticated, async (req, res) => {
    try {
      const postId = parseInt(req.params.id);
      const userId = req.user.claims.sub;
      await storage.unlikeNewsfeedPost(userId, postId);
      res.json({ success: true });
    } catch (error) {
      console.error("Error unliking post:", error);
      res.status(500).json({ message: "Failed to unlike post" });
    }
  });
  app2.post("/api/newsfeed/posts/:id/comments", isAuthenticated, async (req, res) => {
    try {
      const postId = parseInt(req.params.id);
      const userId = req.user.claims.sub;
      const comment = await storage.createNewsfeedComment({
        postId,
        userId,
        content: req.body.content,
        parentCommentId: req.body.parentCommentId
      });
      res.json(comment);
    } catch (error) {
      console.error("Error creating comment:", error);
      res.status(500).json({ message: "Failed to create comment" });
    }
  });
  app2.get("/api/newsfeed/posts/:id/comments", isAuthenticated, async (req, res) => {
    try {
      const postId = parseInt(req.params.id);
      const comments = await storage.getPostComments(postId);
      const commentsWithUsers = await Promise.all(comments.map(async (comment) => {
        const user = await storage.getUser(comment.userId);
        return {
          ...comment,
          user
        };
      }));
      res.json(commentsWithUsers);
    } catch (error) {
      console.error("Error fetching comments:", error);
      res.status(500).json({ message: "Failed to fetch comments" });
    }
  });
  app2.post("/api/newsfeed/posts/:id/share", isAuthenticated, async (req, res) => {
    try {
      const postId = parseInt(req.params.id);
      const userId = req.user.claims.sub;
      const share = await storage.shareNewsfeedPost({
        postId,
        userId,
        shareMessage: req.body.shareMessage,
        sharedTo: req.body.sharedTo || "timeline"
      });
      res.json(share);
    } catch (error) {
      console.error("Error sharing post:", error);
      res.status(500).json({ message: "Failed to share post" });
    }
  });
  app2.get("/api/crews/public", isAuthenticated, async (req, res) => {
    try {
      const crews2 = await storage.getCrews({ isPublic: true });
      res.json(crews2);
    } catch (error) {
      console.error("Error fetching public crews:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.get("/api/crews/user/:userId", isAuthenticated, async (req, res) => {
    try {
      const crews2 = await storage.getUserCrews(req.params.userId);
      res.json(crews2);
    } catch (error) {
      console.error("Error fetching user crews:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.post("/api/crews", isAuthenticated, async (req, res) => {
    try {
      console.log("Creating crew with data:", req.body);
      const crew = await storage.createCrew(req.body);
      console.log("Crew created:", crew);
      await storage.joinCrew({
        crewId: crew.id,
        userId: req.body.founderId,
        role: "founder",
        contributionLevel: "core"
      });
      res.json(crew);
    } catch (error) {
      console.error("Error creating crew:", error);
      console.error("Error details:", error.message);
      res.status(500).json({ message: "Internal server error", error: error.message });
    }
  });
  app2.post("/api/crews/:crewId/join", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const membership = await storage.joinCrew({
        crewId: parseInt(req.params.crewId),
        userId,
        role: "member",
        contributionLevel: "casual"
      });
      res.json(membership);
    } catch (error) {
      console.error("Error joining crew:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  return app2;
}

// server/vite.ts
import express2 from "express";
import fs from "fs";
import path3 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path2 from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path2.resolve(import.meta.dirname, "client", "src"),
      "@shared": path2.resolve(import.meta.dirname, "shared"),
      "@assets": path2.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path2.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path2.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path3.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path3.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express2.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path3.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express3();
app.use(express3.json({ limit: "10mb" }));
app.use(express3.urlencoded({ extended: false, limit: "10mb" }));
app.use((req, res, next) => {
  const start = Date.now();
  const path4 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path4.startsWith("/api")) {
      let logLine = `${req.method} ${path4} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  const server = createServer(app);
  const wss = new WebSocketServer({ server, path: "/ws" });
  wss.on("connection", (ws2, req) => {
    console.log("Client connected to WebSocket");
    ws2.on("message", async (data) => {
      try {
        const message = JSON.parse(data.toString());
        if (message.type === "chat_message") {
          wss.clients.forEach((client2) => {
            if (client2 !== ws2 && client2.readyState === WebSocket.OPEN) {
              client2.send(JSON.stringify({
                type: "new_message",
                ...message.data
              }));
            }
          });
        }
      } catch (error) {
        console.error("WebSocket message error:", error);
      }
    });
    ws2.on("close", () => {
      console.log("Client disconnected from WebSocket");
    });
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 5e3;
  server.listen(port, "0.0.0.0", () => {
    log(`serving on port ${port}`);
  });
})();
