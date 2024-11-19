ALTER TABLE "user" ADD COLUMN "posts" integer[] DEFAULT '{}';--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN IF EXISTS "handicap";