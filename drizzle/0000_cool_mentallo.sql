CREATE TABLE IF NOT EXISTS "subscribers" (
	"id" char(7) PRIMARY KEY NOT NULL,
	"resend_id" uuid,
	"email" varchar(255) NOT NULL,
	"first_name" varchar(255) NOT NULL,
	"last_name" varchar(255),
	"verified" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp,
	CONSTRAINT "subscribers_resend_id_unique" UNIQUE("resend_id"),
	CONSTRAINT "subscribers_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "idx_subs_contact_id" ON "subscribers" USING btree ("resend_id");